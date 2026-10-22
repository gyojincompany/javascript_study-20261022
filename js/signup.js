const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {

    const userId = document.getElementById("userId").value.trim(); //아이디
    console.log(userId);
    const password = document.getElementById("password").value.trim(); //비밀번호
    const passwordCheck = document.getElementById("passwordCheck").value.trim(); //비밀번호 확인
    const name = document.getElementById("name").value.trim(); //회원 이름
    const email = document.getElementById("email").value.trim(); //회원 이메일
    
    let isValid = true;

    //이전 오류 메시지 지우기
    document.querySelectorAll(".error").forEach(function(element) {
        element.textContent = "";
    });

    //1. 아이디 검사 - 영어 소문자와 숫자만 되고, 4~12자 사이만 가능
    const idPattern = /^[a-z0-9]{4,12}$/;

    if(!idPattern.test(userId)) {
        isValid = false;
        // alert("아이디는 영어 소문자와 숫자로 된 4~12자 사이만 가능합니다.");
        document.getElementById("userIdError").textContent = "아이디는 영어 소문자와 숫자로 된 4~12자 사이만 가능합니다.";
    }


    //2. 비밀번호 검사 - 8자 이상
    if(password.length < 8) {
        isValid = false;
        // alert("비밀번호는 8자 이상이어야 합니다.");
        document.getElementById("passwordError").textContent = "비밀번호는 8자 이상이어야 합니다.";
    }

    //3. 비밀번호 확인 검사
    if(passwordCheck == "") {
        isValid = false;
        // alert("비밀번호 확인이 공란입니다.");
        document.getElementById("passwordCheckError").textContent = "비밀번호 확인이 공란입니다.";
    } else if(password != passwordCheck) {
        isValid = false;
        // alert("비밀번호와 일치하지 않습니다.");
        document.getElementById("passwordCheckError").textContent = "비밀번호와 일치하지 않습니다.";
    }

    //4. 이름 검사 - 빈칸으로 입력되었는지 검사
    if(name == "") {
        isValid = false;
        // alert("이름이 공란입니다.");
        document.getElementById("nameError").textContent = "이름이 공란입니다.";
    }

    //5. 이메일 검사 - 빈칸 검사한 후 통과하면 이메일 형식 검사

    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email == "") {
        isValid = false;
        // alert("이메일이 공란입니다.");
        document.getElementById("emailError").textContent = "이메일이 공란입니다.";
    } else if(!emailPattern.test(email)) {
        isValid = false;        
        // alert("이메일 형식이 잘못되었습니다.");
        document.getElementById("emailError").textContent = "이메일이 형식이 잘못되었습니다.";
    }
    
    //isValid 값이 true 면 제출해라
    if(isValid == false) {
        event.preventDefault(); //제출 막기
    }
    
});

