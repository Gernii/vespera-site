## How to use?

All items in the **Front-End Checklist** are required for the majority of the projects, but some elements can be omitted or are not essential (in the case of an administration web app, you may not need RSS feed for example). We choose to use 3 levels of flexibility:

All items in the Front-End Checklist are necessary for the majority of projects, but some elements can be omitted or are not essential. For example, in an administration web app, you may not need an RSS feed. We have categorized the flexibility into three levels:

:large_blue_circle: indicates that the item is recommended but can be omitted in certain situations.
:orange_circle: indicates that the item is highly recommended but can potentially be omitted in very specific cases. However, omitting these elements can negatively impact performance or SEO.
:red_circle: indicates that the item cannot be omitted under any circumstances. Removing these elements may result in page malfunctions or cause accessibility and SEO issues. Testing should prioritize these elements first.

Some resources possess an emoticon to help you understand which type of content / help you may find on the checklist:

- 📖: documentation or article
- 🛠: online tool / testing tool
- 📹: media or video content

---

## Head

> **Notes:** You can find [a list of everything](https://github.com/joshbuchea/HEAD) that could be found in the `<head>` of an HTML document.

### Meta tag

- [x] **Doctype:** :red_circle: The Doctype is HTML5 and is at the top of all your HTML pages.

```html
<!doctype html>
<!-- HTML5 -->
```

> - 📖 [Determining the character encoding - HTML5 W3C](https://www.w3.org/TR/html5/syntax.html#determining-the-character-encoding)

_The next 2 meta tags (Charset and Viewport) need to come first in the head._

- [x] **Charset:** :red_circle: The charset (UTF-8) is declared correctly.

```html
<!-- Set character encoding for the document -->
<meta charset="utf-8" />
```

- [x] **Viewport:** :red_circle: The viewport is declared correctly.

```html
<!-- Viewport for responsive web design -->
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

- [x] **Title:** :red_circle: A title is used on all pages (SEO: Google calculates the pixel width of the characters used in the title, and it cuts off between 472 and 482 pixels. The average character limit would be around 55-characters).

```html
<!-- Document Title -->
<title>Page Title less than 55 characters</title>
```

> - 📖 [Title - HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)
> - 🛠 [SERP Snippet Generator](https://www.sistrix.com/serp-snippet-generator/)

- [x] **Description:** :red_circle: A meta description is provided, it is unique and doesn't possess more than 150 characters.

```html
<!-- Meta Description -->
<meta name="description" content="Description of the page less than 150 characters" />
```

> - 📖 [Meta Description - HTML - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_an_author_and_description)

- [ ] **Favicons:** :orange_circle: Each favicon has been created and displays correctly. If you have only a `favicon.ico`, put it at the root of your site. Normally you won't need to use any markup. However, it's still good practice to link to it using the example below. Today, **PNG format is recommended** over `.ico` format (dimensions: 32x32px).

```html
<!-- Standard favicon -->
<link rel="icon" type="image/x-icon" href="https://example.com/favicon.ico" />
<!-- Recommended favicon format -->
<link rel="icon" type="image/png" href="https://example.com/favicon.png" />
```

> - 🛠 [Favicon Generator](https://www.favicon-generator.org/)
> - 🛠 [RealFaviconGenerator](https://realfavicongenerator.net/)
> - 📖 [Favicon Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet)
> - 📖 [Favicons, Touch Icons, Tile Icons, etc. Which Do You Need? - CSS Tricks](https://css-tricks.com/favicon-quiz/)
> - 📖 [PNG favicons - caniuse](https://caniuse.com/#feat=link-icon-png)

- [x] **Apple Web App Meta:** :large_blue_circle: Apple meta-tags are present.

```html
<!-- Apple Touch Icon (at least 200x200px) -->
<link rel="apple-touch-icon" href="/custom-icon.png" />

<!-- To run the web application in full-screen -->
<meta name="apple-mobile-web-app-capable" content="yes" />

<!-- Status Bar Style (see Supported Meta Tags below for available values) -->
<!-- Has no effect unless you have the previous meta tag -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```

> - 📖 [Configuring Web Applications](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
> - 📖 [Supported Meta Tags](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html)

- [ ] **Windows Tiles:** :large_blue_circle: Windows tiles are present and linked.

```html
<!-- Microsoft Tiles -->
<meta name="msapplication-config" content="browserconfig.xml" />
```

Minimum required xml markup for the `browserconfig.xml` file is as follows:

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
   <msapplication>
     <tile>
        <square70x70logo src="small.png"/>
        <square150x150logo src="medium.png"/>
        <wide310x150logo src="wide.png"/>
        <square310x310logo src="large.png"/>
     </tile>
   </msapplication>
</browserconfig>
```

> - 📖 [Browser configuration schema reference](<https://msdn.microsoft.com/en-us/library/dn320426(v=vs.85).aspx>)

- [ ] **Canonical:** :orange_circle: Use `rel="canonical"` to avoid duplicate content.

```html
<!-- Helps prevent duplicate content issues -->
<link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html" />
```

> - 📖 [Use canonical URLs - Search Console Help - Google Support](https://support.google.com/webmasters/answer/139066?hl=en)
> - 📖 [5 common mistakes with rel=canonical - Google Webmaster Blog](https://webmasters.googleblog.com/2013/04/5-common-mistakes-with-relcanonical.html)

### HTML tags

- [x] **Language attribute:** :red_circle: The `lang` attribute of your website is specified and related to the language of the current page.

```html
<html lang="en"></html>
```

- [x] **Direction attribute:** :orange_circle: The direction of lecture is specified on the html tag (It can be used on another HTML tag).

```html
<html dir="rtl"></html>
```

> - 📖 [dir - HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)

- [ ] **Alternate language:** :large_blue_circle: The language tag of your website is specified and related to the language of the current page.

```html
<link rel="alternate" href="https://es.example.com/" hreflang="es" />
```

- [ ] **x-default:** :large_blue_circle: The language tag of your website for international landing pages.

```html
<link rel="alternate" href="https://example.com/" hreflang="x-default" />
```

> - 📖 [x-default - Google](https://webmasters.googleblog.com/2013/04/x-default-hreflang-for-international-pages.html)

- [ ] **Conditional comments:** :large_blue_circle: Conditional comments are present for IE if needed.

> - 📖 [About conditional comments (Internet Explorer) - MSDN - Microsoft](<https://msdn.microsoft.com/en-us/library/ms537512(v=vs.85).aspx>)

- [ ] **RSS feed:** :large_blue_circle: If your project is a blog or has articles, an RSS link was provided.

- [ ] **CSS Critical:** :orange_circle: The CSS critical (or "above the fold") collects all the CSS used to render the visible portion of the page. It is embedded before your principal CSS call and between `<style></style>` in a single line (minified).

> - 🛠 [Critical by Addy Osmani on GitHub](https://github.com/addyosmani/critical) automates this.

- [ ] **CSS order:** :red_circle: All CSS files are loaded before any JavaScript files in the `<head>`. (Except the case where sometimes JS files are loaded asynchronously on top of your page).

### Social meta

Visualize and generate automatically our social meta tags with [Meta Tags](https://metatags.io/)

**_Facebook OG_** and **_Twitter Cards_** are, for any website, highly recommended. The other social media tags can be considered if you target a particular presence on those and want to ensure the display.

- [x] **Facebook Open Graph:** :large_blue_circle: All Facebook Open Graph (OG) are tested and no one is missing or with false information. Images need to be at least 600 x 315 pixels, although 1200 x 630 pixels is recommended.

> **Notes:** Using `og:image:width` and `og:image:height` will specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it.

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:title" content="Content Title" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />
<!-- Next tags are optional but recommended -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

> - 📖 [A Guide to Sharing for Webmasters](https://developers.facebook.com/docs/sharing/webmasters/)
> - 📖 [Best Practices - Sharing](https://developers.facebook.com/docs/sharing/best-practices/)
> - 🛠 Test your page with the [Facebook OG testing](https://developers.facebook.com/tools/debug/)

- [x] **Twitter Card:** :large_blue_circle:

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@site_account" />
<meta name="twitter:creator" content="@individual_account" />
<meta name="twitter:url" content="https://example.com/page.html" />
<meta name="twitter:title" content="Content Title" />
<meta name="twitter:description" content="Content description less than 200 characters" />
<meta name="twitter:image" content="https://example.com/image.jpg" />
```

> - 📖 [Getting started with cards — Twitter Developers](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started)
> - 🛠 Test your page with the [Twitter card validator](https://cards-dev.twitter.com/validator)

**[⬆ back to top](#table-of-contents)**

---

## HTML

### Best practices

- [ ] **HTML5 Semantic Elements:** :red_circle: HTML5 Semantic Elements are used appropriately (header, section, footer, main...).

> - 📖 [HTML Reference](http://htmlreference.io/)

- [ ] **Error pages:** :red_circle: Error 404 page and 5xx exist. Remember that the 5xx error pages need to have their CSS integrated (no external call on the current server).

- [ ] **Noopener:** :orange_circle: In case you are using external links with `target="_blank"`, your link should have a `rel="noopener"` attribute to prevent tab nabbing. If you need to support older versions of Firefox, use `rel="noopener noreferrer"`.

> - 📖 [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)

- [ ] **Clean up comments:** :large_blue_circle: Unnecessary code needs to be removed before sending the page to production.

### HTML testing

- [ ] **W3C compliant:** :red_circle: All pages need to be tested with the W3C validator to identify possible issues in the HTML code.

> - 🛠 [W3C validator](https://validator.w3.org/)

- [ ] **HTML Lint:** :red_circle: I use tools to help me analyze any issues I could have on my HTML code.

> - 🛠 [Dirty markup](https://www.10bestdesign.com/dirtymarkup/)

> - 🛠 [webhint](https://webhint.io/)

- [ ] **Link checker:** :red_circle: There are no broken links in my page, verify that you don't have any 404 error.

> - 🛠 [W3C Link Checker](https://validator.w3.org/checklink)

- [ ] **Adblockers test:** :orange_circle: Your website shows your content correctly with adblockers enabled (You can provide a message encouraging people to disable their adblocker).

> - 📖 [Use AdBlocking in your Dev Environment](https://andreicioara.com/use-adblocking-in-your-dev-environment-48db500d9b86)

**[⬆ back to top](#table-of-contents)**

---

## Webfonts

> **Notes:** Using web fonts may cause Flash Of Unstyled Text/Flash Of Invisible Text - consider having fallback fonts and/or utilizing web font loaders to control behavior.
>
> - 📖 [Google Technical considerations about webfonts](https://developers.google.com/fonts/docs/technical_considerations)

- [ ] **Webfont format:** :red_circle: WOFF, WOFF2 and TTF are supported by all modern browsers.

> - 📖 [WOFF - Web Open Font Format - Caniuse](https://caniuse.com/#feat=woff).
> - 📖 [WOFF 2.0 - Web Open Font Format - Caniuse](https://caniuse.com/#feat=woff2).
> - 📖 [TTF/OTF - TrueType and OpenType font support](https://caniuse.com/#feat=ttf)
> - 📖 [Using @font-face - CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

- [ ] **Webfont size:** :red_circle: Webfont sizes don't exceed 2 MB (all variants included).

- [ ] **Webfont loader:** :large_blue_circle: Control loading behavior with a webfont loader

> - 🛠 [Typekit Web Font Loader](https://github.com/typekit/webfontloader)

**[⬆ back to top](#table-of-contents)**

---

## CSS

> **Notes:** Take a look at [CSS guidelines](https://cssguidelin.es/) and [Sass Guidelines](https://sass-guidelin.es/) followed by most Front-End developers. If you have a doubt about CSS properties, you can visit [CSS Reference](http://cssreference.io/). There is also a short [Code Guide](http://codeguide.co/) for consistency.

- [ ] **Responsive Web Design:** :red_circle: The website is using responsive web design.
- [ ] **CSS Print:** :orange_circle: A print stylesheet is provided and is correct on each page.
- [ ] **Preprocessors:** :large_blue_circle: Your project is using a CSS preprocessor (e.g [Sass](http://sass-lang.com/), [Less](http://lesscss.org/), [Stylus](http://stylus-lang.com/)).
- [ ] **Unique ID:** :red_circle: If IDs are used, they are unique to a page.
- [ ] **Reset CSS:** :red*circle: A CSS reset (reset, normalize or reboot) is used and up to date. *(If you are using a CSS Framework like Bootstrap or Foundation, a Normalize is already included into it.)\_

> - 📖 [Reset.css](https://meyerweb.com/eric/tools/css/reset/)
> - 📖 [Normalize.css](https://necolas.github.io/normalize.css/)
> - 📖 [Reboot](https://getbootstrap.com/docs/4.0/content/reboot/)

- [ ] **JS prefix:** :large_blue_circle: All classes (or id- used in JavaScript files) begin with **js-** and are not styled into the CSS files.

```html
<div id="js-slider" class="my-slider">
	<!-- Or -->
	<div id="id-used-by-cms" class="js-slider my-slider"></div>
</div>
```

- [ ] **embedded or inline CSS:** :red_circle: Avoid at all cost embedding CSS in `<style>` tags or using inline CSS: only use for valid reasons (e.g. background-image for slider, critical CSS).
- [ ] **Vendor prefixes:** :red_circle: CSS vendor prefixes are used and are generated accordingly with your browser support compatibility.

> - 🛠 [Autoprefixer CSS online](https://autoprefixer.github.io/)

### Performance

- [ ] **Concatenation:** :red*circle: CSS files are concatenated in a single file *(Not for HTTP/2)\_.
- [ ] **Minification:** :red_circle: All CSS files are minified.
- [ ] **Non-blocking:** :orange_circle: CSS files need to be non-blocking to prevent the DOM from taking time to load.

> - 📖 [loadCSS by filament group](https://github.com/filamentgroup/loadCSS)
> - 📖 [Example of preload CSS using loadCSS](https://gist.github.com/thedaviddias/c24763b82b9991e53928e66a0bafc9bf)

- [ ] **Unused CSS:** :large_blue_circle: Remove unused CSS.

> - 🛠 [UnCSS Online](https://uncss-online.com/)
> - 🛠 [PurifyCSS](https://github.com/purifycss/purifycss)
> - 🛠 [PurgeCSS](https://github.com/FullHuman/purgecss)
> - 🛠 [Chrome DevTools Coverage](https://developer.chrome.com/docs/devtools/coverage/)

### CSS testing

- [ ] **Stylelint:** :red_circle: All CSS or SCSS files are without any errors.

> - 🛠 [stylelint, a CSS linter](https://stylelint.io/)
> - 📖 [Sass guidelines](https://sass-guidelin.es/)

- [ ] **Responsive web design:** :red_circle: All pages were tested at the following breakpoints: 320px, 768px, 1024px (can be more / different according to your analytics).
      **Responsive Checker -**

  > - 🛠 [Am I Responsive?](http://ami.responsivedesign.is/)
  > - 🛠 [Mobile Friendly Test](https://search.google.com/test/mobile-friendly)
  > - 🛠 [Responsive Website Design Tester](https://responsivedesignchecker.com/)
  > - 🛠 [Responsinator](https://www.responsinator.com/)
  > - 🛠 [XRespond](https://xrespond.com/)

- [ ] **CSS Validator:** :orange_circle: The CSS was tested and pertinent errors were corrected.

> - 🛠 [CSS Validator](https://jigsaw.w3.org/css-validator/)

- [ ] **Desktop Browsers:** :red_circle: All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE...).
- [ ] **Mobile Browsers:** :red_circle: All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...).
- [ ] **OS:** :red_circle: All pages were tested on all current OS (Windows, Android, iOS, Mac...).

- [ ] **Design fidelity:** :large_blue_circle: Depending on the project and the quality of the creatives, you may be asked to be close to the design. You can use some tools to compare creatives with your code implementation and ensure consistency.

> [Pixel Perfect - Chrome Extension](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi?hl=en)

- [ ] **Reading direction:** :red_circle: All pages need to be tested for LTR and RTL languages if they need to be supported.

> - 📖 [Building RTL-Aware Web Apps & Websites: Part 1 - Mozilla Hacks](https://hacks.mozilla.org/2015/09/building-rtl-aware-web-apps-and-websites-part-1/)
> - 📖 [Building RTL-Aware Web Apps & Websites: Part 2 - Mozilla Hacks](https://hacks.mozilla.org/2015/10/building-rtl-aware-web-apps-websites-part-2/)

**[⬆ back to top](#table-of-contents)**

---

## Images

> **Notes:** For a complete understanding of image optimization, check the free ebook **[Essential Image Optimization](https://images.guide/)** from Addy Osmani.

### Best practices

- [ ] **Optimization:** :red_circle: All images are optimized to be rendered in the browser. WebP format could be used for critical pages (like Homepage).

> - 🛠 [Imagemin](https://github.com/imagemin/imagemin)
> - 🛠 Use [ImageOptim](https://imageoptim.com/) to optimise your images for free.
> - 🛠 Use [KeyCDN Image Processing](https://www.keycdn.com/support/image-processing) for image optimization in real time.
> - 🛠 Use [Kraken.io](https://kraken.io/web-interface) awesome alternative for both png and jpg optimization. Up to 1mb per files on free plan.
> - 🛠 [TinyPNG](https://tinypng.com/) optimises png, apng (animated png) and jpg images with very small loss in quality. Free and paid version available.
> - 🛠 [ZorroSVG](http://quasimondo.com/ZorroSVG/) jpg-like compression for transparent images using svg masking.
> - 🛠 [SVGO](https://github.com/svg/svgo) a Nodejs-based tool for optimizing SVG vector graphics files.
> - 🛠 [SVGOMG](https://jakearchibald.github.io/svgomg/) a web-based GUI version of SVGO for optimising your svgs online.

- [ ] **Picture/Srcset:** :orange_circle: You use picture/srcset to provide the most appropriate image for the current viewport of the user.

> - 📖 [How to Build Responsive Images with srcset](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)

- [ ] **Retina:** :large_blue_circle: You provide layout images 2x or 3x, support retina display.
- [ ] **Sprite:** :orange_circle: Small images are in a sprite file (in the case of icons, they can be in an SVG sprite image).
- [ ] **Width and Height:** :red_circle: Set `width` and `height` attributes on `<img>` if the final rendered image size is known (can be omitted for CSS sizing).
- [ ] **Alternative text:** :red_circle: All `<img>` have an alternative text which describes the image visually.

> - 📖 [Alt-texts: The Ultimate Guide](https://axesslab.com/alt-texts/)

- [ ] **Lazy loading:** :orange_circle: Images are lazyloaded (A noscript fallback is always provided).
  > - 🛠 [Native lazy loading polyfill](https://github.com/mfranzke/loading-attribute-polyfill/)

**[⬆ back to top](#table-of-contents)**

---

## JavaScript

### Best practices

- [ ] **JavaScript Inline:** :red_circle: You don't have any JavaScript code inline (mixed with your HTML code).
- [ ] **Concatenation:** :red_circle: JavaScript files are concatenated.
- [ ] **Minification:** :red_circle: JavaScript files are minified (you can add the `.min` suffix).

> - 📖 [Minify Resources (HTML, CSS, and JavaScript)](https://developers.google.com/speed/docs/insights/MinifyResources)

- [ ] **JavaScript security:** :red_circle:

> - 📖 [Guidelines for Developing Secure Applications Utilizing JavaScript](https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet#Guidelines_for_Developing_Secure_Applications_Utilizing_JavaScript)

- [ ] **`noscript` tag:** :orange_circle: Use `<noscript>` tag in the HTML body if a script type on the page is unsupported or if scripting is currently turned off in the browser. This will be helpful in client-side rendering heavy apps such as React.js, see [examples](https://webdesign.tutsplus.com/tutorials/quick-tip-dont-forget-the-noscript-element--cms-25498).

```html
<noscript> You need to enable JavaScript to run this app. </noscript>
```

- [ ] **Non-blocking:** :orange_circle: JavaScript files are loaded asynchronously using `async` or deferred using `defer` attribute.

> - 📖 [Remove Render-Blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)

- [ ] **Optimized and updated JS libraries:** :orange_circle: All JavaScript libraries used in your project are necessary (prefer Vanilla Javascript for simple functionalities), updated to their latest version and don't overwhelm your JavaScript with unnecessary methods.

> - 📖 [You may not need jQuery](http://youmightnotneedjquery.com/)
> - 📖 [Vanilla JavaScript for building powerful web applications](https://plainjs.com/)

- [ ] **Modernizr:** :large_blue_circle: If you need to target some specific features you can use a custom Modernizr to add classes in your `<html>` tag.

> - 🛠 [Customize your Modernizr](https://modernizr.com/download?setclasses)

### JavaScript testing

- [ ] **ESLint:** :red_circle: No errors are flagged by ESLint (based on your configuration or standards rules).

> - 📖 [ESLint - The pluggable linting utility for JavaScript and JSX](https://eslint.org/)

**[⬆ back to top](#table-of-contents)**

---

## Security

### Scan and check your web site

> - [securityheaders.io](https://securityheaders.io/)
> - [Observatory by Mozilla](https://observatory.mozilla.org/)

### Best practices

- [ ] **HTTPS:** :red_circle: HTTPS is used on every page and for all external content (plugins, images...).

> - 🛠 [Let's Encrypt - Free SSL/TLS Certificates](https://letsencrypt.org/)
> - 🛠 [Free SSL Server Test](https://www.ssllabs.com/ssltest/index.html)
> - 📖 [Strict Transport Security](http://caniuse.com/#feat=stricttransportsecurity)

- [ ] **HTTP Strict Transport Security (HSTS):** :orange_circle: The HTTP header is set to 'Strict-Transport-Security'.

> - 🛠 [Check HSTS preload status and eligibility](https://hstspreload.org/)
> - 📖 [HTTP Strict Transport Security Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
> - 📖 [Transport Layer Protection Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html)

- [ ] **Cross Site Request Forgery (CSRF):** :red_circle: You ensure that requests made to your server-side are legitimate and originate from your website / app to prevent CSRF attacks.

> - 📖 [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

- [ ] **Cross Site Scripting (XSS):** :red_circle: Your page or website is free from XSS possible issues.

> - 📖 [XSS (Cross Site Scripting) Prevention Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
> - 📖 [DOM based XSS Prevention Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)

- [ ] **Content Type Options:** :orange_circle: Prevents Google Chrome and Internet Explorer from trying to mime-sniff the content-type of a response away from the one being declared by the server.

> - 📖 [X-Content-Type-Options - Scott Helme](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-content-type-options)

- [ ] **X-Frame-Options (XFO):** :orange_circle: Protects your visitors against clickjacking attacks.

> - 📖 [X-Frame-Options - Scott Helme](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options)
> - 📖 [RFC7034 - HTTP Header Field X-Frame-Options](https://tools.ietf.org/html/rfc7034)

- [ ] **Content Security Policy:** :orange_circle: Defines how content is loaded on your site and from where it is permitted to be loaded. Can also be used to protect against clickjacking attacks.

> - 📖 [Content Security Policy - An Introduction - Scott Helme](https://scotthelme.co.uk/content-security-policy-an-introduction/)
> - 📖 [CSP Cheat Sheet - Scott Helme](https://scotthelme.co.uk/csp-cheat-sheet/)
> - 📖 [CSP Cheat Sheet - OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
> - 📖 [Content Security Policy Reference](https://content-security-policy.com/)

**[⬆ back to top](#table-of-contents)**

---

## Performance

### Best practices

- [ ] **Goals to achieve:** :orange_circle: Your pages should reach these goals:
  - First Meaningful Paint under 1 second
  - Time To Interactive under 5 seconds for the "average" configuration (a $200 Android on a slow 3G network with 400ms RTT and 400kbps transfer speed) and under 2 seconds for repeat visits
  - Critical file size under 170Kb gzipped

> - 🛠 [Website Page Analysis](https://tools.pingdom.com)
> - 🛠 [WebPageTest](https://www.webpagetest.org/)
> - 📖 [Size Limit: Make the Web lighter](https://evilmartians.com/chronicles/size-limit-make-the-web-lighter)

- [ ] **Minified HTML:** :orange_circle: Your HTML is minified.

- [ ] **Lazy loading:** :orange_circle: Images, scripts and CSS need to be lazy loaded to improve the response time of the current page (See details in their respective sections).

- [ ] **Cookie size:** :orange_circle: If you are using cookies be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies.

> - 📖 [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)
> - 📖 [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
> - 🛠 [Browser Cookie Limits](http://browsercookielimits.squawky.net/)

- [ ] **Third party components:** :orange_circle: Third party iframes or components relying on external JS (like sharing buttons) are replaced by static components when possible, thus limiting calls to external APIs and keeping your user's activity private.

> - 🛠 [Simple sharing buttons generator](https://simplesharingbuttons.com/)

### Preparing upcoming requests

> - 📖 [Explanation of the following techniques](https://css-tricks.com/prefetching-preloading-prebrowsing/)

- [ ] **DNS resolution:** :large_blue_circle: DNS of third-party services that may be needed are resolved in advance during idle time using `dns-prefetch`.

```html
<link rel="dns-prefetch" href="https://example.com" />
```

- [ ] **Preconnection:** :large_blue_circle: DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using `preconnect`.

```html
<link rel="preconnect" href="https://example.com" />
```

- [ ] **Prefetching:** :large_blue_circle: Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using `prefetch`.

```html
<link rel="prefetch" href="image.png" />
```

- [ ] **Preloading:** :large_blue_circle: Resources needed in the current page (e.g. scripts placed at the end of `<body>`) in advance using `preload`.

```html
<link rel="preload" href="app.js" />
```

> - 📖 [Difference between prefetch and preload](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

### Performance testing

- [ ] **Google PageSpeed:** :red_circle: All your pages were tested (not only the homepage) and have a score of at least 90/100.

> - 🛠 [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
> - 🛠 [Test your mobile speed with Google](https://testmysite.withgoogle.com)
> - 🛠 [WebPagetest - Website Performance and Optimization Test](https://www.webpagetest.org/)
> - 🛠 [GTmetrix - Website speed and performance optimization](https://gtmetrix.com/)
> - 🛠 [Speedrank - Improve the performance of your website](https://speedrank.app/)

**[⬆ back to top](#table-of-contents)**

---

## Accessibility

> **Notes:** You can watch the playlist [A11ycasts with Rob Dodson](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g) 📹

### Best practices

- [ ] **Progressive enhancement:** :orange_circle: Major functionality like main navigation and search should work without JavaScript enabled.

> - 📖 [Enable / Disable JavaScript in Chrome Developer Tools](https://www.youtube.com/watch?v=kBmvq2cE0D8)

- [ ] **Color contrast:** :orange_circle: Color contrast should at least pass WCAG AA (AAA for mobile).

> - 🛠 [Contrast ratio](https://leaverou.github.io/contrast-ratio/)

#### Headings

- [ ] **H1:** :red_circle: All pages have an H1 which is not the title of the website.
- [ ] **Headings:** :red_circle: Headings should be used properly and in the right order (H1 to H6).

> - 📹 [Why headings and landmarks are so important -- A11ycasts #18](https://www.youtube.com/watch?v=vAAzdi1xuUY&index=9&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

### Semantics

- [ ] **Specific HTML5 input types are used:** :orange_circle: This is especially important for mobile devices that show customized keypads and widgets for different types.

> - 📖 [Mobile Input Types](http://mobileinputtypes.com/)

### Form

- [ ] **Label:** :red_circle: A label is associated with each input form element. In case a label can't be displayed, use `aria-label` instead.

> - 📖 [Using the aria-label attribute - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)

### Accessibility testing

- [ ] **Accessibility standards testing:** :red_circle: Use the WAVE tool to test if your page respects the accessibility standards.

> - 🛠 [Wave testing](http://wave.webaim.org/)

- [ ] **Keyboard navigation:** :red_circle: Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable.
- [ ] **Screen-reader:** :orange_circle: All pages were tested in a screen-reader (VoiceOver, ChromeVox, NVDA or Lynx).
- [ ] **Focus style:** :red_circle: If the focus is disabled, it is replaced by visible state in CSS.

> - 📹 [Managing Focus - A11ycasts #22](https://www.youtube.com/watch?v=srLRSQg6Jgg&index=5&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

**[⬆ back to top](#table-of-contents)**

---

## SEO

- [ ] **Google Analytics:** :large_blue_circle: Google Analytics is installed and correctly configured.

> - 🛠 [Google Analytics](https://analytics.google.com/analytics/web/)
> - 🛠 [GA Checker (and others)](http://www.gachecker.com/)

- [ ] **Search Console:** :large_blue_circle: Search Console is installed and correctly configured. It is a free service offered by Google that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results.

> - 🛠 [Search Console](https://search.google.com/search-console/about)

- [ ] **Headings logic:** :orange_circle: Heading text helps to understand the content in the current page.

> - 🛠 [Tota11y, tab Headings](http://khan.github.io/tota11y/#Try-it)

- [ ] **sitemap.xml:** :red_circle: A sitemap.xml exists and was submitted to Google Search Console (previously Google Webmaster Tools).

> - 🛠 [Sitemap generator](https://websiteseochecker.com/html-sitemap-generator/)

- [ ] **robots.txt:** :red_circle: The robots.txt is not blocking webpages.

> - 📖 [The robots.txt file](https://varvy.com/robottxt.html)
> - 🛠 Test your robots.txt with [Google Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)

- [ ] **Structured Data:** :red_circle: Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page.

> - 📖 [Introduction to Structured Data - Search - Google Developers](https://developers.google.com/search/docs/guides/intro-structured-data)
> - 📖 [JSON-LD](https://json-ld.org/)
> - 📖 [Microdata](https://www.w3.org/TR/microdata/)
> - 🛠 Test your page with the [Rich Results Test](https://search.google.com/test/rich-results)
> - 🛠 Complete list of vocabularies that can be used as structured data. [Schema.org Full Hierarchy](http://schema.org/docs/full.html)

- [ ] **Sitemap HTML:** :orange_circle: An HTML sitemap is provided and is accessible via a link in the footer of your website.

> - 📖 [Sitemap guidelines - Google Support](https://support.google.com/webmasters/answer/183668?hl=en)

**[⬆ back to top](#table-of-contents)**
