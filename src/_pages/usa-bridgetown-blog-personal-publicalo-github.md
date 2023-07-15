---
layout: page
title: Usa Bridgetown para crear tu blog personal y publícalo en Github
subtitle: Video 6
src: usa-bridgetown-blog-personal-publicalo-github
excerpt: Crea tu blog personal con Ruby y TailwindCSS usando Bridgetown. Publícalo en Github.
category: bridgetown
cover: /images/video-6.jpg
image:
  path: /images/video-6.jpg
---

En este video vas a aprender como crear un blog personal con la ayuda de Bridgetown y TailwindCSS. También vas a aprededer a publicar el blog en Github usando Github Pages.

<figure>
  <img src="/images/ruby/video6/blog.png" />
  <figcaption>Blog a crear, se puede visitar en <a href="https://mariochavez.github.io/blog" target="_blank">https://mariochavez.github.io/blog</a></figcaption>
</figure>
---

## Video

<div class="embed-container">
  <iframe src="https://player.vimeo.com/video/845430732" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Código

Comando para instalar la versión más reciente de Bridgetown

<pre class="prism-code">
  <code>
gem install bridgetown -N -v 1.3.0.beta3
  </code>
</pre>

Comando para crear un nuevo proyecto con Bridgetown

<pre class="prism-code">
  <code>
bridgetown new blog -t erb
  </code>
</pre>

Comando para instalar TailwindCSS en Bridgetown

<pre class="prism-code">
  <code>
yarn add tailwindcss@latest @tailwindcss/typography@latest
npx tailwindcss init
  </code>
</pre>

Comando para iniciar el servidor de Bridgetown en el puerto 4000

<pre class="prism-code">
  <code>
bin/bridgetown start
  </code>
</pre>

--- 

## El repositorio

El código de este video se encuentra en el [repositorio](https://github.com/mariochavez/blog){:target="_blank"}.

---

## Recursos

![Bridgetown is a next-generation, progressive site generator & fullstack framework, powered by Ruby](/images/ruby/video6/video6-1.png)
[https://www.bridgetownrb.com](https://www.bridgetownrb.com){:target="_blank"}

![Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML](/images/ruby/video6/video6-2.png)
[https://tailwindcss.com](https://tailwindcss.com){:target="_blank"}

![Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.](/images/ruby/video6/video6-3.png)
[https://pages.github.com](https://pages.github.com){:target="_blank"}
