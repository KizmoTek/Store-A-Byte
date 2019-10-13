document.body.style.backgroundColor = "var(--bg-color)";
document.body.style.color = "var(--font-color)";
var anchorColor = document.getElementsByClassName("anchorColor")
setStyles(anchorColor, "color", "var(--primary-color)")

function setStyles(element, newStyle, styleInfo) {
    for (var i = 0; i < element.length; i++) {
        element[i].newStyle = styleInfo
    }
}

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
      var calcWidth = Math.floor((storage/maxStorage)*100);
      elem.style.width = calcWidth.toString() + "%"; 
    elem2.innerHTML = storage+"gb"
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

  function switchMode(){
    if(localStorage.mode==1){
       localStorage.mode=0;
      modeDark();
      
       }
    else{
         localStorage.mode=1;
         modeLight();
       }
    
  }
  function displayMode(){
    if(localStorage.mode==0){
      
      modeDark();
    }else{
      modeLight();
    }
  }

function modeLight(){
  
  document.documentElement.setAttribute('data-theme', 'light');
  document.getElementById("switch").checked = false;
  modeHeading.innerHTML="Light Mode";
  
}


function modeDark(){
  document.documentElement.setAttribute('data-theme', 'dark');
  document.getElementById("switch").checked = true;
  modeHeading.innerHTML="Dark Mode";
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
function checkSlot(){
if (chosenSlot.firstChild){
  random +=1;
  chosenSlot=randomSlot[random]
  if (random<=42){
  checkSlot();
  }else{
    random=0;
  }
    }
}
 function readURL(input,ev) {
   if($('#browseBtn')[0].files[0] != undefined){
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
copy = document.createAttribute("id");       // Create an "id" attribute
copy.value = "img"+(fileNum);                // Set the value of the id attribute.
newElem.setAttributeNode(copy); 
copy = document.createAttribute("id");       // Create an "id" attribute
copy.value = "div"+(fileNum);                // Set the value of the id attribute.
elem.setAttributeNode(copy);              // Add the id attribute to <img>
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
                  fileNumId=('#img'+fileNum)   
                    $(''+fileNumId)
                        .attr('src', e.target.result);
                  var inputFile = $('#browseBtn')[0].files[0].name;
var inputFileName = ''+inputFile.split('.')[1];
                  if (inputFileName != "png"&&inputFileName != "heif"&&inputFileName != "jpeg"&&inputFileName != "jpg"){
                    
//$('#img'+fileNum).prop('src', 'https://www.pngkey.com/png/full/129-1298626_upload-file-icon-png-new-file-small-icon.png')  
       document.getElementById('img'+fileNum).src = "https://www.pngkey.com/png/full/129-1298626_upload-file-icon-png-new-file-small-icon.png";
       document.getElementById('img'+fileNum).style.width = "7vw"           
                  console.log(inputFileName)
                    if (inputFileName == "DOCX"||inputFileName=="DOC"){
                         document.getElementById('img'+fileNum).src = "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjf_Ob7sPTkAhVHFjQIHaj5BV0QjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3A.doc_icon.svg&psig=AOvVaw3sOzU230blR5rqOkfbxK8N&ust=1569789829353033";
      
                        }
     }
                     fileNum +=1;
                };

                reader.readAsDataURL(input.files[0]);
            }
   var i = $(this).prev('label').clone();
   
  var file = $('#browseBtn')[0].files[0].name;
   var pElem = document.createElement("p");
copy = document.createAttribute("id");       // Create an "id" attribute
copy.value = "imgP"+(fileNum);                           // Set the value of the id attribute.
pElem.setAttributeNode(copy);
copy = document.createAttribute("class");       // Create an "id" attribute
copy.value = "pElem";                           // Set the value of the id attribute.
pElem.setAttributeNode(copy);
pElem.innerHTML=file;
   elem.appendChild(pElem);
     //console.log($('#browseBtn')[0].files[0].name)

   }
        } 

function swapFile(ev){
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
  var data2Elem=ev.target
  var dataElem = document.getElementById(data)
  if (ev.target.hasChildNodes()){
    /*
var placeholder1 = document.createElement("div");
var placeholder2 = document.createElement("div");
    console.log(data2Elem) 
  data2Elem.appendChild(placeholder2);
  dataElem.appendChild(placeholder1)
divider.appendChild(data2);
  */
  }else{
  if (dataElem.tagName == "DIV"){
  ev.target.appendChild(document.getElementById(data));
} else if(dataElem.tagName == "IMG"){
  ev.target.appendChild(dataElem.parentElement);
}
}
}

function trashCan(ev){
  ev.preventDefault();
  target1 = ev.dataTransfer.getData("text");
  var target1Elem = document.getElementById(target1)
  target1Elem.parentNode.removeChild(target1Elem);
}

function hoverSection(){
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var widthPage = window.innerWidth;
  var heightPage = window.innerHeight;
  var widthOfElem = getComputedStyle(document.documentElement).getPropertyValue('--width');
  var heightOfElem = getComputedStyle(document.documentElement).getPropertyValue('--height');
  var numInRow = widthPage/widthOfElem;
  var numInColumn = heightPage/widthOfElem;
  var gridX = Math.floor(mouseX/widthOfElem);
  var gridY = Math.floor(mouseY/heightOfElem);
  var margin = getComputedStyle(document.documentElement).getPropertyValue('--margin');
  var padding = (widthPage - (widthOfElem * numInRow))/2;
  
  
}
function hasClass(element, className) {
  console.log("class")
    console.log( (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1);
}
function menuDropdown(){
  event.preventDefault();
   var rightclick;
    if (!e) var e = window.event;
    if (e.which) rightclick = (e.which == 3);
    else if (e.button) rightclick = (e.button == 2);
  
  if (rightclick){
    
  }
  
}
function rightClick(){
  event.preventDefault();
  menuDropdown();
  
}


$(document).bind("contextmenu",function(e){
  e.preventDefault();
  console.log(e.pageX + "," + e.pageY);
  $("#cntnr").css("left",e.pageX);
  $("#cntnr").css("top",e.pageY);
 // $("#cntnr").hide(100);        
  $("#cntnr").fadeIn(200,startFocusOut());      
});

function startFocusOut(){
  $(document).on("click",function(){
  $("#cntnr").hide();        
  $(document).off("click");
  });
}

$("#items > li").click(function(){
$("#op").text("You have selected "+$(this).text());
});
