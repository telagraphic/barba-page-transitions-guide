function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function homeAnimation(next) {
  const timeline = gsap.timeline();
  timeline
    .set(next.container, {opacity: 0})
    .to(next.container, {opacity: 1, ease: 'circ'});
}

function leaveAnimation(current) {

  const timeline = gsap.timeline();
  timeline
    .to(current.container, {opacity: 0, ease: 'circ'});

}

barba.init({
  transitions: [
    {
      sync: true,
      name: 'fade',
      async enter({current, next, trigger}) {
        console.log('index-to-guide: enter');

        homeAnimation(next);
      },
      async leave({current, next, trigger}) {
        console.log('index-to-guide: leave');

        const done = this.async();

        leaveAnimation(current);

        await delay(1000);
        done();
        // current.container.remove();


      }
    }
  ],
  debug: true
})
