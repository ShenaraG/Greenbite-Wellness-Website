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

//recipe page - using objects
const recipes =[
  {
    id:1,
    title:"Avocado Toast",
    image:"./imgs/recipe2.jpg",
    category:"Breakfast",
    description:"A quick, fiber-rich start to the day with healthy fats.",
    ingredients:["1 slice whole-grain bread", "1/2 avocado", "salt", "pepper", "red pepper flakes", "1 fried egg (optional)"],
    steps:["Toast bread.", "Mash avocado on top", "Season.", "Top with a fried egg if desired."],
    nutrition:{calories:350 , carbs:25 , protein:12 ,fat:20}
  },

  {
    id:2,
   title:"Quinoa Salad Bowl",
   image:"./imgs/recipe1.jpeg",
   category:"Lunch",
   description:" A protein-packed, make-ahead lunch that keeps you full.",
   ingredients:["1 cup cooked quinoa", "1/2 cup chickpeas", "cucumber", "cherry tomatoes", "lemon juice", "olive oil", "herbs"],
   steps:[ "Combine all ingredients in a bowl.", "Drizzle with lemon juice and oil.", "Toss to combine"],
   nutrition:{calories:450 , carbs:65 , protein:18 ,fat:20}

  },

  {id:3,
   title:"Baked Salmon & Asparagus ",
   image:"./imgs/Recipe06.jpg",
   category:"Dinner",
   description:"  An easy, elegant dinner rich in omega-3s and antioxidants.",
   ingredients:["1 salmon fillet", "asparagus spears", "olive oil", "garlic powder", "lemon slices"],
   steps:[ "Place salmon and asparagus on a pan.", "Drizzle with oil", "season.", "Bake at 400°F (200°C) for 12-15 mins."],
   nutrition:{calories:400 , carbs:8 , protein:35 ,fat:25}
  },

  {id:4,
   title:"Apple & Peanut Butter  ",
   image:"./imgs/Recipe7.jpg",
   category:"Snacks",
   description:"  The perfect balance of crunchy carbs, healthy fat, and protein.",
   ingredients:["1 medium apple", "2 tbsp natural peanut butter"],
   steps:[ "Slice apple.", "Serve with peanut butter for dipping."],
   nutrition:{calories:250 , carbs:30 , protein:7 ,fat:14}
  },

  {id:5,
   title:"Greek Yogurt Berry Parfait",
   image:"./imgs/recipe6.jpg",
   category:"Dessert",
   description:" A creamy, sweet treat that's high in protein and antioxidants.",
   ingredients:["1 cup plain Greek yogurt", "1/2 cup mixed berries", "2 tbsp granola", "drizzle of honey."],
   steps:[ "Layer yogurt", " Add berries, and granola into a glass." ,"Top with a drizzle of honey."],
   nutrition:{calories:280 , carbs:30 , protein:20 ,fat:4}
  
  },

  {id:6,
   title:"Veggie Omelette Wrap",
   image:"./imgs/recipe8.jpg",
   category:"Breakfast",
   description:" A protein-rich wrap stuffed with eggs, veggies, and a light whole wheat tortilla—perfect fuel for your morning.",
   ingredients:["2 eggs","1/4 cup spinach(chopped)","1/4 cup bell peppers(diced)","2 tbsp onion (diced)","1 tsp olive oil","1 whole wheat tortilla"],
   steps:[ "Heat olive oil in a pan.","Sauté onion, peppers, and spinach for 2 minutes.","Beat eggs, season, and pour over veggies. Cook until set.","Beat eggs, season, and pour over veggies. Cook until set."],
   nutrition:{calories:280 , carbs:22, protein:20 ,fat:12}
  },

  {id:7,
   title:"Lentil & Veggie Soup",
   image:"./imgs/recipe5.jpg",
   category:"Lunch",
   description:" Warm, filling, and full of fiber—comfort in a bowl without the heaviness.",
   ingredients:["1 cup lentils", "1 carrot", "1 celery stick", "1 onion", "2 cups veg broth", "spices."],
   steps:[ "Sauté onion/celery/carrot", "dd lentils & broth","simmmer 25 mins."],
   nutrition:{calories:400, carbs:45 , protein:20 ,fat:3}
  },

  {id:8,
   title:"Chicken Stir-Fry",
   image:"./imgs/recipe9.jpg",
   category:"Dinner",
   description:"Quick, colorful, and balanced—lean protein with crisp veggies and bold flavor.",
   ingredients:["150g chicken breast", "1 cup mixed veggies", "1 tbsp soy sauce", "1 tsp sesame oil."],
   steps:[ "Cook chicken, add veggies", "toss with soy sauce + oil.","Serve with brown rice"],
   nutrition:{calories:400, carbs:35 , protein:30 ,fat:12}
  },

  {id:9,
   title:"Hummus & Carrot Sticks",
   image:"./imgs/recipe4.jpg",
   category:"Snacks",
   description:" Crunchy and creamy, a light snack that’s both satisfying and nourishing.",
   ingredients:["3 tbsp hummus", "1 cup carrot sticks."],
   steps:[ "Dip and crunch!"],
   nutrition:{calories:150, carbs:12 , protein:4 ,fat:8}

  },

  {id:10,
   title:"Banana Ice Cream",
   image:"./imgs/recipe10.jpg",
   category:"Dessert",
   description:" Sweet and guilt-free, a creamy treat made from just frozen bananas.",
   ingredients:["1 frozen banana", "1 tsp cocoa powder", "splash of milk."],
   steps:[ "Blend until creamy.", "Freeze 10 mins if you want it firmer."],
   nutrition:{calories:120, carbs:30 , protein:2 ,fat:0.5}

  }


 ];

 const recipes_Grid=document.getElementById("recipes_Grid");
 const searchRecipes=document.getElementById("searchRecipes");
 const filterCategory=document.getElementById("filterCategory");
 const recipeModal=document.getElementById("recipeModal");
 const closemodal=document.getElementById("closeModal");

 const modalTitle= document.getElementById("modalTitle");
 const modalImage=document.getElementById("modalImage");
 const modalDescrip=document.getElementById("modalDescrip");
 const modalIngredients=document.getElementById("modalIngredients");
 const modalsteps=document.getElementById("modalsteps");
 const modalNutrition=document.getElementById("modalNutrition") .querySelector("tbody");

