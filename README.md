## About project

Projects is example of small Node.js service which acts as REST API with custom in-memory database and memcached cache. **Feel free to use it as reference or fork it!**

Postman collection: [Endpoints collection](https://www.postman.com/restaurant-backend-developers-team/memcached-with-node)

## Installation

Use the npm package manager to install dependencies

```bash
npm i
```

Create docker container with memcached with **default port**

```bash
docker run --name my-memcached -d memcached
```

## Run

```bash
npm run start
```

## How it works

Every time client requests Express API cached endpoint, API searches for cached query in memcached. If it's available it's returned, if not, it's downloaded from artificially slowed in-memory database and cached again in background. If you run API you will see if some data was cached or not (CACHE HIT/MISS) inside logs.

Here's flowchart of process:

```mermaid
flowchart TD
    A["Express API"] <--> n1["Memcached container"] & n2["In-memory database"]
    n3["Client"] <--> A

    n3@{ shape: rect}
    style A stroke:#2962FF
    style n1 stroke:#00C853
    style n2 stroke:#FFD600
    style n3 stroke:#616161
```
