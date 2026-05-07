# HTML Day 2: Advanced Tags, SEO, Accessibility & Performance

## Topics Overview

Day 2 covers:
1. Less-Known but Powerful HTML Tags
2. Accessibility in HTML (ARIA)
3. HTML Performance Techniques
4. Advanced `<link>` Tag Usage
5. HTML Attributes for Developers
6. Advanced Video & Audio

---

## 1. Less-Known but Powerful HTML Tags

### `<details>` and `<summary>` — Native Accordion

Creates collapsible content without JavaScript.

```html
<details>
  <summary>Click to expand this section</summary>
  <p>This content is hidden by default and revealed on click.
  Google indexes both open and closed content.</p>
</details>

<!-- Open by default -->
<details open>
  <summary>This section starts open</summary>
  <p>Visible on page load</p>
</details>
```

**Attributes:**
- `open` - Whether the details are visible (no value needed)

**Browser Support:** Excellent (all modern browsers)

**Use When:** Creating FAQs, toggleable sections, accordions

---

### `<dialog>` — Native Modal Dialog

Creates a modal dialog without external libraries.

```html
<!-- Define the dialog -->
<dialog id="my-modal">
  <h2>Are you sure?</h2>
  <p>This action cannot be undone.</p>
  <button onclick="document.getElementById('my-modal').close()">Cancel</button>
  <button onclick="document.getElementById('my-modal').close()">Confirm</button>
</dialog>

<!-- Button to open dialog -->
<button onclick="document.getElementById('my-modal').showModal()">Open Modal</button>
```

**Key Methods:**
- `.showModal()` - Open as modal (with backdrop)
- `.show()` - Open as non-modal dialog
- `.close()` - Close the dialog

**Use When:** Confirmations, alerts, login forms, modals

---

### `<progress>` — Progress Bar

Displays progress of a task.

```html
<!-- Basic progress -->
<label for="upload">Upload progress:</label>
<progress id="upload" value="65" max="100">65%</progress>

<!-- Dynamic progress -->
<progress id="download" value="0" max="100"></progress>
<script>
  // Update progress as download progresses
  let progress = document.getElementById('download');
  progress.value = 50;
</script>
```

**Attributes:**
- `value` - Current progress (0 to max)
- `max` - Maximum value (default: 1.0)

**Use When:** File uploads, downloads, loading bars

---

### `<meter>` — Measurement Indicator

Represents a scalar measurement within a known range.

```html
<!-- Disk usage meter -->
<label for="disk">Disk usage:</label>
<meter id="disk" value="6" min="0" max="10" low="3" high="8" optimum="2">
  6GB
</meter>

<!-- Temperature gauge -->
<meter value="5" min="0" max="10" low="3" high="7" optimum="1">
  Cold
</meter>
```

**Attributes:**
- `value` - Current measurement
- `min` / `max` - Range boundaries
- `low` / `high` - Thresholds (low = yellow, high = red)
- `optimum` - Ideal value

**Use When:** Gauges, ratings, storage usage, temperature

---

### `<datalist>` — Searchable Dropdown Suggestions

Provides autocomplete/suggestion functionality.

```html
<!-- Input with datalist -->
<input list="cities" name="city" placeholder="Type a city...">

<datalist id="cities">
  <option value="Mumbai">
  <option value="Delhi">
  <option value="Bangalore">
  <option value="Chennai">
  <option value="Hyderabad">
</datalist>
```

**Features:**
- User can type and filter options
- Can still type custom values
- Much lighter than JavaScript autocomplete

**Use When:** City selection, country selection, tags, search

---

### `<output>` — Calculation Result

Represents the result of a calculation.

```html
<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" id="a" value="10"> +
  <input type="number" id="b" value="20"> =
  <output name="result">30</output>
</form>

<!-- Real-time calculation -->
<form oninput="cost.value = quantity.value * price.value">
  Quantity: <input type="number" id="quantity" value="1">
  Price: <input type="number" id="price" value="100">
  Total: <output id="cost">100</output>
</form>
```

**Use When:** Calculators, pricing, conversion tools

---

### `<template>` — Inert HTML Fragment

Stores HTML that shouldn't be rendered immediately. Used by JavaScript to clone.

```html
<!-- Define template -->
<template id="card-template">
  <div class="card">
    <h3 class="card-title"></h3>
    <p class="card-body"></p>
  </div>
</template>

<!-- Use in JavaScript -->
<script>
  const template = document.getElementById('card-template');
  const clone = template.content.cloneNode(true);
  
  clone.querySelector('.card-title').textContent = 'My Title';
  clone.querySelector('.card-body').textContent = 'My body';
  
  document.body.appendChild(clone);
</script>
```

