//declare var index for using as index
var index = 0;
slideshow();

function slideshow() {
    //get all elements with class name images 
    var x = document.getElementsByClassName("images-slide");
    //make the images non viewable 
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    //increment index value
    index++;
    //suppose index exceed the total no. of images reassign it to 1
    if (index > x.length) {
        index = 1
    }
    x[index - 1].style.display = "block";
    // change image for every 2 seconds
    setTimeout(slideshow, 2000);
}


//responsive navbar as menu
const menu = document.querySelector('.menu-toggle');
const menulinks = document.getElementById('nav-menu');
menu.addEventListener('click', function () {
    menulinks.classList.toggle('active');
})


//Modal for displaying the message
var modal = document.getElementById("myModal");
document.getElementById("btn").addEventListener("click", function () {
    var email = document.getElementById("form-email").value
    if (/^[A-za-z.0-9_]{3,}@[A-Za-z]{3,}\.[A-Za-z]{3,8}$/.exec(email) == null) {
        alert("Invalid email");
        return false;
    }
    //create new node p
    var node = document.createElement("p");
    console.log(node)
    //get the content of message
    var msg = document.getElementById("form-msg").value;
    var msg_node = document.createTextNode(msg);
    //append the message to the p node created
    node.appendChild(msg_node);
    //append the p node to the container inside modal
    document.getElementById("modal-content").appendChild(node);
    //make modal visible
    modal.style.display = "block";
});

//close modal when clicking outside it
window.onclick = function () {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}