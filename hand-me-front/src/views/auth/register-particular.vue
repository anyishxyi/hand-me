<template>
  <div class="container">
    <form action="/action_page.php">
      <div class="row">
        <div class="col-25">
          <label for="Nom">Nom</label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="Nom" placeholder="Donner votre nom" required />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="Prénom">Prénom</label>
        </div>
        <div class="col-75">
          <input type="text" id="lname" name="Prénom" placeholder="Donner votre prénom" required />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="email">Email</label>
        </div>
        <div class="col-75">
          <input type="text" id="lname" name="email" placeholder="Donner votre email" required />
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
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="phone">Téléphone</label>
        </div>
        <div class="col-75">
          <input type="tel" id="lname" name="phone" placeholder="Renseigner un numéro" />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="location">Adresse</label>
        </div>
        <div class="col-75">
          <input type="tel" id="lname" name="location" placeholder="Renseigner une adresse" />
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

export default {
  name: "registerParticular",
  components: {
    //NavBar
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
