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
          .from(current.container, {opacity: 1})
          .to(current.container, {opacity: 0})
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
          .from(next.container, {opacity: 0})
          .to(next.container, {opacity: 1})
      })
    }
  }],
  views: [],
  debug: true
})
