<template>
  <div>
    <header class="header">
      <nav class="header-nav">
        <div class="header-nav-logo">
          <span class="header-nav-logo__text">HAND</span>
          <div class="header-nav-logo__point"></div>
          <span class="header-nav-logo__text">ME</span>
        </div>
        <ul class="header-nav-menu">
          <li class="header-nav-menu__item">
            <a class="header-nav-menu__link" href>Accueil</a>
          </li>
          <li class="header-nav-menu__item">
            <a class="header-nav-menu__link" href>Évènements</a>
          </li>
          <li class="header-nav-menu__item">
            <a class="header-nav-menu__link" href>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
    <section class="board">
      <!--left-->
      <div class="board-left">
        <div class="board-left-profile">
          <span class="board-left-profile__name"></span>
          <span class="board-left-profile__location"></span>
        </div>
        <div class="board-left-menu">
          <div class="board-left-menu-container">
            <a class="board-left-menu-container-item" href>
              <div style="background-image:url('~@/assets/Icon.png')">
                <!-- <img src="../../assets/Icon.png" alt /> -->
                <!-- background-repeat: no-repeat;
                background-position: center center;-->
              </div>
            </a>
            <!-- <div class="board-left-menu-container-item">
              <a href>
                <img src="../../assets/Icon.png" alt />
              </a>
            </div>-->
            <div class="board-left-menu-container-item"></div>
            <div class="board-left-menu-container-item"></div>
            <div class="board-left-menu-container-item"></div>
            <div class="board-left-menu-container-item"></div>
            <div class="board-left-menu-container-item"></div>
          </div>
        </div>
      </div>

      <!--middle-->
      <div class="board-middle">
        <div class="board-middle-banner">
          <span class="board-middle-banner-text">Hello {{userName}}</span>
          <h1 class="board-middle-banner-title">bienvenue sur ton dashboard</h1>
        </div>
        <div class="board-middle-content">
          <div class="board-middle-content-cards">
            <div class="board-middle-content-cards-card">
              <h2 class="text-uppercase">évènements créer:</h2>
              <span class="board-middle-content-cards-card-txt">{{events.length}}</span>
            </div>
            <div class="board-middle-content-cards-card">
              <h2 class="text-uppercase">évènements</h2>
              <span class="board-middle-content-cards-card-txt">All the Lorem Ipsum generators</span>
            </div>
            <div class="board-middle-content-cards-card">
              <h2 class="text-uppercase">évènements</h2>
              <span class="board-middle-content-cards-card-txt">All the Lorem Ipsum generators</span>
            </div>
          </div>
          <div class="board-middle-content-table">
            <Table :heads="['id', 'title', 'date', 'description']" :body="events" />
          </div>
        </div>
        <div></div>
      </div>

      <!--right-->
      <div class="board-right">
        <div v-for="(item, index) in events" :key="index" class="board-right-container">
          <el-col class="board-right-container-card">
            <el-card shadow="hover" class="board-right-container-card-element">
              <router-link
                :to="{name:'communityBlog'}"
                class="board-right-container-card-element-link"
              >{{item.community.communityAdmin}}</router-link>
            </el-card>
          </el-col>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Table from "../../components/table/table";

export default {
  name: "userBoard",
  data: function() {
    return {
      events: [],
      userName: ""
    };
  },
  mounted: function() {
    //console.log(this.$route.params);
    this.loadUserData();
    //return (this.todos = this.$route.params.data.events);
  },
  methods: {
    loadUserData() {
      console.log("usr data:", this.$route.params);
      this.userName = this.$route.params.dto.particularFirstName;
      this.events = this.$route.params.events;
    }
  },
  components: {
    Table
  }
};
</script>

<style lang="scss" scoped>
$darkGrey: #212020;
$white: #ffffff;
$blue: #4270f3;
$brightGrey: #d8d8d8;

@mixin text-uppercase() {
  text-transform: uppercase;
}

@mixin bg-color-hover($color) {
  padding: 10px;
  border-radius: 5px;
  background-color: $color;
}

.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: $darkGrey;
  &-nav {
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-logo {
      display: flex;
      align-items: center;
      &__text {
        color: $white;
        font-weight: bold;
        font-size: 18px;
        @include text-uppercase();
      }
      &__point {
        width: 8px;
        height: 8px;
        margin: 0 10px 0 10px;
        border-radius: 50%;
        background-color: $white;
      }
    }
    &-menu {
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      &__item {
        font-weight: 500;
        color: $white;
        &:hover {
          @include text-uppercase();
          @include bg-color-hover($blue);
        }
      }
    }
  }
}

.board {
  width: 100%;
  height: 900px;
  display: flex;
  &-left {
    width: 25%;
    height: 100%;
    &-profile {
      width: 100%;
      height: 300px;
      background: url("~@/assets/galina.png") no-repeat center center;
      background-size: cover;
    }
    &-menu {
      width: 100%;
      height: 800px;
      display: flex;
      justify-content: center;
      background-color: $blue;
      &-container {
        width: 80%;
        height: 400px;
        margin: 30px 0 0 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        &-item {
          background-color: $blue;
          border: 1px solid $brightGrey;
          text-align: center;
        }
        &-item:hover {
          background-color: $white;
          border: 1px solid $brightGrey;
          text-align: center;
        }
      }
    }
  }
  &-middle {
    width: 70%;
    height: 700px;
    &-banner {
      width: 100%;
      height: 300px;
      position: relative;
      background: url("~@/icons/jpg/header_home.jpg") no-repeat center center;
      background-size: cover;
      &-text {
        position: absolute;
        bottom: 40px;
        left: 20px;
        color: $white;
        margin: 50px 0 50px 0;
      }
      &-title {
        position: absolute;
        bottom: 20px;
        left: 20px;
        color: $white;
      }
    }
    &-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &-cards {
        width: 90%;
        height: 300px;
        display: flex;
        justify-content: space-around;
        margin: 30px 0 0 0;
        &-card {
          width: 33%;
          margin: 0 25px 0 0;
          box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
          text-align: center;
          h2 {
            @include text-uppercase();
          }
        }
      }

      &-table {
        width: 100%;
        padding: 25px;
      }

      /*table {
        border-collapse: separate;
        background: #fff;
        width: 100%;
        border-radius: 5px;
        margin: 50px auto;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
      }

      thead {
        border-radius: 5px;
      }

      thead th {
        font-family: "Patua One", cursive;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
        text-align: left;
        padding: 20px;
        background-image: linear-gradient(#646f7f, #4a5564);
        border-top: 1px solid #858d99;

        &:first-child {
          border-top-left-radius: 5px;
        }

        &:last-child {
          border-top-right-radius: 5px;
        }
      }

      tbody tr td {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        color: #5f6062;
        font-size: 13px;
        padding: 20px 20px 20px 20px;
        border-bottom: 1px solid #e0e0e0;
      }*/
    }
  }
  &-right {
    width: 25%;
    height: 100%;
    background-color: $blue;

    &-container {
      padding: 10px 10px 0 10px;

      &-card {
        padding-bottom: 10px;

        &-element {
          &-link {
            color: black;
          }
        }
      }
    }
  }
}
</style>
