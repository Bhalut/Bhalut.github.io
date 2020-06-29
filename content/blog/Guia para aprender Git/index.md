---
title: Git, una guia para ti
date: "2020-06-25T10:30:03.284Z"
description: "Guia para aprender Git"
---

> Guia para aprender Git (tu sistema control de versiones, tu mejor amigo)

Git es el sistema de control de versiones mas usado y recomendado en la industria tech, pero antes de comenzar con cosas técnicas, es mejor hablar de que es y porque usarlo, eso es lo que veremos a continuación.

## ¿Que es un sistema control de versiones?

Para decir que es un sistema control de versiones, debemos ver el porque se crea uno, ¿cual es su origen?.

Este nace de la necesidad de registrar los cambios hechos en un mismo archivo. Quizas has tenido la necesidad de tener respaldo de un archivo en determinado momento en lo cambios que le has hecho, para no perder la información o tener una version estable del mismo por si todo se hecha a perder, y termina teniendo varios archivos en base a uno solo algo como archivo_versión_1, archivo_versión_2, archivo_versión_3…, \_archivo_versión_final, archivo_versión_final_final… (solo para ejemplificar lo anterior dicho).

—————— Platzi ——————

Durante los 70’s hasta inicios del 2000, muchos profesionales (principalmente de software) se tuvieron que enfrentar a desarrollar proyectos de forma muy pesada. Nos encontrábamos con 3 problemas:

- Proyectos difíciles de gestionar y liderar
- Riesgos a sobrescribir con mi código el avance formal del equipo
- La centralización y poca probabilidad de trabajar remotamente

Con esto, existieron diferentes sistemas de control de versiones (SCV) que se enfocaron fuertemente a atacar esto, con todo lo que hubiera en la época:

- SCCS (1972)
- RCS (1982)
- CVS (1986-1990)
- SVN (2000)
- BitKeeper SCM (2000)
- Mercurial (2005)

