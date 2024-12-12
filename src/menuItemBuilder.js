import paraBuilder from "./paraBuilder";

export default function menuItemBuilder({itemName, description, associatedImageKey}) {
    const menuItemWrapper = document.createElement("div");
    menuItemWrapper.classList.add("menu-item-wrapper");

    const menuItemNameTitle = document.createElement("h3");
    menuItemNameTitle.innerText = itemName;
    menuItemNameTitle.classList.add("menu-item-title");

    const menuItemDescription = paraBuilder(description);
    menuItemDescription.classList.add("menu-item-desc");
    menuItemWrapper.setAttribute("data-associatedImageKey", associatedImageKey);

    menuItemWrapper.appendChild(menuItemNameTitle);
    menuItemWrapper.appendChild(menuItemDescription);

    return menuItemWrapper;
}