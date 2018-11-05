import buttons from "./buttons";

function wysiwyg(options){
    let editor = document.querySelector(".editor");
    let body = document.querySelector("body");

    (function insertDiv(prevElement) {
        let editorDiv = document.createElement("div");
        editorDiv.classList.add("editorDiv")
        editor.parentNode.insertBefore(editorDiv, editor.nextSibling)
    })(editor);

    (function insertToolbar() {
        let editorDiv = document.querySelector(".editorDiv");
        let toolbar = document.createElement("div");
        toolbar.classList.add("toolbar");
        editorDiv.appendChild(toolbar)
    })();

    (function divEditable() {
        let toolbar = document.querySelector(".toolbar");
        let divEditable = document.createElement("div");
        divEditable.classList.add("editable");
        divEditable.setAttribute("contentEditable", "true");
        divEditable.innerHTML = "<p>Start writing</p>"
        toolbar.parentNode.insertBefore(divEditable, toolbar.nextSibling);
    })()

    document.querySelector(".toolbar").innerHTML = buttons(options)
}
wysiwyg()
