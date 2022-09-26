"use strict";

//여기서 렌더링이 이루어 지는데 처음에 app.js에서 경로를 ./views로 잡았기 때문에 이후 redner를 통해 js파일을 보여준다.
const output = {
    home : (req, res) => {
        res.render("home/index");  // 이게 곧 app.js에 있었던 app.set("views", "./src/views"); 과 이어지는 것
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["woorimIT", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        
        return res.json({
            success:false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};


module.exports = {
    output,
    process,
};