"use strict";var burger=document.querySelector(".burger"),lineTop=burger.querySelector(".burger__top-line"),lineMid=burger.querySelector(".burger__mid-line"),lineBot=burger.querySelector(".burger__bot-line"),mainNavList=document.querySelector(".main-nav__list");mainNavList.addEventListener("click",(function(e){e.target!==burger&&(mainNavList.classList.remove("show"),lineTop.classList.remove("active"),lineMid.classList.remove("active"),lineBot.classList.remove("active"))})),burger.addEventListener("click",(function(){lineTop.classList.toggle("active"),lineMid.classList.toggle("active"),lineBot.classList.toggle("active"),mainNavList.classList.toggle("show")})),document.addEventListener("keydown",(function(e){27===e.keyCode&&(lineTop.classList.remove("active"),lineMid.classList.remove("active"),lineBot.classList.remove("active"),mainNavList.classList.remove("show"))}));var mainPage=document.querySelector(".main-page"),feedbackPage=document.querySelector(".feedback-page"),orderPage=document.querySelector(".order-page"),currentDate=(new Date).toLocaleDateString(),offerDate=document.querySelector(".offer__date");if(mainPage||feedbackPage){var upBtn=document.querySelector(".upBtn");window.addEventListener("scroll",(function(){window.pageYOffset>600?upBtn.classList.add("upBtnShow"):window.pageYOffset<600&&upBtn.classList.remove("upBtnShow")}),{passive:!0}),upBtn.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}if(mainPage){offerDate.textContent=currentDate;var heightInput=document.querySelector("#height"),weightInput=document.querySelector("#weight"),resultBtn=document.querySelector(".imt-calc__btn"),result=document.querySelector("#calc-result");resultBtn.addEventListener("click",(function(){var e=heightInput.value/100,t=weightInput.value,a=Math.floor(t/(e*e));if(!a||a<16||a>100)return alert("Введите верное значение"),e=0,void(t=0);result.textContent=a}))}if(feedbackPage){var addFeedback=function(e,t,a){var n,c=feedbackForm.querySelectorAll('[name="star"]');if(a)n=a;else for(var r=0;r<c.length;r++)c[r].checked&&(n=c[r].value);if(t.length<2||e.length<2)alert("Все поля должны быть заполнены");else{var o=document.createElement("li"),i=document.createElement("div"),d=document.createElement("img"),s=document.createElement("p"),l=document.createElement("div"),u=document.createElement("img"),m=document.createElement("p"),f=document.createElement("p");o.classList.add("section-feedback__item"),i.classList.add("section-feedback__person"),d.classList.add("section-feedback__avatar"),s.classList.add("section-feedback__name"),l.classList.add("section-feedback__rate-date"),u.classList.add("section-feedback__rate"),m.classList.add("section-feedback__date"),f.classList.add("section-feedback__text"),d.setAttribute("src","./images/avatar-blank.png"),u.setAttribute("src","./images/stars-".concat(n,".png")),u.setAttribute("width","150"),s.textContent=e,m=currentDate,f.textContent=t,i.append(d),i.append(s),l.append(u),l.append(m),o.append(i),o.append(l),o.append(f),feedbackList.append(o),localStorage.setItem("feedback",JSON.stringify([e,t,n])),nameInput.value="",feedbackText.value=""}};offerDate.textContent=currentDate;var feedbackList=feedbackPage.querySelector(".feedback__list"),feedbackForm=feedbackPage.querySelector(".feedback-form"),nameInput=feedbackForm.querySelector(".feedback-form__name"),feedbackText=feedbackForm.querySelector(".feedback-form__text"),photoInput=feedbackForm.querySelector(".feedback-form__photo"),sendBtn=feedbackForm.querySelector(".feedback-form__btn");if(null!==localStorage.getItem("feedback")){var oldFeedback=JSON.parse(localStorage.getItem("feedback")),name=oldFeedback[0],text=oldFeedback[1],rating=oldFeedback[2];console.log(rating),addFeedback(name,text,rating)}photoInput.onchange=function(){this.files[0].size>3e5?(alert("Размер файла слишком большой!"),this.value=""):(alert("Сервер перегружен, к сожалению загрузка фото сейчас не возможна"),this.value="")},sendBtn.addEventListener("click",(function(e){e.preventDefault(),addFeedback(nameInput.value,feedbackText.value)}))}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGluZVRvcCIsImxpbmVNaWQiLCJsaW5lQm90IiwibWFpbk5hdkxpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlZiIsInRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRvZ2dsZSIsImV2dCIsImtleUNvZGUiLCJtYWluUGFnZSIsImZlZWRiYWNrUGFnZSIsIm9yZGVyUGFnZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm9mZmVyRGF0ZSIsInVwQnRuIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJhZGQiLCJwYXNzaXZlIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInRleHRDb250ZW50IiwiaGVpZ2h0SW5wdXQiLCJ3ZWlnaHRJbnB1dCIsInJlc3VsdEJ0biIsInJlc3VsdCIsImhWYWx1ZSIsInZhbHVlIiwid1ZhbHVlIiwicmVzdWx0VmFsdWUiLCJNYXRoIiwiZmxvb3IiLCJhbGVydCIsImFkZEZlZWRiYWNrIiwibmFtZSIsInRleHQiLCJyYXRpbmciLCJyYXRpbmdWYWx1ZSIsInN0YXJzIiwiZmVlZGJhY2tGb3JtIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJjaGVja2VkIiwibmV3SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJuZXdJdGVtUGVyc29uIiwibmV3SXRlbVBob3RvIiwibmV3SXRlbU5hbWUiLCJuZXdJdGVtUmF0ZVdyYXBwZXIiLCJuZXdJdGVtUmF0ZSIsIm5ld0l0ZW1EYXRlIiwibmV3SXRlbVRleHQiLCJzZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJhcHBlbmQiLCJmZWVkYmFja0xpc3QiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWVJbnB1dCIsImZlZWRiYWNrVGV4dCIsInBob3RvSW5wdXQiLCJzZW5kQnRuIiwiZ2V0SXRlbSIsIm9sZEZlZWRiYWNrIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwib25jaGFuZ2UiLCJ0aGlzIiwiZmlsZXMiLCJzaXplIiwiZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiYUFDQSxJQUFNQSxPQUFTQyxTQUFTQyxjQUFjLFdBQ2hDQyxRQUFVSCxPQUFPRSxjQUFjLHFCQUMvQkUsUUFBVUosT0FBT0UsY0FBYyxxQkFDL0JHLFFBQVVMLE9BQU9FLGNBQWMscUJBQy9CSSxZQUFjTCxTQUFTQyxjQUFjLG1CQUUzQ0ksWUFBWUMsaUJBQWlCLFNBQVMsU0FBQUMsR0FBc0JBLEVBQVZDLFNBQy9CVCxTQUNYTSxZQUFZSSxVQUFVQyxPQUFPLFFBQzdCUixRQUFRTyxVQUFVQyxPQUFPLFVBQ3pCUCxRQUFRTSxVQUFVQyxPQUFPLFVBQ3pCTixRQUFRSyxVQUFVQyxPQUFPLGNBSWpDWCxPQUFPTyxpQkFBaUIsU0FBUyxXQUM3QkosUUFBUU8sVUFBVUUsT0FBTyxVQUN6QlIsUUFBUU0sVUFBVUUsT0FBTyxVQUN6QlAsUUFBUUssVUFBVUUsT0FBTyxVQUN6Qk4sWUFBWUksVUFBVUUsT0FBTyxXQUdqQ1gsU0FBU00saUJBQWlCLFdBQVcsU0FBVU0sR0FDdkIsS0FBaEJBLEVBQUlDLFVBQ0pYLFFBQVFPLFVBQVVDLE9BQU8sVUFDekJQLFFBQVFNLFVBQVVDLE9BQU8sVUFDekJOLFFBQVFLLFVBQVVDLE9BQU8sVUFDekJMLFlBQVlJLFVBQVVDLE9BQU8sWUM1QnJDLElBQU1JLFNBQVdkLFNBQVNDLGNBQWMsY0FDbENjLGFBQWVmLFNBQVNDLGNBQWMsa0JBQ3RDZSxVQUFZaEIsU0FBU0MsY0FBYyxlQUNuQ2dCLGFBQWMsSUFBSUMsTUFBT0MscUJBQ3pCQyxVQUFZcEIsU0FBU0MsY0FBYyxnQkFFekMsR0FBSWEsVUFBWUMsYUFBYyxDQUMxQixJQUFNTSxNQUFRckIsU0FBU0MsY0FBYyxVQUVyQ3FCLE9BQU9oQixpQkFBaUIsVUFBVSxXQUMxQmdCLE9BQU9DLFlBQWMsSUFDckJGLE1BQU1a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QUFJQyxZQUFjUCxLQUFLUSxNQUFNVixhQUFhUSxRQUFRLGFBQzlDL0IsS0FBT2dDLFlBQVksR0FDbkIvQixLQUFPK0IsWUFBWSxHQUNuQjlCLE9BQVM4QixZQUFZLEdBQ3pCRSxRQUFRQyxJQUFJakMsUUFDWkgsWUFBWUMsS0FBTUMsS0FBTUMsUUFHNUIyQixXQUFXTyxTQUFXLFdBQ2RDLEtBQUtDLE1BQU0sR0FBR0MsS0FBTyxLQUNyQnpDLE1BQU0saUNBQ051QyxLQUFLNUMsTUFBUSxLQUViSyxNQUFNLG1FQUNOdUMsS0FBSzVDLE1BQVEsS0FrRXJCcUMsUUFBUWxFLGlCQUFpQixTQUFTLFNBQVU0RSxHQUN4Q0EsRUFBRUMsaUJBRUYxQyxZQUFZNEIsVUFBVWxDLE1BQU9tQyxhQUFhbkMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKVxyXG5jb25zdCBsaW5lVG9wID0gYnVyZ2VyLnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXJfX3RvcC1saW5lJylcclxuY29uc3QgbGluZU1pZCA9IGJ1cmdlci5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyX19taWQtbGluZScpXHJcbmNvbnN0IGxpbmVCb3QgPSBidXJnZXIucXVlcnlTZWxlY3RvcignLmJ1cmdlcl9fYm90LWxpbmUnKVxyXG5jb25zdCBtYWluTmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbGlzdCcpXHJcblxyXG5tYWluTmF2TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICh7IHRhcmdldCB9KSB7XHJcbiAgICBpZiAodGFyZ2V0ICE9PSBidXJnZXIpIHtcclxuICAgICAgICBtYWluTmF2TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgICAgICBsaW5lVG9wLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgbGluZU1pZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIGxpbmVCb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH1cclxufSlcclxuXHJcbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxpbmVUb3AuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgIGxpbmVNaWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgIGxpbmVCb3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgIG1haW5OYXZMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgIGlmIChldnQua2V5Q29kZSA9PT0gMjcpIHtcclxuICAgICAgICBsaW5lVG9wLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgbGluZU1pZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgIGxpbmVCb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICBtYWluTmF2TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JylcclxuICAgIH1cclxufSkiLCJjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXBhZ2UnKVxyXG5jb25zdCBmZWVkYmFja1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2stcGFnZScpXHJcbmNvbnN0IG9yZGVyUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlci1wYWdlJylcclxuY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpXHJcbmNvbnN0IG9mZmVyRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vZmZlcl9fZGF0ZScpXHJcblxyXG5pZiAobWFpblBhZ2UgfHwgZmVlZGJhY2tQYWdlKSB7XHJcbiAgICBjb25zdCB1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cEJ0bicpXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gNjAwKSB7XHJcbiAgICAgICAgICAgIHVwQnRuLmNsYXNzTGlzdC5hZGQoJ3VwQnRuU2hvdycpXHJcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA2MDApIHtcclxuICAgICAgICAgICAgdXBCdG4uY2xhc3NMaXN0LnJlbW92ZSgndXBCdG5TaG93JylcclxuICAgICAgICB9XHJcbiAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcclxuXHJcblxyXG4gICAgdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuaWYgKG1haW5QYWdlKSB7XHJcbiAgICBvZmZlckRhdGUudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0ZVxyXG4gICAgY29uc3QgaGVpZ2h0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVpZ2h0JylcclxuICAgIGNvbnN0IHdlaWdodElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlaWdodCcpXHJcbiAgICBjb25zdCByZXN1bHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW10LWNhbGNfX2J0bicpXHJcbiAgICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGMtcmVzdWx0JylcclxuXHJcbiAgICByZXN1bHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGhWYWx1ZSA9IGhlaWdodElucHV0LnZhbHVlIC8gMTAwXHJcbiAgICAgICAgbGV0IHdWYWx1ZSA9IHdlaWdodElucHV0LnZhbHVlXHJcbiAgICAgICAgbGV0IHJlc3VsdFZhbHVlID0gTWF0aC5mbG9vcigod1ZhbHVlIC8gKGhWYWx1ZSAqIGhWYWx1ZSkpKVxyXG4gICAgICAgIGlmICghcmVzdWx0VmFsdWUgfHwgcmVzdWx0VmFsdWUgPCAxNiB8fCByZXN1bHRWYWx1ZSA+IDEwMCkge1xyXG4gICAgICAgICAgICBhbGVydCgn0JLQstC10LTQuNGC0LUg0LLQtdGA0L3QvtC1INC30L3QsNGH0LXQvdC40LUnKVxyXG4gICAgICAgICAgICBoVmFsdWUgPSAwXHJcbiAgICAgICAgICAgIHdWYWx1ZSA9IDBcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LnRleHRDb250ZW50ID0gcmVzdWx0VmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5pZiAoZmVlZGJhY2tQYWdlKSB7XHJcbiAgICBvZmZlckRhdGUudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0ZVxyXG4gICAgY29uc3QgZmVlZGJhY2tMaXN0ID0gZmVlZGJhY2tQYWdlLnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fbGlzdCcpXHJcbiAgICBjb25zdCBmZWVkYmFja0Zvcm0gPSBmZWVkYmFja1BhZ2UucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrLWZvcm0nKVxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZmVlZGJhY2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjay1mb3JtX19uYW1lJylcclxuICAgIGNvbnN0IGZlZWRiYWNrVGV4dCA9IGZlZWRiYWNrRm9ybS5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2stZm9ybV9fdGV4dCcpXHJcbiAgICBjb25zdCBwaG90b0lucHV0ID0gZmVlZGJhY2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjay1mb3JtX19waG90bycpXHJcbiAgICBjb25zdCBzZW5kQnRuID0gZmVlZGJhY2tGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjay1mb3JtX19idG4nKVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmVlZGJhY2snKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBvbGRGZWVkYmFjayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZlZWRiYWNrJykpXHJcbiAgICAgICAgbGV0IG5hbWUgPSBvbGRGZWVkYmFja1swXVxyXG4gICAgICAgIGxldCB0ZXh0ID0gb2xkRmVlZGJhY2tbMV1cclxuICAgICAgICBsZXQgcmF0aW5nID0gb2xkRmVlZGJhY2tbMl1cclxuICAgICAgICBjb25zb2xlLmxvZyhyYXRpbmcpXHJcbiAgICAgICAgYWRkRmVlZGJhY2sobmFtZSwgdGV4dCwgcmF0aW5nKVxyXG4gICAgfVxyXG5cclxuICAgIHBob3RvSW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZXNbMF0uc2l6ZSA+IDMwMDAwMCkge1xyXG4gICAgICAgICAgICBhbGVydChcItCg0LDQt9C80LXRgCDRhNCw0LnQu9CwINGB0LvQuNGI0LrQvtC8INCx0L7Qu9GM0YjQvtC5IVwiKVxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gJydcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgn0KHQtdGA0LLQtdGAINC/0LXRgNC10LPRgNGD0LbQtdC9LCDQuiDRgdC+0LbQsNC70LXQvdC40Y4g0LfQsNCz0YDRg9C30LrQsCDRhNC+0YLQviDRgdC10LnRh9Cw0YEg0L3QtSDQstC+0LfQvNC+0LbQvdCwJylcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEZlZWRiYWNrKG5hbWUsIHRleHQsIHJhdGluZykge1xyXG5cclxuICAgICAgICBsZXQgcmF0aW5nVmFsdWVcclxuICAgICAgICBsZXQgc3RhcnMgPSBmZWVkYmFja0Zvcm0ucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJzdGFyXCJdJylcclxuXHJcbiAgICAgICAgaWYgKHJhdGluZykge1xyXG4gICAgICAgICAgICByYXRpbmdWYWx1ZSA9IHJhdGluZ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFyc1tpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF0aW5nVmFsdWUgPSBzdGFyc1tpXS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoIDwgMiB8fCBuYW1lLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9CS0YHQtSDQv9C+0LvRjyDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvdGLJylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgICAgICBsZXQgbmV3SXRlbVBlcnNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGV0IG5ld0l0ZW1QaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgbGV0IG5ld0l0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgbGV0IG5ld0l0ZW1SYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbGV0IG5ld0l0ZW1SYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBsZXQgbmV3SXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBsZXQgbmV3SXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbiAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWZlZWRiYWNrX19pdGVtJylcclxuICAgICAgICBuZXdJdGVtUGVyc29uLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tZmVlZGJhY2tfX3BlcnNvbicpXHJcbiAgICAgICAgbmV3SXRlbVBob3RvLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tZmVlZGJhY2tfX2F2YXRhcicpXHJcbiAgICAgICAgbmV3SXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1mZWVkYmFja19fbmFtZScpXHJcbiAgICAgICAgbmV3SXRlbVJhdGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tZmVlZGJhY2tfX3JhdGUtZGF0ZScpXHJcbiAgICAgICAgbmV3SXRlbVJhdGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1mZWVkYmFja19fcmF0ZScpXHJcbiAgICAgICAgbmV3SXRlbURhdGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1mZWVkYmFja19fZGF0ZScpXHJcbiAgICAgICAgbmV3SXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1mZWVkYmFja19fdGV4dCcpXHJcblxyXG4gICAgICAgIG5ld0l0ZW1QaG90by5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuL2ltYWdlcy9hdmF0YXItYmxhbmsucG5nJylcclxuICAgICAgICBuZXdJdGVtUmF0ZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2ltYWdlcy9zdGFycy0ke3JhdGluZ1ZhbHVlfS5wbmdgKVxyXG4gICAgICAgIG5ld0l0ZW1SYXRlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMTUwJylcclxuXHJcbiAgICAgICAgbmV3SXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lXHJcbiAgICAgICAgbmV3SXRlbURhdGUgPSBjdXJyZW50RGF0ZVxyXG4gICAgICAgIG5ld0l0ZW1UZXh0LnRleHRDb250ZW50ID0gdGV4dFxyXG5cclxuICAgICAgICBuZXdJdGVtUGVyc29uLmFwcGVuZChuZXdJdGVtUGhvdG8pXHJcbiAgICAgICAgbmV3SXRlbVBlcnNvbi5hcHBlbmQobmV3SXRlbU5hbWUpXHJcbiAgICAgICAgbmV3SXRlbVJhdGVXcmFwcGVyLmFwcGVuZChuZXdJdGVtUmF0ZSlcclxuICAgICAgICBuZXdJdGVtUmF0ZVdyYXBwZXIuYXBwZW5kKG5ld0l0ZW1EYXRlKVxyXG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kKG5ld0l0ZW1QZXJzb24pXHJcbiAgICAgICAgbmV3SXRlbS5hcHBlbmQobmV3SXRlbVJhdGVXcmFwcGVyKVxyXG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kKG5ld0l0ZW1UZXh0KVxyXG4gICAgICAgIGZlZWRiYWNrTGlzdC5hcHBlbmQobmV3SXRlbSlcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZlZWRiYWNrJywgSlNPTi5zdHJpbmdpZnkoW25hbWUsIHRleHQsIHJhdGluZ1ZhbHVlXSkpXHJcblxyXG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnXHJcbiAgICAgICAgZmVlZGJhY2tUZXh0LnZhbHVlID0gJydcclxuICAgIH1cclxuXHJcbiAgICBzZW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgYWRkRmVlZGJhY2sobmFtZUlucHV0LnZhbHVlLCBmZWVkYmFja1RleHQudmFsdWUpXHJcbiAgICB9KVxyXG59XHJcblxyXG4iXX0=