# udacity-cloud-c03

# Installing Udagram Project 3 - Microservices at Scale

## Tasks

### Prerequisites
- kubeone v0.9.0 or newer installed, which can be done by following the Installing KubeOne section of the <a href='https://github.com/kubermatic/kubeone/blob/master/README.md'>README</a>
- terraform v0.12.0 or later installed. Older releases are not compatible. The binaries for terraform can be found on the <a href='https://www.terraform.io/downloads.html'>Terraform website</a>
- Instructions for installing kubeone on <a href='https://github.com/kubermatic/kubeone/blob/master/docs/quickstart-aws.md'>AWS</a>


### Creating Infrastructure with terraform 

1. Go to udacity-cloud-c03/udacity-c3-deployment/tf folder
2. See what commands will be made to create infrastructure: `terraform plan`
3. Provision the infrastructure: `terraform apply`
	- Say `yes` to confirm provisioning the infrastructure
4. Create Terraform state file to be parsed by kubeone: `terraform output -json > tf.json`
5. Install Kubernetes using configuration output from Terraform: `kubeone install config.yaml --tfjson tf.json`
6. Setup KUEBCONFIG variable that will be used by kubectl commands, run this command in any terminal window that the kubectl command will be run in
	- `export KUBECONFIG=$PWD/demo2-kubeconfig`

### Setup Kubernetes environment
You will need to install the kubectl command. Open a new terminal within the project directory and run:

1. Generate encrypted values for aws credentials, Database User Name, and Database Password using bcrypt and put the values into aws-secret.yaml and env-secret.yaml files
2. Load secret files: 
	- `kubectl apply -f aws-secret.yaml`
	- `kubectl apply -f env-secret.yaml`
3. Load config map: `kubectl apply -f env-configmap.yaml`
4. Apply Deployments:
	- `kubectl apply -f backend-feed-deployment.yaml`
	- `kubectl apply -f frontend-deployment.yaml`
	- `kubectl apply -f backend-user-deployment.yaml`
5. Apply Services:
	- `kubectl apply -f backend-feed-service.yaml`
	- `kubectl apply -f backend-user-service.yaml`
	- `kubectl apply -f frontend-service.yaml`
6. Deploy reverse proxy, has to be done after the services are running:
	- `kubectl apply -f reverseproxy-deployment.yaml`
	- `kubectl apply -f reverseproxy-service.yaml`
7. Perform port forwarding (each needs to be run in a separate terminal window and left running)
	- `kubectl port-forward service/frontend 8100:8100`
	- `kubectl port-forward service/reverseproxy 8080:8080`


### Check Status:
1. `kubectl get nodes`
2. `kubectl get pod --all-namespaces`
3. `kubectl get svc`
4. `kubectl get configmaps`
5. `kubectl get secrets`
6. `kubectl describe secret/env-secret`

### Continuous Integration / Continuous Development:
- Travis CI is setup to monitor for updates to any branches and will automatically build and deploy the Docker containers.
- For this to work the DOCKER_PASSWORD and DOCKER_USERNAME environment variables had to be set in Travis CI. <a href='https://docs.travis-ci.com/user/docker/'> Instructions for setting this up</a>