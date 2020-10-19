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
    <section class="blog">
      <div class="blog-left"></div>
      <div class="blog-content">
        <div class="blog-content-scrollbar" id="style-1">
          <div
            v-for="(item, index) in messages"
            :key="index"
            class="blog-content-scrollbar-wrapper"
          >
            <el-card class="blog-content-scrollbar-card">
              <div class="blog-content-scrollbar-card-text">{{ item.content }}</div>
            </el-card>
          </div>
        </div>
        <div class="blog-content-input">
          <div>
            <el-input placeholder="Please input" v-model="inputMessage" clearable></el-input>
          </div>
          <div>
            <el-button type="primary" v-on:click="sendMessage">envoyez</el-button>
          </div>
        </div>
      </div>
      <div class="blog-right"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "communityBlog",
  data: function() {
    return {
      inputMessage: "",
      messages: [
        {
          author: "thomas",
          content: "Salut je cherche le chemin du monastère"
        },
        { author: "michael", content: "Tu le verra sur le sentier de la vie" },
        { author: "allain", content: "C'est exactement ça" }
      ]
    };
  },
  methods: {
    sendMessage() {
      this.messages.push({ author: "john", content: this.inputMessage });
      console.log("contenue: ", this.inputMessage);
    }
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

.blog {
  width: 100%;
  height: 900px;
  display: flex;

  &-left {
    width: 25%;
    height: 100%;
  }

  &-content {
    width: 70%;
    height: 100%;
    &-input {
      width: 75%;
      display: flex;
      justify-content: space-around;
    }

    &-scrollbar {
      margin-left: 30px;
      float: left;
      height: 300px;
      width: 100%;
      background: #f5f5f5;
      overflow-y: scroll;
      margin-bottom: 25px;
      margin: 0 auto;

      &-wrapper {
        padding: 20px 10px 20px 10px;
        &-card {
          width: 100%;
          &-text {
            font-size: 14px;
          }
        }
      }
    }
  }

  &-right {
    width: 25%;
    height: 100%;
  }
}
</style>