# Express REST Application Template
This project aims to be an scaffolding for medium size REST API with the Node stack.
```bash
degit github:rdev32/express-rest-app project-name
```
### Installation
Install degit with `npm install -g degit`
### Modules
This template uses mainly the following modules
- Prisma ORM
- Express
- JWT
- Jest
- Eslint
- Prettier
- Typescript

*along many other modules that will help you build a medium size REST API*
### Scripts
| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm start`           | Launches the project in production.              |
| `npm dev`             | Launches the project in development mode.        |
| `npm build`           | Transpiles the project ready for production.     |
| `npm format`          | Formats the entire code as configured.           |
| `npm lint`            | Runs ESLint to check the project files.          |
| `npm test`            | Runs Jest tests.                                 |
| `npm coverage`        | Runs Jest tests and generates a coverage report. |
| `npm prisma:reset`    | Resets the Prisma migrations.                    |
| `npm prisma:deploy`   | Generates a migration for deployment             |
| `npm prisma:migrate`  | Runs Prisma migrations in development mode       |
| `npm prisma:generate` | Generates Prisma client.                         |
| `npm prisma:seed`     | Seeds the Prisma database.                       |
| `npm prisma:format`   | Formats the Prisma schema.                       |

### Database
If you need a database, I made a repository with a lot of docker [recipees](https://github.com/rdev32/dockerfiles) available

### Contribute
Please feel free to submit an issue for suggestions and such.
