document.body.style.backgroundColor = "var(--bg-color)";
document.body.style.color = "var(--font-color)";

var maxStorage = 10;
var storage = 3;
var image
var copy
var modeHeading
var fileNum = 0;
var firstSlot
var newElem
var reader
var fileNumId
var held
var obj1
var obj2
var target1
var target2
var tempId
var occupied
var divider = document.getElementById("divider");
var chosenSlot = document.getElementById("firstSlot");
var random = 0;
var randomSlot = document.getElementsByClassName('slot');



move();
modeHeading = document.getElementById("theme");
displayMode();

var test = document.getElementById('test');


function move() {
  var elem = document.getElementById("myBar");
  var elem2 = document.getElementById("progressP");
  var id = setInterval(frame, 1000);
  function frame() {
    var calcWidth = Math.floor((storage / maxStorage) * 100);
    elem.style.width = calcWidth.toString() + "%";
    elem2.innerHTML = storage + "gb"
  }
}



// firebase.initializeApp(firebaseConfig);
//         $(function() {
//             var form = $('form');
//             form.submit( function(event){
//                 event.preventDefault()
//                 var timeStamp =  Number(new Date());
//                 var storageRef = firebase.storage().ref(timeStamp.toString());
//                 var $ = jQuery;
//                 var file_data = $('#browseBtn').prop('files')[0];
//                 storageRef.put(file_data);

//             });
//         });

function switchMode() {
  if (localStorage.mode == 1) {
    localStorage.mode = 0;
    modeDark();

  }
  else {
    localStorage.mode = 1;
    modeLight();
  }

}
function displayMode() {
  if (localStorage.mode == 0) {

    modeDark();
  } else {
    modeLight();
  }
}

function modeLight() {

  document.documentElement.setAttribute('data-theme', 'light');
  document.getElementById("switch").checked = false;
  modeHeading.innerHTML = "Light Mode";

}


function modeDark() {
  document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById("switch").checked = true;
  modeHeading.innerHTML = "Dark Mode";
}




function dropFile(ev) {

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();


  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // If dropped items aren't files, reject them
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();
        //console.log('... file[' + i + '].name = ' + file.name);
      }
    }
  }


}


