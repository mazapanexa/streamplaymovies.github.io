<template>
  <div>
    <div class="container">
      <div class="filters">
        <!-- Muestra el menú solo en StreamPlay -->
        <div class="filters">
          <h2>Filtrar</h2>
          <button
            @click="filterByGenre(null)"
            :class="{ active: selectedGenre === null }"
          >
            Todas
          </button>
          <button
            @click="filterByGenre(1)"
            :class="{ active: selectedGenre === 1 }"
          >
            Acción
          </button>
          <button
            @click="filterByGenre(2)"
            :class="{ active: selectedGenre === 2 }"
          >
            Animación
          </button>
          <button
            @click="filterByGenre(3)"
            :class="{ active: selectedGenre === 3 }"
          >
            Ciencia Ficción
          </button>
          <button
            @click="filterByGenre(4)"
            :class="{ active: selectedGenre === 4 }"
          >
            Terror
          </button>
          <button
            @click="filterByGenre(5)"
            :class="{ active: selectedGenre === 5 }"
          >
            Romance
          </button>
        </div>
        <div class="items">
          <ProductCard
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
            class="product-card"
          />
        </div>
        <!--boton para cargar mas peliculas-->
        <button @click="loadMore" class="load-more-button" type="button">
          Más Películas
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { moviesData } from './dblist';

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      selectedGenre: null,
      products: moviesData,
      currentPage: 1,
      itemsPerPage: 8,
    };
  },
  computed: {
    displayedProducts() {
      let filteredProducts = this.products;

      // Filtra las películas según el género seleccionado y que no deben ocultarse
      if (this.selectedGenre !== null) {
        filteredProducts = filteredProducts.filter(
          (product) => product.numgenero === this.selectedGenre && product.ocultar !== false
        );
      } else {
        // Si no hay género seleccionado, filtra todas las películas que no deben ocultarse
        filteredProducts = filteredProducts.filter((product) => product.ocultar !== false);
      }

      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;

      return filteredProducts.slice(startIndex, endIndex);
    },
    canLoadMore() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return startIndex + this.itemsPerPage < this.displayedProducts.length;
    },
  },
  methods: {
    filterByGenre(genre) {
      this.selectedGenre = genre;
      this.currentPage = 1;
    },
    loadMore() {
      this.currentPage++;
    },
  },
};
</script>
<style scoped>
/* Estilos del filtro */
.filters {
  background-color: #007bff;
  padding: 10px;
  text-align: center;
  min-height: 100px;
  /* Establece una altura mínima para evitar el desplazamiento */
}

.filters h2 {
  font-size: 1.2rem;
  margin: 0;
  color: #000;
}

/* Cambia los botones de 'block' a 'inline-block' y ajusta el margen para separarlos */
.filters button {
  display: inline-block;
  margin: 5px 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.filters button.active {
  background-color: #0056b3;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* estilo para el boton para cargar mas peliculas  */
button.load-more-button {
  display: block;
  font-size: 1rem;
  background-color: #0f1b43;
  margin: 5px 0px;
  padding: 5px 10px;
  width: calc(100% - 1px);
  box-sizing: border-box;
}
/*fin del codigo de boton de cargar mas peliculas */

/*codigo de pantallas */
.items {
  display: grid;
  gap: 20px;
}

/* Media Query para pantallas más grandes, como PC o tabletas */
@media (min-width: 768px) {
  .items {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    /* Centra las tarjetas horizontalmente */
  }
}

/* Media Query para pantallas más pequeñas, como teléfonos */
@media (max-width: 767px) {
  .items {
    grid-template-columns: 1fr;
    justify-items: center;
    /* Centra las tarjetas horizontalmente */
  }
}

/*codigo de pantallas */
.product-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  background-color: #f8f8f8;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 5px 5px 0 0;
}

.product-card h2 {
  font-size: 0.9rem;
  margin: 10px 0;
}

.duration {
  font-size: 1rem;
  margin: 5px 0;
}

.watch-button {
  display: inline-block;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.watch-button:hover {
  background-color: #0056b3;
}
/*fin de codigo de plantilla*/
</style>
