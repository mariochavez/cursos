---
layout: page
title: Inicializando la aplicación
subtitle: Video 2
src: inicializando-la-aplicacion
excerpt: El primer paso para comenzar a trabajar con una aplicación de Ruby on Rails es inicializar la aplicación. Este paso no únicamente en crear la estructura inicial de archivos y directorios, también se encarga de hacer la configuración inicial de nuestra aplicación y es aquí donde hacemos los primeros ajustes para configurarla a nuestra forma de trabajar.
category: aprende
cover: /images/video-2.jpg
image:
  path: /images/video-2.jpg
---

El primer paso para comenzar a trabajar con una aplicación de Ruby on Rails es inicializar la aplicación. Este paso no únicamente en crear la estructura inicial de archivos y directorios, también se encarga de hacer la configuración inicial de nuestra aplicación y es aquí donde hacemos los primeros ajustes para configurarla a nuestra forma de trabajar.

---

## Video

<div class="embed-container">
  <iframe src="https://player.vimeo.com/video/736629657?h=01abdb1606" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Código

Recuerda que es necesario tener instalado **Ruby 3.0** o mejor, así como **Ruby on Rails 7.0** o mejor.

El comando utilizado para inicializar la aplicación es el siguiente:

<pre class="prism-code">
  <code>
rails new expenses -d postgresql --skip-jbuilder --css<span style="color: #ce5c00; font-weight: bold">=</span>tailwind --javascript<span style="color: #ce5c00; font-weight: bold">=</span>importmap
  </code>
</pre>

Comando para configurar el uso de Overmind en la aplicación con un template de Rails.

<pre class="prism-code">
  <code>
bin/rails app:template <span style="color: #ffffff">LOCATION</span><span style="color: #ce5c00; font-weight: bold">=</span><span style="color: #4e9a06">&quot;https://gist.githubusercontent.com/mariochavez/f54bcc6ca4049a25f9b6142108c2d4da/raw/ea6993614c5c3ab4e4f8a41e07d85335c3ebced2/overmind.rb&quot;</span>
  </code>
</pre>

--- 

## El repositorio

El código de este video se encuentra en el [repositorio](https://github.com/mariochavez/expenses/tree/feature/inicializacion){:target="_blank"} bajo el __branch__ **feature/inicializacion**. Para probar el código localmente clona el repositorio, cambia el __branch__ y sigue las instrucciones del archivo [Readme](https://github.com/mariochavez/expenses/blob/main/README.md){:target="_blank"}.


<pre class="prism-code">
  <code>
git clone https://github.com/mariochavez/expenses.git 
<span style="color: #008000">cd </span>expenses
git checkout feature/inicializacion
  </code>
</pre>

---

## Recursos

Los siguientes link son los que aparecen como referencia en el video.

![From Ruby on Rails Guides: Getting Started with Rails — Ruby on Rails Guides | Getting Started with RailsThis guide covers getting up and running with Ruby on Rails.After reading this guide, you will know: How to install Rails, create a new Rails application, and connect your application to a database. The general layout of a R…](/images/aprender/video2/video2-1.png)
[https://guides.rubyonrails.org/getting_started.html](https://guides.rubyonrails.org/getting_started.html){:target="_blank"}

![From GitHub: GitHub - testdouble/standard: 🌟 Ruby Style Guide, with linter & automatic code fixer | 🌟 Ruby Style Guide, with linter & automatic code fixer - GitHub - testdouble/standard: 🌟 Ruby Style Guide, with linter & automatic code fixer](/images/aprender/video2/video2-2.png)
[https://github.com/testdouble/standard](https://github.com/testdouble/standard){:target="_blank"}

![From Brakemanscanner.org: Brakeman | Brakeman is a static analysis security vulnerability scanner for Ruby on Rails applications.](/images/aprender/video2/video2-3.png)
[https://brakemanscanner.org/](https://brakemanscanner.org/){:target="_blank"}

![From GitHub: GitHub - rubysec/bundler-audit: Patch-level verification for Bundler | Patch-level verification for Bundler. Contribute to rubysec/bundler-audit development by creating an account on GitHub.](/images/aprender/video2/video2-4.png)
[https://github.com/rubysec/bundler-audit](https://github.com/rubysec/bundler-audit){:target="_blank"}

![From Martian Chronicles: Introducing Overmind and Hivemind — Martian Chronicles | Never mind your usual Procfile manager, here’s the Overmind and its little brother—Hivemind. Evil Martians use these tools over Foreman to manage Procfile-based applications for development.](/images/aprender/video2/video2-5.png)
[https://evilmartians.com/chronicles/introducing-overmind-and-hivemind](https://evilmartians.com/chronicles/introducing-overmind-and-hivemind){:target="_blank"}

![From Railsbytes.com: Rails Bytes | ](/images/aprender/video2/video2-6.png)
[https://railsbytes.com/](https://railsbytes.com/){:target="_blank"}

![From Githubusercontent.com:  | ](/images/aprender/video2/video2-7.png)
[https://gist.githubusercontent.com/mariochavez/f54bcc6ca4049a25f9b6142108c2d4da/raw/ea6993614c5c3ab4e4f8a41e07d85335c3ebced2/overmind.rb](https://gist.githubusercontent.com/mariochavez/f54bcc6ca4049a25f9b6142108c2d4da/raw/ea6993614c5c3ab4e4f8a41e07d85335c3ebced2/overmind.rb){:target="_blank"}
