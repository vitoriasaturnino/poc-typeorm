npm init 
npm install express
npm install typescript ts-node-dev @types/express --save-dev
npm i tsc-init
tsc --init
mkdir src
cd src
touch server.ts
"
  import express from "express";
  const app = express();

  app.listen(3000, () => console.log("Server is runnin localhost:3000"));
"
in package.json "
  "scripts": {
    "dev": "ts-node-dev --transpile-only src/server.ts"
  },
"
cd ..
touch .gitignore "
  nodemodules
"

Config typeorm
npm install typeorm reflect-metadata pg
in /src/server.ts "
  import "reflect-metadata;
"
add ao .env "
  DB_URL = postgres://dlcfpzfp:nbCS0Wrxv08YNrwwaM7b2vezxselrzRe@babar.db.elephantsql.com/dlcfpzfp
"
in package.jso add script to initialize typeorm cli "
   "typeorm": "ts-node-dev node_modules/.bin/typeorm"
"

Create migrations
migration
npm run typeorm migration:create -n ./src/database/migrations/CreateTableCategories
npm run typeorm migration:create -n ./src/database/migrations/CreateTableVideos
migrate
ts-node ./node_modules/.bin/typeorm migration:run -d ./src/data-source.ts
reverte migrate
ts-node ./node_modules/.bin/typeorm migration:revert -d ./src/data-source.ts
