!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var n=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body"),c=null;n.addEventListener("click",(function(){t(),c=setInterval((function(){o.style.backgroundColor="".concat(t())}),1e3)})),e.addEventListener("click",(function(){clearInterval(c)}))}();
//# sourceMappingURL=01-color-switcher.3c0ceca5.js.map