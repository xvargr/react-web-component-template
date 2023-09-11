// ------ create css style element
const varname = document.createElement("link");
varname.setAttribute("rel", "stylesheet");
varname.setAttribute("href", "/assets/%{filename}%");
varname.setAttribute("data-type", "component-stylesheet");
document.querySelector("head").append(varname);
