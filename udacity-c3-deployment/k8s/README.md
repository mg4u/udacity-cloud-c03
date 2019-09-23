# Udagram Monolith to Microservices at Scale Kubernetes Cluster

## Tasks

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
	- `$ kubectl port-forward service/frontend 8100:8100`
	- `kubectl port-forward service/reverseproxy 8080:8080`


### Check Status:
1. `kubectl get nodes`
2. `kubectl get pod --all-namespaces`
3. `kubectl get svc`
4. `kubectl get configmaps`
5. `kubectl get secrets`
6. `kubectl describe secret/env-secret`

