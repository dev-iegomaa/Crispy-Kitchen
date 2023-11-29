let exitBtn = document.getElementById('exit'),
    reserveBtn = document.getElementById('reserve'),
    reservation = document.getElementById('reservation'),
    bodyElement = document.getElementsByTagName("body")[0];

    exitBtn.addEventListener('click', function () {
        reservation.classList.remove('show');
        bodyElement.style.cssText = 'overflow: auto';
});

reserveBtn.addEventListener('click', function () {
    reservation.classList.add('show');
    bodyElement.style.cssText = 'overflow: hidden';
});