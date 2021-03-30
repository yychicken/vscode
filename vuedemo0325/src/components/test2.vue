<template>
  <div>
    <p>test2</p>
    <el-button @click="filter01">filter01</el-button>
    <el-button @click="filter02">filter02</el-button>
    <el-button @click="filter03">filter03</el-button>
    <el-button @click="filter04">filter04</el-button>
    <el-button @click="filter05">filter05</el-button>
    {{ array03 }}
    <el-button @click="foreach01">foreach01</el-button>
    <el-button @click="foreach02">foreach02</el-button>
    <el-button @click="foreach03">foreach03</el-button>
    <br />
    <el-button @click="every01">every01</el-button>
    <el-button @click="some01">some01</el-button>
    <br />
    <el-button @click="map01">map01</el-button>
    <br />
    <el-button @click="fun03">fun03</el-button>
  </div>
</template>
<script>
export default {
  name: "test2",
  data() {
    return {
      array01: [1, 2, 3],
      array02: [
        {
          name: "小高",
          age: "18",
        },
        {
          name: "小张",
          age: "19",
        },
        {
          name: "小林",
          age: "20",
        },
      ],
      array03: [],
    };
  },
  methods: {
    filter01() {
      this.array01.filter(function (currentValue, index, arr) {
        console.log(currentValue);
        console.log(index);
        console.log(arr);
      });
    },
    filter02() {
      this.array01.filter((value) => console.log(value));
    },
    filter03() {
      this.array03 = this.array02.filter((value) => {
        return value.age > 19;
      });
      this.array03.forEach((value) => console.log(value.age));
      console.log(this.array03);
    },
    filter04() {
      this.array03 = this.array02.filter((value) => value.age >= 19);
      console.log(this.array03);
    },
    filter05() {
      this.array02.filter((value, index) =>
        console.log(
          "第" +
            (index + 1) +
            "个对象的姓名是：" +
            value.name +
            "，年级是：" +
            value.age
        )
      );
    },
    foreach01() {
      this.array02.forEach((value, index) =>
        console.log(
          "第" +
            (index + 1) +
            "个对象的姓名是：" +
            value.name +
            "，年级是：" +
            value.age
        )
      );
    },
    foreach02() {
      this.array03 = this.array02.forEach((value) => value.age >= 19);
      console.log(this.array03);
    },
    foreach03() {
      this.array02.forEach((value) => alert(value.name));
    },
    //every
    every01() {
      console.log(this.array02.every((value) => value.age > 18));
    },
    //some
    some01() {
      console.log(this.array02.some((value) => value.age > 18));
    },
    //map
    map01() {
      this.array03 = this.array01.map((value) => value + 1);
    },
    fun01(value) {
      alert("我是回调函数");
      console.log(value);
    },
    fun02(fun, value) {
      fun(value);
      alert("我是主函数");
    },
    fun03() {
      this.fun02(this.fun01, "test");
    },
  },
  //   computed: {
  //     filter04() {
  //       return this.array02.filter((value) => value.age == 19);
  //     },
  //   },
};
</script>