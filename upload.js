var maxStorage = 10
var storage = 3
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





window.onload = function () {
    move();
    modeHeading = document.getElementById("theme");
    displayMode();

    var test = document.getElementById('test');

};


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



firebase.initializeApp(firebaseConfig);
$(function () {
    var form = $('form');
    form.submit(function (event) {
        console.log("hi");
        event.preventDefault()
        var timeStamp = Number(new Date());
        var storageRef = firebase.storage().ref(timeStamp.toString());
        var $ = jQuery;
        var file_data = $('#browseBtn').prop('files')[0];
        storageRef.put(file_data);

    });
});

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
                console.log('... file[' + i + '].name = ' + file.name);
            }
        }
    } else {
        // Use DataTransfer interface to access the file(s)
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        }
    }
}

function dragOverFile(ev) {

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

function readURL(input) {

    firstSlot = document.getElementById("firstSlot");
    newElem = document.createElement("img");
    firstSlot.appendChild(newElem);
    copy = document.createAttribute("id");       // Create an "id" attribute
    copy.value = "img" + (fileNum);                           // Set the value of the id attribute.
    newElem.setAttributeNode(copy);                          // Add the id attribute to <img>
    copy = document.createAttribute("draggable");
    copy.value = "true";
    newElem.setAttributeNode(copy);
    copy = document.createAttribute("alt");
    copy.value = "your image";
    newElem.setAttributeNode(copy);
    copy = document.createAttribute("ondragstart");
    copy.value = "drag(event)";
    newElem.setAttributeNode(copy);
    copy = document.createAttribute("ondrop");
    copy.value = "swapFile(event)";
    newElem.setAttributeNode(copy);
    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function (e) {
            fileNumId = ('#img' + fileNum)
            $('' + fileNumId)
                .attr('src', e.target.result);
            fileNum += 1;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function swapFile(ev) {
    // destination
    target1 = ev.target.id
    // dragged image
    target2 = ev.dataTransfer.getData("text")

    var temp = document.createElement("div");
    var temp2 = document.createElement("div");

    var divider = document.getElementById("divider")
    var theme = document.getElementById("theme")

    copy = document.createAttribute("id");       // Create an "id" attribute
    copy.value = "temporary";                           // Set the value of the id attribute.
    temp.setAttributeNode(copy);
    copy = document.createAttribute("id");       // Create an "id" attribute
    copy.value = "temporary2";                           // Set the value of the id attribute.
    temp2.setAttributeNode(copy);



    obj2 = document.getElementById(target1);//the image being dropped
    obj1 = document.getElementById(target2); //the image that a picture is being dropped onto

    var obj2C = obj2.cloneNode(true);
    var obj1C = obj1.cloneNode(true);
    copy = document.createAttribute("id");       // Create an "id" attribute
    copy.value = "obj2C";                           // Set the value of the id attribute.
    obj2C.setAttributeNode(copy);
    copy = document.createAttribute("id");       // Create an "id" attribute
    copy.value = "obj1C";                           // Set the value of the id attribute.
    obj1C.setAttributeNode(copy);
    console.log(obj1C)
    console.log(obj2C)


    theme.parentNode.insertBefore(obj1C, theme);
    divider.parentNode.insertBefore(obj2C, divider);
    // create marker element and insert it where obj1 is


    obj2C.parentNode.insertBefore(temp, obj2C);
    obj1C.parentNode.insertBefore(temp2, obj1C);
    /*
      // move obj1 to right before obj2
      temp2.parentNode.insertBefore(obj1, temp2);
      // move obj2 to right before where obj1 used to be
      temp.parentNode.insertBefore(obj2, temp);
      // remove temporary marker node
      */
    removeElement("temporary");
    removeElement("temporary2");
    obj2C.parentNode.removeChild(obj2C);
    obj2C.parentNode.removeChild(obj1C);

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
    ev.target.appendChild(document.getElementById(data));
}