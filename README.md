# Express REST Application Template
This project aims to be an scaffolding for medium size REST API with the Node stack.
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
| Script          | Command                                                |
|-----------------|--------------------------------------------------------|
| start           | node build                                             |
| dev             | nodemon --watch src -e ts --exec "ts-node src"         |
| build           | tsc                                                    |
| format          | prettier --write .                                     |
| lint            | eslint . --ext .ts                                     |
| test            | jest .                                                 |
| coverage        | jest --coverage                                        |
| prisma:reset    | prisma migrate reset                                   |
| prisma:migrate  | prisma migrate dev --name init                         |
| prisma:deploy   | prisma migrate deploy --name deploy                    |
| prisma:generate | prisma generate                                        |
| prisma:seed     | prisma db seed                                         |
| prisma:format   | prisma format                                          |

### Database
If you need a database, I made a repository with a lot of docker [recipees](https://github.com/rdev32/dockerfiles) available

### Contribute
Please feel free to submit an issue for suggestions and such.