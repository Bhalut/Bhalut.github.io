---
title: Git - Introducción | Guía parte 1
date: "2020-06-25T10:30:03.284Z"
description: "En esta primera parte te compartiré que es y por que es importante conocerlo."
---

Esto es una guía para aprender Git, en esta primera parte te compartiré que es y por que es importante conocerlo.

## ¿Qué es Git?

Git es un sistema control de version (Version-Control System como es conocido en ingles) distribuido para tener seguimiento de los cambios en el código durante el desarrollo de software.

Git es **gratis** y de código abierto distribuido bajo los terminos de la GNU General Public License version 2.

Es usado por la gran mayoria de compañias y projectos en el area del software, como ejemplo tenemos: Google, Android, Facebook, Microsoft, Linux, Netflix, Reddit, Twitter, LinkedIn y muchos más.

**Dato curioso**

Esta programado en: [C](https://www.google.com/search?sxsrf=ALeKk038qQTbc7ejaMsqbbAmbDDEX6LeQA:1593721913679&q=C&stick=H4sIAAAAAAAAAONgVuLQz9U3MCwxS1rEyugMAAqDqO4QAAAA&sa=X&ved=2ahUKEwiy9KPktK_qAhVQTd8KHcrBBsAQmxMoATAnegQIChAD), [Bourne Shell](https://www.google.com/search?sxsrf=ALeKk038qQTbc7ejaMsqbbAmbDDEX6LeQA:1593721913679&q=Bourne+Shell&stick=H4sIAAAAAAAAAONgVuLQz9U3yDOIz1jEyuOUX1qUl6oQnJGakwMAwZaOjxsAAAA&sa=X&ved=2ahUKEwiy9KPktK_qAhVQTd8KHcrBBsAQmxMoAjAnegQIChAE), Perl

## ¿Para qué?

Antes de Git, o de sistemas control de versiones, las versiones en el desarrollo de software eran abministradas por copias de los archivos fuente para conservar los cambios anteriores y los actuales.

Con la llegada de estos sistemas y Git como sobresaliente en toda la industria, las reglas de juego cambian, ahora solo debes de tener tu proyecto, y con base a los mismos archivos fuentes puedes tener cambios anteriores y actuales de tu código.

## ¿Quién lo creo?

Su creador es [Linus Torvalds](https://es.wikipedia.org/wiki/Linus_Torvalds).

> Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente. [Wikipedia](https://es.wikipedia.org/wiki/Git)

## Historia

Como muchas de las grandes cosas en esta vida, Git comenzó con un poco de destrucción creativa y una gran polémica.

El kernel de Linux es un proyecto de software de código abierto con un alcance bastante amplio. Durante la mayor parte del mantenimiento del kernel de Linux (1991-2002), los cambios en el software se realizaban a través de parches y archivos. En el 2002, el proyecto del kernel de Linux empezó a usar un DVCS propietario llamado BitKeeper.

En el 2005, la relación entre la comunidad que desarrollaba el kernel de Linux y la compañía que desarrollaba BitKeeper se vino abajo y la herramienta dejó de ser ofrecida de manera gratuita. Esto impulsó a la comunidad de desarrollo de Linux (y en particular a Linus Torvalds, el creador de Linux) a desarrollar su propia herramienta basada en algunas de las lecciones que aprendieron mientras usaban BitKeeper. Algunos de los objetivos del nuevo sistema fueron los siguientes:

- Velocidad
- Diseño sencillo
- Gran soporte para desarrollo no lineal (miles de ramas paralelas)
- Completamente distribuido
- Capaz de manejar grandes proyectos (como el kernel de Linux) eficientemente (velocidad y tamaño de los datos)

Desde su nacimiento en el 2005, Git ha evolucionado y madurado para ser fácil de usar y conservar sus características iniciales. Es tremendamente rápido, muy eficiente con grandes proyectos y tiene un increíble sistema de ramificación (branching) para desarrollo no lineal.

Esto hace parte de [Una breve historia de Git.](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Una-breve-historia-de-Git)
