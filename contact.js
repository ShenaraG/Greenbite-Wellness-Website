// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navlinks =document.querySelector('.navlinks')

if (hamburger && navlinks){
  hamburger.addEventListener('click',()=>
  {
    navlinks.classList.toggle('active');
  });
}
const newsletterForm = document.getElementById("newsletterForm");
const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterMsg = document.getElementById("newsletterMsg");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = newsletterEmail.value.trim();
    if (email === "") {
      newsletterMsg.textContent = "Please enter your email.";
      newsletterMsg.style.color = "red";
      return;
    }

    localStorage.setItem("newsletterEmail", email);
    newsletterMsg.textContent = "Thank you for subscribing!";
    newsletterMsg.style.color = "#fff";

    newsletterForm.reset();
  });
}
const feedback= document.getElementById("feedback");
const nameInput= document.getElementById("name");
const emailInput=document.getElementById("email");
const feedbackInput = document.getElementById("feedbackMsg")
const feedbackButton = document.getElementById("feedbackButton")
const clearAll = document.getElementById("clearAll")

//form submission
if (feedback){
    feedback.addEventListener("submit",function(event)
    {
        event.preventDefault(); // stops from reloading the form.

        const namev = nameInput.value.trim() // using trim to remove extra spaces.
        const emailv = emailInput.value.trim();
        const feedbackv = feedbackInput.value.trim();

        if(namev===""|| emailv===""|| feedbackv===""){
            alert("please fill out all fields!");
            return; // stop function from running further.
        }

        //saving to local storage
        const feedbackData={ //creating an obj to store data
            name:namev,
            email:emailv,
            feedbackMsg:feedbackv,
            time:new Date().toLocaleString() //to store the data and time
        };

        localStorage.setItem("feedback",JSON.stringify(feedbackData)); //hv to use json cuz we must save multiple feedbacks.
        alert("Thank you for your feedback!" +namev+ "!");
        feedback.reset();
        showSavedFeedback();
    });
}

if (clearAll){
    clearAll.addEventListener("click",function(){
        localStorage.removeItem("feedback");
        alert("All saved feedback cleared.")
        showSavedFeedback();
    });
}
 
function showSavedFeedback(){
    const savedSection =document.getElementById("savedItems");
    if(!savedSection) return;
    const savedData = localStorage.getItem("feedback");
    if(savedData){
        const x =JSON.parse(savedData); // converts the string back to js obj.

        savedSection.innerHTML = `
        <p>Name:${x.name}</p>
        <p>Email:${x.email}/p>
        <p>Feedback:${x.feedbackMsg}</p>
        <p>Saved on:${x.time}</p>
        `;
    }
    else{
        savedSection.innerHTML="<p>No saved feedback available.</p>";
    }
}

// faq
const faqQ=document.querySelectorAll(".faq_Q");
faqQ.forEach((q)=>{
    q.addEventListener("click", ()=>{
    q.classList.toggle("active");
    const answer = q.nextElementSibling;
    if(answer.style.display==="block"){
        answer.style.display="none";
    }
    else{
        answer.style.display="block"
    }
    });

});

showSavedFeedback();