//filter search recipes
 function recipesResults(filterText="", category="All"){
  recipes_Grid.innerHTML="" ; //to remove the recipes displayed before 

  recipes //array contain all objcts.
    .filter(recipe=> 
      recipe.title.toLowerCase().includes(filterText.toLowerCase())&&(category==="All"|| recipe.category=== category)
    )
    .forEach(recipe=>{
      const card = document.createElement("div")
      card.className="recipe_card";
      card.innerHTML=`
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p> 
        `;//template for the recipe cards tht appear
    

    card.addEventListener("click",()=> openModal(recipe)); //opens the full details of each recipe
    
    recipes_Grid.appendChild(card);
    });

  }

 

  //show full recipe
  function openModal(recipe){
    modalTitle.textContent=recipe.title;
    modalImage.src=recipe.image;
    modalDescrip.textContent=recipe.description;
    modalIngredients.innerHTML=recipe.ingredients.map(i=> `<li>${i}</li>`).join("");
    modalsteps.innerHTML=recipe.steps.map(s=> `<li>${s}</li>`).join("");

    modalNutrition.innerHTML=`
      <tr>
        <td>${recipe.nutrition.calories}</td>
        <td>${recipe.nutrition.carbs}</td>
        <td>${recipe.nutrition.protein}</td>
        <td>${recipe.nutrition.fat}</td>
      </tr>
    `;

    recipeModal.style.display="flex";

  }

  closemodal.addEventListener("click",()=>{
    recipeModal.style.display="none";
  });
 
   

  //show all recipes
  searchRecipes.addEventListener("input",()=>recipesResults(searchRecipes.value,filterCategory.value));
  filterCategory.addEventListener("change",()=> recipesResults(searchRecipes.value, filterCategory.value));
   recipesResults();
