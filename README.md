# Test Agent Server

This repository contains the server implementation for the test agent.

## Overview
This Express server is responsible for handling API requests, providing a basic health check, and exposing the Swagger documentation.

## Features
- **Basic Endpoint**: A root route (`/`) that returns a simple welcome message.
- **Ping Endpoint**: A `/ping` endpoint that responds with a 'pong' message, indicating the server is running.
- **Swagger Documentation**: Integrated Swagger UI for easy API documentation via the `/api-docs` endpoint.

## Installation
To run the server, you need Node.js installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/shk1447/test.agent.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd test.agent
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the server:**
    ```bash
    node server.js
    ```

## API Endpoints
- **GET /**: Returns a welcome message.
- **GET /ping**: Returns a 'pong' response.
- **GET /api-docs**: Exposes the Swagger UI documentation.

## Dependencies
- `express`
- `swagger-ui-express`
- `swagger.json` (Requires a swagger definition file)

---

**Last Updated:** [오늘 날짜]