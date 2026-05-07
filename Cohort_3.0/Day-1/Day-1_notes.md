# HTML Tags - Complete Guide & Notes

## Introduction to HTML Tags

HTML (HyperText Markup Language) uses **tags** to structure content. A tag is a command written between angle brackets `< >` that tells the browser how to display content.

---

## Types of Tags

### 1. Normal (Paired Tags)
Also called **container tags** or **non-void tags**. They have an opening tag and a closing tag with content between them.

```html
<tagname>Content here</tagname>
```

**Examples:**
```html
<p>This is a paragraph</p>
<h1>This is a heading</h1>
<div>This is a division</div>
```

### 2. Self-Closing Tags
Also called **void tags** or **empty tags**. They don't have closing tags and don't contain content. They stand alone.

```html
<tagname />
```

**Examples:**
```html
<img src="image.jpg" />
<br />
<hr />
<input type="text" />
```

### 3. Inline Tags
These tags take up **only the necessary space** (width of content). They sit next to each other on the same line.

**Examples:** `<a>`, `<span>`, `<b>`, `<i>`, `<em>`, `<strong>`, `<img>`

```html
<p>This is <b>bold</b> text and <i>italic</i> text.</p>
<!-- All appear on same line -->
```

### 4. Block Tags
These tags take up the **full available width** and always start on a **new line**. They create a "block" of space.

**Examples:** `<p>`, `<div>`, `<h1>`, `<ul>`, `<table>`, `<form>`

```html
<h1>Heading 1</h1>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<!-- Each appears on separate line -->
```

### 5. Inline-Block Tags
These tags combine **inline and block properties**. They can sit next to each other BUT can have width/height properties set.

**Examples:** `<img>`, `<button>`, `<input>`

### 6. Semantic Tags
These tags have **meaningful names** that describe their content. They help with SEO, accessibility, and code readability.

**Examples:** `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`, `<main>`

---

## 1. Basic Structure Tags

These tags form the foundation of every HTML document.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
    <style>
      body { color: blue; }
    </style>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

### Tag Details:

| Tag | Purpose | Example |
|-----|---------|---------|
| `<html>` | Root container for all content | `<html lang="en">` |
| `<head>` | Contains metadata & links (hidden from user) | Contains title, meta, link, style |
| `<title>` | Browser tab title | `<title>My Website</title>` |
| `<body>` | Contains all visible content | All visible elements go here |
| `<meta>` | Metadata about the page (self-closing) | `<meta charset="UTF-8">` |
| `<link>` | Links external resources like CSS (self-closing) | `<link rel="stylesheet" href="style.css">` |
| `<style>` | Write CSS directly in HTML | `<style>body { color: red; }</style>` |
| `<script>` | Link or write JavaScript | `<script src="app.js"></script>` |

---

## 2. Text & Content Tags

These tags structure text and content on the page.

### Tag Details:

| Tag | Purpose | Display | Example |
|-----|---------|---------|---------|
| `<h1>` to `<h6>` | Headings (h1 largest, h6 smallest) | Block | `<h1>Main Title</h1>` |
| `<p>` | Paragraph of text | Block | `<p>This is a paragraph</p>` |
| `<br>` | Line break (self-closing) | Inline | `Line 1<br>Line 2` |
| `<hr>` | Horizontal rule/separator (self-closing) | Block | `<hr>` |

### Examples:

```html
<!-- Headings (h1 is most important for SEO) -->
<h1>Main Title</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>

<!-- Paragraphs -->
<p>First paragraph</p>
<p>Second paragraph</p>

<!-- Line breaks and dividers -->
<p>Line 1<br>Line 2</p>
<hr>

<!-- Usage in real page -->
<h1>Welcome to My Blog</h1>
<p>This is my first blog post.</p>
<hr>
<p>More content here.</p>
```

---

## 3. Text Formatting Tags

These tags add **visual emphasis** and **semantic meaning** to text.

### Visual Formatting Tags:

| Tag | Purpose | Display | Example |
|-----|---------|---------|---------|
| `<b>` | Bold text (visual only) | Inline | `<b>Bold text</b>` |
| `<strong>` | Bold + semantic importance | Inline | `<strong>Important text</strong>` |
| `<i>` | Italic text (visual only) | Inline | `<i>Italic text</i>` |
| `<em>` | Italic + emphasis (semantic) | Inline | `<em>Emphasized text</em>` |
| `<u>` | Underline text | Inline | `<u>Underlined text</u>` |
| `<mark>` | Highlight/mark text | Inline | `<mark>Highlighted text</mark>` |
| `<small>` | Smaller text | Inline | `<small>Small text</small>` |
| `<del>` | Strikethrough/deleted text | Inline | `<del>Deleted text</del>` |
| `<sub>` | Subscript (below baseline) | Inline | `H<sub>2</sub>O` |
| `<sup>` | Superscript (above baseline) | Inline | `E=mc<sup>2</sup>` |

