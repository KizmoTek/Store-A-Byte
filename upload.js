var maxStorage = 10
var storage = 3

window.onload = function () {
    move();
};


function move() {
    var elem = document.getElementById("myBar");
    var id = setInterval(frame, 1000);
    function frame() {
        var calcWidth = Math.floor((storage / maxStorage) * 100);
        elem.style.width = calcWidth.toString() + "%";
        elem.innerHTML = storage + "gb"
    }
}

function myFunction() {
    var x = document.getElementById("myBtn").value;
    document.getElementById("demo").innerHTML = x;
}


