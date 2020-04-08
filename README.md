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

### Timing & Content 'Flickering'

Hooks are like css animation steps, with a lifecycle that affects each successive step.
If you set an element to opacity: 0 with some **GSAP** code in an **enter** hook, but then add a **beforeEnter** hook, the container will be visible during the **beforeEnter** hook then hide.  This appears as a flicker and you'll be wondering what the hell.

When incorporating barba.js with your site, you will need to really think your base css styles and how changes in the barba hooks need to be written.

**beforeEnter** will display container visible on the page before **enter** hook, will need to set **opacity:0** at top of **beforeEnter** hook if animating to **opacity:1** on the **enter** hook.

**Fadein Stagger**: set the original styles to **opacity:0** then do changes in **to()** methods.


## Namespaces

Namespaces are tied to their **data-barba-namespace="about"** tags on the container for a page.
This allows you to target a page and perform some custom code.
For instance, you have a page transition that occurs on every page transition but on the posts page you would
like to slowly stagger fade the list of posts.

## Data

### next/current

**data.next.html** will return a string, will need to be parsed into HTML with the (DOMParser)[https://developer.mozilla.org/en-US/docs/Web/API/DOMParser].
