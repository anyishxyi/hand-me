<template>
    <GeneralModal
      :visibility="visibility"
      :width="width"
      @eventToggleDisplayModal="beforeClose"
    >
      <el-form class="demo-form-inline">
        <el-form-item>
          <el-input v-model="userData.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="userData.password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
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
    async onSubmit() {
      if(!this.userData.email || !this.userData.password) return
      const user = await apiService.login(this.userData)
                                    .catch(error => {
                                      this.$notify.error({title: 'Error', message: 'Ceci est une erreur'});
                                      console.error(error)
                                    })
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
