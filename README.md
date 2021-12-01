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
3. Rename `.env.sample` to `.env`
4. Update variables in `.env` file
5. If you're using different DB than PostgreSQL run these commands
   ```markdown
   1. Remove @mikro-cli/postgresql package
       - `yarn remove @mikro-cli/postgresql`
   2. Install different DB driver (https://mikro-orm.io/docs/installation/)
       - e.g. `yarn add @mikro-cli/mysql`
   3. Update `DB_TYPE` variable in `.env` file
   ```
6. Run migrations
7. Run project in development mode with `yarn dev`

## Deployment

1. Clone this repo to deployment server
2. Install dependencies `yarn install`
3. Rename `.env.sample` to `.env`
4. Update variables in `.env` file
5. Build app with `yarn build`
6. Create `frontend` folder inside `./dist`
7. Copy built React app into `./dist/frontend` folder


## Commands
All commands are specified inside `package.json` file

### `yarn dev`
Running app in `development` mode (auto-compile & auto-restart after change). 

### `yarn build`
Builds app into `dist` folder

### `yarn start`
Running built app from `dist` folder

### `yarn entities:generate`
Generates entities from DB & saves them into `src/db/entities` folder

### `yarn migration:create`
Creates a new migration file (in `src/db/migrations`) witch applied changes inside entities

### `yarn migration:up`
Applies all (not applied) migrations to DB

## Linters
`TODO`
