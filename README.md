## About project

Projects is example of small Node.js service which acts as API with custom in-memory database and memcached cache.

## Installation

Use the npm package manager to install dependencies

```bash
npm i
```

## Run

```bash
### development mode
npm run dev

### production mode
npm run start
```

## How it works

Every time client requests micro API, it searches for cached query in memcached. If it's available it's returned, if not, it's downloaded from slow in-memory database and cached again.

## Roadmap

-  fetch data from API and store inside DB
-  create fake timeout while accessing each entity in database
-  create HTTP GET endpoints for every entity
-  create memcached abstraction layer for saving entities into cache
-  add logging where needed
-  add simple unit tests for database and memcached layers
