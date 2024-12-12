import createBigImage from "./createBigImage";
import menuItemBuilder from "./menuItemBuilder";
import chefImage from "./chef.jpg";
import tandooriPizza from "./tandooriPizza.jpeg";
import cheeseNaan from "./cheeseNaan.jpg";
import tomatoSoup from "./tomatoSoup.jpg";
function onHoverReplaceBigImage(e) {
    const imageNode = document.querySelector(".main-image");
    const imageHashTable = {"tandooriPizza": tandooriPizza, "cheeseNaan": cheeseNaan, "tomatoSoup": tomatoSoup, "none": chefImage};
    
    const associatedImageKey = e.target.dataset.associatedimagekey;
    console.log(e.target.dataset.associatedimagekey);

    imageNode.src = imageHashTable[associatedImageKey];
    document.querySelector(".placeholder-for-image").classList.add("hidden");
    document.querySelector(".main-image-wrapper").classList.remove("hidden");
}

export default function createMenuPage(){
    const parentNode = document.querySelector("#content");
    const bigImage = createBigImage({image: chefImage, alt:"some pic"});
    bigImage.classList.add("hidden");

    const placeholderDiv = document.createElement("div");
    placeholderDiv.classList.add("placeholder-for-image");

    const itemOne = menuItemBuilder({itemName: "Tandoori Pizza", description: "Delicious tandoori pizza, made with special, secret flour and authentic fusion of Italian roma tomato sauce with spicy tandoori-baked chicken.", associatedImageKey: "tandooriPizza"});
    const itemTwo = menuItemBuilder({itemName: "Classic Italian Stuffed Naan", description: "A tandoori-baked naan with cheese fillings, seasoned with aromatic spices and herbs. A must try with tomato soup", associatedImageKey: "cheeseNaan"});
    const itemThree = menuItemBuilder({itemName: "Tomato Soup", description: "This tomato soup is our signature comfort dish, capable of bringing so much warmth and joy. It's thick creamy base of fresh roma, tomatoes and butter along with garnishing of parsley, cilantro and croutons, make it our favorite.", associatedImageKey: "tomatoSoup"})

    const menuPageContentNode = document.createElement("div");
    menuPageContentNode.classList.add("menu-items-wrapper");
    
    for (let item of [itemOne, itemTwo, itemThree]) {
        item.addEventListener("mouseenter", onHoverReplaceBigImage);
        menuPageContentNode.appendChild(item);
    }

    parentNode.appendChild(placeholderDiv);
    parentNode.appendChild(bigImage);
    parentNode.appendChild(menuPageContentNode);
}