"use stricts";

const id = document.querySelector("#id"),
 psword = document.querySelector("#psword"),
 loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword: psword.value,
    };
    //fetch 그리고 POST(요청)을 통해 서버에 전달을 한다.
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success){
                location.href = "/";
            }else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
}
