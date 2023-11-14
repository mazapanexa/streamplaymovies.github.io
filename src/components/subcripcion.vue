<template>
  <div>
    <form class="subscription-form">
      <h2>Suscríbete a Nuestro Boletín</h2>
      <div class="form-group">
        <label for="name">Usuario:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Tu nombre"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="tucorreo@example.com"
          required
        />
      </div>
      <button @click.prevent="subscribe">Suscribirse</button>
    </form>
    <div class="success-alert" v-if="showSuccessAlert">
      Gracias por subscribirte a nuestro sitio
    </div>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      name: '',
      email: '',
      showSuccessAlert: false,
    };
  },
  methods: {
    async subscribe() {
      // Configura la inicialización de Firebase con tu configuración
      const firebaseConfig = {
        apiKey: 'AIzaSyDnZMGltV-PtD1JkKcdfdXOpQAOQ0ZPiuM',
        authDomain: 'streamplaymovies.firebaseapp.com',
        projectId: 'streamplaymovies',
        storageBucket: 'streamplaymovies.appspot.com',
        messagingSenderId: '296712541343',
        appId: '1:296712541343:web:c9af7dfcc1411517433eaa',
      };

      // Inicializa Firebase
      const app = initializeApp(firebaseConfig);

      // Maneja la lógica de suscripción
      try {
        const auth = getAuth(app);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          'password'
        ); // credencial de usuario registrada
        console.log('Usuario registrado:', userCredential.user);
        // Muestra la alerta de éxito
        this.showSuccessAlert = true;
        // Puedes realizar más acciones aquí.
      } catch (error) {
        console.error('Error al registrar usuario:', error);
      }
      // alerta de registro
      this.showSuccessAlert = true;

      // recarga la pagina después de 3 segundos
      setTimeout(() => {
        window.location.href = '/stream';
      }, 3000); // 3000 milisegundos (3 segundos)
    },
  },
};
</script>

<style scoped>
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}

.success-alert {
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
.subscription-form {
  max-width: 400px;
  margin: 0 auto;
  background-color: #f4f4f4;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%; /* Ajusta el ancho del formulario según tu preferencia */
}

/* Estilo para pantallas de teléfono */
@media (max-width: 768px) {
  .subscription-form {
    width: 90%; /* Puedes ajustar el ancho para pantallas de teléfono */
  }
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 90%;
  padding: 12px;
  border: 3px solid #ccc;
  border-radius: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
