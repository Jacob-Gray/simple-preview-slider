!function(){var e,t,i=document.querySelector(".filter-preview"),r=i.querySelector(".image-wrapper"),d=r.querySelector(".filter-slider"),a=!1,s=0;function n(e){return parseInt(getComputedStyle(e).width)}window.addEventListener("mousemove",function(o){if(a){var l=n(i),u=t-o.pageX;t>o.pageX?(s<0&&s<u?s+=u:s=0,e="left"):t<o.pageX&&(s>0&&s>u?s+=u:s=0,e="right");var g=o.pageX+s;g<=2?(d.classList.add("grow-right"),r.style.width="2px"):l-g<=2?(d.classList.add("grow-left"),r.style.width=l-2+"px"):(d.className="filter-slider",r.style.width=g/l*100+"%"),t=o.pageX}}),d.addEventListener("mousedown",function(e){a=!0,s=n(r)-e.pageX,t=e.pageX}),window.addEventListener("mouseup",function(){a=!1}),document.addEventListener("mouseout",function(t){if(a&&!t.toElement&&!t.relatedTarget){var s=n(i);"left"===e&&(d.classList.add("grow-right"),r.style.width="2px"),"right"===e&&(d.classList.add("grow-left"),r.style.width=s-2+"px")}})}();