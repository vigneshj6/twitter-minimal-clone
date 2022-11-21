npm run build

npx typeorm-ts-node-esm migration:generate ./src/migrations/create-base-tables -d ./src/data-source.ts

npx typeorm-ts-node-esm migration:run -d ./src/data-source.ts

npx ts-node dist