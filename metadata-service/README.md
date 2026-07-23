# Metadata Service

## What this service does
This service gives common data like:
- fare rate (price per ride)
- peak multiplier (extra price in busy time)

## Why Redis?
We use Redis because it is very fast (data is stored in RAM).
When many users use the app at the same time, Redis helps respond quickly.

## How it works
- First, it tries to get data from Redis
- If Redis is not working or empty, it uses default values

## Fallback logic
If Redis fails:
- service still runs
- returns default values
- app does not crash

## Tech stack 
- Node.js : used to run the service
- Express : used to create API endpoints
- Redis : used to store data in memory for fast access

## How to run the project
docker compose up --build
