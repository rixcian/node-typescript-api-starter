# Node Typescript REST API Starter

## Used Technologies
- Node.js
- Typescript
- Express.js
- MikroORM
- Passport
- PostgreSQL
- Prettier

## Development
1. Clone this repo
2. Install dependencies with `yarn install`
3. Create `.env` file in root of the project
4. Copy these environment variables & update them in `.env`
    ```dotenv
    PORT=8000
    DB_NAME=apidb
    DB_USER=postgres
    DB_PASSWORD=secret
    DB_TYPE=postgresql
    ```
5. If you're using different DB than PostgreSQL run these commands
   ```markdown
   1. Remove @mikro-cli/postgresql package
       - `yarn remove @mikro-cli/postgresql`
   2. Install different DB driver (https://mikro-orm.io/docs/installation/)
       - e.g. `yarn add @mikro-cli/mysql`
   ```
6. Run migrations 
7. Run project in development mode with `yarn dev`

## Deployment

1. Clone this repo to deployment server
2. Install dependencies `yarn install`
3. Create `.env` file in root of the project
4. Copy these environment variables & update them in `.env`
    ```dotenv
    PORT=8000
    DB_NAME=apidb
    DB_USER=postgres
    DB_PASSWORD=secret
    DB_TYPE=postgresql
    ```
5. Build app with `yarn build`
6. Create `frontend` folder inside `./dist`
7. Copy built React app into `./dist/frontend` folder


## Commands


## Linters
