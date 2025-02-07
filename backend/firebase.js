auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('Login successful:', user);
        window.location.href = 'index.html'; // Redirect to home page
    })
    .catch((error) => {
        const errorMessage = error.message;
        console.error('Error during login:', errorMessage);
        alert(errorMessage); // Show error message to user
    });