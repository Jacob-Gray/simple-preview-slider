!function(){var e,t,r=document.querySelector(".filter-preview"),d=r.querySelector(".image-wrapper"),s=d.querySelector(".filter-slider"),i=!1,a=0;function n(e){return parseInt(getComputedStyle(e).width)}function o(o){if(o.preventDefault(),i){var l=n(r),u=(n(d),o.targetTouches?o.targetTouches[0].pageX:o.pageX),c=t-u;t>u?(a<0&&a<c?a+=c:c>a&&(a=0),e="left"):t<u&&(a>0&&a>c?a+=c:c<a&&(a=0),e="right");var g=u+a;g<=2?(s.classList.add("grow-right"),d.style.width="2px"):l-g<=2?(s.classList.add("grow-left"),d.style.width=l-2+"px"):(s.className="filter-slider",d.style.width=g/l*100+"%"),t=u}}function l(e){i=!0,r.classList.add("dragging");var s=e.targetTouches?e.targetTouches[0].pageX:e.pageX;a=n(d)-s,t=s}function u(){i=!1,r.classList.remove("dragging")}document.addEventListener("mouseout",function(t){!i||t.toElement||t.relatedTarget||("left"===e?(s.classList.add("grow-right"),d.style.width="2px"):"right"===e&&(s.classList.add("grow-left"),d.style.width=n(r)-2+"px"))}),window.addEventListener("mousemove",o),window.addEventListener("touchmove",o),s.addEventListener("mousedown",l),s.addEventListener("touchstart",l),window.addEventListener("mouseup",u),window.addEventListener("touchend",u)}();