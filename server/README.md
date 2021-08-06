### Auth

```
User Schema
{
    username: string,
    password: string,
    email:string,
    nickname: string
}
```

### signup

#### Request

```
{
    username,
    password,
    email,
    nickname
}
```

#### Response

```
{
    token,
    username
}
```
