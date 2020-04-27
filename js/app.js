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
      enter({current, next, trigger}) {
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .from(next.container, {opacity: 0, y: 50})
            .to(next.container, {opacity: 1, y: 0, ease: 'power4.out', duration: .25});
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
            .to(current.container, {opacity: 0, y: 50});
        })
      }
    },
  ],
  views: [
    {
      namespace: 'guide',
      afterEnter({current, next, trigger}) {
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .to('.toc__chapter', {opacity: 1, stagger: .5, ease: 'circ'});
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
            .set('.toc__chapter', {x: 0, opacity: 1})
            .to('.toc__chapter', {x: 100, ease: 'sine'}, 0)
            .to('.toc__chapter', {opacity: 0}, 0);
        })
      }
    },
    {
      namespace: 'resources',
      beforeEnter({current, next, trigger}) {
        const pageTitleElement = document.querySelector('.resources__header')
        pageTitleElement.innerText = next.container.getAttribute('data-title');
      }
    }
  ],
  debug: true
})
