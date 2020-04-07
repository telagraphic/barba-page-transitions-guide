# Links

- [Barba.js Repo](https://github.com/barbajs/barba)
- [Barba.js Docs](https://barba.js.org/docs/getstarted/intro/)


# Learning

- [SuperHi Course](https://www.superhi.com/courses/smooth-page-transitions-effects)
- [DesignCourse How To](https://www.youtube.com/watch?v=aMucZErEdZg)
- [karanmhatre1 Repo](https://github.com/karanmhatre1/barba-page-transition-example)



# CSS

- [Grid Sticky Footer](https://dev.to/niorad/keeping-the-footer-at-the-bottom-with-css-grid-15mf)



# Notes

## Hooks

**beforeEnter** will display container visible on the page before **enter** hook, will need to set **opacity:0** at top of **beforeEnter** hook if animating to **opacity:1** on the **enter** hook.

**Fadein Stagger**: set the original styles to **opacity:0** then do changes in **to()** methods.



## Namespaces


## Data

### next/current

**data.next.html** will return a string, will need to be parsed into HTML with the (DOMParser)[https://developer.mozilla.org/en-US/docs/Web/API/DOMParser].
