# Assignment 08 – Kubernetes con Minikube, Traefik y ArgoCD

## Captura de la Aplicación

![Aplicación Funcionando](docs/screenshots/app.png)

La aplicación fue desplegada en un clúster local de Kubernetes utilizando Minikube, Docker y Traefik como controlador de rutas.  
Se utilizó una aplicación estática servida con Nginx y expuesta mediante un dominio local.

---

## Acceso a la Aplicación

La aplicación puede verificarse en el siguiente dominio local:

http://app.roberth-herrera.com

---

## Captura de ArgoCD

![ArgoCD Funcionando](docs/screenshots/argocd.png)

ArgoCD fue instalado dentro del clúster y configurado para ser accesible mediante Traefik utilizando el dominio:

http://argo.roberth-herrera.com

---

## Captura de Configuración DNS Local

![Configuración Hosts](docs/screenshots/hosts.png)

Se configuró el archivo `hosts` del sistema operativo para resolver dominios personalizados hacia el clúster de Minikube.

---

## Configuración de DNS Local

Se agregaron las siguientes entradas en el archivo hosts:

```text
127.0.0.1 argo.roberth-herrera.com
127.0.0.1 app.roberth-herrera.com
127.0.0.1 traefik.roberth-herrera.com
```

---

## Manifiestos de las Aplicaciones

Los manifiestos utilizados para desplegar las aplicaciones se encuentran en la carpeta:

```text
manifests/
```

Incluye la configuración de namespaces, Traefik, ArgoCD y la aplicación de la semana 4.

---

## Lista de Comandos Ejecutados

```bash
minikube start --driver=docker --cpus=2 --memory=4096

kubectl apply -f manifests/namespaces.yaml

helm repo add traefik https://traefik.github.io/charts
helm repo update

helm upgrade --install traefik traefik/traefik --namespace traefik -f manifests/traefik/values.yaml

kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/crds/applicationset-crd.yaml --server-side

kubectl patch configmap argocd-cmd-params-cm -n argocd --type merge -p "{\"data\":{\"server.insecure\":\"true\"}}"

kubectl rollout restart deployment argocd-server -n argocd

kubectl apply -f manifests/argocd/ingressroute.yaml

minikube image build -t semana4-app:1.0 ./app

kubectl apply -f manifests/my-app

minikube tunnel
```

---

## Autor

Roberth Herrera