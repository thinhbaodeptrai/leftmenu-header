
// Include HTML 

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
includeHTML();

//End Include HTML 


// Sub menu 

function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  function reportFunc() {
    var x = document.getElementById("report");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }

  function myDropFunc() {
    var x = document.getElementById("demoDrop");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-green", "");
    }
  }


//   Open and close 
function w3_open() {
    document.getElementById("leftmenubar").style.display = "block";
    document.getElementById("header").style.marginLeft = "22%";
    document.getElementById("showmenu").style.display = "none";
    document.querySelector(".VSSE__header-title").style.marginLeft = "0";
}
  function w3_close() {
    document.getElementById("header").style.marginLeft = "0%";
    document.getElementById("leftmenubar").style.display = "none";
    document.getElementById("showmenu").style.display = "block";
    document.querySelector(".VSSE__header-title").style.marginLeft = "20px";
    console.log(document.getElementById("showmenu"));
  }