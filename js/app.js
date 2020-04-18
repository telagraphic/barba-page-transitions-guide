
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
      once({current, next, trigger}) {
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set('nav a', {opacity: 0, y: '-100%'})
            .set('.github-button-section', {opacity: 0, y: '-100%'})
            .set('.page', {opacity: 0, y: 50})
            .to('nav a', {opacity: 1, stagger: .1, y: '0%', delay: .15}, 0)
            .to('.github-button-section', {opacity: 1, y: '0%', duration: 1}, 0)
            .to('.page', {opacity: 1, y: 0}, 0);
        })
      }
    },
    {
      async leave({current, next, trigger}) {
        console.log('index-to-guide: leave');

        const done = this.async();

        const timeline = gsap.timeline();
        timeline
          .to(current.container, {opacity: 0, x: 500, ease: 'circ'});

        await delay(1000);
        done();

      },
      enter({current, next, trigger}) {
        console.log('index-to-guide: enter');

        const timeline = gsap.timeline();
        timeline
          .from(next.container, {opacity: 0, x: -500})
          .to(next.container, {opacity: 1, x: 0, ease: 'circ'});

      }
    }
  ],
  debug: true
})
