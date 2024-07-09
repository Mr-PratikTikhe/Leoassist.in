const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

function login() {
    // Simulated login with a fake user
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validate credentials (simulate a backend check)
    if (email === 'fakeuser@example.com' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform other actions
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function loginAndRedirect() {
    // Simulated login with a fake user
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validate credentials (simulate a backend check)
    if (email === 'fakeuser@example.com' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page
        window.location.href = '/homepage/home.html'; // Replace with your actual page URL
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

function signupAndRedirect() {
    // Simulated signup process
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate signup inputs (example validation)
    if (email && password && confirmPassword && password === confirmPassword) {
        alert('Signup successful!');
        // Redirect to another page
        window.location.href = '/Login_Signup_Form/term.html'; // Replace with your actual page URL
    } else {
        alert('Please fill all fields correctly and ensure passwords match.');
    }
}



function loginWithGoogle() {
    // Simulated login with Google
    // This could involve redirecting to Google's authentication service
    // For this example, we will simulate a successful login
    alert('Simulated login with Google successful!');
    // Redirect to another page or perform other actions
}
