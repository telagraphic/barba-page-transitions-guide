const body = document.querySelector('body');

const interstitial = document.createElement('section');
interstitial.classList.add('interstitial');

const interstitialHeader = document.createElement('h1');
interstitialHeader.innerText = 'Interstitial';
interstitial.appendChild(interstitialHeader);

body.appendChild(interstitial);

barba.init({
  transitions: [{
    name: 'fade',
    once({current, next, trigger}) {
      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
          }
        })

        timeline
          .set('nav a', {opacity: 0})
          .set('.header__title', {y: '-100%'})
          .to('nav a', {opacity: 1, stagger: .15, delay: .25}, 0)
          .to('.header__title', {y: '0%', ease: "power4.out"}, 0);
      })
    },
    leave({current, next, trigger}) {
      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
            current.container.remove();
          }
        })

        timeline
          .from(current.container, {opacity: 1}, 0)
          .to(current.container, {opacity: 0, duration: .5}, 0)
          .to('.header__title', {y: -100, ease: 'sine'}, 0)
      })
    },
    beforeEnter({current, next, trigger}) {
      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
          }
        })

        timeline
          .to('.interstitial', {y: 0, duration: .25})
          .to('.interstitial', {y: '100%', delay: .5});

      })
    },
    enter({current, next, trigger}) {
      next.container.style.opacity = 0;
      const pageTitle = document.querySelector('.header__title');
      pageTitle.innerText = next.container.getAttribute('data-title');

      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
          }
        })

        timeline
          .set(next.container, {opacity: 0}, 0)
          .to(next.container, {opacity: 1, duration: .5}, 0)
          .to('.header__title', {y: 0, ease: 'sine'}, 0)
      })
    }
  }],
  views: [{
    namespace: 'posts',
    afterEnter({current, next, trigger}) {
      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
          }
        })

        timeline
          .to('article.post', {opacity: 1, stagger: .1})
      })
    },
    beforeLeave({current, next, trigger}) {
      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
          }
        })

        timeline
          .to('.posts__list', {opacity: 0})
      })
    }
  }],
  debug: true
})
