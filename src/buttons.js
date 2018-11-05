"use strict"

let buttons = [
    {
        name: "bold",
        class: ["fa", "fa-bold"]
    },
    {
        name: "underline",
        class: ["fa", "fa-underline"]
    },
    {
        name: "italic",
        class: ["fa", "fa-italic"]
    },
    {
        name: "cut",
        class: ["fa", "fa-sessiors"]
    },
    {
        name: "undo",
        class: ["fa", "fa-undo"]
    },
    {
        name: "redo",
        class: ["fas", "fa-redo"]
    },
    {
        name: "delete",
        class: ["fas", "fa-trash-alt"]
    }
]

function createButtons(obj) {
    let div = document.createElement("div");
    for (let i = 0; i < obj.length; i++) {
        let button = document.createElement("button");
        button.classList.add(obj[i].class[0], obj[i].class[1]);
        button.setAttribute("onclick", `document.execCommand("${obj[i].name}","false", "")`)
        div.appendChild(button)
    }
    return div.innerHTML
}

export default createButtons(buttons);