<template>
  <footer :class="{ hidden: footerHidden }">
    © Todos los derechos reservados a <br />StreamPlay Movies
  </footer>
</template>

<script>
export default {
  name: 'FooterWeb',
  data() {
    return {
      footerHidden: true, // Comienza oculto
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Altura del contenido de la página
      const contentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Posición actual de desplazamiento
      const scrollPosition = window.scrollY;

      // Muestra u oculta el footer según la posición
      this.footerHidden = scrollPosition < contentHeight;
    },
  },
};
</script>

<style>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
  padding: 10px;
  text-align: center;
  z-index: 1; /* Añade una capa z para que el footer esté por encima de otros elementos */
  transition: transform 0.3s; /* Agrega una transición para suavizar el efecto */
  font-size: 12px;
}

footer.hidden {
  transform: translateY(100%); /* Mueve el footer hacia abajo para ocultarlo */
}
</style>
