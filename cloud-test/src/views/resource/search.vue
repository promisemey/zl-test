<script setup>
// import { isDark } from '~/composables/dark'
import { onMounted, reactive, ref } from 'vue'
import resource from '@/assets/image/下载.png'
import { Search, ArrowUp, ArrowDown } from '@element-plus/icons-vue'
import { getScience, getService, geTableData } from '@/api/search'
// tab 选中
const active = ref(1)

const tabs = (val) => {
  active.value = val
}
// https://service.test.nttcc.com.cn/api/v1/technical/list
const filters = reactive([
  { label: '服务类型', data: [], id: 1, active: 1, show: false },
  { label: '技术领域', data: [], id: 2, active: 1, show: false },
  { label: '数据来源', data: [], id: 3, active: 1, show: false },
  {
    label: '地区',
    data: [
      { name: '湖北省', id: '湖北省' },
      { name: '湖南省', id: '湖南省' },
      { name: '江西省', id: '江西省' },
      { name: '北京市', id: '北京市' },
      { name: '天津市', id: '天津市' },
      { name: '河北省', id: '河北省' },
      { name: '山西省', id: '山西省' },
      { name: '内蒙古自治区', id: '内蒙古自治区' },
      { name: '辽宁省', id: '辽宁省' },
      { name: '吉林省', id: '吉林省' },
      { name: '黑龙江省', id: '黑龙江省' },
      { name: '上海市', id: '上海市' },
      { name: '江苏省', id: '江苏省' },
      { name: '浙江省', id: '浙江省' },
      { name: '安徽省', id: '安徽省' },
      { name: '福建省', id: '福建省' },
      { name: '山东省', id: '山东省' },
      { name: '河南省', id: '河南省' },
      { name: '广东省', id: '广东省' },
      { name: '广西壮族自治区', id: '广西壮族自治区' },
      { name: '海南省', id: '海南省' },
      { name: '重庆市', id: '重庆市' },
      { name: '四川省', id: '四川省' },
      { name: '贵州省', id: '贵州省' },
      { name: '云南省', id: '云南省' },
      { name: '西藏自治区', id: '西藏自治区' },
      { name: '陕西省', id: '陕西省' },
      { name: '甘肃省', id: '甘肃省' },
      { name: '青海省', id: '青海省' },
      { name: '宁夏回族自治区', id: '宁夏回族自治区' },
      { name: '新疆维吾尔自治区', id: '新疆维吾尔自治区' },
      { name: '台湾省', id: '台湾省' },
      { name: '香港特别行政区', id: '香港特别行政区' },
      { name: '澳门特别行政区', id: '澳门特别行政区' }
    ],
    id: 4,
    active: 1,
    show: false
  }
])
// const more = ref(true)
// const defaultShow = ref(0)
const isShow = (val) => {
  filters[val - 1].show = !filters[val - 1].show
  //   defaultShow.value = val
  //   more.value = !more.value
}
const payload = reactive({
  pageNum: 1,
  pageSize: 10,
  keywords: '',
  serviceTypeId: '',
  serviceTypeId2: '',
  technicalId: '',
  province: '',
  dataOrigin: '',
  logicStatus: 1
})
// 关键词搜索
const searchByKey = () => {
  getData()
}
const tagClick = (lable, tag) => {
  filters[lable - 1].active = tag
  console.log(lable, ['serviceTypeId', 'technicalId', 'dataOrigin', 'province'][lable - 1])
  const sele = ['serviceTypeId', 'technicalId', 'dataOrigin', 'province']

  payload[sele[lable - 1]] = tag === 1 ? ' ' : tag
  getData()
}
const tableData = reactive({})
const currentPage = ref(1)
const pageSize = ref(100)

const small = ref(false)

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  payload.pageNum = val
  getData()
}
const getData = async () => {
  const { data } = await geTableData(payload)
  Object.assign(tableData, data)
  currentPage.value = tableData.currentPage
  pageSize.value = tableData.perPage
}
onMounted(async () => {
  const res1 = await getService()
  const res2 = await getScience()
  getData()
  Object.assign(filters[0].data, res1.data)
  Object.assign(filters[1].data, res2.data.list)

  filters.forEach((item) => {
    const val = { name: '不限', id: 1 }
    item.data.unshift(val)
  })
})

