barba.init({
  transitions: [
    {
      name: "hooks-flicker",
      beforeEnter({current, next, trigger}) {
        console.log('beforeEnter');

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          // Uncomment to fix flickering
          // timeline
          //   .from(next.container, {opacity: 0})
        })

      },
      enter({current, next, trigger}) {
        console.log('enter');

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(next.container, {opacity: 0}) // comment out
            .to(next.container, {opacity: 1});
        })
      },
      beforeLeave({current, next, trigger}) {
        console.log('beforeLeave');

      },
      leave({current, next, trigger}) {
        console.log('leave');

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              current.container.remove();
            }
          })

          timeline
            .to(current.container, {opacity: 0});
        })
      },
      afterLeave({current, next, trigger}) {
        console.log('afterLeave');

      }
    }
  ],
  debug: true
});
