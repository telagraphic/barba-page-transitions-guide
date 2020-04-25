const body = document.querySelector('body');

const interstitial = document.createElement('section');
interstitial.classList.add('interstitial');

const interstitialHeader = document.createElement('h1');
interstitialHeader.innerText = 'Transition';
interstitial.appendChild(interstitialHeader);

body.appendChild(interstitial);

barba.init({
  transitions: [
    {
      name: 'fade',
      once({current, next, trigger}) {
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set('nav a', {opacity: 0, y: '-100%'})
            .set('.github-button-section', {opacity: 0, y: '-100%'})
            .set('.page', {opacity: 0, y: 50})
            .to('nav a', {opacity: 1, stagger: .1, y: '0%', delay: .15}, 0)
            .to('.github-button-section', {opacity: 1, y: '0%', duration: 1}, 0)
            .to('.page', {opacity: 1, y: 0}, 0);
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
            .set(next.container, {opacity: 0, y: 50})
            .to('.interstitial', {y: '100%', duration: 1, delay: 2})
            .to('.interstitial h1', {opacity: 1}, 0)
            .to('.interstitial h1', {opacity: 0}, 1.5);

        })
      },
      enter({current, next, trigger}) {
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(next.container, {opacity: 0, y: 50})
            .to(next.container, {opacity: 1, y: 0, ease: 'circ', duration: .25});
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
            .to(current.container, {opacity: 0, y: 50})
            .to('.interstitial', {y: 0, duration: .5, ease: 'circ'});
        })
      }
    },
  ],
  debug: true
})
