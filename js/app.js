barba.init({
  transitions: [
    {
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
      name: 'index-to-guide',
      from: {
          namespace: ['index', 'guide']
      },
      to: {
          namespace: ['guide', 'index']
      },
      leave({current, next, trigger}) {
        console.log('index-to-guide: leave');
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              current.container.remove();
            }
          })

          timeline
            .to(current.container, {opacity: 0, x: 500, ease: 'circ'});
        })
      },
      enter({current, next, trigger}) {
        console.log('index-to-guide: enter');
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .from(next.container, {opacity: 0, x: -500})
            .to(next.container, {opacity: 1, x: 0, ease: 'circ'});
        })
      }
    },
    {
      name: 'index-to-resources',
      from: {
          namespace: ['index', 'resources']
      },
      to: {
          namespace: ['resources', 'index']
      },
      leave({current, next, trigger}) {
        console.log('index-to-resources: leave');
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              current.container.remove();
            }
          })

          timeline
            .to(current.container, {opacity: 0, x: -500, ease: 'circ'});
        })
      },
      enter({current, next, trigger}) {
        console.log('index-to-resources: enter');
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .from(next.container, {opacity: 0, x: 500})
            .to(next.container, {opacity: 1, x: 0, ease: 'circ'});
        })
      }
    },
    {
      name: 'to-guide',
      to: {
          namespace: ['guide']
      },
      leave({current, next, trigger}) {
        console.log('to-guide: leave');
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              current.container.remove();
            }
          })

          timeline
            .to(current.container, {opacity: 0, y: 500, ease: 'circ'});
        })
      },
      enter({current, next, trigger}) {
        console.log('to-guide: enter');
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(next.container, {overflow: 'hidden'})
            .from(next.container, {opacity: 0, y: 500})
            .to(next.container, {opacity: 1, y: 0, ease: 'circ'});
        })
      }
    }
  ],
  debug: true
})
