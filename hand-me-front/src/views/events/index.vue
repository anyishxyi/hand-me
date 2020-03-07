<template>
  <div>
    <Places
      id="from_address"
      classname="form-control"
      placeholder="Start typing"
      :placechanged="getAddress"
      :error="handleError"
    >
    </Places>
  </div>
  <!-- <div class="events-container">
    <div class="navbar navbar-default shadow">
      <div class="right-menu">
        <el-button type="text">
          <router-link :to="{path: '/home'}">
            Accueil
          </router-link>
        </el-button>
        <el-button type="text">
          <router-link :to="{path: '/events'}">
            Evenements
          </router-link>
        </el-button>
        <el-button type="text">
          <router-link :to="{path: '/register'}">
            Inscription
          </router-link>
        </el-button>
        <el-button type="primary">
          <router-link :to="{path: '/login'}">
            Connexion
          </router-link>
        </el-button>
      </div>
    </div>
    <div class="container">
      <div class="left">
        <div class="events_filter">
          <div class="local_cat">
            <el-input
              class="localisation"
              placeholder="Type something"
              prefix-icon="el-icon-search"
              v-model="localisation">
            </el-input>
            <el-input
              class="category"
              placeholder="Type something"
              prefix-icon="el-icon-search"
              v-model="category">
            </el-input>
          </div>
          <div class="block clear">
            <el-date-picker
              class="dates"
              v-model="dates"
              type="daterange"
              range-separator="A"
              start-placeholder="Date départ"
              end-placeholder="Date fin">
            </el-date-picker>
          </div>
        </div>
        <div class="events_list">
          <ol class="SD4Ugf">
            <li class="lPyEac">
              <div class="MebuN">
                <div class="L32YH"></div>
                <div class="tsAU4e">
                  <div class="wIuJz">
                    <h3 class="W6bZuc YMlIz">Londres</h3>
                    <div class="ZjDced CQYfx">
                      <span class="nx0jzf">Sans escale</span>
                      <span class="qeoz6e U325Rc">::before</span>
                      <span class="Xq1DAb">1h10</span>
                    </div>
                  </div>
                  <div class="Q70fcd sSHqwe">
                    66 e
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="right">
        <Maps />
      </div>
    </div>
  </div> -->
</template>

<script>
// import Maps from '@/components/maps/Maps'
import Places from '@/components/places/Places'
// import VueGoogleAutocomplete from 'vue-google-autocomplete'

export default {
  // components: { Maps },
  components: { Places },
  // components: { VueGoogleAutocomplete, GooglePlaceAutocomplete },
  data(){
    return {
      dates: '',
      localisation: '',
      category: '',
      from_address:{},
      to_address:{}
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      console.log('events page')
    },
    getAddress(from_address) {
      this.address = from_address;
    },
    handleError(error){
      alert(error)
    }
  }
}
</script>

<style lang="scss" scoped>

.events-container {
  width:100%;
  display: flex;
  flex-flow: column;
  height: 100%;
  color: #333333;
}

.container {
  width:100%;
  margin-top:60px;
  // display:table;

  .left {
    text-align:justify;
    float:left;
    width:40%;

    .events_filter {

      .local_cat {
        .localisation {
          float:left;
          width:50%;
        }
        .category {
          float: right;
          width:50%;
        }
      }

      .dates {
        width: 100%;
      }
    }

    .events_list {

    }
  }
  .right {
    text-align:justify;
    float:right;
    height: 700px;
    width: 60%;
  }
}

.clear {
  clear:both;
}

////////

.SD4Ugf {
  list-style: none;
  padding: 0;
  margin: 0;
}

.MebuN {
  display: flex;
  height: 118px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.30), 0 1px 3px 1px rgba(60,64,67,.15);
  margin: 2px 2px 8px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.L32YH {
  background: no-repeat center/cover;
  width: 118px;
  flex-shrink: 0;
}

.tsAU4e {
  display: flex;
  flex: 4 1 auto;
  flex-direction: column;
  justify-content: space-between;
  line-height: 20px;
  min-width: 0;
  padding: 16px 16px 11px;
}

.Q70fcd {
  align-items: flex-end;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

.sSHqwe {
  font: 400 12px/16px Roboto,Arial,sans-serif;
  letter-spacing: .3px;
  color: #5f6368;
}

.W6bZuc {
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.YMlIz {
  font: 500 16px/24px 'Google Sans',Roboto,Arial,sans-serif;
  letter-spacing: .1px;
  color: #3c4043;
}

.ZjDced {
  align-items: center;
  display: flex;
}

.CQYfx {
  font: 400 14px/20px Roboto,Arial,sans-serif;
  letter-spacing: .2px;
  color: #5f6368;
}

.nx0jzf {
  flex: 0 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.U325Rc {
  margin: 0 4px;
}

.Xq1DAb {
  white-space: nowrap;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.qeoz6e::before {
  content: "\0000b7";
}
</style>
