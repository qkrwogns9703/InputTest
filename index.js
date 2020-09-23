let register = document.querySelector("#regist");
let userId = document.querySelector("#userId");
let userPass = document.querySelector("#userPass");
let userPass2 = document.querySelector("#userPass2");
let userEmail = document.querySelector("#userEmail");
register.addEventListener("click",function(){
    checkAll();
})
userId.addEventListener("keyup", function(){
    idCheck(document.querySelector("#userId").value);
})
userPass.addEventListener("keyup",function(){
    passCheck(document.querySelector("#userPass").value, document.querySelector("#userPass2").value);
})
userPass2.addEventListener("keyup",function(){
    passCheck(document.querySelector("#userPass").value, document.querySelector("#userPass2").value);
})

function checkAll(){
    let userId = document.querySelector("#userId").value.trim();
    let userPass = document.querySelector("#userPass").value.trim();
    let userPass2 = document.querySelector("#userPass2").value.trim();
    let userEmail = document.querySelector("#userEmail1").value.trim()+document.querySelector("#userEmail2").value;
    let countId = idCheck(userId);
    let countPass = passCheck(userPass,userPass2);
    let countEmail = emailCheck(userEmail);

    if(countId === 0 && countPass === 0 && countEmail ===0){
        alert("회원 가입 되었습니다.");
    }
}
function idCheck(userId){
    if(userId.length === 0){
        document.querySelector("#checkId").textContent = "아이디를 입력하세요."
        document.querySelector("#userId").focus();
    } else {   
        document.querySelector("#checkId").textContent = "";
        return 0;   
    }
}
function passCheck(userPass,userPass2){
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(userPass.length === 0){
        document.querySelector("#checkPass").textContent = "비밀번호를 입력하세요";
        document.querySelector("#checkPass").focus();
    }else if(false === reg.test(userPass)){
        document.querySelector("#checkPass").textContent = "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.";
    }else{
         document.querySelector("#checkPass").textContent = "";
    }
    if(userPass !== userPass2){
        document.querySelector("#checkPass2").textContent = "비밀번호가 일치하지 않습니다.";
        document.querySelector("#checkPass2").focus();
    }else {
        document.querySelector("#checkPass2").textContent = "";
        return 0;
    }
}
function emailCheck(userEmail){
    let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(userEmail.length === 0){
        document.querySelector("#checkEmail").textContent = "이메일을 입력하세요.";
    } 
    if(false === reg_email.test(userEmail)){
        document.querySelector("#checkEmail").textContent = "올바른 이메일 형식이 아닙니다.";
    }else{
        document.querySelector("#checkEmail").textContent = "";
        return 0;
    }
}
