//css-reset.ts

// Some things have to be changed depending on the project. For example, we may need to use content-box instead of border-box.

/* Based on Josh Comeau’s CSS reset (https://www.joshwcomeau.com/css/custom-css-reset/)
Historically, the main goal of a CSS reset has been to ensure consistency between browsers, and to undo all default styles, creating a blank slate. My CSS reset doesn't really do either of these things.
These days, browsers don't have massive discrepancies when it comes to layout or spacing. By and large, browsers implement the CSS specification faithfully, and things behave as you'd expect. So it isn't as necessary anymore.
This custom "CSS reset" include little tricks to improve both the user experience and the CSS authoring experience. */

export const cssReset = {
    //1. Use a more-intuitive box-sizing model.
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
  
    //2. Remove the default margin.
    "*": {
      margin: 0,
    },
  
    //  3. Allow percentage-based heights in the application
    "html, body": {
      height: "100%",
    },
  
    //  Typographic tweaks!
    //4. Add accessible line-height
    //5. Improve text rendering
    body: {
      //Font family defined in NextUI theme
      fontFamily: "var(--nextui-fonts-body), var(--nextui-fonts-sans) !important",
  
      lineHeight: 1.5,
      WebkitFontSmoothing: "antialiased",
    },
  
    //  6. Improve media defaults
    "img, picture, video, canvas, svg": {
      display: "block",
      maxWidth: "100%",
    },
  
    //  7. Remove built-in form typography styles
    "input, button, textarea, select": {
      font: "inherit",
    },
  
    //  8. Avoid text overflows
    "p, h1, h2, h3, h4, h5, h6": {
      overflowWrap: "break-word",
    },
  
    //  9. Create a root stacking context
    "#root, #__next": {
      isolation: "isolate",
    },
  };
  