### Examples:

```html
<!-- Visual emphasis -->
<p>This is <b>bold</b> and this is <i>italic</i>.</p>

<!-- Semantic emphasis (better for screen readers) -->
<p>This is <strong>important</strong> and <em>emphasized</em>.</p>

<!-- Highlighting and corrections -->
<p>This text is <mark>highlighted</mark>.</p>
<p>Price was <del>₹500</del> now ₹300.</p>

<!-- Scientific notation -->
<p>Water formula: H<sub>2</sub>O</p>
<p>Einstein's formula: E=mc<sup>2</sup></p>

<!-- Small text -->
<p>Terms and conditions <small>(read carefully)</small></p>
```

### Key Difference: `<b>` vs `<strong>` and `<i>` vs `<em>`

- **`<b>` vs `<strong>`**: Both look bold, but `<strong>` has semantic importance (search engines and screen readers treat it as important)
- **`<i>` vs `<em>`**: Both look italic, but `<em>` has semantic emphasis

```html
<!-- Use <strong> for important warnings/information -->
<p><strong>WARNING:</strong> This action is permanent.</p>

<!-- Use <em> for emphasis in speech -->
<p>I really <em>love</em> this product!</p>
```

---

## 4. Links & Navigation

These tags create interactive links that users can click.

### `<a>` Tag - Anchor/Link

```html
<!-- Basic link -->
<a href="https://www.google.com">Click here</a>

<!-- Link in new tab -->
<a href="https://www.google.com" target="_blank">Open in new tab</a>

<!-- Link to another page in same website -->
<a href="about.html">About Us</a>

<!-- Link to a section on same page -->
<a href="#section1">Jump to Section 1</a>
<h2 id="section1">Section 1</h2>

<!-- Link to download file -->
<a href="document.pdf" download>Download PDF</a>
```

### Special Links:

```html
<!-- Email link -->
<a href="mailto:example@gmail.com">Send Email</a>

<!-- WhatsApp link -->
<a href="https://wa.me/917354108663">Chat on WhatsApp</a>

<!-- SMS link -->
<a href="sms:+917354108663">Send SMS</a>

<!-- Phone link -->
<a href="tel:+917354108663">Call Us</a>
```

### Link Attributes:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | URL/link destination | `href="page.html"` |
| `target="_blank"` | Open in new tab | `target="_blank"` |
| `download` | Download file instead of open | `download` |
| `title` | Tooltip on hover | `title="Visit Google"` |
| `rel` | Relationship (for SEO) | `rel="nofollow"` |

---

## 5. Media Tags

These tags embed images, audio, and video on the page.

### Image Tag:

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description">

<!-- Image with width/height -->
<img src="image.jpg" alt="Description" width="200" height="150">

<!-- Image with CSS class -->
<img src="image.jpg" alt="Description" class="thumbnail">

<!-- Image as link -->
<a href="full-image.jpg">
  <img src="thumbnail.jpg" alt="Thumbnail">
</a>
```

### Audio Tag:

```html
<!-- Basic audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>

<!-- Audio with autoplay (muted) -->
<audio controls autoplay muted>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<!-- Multiple sources for compatibility -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
</audio>
```

### Video Tag:

```html
<!-- Basic video -->
<video controls width="400" height="300">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support video.
</video>

<!-- Video with poster (thumbnail) -->
<video controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
</video>

<!-- Video with autoplay -->
<video controls autoplay muted>
  <source src="video.mp4" type="video/mp4">
</video>
```

### iFrame Tag (Embed Content):

```html
<!-- Embed YouTube video -->
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID">
</iframe>

<!-- Embed Google Map -->
<iframe width="600" height="450" 
  src="https://www.google.com/maps/embed?...">
</iframe>

<!-- Embed another website -->
<iframe src="https://example.com" width="800" height="600"></iframe>
```

---

## 6. List Tags

These tags create organized lists of items.

### Unordered List (Bullet Points):

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**Output:**
- Item 1
- Item 2
- Item 3

### Ordered List (Numbered):

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

**Output:**
1. First step
2. Second step
3. Third step

### Nested Lists:

```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

### Description List:

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

---

## 7. Table Tags

These tags create structured data tables.

### Basic Table Structure:

```html
<table border="1">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
    <tr>
      <td>Data 3</td>
      <td>Data 4</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer 1</td>
      <td>Footer 2</td>
    </tr>
  </tfoot>
</table>
```