**Features:**
- Content is not parsed until cloned
- No layout calculations until used
- Perfect for reusable components

**Use When:** List items, cards, reusable components

---

### `<ruby>` — East Asian Text Annotation

Adds pronunciation guides above/beside text (used for Japanese, Chinese, Korean).

```html
<ruby>
  漢 <rt>かん</rt>
  字 <rt>じ</rt>
</ruby>

<!-- English example -->
<ruby>
  HTML
  <rt>HyperText Markup Language</rt>
</ruby>
```

**Use When:** CJK text, pronunciation guides

---

### `<bdi>` — Bidirectional Isolation

Isolates text direction for user-generated content mixing right-to-left (RTL) and left-to-right (LTR) text.

```html
<!-- Without bdi (text direction gets messed up) -->
<p>User محمد posted a comment.</p>

<!-- With bdi (text directions isolated) -->
<p>User <bdi>محمد</bdi> posted a comment.</p>

<!-- Multiple directions -->
<p><bdi>مرحبا</bdi> (Arabic) and <bdi>שלום</bdi> (Hebrew) are greetings.</p>
```

**Use When:** User-generated content, international text, forums

---

### `<wbr>` — Word Break Opportunity

Suggests where a line break can occur in long text without forcing it.

```html
<!-- Long URL that can break -->
<p>https://example.com/very<wbr>/long<wbr>/path<wbr>/here</p>

<!-- Compound words -->
<p>This is a very long compound word like: super<wbr>mega<wbr>ultra<wbr>long</p>
```

**Use When:** Long URLs, email addresses, compound words

---

## 2. Accessibility in HTML (ARIA)

ARIA (Accessible Rich Internet Applications) helps screen readers understand interactive content.

### ARIA Roles — Override Implicit Semantics

```html
<!-- Alert role - announces immediately -->
<div role="alert">Your session will expire in 5 minutes.</div>

<!-- Status role - announces when polite (no interruption) -->
<div role="status">Form saved successfully.</div>

<!-- Tab navigation -->
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
</div>
```

**Common Roles:**
- `alert` - Important message (announces immediately)
- `status` - Status message (announces politely)
- `tab` - Tab in tab list
- `navigation` - Navigation landmark
- `main` - Main content landmark

---

### ARIA Labels — Name Elements for Screen Readers

```html
<!-- Button with just icon/symbol (meaningless alone) -->
<button aria-label="Close dialog">X</button>

<!-- Multiple navs - distinguish them -->
<nav aria-label="Primary navigation">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>

<nav aria-label="Footer navigation">
  <a href="/privacy">Privacy</a>
  <a href="/contact">Contact</a>
</nav>

<!-- Form field label -->
<input type="search" aria-label="Search the site">
```

**When to Use:** Icon buttons, multiple instances of same element type

---

### ARIA Descriptions — Additional Context

```html
<!-- Password rules description -->
<input type="password" aria-describedby="pwd-rules">
<p id="pwd-rules">Must be 8+ characters with a number and symbol.</p>

<!-- Image with detailed description -->
<img src="chart.png" alt="Sales chart" aria-describedby="chart-desc">
<p id="chart-desc">Shows monthly sales growth from Jan to Dec, with Q2 having the highest sales at $50,000.</p>
```

**Use When:** Complex forms, detailed explanations needed

---

### ARIA States — Dynamic Information

```html
<!-- Button that toggles menu -->
<button aria-expanded="false" aria-controls="menu">
  Menu
</button>
<ul id="menu" hidden>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
</ul>

<script>
  const button = document.querySelector('button');
  const menu = document.getElementById('menu');
  
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    menu.hidden = expanded;
  });
</script>
```

**Common States:**
- `aria-expanded="true|false"` - Is element expanded?
- `aria-selected="true|false"` - Is element selected?
- `aria-checked="true|false|mixed"` - Is checkbox checked?
- `aria-disabled="true|false"` - Is element disabled?

---

### ARIA Live Regions — Announce Dynamic Changes