function dragOverFile(ev) {

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
function checkSlot() {
  if (chosenSlot.firstChild) {
    random += 1;
    chosenSlot = randomSlot[random]
    if (random <= 42) {
      checkSlot();
    } else {
      random = 0;
    }
  }
}
function readURL(input, ev) {
  if ($('#browseBtn')[0].files[0] != undefined) {
    chosenSlot = document.getElementById("firstSlot");
    random = 0;
    randomSlot = document.getElementsByClassName('slot');
    checkSlot();

    newElem = document.createElement("img");
    var elem = document.createElement("div");
    var placeholderElem = document.createElement("div");


    chosenSlot.appendChild(elem);
    elem.appendChild(newElem);
    newElem.appendChild(placeholderElem);

    copy = document.createAttribute("ondrop");
    copy.value = "swapFile(event)";
    elem.setAttributeNode(copy);

    copy = document.createAttribute("id");  // Create an "id" attribute
    copy.value = "img" + (fileNum);  // Set the value of the id attribute.
    newElem.setAttributeNode(copy); //Add the id attribute to <img>

    copy = document.createAttribute("class"); // Create a "class" attribute
    copy.value = "userFiles"; // Set the "class" attribute
    newElem.setAttributeNode(copy); // Add the class attribute to <img>

    copy = document.createAttribute("id");  // Create an "id" attribute
    copy.value = "div" + (fileNum); // Set the value of the id attribute.
    elem.setAttributeNode(copy);  // Add the id attribute to <img>

    copy = document.createAttribute("draggable");
    copy.value = "true";
    elem.setAttributeNode(copy);

    copy = document.createAttribute("draggable");
    copy.value = "false";
    newElem.setAttributeNode(copy);

    copy = document.createAttribute("ondragstart");
    copy.value = "drag(event)";
    elem.setAttributeNode(copy);

    copy = document.createAttribute("class");
    copy.value = "px180";
    elem.setAttributeNode(copy);

    copy = document.createAttribute("onhover");
    copy.value = "menuDropdown()";
    elem.setAttributeNode(copy);
    /*
copy = document.createAttribute("onclick");
copy.value = "menuDropdown()";
elem.setAttributeNode(copy);
*/
    /*
    if (inputFileName != "png"||inputFileName != "heif"||inputFileName != "jpeg"||inputFileName != "jpg"){
      console.log(fileNum)
//$('#img'+fileNum).prop('src', 'https://www.pngkey.com/png/full/129-1298626_upload-file-icon-png-new-file-small-icon.png')  
      document.getElementById('img'+fileNum).src = "https://www.pngkey.com/png/full/129-1298626_upload-file-icon-png-new-file-small-icon.png";
    }
    */
    if (input.files && input.files[0]) {
      reader = new FileReader();

      reader.onload = function (e) {
        fileNumId = ('#img' + fileNum)
          $("" + fileNumId).attr("src", e.target.result);
          var inputFile = $("#browseBtn")[0].files[0].name;
          var inputFileName = "" + inputFile.split(".")[1];
          if (
              inputFileName != "png" &&
              inputFileName != "heif" &&
              inputFileName != "jpeg" &&
              inputFileName != "jpg" &&
              inputFileName != "gif" &&
              inputFileName != "zip" &&
              inputFileName != "exe"
          ) {
              //$('#img'+fileNum).prop('src', 'https://www.pngkey.com/png/full/129-1298626_upload-file-icon-png-new-file-small-icon.png')
              document.getElementById("img" + fileNum).src =
                  "https://www.pngkey.com/png/full/129-1298626_upload-file-icon-png-new-file-small-icon.png";
              document.getElementById("img" + fileNum).style.width = "7vw";
              console.log(inputFileName);
              if (inputFileName == "docx" || inputFileName == "doc") {
                  document.getElementById("img" + fileNum).src =
                      "https://cdn.windowsfileviewer.com/images/types/docx.png";

                  console.log(fileNum);
              } else if (inputFileName == "py") {
                  document.getElementById("img" + fileNum).src =
                      "data:image/png;base64,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";
              } else if (inputFileName == "wav") {
                  document.getElementById("img" + fileNum).src =
                      "https://image.flaticon.com/icons/svg/29/29101.svg";
              } else if (inputFileName == "") {
                  document.getElementById("img" + fileNum).src = "";
              } else if (inputFileName == "") {
                  document.getElementById("img" + fileNum).src = "";
              } else if (inputFileName == "") {
                  document.getElementById("img" + fileNum).src = "";
              } else if (inputFileName == "") {
                  document.getElementById("img" + fileNum).src = "";
              }
          }
          fileNum += 1;
      };

      reader.readAsDataURL(input.files[0]);
    }
    var i = $(this).prev('label').clone();

    var file = $('#browseBtn')[0].files[0].name;
    var pElem = document.createElement("p");
    copy = document.createAttribute("id");       // Create an "id" attribute
    copy.value = "imgP" + (fileNum);                           // Set the value of the id attribute.
    pElem.setAttributeNode(copy);
    copy = document.createAttribute("class");       // Create an "id" attribute
    copy.value = "pElem";                           // Set the value of the id attribute.
    pElem.setAttributeNode(copy);
    pElem.innerHTML = file;
    elem.appendChild(pElem);
    //console.log($('#browseBtn')[0].files[0].name)

  }
}

function swapFile(ev) {
  target1 = ev.target.id
  target2 = ev.dataTransfer.getData("text")
  obj2 = (document.getElementById(target1)).parentElement;//the image being dropped
  obj1 = (document.getElementById(target2)).parentElement; //the image that a picture is being dropped onto
  console.log(obj2)
  console.log(obj1)

  var copy2 = obj2.cloneNode(true);

  //divider.parentNode.insertBefore(obj2, divider);


  /*
    // move obj1 to right before obj2
    temp2.parentNode.insertBefore(obj1, temp2);
    // move obj2 to right before where obj1 used to be
    temp.parentNode.insertBefore(obj2, temp);
    // remove temporary marker node
    */


}

function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function allowDrop(ev) {
  event.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var dataElem = document.getElementById(data)
  var data2 = ev.target.id
  var data2Elem = ev.target
  var dataElem = document.getElementById(data)
  if (ev.target.hasChildNodes()) {
    /*
var placeholder1 = document.createElement("div");
var placeholder2 = document.createElement("div");
    console.log(data2Elem) 
  data2Elem.appendChild(placeholder2);
  dataElem.appendChild(placeholder1)
divider.appendChild(data2);
  */
  } else {
    if (dataElem.tagName == "DIV") {
      ev.target.appendChild(document.getElementById(data));
    } else if (dataElem.tagName == "IMG") {
      ev.target.appendChild(dataElem.parentElement);
    }
  }
}

function trashCan(ev) {
  console.log(ev)
  ev.preventDefault();
  target1 = ev.dataTransfer.getData("text");
  var target1Elem = document.getElementById(target1)
  target1Elem.parentNode.removeChild(target1Elem);
}

function hoverSection() {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var widthPage = window.innerWidth;
  var heightPage = window.innerHeight;
  var widthOfElem = getComputedStyle(document.documentElement).getPropertyValue('--width');
  var heightOfElem = getComputedStyle(document.documentElement).getPropertyValue('--height');
  var numInRow = widthPage / widthOfElem;
  var numInColumn = heightPage / widthOfElem;
  var gridX = Math.floor(mouseX / widthOfElem);
  var gridY = Math.floor(mouseY / heightOfElem);
  var margin = getComputedStyle(document.documentElement).getPropertyValue('--margin');
  var padding = (widthPage - (widthOfElem * numInRow)) / 2;


}
function hasClass(element, className) {
  console.log("class")
  console.log((' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1);
}
function menuDropdown() {
  event.preventDefault();
  var rightclick;
  if (!e) var e = window.event;
  if (e.which) rightclick = (e.which == 3);
  else if (e.button) rightclick = (e.button == 2);

  if (rightclick) {

  }

}
function rightClick() {
  event.preventDefault();
  menuDropdown();

}


$(document).bind("contextmenu", function (e) {
  e.preventDefault();
  console.log(e.pageX + "," + e.pageY);
  $("#cntnr").css("left", e.pageX);
  $("#cntnr").css("top", e.pageY);
  // $("#cntnr").hide(100);        
  $("#cntnr").fadeIn(200, startFocusOut());
});

function startFocusOut() {
  $(document).on("click", function () {
    $("#cntnr").hide();
    $(document).off("click");
  });
}

$("#items > li").click(function () {
  $("#op").text("You have selected " + $(this).text());
});
