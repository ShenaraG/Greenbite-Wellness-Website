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

const workoutForm=document.getElementById("workoutForm");
const _Wresults=document.getElementById("_Wresults")

const workout=[ // array
  {name:"Push-ups", 
    bodyPart:"arms", 
    equipment:"none", 
    duration:"15",
    level:"beginner", 
    description:"Classic bodyweight chest and arm exercise.",
    steps:"Start in a high plank with hands under shoulders. Lower your chest toward the floor by bending elbows, keeping body straight. Push back up to starting position."
  },

  {name:"Dumbell Bicep Curls",
    bodyPart:"arms",
    equipment:"dumbbells",
    duration:"15",
    level:"beginner", 
    description:"Build arm strength using dumbbells.",
    steps:"Stand tall with dumbbells in each hand, palms forward. Bend elbows and curl weights up to shoulders, then slowly lower back down."
  },

  {name:"Squats",
   bodyPart:"legs",
   equipment:"none",
   duration:"15",
   level:"beginner",
  description:"Lower body strength builder.",
  steps:"Stand with feet shoulder-width apart. Bend your knees and push hips back as if sitting in a chair. Keep chest up, then return to standing."
  },

  {name:"Lunges",
   bodyPart:"legs", 
   equipment:"none", 
   duration:"30",
   level:"intermediate", 
   description:"Targets quads and glutes.",
   steps:"Step one foot forward and lower until both knees form 90°. Keep weight in front heel, then push back up. Switch legs."
  },

  {name:"Burpees", 
   bodyPart:"fullBody", 
   equipment:"none", 
   duration:"30",
   level:"intermediate", 
   description:"Full-body fat burning move.",
   steps:"Start standing, squat down, and place hands on floor. Jump feet back into plank, do a push-up (optional), then jump feet forward and explode up."
  },

  { name:"Plank", 
   bodyPart:"legs", 
   equipment:"none", 
   duration:"15",
   level:"beginner", 
   description:"Core stability exercise",
   steps:"Rest on forearms and toes, body straight like a board. Keep core tight and hips level. Hold position."
  },

  {name:"Dead-Lifts", 
    bodyPart:"legs",
    equipment:"dumbbells", 
    duration:"45",
    level:"advanced", 
    description:"Heavy lifting for muscle growth.",
    steps:"Stand with dumbbells/bar in front. Bend hips and knees, keeping back straight, and lift weight by driving through heels. Stand tall, then lower."
  },

  {name:"Yoga-Stretch", 
    bodyPart:"fullBody", 
    equipment:"none", 
    duration:"30",
    level:"all", 
    description:"Boosts flexibility and relaxation.",
    steps:"Sit or stand comfortably, breathe deeply, and flow through gentle stretches (like reaching arms overhead, bending side to side, or forward folds)."
  }

] 

if (workoutForm){
  workoutForm.addEventListener("submit",function(a){
    a.preventDefault();

  const bodyPart= document.getElementById("bodyPart").value;
  const equipment=document.getElementById("equipment").value;
  const duration=document.getElementById("duration").value;
  const level=document.getElementById("level").value; // to get values from the form

  const results=workout.filter(w=>
    w.bodyPart=== bodyPart &&
    w.equipment=== equipment &&
    w.duration=== duration &&
    (w.level=== level || w.level === "all") // for easy flexibilty and to avoid errors ===  better thn ==
  );

  _Wresults.innerHTML= "<h2>Your Workout Plan</h2>";
  if(results.length===0)
  {
    _Wresults.innerHTML +="<p>No results found! Try different options.</p>"
  } 
  else{
    results.forEach((w,i) => {
      const card=document.createElement("div");
      card.className="workout_card";
      card.innerHTML=`
        <h3>${w.name}</h3>
        <p>${w.description}</p>
        <br><br><p>${w.steps}</p>
        <br><p>Duration: ${w.duration} mins</p>
        <br><p>Level: ${w.level}</p>
        <button id="startButton${i}">Start Timer</button>
        <p class="timerDisplay" id="timer${i}">Ready</p>
        `;
      _Wresults.appendChild(card);

      document.getElementById(`startButton${i}`).addEventListener("click",()=>{
        startTimer(parseInt(w.duration), `timer${i}`)
      });

    });
  }
  });

  function startTimer(minutes,timerID){
    let seconds = minutes*60;
    const timerDisplay = document.getElementById(timerID);

    const interval = setInterval(()=> {
      if (seconds < 0){
        clearInterval(interval);
        timerDisplay.textContent="Times Up!";
        timerDisplay.classList.add("timerFinished");
        return;
      }
      let min = Math.floor(seconds/60);
      let sec= seconds % 60;
      timerDisplay.textContent= `${min}:${sec < 10? "0" + sec : sec}`;
      seconds--;
      
    
    },1000) // 1s 1000ms 
  }
}