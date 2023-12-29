//template elements
let headerTemplate = document.querySelector("#header");
let heroSectionTemplate = document.querySelector("#heroSection");
let startedSectionTemplate = document.querySelector("#startedSection");
let sponsorSectionTemplate = document.querySelector("#sponsorSection");
let footerTemplate = document.querySelector("#footer");

//clone templates content
let headerClone = headerTemplate.content.cloneNode(true);
let heroSectionClone = heroSectionTemplate.content.cloneNode(true);
let startedSectionClone = startedSectionTemplate.content.cloneNode(true);
let sponsorSectionClone =sponsorSectionTemplate.content.cloneNode(true);
let footerClone = footerTemplate.content.cloneNode(true);

//append clones to body
document.body.appendChild(headerClone);
document.body.appendChild(heroSectionClone);
document.body.appendChild(startedSectionClone);
document.body.appendChild(sponsorSectionClone);
document.body.appendChild(footerClone);
