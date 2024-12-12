export default function paraBuilder(text) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    return paragraph;
}