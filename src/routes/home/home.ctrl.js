"use strict";

//여기서 렌더링이 이루어 지는데 처음에 app.js에서 경로를 ./views로 잡았기 때문에 이후 redner를 통해 js파일을 보여준다.
const home = (req, res) => {
    res.render("home/index"); 
}

const login = (req, res) => {
    res.render("home/login");
}

module.exports = {
    home,
    login,
}