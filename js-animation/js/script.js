let burgerBtn = document.querySelector('.burger');
let closeBtn = document.querySelector('.close');
let menu = document.querySelector('.menu');

let tl = gsap.timeline();

gsap.fromTo(".hero__title",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, ease: "power1.out", duration: 0.9 });

gsap.fromTo(".hero__btn",
  { opacity: 0, y: 50 },
  { y: 0, ease: "power3.out", opacity: 1, duration: 0.8 });

gsap.fromTo(".hero__descr",
  { opacity: 0 },
  { opacity: 1, ease: "sine.in", duration: 1 }).delay(1);

gsap.fromTo(".img-1",
  { opacity: 0, scale: 0.95 },
  { opacity: 1, scale: 1, ease: "power3.out", duration: 0.8 }).delay(1.4);

gsap.fromTo(".img-2",
  { opacity: 0, scale: 0.95 },
  { opacity: 1, scale: 1, ease: "power3.out", duration: 0.5 }).delay(1.6);

gsap.fromTo(".img-3",
  { opacity: 0, scale: 0.95 },
  { opacity: 1, scale: 1, ease: "power3.out", duration: 0.6 }).delay(1.8);

gsap.fromTo(".photos__author",
  { opacity: 0 },
  { opacity: 1, ease: "sine.in", duration: 1 }).delay(2);

burgerBtn.addEventListener('click', function () {

  menu.classList.add('menu--open');

  tl
    .fromTo(".menu--open",
      { opacity: 0 },
      { opacity: 1, ease: "sine.out", duration: 0.5 })

    .fromTo(".menu__top",
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, ease: "sine.out", duration: 0.5 })

    .fromTo(".menu__nav",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, ease: "power1.out", duration: 0.3 })

    .fromTo(".social",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, ease: "power1.out", duration: 0.3 })

    .fromTo(".sub-menu",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, ease: "power1.out", duration: 0.4 });

  tl.play();
});

closeBtn.addEventListener('click', function () {
  tl.reverse();
  setTimeout(() => {
    menu.classList.remove('menu--open');
    tl.clear()
  }, 2000)
});

