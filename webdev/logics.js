// document.addEventListener('DOMContentLoaded', function () {
//     const loginForm = document.getElementById('login-form');
//     if (loginForm) {
//         loginForm.addEventListener('submit', function (event) {
//             event.preventDefault();
//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;

//             const storedUsername = localStorage.getItem('username');
//             const storedPassword = localStorage.getItem('password');

//             if (username === storedUsername && password === storedPassword) {
//                 alert('Login successful!');
//                 //adding logic over here     
//                 document.addEventListener("DOMContentLoaded", () => {
//                     const loginItem = document.getElementById("login-item");
            
//                     loginItem.addEventListener("click", (e) => {
//                       e.preventDefault();
//                       const username = prompt("Please enter your name:", "");
            
//                       if (username && username.trim()) {
//                         loginItem.innerHTML = `<a href="#">${username.trim()}</a>`;
//                       }
//                     });
//                   });


//                 //ending logic
//                 window.location.href = 'index1.html';
//             } else {
//                 alert('Invalid credentials. Please try again.');
//             }
//         });
//     }

//     const signupForm = document.getElementById('signup-form');
//     if (signupForm) {
//         signupForm.addEventListener('submit', function (event) {
//             event.preventDefault();
//             const newUsername = document.getElementById('new-username').value;
//             const newPassword = document.getElementById('new-password').value;

//             if (newUsername && newPassword) {
//                 alert('Signup successful! Please log in.');
//                 localStorage.setItem('username', newUsername);
//                 localStorage.setItem('password', newPassword);
//                 window.location.href = 'login.html';
//             } else {
//                 alert('Please fill out all fields.');
//             }
//         });
//     }
// });

// function openNewPage() {
//     window.location.href = 'login.html';
// }

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                alert('Login successful!');
                // Store the logged-in user
                localStorage.setItem('loggedInUser', username);
                window.location.href = 'index1.html';
                
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const newUsername = document.getElementById('new-username').value;
            const newPassword = document.getElementById('new-password').value;

            if (newUsername && newPassword) {
                alert('Signup successful! Please log in.');
                localStorage.setItem('username', newUsername);
                localStorage.setItem('password', newPassword);
                window.location.href = 'login.html';
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    function openNewPage() {
        window.location.href = 'login.html';
    }

        
});

