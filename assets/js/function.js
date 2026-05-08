const mainDrink = document.getElementById("main-drink");
const thumbs = document.querySelectorAll(".thumb-item");
const mainDrinkMobile = document.getElementById("main-drink-mobile");

thumbs.forEach(function(thumb){
    thumb.addEventListener("click",function(){
        const newImage = this.getAttribute('data-img');
        mainDrink.src = newImage;
        mainDrinkMobile.src = newImage;

        thumbs.forEach(function(t){
            t.classList.remove('active-thumb');
        });

        this.classList.add('active-thumb');
    });
});
