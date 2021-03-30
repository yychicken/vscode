<template>
  <div>
    <p>原始数组{{ message01 }}</p>
    <p>computed数组{{ message02 }}</p>
    <div>
      <el-button type="primary" @click="button01(1)">1</el-button>
      <el-button type="primary" @click="button01(2)">2</el-button>
      <el-button type="primary" @click="button01(3)">3</el-button>
      <el-button type="primary" @click="button01(4)">4</el-button>
      <el-button type="primary" @click="button01(5)">5</el-button>
    </div>
    <p>按钮变化！{{ buttonData }}</p>
    <el-input v-model="message03.name"></el-input>
    <el-button @click="changeMessage">改变输入框的对象</el-button>
    <el-button @click="test01">test01</el-button>
    <div>
        <test2></test2>
        <!-- <test-2></test-2> -->
    </div>
  </div>
</template>
<script>
import test2 from './test2.vue';
export default {
  name: "test1",
  components:{
      test2
  },
  data() {
    return {
      message01: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      buttonData: 0,
      message03: {
        name: "高",
      },
    };
  },
  computed: {
    message02() {
      switch (this.buttonData) {
        case 1:
          console.log("computed按钮为" + this.buttonData);
          //可以看到如果值没有变化就没有重新输出，如果是函数会一直输出
          return this.message01.slice(0, 2);
        case 2:
          return this.message01.slice(2, 4);
        case 3:
          return this.message01.slice(4, 6);
        case 4:
          return this.message01.slice(6, 8);
        case 5:
          return this.message01.slice(8);
      }
    },
  },
  methods: {
    button01(a) {
      this.buttonData = a;
      console.log("函数按钮为" + this.buttonData);
    },
    changeMessage() {
      this.message03 = {
        name: "张",
      };
    },
    test01(){
        // var a=1;
        let a=2;
        console.log(a)
    }
  },
  //   watch: {
  //     buttonData: function (newData,oldData) {
  //       console.log("按钮变化了！"+"新数据为："+newData+"旧数据为："+oldData);
  //     },
  //   },
  watch: {
    buttonData: {
      handler(newData, oldData) {
        console.log(
          "按钮变化了！" + "新数据为：" + newData + "旧数据为：" + oldData
        );
      },
      immediate: true,
    },
    message03: {
      handler(newData, oldData) {
        // console.log("新数据为：" + newData.name + "旧数据为：" + oldData.name);
        console.log(this.message03.name);
      },
      immediate: true,
      deep: true,
    },
    // //进行优化
    // "message03.name": {
    //   handler(newData, oldData) {
    //     // console.log("新数据为：" + newData.name + "旧数据为：" + oldData.name);
    //     console.log(this.message03.name);
    //   },
    //   immediate: true,
    // },
  },
};
</script>
<style scoped>
</style>>

</style>