// Button Scroll to Top
// Get the button:
mybutton = document.getElementById('myBtn');

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
    ) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// DARK MODE
function myFunction() {
    var element = document.body;
    element.classList.toggle('dark-mode');
    var element2 = document.getElementById('buttonSwitchMode');
    if (element2.innerHTML == '<i class="fas fa-moon"></i>') {
        element2.innerHTML = '<i class="fas fa-sun"></i>';
        element2.classList.add('btn-light');
        element2.classList.remove('btn-dark');
    } else {
        element2.innerHTML = '<i class="fas fa-moon"></i>';
        element2.classList.add('btn-dark');
        element2.classList.remove('btn-light');
    }
}
