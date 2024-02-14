
# target-coaching-server



## 🛠 Tech Used

- Node JS
- Express JS
- MongoDB
- Mongoose
- Cloudinary
- Jsonwebtoken
- Multer
- Nodemailer


## Some API Reference

#### Post Blog Post

```http
  POST https://targetcoachingserver.vercel.app/api/blog/
```

| Token | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `jwt_token` | `string` | **Required**. Json Web Token |

#### Get All Blog Post

```http
  GET https://targetcoachingserver.vercel.app/api/blog
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|  | `string` | Get All Blog Post |

#### Get Single Post

```http
  GET https://targetcoachingserver.vercel.app/api/blog/64ba52474d86dcc091091235
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



