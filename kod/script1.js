

const collection = document.getElementsByClassName("nav-scroller-item");
for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener("mouseover", function () {
        let image = this.getElementsByTagName("img")[0];
        let attributeValue = image.getAttribute("src");
        let regex = /_grey\..+/i;
        let newAttributeValue = attributeValue.replace(regex, "_colored.svg");
        image.setAttribute("src", newAttributeValue);
        //console.log(attributeValue + " .. " + newAttributeValue );
    });

    collection[i].addEventListener("mouseout", function () {
        let image = this.getElementsByTagName("img")[0];
        let attributeValue = image.getAttribute("src");
        let regex = /_colored\..+/i;
        let newAttributeValue = attributeValue.replace(regex, "_grey.svg");
        image.setAttribute("src", newAttributeValue);
        //console.log(attributeValue + " .. " + newAttributeValue );
    });
}

// Popup window

const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const btnOpenPopup = document.querySelector('.open-popup');
const btnClosePopup = document.querySelector('.close-popup');

// Open popup
btnOpenPopup.addEventListener('click', function(){
    popup.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
// Close popup
btnClosePopup.addEventListener('click', function(){
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
})

// Overlay layer
overlay.addEventListener('click', function(){
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
})
// Buttons coffee-size
const btnOkCoffeeSize = document.querySelector('.btn-ok-coffee-size');
const btnBigCoffeeIcon = document.querySelector('.coffee-size-big');
const btnMediumCoffeeIcon = document.querySelector('.coffee-size-medium');
const btnSmallCoffeeIcon = document.querySelector('.coffee-size-small');
// 
btnBigCoffeeIcon.addEventListener('click', function(){
    console.log('click coffee Big');
    btnOkCoffeeSize.classList.remove('btn-ok-coffee-size');
    return;
});
// 
btnMediumCoffeeIcon.addEventListener('click', function(){
    console.log('click coffee Medium');
    btnOkCoffeeSize.classList.remove('btn-ok-coffee-size');
    return;
    });
    // 
btnSmallCoffeeIcon.addEventListener('click', function(){
    btnOkCoffeeSize.classList.remove('btn-ok-coffee-size');
    console.log('click coffee Small');
    return;
    });