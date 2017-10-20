document.addEventListener('DOMContentLoaded', function(event) {  
    var accordion = document.querySelectorAll('#about h3, #skills h3');

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

