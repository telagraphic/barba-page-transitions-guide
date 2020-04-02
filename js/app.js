barba.init({
  transitions: [{
    name: 'fade',
    beforeLeave({current, next, trigger}) {

      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
          }
        })

        timeline
          .to('.header__title', {opacity: 0, duration: .25})
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
          .from(current.container, {opacity: 1})
          .to(current.container, {opacity: 0, duration: .5})
      })
    },
    beforeEnter({current, next, trigger}) {
      const pageTitle = document.querySelector('.header__title');
      pageTitle.innerText = next.container.getAttribute('data-title');
      next.container.style.opacity = 0;

      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
          }
        })

        timeline
          .set(next.container, {opacity: 0})
          .set('.header__title', {opacity: 0})
          .to('.header__title', {opacity: 1, duration: .25})
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
          .set(next.container, {opacity: 0})
          .to(next.container, {opacity: 1, duration: .25})
      })
    }
  }],
  views: [
    {

    }
  ],
  debug: true
})
