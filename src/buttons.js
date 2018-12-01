"use strict";
let buttons = [
	{
		name: "bold",
		class: "icon-bold"
	},
	{
		name: "underline",
		class: "icon-underline"
	},
	{
		name: "italic",
		class: "icon-italic"
	},
	{
		name: "image",
		class: "icon-picture"
	},
	{
		name: "cut",
		class: "icon-scissors"
	},
	{
		name: "undo",
		class: "icon-undo"
	},
	{
		name: "redo",
		class: "icon-cw"
	},
	{
		name: "delete",
		class: "icon-cancel-circle"
	}
];

function createButtons() {
	let div = document.createElement("div");
	for (let i = 0; i < buttons.length; i++) {
		let button = document.createElement("button");
		button.classList.add(buttons[i].class);
		button.setAttribute(
			"onclick",
			`document.execCommand("${buttons[i].name}",${false}, "")`
		);
		div.appendChild(button);
	}
	return div.innerHTML;
}

export default createButtons;
