function toggle() {
    console.log("hello world");
    var element = document.getElementById("hideshow1");
    console.log("element: " + element);
    if (element.style.display == 'block'){
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }

    var buttonElement = document.getElementsByClassName("toggler")[0];
}