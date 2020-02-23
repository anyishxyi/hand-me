<template>
  <div class="container">
    <!-- Buttons -->
    <div id="buttons">
      <router-link :to="{name: 'registerAssociation'}">
        <button id="newQuote" class="btn btn-default">
          <i class="fa fa-refresh" aria-hidden="true"></i> Register as association
        </button>
      </router-link>
      <router-link :to="{name: 'registerParticular'}">
        <button id="tweetQuote" class="btn btn-default">
          <i class="fa fa-twitter" aria-hidden="true"></i> Register as particular
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
//import NavBar from "../commons/Navbar";

export default {
  name: "registerForm",
  components: {
    //NavBar
  }
};
</script>


<style>
* {
  box-sizing: border-box;
}

#buttons {
  text-align: center;
  color: black;
}

#buttons button {
  width: 200px;
  height: 40px;
  margin: 0 5px;
  margin-top: 20px;
  position: relative;
  border: none;
  outline: none;
  box-shadow: 0 4px #323232;
}

#buttons button:hover {
  box-shadow: 0 2px #323232;
  top: 2px;
}

#buttons button:active {
  box-shadow: 0 0 #323232;
  top: 4px;
}

#buttons a {
  color: black;
}
</style>
