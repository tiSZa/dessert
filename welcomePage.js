let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let currentDate = year + "." + month + "." + day + ".";
function myFunction() {
    document.getElementById("date").innerHTML = currentDate;
}
