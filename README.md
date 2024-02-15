
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

#### For Login

```http
  POST https://targetcoachingserver.vercel.app/api/auth/login
```
#### Body
| _Key | _Type     | _Required                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | true |
| `password` | `string` | true |

#### For Register
```http
  POST https://targetcoachingserver.vercel.app/api/auth/register
```
#### Body
| _Key | _Type     | _Required                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | true |
| `email` | `string` | true |
| `password` | `string` | true |
| `ruls` | `string` | true |

#### Publish Blog Post

```http
  POST https://targetcoachingserver.vercel.app/api/blog
```

#### Body
| _Key | _Type     | _Required                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | true |
| `body` | `string` | true |
| `img` | `string` | false |
| `imgId` | `string` | false |
#### For Publish Blog Post Required jwt_token from Cookies

#### Get All Blog Post

```http
  GET https://targetcoachingserver.vercel.app/api/blog
```


#### Get Single Post

```http
  GET https://targetcoachingserver.vercel.app/api/blog/id
```

| _Parameter | _Type     | _Required                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | true |



