var data=[];
const btn = document.querySelector('.toggle-button');
const btn2 = document.querySelector('.btn2');
const btn3 = document.getElementById('sign-up');
const btn4 = document.getElementById('btn4');
const container = document.querySelector('.sign-up');
const container2 = document.querySelector('.container');
const inputTrue = document.querySelectorAll('.true');
const inputFalse = document.querySelectorAll('.false');
const username = document.getElementById('username');
const password = document.getElementById('password');
const fristname = document.getElementById('fristname');
const secondname = document.getElementById('secondname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const confirmpassword = document.getElementById('confirmpassword');
const username2 = document.getElementById('username2');
const pass2 = document.getElementById('password2');
const trueicon = document.querySelectorAll('.trueicon');
const falseicon = document.querySelectorAll('.falseicon');
const فار_تجارب = document.getElementById('btn3');
const forgotPasswordLink = document.getElementById('forgot-password');
const container3 = document.querySelector('.container3');
const btnReset = document.getElementById('reset-password');
const email3 = document.getElementById('email3');
const phonenumber2 = document.getElementById('phonenumber2');
const pass3 = document.getElementById('password3');
const confirmpassword2 = document.getElementById('confirmpassword2');

btn.addEventListener('click', () => {
    container.classList.remove('active');
    container2.classList.add('active');
});

btn2.addEventListener('click', () => {
    container.classList.add('active');
    container2.classList.remove('active');
});

btn4.addEventListener('click', () => {
    container.classList.add('active');
    container2.classList.remove('active');
    container3.classList.add('active');
});

forgotPasswordLink.addEventListener('click', () => {
    container.classList.add('active');
    container2.classList.add('active');
    container3.classList.remove('active');
});


inputTrue.forEach(input => input.classList.remove('true'));
inputFalse.forEach(input => input.classList.remove('false'));

function add(){
    var product ={
       username:username.value,
       password:password.value
   }
    data.push(product);
    console.log(data);
}

function validfirstname() {
    var text = fristname.value;
    var nameRegex = /^[A-Z][a-z]{3,10}/;
    if (nameRegex.test(text)) {
        fristname.classList.add('true');
        fristname.classList.remove('false');
        trueicon[0].style.opacity = '1';
        falseicon[0].style.opacity = '0';
        return true;
    } else {
        fristname.classList.add('false');
        fristname.classList.remove('true');
        falseicon[0].style.opacity = '1';
        trueicon[0].style.opacity = '0';
        return false;
    }
}

function validsecondname() {
    var text = secondname.value;
    var usernameRegex2 = /^[A-Z][a-z]{3,10}/;

    var t = usernameRegex2.test(text);
    console.log(t);
    if (t == true) {
        secondname.classList.add('true');
        secondname.classList.remove('false');
        trueicon[1].style.opacity = '1';
        falseicon[1].style.opacity = '0';
        return true;
    } else {
        secondname.classList.add('false');
        secondname.classList.remove('true');
        falseicon[1].style.opacity = '1';
        trueicon[1].style.opacity = '0';
        return false;
    }
}

function validemail() {
    var text = email.value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;    
    if (emailRegex.test(text)) {
        email.classList.add('true');
        email.classList.remove('false');
        trueicon[2].style.opacity = '1';
        falseicon[2].style.opacity = '0';
        return true;
    } else {
        email.classList.add('false');
        email.classList.remove('true');
        falseicon[2].style.opacity = '1';
        trueicon[2].style.opacity = '0';
        return false;
    }
}  

function validusername2() {
    var text = username2.value;
    var usernameRegex2 = /^[\p{L}][\p{L}0-9._-]{2,19}$/u;
    if (usernameRegex2.test(text)) {
        username2.classList.add('true');
        username2.classList.remove('false');
        trueicon[3].style.opacity = '1';
        falseicon[3].style.opacity = '0';
        return true;
    } else {
        username2.classList.add('false');
        username2.classList.remove('true');
        falseicon[3].style.opacity = '1';
        trueicon[3].style.opacity = '0';
        return false;
    }
}   

function validphonenumber() {
    var text = phonenumber.value;
        var phoneRegex = /^\+[0-9]{9,12}$/;
    if (phoneRegex.test(text)) {
        phonenumber.classList.add('true');
        phonenumber.classList.remove('false');
        trueicon[4].style.opacity = '1';
        falseicon[4].style.opacity = '0';
        return true;
    } else {
        phonenumber.classList.add('false');
        phonenumber.classList.remove('true');
        falseicon[4].style.opacity = '1';
        trueicon[4].style.opacity = '0';
        return false;
    }
}

function validpassword2() {
    var text = pass2.value;
    var passwordRegex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,64}$/;

    if (passwordRegex2.test(text)) {
        pass2.classList.add('true');
        pass2.classList.remove('false');
        trueicon[5].style.opacity = '1';
        falseicon[5].style.opacity = '0';
        return true;
    } else {
        pass2.classList.add('false');
        pass2.classList.remove('true');
        falseicon[5].style.opacity = '1';
        trueicon[5].style.opacity = '0';
        return false;
    }
}