// const tableData = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles'
//   }
// ]
</script>

<template>
  <header>
    <!-- 头部 -->
    <div class="content wrapper">
      <div class="left">
        <RouterLink to="/login" class="logo">
          <img src="https://test.nttcc.com.cn/_nuxt/img/logo_1.e54ae31.png" alt="" />
          <h1>共创云</h1>
        </RouterLink>
        <div class="nav">
          <div>服务产品</div>
          <div>科创需求</div>
          <div>专利论文</div>
          <div>交易大数据</div>
        </div>
      </div>
      <div class="right">
        <el-button type="primary" @click="$router.push('/login')">登录</el-button>
        <el-button plain>注册</el-button>
      </div>
    </div>
    <!-- 头部 -->
  </header>
  <!-- 主体 -->
  <main>
    <div class="panel wrapper">
      <el-card class="box-card">
        <div class="sear-title">
          <div class="left">
            <img :src="resource" alt="" />
            <span>资源大厅</span>
          </div>
          <div class="right">
            <el-input
              v-model="payload.keywords"
              placeholder="请输入资源名称或用户名搜索"
              clearable
            />
            <el-button type="primary" :icon="Search" @click="searchByKey">搜索</el-button>
          </div>
        </div>
        <!-- tabs -->
        <div class="tabs">
          <span :class="{ active: active === 1 }" @click="tabs(1)">服务</span>
          <span :class="{ active: active === 2 }" @click="tabs(2)">需求</span>
          <span :class="{ active: active === 3 }" @click="tabs(3)">科创资源</span>
        </div>
        <!-- tabs -->
        <!-- 筛选 -->
        <div class="filter">
          <template v-for="item in filters" :key="item.id">
            <div class="condition" :style="{ height: item.show ? `auto` : '50px' }">
              <div class="label">{{ item.label }}:</div>
              <div class="tag">
                <span
                  v-for="tag in item.data"
                  :key="tag.id"
                  :class="{ active: item.active === tag.id }"
                  @click="tagClick(item.id, tag.id)"
                  >{{ tag.name }}</span
                >
              </div>
              <div class="more" @click="isShow(item.id)">
                {{ item.show ? '收起' : '更多' }}
                <el-icon>
                  <template v-if="item.show"><ArrowUp /></template>
                  <template v-else><ArrowDown /></template>
                </el-icon>
              </div>
            </div>
          </template>
        </div>
        <!-- 筛选 -->

        <!-- 表格 -->
        <el-table
          :data="tableData.list"
          style="width: 100%"
          :header-cell-style="{ background: '#f7f8f9' }"
          row-class-name="rowClass"
        >
          <el-table-column prop="title" label="服务名称" width="300">
            <template #default="scope">
              <div class="tabTitle">{{ scope.row.title }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="发布用户" width="300">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <el-avatar shape="square" :size="50" :src="scope.row.avatarUrl" />
                <span class="user">{{ scope.row.orgName }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="serviceTypeName" label="服务类型" />
          <el-table-column prop="totalDeal" label="成功成交数">
            <template #default="scope">
              <div class="number">
                {{ scope.row.totalDeal }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="avgScore" label="信用评价">
            <template #default="scope">
              <div class="number2">
                {{ scope.row.avgScore }}
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :small="small"
          :disabled="disabled"
          background
          layout="prev, pager, next, jumper"
          :total="tableData.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
        <!-- 表格 -->
      </el-card>
    </div>
  </main>
  <!-- 主体 -->
</template>

<style lang="scss" scoped>
.wrapper {
  width: 1200px;
  /* background-color: #fff; */
}
header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* logo */
  .content {
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      display: flex;
      align-items: center;
    }

    .right {
      .el-button {
        width: 64px;
        &.is-plain {
          border: 1px solid #90b7f1;
          color: #3473e6;
        }
      }
    }
    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 88px;
      height: 30px;
      margin-right: 50px;

      img {
        width: 30px;
        height: 30px;
      }

      h1 {
        font-size: 16px;
        font-weight: bold;
        color: #3473e6;
      }
    }
    .nav {
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      div {
        margin-right: 20px;

        &:hover {
          color: #3473e6;
          cursor: pointer;
        }
      }
    }
  }
}
main {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background-color: #f6f7f8;
}
.panel {
  background-color: palegoldenrod;

  .sear-title {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 24px;
        height: 21px;
      }

      span {
        font-size: 16px;
        font-weight: 700;
        margin-left: 10px;
        color: #303133;
      }
    }

    .right {
      display: flex;
      height: 40px;
      .el-input {
        width: 446px;

        :deep(.el-input__wrapper) {
          border-radius: 3px 0 0 3px;
        }
      }
      .el-button {
        height: 40px;
        border-radius: 0 3px 3px 0;
      }
    }
  }

  .tabs {
    display: flex;
    align-items: center;
    height: 48px;
    margin-top: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #f7f8f9;

    span {
      position: relative;
      padding: 0 10px;
      margin-right: 100px;
      font-weight: 700;
      cursor: pointer;
      /* font-size: 16px; */
      &:hover {
        color: #3473e6 !important;
        &::after {
          width: 100%;
        }
      }
      &.active {
        color: #3473e6;
        &::after {
          width: 100%;
        }
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -3px;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #3473e6;
        border-radius: 2px;
        transition: all 0.3s ease;
      }
    }
  }

  /* 筛选 */
  .filter {
    margin: 10px 0;
    padding: 0 20px;
    /* height: 300px; */
    border: 1px solid #e5e7eb;
    border-radius: 3px;
    box-sizing: border-box;

    .condition {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      height: 50px;
      padding: 0 10px;
      box-sizing: border-box;

      border-bottom: 1px dashed #dcdfe6;
      &:last-of-type {
        border: none;
      }
      .label {
        display: flex;
        align-items: center;
        /* margin-right: 50px; */
        width: 120px;
        height: 50px;
      }
      .tag {
        flex: 1;
        display: flex;
        /* align-content: flex-start; */
        /* line-height: 50px; */
        flex-wrap: wrap;
        height: 100%;
        overflow: hidden;
        margin-right: 50px;
        /* box-sizing: border-box; */
        span {
          display: block;
          margin: 10px 0;
          padding: 0 10px;
          height: 30px;
          line-height: 30px;
          margin-right: 10px;
          box-sizing: border-box;
          border: 1px solid transparent;
          &.active {
            border-radius: 3px;
            background-color: #3473e6;
            color: #f6f7f8;
          }
          &:hover {
            border-radius: 3px;
            background-color: #3473e6;
            color: #f6f7f8;
            cursor: pointer;
          }
        }
      }
      .more {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        color: #3473e6;
        cursor: pointer;
      }
    }
  }
  /* 筛选 */

  .el-table {
    .number,
    .number2,
    .tabTitle,
    .user {
      font-size: 16px;
      font-weight: 700;
      color: #000;
    }
    .number {
      color: orange;
    }
    .number2 {
      color: #3473e6;
    }
    .user {
      margin-left: 10px;
    }
    :deep(.el-table__body) {
      //-webkit-border-horizontal-spacing: 13px;  // 水平间距
      -webkit-border-vertical-spacing: 13px; // 垂直间距
    }
    :deep(.el-table__inner-wrapper::before) {
      height: 0;
    }
    :deep(td.el-table__cell) {
      border-top: 1px solid #e5e7eb;
      border-bottom: 1px solid #e5e7eb;
      padding: 20px 0;
    }
    :deep(td.el-table__cell:first-of-type) {
      border-left: 1px solid #e5e7eb;
      border-radius: 4px 0 0 4px;
    }
    :deep(td.el-table__cell:last-of-type) {
      border-right: 1px solid #e5e7eb;
      border-radius: 0 4px 4px 0;
    }
  }

  //鼠标移动到每行透明色
  :deep(.el-table__row:hover > td.el-table__cell) {
    background-color: transparent !important;
    border-color: #3473e6;
    box-sizing: border-box;
  }
  :deep(.el-table__row:hover) {
    cursor: pointer;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);

    & .tabTitle {
      color: #3473e6;
    }
  }

  :deep(.el-table__row:hover .user) {
    color: #3473e6;
  }
}
.el-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}
</style>
