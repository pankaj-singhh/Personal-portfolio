var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


    //for remove tablinks description
function opentab(event,tabname) {
  for (var tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
// ------------for menu functionality----------

var sidemenu=document.getElementById("sidemenu");

function openmenu(){
     sidemenu.style.right="0";
}
function closemenu(){
     sidemenu.style.right="-200px";
}