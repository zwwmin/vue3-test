<template>
  <div
    :style="{ padding: '0 ' + 0.3 * rem + 'px', height: screen_height + 'px' }"
  >
    <!-- logo、方案名 -->
    <div class="head" :style="{ height: 2.5 * rem + 'px' }">
      <div class="header-wrapper" :style="{ width: 3.5 * rem + 'px' }">
        <img
          src="../../../assets/img/sign.png"
          alt=""
          :style="'width:' + 2.6 * rem + 'px;position: relative;'"
        />
      </div>
    </div>
    <!-- 编号、条形码、姓名 -->
    <div
      class="customerInfo"
      :style="{
        height: 2.5 * rem + 'px',
        padding: 0.25 * rem + 'px 0 ' + 0.28 * rem + 'px 0',
      }"
    >
      <div class="firstLine" :style="{ 'font-size': 0.37 * rem + 'px' }">
        <span v-if="data.code" :style="{ 'line-height': 1.3 * rem + 'px' }"
          >NO:{{ data.code }}</span
        >
        <div class="barcodeDiv" :style="{ top: -0.1 * rem + 'px' }">
          <svg id="barcode" class="header-barcode-pos" />
        </div>
        <div
          v-if="data.customer"
          class="nameAndSex"
          :style="{ bottom: 0.28 * rem + 'px', width: 9.4 * rem + 'px' }"
        >
          <span class="spanTitle spanName">姓名：</span
          ><span>{{ data.customer.name }}</span>
          <!-- <span class="spanTitle spanSex">性别：</span><span></span> -->
        </div>
      </div>
    </div>
    <!-- 问题描述 -->
    <ul class="question-wrapper">
      <!-- 肌肤症状 -->
      <li>
        <div
          class="question-div"
          :style="{ width: 9.4 * rem + 'px', 'margin-top': 0.48 * rem + 'px' }"
        >
          <h1
            class="question-h1"
            :style="{
              'font-size': 0.42 * rem + 'px',
              'padding-left': 0.24 * rem + 'px',
              'line-height': 0.93 * rem + 'px',
            }"
          >
            肌肤症状：
          </h1>
          <div v-if="data.jfzz" :style="{ 'font-size': 0.36 * rem + 'px' }">
            <p
              v-for="(item, i) in data.jfzz.split('\n')"
              :key="'jfzz' + i"
              :style="{ 'line-height': 0.63 * rem + 'px' }"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </li>
      <!-- 问题诊断 -->
      <li>
        <div
          class="question-div"
          :style="{ width: 9.4 * rem + 'px', 'margin-top': 0.48 * rem + 'px' }"
        >
          <h1
            class="question-h1"
            :style="{
              'font-size': 0.42 * rem + 'px',
              'padding-left': 0.24 * rem + 'px',
              'line-height': 0.93 * rem + 'px',
            }"
          >
            问题诊断：
          </h1>
          <div v-if="data.wtzd" :style="{ 'font-size': 0.36 * rem + 'px' }">
            <p
              v-for="(item, i) in data.wtzd.split('\n')"
              :key="'wtzd' + i"
              :style="{ 'line-height': 0.63 * rem + 'px' }"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </li>
      <!-- 解决方案 -->
      <li>
        <div
          class="question-div"
          :style="{ width: 9.4 * rem + 'px', 'margin-top': 0.48 * rem + 'px' }"
        >
          <h1
            class="question-h1"
            :style="{
              'font-size': 0.42 * rem + 'px',
              'padding-left': 0.24 * rem + 'px',
              'line-height': 0.93 * rem + 'px',
            }"
          >
            解决方案：
          </h1>
          <div v-if="data.jjfa" :style="{ 'font-size': 0.36 * rem + 'px' }">
            <p
              v-for="(item, i) in data.jjfa.split('\n')"
              :key="'jjfa' + i"
              :style="{ 'line-height': 0.63 * rem + 'px' }"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </li>
      <!-- 温馨提示 -->
      <li>
        <div
          class="question-div"
          :style="{ width: 9.4 * rem + 'px', 'margin-top': 0.48 * rem + 'px' }"
        >
          <h1
            class="question-h1"
            :style="{
              'font-size': 0.42 * rem + 'px',
              'padding-left': 0.24 * rem + 'px',
              'line-height': 0.93 * rem + 'px',
            }"
          >
            温馨提示：
          </h1>
          <div v-if="data.wxts" :style="{ 'font-size': 0.36 * rem + 'px' }">
            <p
              v-for="(item, i) in data.wxts.split('\n')"
              :key="'wxts' + i"
              :style="{ 'line-height': 0.63 * rem + 'px' }"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </li>
      <!-- 注意事项 -->
      <!-- <li>
        <div class="question-div" :style="{'width':9.4*rem+'px','margin-top':0.48*rem+'px'}">
          <h1 class="question-h1" :style="{'font-size':0.42*rem+'px','padding-left': 0.24*rem+'px','line-height': 0.93*rem+'px'}">注意事项：</h1>
          <div v-if="data.zysx" :style="{'font-size':0.36*rem+'px'}">
            <p v-for="(item,i) in data.zysx.split('\n')" :key="'zysx'+i" :style="{'line-height': 0.63*rem+'px'}">{{ item }}</p>
          </div>
        </div>
      </li> -->
    </ul>
    <!-- 产品列表 -->
    <div class="programme" :style="{ margin: 0.8 * rem + 'px auto' }">
      <h1 class="title" :style="{ 'font-size': 0.48 * rem + 'px' }">
        为您搭配的护理计划
      </h1>
      <h1
        class="question-h1"
        :style="{
          'font-size': 0.42 * rem + 'px',
          'padding-left': 0.24 * rem + 'px',
          'line-height': 0.93 * rem + 'px',
        }"
      >
        护肤品详情
      </h1>
      <ul class="ul">
        <li
          v-for="(item, index) in data.details"
          :key="'product' + index"
          class="li"
          :style="{
            'padding-top': 0.54 * rem + 'px',
            'padding-bottom': 0.29 * rem + 'px',
          }"
        >
          <div
            class="productName"
            :style="{
              'margin-bottom': 0.4 * rem + 'px',
              'font-size': 0.37 * rem + 'px',
            }"
          >
            <p class="p" :style="{ flex: '0 0 ' + 1.89 * rem + 'px 0' }">
              产品名称：
            </p>
            <span class="span" :style="{ padding0right: 0.4 * rem + 'px' }">{{
              item.spec.product.name
            }}</span>
            <span>X{{ item.quantity }}</span>
          </div>
          <div
            class="productName"
            :style="{
              'margin-bottom': 0.4 * rem + 'px',
              'font-size': 0.37 * rem + 'px',
            }"
          >
            <p class="p" :style="{ flex: '0 0 ' + 1.89 * rem + 'px 0' }">
              产品价格：
            </p>
            <span class="span">{{ item.spec.price }}</span>
          </div>
          <div
            class="productName"
            :style="{
              'margin-bottom': 0.4 * rem + 'px',
              'font-size': 0.37 * rem + 'px',
            }"
          >
            <p class="p" :style="{ flex: '0 0 ' + 1.89 * rem + 'px 0' }">
              产品功效：
            </p>
            <span class="span">{{ item.describe }}</span>
          </div>
        </li>
      </ul>
      <div
        class="total"
        :style="{
          width: 9.4 * rem + 'px',
          'font-size': 0.4 * rem + 'px',
          'line-height': 1.17 * rem + 'px',
          'margin-top': 0.4 * rem + 'px',
        }"
      >
        <span>合计：</span>
        <i
          :style="{
            'font-size': 0.5 * rem + 'px',
            color: '#ed4d4d',
            'font-style': 'normal',
            'margin-right': 0.4 * rem + 'px',
          }"
          >¥{{ data.totol_price }}</i
        >
        <router-link
          :to="{
            path: '/Products',
            query: {
              type: $route.query.type,
              products: JSON.stringify(producets),
            },
          }"
        >
          查看详情
          <svg
            data-v-7ef413f4=""
            version="1.1"
            viewBox="0 0 1024 1024"
            class="svg-icon svg-fill svg"
            :style="{ top: 0.08 * rem + 'px' }"
          >
            <defs />
            <path
              fill="#292829"
              stroke="none"
              pid="0"
              d="M729.771 512.44l-435.54 447.12V64.441z"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <!--  -->
    <div class="zysx" :style="{ 'margin-top': 0.1 * rem + 'px' }">
      <h1
        class="title"
        :style="{
          'font-size': 0.42 * rem + 'px',
          'margin-bottom': 0.4 * rem + 'px',
        }"
      >
        注意事项
      </h1>
      <div v-if="data.zysx" :style="{ 'font-size': 0.35 * rem + 'px' }">
        <p
          v-for="(item, i) in data.zysx.split('\n')"
          :key="'zysx' + i"
          :style="{ 'line-height': 0.4 * rem + 'px' }"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <!-- 形象老师 -->
    <div
      v-if="teacher.pictures && teacher.show_infos.sign"
      class="teacher"
      :style="{ 'margin-top': 0.67 * rem + 'px', padding: 0.5 * rem + 'px 0' }"
      @click="showTeacher"
    >
      <el-avatar :size="1.5 * rem" :src="teacher.pictures" class="avater" />
      <span
        :style="{
          'margin-left': 0.4 * rem + 'px',
          'font-size': 0.37 * rem + 'px',
        }"
        >导师签名：</span
      >
      <img
        :src="teacher.show_infos.sign"
        class="sign"
        :style="{ width: 2.9 * rem + 'px' }"
      />
    </div>
    <!-- 印章 -->
    <footer
      class="footer"
      :style="{
        width: 9.4 * rem + 'px',
        height: 3.5 * rem + 'px',
        'font-size': 0.4 * rem + 'px',
        'margin-top': 1.2 * rem + 'px',
      }"
    >
      <div v-if="data.updated_at" class="div">
        <p>护理机构：XUNMUMEI美肤研究院</p>
        <p :style="{ 'margin-top': 0.33 * rem + 'px' }">
          {{ data.updated_at }}
        </p>
        <img
          src="../../../assets/img/seal2.png"
          class="img"
          :style="{
            width: 3.5 * rem + 'px',
            top: -0.5 * rem + 'px',
            right: 0.35 * rem + 'px',
          }"
        />
      </div>
    </footer>
  </div>
