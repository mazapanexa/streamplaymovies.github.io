<template>
  <div>
    <p>&nbsp;</p>
    <div class="about-us">
      <h2 class="section-title">Nosotros</h2>
      <div class="about-description">
        <p>
          Somos una plataforma dedicada a brindarte acceso a una amplia variedad
          de películas para tu disfrute. Nuestra misión es proporcionar un
          catálogo diverso y emocionante que ofrezca entretenimiento de alta
          calidad a nuestros usuarios.
        </p>
        <p>
          Nuestro equipo está compuesto por apasionados cinéfilos que trabajan
          incansablemente para brindarte una experiencia cinematográfica
          excepcional.
        </p>
        <p>
          Valoramos la pasión por el cine y nos esforzamos por ofrecer una
          selección de películas que abarca diferentes géneros, desde clásicos
          hasta los últimos estrenos, para satisfacer todos los gustos.
        </p>
        <carrusel></carrusel>
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
  <FooterWeb></FooterWeb>
</template>

<script>
import Carrusel from './carrusel.vue'; // Importa el componente Carrusel
import FooterWeb from './Footerweb.vue';
export default {
  props: {
    product: Object,

    Carrusel,
  },
  components: {
    FooterWeb,
  },
  methods: {
    addToCart() {},
  },
};
</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
}
.section-title {
  color: #007bff;
  font-size: 24px;
  margin-bottom: 20px;
  text-transform: uppercase; /* Convertir el texto en mayúsculas */
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

.about-us {
  background-color: #1a1a1a; /* Fondo oscuro */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.about-description p {
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  text-align: justify;
}
</style>