function validconfirmpassword() {
    var text = confirmpassword.value;
    if (text === pass2.value && text !== '') {
        confirmpassword.classList.add('true');
        confirmpassword.classList.remove('false');
        trueicon[6].style.opacity = '1';
        falseicon[6].style.opacity = '0';
        return true;
    } else {
        confirmpassword.classList.add('false');
        confirmpassword.classList.remove('true');
        falseicon[6].style.opacity = '1';
        trueicon[6].style.opacity = '0';
        return false;
    }
}

function validforgetpassword() {
    var text = email3.value;
    var emailRegex3 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex3.test(text)) {
        email3.classList.add('true');
        email3.classList.remove('false');
        trueicon[7].style.opacity = '1';
        falseicon[7].style.opacity = '0';
        return true;
    } else {
        email3.classList.add('false');
        email3.classList.remove('true');
        falseicon[7].style.opacity = '1';
        trueicon[7].style.opacity = '0';
        return false;
    }
}

function validphonenumber2() {
    var text = phonenumber2.value;
    var phoneRegex = /^\+[0-9]{9,12}$/;
    if (phoneRegex.test(text)) {
        phonenumber2.classList.add('true');
        phonenumber2.classList.remove('false');
        trueicon[8].style.opacity = '1';
        falseicon[8].style.opacity = '0';
        return true;
    } else {
        phonenumber2.classList.add('false');
        phonenumber2.classList.remove('true');
        falseicon[8].style.opacity = '1';
        trueicon[8].style.opacity = '0';
        return false;
    }
} 

function validpassword3() {
    var text = pass3.value;
    var passwordRegex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,64}$/;

    if (passwordRegex2.test(text)) {
        pass3.classList.add('true');
        pass3.classList.remove('false');
        trueicon[9].style.opacity = '1';
        falseicon[9].style.opacity = '0';
        return true;
    } else {
        pass3.classList.add('false');
        pass3.classList.remove('true');
        falseicon[9].style.opacity = '1';
        trueicon[9].style.opacity = '0';
        return false;
    }
}

function validconfirmpassword2() {
    var text = confirmpassword2.value;
    if (text === pass3.value && text !== '') {
        confirmpassword2.classList.add('true');
        confirmpassword2.classList.remove('false');
        trueicon[10].style.opacity = '1';
        falseicon[10].style.opacity = '0';
        return true;
    } else {
        confirmpassword2.classList.add('false');
        confirmpassword2.classList.remove('true');
        falseicon[10].style.opacity = '1';
        trueicon[10].style.opacity = '0';
        return false;
    }
}

