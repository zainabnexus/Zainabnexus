function setLang(lang){
document.documentElement.lang = lang;

document.querySelectorAll("[data-en]").forEach(el=>{
el.innerText = el.getAttribute("data-" + lang);
});

if(lang === "ur"){
document.body.setAttribute("lang","ur");
}else{
document.body.removeAttribute("lang");
}
}
