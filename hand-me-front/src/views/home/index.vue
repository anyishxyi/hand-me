<template>
  <div class="home-page">
    <div class="banner">
      <div class="left_content">
        <h1 class="heading">Trouvez des évènements qui vous correspondent près de chez vous</h1>
        <div class="search_bar">
          <Places
            class="localisation"
            id="from_address"
            classname="form-control"
            type="address"
            placeholder="Entrez le nom de votre ville..."
            :placechanged="getAddress"
            :error="handleError"
          />
        </div>
      </div>
    </div>
    <div class="category">
      <div class="cat_header separator">Bienvenue</div>
      <div class="cat_subject">
        Vous êtes une association qui souhaite mettre en place des évènements ? Grâce à HandMe, La publication de votre évènement sur la plateforme se retrouve simplifier par notre système de gestion d'évènement. Vous êtes un bénévole qui souhaite donner de son temps ? Trouvez les évènements proches de chez vous en quelques clics et rejoingez une communauté afin de partager avec les autres participants d'un évènement.
      </div>
      <div class="cat_content">
        <el-card>
          <el-image :src="calendar" class="icon-class" lazy></el-image>
          <div class="details">
            Trouve les évènements qui te correspondent le mieux et ajoutes les à ta liste personnelle.
          </div>
        </el-card>
        <el-card class="middle-card">
          <el-image :src="people" class="icon-class" lazy></el-image>
          <div class="details">
            Créer ou rejoins une communauté sur HandMe pour montrer ton soutient aux associations.
          </div>
        </el-card>
        <el-card>
          <el-image :src="localisation" class="icon-class" lazy></el-image>
          <div class="details">
            Trouve les évènements à proximité de chez toi en visualisant directement ses dernières sur notre carte intéractive.
          </div>
        </el-card>
      </div>
    </div>
    <div class="counter">
      <div >
        <count-to :start-val="0" :end-val="homeData.particularNumber" class="count" separator=" " />
        <p>Membres présents sur notre plateforme</p>
      </div>
      <div class="middle-card">
        <count-to :start-val="0" :end-val="homeData.organizationNumber" class="count" separator=" " />
        <p>Organisateurs propose des évènements sur la plateforme</p>
      </div>
      <div >
        <count-to :start-val="0" :end-val="homeData.eventNumber" class="count" separator=" " />
        <p>Evènements présents sur la plateforme</p>
      </div>
    </div>
    <div class="maps w3-display-container">
      <div class="title w3-display-topleft w3-black w3-padding">Vos évènements à proximité</div>
      <Maps :isHome="true" style="width:100%" />
    </div>
    <div v-if="events.length" class="events_overview">
      <div class="events_list">
        <ListEvents :events="events" :isHome="true" />
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
    <div class="ourTeam">
      <div class="header separator"> L'Equipe </div>
      <div class="content">
        <div>
          <div class="photo">
            <el-image :src="bd_pic" lazy />
          </div>
          <div class="name">BENONI Dexter</div>
          <div class="role">DEVELOPPEUR FRONT</div>
          <div class="rx"><el-link href="https://www.linkedin.com/in/dexter-benoni/" target="_blank" :underline="false"><el-image :src="linkedin" class="linkedin" lazy /></el-link></div>
        </div>
        <div>
          <div class="photo">
            <el-image :src="ka_pic" class="ka_pic" lazy />
          </div>
          <div class="name">KOUMARE Aboubacar</div>
          <div class="role">DEVELOPPER BACK</div>
          <div class="rx"><el-link href="https://www.linkedin.com/in/aboubacar-koumar%C3%A9/" target="_blank" :underline="false"><el-image :src="linkedin" class="linkedin" lazy /></el-link></div>
        </div>
        <div>
          <div class="photo">
            <el-image :src="nm_pic" lazy />
          </div>
          <div class="name">NGALULA Jean-Paul</div>
          <div class="role">DEVELOPPEUR WEB</div>
          <div class="rx"><el-link href="https://www.linkedin.com/in/jeanpaulngalula/" target="_blank" :underline="false"><el-image :src="linkedin" class="linkedin" lazy /></el-link></div>
        </div>
        <div>
          <div class="photo">
            <el-image :src="vk_pic" lazy />
          </div>
          <div class="name">VERBARD Kevin</div>
          <div class="role">ADMINISTRATEUR SYSTEME ET CLOUD</div>
          <div class="rx"><el-link href="https://www.linkedin.com/in/kevinverbard/" target="_blank" :underline="false"><el-image :src="linkedin" class="linkedin" lazy /></el-link></div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="w3-container w3-content w3-padding-64" style="max-width:800px" id="contact">
        <div class="header separator">CONTACT</div>
        <div class="w3-row w3-padding-32">
          <div class="w3-col m6 w3-large w3-margin-bottom">
            <i class="fa fa-map-marker" style="width:30px"></i> Paris, FRANCE<br>
            <i class="fa fa-phone" style="width:30px"></i> Phone: +33 1 44 08 00 23<br>
            <i class="fa fa-envelope" style="width:30px"> </i> Email: contact@hand-me.fr<br>
          </div>
          <div class="w3-col m6">
            <form action="/action_page.php" target="_blank">
              <div class="w3-row-padding" style="margin:0 -16px 8px -16px">
                <div class="w3-half">
                  <input class="w3-input w3-border" type="text" placeholder="Nom" required name="Nom">
                </div>
                <div class="w3-half">
                  <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email">
                </div>
              </div>
              <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message">
              <button class="w3-button w3-black w3-section w3-right" type="submit"><i class="fa fa-paper-plane"></i> ENVOYER</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import Places from '@/components/places/Places'
