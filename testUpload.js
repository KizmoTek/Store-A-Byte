var form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault()
    var timeStamp =  Number(new Date());
    var storageRef = firebase.storage().ref(timestamp.toString());
    var $ = jQuery;
    var file_data = $("#uploadZip").prop("files")[0];
    storageRef.put(file_data);
});

