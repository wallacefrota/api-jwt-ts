### Example how to use JWT with TypeScript

- [ x ]  Route to authenticate/login
- [ x ]  Middleware to verify permission access route
## Tech Stack

**Server:** Node, Express


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## API Reference

#### Authenticate

```http
  POST /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Get all customers

```http
  GET /customers/list-customers
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization bearer` | `string` | **Required**. Token Jwt by user permission |

#### Get all contracts

```http
  GET /admin/contracts
```

| Header | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization bearer` | `string` | **Required**. to access route, permission |



## Author

- [@frotawallace](https://www.github.com/wallacefrota)
