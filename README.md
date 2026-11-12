# Accessibility Widget Preview

A lightweight, static test page for evaluating the [Accessibility Widget](https://github.com/Projekt-Ansichtssache/accessibility-widget) in a realistic web page.

## Features

The preview includes common content and interaction patterns for testing:

- Headings, paragraphs, links, and long-form text
- Forms, status messages, and a data table
- Animated content, a carousel, and a dismissible notice
- Keyboard navigation and a skip link
- The live Accessibility Widget loaded from its GitHub CDN

## Getting Started

No build step or package installation is required. Open [`index.html`](index.html) directly in a browser, or serve the directory with any local static web server:

```bash
python -m http.server
```

Then visit `http://localhost:8000`.

## Project Structure

- `index.html` — Demo page markup and widget integration
- `style.css` — Layout and presentation styles
- `preview.js` — Demo interactions

This project is intended for development and testing purposes. The form does not send data.
