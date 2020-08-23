// ======== Toggles Small Dropdown Function =============

// function toggleFunction() {
//   $('#mobileDropdown').toggle();
// }

  //  Dropdown Menu and click outside Dropdown Menu Function
  
  
  // Slide/Pushdown Script for mobile

  jQuery("#mobileDropdown > #mobileCat").click(function(e) {
    e.preventDefault();
    
      $( "#mobileDist" ).slideToggle( "slow", function() {
        $('#menuMobile').fadeToggle("slow");
      });
  });



// ========================= MOBILE DROPDOWN
var dropdown = document.getElementById("mobileDropdown");
var dropdownm = document.getElementsByClassName("categories");

function toggleDropdown(event) {
    if (event.target.classList.contains('drop')){
        dropdown.classList.toggle('show');
    } 

  }
  $(".content").click(function(){   
    if (dropdown.classList.contains('show')) { 
      dropdown.classList.remove('show'); 
    } 
  }); 
// ============== Arrow Spin on Dropdown Mobile =======================

(function(document){
  var div = document.getElementById('mobileCat');
  var icon = document.getElementById('rotate');
  var open = false;
  
  div.addEventListener('click', function(){
    // If menu opens
    if(open){
      // Turn arrow down
      icon.className = 'fas fa-angle-down';  
      // Else turn arrow up
    } else{
      icon.className = 'fas fa-angle-down open';
    }
    
    open = !open;
  });
})(document);

// ========== DROPDOWN FOR LARGE SCREEN ==========================

function toggleMenu(event) {
  event.stopPropagation();
  // Toggle menu
  $('#menu').toggle();
  // When clicking on window
  window.addEventListener("click", function(e) {
    // No event (menu closing) if the click matches dropdown menu
    if (!event.target.matches('.dropdown') || 
        // Or categories in dropdown menu
        !event.target.matches('.categories')) {
          var cate = $('.categories');
          var men = $('#menu')
          if ($('#menu:visible') && $('.categories:visible')) {
            $('#menu').toggle();
          }
    }
  }, { once: true });

}

// SubMenu Selected Slide Function

function toggleSubMenu(event, _this, show, reverse) {

  event.stopPropagation()
  if (reverse == true) {
      $(_this).parent().hide("slide", { direction: "right" }, 500);
      $(show).show("slide", { direction: "left" }, 500);
      
    } else {
      $(_this).parent().hide("slide", { direction: "left" }, 500);
      $(show).show("slide", { direction: "right" }, 500);
      
  }
}

// Page Content fading in and out function

function fading (show, reverse) {
  // If clicking on reverse is true
  if (reverse === true) {
    // Show will fade out
    $(show).fadeOut(function() {
      // Show and sibling will fade in
      $(show).parent().children().fadeIn();
    });  
    } else {
    $(show).parent().children().fadeOut(function() {
      $(show).fadeIn();
    });
    
  }
}

// MENU CONTENT

var air = [
  "Air-Vac DRS 16"
]

var emotor = [
  "moteurs électriques à courant continu ( CC ou 'DC')",
  "Direct current (DC) electric motors",
  "Les moteurs électriques à courant alternatif (CA ou 'AC') et à courant continu (DC)",
  "Alternating current (AC) and direct current (DC) electric motors",
  "Moteurs moyenne tension",
  "Medium voltage motors"
]

var consult = [
  "acier gagnon"
]

var laser = [
  "custom diamond international"
]

var fabri = [
  "envitech automation 2009 inc"
]

var chemlab = [
  "etiquettes profecta inc"
]

var text = [
  "extension concepts"
]

var fac = [
  "auberge de la tour du lac",
  "BizBiz share",
  "camp val notre-dame",
  "doorlec corporation"
]

var conf = [
  "air aviation",
  "beel technologies inc",
  "BizBiz share",
  "sacs industriels"
]

var park = [
  "fabrication VanLife",
  "MPB communications inc",
  "pentagon graphics ltd."
]

var wares = [
  "axion reaction",
  "ChemPro inc",
  "CMCI technologies",
  "CommFirst international"
]

var eqptools = [
  "acier lachine",
  "aevos equipements",
  "amrikart",
  "atd design & mfg services inc"
]

const mixedValues = {
  electricmotor : [...emotor],
  aircompressor: [...air],
  consultation : [...consult],
  lasercut : [...laser],
  fabrication : [...fabri],
  chemlabel : [...chemlab],
  textile : [...text],
  facility : [...fac],
  offconf : [...conf],
  parking : [...park],
  warehouse : [...wares],
  eqpt : [...eqptools]
}
//hold id's for creating ...
const electronicsSubIds = Object.keys(mixedValues)

// grabbing the id names from the categories
electronicsSubIds.forEach(group => {
  //create divs in the id categories 
  mixedValues[group].forEach(function(arrayItem) {
    divFunction(arrayItem, group)
  })
})
// function for adding the divs to the ids
function divFunction(item, id) {
  document.getElementById(id).innerHTML += "<div>" + item + "</div>"; 
}

// $( document ).ready(function() {
//   $('#subcategory > li').click(() => {
//     console.log(this.event);
//     console.log(this.event.target);
//     console.log(this.event.target.data-toggle-id);

//     toggleSubMenu(event, this, '#eqpprodmenu', false); 
//     fading('#eqpprod');
//   });
// });