function getSoups() {
  document.getElementById('getDishes').src = 'https://tisza.github.io/recipes/soups';
}

function getGarnises() {
  document.getElementById('getDishes').src = 'https://tisza.github.io/recipes/garnishes';
}

function getDesserts() {
  document.getElementById('getDishes').src = 'https://tisza.github.io/recipes/desserts';
  }

function getMainCourses() {
  document.getElementById('getDishes').src = 'https://tisza.github.io/recipes/mainCourses';
}

function getPastas() {
  document.getElementById('getDishes').src = 'https://tisza.github.io/recipes/pastas';
  }



function scrollWin() {
  var elmnt1 = document.getElementById("recipeWrapper1"); 
  var elmnt2 = document.getElementById("recipeWrapper2");
  var elmnt3 = document.getElementById("recipeWrapper3");
  var elmnt4 = document.getElementById("recipeWrapper4");  
  var elmnt5 = document.getElementById("recipeWrapper5");  
  var elmnt5 = document.getElementById("recipeWrapper6");  
  var elmnt5 = document.getElementById("recipeWrapper7");  
  var elmnt5 = document.getElementById("recipeWrapper8");  
  var recipe = document.getElementById("menu");
  if (recipe.value == "1"){
    elmnt1.scrollIntoView(true);
  }
  if (recipe.value == "2"){
    elmnt2.scrollIntoView(true);
  }
  if (recipe.value == "3"){
    elmnt3.scrollIntoView(true);
  }
  if (recipe.value == "4"){
    elmnt4.scrollIntoView(true);
  }
  if (recipe.value == "5"){
    elmnt5.scrollIntoView(true);
  }
  if (recipe.value == "6"){
    elmnt6.scrollIntoView(true);
  }
  if (recipe.value == "7"){
    elmnt7.scrollIntoView(true);
  }
  if (recipe.value == "8"){
    elmnt8.scrollIntoView(true);
  }
}