export default function(){
    const contentBodyWrapper = document.createElement("div");
    contentBodyWrapper.classList.add("content-body");

    const heading = document.createElement("h1");
    heading.innerText = "The Restaurant For The Ages";
    const restaurantDescription = document.createElement("p");
    restaurantDescription.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        + "Id nulla ea voluptates laborum eaque esse, voluptatibus numquam, quia," 
        + "fuga delectus quas. Reiciendis nihil labore accusantium modi quibusdam at! Sint. lorem lorem";

    contentBodyWrapper.appendChild(heading);
    contentBodyWrapper.appendChild(restaurantDescription);

    return contentBodyWrapper;
};