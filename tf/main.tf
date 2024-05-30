locals {
  project_id = "hjopel-playground"
}

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "5.31.1"
    }
  }

  backend "gcs" {
    bucket = "hjopel-tf-state-bucket"
    prefix = "terraform/state"

  }
}

provider "google" {
  project = local.project_id
  region  = "europe-west1"
}

module "bucket" {
  source     = "./fabric/modules/gcs"
  project_id = local.project_id
  name       = "tf-state-bucket"
  location   = "EU"
  versioning = true
  prefix     = "hjopel"
}

module "docker_artifact_registry" {
  source     = "./fabric/modules/artifact-registry"
  project_id = local.project_id
  name       = "hjopel"
  location   = "europe-west1"

}

module "portfolio_service_account" {
  source     = "./fabric/modules/iam-service-account"
  project_id = local.project_id
  name       = "portfolio"


  # Grant gh-actions the serviceAccountUser role on the portfolio service account
  iam = {
    "roles/iam.serviceAccountUser" = [
      "serviceAccount:${module.gh_actions_service_account.email}"
    ]
  }

  iam_project_roles = {
    (local.project_id) = [
      "roles/run.admin",
      "roles/artifactregistry.reader",
      "roles/iam.serviceAccountUser"
    ]
  }
}

module "cloud_run" {
  source          = "./fabric/modules/cloud-run-v2"
  project_id      = local.project_id
  region          = "europe-west1"
  name            = "portfolio"
  service_account = module.portfolio_service_account.email
  containers = {
    portfolio = {
      image = "us-docker.pkg.dev/cloudrun/container/hello"
    }
  }
  iam = {
    "roles/run.invoker" = ["allUsers"]
  }
}

module "gh_actions_service_account" {
  source     = "./fabric/modules/iam-service-account"
  project_id = local.project_id
  name       = "gh-actions"

  iam_project_roles = {
    (local.project_id) = [
      "roles/run.developer",
      "roles/artifactregistry.createOnPushWriter"
    ]
  }
}