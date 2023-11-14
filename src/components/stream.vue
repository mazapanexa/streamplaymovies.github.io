<template>
  <p>&nbsp;</p>
  <div class="welcome">
    <div class="content">
      <h1>StreamPlay</h1>
      <p class="description">
        Tu destino para películas de alta calidad en línea.
      </p>
      <ProductList></ProductList>
    </div>
  </div>
  <FooterWeb></FooterWeb>
</template>

<script>
import ProductList from './ProductList.vue';
import FooterWeb from './Footerweb.vue';
export default {
  components: {
    ProductList,
    FooterWeb,
  },
  data() {
    return {
      //esStreamPlay: true, 
    };
  },
  // Resto de la lógica del componente
};
</script>

<style scoped>
.welcome {
  background-color: #1a1a1a; /* Fondo oscuro */
  text-align: center;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Sombra más marcada */
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #007bff; /* Color de texto azul */
  text-transform: uppercase; /* Convertir el texto en mayúsculas */
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Efecto de luz brillante */
}

.description {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 123, 255, 0.3); /* Efecto de luz brillante */
}

@media (max-width: 768px) {
  .welcome {
    padding: 20px;
  }

  h1 {
    font-size: 2rem; /* Tamaño de fuente reducido para pantallas pequeñas */
  }

  .description {
    font-size: 1rem; /* Tamaño de fuente reducido para pantallas pequeñas */
  }
}
</style>
