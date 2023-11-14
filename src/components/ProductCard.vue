<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.imageUrl" />
    </div>
    <h2>{{ product.name }}</h2>
    <p class="duration">
      Duración: {{ product.duracion }}h {{ product.minutos }}m<br>Género:{{
        product.genero
      }}<br>año:{{ product.anio }}
    </p>
    <a
      :href="product.link"
      target="_blank"
      rel="noopener noreferrer"
      class="watch-button"
    >
      Ver ahora
    </a>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      // Agregar lógica para agregar al carrito aquí
    },
  },
};
</script>

<style scoped>
.section_title {
  font-size: 18px; /* Tamaño de fuente más grande para resaltar */
  color: #007bff; /* Color de texto azul */
  text-transform: uppercase; /* Convertir el texto en mayúsculas */
  margin-top: 10px; /* Espacio superior para separar del título principal */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
  background-color: #f8f8f8;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: inline-block; /* Cambia a "inline-block" para que las tarjetas se muestren en línea horizontal */
  vertical-align: top; /* Alinea las tarjetas en la parte superior de la fila */
  margin-right: 10px; /* Agrega un margen derecho para separar las tarjetas horizontalmente */
  margin-bottom: 10px; /* Agrega un margen inferior para separar las tarjetas verticalmente */
}
/*
.product-image img {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
}
*/
/*estilo de imagen*/
.product-image img {
  width: 100%;
  height: 300px;
  border-radius: 5px 5px 0 0;
  transition: transform 0.3s;
}

.product-image img:hover {
  transform: scale(1.1); /* Cambia la escala de la imagen al pasar el cursor */
}
/*estilo de imagen*/
.product-card h2 {
  font-size: 1rem;
  margin: 0; /* Elimina el margen inferior para evitar afectar al botón */
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden; /* Recorta el texto que desborda el contenedor */
  text-overflow: ellipsis; /* Muestra puntos suspensivos (...) para indicar texto recortado */
}

.duration {
  font-size: 1rem;
  margin: 5px 0;
}

.watch-button {
  display: block; /* Cambia a "block" para que el botón se muestre en una nueva línea */
  padding: 10px 0; /* Aumenta el espaciado vertical para separar el botón del borde de la tarjeta */
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s; /* Añade una transición para la propiedad 'transform' */
}

.watch-button:hover {
  background-color: #0056b3;
  transform: scale(
    1.1
  ); /* Añade una escala al botón al pasar el cursor sobre él */
}
</style>