pesar de que la evolución iba naturalmente bien, no fue hasta la última tecnología que encajó todas las piezas **de forma funcional y usable**. Además, internet como medio de comunicación principal, ofreció el último peldaño para que destacara a nivel mundial. **La llegada de Git (2005) revolucionó la forma en cómo gestionamos código**, la comunicación y colaboración con profesionales en proyectos de software, incluidos web. Creado por [Linus Torvalds](https://plus.google.com/+LinusTorvalds), hasta hoy ha tenido un gran auge implementándose en startups y empresas relacionadas con el sector tecnológico por su **seguridad, comodidad y velocidad.** A pesar de que los demás SCV siguen utilizándose hoy en día, es importante destacar que Git ha hecho y seguirá con un increíble esfuerzo por posicionarse fuertemente en el mercado. Sostenido por un gran y prestigioso número de empresas, Git además cuenta con el apoyo de su comunidad principal [GitHub](http://github.com/), la cual es enorme y crece día a día.

## ¿Qué buscan los sistemas de control de versiones?

Gestionar ágilmente proyectos. Parte de su principal propósito es que puedas **regresar a un estado anterior del proyecto** o conocer, incluso, toda su evolución en el tiempo. Desde sus inicios hasta donde se encuentra actualizado. Puedes ver a los SCV como máquinas del tiempo, que permiten regresar a cualquier momento que quieras de tu proyecto.

Imagina el proyecto de Mestros del Web. El primer lanzamiento es una versión funcional del sitio web. Pero muy tranquilo. Conforme han avanzado los años, se posiciona y ha llegado a una 6ª versión donde ha mejorado en todas sus perspectivas. Si un desarrollador nuevo quisiera ver el **trabajo y la evolución** durante todos estos años, si se utilizó Git desde el inicio, lo podrá ver sin ningún problema. Cada versión incluye mejoras en el código, imágenes, organización de carpetas, etc. El repositorio (historial) creado por Git, **guarda TODO.** Es como ver un libro de tu proyecto. Hagamos otra analogía, tenemos el famoso CTRL + Z. Cuando trabajas en Word, sabemos que hay momentos donde necesitas regresar a un momento anterior (porque te equivocaste, etc.). Su historial temporal permite manejarte ágilmente con los errores. Los SCV persiguen el mismo objetivo. La diferencia es que éstos tienen un ecosistema para que puedas **gestionar cada cambio de la mejor manera**.

## Cómo gestionan?

Su metodología está en 3 bases:

1. **Registran y guardan** cada modificación del proyecto en un registro. Todo lo que modificas, lo vigilan.
2. **Te dan acceso a este registro.** Con esto, puedes gestionarlo, compartirlo, colaborarlo, administrarlo, editarlo, etc.
3. Podrás moverte hacia atrás o hacia adelante en **diferentes versiones** del proyecto.

Un SCV puede rastrear archivos **HTML, CSS, JS, Py, Rb**, entre otros, debido a que es código fuente, texto plano. En el caso de imágenes, PDF's, Zip, también los puede rastrear, sólo que de forma binaria (Abre una imagen con Sublime Text y verás su formato en binario, así lo registra Git). Con éstos últimos, no podrás saber exactamente donde está el cambio, pero GIT puede rastrearlos y llevarlos junto al proyecto. Si quieres saber más acerca del mejor sistema de versiones que existe actualmente, no te pierdas el **curso de Git y GitHub en Platzi**. Regístrate y empieza a gestionar tus proyectos fácil y rápido.

https://platzi.com/blog/git-control-versiones/

————— Platzi ————————

## ¿Porque usar Git?

...

## Comenzemos con Git

...

### Repositorio

####¿Para que nos sirve un repositorio en git?

Este nos sirve para agrupar aquel o aquellos archivos los cuales queremos requistrar sus cambios. Un repositorio nos sirve como un directorio o carpeta.

####¿Como se crea un repositorio?

Para crear tu repositorio es muy simple, solo es estar dentro de la carpeta que quieres que contenga tu proyecto e ingresar el comando "init" en tu terminal de comandos.

```bash
git init
```

En caso dado que tambien quieras crear tu carpeta mediante tu terminal, seria de la siguiente manera.

```bash
mkdir MiRepositorio
cd MiRepositorio
git init
```

Pero para mayor facilidad, la primera y tercera linea se pueden ahorrar con el siguiente comando.

```bash
git init MiRepostirio
cd MiRepositorio
```

Genial, ya tienes tu repositorio con git, y te preguntaras como se que funciono. Si tienes la opcion activada para ver archivos ocultos, podras ver una carpeta llamada ".git", eso quiere decir que exitosamente ya creaste tu repositorio.

En caso que no puedas ver archivos ocultos, lo podremos mirar en la terminal de comandos.

```bash
ls -al
```

Colocando este comando, te aparecera algo como esto.

```bash
total 0
drwxr-xr-x   3 bhalut  staff  102 Jun 25 15:23 .
drwxr-xr-x  14 bhalut  staff  476 Jun 25 15:23 ..
drwxr-xr-x  11 bhalut  staff  374 Jun 25 15:27 .git
```

### Estados

...

### Agregando cambios

...

Los archivos creados hay que agregarlos al repositorio, esto se hace para rastrear los cambios que han habido en estos mismo, y de igual manera se agregan los cambios que este puede poseer.

Es muy sencillo, solo debes agregarlo de la siguiente manera.

```bash
git add mi_archivo.txt
```

En caso que tengas muchos se un tipo.

```bash
git add *.txt
```

Tambien en una carpeta especifica.

```bash
git add micarpetaespecifica/*
```

O si solo quieres agregar todo lo que contiene tu repositorio.

```bash
git add .
```

### Registrando los cambios agregados

...

Estos archivos o los cambios ya han dicho agregados a tu repositorio, pero no se han guardado, no se han registrado.

pero para tu suerte, hacerlo es muy facil, y el comando es el siguiente.

```bash
git commit
```

Pero cuidado, es de buena practica agregarle un mensaje a tu "commit", para que tu o tu equipo sepa que cambios se están guardando. Por esta razon si solo colocas este comando, te aparecerá una ventana de editor llamada vim en tu consola o se abrira algun editor de texto para que escribas el mensaje de tu "commit".

Aunque lo puedes hacer mas facil.

```bash
git commit -m "este es mi mensaje para mi commit"
```

De esta manera has hecho "commit" y le colocaste un mensaje.

Y aun se puede simplificar. Si ya has agregado tus archivos por primera vez, puedes agregar tus cambios y hacer "commit" en una sola linea, y te lo mostrare de la siguiente manera.

```bash
git commit -am "estoy agregando cambios a la ves que lo guardo"
```

Bastante simple.

### Ahora volvamos en el tiempo

...

### Te sera muy útil

...

#### Stash

...

## Hablemos un poco de repositiorios remotos

...

### Tu repositorio en internet

...
