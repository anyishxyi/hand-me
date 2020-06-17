<template>
    <GeneralModal
      :visibility="visibility"
      :width="width"
      @eventToggleDisplayModal="beforeClose"
    >
      <div class="container">
        <form @submit.prevent="login">
          <div class="row">
            <div class="col-25">
              <label for="email">Email</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="email"
                placeholder="Donner votre email"
                v-model="inputEmail"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="password">Mot de passe</label>
            </div>
            <div class="col-75">
              <input
                type="password"
                id="lname"
                name="password"
                placeholder="Renseigner un mot de passe"
                v-model="inputPassword"
                required
              />
            </div>
          </div>
          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </GeneralModal>
</template>

<script>
import GeneralModal from '@/components/GeneralModal'
import apiService from '@/services/apiService'

export default {
  name: "LoginPage",
  components: { GeneralModal },
  props: {
    visibility: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userData: {
        email: '',
        password: ''
      },
      width: '33%',
    };
  },
  methods: {
    async login() {
      if(!this.userData.email || !this.userData.password) return
      const user = await apiService.login(this.userData).catch(error => console.error(error))
      console.log('user')
      console.log(user)
    },
    beforeClose(newVal) {
      this.$emit('eventToggleLogin', newVal)
    }
  }
}
</script>

<style>
</style>
