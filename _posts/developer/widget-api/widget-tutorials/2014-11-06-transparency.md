---
layout: developer-post
title:  "Transparency"
date:   2014-11-06 11:08:00
category: developer/widget-api/widget-tutorials
parent-order: 1
order: 7
---

When creating a Widget, more often than not you will want it to be transparent so that any content that might appear beneath it (e.g. a background image), will still be visible. Fortunately, this is very easy to do.

In the CSS for the Widget, simply add the following:

```
body { background-color: transparent; }
```

To illustrate, here is what the RSS Widget might look like without transparency. Notice the white box around it:

(http://www.risevision.com/wp-content/uploads/2011/10/NonTransparent.png)

Now, here’s the same Widget after making the background transparent:

(http://www.risevision.com/wp-content/uploads/2011/10/Transparent.png)

If a Widget has its own background color setting, then transparency needs to be overridden in the code and replaced with the actual background color:

```
document.body.style.background = myBackgroundColor;
```