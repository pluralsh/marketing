!function(){const e=document.getElementById("main").dataset,n=Number(e.width),t=e.rootId;function o(){const e=window.innerWidth/n*100+"%";document.querySelector(`#${t}`).style.transform=`scale(${e})`}window.addEventListener("resize",(function(e){o()})),o()}(),document.documentElement.className+=window.self==window.top?" not-framed":" framed";