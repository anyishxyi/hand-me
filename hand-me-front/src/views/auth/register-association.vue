<template>
  <div class="container">
    <form @submit.prevent="register">
      <div class="row">
        <div class="col-25">
          <label for="Nom">Nom de l'association</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            id="fname"
            name="association name"
            placeholder="Nom de votre association"
            v-model="associationName"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label>Numéro d'enregistrement</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            id="lname"
            name="register number"
            placeholder="Numéro enregistrement"
            v-model="associationRegisterNumber"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="email">Nom du responsable</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            id="lname"
            name="owner name"
            placeholder="Nom du responsable ou du représentant"
            v-model="associationOwnerName"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="owner surname">Prénom du responsable</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            id="lname"
            name="owner surname"
            placeholder="Prénom du responsable ou du représentant"
            v-model="associationOwnerFirstName"
            required
          />
        </div>
      </div>
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
            v-model="associationEmail"
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
            v-model="password"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="phone">Téléphone</label>
        </div>
        <div class="col-75">
          <input
            type="tel"
            id="lname"
            name="phone"
            placeholder="Renseigner un numéro"
            v-model="phoneNumber"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="location">Adresse</label>
        </div>
        <div class="col-75">
          <input
            type="tel"
            id="lname"
            name="location"
            placeholder="Renseigner une adresse"
            v-model="location"
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
//import NavBar from "../commons/Navbar";
import authService from "../../services/auth";

export default {
  name: "registerAssociation",
  components: {
    //NavBar
  },
  data() {
    return {
      associationName: "",
      associationRegisterNumber: "",
      associationOwnerName: "",
      associationOwnerFirstName: "",
      associationEmail: "",
      password: "",
      phoneNumber: "",
      location: ""
    };
  },
  methods: {
    register() {
      authService.registerAssociation(
        this.associationName,
        this.associationRegisterNumber,
        this.associationOwnerName,
        this.associationOwnerFirstName,
        this.associationEmail,
        this.password,
        this.phoneNumber,
        this.location
      );
      //console.log("server res:", test);
    }
  }
};
</script>


<style>
* {
  box-sizing: border-box;
}

input[type="text"],
input[type="password"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
