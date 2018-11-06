import buttons from "./buttons";

function makeNode(options){
    let node = document.createElement(options.name);
    for(let i = 0; i < options.class.length; i++){
        node.classList.add(options.class[i])
    }
    if(options.appendChild){
        let parentElement = document.querySelector(`.${options.appendChild}`)
        parentElement.appendChild(node)
    }
    if(options.insertBefore){
        let element = document.querySelector(`.${options.insertBefore}`);
        element.parentNode.insertBefore(node, element.nextSibling)
    }
    return node;
}

    (function insertDiv() {
        makeNode({
            name: "div",
            class: ["editorDiv"],
            insertBefore: "editor"
        })
    })();

    (function insertToolbar() {
        makeNode({
            name: "div",
            class: ["toolbar"],
            appendChild: "editorDiv"
        })
    })();

    (function divEditable() {
        let toolbar = document.querySelector(".toolbar");
        let divEditable = document.createElement("div");
        divEditable.classList.add("editable");
        divEditable.setAttribute("contentEditable", "true");
        divEditable.innerHTML = "<p>Start writing</p>"
        toolbar.parentNode.insertBefore(divEditable, toolbar.nextSibling);
    })()

    document.querySelector(".toolbar").innerHTML = buttons()
