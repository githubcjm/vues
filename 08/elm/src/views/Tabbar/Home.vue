<template>
  <div>
    <!-- //搜索 -->
    <div style=" background:#0af;margin-button:10px;">
      <!-- 写点击事件，触发另一个地址路由 -->
      <h2 style="display:inline" @click="adrto">选择地址</h2>
    </div>
    <van-search :class="{searchfix}" background="#0af" placeholder="请输入搜索关键词" v-model="value" />
    <!-- //导航滑块 -->

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-grid style="margin-top:13px;">
          <!-- 宫格 -->
          <van-grid-item
            v-for="(k,index) in entrieslistcomputed"
            @click="navTo(index)"
            :key="index"
            :icon="k.image_hash"
            :text="k.name"
          />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid style="margin-top:13px;">
          <!-- 宫格 -->
          <van-grid-item
            v-for="(k,index) in entrieslistcomputed"
            @click="navTo(index)"
            :key="index"
            :icon="k.image_hash"
            :text="k.name"
          />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid style="margin-top:13px;">
          <!-- 宫格 -->
          <van-grid-item
            v-for="(k,index) in entrieslistcomputed"
            @click="navTo(index)"
            :key="index"
            :icon="k.image_hash"
            :text="k.name"
          />
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid style="margin-top:13px;">
          <!-- 宫格 -->
          <van-grid-item
            v-for="(k,index) in entrieslistcomputed"
            @click="navTo(index)"
            :key="index"
            :icon="k.image_hash"
            :text="k.name"
          />
        </van-grid>
      </van-swipe-item>
    </van-swipe>
    <!-- 中间 -->
    <div>
      <!---->
      <!---->
      <div class="box">
        <section>
          <div>
            <div>
              <h3 style="margin-top:23px;">品质套餐</h3>
              <div>搭配齐全吃得好</div>
              <div style="font-size:12px;color:orange">
                <!---->
                立即抢购 &gt;
              </div>
              <img
                style="heigth:93px;width:131px;position:absolute;right:0px;
                top:13px;"
                src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
              />
            </div>
            <!---->
          </div>
        </section>
        <!---->
        <!---->
        <!---->
      </div>
      <div class="backtop BackTop-wrapper_3XDbcaq" style="display: none;">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+"
          class="BackTop-icon_2Js4K94"
        />
      </div>
      <!---->
    </div>

    <!-- 分割线 -->
    <van-divider :style="{ color: 'black', borderColor: 'black', padding: '0 16px' }">推荐商家</van-divider>
    <!-- 下拉菜单 -->
    <van-dropdown-menu :class="{fixe}">
      <van-dropdown-item v-model="value1" :options="outside|handleMenu" />
      <van-dropdown-item v-model="value1" :options="outside|handleMenu" />
    </van-dropdown-menu>
    <!-- //懒加载 -->
    <van-list
      style="margin-bottom:50px"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getshopList"
    >
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

      <!-- 列表页 -->
      <van-card
        v-for="(item,index) in shopList"
        :key="index"
        num="2"
        price="2.00"
        :desc="item.address"
        :title="item.shopName"
        :thumb="item.picUrl"
      />
    </van-list>
  </div>
</template>


<script>
export default {
  //放数据
  data() {
    return {
      fixe: false,
      searchfix: false,
      fix: "true",
      value1: 0,
      value: "",
      entrieslist: [],
      //下拉菜单
      outside: [],
      //列表页
      res: [],
      active: 0,

      //懒加载
      list: [],
      loading: false,
      finished: false,
      shopList: []
    };
  },

  methods: {
    onSearch() {
      console.log(123);
    },
    navTo(id) {
      this.$router.push({
        name: "detail",
        params: { id, name: "lin" }
      });
    },
    //列表页
    async getshopList() {
      //获取商店信息
      let poilist = await this.$axios.post(
        "https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/poilist"
      );
      this.shopList = [...this.shopList, ...poilist.data.data.shopList];
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.shopList.length >= 40) {
        this.finished = true;
      }
    },
    //地址
    adrto() {
      this.$router.push({
        name: "adr"
      });
    }
  },
  //计算属性
  computed: {
    entrieslistcomputed() {
      return this.entrieslist.slice(0, 8);
    }
  },

  async created() {
    let data = await this.$axios(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/entries"
    );
    this.entrieslist = data.data.data.entries;
    //下拉菜单
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/outside"
    );
    this.outside = menu.data.outside.inside_sort_filter;
    //列表页
    let list = await this.$axios(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/res"
    );
    this.res = list.data.items;
    this.getshopList();
  },

  //生命周期活跃，吸顶
  activated() {
    window.onscroll = () => {
      if (window.scrollY >= 330) {
        this.fixe = true;
      } else {
        this.fixe = false;
      }
      if (window.scrollY >= 50) {
        this.searchfix = true;
      } else {
        this.searchfix = false;
      }
    };
  },
  //不活跃
  deactivated() {
    window.onscroll = null;
  },

  //过滤器
  filters: {
    handleMenu(outside) {
      let newMenu = [];
      outside.forEach((element, index) => {
        element.text = element.name;
        element.value1 = index;
        newMenu.push(element);
      });
      return newMenu;
    }
  }
};
</script>
<style>
.box {
  background: #fafafa;
  position: relative;
  height: 110px;
  width: 353px;
  padding: 12px 0px 0px 15px;
}
.fixe {
  position: fixed;
  top: 50px;
  width: 100%;
  z-index: 99;
}
.searchfix {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 99;
}
</style>