```html
<!-- Polite announcement (doesn't interrupt) -->
<div aria-live="polite" aria-atomic="true">
  <!-- Content injected here gets announced -->
</div>

<!-- Assertive announcement (interrupts) -->
<div aria-live="assertive">
  <!-- Urgent messages appear here -->
</div>

<!-- JavaScript updates -->
<script>
  const liveRegion = document.querySelector('[aria-live]');
  liveRegion.textContent = 'Item added to cart!'; // Screen reader announces this
</script>
```

**Live Region Types:**
- `aria-live="off"` - Don't announce (default)
- `aria-live="polite"` - Announce when user is idle
- `aria-live="assertive"` - Announce immediately

---

### Hiding from Screen Readers

```html
<!-- Hide decorative element -->
<svg aria-hidden="true"><!-- decorative chart --></svg>

<!-- Hide decorative arrow -->
<span aria-hidden="true">→</span>

<!-- Hide decorative icon -->
<i class="icon-star" aria-hidden="true"></i> <!-- actual rating: 5 stars -->
```

**Use When:** Purely decorative icons, visual separators

---

## 3. HTML Performance Techniques

### Preload Critical Resources

```html
<!-- Preload fonts (most impactful) -->
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>

<!-- Preload hero image -->
<link rel="preload" href="/hero.jpg" as="image">

<!-- Preload critical CSS -->
<link rel="preload" href="/critical.css" as="style">
```

**Use When:** Essential fonts, above-the-fold images, critical CSS

---

### Preconnect — Warm Up External Connection

```html
<!-- Connect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Connect to API server -->
<link rel="preconnect" href="https://api.example.com">
```

**Benefits:** Reduces connection latency (DNS lookup, TCP handshake, TLS negotiation)

---

### DNS Prefetch — Lighter Alternative

```html
<!-- Just do DNS lookup (lighter than preconnect) -->
<link rel="dns-prefetch" href="https://analytics.example.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com">
```

**Use When:** Many external domains you don't need full connection to

---

### Prefetch — Next Page Resources

```html
<!-- User will likely click this link next -->
<link rel="prefetch" href="/next-page.html">

<!-- Or next image they might view -->
<link rel="prefetch" href="/gallery/image-2.jpg">
```

**Use When:** Predictable user navigation (next page, next image)

---

### Script Loading Strategies

```html
<!-- Defer — download async, execute after HTML parsed (RECOMMENDED) -->
<script src="app.js" defer></script>

<!-- Async — download and execute async (for independent scripts) -->
<script src="analytics.js" async></script>

<!-- ES Modules (automatically deferred) -->
<script type="module" src="app.js"></script>

<!-- Critical inline script (only for critical code) -->
<script>
  // Small, critical code only
  document.documentElement.className = 'js-enabled';
</script>
```

**Best Practice:**
- `defer` for main app scripts
- `async` for analytics, non-critical scripts
- Minimize inline scripts

---

### Inline Critical CSS

```html
<!-- Inline only above-the-fold styles -->
<style>
  /* Critical styles only */
  body { margin: 0; font-family: sans-serif; }
  header { background: #fff; height: 60px; }
  .hero { background-image: url(hero.jpg); height: 100vh; }
</style>

<!-- Load rest of styles asynchronously -->
<link rel="stylesheet" href="/styles.css" media="print" onload="this.media='all'">

<!-- Fallback for no-JS -->
<noscript><link rel="stylesheet" href="/styles.css"></noscript>
```

**Benefits:** Faster first paint

---

## 4. The `<link>` Tag Beyond Stylesheets

### Favicon Variations

```html
<!-- Standard favicon -->
<link rel="icon" href="/favicon.ico">

<!-- PNG favicon (modern) -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">

<!-- SVG favicon (scalable) -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg">

<!-- Apple touch icon (for iOS) -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

### Alternate Language Versions (for SEO)

```html
<!-- Current page in multiple languages -->
<link rel="alternate" hreflang="hi" href="https://example.com/hi/page">
<link rel="alternate" hreflang="en" href="https://example.com/en/page">
<link rel="alternate" hreflang="fr" href="https://example.com/fr/page">

<!-- Default/fallback version -->
<link rel="alternate" hreflang="x-default" href="https://example.com/page">
```

**Use When:** Multi-language website (tells search engines about versions)

---

### RSS/Atom Feed

```html
<!-- Link to RSS feed for blog -->
<link rel="alternate" type="application/rss+xml" 
      title="My Blog Feed" href="/feed.xml">
