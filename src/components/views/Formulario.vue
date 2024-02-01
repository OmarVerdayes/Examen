<template>
  <div class="container">
    <h1>Formulario</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Marca" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.marca"
          type="text"
          placeholder="Ingresa la marca"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Modelo" label-for="input-4">
        <b-form-input
          id="input-2"
          v-model="form.modelo"
          type="text"
          placeholder="Ingresa el modelo"
          required
        />
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Año de fabricación"
        label-for="input-8"
      >
        <b-form-input
          id="input-3"
          type="number"
          v-model="form.fabricacion"
          :max="2024"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Numero de serie"
        label-for="input-9"
      >
        <b-form-input
          id="input-4"
          type="text"
          v-model="form.NoSerie"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
    </b-form>

    <div v-if="formError" class="alert alert-danger">{{ formError }}</div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      form: {
        marca: "",
        modelo: "",
        fabricacion: "",
        NoSerie: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (!this.validateForm()) {
        return;
      }
      axios
        .post("https://localhost:8080/aapi/vehiculos/", post)
        .then((result) => {
          console.log(result);
        });

      alert("Formulario enviado correctamente");
      this.resetForm();
    },
    onReset(event) {
      event.preventDefault();
      this.resetForm();
    },
    validateForm() {
      if (this.form.fabricacion < 2024) {
        this.formError = "El año de fabricacion no puede ser mayor al actual";
        return false;
      }

      const pattern = new RegExp("^[A-Z]0-9+$", "i");
      const pattern2 = new RegExp("^[A-Z]+$", "i");
      const pattern3 = new RegExp("^[A-Z]0-9+$", "i");
      if (!pattern.test(this.form.marca)) {
        this.formError = "Favor de solo ingresar solo letras";
        return false;
      }
      if (!pattern.test(this.form.modelo)) {
        this.formError = "Favor de solo ingresar solo letras";
        return false;
      }
      for (var i = 0; i < this.form.NoSerie; i++) {
        if (i < 4) {
          if (!pattern2.test(this.form.NoSerie.charAt(indice))) {
            this.formError = "Numero de serie incorrecto";
            break;
            return false;
          }
        }
        if (i >= 4 && i<6) {
          if (!pattern3.test(this.form.NoSerie.charAt(indice))) {
            this.formError = "Numero de serie incorrecto";
            break;
            return false;
          }
        }
        if (i>6) {
          if (!pattern2.test(this.form.NoSerie.charAt(indice))) {
            this.formError = "Numero de serie incorrecto";
            break;
            return false;
          }
        }
      }

      this.formError = "";
      return true;
    },

    resetForm() {
      this.form = {
        marca: "",
        modelo: "",
        fabricacion: "",
        NoSerie: "",
      };
      this.formError = "";
    },
  },
};
</script>
  
  <style></style>
  