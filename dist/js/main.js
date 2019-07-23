(function () {
    createStarElement(200);
    function getRandomArbitrary(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function createStarElement(stars){
        let boxElement = document.querySelector('.sky-landscape');
        for (let i = 0; i < stars; i++) {
            let star = document.createElement("div");
            let starSize = getRandomArbitrary(5, 25);
            let starPositionX = getRandomArbitrary(1, 100);
            let starPositionY = getRandomArbitrary(1, 100);
            let starAnimationDelay = getRandomArbitrary(1, 10);
            star.classList.add('star');
            star.style.height = starSize + "px";
            star.style.width = starSize + "px";
            star.style.top = starPositionX + "%";
            star.style.left = starPositionY + "%";
            star.style.setProperty('--animation-delay', "0"+starAnimationDelay+ "s");
            boxElement.appendChild(star);
        }
    }
})();