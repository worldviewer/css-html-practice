# The Exercise

Code the UI in semantic HTML and CSS. You can use something like http://www.lipsum.com/ (or any of the many variations of ipsum text out there) to fill in the copy. 

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/web-site-template.png" />
</p>

Using jQuery, make it so a modal will open up with the image displayed larger and in the center of the screen. The area around the large image should have a semi-transparent dark background (see web-site-template_modal.jpg)

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/web-site-template_modal.jpg" />
</p>

## Bonus

- Making the UI responsive down to mobile. I didn't include a mockup for this, so don't worry too much about making it look fabulous, just make it look okay on a smaller screen. 

- Closing the modal when the user clicks outside the image

## Unexpected Discoveries

- There is no parent CSS selector, so it appears impossible with CSS to activate an animation for the large icons which precede the h2's on h2 hover

- Ran into difficulties running a CSS animation on floated images

- CSS animations on page can alter the stacking order of navbars that have no 3d CSS animations assigned.  This is apparently a known bug and has an easy fix to simply apply ...

> transform: translate3d(0,0,0);

- Was surprised to learn that appending a DOM element in jQuery from another spot in the page actually removes it from the original.  Not a bug, just unexpected.  This resolves it ...

> $('#modal div').append($(img).clone());

- For some reason, this particular style of g+ icon is tricky to find in glyph form.  Found it in SVG.

- Discovered that ...

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/one-does-not-simply.jpg" />
</p>

- Use fill rather than color to paint SVG's, but appears to require that SVG is not included as img element

- CSS selector for the G+ SVG was tricky since the g and the plus are separate SVG path elements which must fire together ...

> .social-icons svg:hover path {}

- Getting the modals to properly center on the screen required some extra media query work

- Getting the modal to disappear on a click outside of the image required checking event.target ...

> if(!$(event.target).is('img')) {}

I was expecting that I'd be able to get this to work with ...

> $('#modal:not(img)').on('click', function(event) {}

But, jQuery does not appear to understand this.

- Tracking down and installing a copy of IE 5 was more difficult than I expected.  Installation would not work on a modern Macbook.  I had to install it on a much older Mac.  I tried fiddling with WineBottler to run more recent versions of Windows-only IE (6, 7 and 8) on a Modern Mac, but this crashed.

- Found that I could reduce code size by bringing in select CSS animations from animate.css, rather than including the entire library

- Discovered that I had to lock the body's scroll when the modal was shown ...

> $('body').css('overflow', 'hidden');

And unlock it again when done ...

> $('body').css('overflow', 'auto');

## Legacy Browser Testing (For Curiosity's Sake)

Vender prefixes were intentionally left out of many of the CSS3 features to observe what happens.

### Chrome 31
- layout is actually perfect
- media queries work perfectly
- no expanding line animation
- no flipping big-icons
- no large images sliding in
- no pulsing
- only the menu animations with -webkit- vendor-specific extensions work

### Firefox 16.0.1 - 2012 - 0.03%
- all animations work without -moz-

### IE 5 - 2001
- without -ms-
- Interesting "circles" ...

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/browser-testing/ie5-1.jpg" />
</p>

- Navbar is a mess ...

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/browser-testing/ie5-2.jpg" />
</p>

- Media queries don't work ...

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/browser-testing/ie5-3.jpg" />
</p>

### IOS Safari 7.1.2 - 0.41%

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/browser-testing/default-page-view.png" />
</p>

- Artifacts on the menus ...

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/browser-testing/menu-artifact.png" />
</p>

- None of the hover animations work
- None of the page load animations work either (at least without vender-specific extensions)

<p align="center">
  <img src="https://github.com/worldviewer/css-html-practice/blob/css-animations/browser-testing/none-of-the-page-load-animations-work.png" />
</p>

### Safari 5.1.10 - 2013 - 0.16%
- big icons do not rotate
- bottom images do not slide in
- menu items show up, but only in their final form
- title line does not animate