---
layout: ../../layouts/PostLayout.astro
title: "Wasteful Wordpress: Improving WordPress Image Handling"
description: How to improve Wordpress image handling, saving server resources and improving page load speed.
author: Paul
date: 15 Jun 2022
tags:
  - ecology
  - technology
---

Images account for roughly [50% of a web page's size](https://almanac.httparchive.org/en/2022/page-weight#fig-8), making them the most obvious place to start optimising a web site.

## Wasteful WordPress

WordPress has some major issues with how it handles images. Upload an image to a fresh installation and seven scaled versions of that image are automatically created on your server. The idea is that your theme can use these scaled versions (or thumbnails), to display the right size images in different parts of the template. However, the system does not discriminate when generating thumbnails; it creates all defined thumbnail sizes for every image, even if they are obviously unnecessary and will never be used.

The issue gets worse when plugins are installed, as they often introduce their own custom thumbnail sizes. For example, WooCommerce adds three new image sizes, which are applied not just to product images, but to all images on the website. Those familiar with WordPress will know how quickly the `wp-content` folder can become cluttered with unnecessary images, most of which will never be used. With 63.5% of all websites on the internet running WordPress, the sheer amount of storage space and energy wasted by such an inefficient system is inexcusable.

### Responsive Images

Wordpress also uses these scaled images in its responsive image solution. The idea being that it can co-opt these thumbnails for responsive design by lumping them all in a `srcset`. This is a misguided and lazy idea approach, as the thumbnail sizes chosen by a theme are very unlikely to also be efficient choices for generating a `srcset` suitable for serving efficiently sized images to different types of device.

## An Alternative Approach: Images on Demand

An alternative to generating all these images is to generate an image only when it is needed. This may sound slow, but luckily there are image management services such as [imgIX](https://imgix.com/), [ImageKit](https://imagekit.io/) and [Cloudinary](https://cloudinary.com/) that can help. These services can generate a scaled version of an image, convert it to an optimal format (e.g., WebP), and serve it from a location close to the user via their content delivery network (CDN) in a fraction of a second. After the initial image generation, it becomes even quicker for subsequent users, who can now download a cached version.

But how do we integrate these services with Wordpress as an alternative thumbnail and responsive image solution?

## Wordpress Images on Demand Plugin

Images on Demand is our own WordPress plugin that provides an alternative way of serving scaled images by integrating with an image CDN. It replaces both the native WordPress thumbnail and responsive images functionality. This helps to save server space and improve page load speed compared to the default WordPress approach.

<aside class="aside--info">

The project is still in development and progress can be viewed on <a href="https://github.com/Elwood-P/wp-images-on-demand">Github</a>.

</aside>