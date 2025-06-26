# Proyecto Kubernetes Local - Frontend + Backend

![Diagrama de Arquitectura](./diagrams/arquitectura.png) *(opcional)*

## 🔍 Descripción
Proyecto de prueba con:
- **Frontend**: Servidor Node.js (puerto 32000)
- **Backend**: API Node.js (puerto 32001)
- **Kubernetes**: Configuración local con Minikube

## ⚙️ Requisitos
- Docker
- Minikube (`minikube start`)
- kubectl

## 🚀 Despliegue Rápido

```bash
# Iniciar cluster
minikube start

# Construir imágenes Docker
eval $(minikube docker-env)
docker build -t frontend ./frontend/frontend-app
docker build -t backend ./backend/backend-app

# Aplicar configuraciones Kubernetes
kubectl apply -f frontend/kuber-deploy/
kubectl apply -f backend/kuber-deploy/

# Verificar estado
kubectl get pods
kubectl get services