import Maps from '@/components/maps/Maps'
import ListEvents from '@/components/Event/ListEvents'
import apiService from '@/services/apiService'

const twitter = require('@/icons/png/twitter.png')
const facebook = require('@/icons/png/facebook.png')
const france = require('@/icons/png/france.png')
const linkedin = require('@/icons/png/linkedin.png')


const img1 = require('@/icons/png/User1.png')
const img2 = require('@/icons/png/User2.png')
const img3 = require('@/icons/png/User3.png')

const bd_pic = require('@/assets/dx.jpeg')
const ka_pic = require('@/assets/ab.jpg')
const nm_pic = require('@/assets/jp.jpeg')
const vk_pic = require('@/assets/kv.jpeg')

const calendar = require('@/icons/png/calendar.png')
const people = require('@/icons/png/team.png')
const localisation = require('@/icons/png/pin.png')

const event1 = require('@/icons/png/event1.png')
const event2 = require('@/icons/png/event2.png')
const event3 = require('@/icons/png/event3.png')

export default {
  name: 'HOMEPAGE',
  components: { countTo, Places, Maps, ListEvents },
  data(){
    return {
      search: '',
      twitter,
      facebook,
      france,
      linkedin,
      img1,
      img2,
      img3,
      bd_pic,
      ka_pic,
      nm_pic,
      vk_pic,
      event1,
      event2,
      event3,
      calendar,
      people,
      localisation,
      events: [],
      navColorOnScroll: 'transparent !important',
      from_address:{},
      location: null,
      coordinates: {},
      homeData: {
        eventNumber: 0,
        organizationNumber: 0,
        particularNumber: 0
      },
      filters: {
        placeCriteria: '',
        titleCriteria: '',
        categoryCriteria: '',
        descriptionCriteria: '',
        eventMakerCriteria: '',
        dateCriteria: '',
        pageRequested: 0
      }
    }
  },
  async created() {
    await this.init()
    await this.getCoordinates()
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    async init() {
      const repEvents = await apiService.getEvents(this.filters)
                                  .catch(error => {
                                    this.$notify.error({title: 'Error', message: 'Erreur lors de la connexion au serveur'});
                                    console.error(error)
                                    return
                                  })
      if(!repEvents || !repEvents.data || repEvents.status !== 200) {
        this.events = []
        return
      }

      this.events = repEvents.data.events
      const repHome = await apiService.getHomeData()
                                  .catch(error => {
                                    this.$notify.error({title: 'Error', message: 'Erreur lors de la connexion au serveur'});
                                    console.error(error)
                                    return
                                  })
      if(!repHome || !repHome.data || repHome.status !== 200) {
        this.events = []
        return
      }

      this.homeData = repHome.data
    },
    updateScroll() {
      this.navColorOnScroll = ( !window || !window.scrollY > 0 ) ? 'transparent !important' : (window.scrollY > 100) ? '#222020' : 'transparent !important'
    },
    getAddress(from_address) {
      this.address = from_address;
    },
    handleError(error){
      alert(error)
    },
    async getCoordinates() {
      const options = {
        enableHighAccuracy: false,
        timeout: Infinity,
        maximumAge: 0
      }
      await this.$getLocation(options)
                .then( coordinates => this.coordinates = coordinates )
                .catch( err => console.error(err))

      this.coordToCity()
    },
    coordToCity() {
      console.log('this.coordinates')
      console.log(this.coordinates)
      const lat = this.coordinates.lat
      const lng = this.coordinates.lng
      console.log('lat')
      console.log(lat)
      console.log('lng')
      console.log(lng)
      return new Promise(function (resolve, reject) {
        const request = new XMLHttpRequest();
        const method = 'GET';
        const url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyAe1WPBLhSasHA1CvdEpkbOqqGOTB4d3pM';
        const async = true;

        request.open(method, url, async)
        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            if (request.status == 200) {
              const data = JSON.parse(request.responseText);
              const address = data.results[0];
              console.log('address')
              console.log(address)
              resolve(address);
            }
            else {
              reject(request.status);
            }
          }
        };
        request.send();
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  .navbar {
    height: 60px;
    border: none;
    z-index: 100;
    transition: background-color 1s ease 0s;
    top: 0;
    position: fixed;
    width: 100%;

    .right-menu {
      float: right;
      height: 100%;
      line-height: 60px;
      margin-right: 40px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 1.1em;
        vertical-align: text-bottom;

        &.lang {
          font-size: 1.7em;
        }

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }

      .btn_connexion {
        color: blue($color: #000000);
      }
    }
  }

  .banner {
    background: url('~@/icons/jpg/header_home.jpg') no-repeat center center;
    background-size: cover;
    height: 780px;

    .left_content {
      width: 50%;
      padding-left: 50px;

      .heading {
        color: white;
        padding-top: 200px;
        font-size: 55px;
      }

      p {
        text-align: center;
      }

      .search_bar {
        width: 650px;
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
    background-size: cover;
    height: 500px;
    .title {
      color: white;
      padding-top: 30px;
      align-items: center;
    }
  }

  .events_overview {
    padding-top: 50px;
    padding-bottom: 50px;
    .events_list {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn_all_events {
      padding-top: 30px;
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

  .ourTeam {
    background-color: white;
    text-align: center;
    align-items: center;

    .header {
      font-size: 30px;
      font-weight: 600;
      padding-top: 5%;
      padding-bottom: 5%;
    }

    .content {
      display: flex;
      padding-left: 20%;
      padding-right: 10%;
      padding-bottom: 5%;

      div {
        padding-left: 5px;
        .photo {
          .ka_pic {
            width: 185px;
          }
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

        .rx {
          padding-top: 5px;
          .linkedin {
            width: 25px;
          }
        }
      }
    }

    .com_content > div {
      flex: 1; /*grow*/
      padding: 10px;
    }
  }

  .contact {
    background-color: #F4F6FC;
    .header {
      font-size: 30px;
      font-weight: 600;
      padding-bottom: 5%;
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
* spefics cards
*/


.hide {
  display: none;
}

.icon-class {
  width: 30px;
  height: 30px;
}
</style>
