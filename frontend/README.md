# ⚛️ Roca Motos RL - Frontend

Interfaz web para la tienda y catálogo de repuestos de **Roca Motos RL**, desarrollada con React, Vite y Tailwind CSS.

---

## 🛠️ Tecnologías y Librerías

* **Core:** React 18 + Vite
* **Estilos:** Tailwind CSS
* **Navegación:** React Router DOM
* **CMS Client:** `@sanity/client` y `@sanity/image-url`

---

## 🧩 Integración con Sanity

El frontend está preparado para consumir contenido desde Sanity, permitiendo gestionar productos, categorías y contenido visual desde un CMS sin necesidad de modificar el código cada vez.

Los datos se consumen a través de `@sanity/client` y las imágenes se resuelven con `@sanity/image-url`.

---

## ⚙️ Variables de Entorno

Asegurarse de tener un archivo `.env` en la raíz de esta carpeta con la siguiente estructura:

VITE_SANITY_PROJECT_ID=tu_project_id
VITE_SANITY_DATASET=production

---

## 📄 Licencia

Este proyecto está bajo la licencia definida por el equipo de Roca Motos RL.

---