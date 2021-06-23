<template>
  <div class="main">
    <div v-if="over_time" class="overTime">
      <span>此二维码已失效</span>
    </div>
    <div v-else>
      <Skin v-if="Number(type) === 1 || Number(type) === 2" :data="data" />
    </div>
    <!-- <div :style="{'width':screen_width/2+'px','height':'100px','background':'black'}" /> -->
  </div>
</template>
<script>
import {
  visitprogram, // 获取客户方案数据
  visittest // 获取肌肤测试数据
} from '@/api/SkincareSolution.js'
import Skin from './components/Skin.vue'
export default {
  components: {
    Skin
  },
  data() {
    return {
      data: {},
      loading: undefined,
      over_time: false,
      type: this.$route.query.type
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.openLoading()
      if (Number(this.type) === 1 || Number(this.type) === 2) {
        this.getSkinData()
      } else if (Number(this.type) === 3) {
        this.getTestData()
      }
    },
    // loading
    openLoading() {
      this.loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    CheckTime(time) {
      const currentTime = new Date()
      let getTime = time.replace(/-/g, '/')
      getTime = new Date(Date.parse(getTime))
      console.log(currentTime)
      console.log(getTime)
      if (currentTime > getTime) {
        this.over_time = true
      }
      return this.over_time
    },
    // 获取护肤方案
    getSkinData() {
      visitprogram({ record_id: this.$route.query.id }).then(res => {
        console.log('visitprogram')
        console.log(res)
        if (res.code === 0) {
          if (res.data.record && !this.CheckTime(res.data.record.available_time)) {
            this.data = res.data.record
            // this.ViewPlan(res.data.record)
          } else {
            this.over_time = true
          }
          this.loading.close()
        } else {
          this.$message.error(res.msgs)
        }
      })
    },
    // 获取肌肤测试
    getTestData() {
      visittest({ test_id: this.$route.query.id }).then(res => {
        console.log('visittest')
        console.log(res)
        if (res.code === 0) {
          if (res.data.record && !this.CheckTime(res.data.record.available_time)) {
            this.data = res.data.record
            // this.ViewPlan(res.data.record)
          } else {
            this.over_time = true
          }
          this.loading.close()
        } else {
          this.$message.error(res.msgs)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  height: 100%;
  width: 100%;
}
.overTime{
  height: 100%;
  margin: 0px;
  text-align: center;
  position: relative;
  top: 45%;
}
</style>
