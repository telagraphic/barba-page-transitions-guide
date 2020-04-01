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
          .from('.page', {opacity: 1})
          .to('.page', {opacity: 0});
      })
    },
    enter({current, next, trigger}) {
      return new Promise(resolve => {

        const timeline = gsap.timeline({
          onComplete() {
            resolve();
            // current.container.remove();
          }
        })

        timeline
          .from('.page', {opacity: 0})
          .to('.page', {opacity: 1});
      })
    }
  }],
  views: [],
  debug: true
})
