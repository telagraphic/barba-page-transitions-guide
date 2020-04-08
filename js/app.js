barba.init({
  transitions: [
    {
      name: 'fade',
      once({current, next, trigger}) {
        return new Promise(resolve=> {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })
        })

        
      },
      enter({current, next, trigger}) {},
      leave({current, next, trigger}) {}
    },
  ],
  debug: true
})
