//template elements
let headerTemplate = document.getElementById("header");

let footerTemplate = document.getElementById("footer");


//clone templates content
let headerClone = template.content.cloneNode(true);

let footerClone = template.content.cloneNode(true);


//append clones to body
document.body.appendChild(headerClone);

document.body.appendChild(footerClone);
