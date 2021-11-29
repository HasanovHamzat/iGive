
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const path = require('path');
const bcrypt = require("bcryptjs");

// require('dotenv').config({ path: .${ process.env.NODE_ENV }.env });
require('dotenv').config();

//redis
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();

const signupRouter = require('./src/routes/signup.router');
const loginRouter = require('./src/routes/login.router');
const userRouter = require('./src/routes/user.router');
const hospitalRouter = require('./src/routes/hospital.router');
const addressApi = require('./src/routes/addressApi.router');

//session config
const sessionsConf = {
  store: new RedisStore({ host: 'localhost', port: 6379, client: redisClient }),
  key: 'sid', // ключ куки (название куки)
  secret: process.env.SECRET, // для шифрования id сессии
  resave: true, // сессия будет сохраняться заново только при изменениях
  saveUninitialized: false, // сохранение (или не сохранение) не инициализированной сессии
  httpOnly: true, // невозможно изменить куку с фронта
  cookie: { expires: 24 * 60 * 60e3 },
};
const app = express();
const PORT = process.env.PORT || 3005;

app.use(
  cors({
    origin: 'http://localhost:3000', // <-- location of the react app we're connecting to
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//session middleware
app.use(session(sessionsConf));

const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.static(path.join(process.env.PWD, 'public')));


app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/hospital', hospitalRouter);
app.use('/addressApi', addressApi);

app.listen(PORT, () => {
  console.log(`Server has launched on port ${PORT}`);
});
