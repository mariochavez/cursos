---
layout: page
title: Trabajando con ActionController Parte 1
subtitle: Video 4
src: trabajando-con-actioncontroller-parte1
excerpt: ActionController en Ruby on Rails permite la creación de controladores Restful que organizan los flujos de acción entre la interfase de usuario y los datos.
category: aprende
cover: /images/video-4.jpg
image:
  path: /images/video-4.jpg
---

Vamos a trabajar con ActionController de Ruby on Rails para crear el controlador de cuentas o Accounts controller.

Los nombres de los controladores siempre son el plural con la referencia al nombre del recurso o modelo con el que van a trabajar.

Un controlador puede tener hasta 7 acciones y no más. Los controladores que cumplen con esta regla son llamados controladores Restful, es decir, que respetan los estándares de HTTP. Las son Index, Show, New, Create, Edit, Update y Destroy.

El controlador AccountsController y va a ser responsable de las acciones que podemos realizar sobre una cuenta de banco.

---

## Video

<div class="embed-container">
  <iframe src="https://player.vimeo.com/video/841715960?h=b17bf27372" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

---

## Código

Comando para generar el controller AccountsController.

<pre class="prism-code">
  <code>
bin/rails g controller accounts --no-helper 
  </code>
</pre>

Comando para generar consultar las rutas en la aplicación de Rails.

<pre class="prism-code">
  <code>
bin/rails routes
  </code>
</pre>

Comando para crear vistas o plantillas de ERB en blanco.

<pre class="prism-code">
  <code>
touch app/views/accounts/index.html.erb
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

El código de este video se encuentra en el [repositorio](https://github.com/mariochavez/expenses/tree/feature/controlador-accounts){:target="_blank"} bajo el __branch__ **feature/controlador-accounts**. Para probar el código localmente clona el repositorio, cambia el __branch__ y sigue las instrucciones del archivo [Readme](https://github.com/mariochavez/expenses/blob/main/README.md){:target="_blank"}.


<pre class="prism-code">
  <code>
git clone https://github.com/mariochavez/expenses.git 
<span style="color: #008000">cd </span>expenses
git checkout feature/controlador-accounts
  </code>
</pre>

---

## Recursos

![Action Controller Overview — Ruby on Rails Guides](/images/aprender/video4/video4-1.png)
[https://guides.rubyonrails.org/action_controller_overview.html](https://guides.rubyonrails.org/action_controller_overview.html){:target="_blank"}

![Rails Routing from the Outside In — Ruby on Rails Guides](/images/aprender/video4/video4-2.png)
[https://guides.rubyonrails.org/routing.html](https://guides.rubyonrails.org/routing.html){:target="_blank"}

![Testing Rails Applications — Ruby on Rails Guides](/images/aprender/video4/video4-3.png)
[https://guides.rubyonrails.org/testing.html#functional-tests-for-your-controllers](https://guides.rubyonrails.org/testing.html#functional-tests-for-your-controllers){:target="_blank"}
