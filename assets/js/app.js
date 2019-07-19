// Autor: William Villalba
// Email: williamvillalba13@gmail.com


// =========== FUNCTIONS GENERALS ===================
//PRELOAD



function load() {
  var preloader = document.getElementById("preload");
  setTimeout(function() {
    preloader.classList.add("close");
  }, 1000);

  //SLIDER INIT  
  showDivs(slideIndex);
  

}
window.onload = load;


//SLIDER
var slideIndex = 1;
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var style;
  var x = document.getElementsByClassName("item-slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     // x[i].style.display = "none";
     x[i].classList.remove("active");     
  }
  // x[slideIndex-1].style.display = "block"; 
  x[slideIndex-1].classList.add("active");
}
// document.querySelectorAll('.item-slides')[0].style.display = "block";



//FIXED NAV
window.onscroll = function () {
  var buttonid = document.getElementById("header");
  if(document.documentElement.scrollTop >= 50){
    buttonid.classList.add("fixed");
  }else{
    buttonid.classList.remove("fixed");
  }
};


// OPEN NAV
function openNav() {
  var element = document.getElementById("page");
  if (element.classList) { 
    element.classList.toggle("open");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("open");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("open");
      element.className = classes.join(""); 
  }
}


//JSON IMAGES
var xmlhttp = new XMLHttpRequest();
var url = "assets/js/dataslider.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    loadDataJson(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function loadDataJson(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<li class="item-slides"><h1>' + arr[i].text + '</h1><img src="' + 
    arr[i].url + '"><div class="imgMovile" style="background-image: url(' + 
    arr[i].url + ');"></div></li>';
  }
  document.getElementById("dataImages").innerHTML = out;
}