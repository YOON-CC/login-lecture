"use strict";

//실행을 위해 필요한 것
const express = require("express"); 
const app = express();

//앱 세팅
app.set("views", "./src/views");  // ./views에 존재하는 js파일(프론트)을 찾을 것이다. 그러기 위해서는 먼저 get, render를 해야하는데...
app.set("view engine", "ejs"); 

const home = require('./src/routes/home'); // get을 찾기위해 이동
app.use("/", home); // 미들 웨어를 등록해주는 메서드   // 결국 이것을 통해서 routes/home까지 들어왔고 이후 js파일중 index.js에 먼저 접근이 된다. ㅋ

module.exports = app; // 여기서 exports를 한 이유는 이제 포트지정 및 로그를 띄우기위한 것이 다른 파일에 있기때문에 그 파일에서 이것을 사용하게 하기 위해 밖으로 내보낸 것이다.na