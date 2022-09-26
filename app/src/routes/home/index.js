"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); // 이는 렌더링을 하는 파일 경로를 나타내기 위한 것
 
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;