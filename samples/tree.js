document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.getElementsByClassName('caret');
    for (let i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener('click', function() {
            this.parentElement.querySelector('.nested').classList.toggle('active');
            this.classList.toggle('caret-down');
        });
    }
});
