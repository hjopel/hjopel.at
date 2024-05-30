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
  project = "hjopel-playground"
  region  = "europe-west1"
}

module "bucket" {
  source     = "./fabric/modules/gcs"
  project_id = "hjopel-playground"
  name       = "tf-state-bucket"
  location   = "EU"
  versioning = true
  prefix     = "hjopel"
}

module "cloud_run" {
  source     = "./fabric/modules/cloud-run-v2"
  project_id = "hjopel-playground"
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