### Table Tags Explained:

| Tag | Purpose | Example |
|-----|---------|---------|
| `<table>` | Container for entire table | `<table border="1">` |
| `<thead>` | Table header section | Wraps header rows |
| `<tbody>` | Table body section | Wraps data rows |
| `<tfoot>` | Table footer section | Wraps footer rows |
| `<tr>` | Table row | Contains `<td>` or `<th>` |
| `<th>` | Table header cell (bold, centered) | `<th>Name</th>` |
| `<td>` | Table data cell | `<td>John</td>` |
| `<caption>` | Table title | `<caption>Student Scores</caption>` |
| `<colgroup>` | Group columns for styling | Wraps `<col>` tags |
| `<col>` | Define column properties | `<col style="width:50%">` |

### Complete Table Example:

```html
<table border="1">
  <caption>Student Marks</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Math</th>
      <th>English</th>
      <th>Science</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rahul</td>
      <td>85</td>
      <td>78</td>
      <td>92</td>
    </tr>
    <tr>
      <td>Priya</td>
      <td>88</td>
      <td>92</td>
      <td>95</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Total Students: 2</td>
    </tr>
  </tfoot>
</table>
```

### Table with colspan and rowspan:

```html
<table border="1">
  <tr>
    <th colspan="2">Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>First</td>
    <td>Last</td>
    <td>90</td>
  </tr>
</table>

<!-- rowspan example -->
<table border="1">
  <tr>
    <th rowspan="2">Name</th>
    <th>Subject</th>
    <th>Score</th>
  </tr>
  <tr>
    <th>Math</th>
    <td>85</td>
  </tr>
</table>
```

---

## 8. Form Tags

These tags create interactive forms for user input.

### Basic Form Structure:

```html
<form action="submit.php" method="POST">
  <!-- Form content goes here -->
  <button type="submit">Submit</button>
</form>
```

### Input Types:

```html
<!-- Text input -->
<label for="name">Name:</label>
<input type="text" id="name" name="name">

<!-- Email input -->
<input type="email" name="email">

<!-- Password input -->
<input type="password" name="password">

<!-- Number input -->
<input type="number" name="age">

<!-- Checkbox -->
<input type="checkbox" name="agree"> I Agree

<!-- Radio button -->
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female

<!-- File upload -->
<input type="file" name="upload">

<!-- Date picker -->
<input type="date" name="dob">

<!-- Color picker -->
<input type="color" name="color">

<!-- Range slider -->
<input type="range" name="volume" min="0" max="100">

<!-- Button -->
<input type="button" value="Click Me">

<!-- Submit button -->
<input type="submit" value="Submit">

<!-- Reset button -->
<input type="reset" value="Clear">
```

### Textarea (Multi-line Text):

```html
<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50">
  Default text here
</textarea>
```

### Select Dropdown:

```html
<label for="country">Select Country:</label>
<select id="country" name="country">
  <option value="">Choose...</option>
  <option value="india">India</option>
  <option value="usa">USA</option>
  <option value="uk">UK</option>
</select>

<!-- Grouped options -->
<select name="browser">
  <optgroup label="Windows Browsers">
    <option>Chrome</option>
    <option>Firefox</option>
  </optgroup>
  <optgroup label="Mac Browsers">
    <option>Safari</option>
    <option>Chrome</option>
  </optgroup>
</select>
```

### Form Elements:

| Tag | Purpose | Example |
|-----|---------|---------|
| `<form>` | Form container | `<form action="submit.php" method="POST">` |
| `<input>` | Input field (self-closing) | `<input type="text">` |
| `<textarea>` | Multi-line text input | `<textarea rows="5"></textarea>` |
| `<button>` | Clickable button | `<button type="submit">Submit</button>` |
| `<select>` | Dropdown list | `<select><option>...</option></select>` |
| `<option>` | Dropdown item | `<option value="1">Option 1</option>` |
| `<optgroup>` | Group options | `<optgroup label="Group">` |
| `<label>` | Label for input | `<label for="name">Name:</label>` |
| `<fieldset>` | Group form elements | `<fieldset>` |
| `<legend>` | Caption for fieldset | `<legend>Personal Info</legend>` |
| `<output>` | Output/result | `<output>Result: 50</output>` |

### Complete Form Example:

```html
<form action="register.php" method="POST">
  <fieldset>
    <legend>Registration Form</legend>
    
    <label for="fullname">Full Name:</label>
    <input type="text" id="fullname" name="fullname" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option>India</option>
      <option>USA</option>
    </select>
    
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <input type="checkbox" name="agree"> I Agree to Terms
    
    <button type="submit">Register</button>
    <button type="reset">Clear</button>
  </fieldset>
</form>
```

