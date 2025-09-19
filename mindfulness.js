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

const circle = document.querySelector(".circle"); // queryselector for cls
const breatheText = document.getElementById("breatheText"); //getelemnt.. for id
let inhale = true;

function breathingcycle(){
    if(inhale){
        breatheText.textContent="Inhale";
        circle.style.transform= "scale(1.3)";
    }else{
        breatheText.textContent="Exhale";
        circle.style.transform= "scale(1)";
    }
    inhale= !inhale
}

breathingcycle();
setInterval(breathingcycle,4000)


//timer
function start_Timer(){
    let minutes = parseInt(document.getElementById("timer").value);
    let seconds= minutes*60
    const timerDisplay= document.getElementById("displayTime");
    const interval= setInterval(()=>{
        if(seconds<0){
            clearInterval(interval);

            timerDisplay.textContent="Times Up!";

            updateSessions(); // sessions completed
            return;
        }

        let min = Math.floor(seconds/60);
        let sec = seconds % 60;

       timerDisplay.textContent= `${min}:${sec < 10? "0" + sec : sec}`;
       seconds--;

    },1000)// set timer for evry 1s

}

document.getElementById("startTimer").addEventListener("click",start_Timer);

//sound
const sound = document.getElementById("sound");
const playsound= document.getElementById("playSound");

let playing = false; // if sound not playing play the sound
playsound.addEventListener("click",()=>{
    if (!playing){
      sound.play();
      playsound.textContent="Pause";

      playing=true; // if playing pause it

    } else{
        sound.pause();
        playsound.textContent="Play"
    

    playing=false;
    }
});

//local storage
const sessionCount=document.getElementById("sessionCount");
let sessions= localStorage.getItem("sessionCompleted")||0;
sessionCount.textContent=sessions;

function updateSessions(){
    sessions++;
    localStorage.setItem("sessionCompleted",sessions);
    sessionCount.textContent=sessions;
}