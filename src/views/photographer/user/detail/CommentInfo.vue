<template>
  <div>
    <el-table v-loading="loading" :data="list" :show-overflow-tooltip="true" :stripe="true">
      <el-table-column align="center" label="序号" prop="id" width="150">
        <template #default="scope">
          {{ (params.pageNo - 1) * params.pageSize + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="订单编号" prop="orderId" />
      <el-table-column align="center" label="客户" prop="nickname" />
      <el-table-column
        align="center"
        label="评价"
        prop="content"
        width="200px"
        :show-overflow-tooltip="true"
      />
      <el-table-column align="center" label="评分" prop="rate">
        <template #default="scope">
          <el-rate v-model="scope.row.rate" size="small" disabled />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="创建时间"
        prop="createTime"
        :show-overflow-tooltip="true"
      >
        <template #default="scope">
          {{ formatDate(scope.row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column align="center" fixed="right" width="200px" label="操作">
        <template #default="scope">
          <el-button type="primary" text @click="handleEdit(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagniation-layout">
      <el-pagination
        @size-change="getData"
        @current-change="getData"
        v-model:current-page="params.pageNo"
        v-model:page-size="params.pageSize"
        layout="total, prev, pager, next"
        :total="total"
      />
    </div>
  </div>
  <el-dialog title="编辑评论" v-model="dialogVisible">
    <el-form ref="commentRef" :model="formData" :rules="formRules" label-width="100px">
      <el-form-item label="评价" prop="content">
        <el-input v-model="formData.content" placeholder="请输入评价" />
      </el-form-item>
      <el-form-item label="评分" prop="rate">
        <el-rate v-model="formData.rate" size="small" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button text type="primary" @click="handleUpdate">确认</el-button>
      <el-button text @click="handleCancel">取消</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import * as CommentApi from '@/api/member/comment'
import { formatDate } from '@/utils/formatTime'
const route = useRoute()
const message = useMessage()
const userId = route.params.id
const list = ref([])
const loading = ref(false)
const dialogVisible = ref(false)
const commentRef = ref()
const total = ref()
const params = reactive({
  pageNo: 1,
  pageSize: 10,
  userId
})
const formData = ref({
  content: '',
  rate: 0,
  id: 0
})
const formRules = {
  content: [{ required: true, message: '评价不能为空', trigger: 'blur' }],
  rate: [{ required: true, message: '请评分', trigger: 'blur' }]
}
const handleEdit = (id: number) => {
  list.value.map((item: any) => {
    if (item.id == id) {
      formData.value.content = item.content
      formData.value.rate = item.rate
    }
  })
  formData.value.id = id
  dialogVisible.value = true
}

const handleUpdate = async () => {
  if (!commentRef) return
  const valid = await commentRef.value.validate()
  if (!valid) return
  // 提交请求
  loading.value = true
  try {
    await CommentApi.updateUserComment(formData.value)
    message.success('成功')
    await getData()
    dialogVisible.value = false
  } finally {
    loading.value = false
  }
}

const handleCancel = () => {
  dialogVisible.value = false
}

const getData = async () => {
  const res = await CommentApi.getUserCommentPage(params)
  list.value = res.list
  total.value = res.total
}

onMounted(async () => {
  await getData()
})
</script>

<style lang="scss" scoped>
.pagniation-layout {
  display: flex;
  margin-top: 20px;
  justify-content: center;
}
</style>
