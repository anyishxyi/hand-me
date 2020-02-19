<template>
  <div class="app-container home-page">
    <div class="banner">
      <div class="left_content">
        <h1 class="heading">Trouvez des meilleurs évènements à Paris</h1>
        <div class="search_bar">
          <el-input size="large" placeholder="Recherchez un évènement..." v-model="search">
          <i slot="suffix" class="el-input__icon el-icon-search search_btn"></i>
          </el-input>
        </div>
      </div>
    </div>
    <div class="category">
      <div class="cat_header separator">Lorem ipsum dolor sit amet</div>
      <div class="cat_subject">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris rutrum. Nulla metus lectus, bibendum eget eros sit amet, iaculis sagittis mauris. Fusce sed euismod ligula. Morbi pharetra viverra consectetur. Praesent egestas sollicitudin justo aliquet suscipit. Sed ut augue nec purus varius
      </div>
      <div class="cat_content">
        <el-card>
          <el-image :src="calendar" class="icon-class" lazy></el-image>
          <div class="details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris
          </div>
        </el-card>
        <el-card class="middle-card">
          <el-image :src="people" class="icon-class" lazy></el-image>
          <div class="details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis lorem ut sapien volutpat, et fermentum mauris
          </div>
        </el-card>
        <el-card>
          <el-image :src="localisation" class="icon-class" lazy></el-image>
          <div class="details">
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
                  </div>
                </div>
                <div class="one-half">
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  </div>
                </div>
                <div class="one-half">
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  </div>
                </div>
                <div class="one-half">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_all_events">
        <el-button type="primary">
          <router-link :to="{path: '/events'}">VOIR TOUS LES EVENEMENTS</router-link>
        </el-button>
      </div>
    </div>
    <div class="commentaries">
      <div class="com_header separator"> Ce qu'ils en pensent </div>
      <div class="com_content">
        <div>
          <div class="photo">
            <el-image :src="img1" lazy />
          </div>
          <div class="name">Pauline</div>
          <div class="role">DESIGNER</div>
          <div class="comment">"After using various platforms, I changed for Diadema because of the flexibility it offers.
I can make endless updates with whatever layout I desire!"</div>
        </div>
        <div>
          <div class="photo">
            <el-image :src="img2" lazy />
          </div>
          <div class="name">Josie</div>
          <div class="role">PHOTOGRAPHER</div>
          <div class="comment">"After using various platforms, I changed for Diadema because of the flexibility it offers.
I can make endless updates with whatever layout I desire!"</div>
        </div>
        <div>
          <div class="photo">
            <el-image :src="img3" lazy />
          </div>
          <div class="name">Paul</div>
          <div class="role">BLOGER</div>
          <div class="comment">"After using various platforms, I changed for Diadema because of the flexibility it offers.
I can make endless updates with whatever layout I desire!"</div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

const img1 = require('@/icons/png/User1.png')
const img2 = require('@/icons/png/User2.png')
const img3 = require('@/icons/png/User3.png')

const calendar = require('@/icons/png/calendar.png')
const people = require('@/icons/png/team.png')
const localisation = require('@/icons/png/pin.png')

export default {
  components: { countTo },
  data(){
    return {
      search: '',
      users: 6000,
      organisateurs: 300,
      events: 980,
      img1,
      img2,
      img3,
      calendar,
      people,
      localisation
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

      .left_content {
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

        .search_bar {
          width: 650px;
        }
        // el-input {
        //   .search_btn {
        //     background-color: #4370F3;
        //   }
        // }
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

      .details {
        padding: 14px;
        color: #444040;
        font-weight: Medium;
        line-height: 1.5;
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

    .maps {
      background: url('~@/icons/png/maps.png') no-repeat center center;
      background-size: cover;
      height: 600px;
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
      background-color: white;

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
      background-color: #F4F6FC;
      text-align: center;

      .com_header {
        font-size: 30px;
        font-weight: 600;
        padding-top: 5%;
        padding-bottom: 5%;
      }

      .com_content {
        display: flex;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 5%;

        div {
          .photo {

          }

          .name {
            color: #4370F3;
            font-size: 24px;
            font-weight: Medium;
          }

          .role {
            color: #7E829B;
            font-size: 14px;
            font-weight: Medium;
          }

          .comment {
            padding-top: 25px;
            color: #444040;
            // font-size: 40px;
            font-weight: Medium;
            line-height: 1.8;
          }
        }
      }

      .com_content > div {
        flex: 1; /*grow*/
        padding: 10px;
      }
    }

  }

  .separator {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .separator::before, .separator::after {
    content: '';
    flex: 1;
    border-bottom: 2px solid #4370F3;
    max-width: 10%;
  }
  .separator::before {
    margin-right: 20px;
  }
  .separator::after {
    margin-left: 20px;
  }

  /*
   * HR
   */

// hr {
//   height: 1px;
//   background: white;
//   border: none;
//   outline: none;
//   // margin: 3em 3em 5em;
//   position: relative;
//   width: 50%;
//   // margin: 3em auto;

//   &:before {

//     content: attr(data-symbol);
//     position: absolute;
//     top: 0;
//     left: 50%;
//     background: black;
//     color: white;
//     padding: 0.5em 3em;
//     // @include transform(translate(-50%, -50%));
//   }
// }

  /*
  * spefics cards
  */

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

  .icon-class {
    width: 30px;
    height: 30px;
  }
</style>
