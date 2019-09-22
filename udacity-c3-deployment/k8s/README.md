# Udagram Monolith to Microservices at Scale Kubernetes Cluster

## Tasks

### Setup Kubernetes environment
You will need to install the kubectl command. Open a new terminal within the project directory and run:

1. Generate encrypted values for aws credentials, Database User Name, and Database Password using bcrypt and put the values into aws-secret.yaml and env-secret.yaml files
2. Load secret files: 
	a. `kubectl apply -f aws-secret.yaml`
	b. `kubectl apply -f env-secret.yaml`
3. Load config map: `kubectl apply -f env-configmap.yaml`
4. Apply Deployments:
	a. `kubectl apply -f backend-feed-deployment.yaml`
	b. `kubectl apply -f frontend-deployment.yaml`
	c. `kubectl apply -f backend-user-deployment.yaml`
5. Apply Services:
	a. `kubectl apply -f backend-feed-service.yaml`
	b. `kubectl apply -f backend-user-service.yaml`
	c. `kubectl apply -f frontend-service.yaml`
6. Deploy reverse proxy, has to be done after the services are running:
	a. `kubectl apply -f reverseproxy-deployment.yaml`
	b. `kubectl apply -f reverseproxy-service.yaml`
7. Perform port forwarding (each needs to be run in a separate terminal window and left running)
	a. `$ kubectl port-forward service/frontend 8100:8100`
	b. `kubectl port-forward service/reverseproxy 8080:8080`


# Check Status:
1. `kubectl get nodes`
2. `kubectl get pod --all-namespaces`
3. `kubectl get svc`
4. `kubectl get configmaps`
5. `kubectl get secrets`
6. `kubectl describe secret/env-secret`

