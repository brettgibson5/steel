function setActive(slide) {
    var el = document.querySelectorAll('.slide.active'), i;
    for (i = 0; i < el.length; ++i) {
        el[i].className = 'slide';
    }
    document.getElementById(slide).classList.add('active');
}
