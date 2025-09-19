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

const formContent= document.getElementById("formContent");
if (formContent){
    formContent.addEventListener("submit",function(f){f.preventDefault(); //to stop the default form submitting
    const age= parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = parseInt(document.getElementById("height").value);
    const weight=parseInt(document.getElementById("weight").value);
    const activityLevel=parseFloat(document.getElementById("activityLevel").value);

    let bmr;
    if(gender=="male"){
        bmr= 10* weight+6.25*height-5*age+5;

    }
    else{
        bmr=10* weight+6.25*height-5*age-161;
    }

    const tdee = bmr*activityLevel;

    const carbohydrate=Math.round((tdee*0.50)/4)
    const protein=Math.round((tdee*0.20)/4)
    const fat= Math.round((tdee*0.30)/9)

    //results
    document.getElementById("bmrResults").textContent=Math.round(bmr);
    document.getElementById("tdeeResults").textContent=Math.round(tdee);
    document.getElementById("CarbohydratesResults").textContent=carbohydrate;
    document.getElementById("proteinsResults").textContent=protein;
    document.getElementById("fatsResults").textContent=fat;

    animateBar("bmrBar",bmr,2500);
    animateBar("tdeeBar",tdee,4000);
    animateBar("carbohydrateBar", carbohydrate,800);
    animateBar("proteinBar", protein, 350);
    animateBar("fatBar", fat,200);//last values are for the maxValue parameter



    });

    

}

function animateBar(id,value,maxValue){
    const bar=document.getElementById(id);
    const percent=Math.min((value/maxValue)*100,100);
    bar.style.width=percent + "%";
}

