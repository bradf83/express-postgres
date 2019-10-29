# Models

## Getting Started

- Ensure that sequelize-cli is installed (should be already due to yarn install)
```
yarn add sequelize-cli
npx sequelize-cli init
```

Creates a default project structure with a config, migrations, models and seeders directory.

## Generating a model

Generate the basic model.  Associations will be done in a separate migration.

```
npx sequelize-cli model:generate --name Owner --attributes firstName:string,lastName:string
```

### Adding Associations

Generate a migration for an association.

```
npx sequelize-cli migration:generate --name add-some-assocation
```

Add the up and down portions of the migration.  Check the association documentation for more details.

## Run Migrations

1. Run all your migrations using `npx sequelize-cli db:migrate`.
1. Revert a migration by using `npx sequelize-cli db:migrate:undo`.
1. Revert all migrations by using `npx sequelize-cli db:migrate:undo:all`


