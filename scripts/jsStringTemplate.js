
let header = "Templates Literals";
let tags = ["Template Literals","JavaScript","ES6","CSS"];

let html = `<h2> ${header}</h2> <ul>`;

for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;

document.getElementById("pDemo").innerHTML = html;