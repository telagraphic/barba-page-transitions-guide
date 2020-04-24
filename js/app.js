barba.init({
  transitions: [
    {
      name: 'fade',
      async enter({current, next, trigger}) {
        console.log('fade: enter');

        const timeline = gsap.timeline();
        timeline
          .to(current.container, {opacity: 1, ease: 'circ'});

      },
      async leave({current, next, trigger}) {
        console.log('fade: leave');

        const timeline = gsap.timeline();
        timeline
          .to(current.container, {opacity: 0, ease: 'circ'});

        current.container.remove();

      }
    }
  ],
  debug: true
});
