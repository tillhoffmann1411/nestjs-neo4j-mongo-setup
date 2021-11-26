[NestJS Docker](https://blog.logrocket.com/containerized-development-nestjs-docker/)
[Neo4j Docker](https://thibaut-deveraux.medium.com/how-to-install-neo4j-with-docker-compose-36e3ba939af0)

After installing a new npm package use this command to sync:
  ```docker-compose up --build -V```
  
# Setup
1. Install [Docker](https://www.docker.com/products/docker-desktop)
2. Install [npm](https://nodejs.org/en/download/)
3. Create a `.env` File in the root directory which looks like this (change the usernames and passwords!) (you can also simply copy the `.env-example` file and customize it)
    
    ```
    SERVER_PORT=3000
    
    # Neo4j configuration
    NEO4J_SCHEME=neo4j
    NEO4J_HOST=neo4j
    NEO4J_PORT=7687
    NEO4J_USERNAME=neo4j
    NEO4J_PASSWORD=neo
    
    # Mongo configuration
    MONGO_DATABASE=mongodb_example
    MONGO_PORT=27017
    MONGO_USERNAME=root
    MONGO_PASSWORD=example
    ```
    
4. Install required packages in the api folder
    
    ```bash
    cd api
    npm install
    ```
    
5. Run in the root directory
    
    ```bash
    cd ..
    docker-compose up
    ```
    
    This will pull all necessary Docker images and creating the corresponding containers.
    
6. The Server and all databases should now run. You can access the api via [http://localhost:3000](http://localhost:3000)