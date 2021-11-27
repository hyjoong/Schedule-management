 # 💻 서버 실행

```javascript
cd server
mv .envsample .env
yarn    
yarn start

```

## 🎉 서버 정상 실행 시 
![](https://images.velog.io/images/hyunjoong/post/752fd4f7-1d91-4b12-ab59-7e12244d7d5a/image.png)


## .env File
```javascript
 JWT_SECRET=  본인의 JWT SECRET KEY 입력
 DB_HOST = 본인의 Mongo Url
 DB_PASSWORD = 본인의 Mongo DB Password 입력
```

## Schema

#### Plan

{
title : String,
userId : String
name : String
start : String
end : String
}

#### User

{
name : String
email : String
password : String
}
