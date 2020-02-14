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
      <div class="content">
        <el-card>
          <svg-icon icon-class="Icon_calendar" />
          <div style="padding: 14px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris
          </div>
        </el-card>
        <el-card class="middle-card">
          <svg-icon icon-class="Icon_localisation" />
          <div style="padding: 14px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris
          </div>
        </el-card>
        <el-card>
          <svg-icon icon-class="Icon_people" />
          <div style="padding: 14px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris
          </div>
        </el-card>
      </div>
    </div>
    <div class="counter">
      <div >
        <count-to :start-val="0" :end-val="users" class="count" separator=" " />
        <p>Membres</p>
      </div>
      <div class="middle-card">
        <count-to :start-val="0" :end-val="organisateurs" class="count" separator=" " />
        <p>Organisateurs</p>
      </div>
      <div >
        <count-to :start-val="0" :end-val="events" class="count" separator=" " />
        <p>Evènements</p>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  components: { countTo },
  data(){
    return {
      search: '',
      users: 6000,
      organisateurs: 300,
      events: 980
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
      .content {
        display: flex;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 5%;
      }
      .content > el-card {
        flex: 1; /*grow*/
        padding: 10px;
      }
    }

    .middle-card {
      margin-left: 20px;
      margin-right: 20px;
    }

    .counter {
      background-color: #4370F3;
      text-align: center;
      color: white;
      display: flex;
      padding-left: 10%;
      padding-right: 10%;
      // padding-bottom: 5%;
      justify-content: center;
      align-items: center;

      .count {
        font-size: 40px;
        font-weight: Medium;
      }

      .count + p {
        margin-top: 0.2em;
        font-size: 0.9em;
        color: white;
        margin-bottom: 2em;
      }

      .counter-content {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .counter > div {
      flex: 1; /*grow*/
      padding: 10px;
    }
  }
</style>
