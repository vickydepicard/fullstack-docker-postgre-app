🌐 Fullstack Docker App

Une application full-stack Node.js + PostgreSQL conteneurisée avec Docker Compose, orchestrée avec NGINX, et monitorée avec des Healthchecks Docker.

📦 Stack Technique

Backend : Node.js (Express)

Base de données : PostgreSQL 15

Reverse Proxy : NGINX (Alpine)

Orchestration : Docker Compose (v3.9)

Monitoring : Docker HEALTHCHECK (curl, pg_isready, wget)

🚀 Démarrage rapide

git clone https://github.com/vickydepicard/fullstack-docker-app.git
cd fullstack-docker-app
docker-compose up --build

Accès aux services :

📡 API : http://localhost:3000

🌐 Via NGINX : http://localhost:8080

🐘 PostgreSQL : port 5432 (admin/adminpass)

📂 Structure du projet

fullstack-docker-app/
├── backend/
│   ├── app.js
│   ├── Dockerfile
│   └── package.json
├── nginx/
│   └── default.conf
├── docker-compose.yml
├── .env.example
└── README.md

⚙️ Variables d’environnement

# .env.example
POSTGRES_USER=admin
POSTGRES_PASSWORD=adminpass
POSTGRES_DB=mydb

Copiez ce fichier en .env et adaptez les valeurs si nécessaire.

🩺 Healthchecks configurés

🔁 Backend :

HEALTHCHECK CMD curl -f http://localhost:3000/ || exit 1

🐘 PostgreSQL :

test: ["CMD", "pg_isready", "-U", "admin"]

🌐 NGINX :

test: ["CMD", "wget", "--spider", "-q", "http://localhost"]

🧠 Points clés

Utilisation de Docker Compose pour gérer 3 services : backend, base de données, proxy

Optimisation d'image avec Dockerfile multistage

Routage du trafic via NGINX vers le backend

Tests de santé automatisés avec HEALTHCHECK Docker

Variables sensibles déplacées dans un fichier .env

Architecture modulaire, réutilisable pour tout projet Node.js

📄 Licence

MIT © vickydepicard


