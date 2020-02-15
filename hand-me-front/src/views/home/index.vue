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
      <div class="cat_header">Lorem ipsum dolor sit amet</div>
      <div class="cat_subject">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris rutrum. Nulla metus lectus, bibendum eget eros sit amet, iaculis sagittis mauris. Fusce sed euismod ligula. Morbi pharetra viverra consectetur. Praesent egestas sollicitudin justo aliquet suscipit. Sed ut augue nec purus varius
      </div>
      <div class="cat_content">
        <el-card>
          <svg-icon class="icon-size" icon-class="calendar" />
          <div style="padding: 14px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris
          </div>
        </el-card>
        <el-card class="middle-card">
          <svg-icon class="icon-size" icon-class="localisation" />
          <div style="padding: 14px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris
          </div>
        </el-card>
        <el-card>
          <svg-icon class="icon-size" icon-class="people" />
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
    <div class="maps">
      <div class="title">Vos évènements à proximité</div>
    </div>
    <div class="events_overview">
      <div class="events">
        <div class="event">
          <div class="container">
            <div class="city-title">event</div>
            <hr />
            <div class="city-weather-temperature"  id="city-weather-temperature">-1° C</div>
            <div class="city-weather-description" id="city-weather-description">
              sunny
            </div>
            <div class="content">
              <div class="nav-info clearfix" id="offices">
                <div class="one-half">
                  <div class="info" id="offices">
                    <div class="company-name">Mintel Group Ltd</div>
                    <div class="address">333 W. Wacker Drive, Suite 1100, event</div>
                    <div class="phone">+1 123 654 987 36</div>
                  </div> <!-- end info -->
                </div> <!-- end one-half -->
                <div class="one-half">
                </div> <!-- end one-half -->
              </div> <!-- end nav-info #offices-->
            </div> <!-- end content -->
          </div> <!-- end container -->
        </div> <!-- end event -->
        <div class="event">
          <div class="container">
            <div class="city-title">event</div>
            <hr />
            <div class="city-weather-temperature"  id="city-weather-temperature">-1° C</div>
            <div class="city-weather-description" id="city-weather-description">
              sunny
            </div>
            <div class="content">
              <div class="nav-info clearfix" id="offices">
                <div class="one-half">
                  <div class="info" id="offices">
                    <div class="company-name">Mintel Group Ltd</div>
                    <div class="address">333 W. Wacker Drive, Suite 1100, event</div>
                    <div class="phone">+1 123 654 987 36</div>
                  </div> <!-- end info -->
                </div> <!-- end one-half -->
                <div class="one-half">
                </div> <!-- end one-half -->
              </div> <!-- end nav-info #offices-->
            </div> <!-- end content -->
          </div> <!-- end container -->
        </div> <!-- end event -->
        <div class="event">
          <div class="container">
            <div class="city-title">event</div>
            <hr />
            <div class="city-weather-temperature"  id="city-weather-temperature">-1° C</div>
            <div class="city-weather-description" id="city-weather-description">
              sunny
            </div>
            <div class="content">
              <div class="nav-info clearfix" id="offices">
                <div class="one-half">
                  <div class="info" id="offices">
                    <div class="company-name">Mintel Group Ltd</div>
                    <div class="address">333 W. Wacker Drive, Suite 1100, event</div>
                    <div class="phone">+1 123 654 987 36</div>
                  </div> <!-- end info -->
                </div> <!-- end one-half -->
                <div class="one-half">
                </div> <!-- end one-half -->
              </div> <!-- end nav-info #offices-->
            </div> <!-- end content -->
          </div> <!-- end container -->
        </div> <!-- end event -->
      </div>
      <div class="btn_all_events">
        <el-button type="primary">
          <router-link :to="{path: '/events'}">VOIR TOUS LES EVENEMENTS</router-link>
        </el-button>
      </div>
    </div>
    <div class="commentaries"></div>
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
      // background-color: #490D40;
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
      .cat_header {
        font-size: 37px;
        font-weight: 600;
        padding-top: 5%;
      }
      .cat_subject {
        font-weight: 200;
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 5%;
        padding-bottom: 5%;
      }
      .cat_content {
        display: flex;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 5%;
      }
      .cat_content > el-card {
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

    .icon-size {
      font-size: 38px;
      display: block;
    }

    .maps {
      background: url('~@/icons/png/maps.png') no-repeat center center;
      background-size: cover;
      height: 450px;
      .title {
        background: transparent !important;
        align-items: center;
      }
    }

    .events_overview {
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 5%;
      padding-bottom: 5%;

      .events  {
        display: flex;
        .event {
          margin-left: 5px;
          margin-right: 5px;
        }
      }

      .events  > .event {
        flex: 1; /*grow*/
      }

      .btn_all_events {
        padding-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .commentaries {

    }

  }

  // spefics cards

  .event {
    box-sizing: border-box;
    font: 13px "Open Sans", Arial;
    padding: 40px 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  .container {
    margin: 0 auto;
    width: 360px;
    height: 480px;
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chicago.jpg');
    border-radius: 2px;
    position: relative

  }

  .city-title, .city-weather-temperature, .city-weather-description, img.city-weather-icon {
    font-family: 'Intro';
    text-align: center;
    margin:auto;
    display: block;
  }

  .city-title {
    font-size: 26px;
    padding-top: 24px;
  }

  hr {
    border-top: 1px solid #A3A3A3;
    border-bottom: 1px solid #626165;
    width: 112px;
  }

  .city-weather-temperature {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .city-weather-description {
    width: 120px;
    margin: auto;
    text-align: center;
  }

  .content {
    position: absolute;
    bottom: 0px;
    z-index: 9999;
  }

  .nav-info {
    background: rgba(255,255,240, 0.65);

    .info {
      margin-top: 20px;
      margin-bottom: 24px;

      .company-name {
        text-transform: uppercase;
        font-weight: bold;
        margin-bottom: 3px;
      }

      .address {
        line-height: 16px;
        margin-bottom: 6px;
      }

      .phone {
        color:  #C4A865;
        font-weight: bold;
      }
    }

    img {
      margin-top: 28px;
      margin-right: 8px;
    }
  }

  .one-half {
    width: 180px;
    float: left;
    padding-left: 20px;
  }

  .clearfix:before,
    .clearfix:after,
    .row:before,
    .row:after {
      content: '\0020';
      display: block;
      overflow: hidden;
      visibility: hidden;
      width: 0;
      height: 0; }
    .row:after,
    .clearfix:after {
      clear: both; }
    .row,
    .clearfix {
      zoom: 1; }


  .clear {
    clear: both;
    display: block;
    overflow: hidden;
    visibility: hidden;
    width: 0;
    height: 0;
  }

  .hide {
    display: none;
  }
</style>
