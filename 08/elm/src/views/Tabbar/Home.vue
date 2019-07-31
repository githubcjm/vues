<template>
  <div>
    <!-- //搜索 -->
    <div style=" background:#0af;margin-button:10px;">
      <h2>广州市千峰</h2>
    </div>
    <van-search
      v-bind:class="fix"
      label="广州"
      background="#0af"
      placeholder="请输入搜索关键词"
      v-model="value"
    />
    <!-- //导航滑块 -->

    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-grid>
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
        <van-grid>
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
        <van-grid>
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
        <van-grid>
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
      <div class="index-1ECZ3_0">
        <section id="activity-lego" class="index-1y1Q5_0">
          <div class="index-3xB2N_0">
            <div class="index-Q3GS5_0 index-1xT5J_0">
              <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
              <div class="index-2W67h_0">搭配齐全吃得好</div>
              <div class="index-1DFa7_0">
                <!---->
                立即抢购 &gt;
              </div>
              <img
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
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="outside|handleMenu" />
      <van-dropdown-item v-model="value1" :options="outside|handleMenu" />
    </van-dropdown-menu>
    <!-- 列表页 -->
    <van-card
      v-for="(j,keys) in res "
      :key="keys"
      num="2"
      price="2.00"
      desc="描述信息"
      :title="j.restaurant.name"
      :thumb="j.restaurant.image_path"
    />
  </div>
</template>


<script>
export default {
  //放数据
  data() {
    return {
      fix: "true",
      value1: 0,
      value: "",
      entrieslist: [],
      //下拉菜单
      outside: [],
      //列表页
      res: [],
      active: 0
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
    // console.log(outside);

    //列表页
    let list = await this.$axios(
      "https://www.easy-mock.com/mock/5d40123c05c59f1e0bf0bbdf/list/res"
    );
    this.res = list.data.items;
    console.log(this.res);
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
//   window.onscroll = () => {
//   let topY = scrollY;

//   console.log(topY);

//   if (topY > 750) {
//       created();
//   }
// };
</script>
