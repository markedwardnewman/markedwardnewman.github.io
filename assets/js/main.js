document.addEventListener('DOMContentLoaded', function(event) {
    //var sliders = document.getElementsByTagName('aside');
    //var hidden_anchors = document.querySelectorAll('#about a, #skills a')
    //window.addEventListener('scroll', slide(sliders));
    
    var accordion = document.querySelectorAll('#about h3, #skills h3');
    //Accordion
    (function() {
        for (var i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener('click', clickAccordion);
            accordion[i].addEventListener('keyup', enterAccordion);
        }
    })();
});

function clickAccordion() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = (panel.scrollHeight - 3) + 'px';
    }
}

function enterAccordion(event) {
    //var keyaa = event.which || event.keyCode || 0;
    if (event.which === 13) {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = (panel.scrollHeight - 3) + 'px';
        }
    }
}

/* function slide(el) {
    for (var i = 0; i < el.length; i++) {
        if (isVisible(el[i]) == false) {
            el[i].classList.toggle('figure');
        }
    }
} */

/* function isVisible(el) {
    var rect = el.getBoundingClientRect();
    var html = document.documentElement;
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight) && rect.right <= (window.innerWidth || html.clientWidth));
} */
