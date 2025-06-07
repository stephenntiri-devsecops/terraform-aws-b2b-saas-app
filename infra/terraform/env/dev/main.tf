
provider "aws" {
  region = var.region
}

module "vpc" {
  source = "../../modules/network"
  cidr_block = "10.0.0.0/16"
}

output "vpc_id" {
  value = module.vpc.vpc_id
}
