import buttons from "./buttons";
import makeNode from "./makenode";

    (function insertDiv() {
        makeNode({
            name: "div",
            className: ["editorDiv"],
            insertBefore: "editor"
        })
    })();

    (function insertToolbar() {
        makeNode({
            name: "div",
            className: ["toolbar"],
            appendChild: "editorDiv"
        })
    })();

    (function divEditable() {
        makeNode({
            name: "div",
            className: ["editable"],
            attr: [["contentEditable", "true"]],
            innerHTML: "<p>Start Writing</p>",
            insertBefore: "toolbar"
        })
    })()

    document.querySelector(".toolbar").innerHTML = buttons()
