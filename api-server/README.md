## API

> This starter kit provides the basic API you will need to complete your coding challenge. See [Using the REST API](#using-the-rest-api) for more information.

### Quick start

#### 1. Run `npm install`

This will install all dependencies (listed in `package.json`) necessary to get the API up and running.

#### 2. Run `npm run api`

`npm run api` will start [json-server](https://github.com/typicode/json-server) to provide a stubbed out REST API through `localhost:9000`.

> Note: On occasion you may find the port 9000 is already in use. You can change this in the package.json.

## Using the REST API

> Note: Ensure that you've started the API server with `npm run api`.

A REST API is provided with seed data for blog posts and comments. The REST API returns and accepts JSON. Changes made to the "database" will persist as long as the API is running on `localhost:9000`.

**Base path:** http://localhost:9000

**GET** `/posts` _List all blog posts_<br>
**GET** `/posts/{id}` _View single blog post_<br>
**GET** `/posts/{id}/comments` _List all comments for single blog post_<br>
**POST** `/posts/{id}/comments` _Add comment to single blog post_<br>
**PUT** `/comments/{id}` _Update single comment_<br>
