function changeFlowDirection() {
    if (document.getElementById("container").style.flexDirection != "row-reverse") {
        document.getElementById("container").style.flexDirection = "row-reverse"
    }
    else {
        document.getElementById("container").style.flexDirection = "row"
    }
}
var requests = 2
var connections = 128
var new_name = "Joseph Y"
function hideElementId1() {
    requests--;
    connections++;
    document.getElementById("element-1").style.display = "none"
    document.getElementById("cr-push").innerText = requests
    document.getElementById("cnt-push").innerText = connections
}
function hideElementId2() {
    requests--;
    connections++;
    document.getElementById("element-2").style.display = "none"
    document.getElementById("cr-push").innerText = requests
    document.getElementById("cnt-push").innerText = connections
}
function changeName(){
    document.getElementById("nameP").innerText = new_name;
}