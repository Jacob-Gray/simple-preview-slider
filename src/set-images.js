!function(){var e=document.querySelector(".filter-preview"),r=e.querySelector(".image-wrapper"),t=document.location.search.indexOf("="),c=document.location.search.substr(++t).split("|");e.style.backgroundImage="url("+c[1]+")",r.style.backgroundImage="url("+c[0]+")"}();