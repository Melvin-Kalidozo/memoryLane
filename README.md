<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



# MemoryLane

## Description  
MemoryLane is a personal memory archive where users can create, store, update, and retrieve memories, tagged with relevant details like emotions, people, locations, and events.

## Key Features  

### User Authentication  
- Users can register and log in using JWT authentication to securely store and access their personal memories.

### Memory CRUD Operations  
- **Create a Memory**: Users can add a new memory with a title, description, date, location, and tags (people, events, places).  
- **Update a Memory**: Edit existing memories to update descriptions, tags, or attached media.  
- **Delete a Memory**: Users can remove memories from their archive.  
- **View Memories**: Retrieve a list of all memories or view a specific one.

### Memory Tagging  
- Memories can be tagged with emotions (happy, sad, exciting, nostalgic), people, locations, and events (e.g., birthdays, vacations).

---

## Entities  

### User Entity  
- **Fields**: `id`, `username`, `email`, `password`  
- **Relationship**: One-to-Many with Memories (each user can have many memories)

### Memory Entity  
- **Fields**: `id`, `title`, `description`, `emotion`, `date`, `location`, `tags` (array of strings), `mediaUrl`  
- **Relationships**:  
  - Many-to-One with User (a memory belongs to a user)  
  - Many-to-Many for tags (people, places, events)

### Tag Entity (Optional)  
- **Fields**: `id`, `name`  
- Tags include emotions, people, locations, or special events.

---

## API Endpoints  

### Authentication  
- `POST /auth/register`: Register a new user.  
- `POST /auth/login`: Log in and receive a JWT token.

### Memory Routes  
- `POST /memories`: Create a new memory (title, description, date, location,feeling).  
- `GET /memories`: Get all memories for the logged-in user.  
- `GET /memories/:id`: Get a specific memory. 
- `GET /memories/location/:location`: Get a specific by location.  
- `GET /memories/title/:title`: Get a specific title.   
- `Get /memories/feeling/:feeling`: Update a feeling.
- `PATCH /memories/:id`: modify a memory.  
- `DELETE /memories/:id`: Delete a memory.

### User Routes  
- `POST /users`: Create a new user.
- `GET /users:` Get all users (admin access).
- `GET /users/`:id: Get a specific user by ID.
- `GET /users/username/:username` : Get a user by username.
- `GET /users/email/:email` : Get a user by email. 
- `PATCH /users/:id` : Modify a user by ID.
- `DELETE /users/:id` : Delete a user by ID.

---


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
