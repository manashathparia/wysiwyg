function makeNode(options) {
    let {
        name,
        appendChild,
        insertBefore,
        innerHTML,
        attr,
        className,
    } = options;

    let node = document.createElement(name);
    for (let i = 0; i < className.length; i++) {
        node.classList.add(className[i])
    }
    if (appendChild) {
        let parentElement = document.querySelector(`.${appendChild}`)
        parentElement.appendChild(node)
    }
    if (insertBefore) {
        let element = document.querySelector(`.${insertBefore}`);
        element.parentNode.insertBefore(node, element.nextSibling)
    }
    if (innerHTML){
        node.innerHTML = innerHTML
    }
    if (attr)
    {
        for(let i = 0; i < attr.length; i++){
            node.setAttribute(attr[i][0], attr[i][1])
        }
    }
    return node;
}

export default makeNode;