<template>
  <div class="app-container home-page">
    <div class="banner">
      <div class="right-content">
        <h1 class="heading">Trouvez des meilleurs évènements à Paris</h1>
        <el-input size="large" placeholder="Recherchez un évènement..." v-model="search">
          <el-button type="primary">Connexion</el-button>
        </el-input>
      </div>
    </div>
    <div class="category">
      <div class="header">Lorem ipsum dolor sit amet</div>
      <div class="subject">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris rutrum. Nulla metus lectus, bibendum eget eros sit amet, iaculis sagittis mauris. Fusce sed euismod ligula. Morbi pharetra viverra consectetur. Praesent egestas sollicitudin justo aliquet suscipit. Sed ut augue nec purus varius
      </div>
      <div class="content"></div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .home-page {
    .banner {
      background-color: #490D40;
      background: url('~@/icons/jpg/header_home.jpg') no-repeat center center;
      background-size: cover;
      height: 720px;
      margin-top: -60px;

      .right-content {
        width: 60%;
        padding-left: 50px;
        .heading {
          color: white;
          padding-top: 200px;
          font-size: 60px;
        }

        p {
          text-align: center;
        }
      }
    }
    .category {
      text-align: center;
      .header {
        font-size: 37px;
        font-weight: 600;
        padding-top: 5%;
      }
      .subject {
        font-weight: 200;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 5%;
        padding-bottom: 5%;
      }
    }
  }
</style>
