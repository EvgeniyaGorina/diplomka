

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
