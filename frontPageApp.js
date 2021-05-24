window.onscroll = function() {
    scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 5) {
    document.getElementById("myButton").style.display = "block";
  } else {
    document.getElementById("myButton").style.display = "none";
  }
}

function scrollOnTop() {
  document.documentElement.scrollTop = 0;
}

