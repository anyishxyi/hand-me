<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="row">
        <div class="col-25">
          <label for="email">Email</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            id="lname"
            name="email"
            placeholder="Donner votre email"
            v-model="inputEmail"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="password">Mot de passe</label>
        </div>
        <div class="col-75">
          <input
            type="password"
            id="lname"
            name="password"
            placeholder="Renseigner un mot de passe"
            v-model="inputPassword"
            required
          />
        </div>
      </div>
      <div class="row">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import authService from "../../services/auth";

export default {
  name: "loginForm",
  data() {
    return {
      inputEmail: "",
      inputPassword: ""
    };
  },
  methods: {
    login() {
      authService.login(this.inputEmail, this.inputPassword).then(data => {
        console.log(data);
        //this.$router.push({ path: "userBoard", query: data });
      });
    }
  }
};
</script>

<style>
</style>
