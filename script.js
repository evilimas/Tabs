"use strict"

// openCity('evt', 'tab1')
// function openCity(evt, cityName){
//     var i, tabcontent, tablinks
//     tabcontent = document.getElementsByClassName("tabcontent")
//     for(i = 0; i < tabcontent.length; i++){
//         tabcontent[i].getElementsByClassName.display = "none"
//     }
//     tablinks = document.getElementsByClassName('tablinks')
//     for(i = 0; i < tablinks.length; i++){
//         tablinks[i].className = tablinks[i].className.replace(" active", "")

//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.cityName += " active";


// openCity('evt', 'tab1');
// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
openCity('evt', 'tab1');
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      
    }
    setTimeout(function() {
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }, 500);
}

    
//   }
// openCity('evt', 'tab1');
// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }
// openCity('evt', 'tab1');
// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     setTimeout(function() {
//       document.getElementById(cityName).style.display = "block";
//       evt.currentTarget.className += " active";
//     }, 1000);
//   }