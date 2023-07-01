---
layout: page
title: Trabajando con ActiveRecord
subtitle: Video 3
src: trabajando-con-activerecord
excerpt: ActiveRecord es la parte del framework de Ruby on Rails que nos permite conectarnos con la base de datos. La forma como lo hace es mapeando las columnas de una tabla a atributos en una clase de Ruby, además de proporcionar métodos para poder hacer cambios en los datos, así como consultas.
category: aprende
cover: /images/video-3.jpg
image:
  path: /images/video-3.jpg
---

ActiveRecord es la parte del framework de Ruby on Rails que nos permite conectarnos con la base de datos. La forma como lo hace es mapeando las columnas de una tabla a atributos en una clase de Ruby, además de proporcionar métodos para poder hacer cambios en los datos, así como consultas.

Nuestro primer modelo de la aplicación será el modelo de Account, con el cual vamos a poder definir cuentas con las que vamos a manejar nuestros ingresos y egresos para la aplicación de Control de gasto que estamos construyendo.

---

## Video

<div class="embed-container">
  <iframe src="https://player.vimeo.com/video/736632462?h=13fa283707" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Código

Comando para generar el model Account.

<pre class="prism-code">
  <code>
bin/rails g model account reference <span style="color: #204a87">alias </span>entity deactivated_at:datetime description:text
  </code>
</pre>

Comando para enviar migraciones a la base de datos.

<pre class="prism-code">
  <code>
bin/rails db:prepare db:migrate
  </code>
</pre>


Comando para ejecutar pruebas automáticas.

<pre class="prism-code">
  <code>
bin/rails test
  </code>
</pre>

--- 

## El repositorio

El código de este video se encuentra en el [repositorio](https://github.com/mariochavez/expenses/tree/feature/modelo-cuentas){:target="_blank"} bajo el __branch__ **feature/modelo-cuentas**. Para probar el código localmente clona el repositorio, cambia el __branch__ y sigue las instrucciones del archivo [Readme](https://github.com/mariochavez/expenses/blob/main/README.md){:target="_blank"}.


<pre class="prism-code">
  <code>
git clone https://github.com/mariochavez/expenses.git 
<span style="color: #008000">cd </span>expenses
git checkout feature/modelo-cuentas
  </code>
</pre>

---

## Recursos

![From Ruby on Rails Guides: Active Record Basics — Ruby on Rails Guides | Active Record BasicsThis guide is an introduction to Active Record.After reading this guide, you will know: What Object Relational Mapping and Active Record are and how they are used in Rails. How Active Record fits into the Model-View-Controller par…](/images/aprender/video3/video3-1.png)
[https://guides.rubyonrails.org/active_record_basics.html](https://guides.rubyonrails.org/active_record_basics.html){:target="_blank"}

![From Ruby on Rails Guides: Active Record Encryption — Ruby on Rails Guides | Active Record EncryptionThis guide covers encrypting your database information using Active Record.After reading this guide, you will know: How to set up database encryption with Active Record. How to migrate unencrypted data How to make different en…](/images/aprender/video3/video3-2.png)
[https://guides.rubyonrails.org/active_record_encryption.html](https://guides.rubyonrails.org/active_record_encryption.html){:target="_blank"}

![From Ruby on Rails Guides: Rails Internationalization (I18n) API — Ruby on Rails Guides | Rails Internationalization (I18n) API The Ruby I18n (shorthand for internationalization) gem which is shipped with Ruby on Rails (starting from Rails 2.2) provides an easy-to-use and extensible framework for translating your application to a single cu…](/images/aprender/video3/video3-3.png)
[https://guides.rubyonrails.org/i18n.html](https://guides.rubyonrails.org/i18n.html){:target="_blank"}

![From GitHub: GitHub - svenfuchs/rails-i18n: Repository for collecting Locale data for Ruby on Rails I18n as well … | Repository for collecting Locale data for Ruby on Rails I18n as well as other interesting, Rails related I18n stuff - GitHub - svenfuchs/rails-i18n: Repository for collecting Locale data for Ruby o...](/images/aprender/video3/video3-4.png)
[https://github.com/svenfuchs/rails-i18n](https://github.com/svenfuchs/rails-i18n){:target="_blank"}
