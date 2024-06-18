document.addEventListener('DOMContentLoaded', function () {
    showLoginForm();
    if (localStorage.getItem('loggedInUser')) {
        showSecuredPage(localStorage.getItem('loggedInUser'));
    }
});

function showRegisterForm() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('secured-page').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('secured-page').style.display = 'none';
}

function showSecuredPage(username,fname,lname,mid) {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('secured-page').style.display = 'block';
    document.getElementById('fname1').innerText = fname;
    document.getElementById('lname1').innerText = lname;
    document.getElementById('mailid1').innerText = mid;
    document.getElementById('user-name').innerText = username;
}

function register() {
    const fname=document.getElementById('rfname').value;
    const lname=document.getElementById('rlname').value;
    const mid=document.getElementById('rmail').value;
    const username=document.getElementById('rusername').value;
    const password=document.getElementById('rpassword').value;
    
    if (username==='' || password==='' || mid==='' || lname==='' || fname==='') {
        alert('Please fill in all fields');
        return;
    }

    const users=JSON.parse(localStorage.getItem('users')) || [];
    const userExists=users.find(user => user.username === username);
    
    if (userExists) {
        alert('User already exists');
        return;
    }
    
    users.push({ username, password, mid, lname, fname });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful');
    showLoginForm();
}

function login() {
    const username = document.getElementById('lusername').value;
    const password = document.getElementById('lpassword').value;
    
    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    
    if (!user) {
        alert('Invalid username or password');
        return;
    }
    
    localStorage.setItem('loggedInUser', username);
    showSecuredPage(username,fname,lname,mid);
}

function logout() {
    localStorage.removeItem('loggedInUser');
    showLoginForm();
}
