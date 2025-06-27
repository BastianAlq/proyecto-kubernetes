# 🚀 Proyecto Kubernetes Local - Frontend + Backend

---

## 🔍 Descripción
Proyecto de prueba con:
- 🖥️ **Frontend**: Servidor Node.js 
- 🔧 **Backend**: API Node.js
- ☸️ **Kubernetes**: Configuración local con Minikube

---

## ⚙️ Requisitos
- 🐳 Docker
- ☸️ Minikube (`minikube start`)
- 🔧 kubectl

---

## 🏗️ Arquitectura

```mermaid
flowchart TB

    subgraph Windows["🪟 Windows"]
        subgraph WSL2["🐧 WSL2"]
            subgraph Minikube["🐳 Minikube - Single Node"]

                ingress["🌐 Ingress<br/>(http://&#8203;re-start.com)"]
                frontendService["⚛️ Frontend Service<br/>(re-start.com/)"]
                backendService["🛠️ Backend Service<br/>(re-start.com/api/random)"]

                subgraph replicas_front["📦 ReplicaSet = 2"]
                    pod1["📦 POD1<br/>(app-front)"]
                    pod2["📦 POD2<br/>(app-front)"]
                end


                subgraph replicas_back["📦 ReplicaSet = 2"]
                    pod3["📦 POD3<br/>(app-backend)"]
                    pod4["📦 POD4<br/>(app-backend)"]
                end

            end
        end
    end

    ingress --> frontendService

    frontendService --> pod1
    frontendService --> pod2

    pod1 --> backendService
    pod2 --> backendService

    backendService --> pod3
    backendService --> pod4
⚡️ Despliegue Rápido
bash
Copiar
Editar
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
