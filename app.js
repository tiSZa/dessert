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
  let recipe = document.getElementById("menu");
  if (recipe.value == "1"){
    let elmnt1 = document.getElementById("recipeWrapper1");
    elmnt1.scrollIntoView(true);
  }
  if (recipe.value == "2"){
    let elmnt2 = document.getElementById("recipeWrapper2");
    elmnt2.scrollIntoView(true);
  }
  if (recipe.value == "3"){
    let elmnt3 = document.getElementById("recipeWrapper3");
    elmnt3.scrollIntoView(true);
  }
  if (recipe.value == "4"){
    let elmnt4 = document.getElementById("recipeWrapper4");  
    elmnt4.scrollIntoView(true);
  }
  if (recipe.value == "5"){
    let elmnt5 = document.getElementById("recipeWrapper5");  
    elmnt5.scrollIntoView(true);
  }
  if (recipe.value == "6"){
    let elmnt6 = document.getElementById("recipeWrapper6");  
    elmnt6.scrollIntoView(true);
  }
  if (recipe.value == "7"){
    let elmnt7 = document.getElementById("recipeWrapper7");  
    elmnt7.scrollIntoView(true);
  }
  if (recipe.value == "8"){
    let elmnt8 = document.getElementById("recipeWrapper8");  
    elmnt8.scrollIntoView(true);
  }
}