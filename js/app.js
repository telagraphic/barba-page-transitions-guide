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
      sync: true,
      name: 'fade',
      async enter({current, next, trigger}) {
        console.log('fade: enter');

        let done = this.async();
        await delay(1000);

        const timeline = gsap.timeline();
        timeline
          .set(next.container, {opacity: 0})
          .to(next.container, {opacity: 1, duration: 2, ease: 'circ'});

        done();
      },
      async leave({current, next, trigger}) {
        console.log('fade: leave');

        let done = this.async();

        const timeline = gsap.timeline();
        timeline
          .to(current.container, {opacity: 0, duration: 1, ease: 'circ'});

        await delay(1000);
        done();
      }
    }
  ],
  debug: true
});
