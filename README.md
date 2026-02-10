# Quote App (React + Node + Docker)

## Description
This is a simple 2-tier application built to understand:
- React frontend
- Node/Express backend
- Docker & docker-compose
- Frontend to backend communication

## Architecture
- Frontend: React (Port 3000)
- Backend: Node + Express (Port 5000)

## API Endpoint
GET /api/quote  
Returns a random quote.

## How Frontend talks to Backend
Inside Docker, frontend calls:
http://backend:5000/api/quote

"backend" is the service name defined in docker-compose.

## Run the App
Make sure Docker is installed.

```bash
docker-compose up --build
