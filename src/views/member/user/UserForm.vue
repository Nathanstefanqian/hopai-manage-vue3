<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="formData.mobile" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio
            v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)"
            :key="dict.value"
            :label="dict.value"
          >
            {{ dict.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="formData.nickname" placeholder="请输入用户昵称" />
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <UploadImg v-model="formData.avatar" :limit="1" :is-show-tip="false" />
      </el-form-item>
      <el-form-item label="用户性别" prop="sex">
        <el-radio-group v-model="formData.sex">
          <el-radio
            v-for="dict in getIntDictOptions(DICT_TYPE.SYSTEM_USER_SEX)"
            :key="dict.value"
            :label="dict.value"
          >
            {{ dict.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthday">
        <el-date-picker
          v-model="formData.birthday"
          type="date"
          value-format="x"
          placeholder="选择出生日期"
        />
      </el-form-item>
      <el-form-item label="宝宝生日" prop="babyBirthday">
        <el-date-picker
          v-model="formData.babyBirthday"
          type="date"
          value-format="x"
          placeholder="选择宝宝生日"
        />
      </el-form-item>
      <el-form-item label="结婚纪念日" prop="weddingAnniversary">
        <el-date-picker
          v-model="formData.weddingAnniversary"
          type="date"
          value-format="x"
          placeholder="选择结婚纪念日"
        />
      </el-form-item>
      <el-form-item label="所在地" prop="areaId">
        <el-tree-select
          v-model="formData.areaId"
          :data="areaList"
          :props="defaultProps"
          :render-after-expand="true"
        />
      </el-form-item>

      <el-form-item label="会员备注" prop="mark">
        <el-input type="textarea" v-model="formData.mark" placeholder="请输入会员备注" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import * as UserApi from '@/api/member/user'
import * as AreaApi from '@/api/system/area'
import { defaultProps } from '@/utils/tree'
const props = defineProps<{ userInfo: UserApi.UserVO }>()

const user = ref<UserApi.UserVO>({ ...props.userInfo })
const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('编辑') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const route = useRoute()
const id = route.params.id
const formData = ref({
  id,
  mobile: props.userInfo.mobile,
  status: props.userInfo.status,
  nickname: props.userInfo.nickname,
  avatar: props.userInfo.avatar,
  sex: props.userInfo.sex,
  areaId: props.userInfo.areaId,
  birthday: props.userInfo.birthday,
  babyBirthday: props.userInfo.babyBirthday,
  weddingAnniversary: props.userInfo.weddingAnniversary,
  mark: props.userInfo.mark
})
const formRules = reactive({
  mobile: [{ required: true, message: '手机号不能为空', trigger: 'blur' }],
  status: [{ required: true, message: '状态不能为空', trigger: 'blur' }],
  nickname: [{ required: true, message: '昵称不能为空', trigger: 'blur' }],
  avatar: [{ required: true, message: '头像不能为空', trigger: 'blur' }],
  sex: [{ required: true, message: '性别不能为空', trigger: 'blur' }],
  areaId: [{ required: true, message: '地区不能为空', trigger: 'blur' }],
  birthday: [{ required: true, message: '生日不能为空', trigger: 'blur' }],
  babyBirthday: [{ required: true, message: '宝宝生日不能为空', trigger: 'blur' }],
  weddingAnniversary: [{ required: true, message: '结婚纪念日不能为空', trigger: 'blur' }],
  mark: [{ required: true, message: '备注不能为空', trigger: 'blur' }]
})
const formRef = ref() // 表单 Ref
const areaList = ref([]) // 地区列表

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true

  // 获得地区列表
  areaList.value = await AreaApi.getAreaTree()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as UserApi.UserVO
    console.log(data.id)
    await UserApi.updateUser(data)
    message.success(t('common.updateSuccess'))
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}
</script>
