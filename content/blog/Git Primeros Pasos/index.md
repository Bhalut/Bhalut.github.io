---
title: Git - Primeros pasos | Guía parte 2
date: "2020-06-26T10:30:03.284Z"
description: "En esta segunda parte te compartiré como empezar a usarlo."
---

Esto es una guía para aprender Git, en esta segunda parte te compartiré como empezar a usarlo.

## Instalación


### Ubuntu / Debian

Si tu sistema operativo es algunas es alguna distribución de Debian, puedes instalarlo de la siguiente manera:

```bash
sudo apt-get install git
```

### Mac

Si tu sistema operativo es una version de MacOs, puedes instalarlo de la siguiente manera con el gestor de paquetes `HomeBrew`:

```bash
brew install git
```

### Por defecto:

Siempre puedes acudir a la pagina oficial de Git [Aquí.](https://git-scm.com/downloads)



## Crea tu primer repositorio

### ¿Para que nos sirve un repositorio en git?

Este nos sirve para agrupar aquel o aquellos archivos los cuales queremos requistrar sus cambios. Un repositorio nos sirve como un directorio o carpeta.



### ¿Como se crea un repositorio?

Para crear tu repositorio es muy simple, solo es estar dentro de la carpeta que quieres que contenga tu proyecto e ingresar el comando "init" en tu terminal de comandos.

```bash
git init
```

En caso dado que tambien quieras crear tu carpeta mediante tu terminal, seria de la siguiente manera.

```bash
mkdir Mi-proyecto
cd Mi-proyecto
git init
```

Pero para mayor facilidad, la primera y tercera linea se pueden ahorrar con el siguiente comando.

```bash
git init Mi-proyecto
cd Mi-proyecto
```

Genial, ya tienes tu repositorio con git, y te preguntaras como se que funciono. Si tienes la opcion activada para ver archivos ocultos, podras ver una carpeta llamada `.git`, eso quiere decir que exitosamente ya creaste tu repositorio.

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

## Agregando cambios

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
git add micarpeta/*
```

O si solo quieres agregar todo lo que contiene tu repositorio.

```bash
git add .
```



### Registrando los cambios agregados

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

