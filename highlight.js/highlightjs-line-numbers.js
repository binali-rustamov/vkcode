!function(e){"use strict";function n(){e.addEventListener("load",function(){try{var e=document.querySelectorAll("code.hljs");for(var n in e)e.hasOwnProperty(n)&&t(e[n])}catch(r){console.error("LineNumbers error: ",r)}})}function t(e){if("object"==typeof e){var n=e.parentNode,t=n.outerText.match(/\n/g);if(t=t?t.length:0,r()&&(t+=1),t>1){for(var o="",i=0;t>i;i++)o+=i+1+"\n";var l=document.createElement("code");l.className="hljs hljs-line-numbers",l.style["float"]="left",l.innerText=o,n.insertBefore(l,e)}}}function r(n){return n=n||e.navigator.userAgent,n.indexOf("MSIE ")>-1||n.indexOf("Trident/")>-1}"undefined"==typeof e.hljs?console.error("highlight.js not detected!"):(e.hljs.initLineNumbersOnLoad=n,e.hljs.lineNumbersBlock=t)}(window);