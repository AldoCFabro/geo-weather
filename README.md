# Challenge Telecom Backend

Este es el desafío para aplicar al cargo "Developer" en TELECOM. El desafío consiste en aplicar habilidades en JavaScript Node.js y TypeScript.

## Iniciar el proyecto:

Para poder ejecutar el proyecto de forma local debemos descargarnos primero.
Para esto tenemos dos maneras:

- clonar el repositorio [personal_pay](git@github.com:AldoCFabro/personal_pay.git)
- descargar el [release/1.0.0](https://github.com/AldoCFabro/personal_pay/releases/tag/1.0.0)

En caso de que haya elegido descargar el release deberá descomprimir el archivo .zip o tar.gz.

Luego tenemos que abrir una consola y ubicarnos en la carpeta raíz del proyecto.
Una vez ubicado en la ruta raíz podemos ejecutar utilizando docker o corriendo en un entorno node local.

**Utilizando Docker:** En este caso tenemos el pre-requisito de tener instalado docker. Luego ejecutar el script llamado docker:run que se encuentra en el package.json del proyecto que construirá y correrá el servidor en http://localhost:3000/api/v1/ donde podremos verificar el estado de nuestro servidor.

**Corriendo Local con node:** Para poder correr local en un entorno node tenemos que asegurarnos de tener instalado node v18.12.1. Luego situarnos en la ruta raíz del proyecto e instalar las dependencia necesarias corriendo el comando `npm i`. Una vez que instalamos las dependencias podemos ejecutar el proyecto en modo producción corriendo `npm start`, esto construirá y ejecutará la aplicación.

## Usando la app:

Una vez que la aplicación esté corriendo podemos consultar su documentación en http://localhost:3000/api/v1/doc.
