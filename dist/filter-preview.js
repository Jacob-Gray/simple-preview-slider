!function(){var e,t,r=document.querySelector(".filter-preview"),s=r.querySelector(".image-wrapper"),d=s.querySelector(".filter-slider"),i=!1,a=0;function n(e){return parseInt(getComputedStyle(e).width)}function o(o){if(i){var l=n(r),u=(n(s),o.targetTouches?o.targetTouches[0].pageX:o.pageX),c=t-u;o.targetTouches||(t>u?(a<0&&a<c?a+=c:c>a&&(a=0),e="left"):t<u&&(a>0&&a>c?a+=c:c<a&&(a=0),e="right"));var g=u+a;g<=2?(d.classList.add("grow-right"),s.style.width="2px"):l-g<=2?(d.classList.add("grow-left"),s.style.width=l-2+"px"):(d.className="filter-slider",s.style.width=g/l*100+"%"),t=u}}function l(e){i=!0,r.classList.add("dragging");var d=e.targetTouches?e.targetTouches[0].pageX:e.pageX;a=n(s)-d,t=d}function u(){i=!1,r.classList.remove("dragging")}document.addEventListener("mouseout",function(t){!i||t.toElement||t.relatedTarget||("left"===e?(d.classList.add("grow-right"),s.style.width="2px"):"right"===e&&(d.classList.add("grow-left"),s.style.width=n(r)-2+"px"))}),window.addEventListener("mousemove",o),window.addEventListener("touchmove",o),d.addEventListener("mousedown",l),d.addEventListener("touchstart",l),window.addEventListener("mouseup",u),window.addEventListener("touchend",u)}();