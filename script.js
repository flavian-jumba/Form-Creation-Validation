document.addEventListener('DOMContentLoaded', function() {
    const form=document.getElementById("registration-form");
    const feedbackDiv=document.getElementById("form-feedback");

    form.addEventListener('submit',function(event){
        event.preventDefault();
        // Input Retrieval and Trimming
    const username= document.getElementById("username").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();

    const isValid=true;
    const messages=[];

    // Username Validation:
    if (username.length <3 ){
        isValid=false;
        messages.push("Username must contain at least 3 characters")
    }
    if (!email.includes ('@') && email.includes('.')){
        isValid=false;
        messages.push('Email must contain "@" and "."')
    }
    if (password.length < 8){
        isValid=false;
        messages.push("The password should be atleast 8 characters")
    }
    //subit button 
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.textContent = messages.join("<br>");
      feedbackDiv.innerHTML("");
      feedbackDiv.style.color = "#dc3545";
    }
    })
  });