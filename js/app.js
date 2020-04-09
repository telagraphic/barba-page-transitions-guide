barba.init({
  transitions: [
    {
      name: "hooks",
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
        console.log('beforeEnter');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'beforeEnter';

        const hiliteScript = document.createElement('script');
        hiliteScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/prism.min.js');
        next.container.appendChild(hiliteScript);

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
        console.log('enter');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'enter';

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
        console.log('afterEnter');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'afterEnter';

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
        console.log('beforeLeave');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'beforeLeave';

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
        console.log('leave');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'leave';

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
        console.log('afterLeave');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'afterLeave';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
              current.container.remove();
            }
          })

          timeline
            .set(hooksHeader, {opacity: 0})
            .to(hooksHeader, {opacity: 1, duration: 1});
        })
      },
      after({current, next, trigger}) {
        console.log('after');

        let hooksHeader = document.querySelector('.hooks__header');
        hooksHeader.textContent = 'after';

        return new Promise(resolve => {

          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            }
          })
        })
      }
    }
  ],
  debug: true
})

// barba.hooks.beforeEnter( ( data ) => {
//   const body = document.querySelector('body');
//
//   body.appendChild(hiliteScript);
//
// });
