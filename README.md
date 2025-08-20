# Proyecto 01: Carrito de Compras 🛒

Este es el primer proyecto de mi portafolio de **React**, desarrollado como parte del curso de Udemy *Aprende React desde cero: Hooks y State hasta TypeScript...*. Mi objetivo principal es construir un portafolio de proyectos sólidos en mi cuenta de GitHub para demostrar mis habilidades como desarrollador de React.

Este proyecto es un **carrito de compras completamente funcional** que permite a los usuarios gestionar productos, actualizar cantidades y calcular el total de la compra.

---

### **Características del Proyecto**

* **Listado de productos dinámico**: Muestra los productos disponibles para agregar al carrito.
* **Gestión del carrito**: Permite añadir, eliminar y ajustar la cantidad de productos en el carrito.
* **Cálculo total de la compra**: Muestra el subtotal, impuestos y el total final en tiempo real.

---

### **Despliegue en Vivo**

Puedes ver el proyecto en funcionamiento aquí: [**Enlace a Netlify**](https://gregarious-zuccutto-87280b.netlify.app/)

---

### **Tecnologías y Conceptos Clave**

* **React**: Biblioteca principal utilizada para la interfaz de usuario.
* **Hooks**: Implementación de `useState` para manejar el estado local de la aplicación.
* **Gestión de eventos**: Manejo de eventos de clic y cambio para interactuar con los componentes.
* **Manejo de estados complejos**: Uso de objetos y arreglos para gestionar los ítems del carrito de forma eficiente.
* **Renderizado condicional**: Mostrar o esconder elementos de la UI según el estado del carrito.

---

### **Mejoras y Valor Añadido**

Para solidificar mi aprendizaje y darle un toque personal al proyecto, implementé las siguientes mejoras:

* **Refactorización a Custom Hook**: Migré la lógica del carrito a un **custom hook (`useCart.ts`)** para encapsular la funcionalidad, mejorar la reutilización del código y mantener los componentes limpios y enfocados en la UI.
* **Diseño Responsivo**: Apliqué estilos **responsivos** para garantizar una experiencia de usuario fluida en dispositivos móviles y de escritorio.

---

### **Cómo ejecutar el proyecto localmente**

Si deseas clonar y probar este proyecto en tu entorno local, sigue estos pasos:

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/Jommp/shopping-cart.git](https://github.com/Jommp/shopping-cart.git)
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd shopping-cart
    ```
3.  Instala las dependencias:
    ```bash
    npm install
    ```
4.  Inicia la aplicación en modo de desarrollo:
    ```bash
    npm run dev
    ```

El proyecto se abrirá automáticamente en tu navegador en la URL `http://localhost:3000`.