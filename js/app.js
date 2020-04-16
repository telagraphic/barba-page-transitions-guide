barba.init({
  transitions: [
    {
      name: "hooks-container",
      enter({current, next, trigger}) {
        console.log('enter');

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .from(next.container, {opacity: 0})
            .to(next.container, {opacity: 1});
        })
      },
      leave({current, next, trigger}) {
        console.log('leave');

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              // current.container.remove();
            }
          })

          timeline
            .to(current.container, {opacity: 0});
        })
      }
    }
  ],
  debug: true
});
