barba.init({
  transitions: [{
    name: 'fade',
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
          .to('.header__title', {opacity: 0, duration: .5}, 0)
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
          .set('.header__title', {opacity: 0}, 0)
          .set(next.container, {opacity: 0}, 0)
          .to(next.container, {opacity: 1, duration: .5}, 0)
          .to('.header__title', {opacity: 1, duration: .5}, 0)
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
          .to('article.post', {opacity: 0, stagger: .1})
      })
    }
  }],
  debug: true
})
