<template>
  <div class="content">
    <image
      class="logo"
      src="../../static/logo.png"
    />
    <u-search
      placeholder="日照香炉生紫烟"
    />

    <div>
      <div
        class="title"
        @click="handleClick"
      >
        {{ title }}
      </div>
      <span>321</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import {
  Getter, Mutation, State, Action,
} from 'vuex-class';
import { login } from '@/api/login';

@Component
export default class App extends Vue {
  private title:String='321'

  private keyword:string='test'

  @Watch('title')
  handleChange(val:string, oldVal:string) {
    console.log(val, oldVal, '====change');
  }

  @Mutation('setAtestValue')setAtestValue:any

  @Action('testActions') testAction:any

  @State('atest') private atest!:string

  @State('moduleA', { namespace: 'moduleA' }) // 命名空间的方式取modelA里的state
  private moduleA!: string;

  private async handleClick() {
    this.title += '1';
    this.setAtestValue(this.title);
    const params = {
      username: 'admin',
      password: 'admin123',
    };
    const res = await login(params);
    console.log(res, '====resindex');
    this.testAction('321');
    // console.log(this.$u);
    // console.log(this.moduleA, '====');
  }

  private onLoad() {
    // console.log(this.$u, '===this');
    // this.$u.post('http://www.example.com', {
    //   id: 3,
    //   menu: 1,
    // }).then((res:any) => {
    //   console.log(res);
    // });
    uni.setStorageSync('atest', 'value');
  }
  // data() {
  //   return {
  //     title: 'Hello1'
  //   };
  // },
  // onLoad() {
  //   let a:String;
  //   a='123'
  //   console.log(a='123')
  //   console.log('ewqeqw', 'dsadsa');
  // },
  // methods: {

  // }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
