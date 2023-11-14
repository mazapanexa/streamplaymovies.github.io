<template>
  <div>
    <p>&nbsp;</p>
    <div class="contact-info">
      <h2 class="section-title">Contacto</h2>
      <p class="contact-text">
        Si deseas ponerte en contacto con nosotros o tienes alguna pregunta
        acerca de nuestras películas o cuando subiremos nuevos estrenos o alguna queja o reporte de links caídos, no
        dudes en utilizar la información de contacto a continuación:
      </p>
      <p class="contact-details">
        Correo electrónico:
        <a href="mailto:rplaymovies@outlook.com" class="contact-link"
          >splaymovies@outlook.com</a
        >
      </p>
      <p class="contact-text">
        Estamos disponibles para recibir tus correos y peticiones. ¡Esperamos
        saber de ti pronto!
      </p>
      <button @click="showSubscriptionForm" class="subscribe-button">¡Suscríbete!</button>
      <div class="overlay" v-if="isSubscriptionFormVisible">
        <Subscripcion></Subscripcion>
       </div>
     
        <!-- Contenido del pop-up y botón para cerrar -->
      </div>
    </div>
  </div>
  <FooterWeb></FooterWeb>
</template>

<script>
import FooterWeb from './Footerweb.vue';
import Subscripcion from './subcripcion.vue';

export default {
  components: {
    FooterWeb,
    Subscripcion,
  },
  data() {
    return {
      isSubscriptionFormVisible: false, // Agrega una variable de datos para controlar la visibilidad del pop-up
    };
  },
  methods: {
    showSubscriptionForm() {
      this.isSubscriptionFormVisible = true; // Cuando se hace clic en el botón, muestra el pop-up
    },
  },
};
</script>

<style scoped>
.section-title {
  color: #007bff;
  font-size: 24px;
  margin-bottom: 20px;
  text-transform: uppercase; /* Convertir el texto en mayúsculas */
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}
/*==========================*/
.contact-info {
  background-color: #1a1a1a; 
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .contact-info {
    padding: 10px;
    max-width: 100%;
  }
}
/* Estilo para el fondo oscuro del pop-up */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fondo oscuro semitransparente */
  z-index: 999; /* Asegúrate de que esté por encima de otros elementos */
}

/* Estilo para el pop-up de suscripción */


/*==========================*/
.contact-text {
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  text-align: justify;
}

.contact-details {
  font-size: 16px;
  color: #e3e3e3;
  margin-bottom: 10px;
}

.contact-link {
  color: #0ff;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}
/*estilo de boton subscribete*/ 
.subscribe-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.subscribe-button:hover {
  background-color: #0056b3;
}

</style>
