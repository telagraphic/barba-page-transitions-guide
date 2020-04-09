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
      },
      enter({current, next, trigger}) {
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .from(next.container, {opacity: 0, y: 50})
            .to(next.container, {opacity: 1, y: 0, ease: 'power4.out', duration: .25});
        })
      },
      leave({current, next, trigger}) {
        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              current.container.remove();
            }
          })

          timeline
            .to(current.container, {opacity: 0, y: 50});
        })
      }
    },
    {
      name: "hooks",
      from: {
        namespace: ['hooks']
      },
      to: {
        namespace: ['index']
      },
      before({current, next, trigger}) {
        console.log('before');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'before';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(hooksHeader, {opacity: 0})
            .to(hooksHeader, {opacity: 1, duration: 1});
        })
      },
      beforeEnter({current, next, trigger}) {
        console.log('before entering');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'before entering';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(hooksHeader, {opacity: 0})
            .to(hooksHeader, {opacity: 1, duration: 1});
        })
      },
      enter({current, next, trigger}) {
        console.log('entering');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'entering';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(hooksHeader, {opacity: 0})
            .to(hooksHeader, {opacity: 1, duration: 1});
        })
      },
      afterEnter({current, next, trigger}) {
        console.log('after entering');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'after entering';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(hooksHeader, {opacity: 0})
            .to(hooksHeader, {opacity: 1, duration: 1});
        })
      },
      beforeLeave({current, next, trigger}) {
        console.log('before leaving');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'before leaving';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(hooksHeader, {opacity: 0})
            .to(hooksHeader, {opacity: 1, duration: 1});
        })
      },
      leave({current, next, trigger}) {
        console.log('leaving');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'leaving';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })

          timeline
            .set(hooksHeader, {opacity: 0})
            .to(hooksHeader, {opacity: 1, duration: 1});
        })
      },
      afterLeave({current, next, trigger}) {
        console.log('after leaving');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'after leaving';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              // current.container.remove();
            }
          })

          timeline
            .set(hooksHeader, {opacity: 0})
            .to(hooksHeader, {opacity: 1, duration: 1});
        })
      },
      after({current, next, trigger}) {
        console.log('after');

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              current.container.remove();
            }
          })
        })
      }
    }
  ],
  debug: true
})