```

**Use When:** Blogs, news sites (allows readers to subscribe)

---

### Web App Manifest (Progressive Web App)

```html
<!-- PWA manifest -->
<link rel="manifest" href="/manifest.json">
```

**manifest.json example:**
```json
{
  "name": "My App",
  "short_name": "App",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#fff",
  "theme_color": "#007bff"
}
```

---

## 5. HTML Attributes Every Developer Needs

### `id` — Unique Identifier

```html
<!-- CSS targeting -->
<section id="contact-section">
  <h2>Contact Us</h2>
</section>

<style>
  #contact-section { background: #f5f5f5; }
</style>

<!-- Anchor link -->
<a href="#contact-section">Jump to Contact</a>

<!-- JavaScript -->
<script>
  document.getElementById('contact-section').style.display = 'none';
</script>
```

**Rules:**
- Must be unique on page
- Used for CSS, JS, anchor links
- Cannot contain spaces

---

### `class` — CSS & JS Selection

```html
<!-- Multiple classes allowed -->
<div class="card featured large">
  <h2>Featured Item</h2>
</div>

<!-- CSS -->
<style>
  .card { padding: 20px; border: 1px solid #ddd; }
  .featured { border-color: gold; background: lightyellow; }
  .large { width: 400px; }
</style>

<!-- JavaScript -->
<script>
  document.querySelectorAll('.card.featured').forEach(card => {
    card.style.display = 'block';
  });
</script>
```

**Best Practice:** Use classes for styling, id for unique elements

---

### `style` — Inline CSS

```html
<!-- Inline styles (use sparingly) -->
<p style="color: red; font-weight: bold;">
  This text is red and bold
</p>

<!-- Multiple styles -->
<div style="
  background-color: blue;
  color: white;
  padding: 20px;
  border-radius: 5px;
">
  Styled div
</div>
```

**Note:** Avoid inline styles in production. Use CSS files instead.

---

### `data-*` — Custom Data Attributes

```html
<!-- Store custom data -->
<button data-product-id="42" data-category="electronics">
  Add to Cart
</button>

<!-- Access in JavaScript -->
<script>
  const button = document.querySelector('button');
  
  console.log(button.dataset.productId);   // "42"
  console.log(button.dataset.category);    // "electronics"
  
  // Set data attributes
  button.dataset.quantity = "5";
  
  // Check in console: button.dataset
</script>
```

**Use When:** Storing metadata for JavaScript

---

### `tabindex` — Keyboard Navigation Order

```html
<!-- tabindex="0" — in natural tab order -->
<div tabindex="0">Press Tab to focus me</div>

<!-- tabindex="-1" — not in tab order, but focusable via JavaScript -->
<div tabindex="-1">Can only focus programmatically</div>

<!-- Avoid positive values (breaks natural flow) -->
<!-- ❌ Don't do: <div tabindex="5"></div> -->
```

**Use When:** Custom interactive components

---

### `contenteditable` — Editable Content

```html
<!-- User can edit this text -->
<div contenteditable="true">
  You can edit this text directly in the browser!
</div>

<!-- Disable editing -->
<div contenteditable="false">
  This text cannot be edited
</div>

<!-- True/false/inherit -->
<div contenteditable="inherit">
  Inherits from parent
</div>
```

**Use When:** In-place editing, note-taking apps

---

### `hidden` — Hide Element

```html
<!-- Hide element (like display:none but semantic) -->
<div hidden>
  This content is hidden
</div>

<!-- Show hidden element -->
<script>
  document.querySelector('[hidden]').hidden = false;
</script>
```

---

### `draggable` — Enable Drag & Drop

```html
<!-- Make element draggable -->
<div draggable="true">
  Drag me!
</div>

<!-- Handle drag events -->
<script>
  const draggable = document.querySelector('[draggable]');
  
  draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'move';
  });
</script>
```

---

### `spellcheck` — Spell Checking

```html
<!-- Enable spell check -->
<textarea spellcheck="true"></textarea>

<!-- Disable spell check -->
<input type="text" spellcheck="false">

<!-- Default (browser decides) -->
<textarea spellcheck="default"></textarea>
```

---

### `translate` — Whether to Translate

```html
<!-- Don't translate code or brand names -->
<code translate="no">console.log("Hello")</code>

<p>
  Company: <span translate="no">Google</span>
</p>

<!-- Allow translation (default) -->
<p translate="yes">This can be translated</p>
```

**Use When:** Code blocks, brand names, proper nouns

---

### `lang` — Override Document Language

```html
<!-- Whole page in English -->
<html lang="en">

<!-- Specific element in French -->
<p lang="fr">Bonjour le monde</p>

