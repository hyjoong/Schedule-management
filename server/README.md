#### Schedule Mangement : Server

<br>

### π κ°μ

μΌμ κ΄λ¦¬ νλ‘μ νΈ μλ² λλ ν λ¦¬μλλ€.

<br>

### π¨ κΈ°μ μ€ν

- Node Js
- Express
- Mongoose

<br>

```javascript
mv .envsample .env
yarn
yarn start
```

## Schema

#### User

```javascript
{
  name: String;
  email: String;
  password: String;
}
```

#### Schedule

```javascript
{
  title: String;
  userId: String;
  name: String;
  start: Date;
  end: Date;
}
```

#### Schedule

```javascript
{
  userId: String;
  name: String;
  text: String;
  image: {
    data: Buffer,
    contentType: String
  }
}
```
