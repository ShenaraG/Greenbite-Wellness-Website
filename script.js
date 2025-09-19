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

//home page
const heroheading=document.getElementById('slogan');
const slogans=[
  "Eat Well. Move More. Live Mindfully.",
  "Your health is your greatest wealth.",
  "Nourish your body, refresh your mind."
];

let index = 0;
function rotateSlogan(){
  heroheading.textContent=slogans[index];
  index=(index + 1 )% slogans.length;
}
 setInterval(rotateSlogan,3000);

 const tips =[
     "Hydrate first thing.",
      "Move 30 mins daily.",
     " Eat more whole foods.",
      "Prioritize 7-8 hours of sleep.",
      "Take deep breath breaks.",
      "Practice good posture."
 ];
  const tipsbox = document.getElementById('tips')

  //function
  function getDay(day = new Date()){
    const start = new Date(day.getFullYear(),0,0);
    return Math.floor((day-start)/(1000*60*60*24));
  }

  const today = getDay();
  tipsbox.textContent=tips[today%tips.length];