btn3.addEventListener('click', (e) => {
  e.preventDefault();

  const valid1 = validfirstname();
  const valid2 = validsecondname();
  const valid3 = validemail();
  const valid4 = validusername2();
  const valid5 = validpassword2();
  const valid6 = validconfirmpassword();
  const valid7 = validphonenumber();
  const message = document.getElementById('message');

  function showMessage(text, type) {
    message.textContent = text;
    message.className = 'message show ' + type;
  }

  if (!valid1) {
    showMessage(" First name must start with a capital letter and be 4–10 letters long.", "error");
  } else if (!valid2) {
    showMessage(" Second name must start with a capital letter and be 4–10 letters long.", "error");
  } else if (!valid3) {
    showMessage(" Invalid email address!", "error");
  } else if (!valid4) {
    showMessage(" Username must start with a letter, be 3–20 characters long, and may include '.', '_', or '-'.", "error");
  } else if (!valid5) {
    showMessage(" Password must have at least one uppercase letter, one lowercase letter, one number, one special character, and be 8–64 characters long.", "error");
  } else if (!valid6) {
    showMessage(" Passwords do not match!", "error");
  } else if (!valid7) {
    showMessage(" Invalid phone number!", "error");
  }else {
    alert("✅ All fields are valid!");
    add();
    username.value = "";
    password.value = "";
    fristname.value = "";
    secondname.value = "";
    email.value = "";
    confirmpassword.value = "";
    username2.value = "";
    pass2.value = "";
    phonenumber.value = "";
    trueicon.forEach(icon => icon.style.opacity = '0');
    falseicon.forEach(icon => icon.style.opacity = '0');
    showMessage("", "");
    inputTrue.forEach(input => input.classList.remove('true'));
    inputFalse.forEach(input => input.classList.remove('false'));
  }
});

btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    const valid8 = validforgetpassword();
    const valid9 = validpassword3()
    const valid10 = validconfirmpassword2();
    const valid11 = validphonenumber2();
    const message2 = document.getElementById('message2');

    function showMessage2(text, type) {
    message2.textContent = text;
    message2.className = 'message2 show ' + type;
  }

    if ( !valid8) {
    showMessage2(" Invalid email address!", "error");
}
else if (!valid11) {
    showMessage2(" Invalid phone number!", "error");
}
else if (!valid9) {
     showMessage2(" Password must have at least one uppercase letter, one lowercase letter, one number, one special character, and be 8–64 characters long.", "error");
}
else if (!valid10) {
    showMessage2(" Passwords do not match!", "error");
}
else {
    alert("Password changed successfully.", "success");
    inputTrue.forEach(input => input.classList.remove('true'));
    password3.value = "";
    confirmpassword2.value = "";
    phonenumber2.value = "";
    email3.value = "";
    trueicon.forEach(icon => icon.style.opacity = '0');
    falseicon.forEach(icon => icon.style.opacity = '0');
    showMessage("", "");
    inputTrue.forEach(input => input.classList.remove('true'));
    inputFalse.forEach(input => input.classList.remove('false'));
}
});

function showMessage(text, type) {
    message.textContent = text;
    message.className = 'message show ' + type;

    if(type === "error"){
        message.style.animation = 'none';
        message.offsetHeight; 
        message.style.animation = '';
    }
}
function showMessage2(text, type) {
    message.textContent = text;
    message.className = 'message show ' + type;

    if(type === "error"){
        message.style.animation = 'none';
        message.offsetHeight; 
        message.style.animation = '';
    }
}

// nameRegex = /^[A-Z][a-z]{3,10}/;
// emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// regexusername = /^[\p{L}][\p{L}0-9._-]{2,19}$/;
// regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]).{8,64}$/;



// alert(" Name must contain only letters and be 2–30 characters long.");
// alert(" Invalid email address!");
// alert(" Username must start with a letter, be 3–20 characters long, and may include '.', '_', or '-'.");
// alert(" Password must have at least one uppercase letter, one lowercase letter, one number, one special character, and be 8–64 characters long.");
// alert("✅ All fields are valid!");
