# Documentación del Proyecto: Ed Machina
## Resumen del Proyecto

Ed Machina es una aplicación web desarrollada con Vue.js y Vite como bundler, diseñada para ofrecer una plataforma de gestión educativa para estudiantes y profesores.

## Estructura de Carpetas
- `utils/`: Contiene archivos de utilidades como funciones de fecha y gestión de íconos.
- `data/`: Almacena archivos JSON con datos simulados para actividades, detalles de íconos y perfiles de estudiantes.
- `scss/`: Contiene archivos SASS para estilos de diferentes componentes y la estructura de la aplicación.

## Archivos Clave
- **main.js**: Punto de entrada de la aplicación que carga componentes principales y establece la lógica inicial.
- **vite.config.js**: Configuración de Vite para la compilación y ejecución del proyecto.
- **Dockerfile**: Configuración de la imagen Docker de la aplicación.
- **docker-compose.yml**: Archivo de composición de Docker para administrar múltiples contenedores.

## Componentes Principales
- **Main.vue**: Controla la disposición general de la aplicación con secciones para menú, perfil y detalles de registros.
- **RecordDetails.vue**: Maneja la estructura de la página de detalles de registros.
- **Menu.vue**: Lógica del menú, permite expandir o contraer y maneja la selección de íconos.
- **Profile.vue**: Encapsula secciones del perfil del estudiante.

## Archivos de Utilidades
- **datefunctions.js**: Funciones para el manejo de fechas y meses.
- **iconmanager.js**: Gestiona nombres de íconos para su uso en la aplicación.
- **iconsdata.json**: Datos adicionales asociados con nombres de íconos.

## Estilos
- **main.scss**: Archivo principal de estilos que importa diferentes archivos SCSS para dar estilo a los componentes.

## Dockerización y Orquestación

```### Dockerfile
FROM node:14

WORKDIR /src/app

COPY package.json package-lock.json ./
COPY . .

RUN npm install

CMD ["npm", "start"]
```
## Uso con Docker

### Requisitos Previos

Asegúrate de tener Docker instalado en tu sistema antes de continuar. Si no tienes Docker instalado, puedes obtenerlo desde [el sitio web oficial de Docker](https://www.docker.com/get-started).

### Ejecución con Docker Compose
1. Clona el repositorio de GitHub:
    ```bash
    git clone https://github.com/tu_usuario/tu_proyecto.git
    cd tu_proyecto
    ```

2. Ejecuta el siguiente comando para construir y ejecutar la aplicación utilizando Docker Compose:
    ```bash
    docker-compose up --build
    ```

3. Una vez que la compilación haya finalizado y los contenedores estén en ejecución, abre tu navegador web y accede a [http://localhost:8888](http://localhost:8888) o [http://localhost:5173](http://localhost:5173) para ver la aplicación en funcionamiento. 

## Consideraciones Adicionales:
### Enfoque Pixel Perfect
Para el maquetado, se utilizó una metodología "Pixel Perfect" utilizando Figma para garantizar la precisión y coherencia en el diseño y la implementación.

### Uso de SOLID
Aunque no está explícitamente declarado, se puede identificar el uso de principios SOLID en la arquitectura y desarrollo del proyecto, asegurando la escalabilidad, mantenibilidad y robustez del código.
