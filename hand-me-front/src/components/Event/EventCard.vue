<template>
  <article class="card card--1" v-bind:class="{ card_home: isHome, card_no_home: !isHome }">
    <div class="card__info-hover">
      <div class="card__clock-info">
        <svg class="card__clock" viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" /></svg>
        <span class="card__time">15 min</span>
      </div>
    </div>
    <div class="card__img"></div>
    <div class="card__img--hover"></div>
    <div class="card__info">
      <span class="card__category"> Recipe</span>
      <h3 class="card__title">Crisp Spanish tortilla Matzo brei</h3>
      <span class="card__by">by <a href="#" class="card__author" title="author">Celeste Mills</a></span>
    </div>
  </article>
</template>

<script>

export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    },
    isHome: {
      type: Boolean,
      default: false
    },
  },
  data(){
    return {
      dialogEventVisible: false
    }
  },
  methods: {
    async handleShowEvent() {
      if (this.event) {
        this.dialogEventVisible = true
      }
    },
    toggleDisplayEventVisibility(value) {
      this.dialogEventVisible = value
    },
  }
}
</script>

<style>
.card--1 .card__img, .card--1 .card__img--hover {
  background-image: url('https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
}
.card__clock {
  width: 15px;
  vertical-align: middle;
  fill: #AD7D52;
}
.card__time {
  font-size: 12px;
  color: #AD7D52;
  vertical-align: middle;
  margin-left: 5px;
}
.card__clock-info {
  float: right;
}

.card__img {
  visibility: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.card__info-hover {
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
}

.card__img--hover {
  transition: 0.2s all ease-out;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  height: 235px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  top: 0;
}
.card {
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 10px;
  cursor: pointer;
}

.card_no_home {
  width: 45%;
}

.card_home {
  width: 31%;
}

.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
  transform: scale(1.10, 1.10);
}

.card__info {
  z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 16px 24px 24px 24px;
}

.card__category {
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #868686;
}

.card__title {
  margin-top: 5px;
  margin-bottom: 10px;
  font-family: 'Roboto Slab', serif;
}

.card__by {
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
}

.card__author {
  font-weight: 600;
  text-decoration: none;
  color: #AD7D52;
}

.card:hover .card__img--hover {
  height: 100%;
  opacity: 0.3;
}

.card:hover .card__info {
  background-color: transparent;
  position: relative;
}

.card:hover .card__info-hover {
  opacity: 1;
}


</style>
