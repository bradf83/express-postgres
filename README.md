# First Express JS App

An API server using Express + PostGreSQL

## TODO

* Add a scope or two, try combining scopes.
* Implement full crud for companies
* Router catch all?  For example getting a path that does not exist.
* Error handling (Validation.JS)
* Model
* Best Practices
* Security
* Testing
* Look into (compression, express-validator)
* CSRF?

## Additional Reading

* ORMs (Sequelize, TypeORM, Objection.js)
* REST vs JSONAPI vs GraphQL
* Security

## Using

* cors for CORS middleware
* helmet for additional security middleware

## Notes

Migrations don't seem to be something that automatically run on startup

- Look into umzug for running migrations, other approaches?
  - Run on startup
  - Check sum