---

## 9. Semantic Tags (Most Important! 🔥)

Semantic tags have **meaningful names** that describe their content. They improve:
- **SEO** (Search Engine Optimization)
- **Accessibility** (Screen readers)
- **Code Readability** (Easier to understand)
- **Document Structure** (Proper hierarchy)

### Semantic Tags Explained:

```html
<!-- Header of the page/section -->
<header>
  <h1>My Website</h1>
  <p>Welcome to my site</p>
</header>

<!-- Navigation menu -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Main content area -->
<main>
  <!-- Article (self-contained content) -->
  <article>
    <h2>Blog Post Title</h2>
    <p>Blog content here...</p>
  </article>
  
  <!-- Section (thematic grouping) -->
  <section>
    <h2>Products</h2>
    <p>Product listing here...</p>
  </section>
</main>

<!-- Sidebar content (secondary) -->
<aside>
  <h3>Related Links</h3>
  <ul>
    <li>Link 1</li>
    <li>Link 2</li>
  </ul>
</aside>

<!-- Footer of page/section -->
<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>
```

### Semantic Tags Table:

| Tag | Purpose | Use When |
|-----|---------|----------|
| `<header>` | Top section (logo, nav, etc) | Page header or section header |
| `<footer>` | Bottom section (links, copyright) | Page footer or section footer |
| `<nav>` | Navigation menu | Menu with links |
| `<main>` | Primary content | Main content area (only 1 per page) |
| `<article>` | Self-contained content | Blog post, news article, comment |
| `<section>` | Thematic grouping | Group related content by theme |
| `<aside>` | Secondary content | Sidebar, related links, ads |
| `<details>` | Collapsible content | Accordion, toggleable info |
| `<summary>` | Title for details | Label for `<details>` |

### Complete Page Structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Blog</title>
</head>
<body>
  <!-- Header with logo and nav -->
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <!-- Main content -->
  <main>
    <!-- Blog article -->
    <article>
      <h2>Why I Love Web Development</h2>
      <p>Posted on Jan 15, 2024</p>
      <p>Full article content...</p>
    </article>
    
    <!-- Related info section -->
    <section>
      <h2>Popular Posts</h2>
      <ul>
        <li>Post 1</li>
        <li>Post 2</li>
      </ul>
    </section>
  </main>

  <!-- Sidebar -->
  <aside>
    <h3>About Me</h3>
    <p>I am a web developer...</p>
  </aside>

  <!-- Footer -->
  <footer>
    <p>&copy; 2024 My Blog</p>
  </footer>
</body>
</html>
```

### Details & Summary (Collapsible Content):

```html
<details>
  <summary>What is HTML?</summary>
  <p>HTML is HyperText Markup Language used for creating web pages.</p>
</details>

<details>
  <summary>What is CSS?</summary>
  <p>CSS is used for styling HTML elements.</p>
</details>
```

---

## Why Semantic Tags Matter?

### For Search Engines (SEO):
- Search engines better understand page structure
- Improves ranking for relevant searches
- `<article>`, `<section>` clearly mark main content

### For Accessibility:
- Screen readers can navigate properly
- Users with disabilities get better experience
- `<header>`, `<nav>`, `<main>` help navigation

### For Code Readability:
- Other developers understand structure
- Easier to maintain and update
- Self-documenting code

---

## Quick Reference: When to Use Which Tag?

```
Use <header> for: Logo, title, tagline at top
Use <nav> for: Main navigation menu
Use <main> for: Primary page content
Use <article> for: Blog post, news article, review
Use <section> for: Thematic grouping of content
Use <aside> for: Sidebar, related links, ads
Use <footer> for: Copyright, links at bottom
```

---

## Common Mistakes to Avoid

❌ **Wrong:** Using `<div>` for everything  
✅ **Right:** Use semantic tags (`<header>`, `<section>`, `<article>`)

❌ **Wrong:** Multiple `<main>` tags  
✅ **Right:** Only ONE `<main>` per page

❌ **Wrong:** Using `<b>` for headings  
✅ **Right:** Use `<h1>`, `<h2>`, etc.

❌ **Wrong:** `<img>` without `alt` text  
✅ **Right:** `<img alt="description">`

❌ **Wrong:** Form inputs without `<label>`  
✅ **Right:** `<label for="id"><input id="id">`

---

## Key Takeaways

1. **Semantic tags** make pages SEO-friendly and accessible
2. **Use proper hierarchy** - h1 > h2 > h3
3. **Always use labels** for form inputs
4. **Use alt text** for images
5. **Keep structure clean** - use semantic tags instead of `<div>` everywhere
6. **One `<main>` per page** - only one primary content area
