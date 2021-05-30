function scrollWin(){  
  let recipe = document.getElementById("menu");
  if (recipe.value == "1"){
    let elmnt1 = document.getElementsByClassName("recipeWrapper1");
    elmnt1.scrollIntoView(true);
  }
  else if (recipe.value == "2"){
    let elmnt2 = document.getElementsByClassName("recipeWrapper2");
    elmnt2.scrollIntoView(true);
  }
  else if (recipe.value == "3"){
    let elmnt3 = document.getElementsByClassName("recipeWrapper3");
    elmnt3.scrollIntoView(true);
  }
  else if (recipe.value == "4"){
    let elmnt4 = document.getElementsByClassName("recipeWrapper4"); 
    elmnt4.scrollIntoView(true);
  }
  else if (recipe.value == "5"){
    let elmnt5 = document.getElementsByClassName("recipeWrapper5"); 
    elmnt5.scrollIntoView(true);
  }
  else if (recipe.value == "6"){
    let elmnt6 = document.getElementsByClassName("recipeWrapper6"); 
    elmnt6.scrollIntoView(true);
  }
  else if (recipe.value == "7"){
    let elmnt7 = document.getElementsByClassName("recipeWrapper7"); 
    elmnt7.scrollIntoView(true);
  }
  else if (recipe.value == "8"){
    let elmnt8 = document.getElementsByClassName("recipeWrapper8"); 
    elmnt8.scrollIntoView(true);
  }
}

