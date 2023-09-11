// ------ create js script element
const varname = document.createElement("script");
varname.setAttribute("type", "module");
varname.setAttribute("crossorigin", "true");
varname.setAttribute("src", "/assets/%{filename}%");
document.querySelector("head").append(varname);
