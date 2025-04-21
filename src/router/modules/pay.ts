import { Layout } from '@/utils/routerHelper'

const { t } = useI18n()

export default {
  path: '/pay',
  component: Layout,
  redirect: '/pay/order',
  name: 'PayManage',
  meta: {
    title: t('支付'),
    icon: 'ep:wallet',
    alwaysShow: true
  },
  children: []
}
