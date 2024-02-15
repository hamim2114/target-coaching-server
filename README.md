
## Some API Reference

#### For Login

```http
  POST https://targetcoachingserver.vercel.app/api/auth/login
```

#### For Register
```http
  POST https://targetcoachingserver.vercel.app/api/auth/register
```

#### Publish Blog Post

```http
  POST https://targetcoachingserver.vercel.app/api/blog
```

| Token | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `jwt_token` | `string` | **Required** : Json Web Token from cookies |

#### Get All Blog Post

```http
  GET https://targetcoachingserver.vercel.app/api/blog
```


#### Get Single Post

```http
  GET https://targetcoachingserver.vercel.app/api/blog/64ba52474d86dcc091091235
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required** : Id of item to fetch |



