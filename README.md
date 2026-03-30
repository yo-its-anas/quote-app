# Quote App (React + Node + Docker)

## Description

A simple 2-tier app using:

* React frontend
* Node/Express backend
* Docker Compose

---

## Architecture

* Frontend → Port 3000
* Backend → Port 5000

---

## API

```bash
GET /api/quote
```

---

## How services talk

Frontend calls backend using:

```bash
http://backend:5000/api/quote
```

(`backend` = service name in docker-compose)

---

## Run the app

```bash
docker compose up --build
```

---

## Open in browser

* http://localhost:3000
* http://localhost:5000/api/quote

---

## Stop

```bash
docker compose down
```
