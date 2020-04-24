function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  transitions: [
    {
      name: 'fade',
      async enter({current, next, trigger}) {
        console.log('fade: enter');

        let done = this.async();

        const timeline = gsap.timeline();
        timeline
          .to(current.container, {opacity: 1, ease: 'circ'});

        await delay(1000);
        done();

        // return new Promise(resolve => {
        //   const timeline = gsap.timeline({
        //     onComplete() {
        //       resolve();
        //
        //     }
        //   });
        //
        //   timeline
        //     .from(next.container, {opacity: 0})
        //     .to(next.container, {opacity: 1, ease: 'circ'});
        // });
      },
      async leave({current, next, trigger}) {
        console.log('fade: leave');

        let done = this.async();

        const timeline = gsap.timeline();
        timeline
          .to(current.container, {opacity: 0, ease: 'circ'});

        await delay(2000);
        current.container.remove();
        done();

        // return new Promise(resolve => {
        //   const timeline = gsap.timeline({
        //     onComplete() {
        //       resolve();
        //       current.container.remove();
        //     }
        //   });
        //
        //   timeline
        //     .to(current.container, {opacity: 0, ease: 'circ'});
        // });
      }
    }
  ],
  debug: true
});
