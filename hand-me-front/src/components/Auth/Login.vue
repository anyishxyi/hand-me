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
  name: "Login",
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
      const res = await apiService.login(this.userData)
                                    .catch(error => {
                                      this.$notify.error({title: 'Error', message: 'Ceci est une erreur'});
                                      console.error(error)
                                    })
      console.log('res')
      console.log(res)
      if(!res || !res.data || res.status !== 200) {
        this.$notify.error({title: 'Error', message: 'Ceci est une autre erreur'});
        return
      }
    },
    beforeClose(newVal) {
      this.$emit('toggleLoginVisibility', newVal)
    }
  }
}
</script>

<style>
</style>
