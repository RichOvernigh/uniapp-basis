<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    console.log('App Launch');
    wx.login({
      success: (res) => {
        if (res.code) {
          console.log(res, '登录');
          // console.log('res.code', res.code)
          // that.$u.apis.login(res.code)
          //   .then(res => {
          //     if (res.code !== 400) {
          //       res && commit('updateUserInfo', res)
          //       dispatch('checkLaunchOptions', that)
          //       dispatch('checkUserDetailInfo', { env: that, navi: false })
          //       resolve(res)
          //     } else {
          //       that.$store.state.common.userInfo.subscribe = 0
          //       reject('登录失败！')
          //     }
          //   })
        } else {
          // reject(`登录失败！${res.errMsg}`);
        }
      },
    });
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
});
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-ui/index.scss";
</style>
