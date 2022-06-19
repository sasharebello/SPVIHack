var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("index.html");
        },function(){})
    }

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "";
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("index.html");
        }
      });
}

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbarid");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function goToByScroll(id){
  // Reove "link" from the ID
id = id.replace("link", "");
  // Scroll
$('html,body').animate({
    scrollTop: $("#"+id).offset().top},
    'slow');
}

$("#sidebar > ul > li > a").click(function(e) { 
  // Prevent a page reload when a link is pressed
e.preventDefault(); 
  // Call the scroll function
goToByScroll($(this).attr("id"));           
});
    
init();

mainApp.logout = logtout;
})();

