# Schedule Mangement

#### 일정관리 웹 프로젝트 입니다.

<br>

### [VScode로 Code 보기](https://github1s.com/hyjoong/Schedule-management)

<br>

## ⚡️ Skills

---

#### Frontend

- react
- Styled Components
- redux-saga

#### Backend

- Node Js
- Express

#### DB

- MongoDB
- Mongoose

#### 인증

- jwt
- bcrypt

#### UI Framework

- Antd Design

#### Library

- fullcalendar
- datepicker

<br>

### 🥫[PostmanAPI](https://documenter.getpostman.com/view/14760695/UV5afvbH)

<br>

## ⭐실행 순서

```javascript
git clone <repo address>

// server 실행
cd server
mv .envsample .env
yarn
yarn start

서버 정상 실행 시
```

![](https://images.velog.io/images/hyunjoong/post/752fd4f7-1d91-4b12-ab59-7e12244d7d5a/image.png)

#### .env File 수정

```javascript
 JWT_SECRET=  본인의 JWT SECRET KEY 입력
 DB_HOST = 본인의 Mongo Url
 DB_PASSWORD = 본인의 Mongo DB Password 입력
```

```javascript
// client 실행

cd ..        // root 경로로 이동
cd client
yarn
yarn start
```

<br>
<br>

## 👓 실행 화면

<br>

## 회원가입

![](https://images.velog.io/images/hyunjoong/post/86306863-3c75-467f-84e2-e18f0ed457b0/image.png)

#### 이메일, 비밀번호, 아이디 값을 입력해서 회원가입을 합니다.

<br>

## 로그인

![](https://images.velog.io/images/hyunjoong/post/999bc8da-b3e6-425b-9bbd-8fad0c769a14/image.png)

#### 아이디,비밀번호 값을 입력해서 로그인을 합니다.

<br>

![](https://images.velog.io/images/hyunjoong/post/7ca40edd-d9fb-4b01-b094-74d2a05e1782/image.png)

#### 로그인이 성공하면 로그인 한 유저의 계획을 Load 합니다.

<br>

## Calendar 메뉴

![](https://images.velog.io/images/hyunjoong/post/1263fa4d-dbcd-4db2-815e-c89ff36398f2/image.png)

#### 로그인한 유저의 계획을 받아오고 계획들이 달력에 표시 됩니다.

<br>

#### 달력을 클릭하면 모달창이 열리며 일정 시작 날짜,종료 날짜, 계획을 입력해서 계획을 추가할 수 있습니다.

![](https://images.velog.io/images/hyunjoong/post/31e90e2c-9b88-4c00-be6f-c2f556bb3366/image.png)

## Schedule 메뉴

![](https://images.velog.io/images/hyunjoong/post/365633ce-63dd-401d-b547-9849d0674724/image.png)

#### Schedule 메뉴로 이동해서 계획들의 D-Day를 볼 수 있고 삭제하고 싶은 계획은 삭제 버튼을 눌러서 삭제할 수 있습니다.(날짜가 지난 계획들은 D+로 표시)

<br>
