<template>
  <section class="contenedor">
    <img
      src="https://www.themoviedb.org/t/p/original/o4OTC4dwzOEzSivQGvYQpYfm2ln.jpg"
      alt="Suicide Squad"
    />
    <img
      src="https://www.themoviedb.org/t/p/original/lhLxyxlBmh7BrFdgQePii1ufxjG.jpg"
      alt="Pelicula"
    />
    <img
      src="https://www.themoviedb.org/t/p/original/pHjvxeFq2oyFKlFnC3zHR4536nJ.jpg"
      alt="Los indestructibles"
    />
    <img
      src="https://www.themoviedb.org/t/p/original/sEW1wJBL2cgy89b9a9wcbU0GLFR.jpg"
      alt="Los indestructibles"
    />
    <img
      src="https://www.themoviedb.org/t/p/original/30Z4DjbSJEW9oZv4hAksiAmji7r.jpg"
      alt="Los indestructibles"
    />
    <img
      src="https://www.themoviedb.org/t/p/original/4X9j2HpJmiURuaYYJIfjAHpxoc8.jpg"
      alt="WHO I AM: Ningun sistema es seguro"
    />
    <img
      src="https://www.themoviedb.org/t/p/original/z2YhFuq33y1oNEwypRTB1q59geW.jpg"
      alt="Spider man 2007"
    />
  </section>
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

<style>
.contenedor {
  display: flex;
  justify-content: center; /* Centrar horizontalmente */
  width: 80%; /* Ancho del contenedor */
  margin: 0 auto; /* Centrar horizontalmente */
  height: 430px;
}

.contenedor img {
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: 0.8;
  transition: 0.5s ease;
}

.contenedor img:hover {
  cursor: crosshair;
  width: 300px;
  opacity: 1;
  filter: contrast(120%);
}
</style>
