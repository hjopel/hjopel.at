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

# data "terraform_remote_state" "tf_state" {
#   backend = "gcs"
#   config = {
#     bucket = "tf-state-bucket"
#     prefix = "hjopel"
#   }
# }

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

module "cloud_run" {
  source     = "./fabric/modules/cloud-run-v2"
  project_id = local.project_id
  region     = "europe-west1"
  name       = "portfolio"
  containers = {
    portfolio = {
      image = "us-docker.pkg.dev/cloudrun/container/hello"
    }
  }
  iam = {
    "roles/run.invoker" = ["allUsers"]
  }
}

module "docker_artifact_registry" {
  source     = "./fabric/modules/artifact-registry"
  project_id = local.project_id
  name       = "hjopel"
  location   = "europe-west1"

}

module "gh_actions_service_account" {
  source     = "./fabric/modules/iam-service-account"
  project_id = local.project_id
  name       = "gh-actions"

  iam_project_roles = {
    "hjopel-playground" = [
      # "roles/storage.admin",
      "roles/run.developer",
      "roles/artifactregistry.createOnPushWriter"
    ]
  }
}