<!-- Mixed languages -->
<p>
  English: <span lang="en">Hello</span>
  French: <span lang="fr">Bonjour</span>
</p>
```

**Benefits:** Screen readers pronounce correctly, search engines understand

---

### `dir` — Text Direction

```html
<!-- Right-to-left (Arabic, Hebrew) -->
<p dir="rtl">مرحبا بالعالم</p>

<!-- Left-to-right (English) -->
<p dir="ltr">Hello World</p>

<!-- Auto-detect -->
<p dir="auto">Will auto-detect based on content</p>

<!-- Document level -->
<html dir="rtl">
  <!-- Entire page is RTL -->
</html>
```

---

## 6. Advanced Video & Audio

### Video with Multiple Formats & Subtitles

```html
<video
  width="1280"
  height="720"
  controls
  muted
  autoplay
  loop
  poster="/thumbnail.jpg"
  preload="metadata"
>
  <!-- Multiple formats for browser compatibility -->
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogv" type="video/ogg">
  
  <!-- Subtitles / Closed Captions -->
  <track kind="subtitles" src="subtitles-en.vtt" srclang="en" label="English" default>
  <track kind="subtitles" src="subtitles-hi.vtt" srclang="hi" label="Hindi">
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English CC">
  
  <!-- Fallback for older browsers -->
  <p>Your browser doesn't support video. 
     <a href="video.mp4">Download it</a> instead.
  </p>
</video>
```

**Attributes:**
- `controls` - Show play/pause controls
- `autoplay` - Start playing automatically
- `muted` - Mute audio by default (required for autoplay)
- `loop` - Restart when ends
- `poster` - Thumbnail before play
- `preload="metadata|auto|none"` - What to preload

**Track types:**
- `subtitles` - Translations in same language
- `captions` - Dialog + sound descriptions
- `descriptions` - Narrative descriptions

---

### Audio with Multiple Formats

```html
<audio controls preload="metadata">
  <source src="podcast.ogg" type="audio/ogg">
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.wav" type="audio/wav">
  
  Your browser doesn't support audio. 
  <a href="podcast.mp3">Download it</a>.
</audio>

<!-- Autoplay (usually muted for permissions) -->
<audio autoplay muted>
  <source src="background.mp3" type="audio/mpeg">
</audio>
```

---

## SEO Best Practices Summary

### On-Page SEO with HTML

1. **Use Semantic Tags**
   ```html
   <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>
   ```

2. **Proper Heading Hierarchy**
   ```html
   <h1>Main Title (one per page)</h1>
   <h2>Sections</h2>
   <h3>Sub-sections</h3>
   ```

3. **Alt Text for Images**
   ```html
   <img src="photo.jpg" alt="Descriptive alt text">
   ```

4. **Meta Tags**
   ```html
   <meta name="description" content="Page description for Google">
   <meta name="keywords" content="relevant, keywords">
   <meta name="viewport" content="width=device-width">
   ```

5. **Canonical URL**
   ```html
   <link rel="canonical" href="https://example.com/page">
   ```

6. **Open Graph (Social Sharing)**
   ```html
   <meta property="og:title" content="Title">
   <meta property="og:description" content="Description">
   <meta property="og:image" content="/image.jpg">
   ```

7. **Structured Data (JSON-LD)**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "Article",
     "headline": "Article Title",
     "author": "Author Name"
   }
   </script>
   ```

---

## Key Takeaways

✅ Use semantic tags for better SEO and accessibility  
✅ Add ARIA attributes for screen reader support  
✅ Optimize performance with preload, preconnect, defer  
✅ Use `data-*` attributes for custom data  
✅ Make multimedia accessible with captions and alt text  
✅ Use less-known tags like `<details>`, `<progress>`, `<meter>`  
✅ Make video/audio accessible with multiple formats and subtitles  

---

## Practice Checklist

After reading these notes, you should understand:

- [ ] What `<details>` and `<summary>` do and when to use them
- [ ] How to create accessible forms with ARIA
- [ ] Difference between `preload`, `preconnect`, and `prefetch`
- [ ] When to use `defer` vs `async` for scripts
- [ ] How to add captions/subtitles to videos
- [ ] Common `data-*` attributes and how to access them in JavaScript
- [ ] Why semantic HTML matters for SEO
- [ ] How to make content accessible to screen readers
- [ ] When to use less-known tags like `<meter>`, `<progress>`, `<datalist>`
- [ ] HTML attributes for improving performance
