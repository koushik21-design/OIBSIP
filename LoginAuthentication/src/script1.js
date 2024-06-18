document.addEventListener('DOMContentLoaded', () => {
    showRegisterForm();
});

let users = [];

function register() {
    const firstName = document.getElementById('rfname').value;
    const lastName = document.getElementById('rlname').value;
    const email = document.getElementById('rmail').value;
    const username = document.getElementById('rusername').value;
    const password = document.getElementById('rpassword').value;

    if (!firstName || !lastName || !email || !username || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Password validation: at least 1 special character and 1 number
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    const numberPattern = /\d/;
    if (!specialCharPattern.test(password) || !numberPattern.test(password)) {
        alert('Password must contain at least 1 special character and 1 number.');
        return;
    }

    users.push({ firstName, lastName, email, username, password });
    alert('Registration successful!');
    showLoginForm();
}

function login() {
    const username = document.getElementById('lusername').value;
    const password = document.getElementById('lpassword').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('user-name').textContent = user.username;
        document.getElementById('fname1').textContent = user.firstName;
        document.getElementById('lname1').textContent = user.lastName;
        document.getElementById('mailid1').textContent = user.email;
        showSecuredPage();
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    showLoginForm();
}

function showRegisterForm() {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('secured-page').classList.remove('active');
}

function showLoginForm() {
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
    document.getElementById('secured-page').classList.remove('active');
}

function showSecuredPage() {
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('secured-page').classList.add('active');
}
