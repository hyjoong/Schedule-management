#### Schedule Mangement : Server

<br>

### 🎉 개요

일정관리 프로젝트 서버 디렉토리입니다.

<br>

### 🔨 기술스택

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

#### User

```javascript
{
  name: String;
  email: String;
  password: String;
}
```
