export default function({image, alt}) {
    const bigImageWrapperNode = document.createElement("div");
    bigImageWrapperNode.classList.add("main-image-wrapper");
    const bigImage = document.createElement("img");

    bigImage.src = image;
    bigImage.alt = `${alt}`;

    bigImage.width = "600";
    bigImage.height = "800";

    bigImageWrapperNode.appendChild(bigImage);
    return bigImageWrapperNode;
}