</template>
<script>
import jsbarcode from "jsbarcode";
import {
  showone, // 展示导师信息（外用）
} from "@/api/SkincareSolution.js";
export default {
  name: "Skin",
  props: {
    data: Object
  },
  data() {
    return {
      screen_width: window.document.documentElement.clientWidth,
      screen_height: window.document.documentElement.clientHeight,
      rem: 0,
      // logo: require('@/assets/img/201902011552065490.png'),
      data: {},
      // seal: require('@/assets/img/seal2.png'),
      loading: false,
      teacher: {},
      producets: [],
    };
  },
  // watch: {
  //   data: {
  //     handler(newVal, oldVal) {
  //       console.log("newVal");
  //       console.log(newVal);
  //       this.setJsbarcode(newVal); // 设置条形码
  //       this.setData(newVal); // 设置数据
  //       if (Number.isInteger(newVal.image_id) && newVal.image_id > 0) {
  //         this.getTeacher(newVal.image_id);
  //       }
  //     },
  //     deep: true,
  //   },
  // },
  // created() {
  //   console.log("this.data");
  //   console.log(this.data);
  //   this.rem = this.screen_width / 10;
  // },
  setup(props) {
    console.log("props.title :>> ", props.data);

    const setJsbarcode = (newVal) => {
      jsbarcode("#barcode", newVal.code, {
        displayValue: true, // 是否在条形码下方显示文字
        width: this.rem / 90,
        height: (this.rem / 90) * 50,
        fontSize: this.rem / 4,
      });
    };
    watch(
      () => props.data,
      (newTitle, oldTitle) => {
        console.log("newTitle, oldTitle :>> ", newTitle, oldTitle);
      }
    );
    return {
      setJsbarcode,
    };
  },
  methods: {
    // 设置条形码
    setJsbarcode(newVal) {
      jsbarcode("#barcode", newVal.code, {
        displayValue: true, // 是否在条形码下方显示文字
        width: this.rem / 90,
        height: (this.rem / 90) * 50,
        fontSize: this.rem / 4,
      });
    },
    // 设置数据
    setData(newVal) {
      this.data = newVal;
      // 问题描述
      const other_infos = JSON.parse(newVal.other_infos);
      this.data.jfzz = other_infos[0].肌肤症状;
      this.data.wtzd = other_infos[0].问题诊断;
      this.data.jjfa = other_infos[0].解决方案;
      this.data.wxts = other_infos[0].温馨提示;
      this.data.zysx = other_infos[0].注意事项;
      this.data.images = other_infos[0].images;
      // 价格
      this.data.totol_price = 0;
      // this.data.details = newVal.details.length > 0 ? newVal.details : newVal.program.details
      this.data.details = newVal.details;
      for (const i in this.data.details) {
        this.data.details[i].spec.specs_c = JSON.parse(
          this.data.details[i].spec.specs
        );
        for (const j in this.data.details[i].spec.specs_c) {
          if (this.data.details[i].spec.specs_c[j].key === "单位") {
            this.data.details[i].spec.specs_c.unit =
              this.data.details[i].spec.specs_c[j].value;
          } else if (this.data.details[i].spec.specs_c[j].key === "数量") {
            this.data.details[i].spec.specs_c.count =
              this.data.details[i].spec.specs_c[j].value;
          }
        }
        const num = Number(
          this.data.details[i].spec.price * this.data.details[i].quantity
        );
        this.data.totol_price = this.data.totol_price + num;
        // 产品列表
        this.producets.push({
          id: this.data.details[i].spec.id,
          num: this.data.details[i].quantity,
        });
      }
      this.data.totol_price = this.data.totol_price.toFixed(2);
    },
    getTeacher(id) {
      showone({ image_id: id }).then((res) => {
        if (res.code === 0) {
          this.teacher = res.data.image;
          try {
            this.teacher.show_infos = JSON.parse(res.data.image.show_infos);
          } catch {
            this.teacher.show_infos = {};
          }
        } else {
          // this.$message.error(res.msgs)
        }
      });
    },
    // 查看导师
    showTeacher() {
      this.$router.push({
        path: "/Teacher",
        query: {
          info: JSON.stringify(this.teacher),
          updated_at: this.data.updated_at,
        },
      });
    },
    // 查看产品详情列表
    showProducts() {
      this.$router.push({
        path: "/Products",
        query: {
          type: this.$route.query.type,
          id: this.$route.query.id,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.head {
  width: 100%;
  display: flex;
  border-bottom: 2px solid #010101;
  align-items: center;
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .spanDiv {
    // position: absolute;
    // text-align: center;
    .span {
      font-weight: 700;
      color: #292829;
    }
  }
}

.customerInfo {
  width: 100%;
  border-bottom: 2px solid #010101;
  position: relative;
  .firstLine {
    width: 100%;
    height: auto;
    .barcodeDiv {
      float: right;
      position: relative;
    }
  }
  .nameAndSex {
    position: absolute;
    .spanName {
      float: left;
    }
    .spanSex {
      float: right;
    }
  }
}

.question-wrapper {
  list-style: none;
  .question-div {
    padding: 0;
    margin: 0;
    .question-h1 {
      background-color: #edefed;
      font-weight: 500;
      padding: 0;
      margin: 0;
    }
  }
}

.programme {
  .title {
    color: #6e2c9f;
    text-align: center;
    font-weight: 700;
  }
  .question-h1 {
    background-color: #edefed;
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
  .ul {
    list-style: none;
    .li {
      border-bottom: 2px dashed #333;
      .productName {
        display: flex;
        .p {
          margin: 0;
        }
        .span {
          flex: 1;
          color: #333;
        }
      }
    }
  }
  .total {
    text-align: right;
    border-bottom: 2px dashed #333;
    color: #333;
    .svg {
      width: 10px;
      height: 16px;
      position: relative;
    }
  }
}

.zysx {
  .title {
    color: #542775;
    text-align: center;
    font-weight: 500;
  }
}

.teacher {
  border-top: 1px solid #e5e5ee;
  border-bottom: 1px solid #e5e5ee;
  text-align: center;
  margin: 0;
  .avater {
    vertical-align: middle;
  }
  .sign {
    vertical-align: middle;
  }
}

.footer {
  display: flex;
  color: #333;
  font-weight: 700;
  line-height: 1;
  .div {
    position: relative;
    flex: 1;
    color: #333;
    text-align: right;
    letter-spacing: 1.4px;
    .img {
      position: absolute;
      opacity: 0.8;
    }
  }
}

.spanTitle {
  font-weight: 700;
}
</style>
