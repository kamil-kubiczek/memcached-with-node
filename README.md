## About project

Projects is example of small Node.js service which acts as API with custom in-memory database and memcached cache. **Feel free to use it as reference or fork it!**

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

Every time client requests Express API cached endpoint, API searches for cached query in memcached. If it's available it's returned, if not, it's downloaded from artificially slowed in-memory database and cached again in background.

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
