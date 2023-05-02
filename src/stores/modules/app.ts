import { defineStore } from 'pinia'
import { ref } from 'vue'
//import { useRouter } from 'vue-router'

export const useAppStore = defineStore('app', () => {
  //const router = useRouter()

  //左侧menu
  const collapsed = ref(false)
  //light、dark、主题
  const theme = ref('dark')

  //面包屑
  //const bread = ref<any>([])

  //窗口
  //const menuList = ref<any>([])

  const setCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  //const setBread = () => {}

  // const setMenu = (menu: any) => {
  //   let path = menu[menu.length - 1]
  //   bread.value = menu
  //   if (!menuList.value.includes(path)) {
  //     menuList.value.push(path)
  //   }

  // }

  // const delMenu = (idx: number) => {
  //   let path = menuList.value[idx]
  //   let len = bread.value.length - 1
  //   if (path.name == bread.value[len].name) {
  //     menuList.value.splice(idx, 1)
  //     let menu = menuList.value[idx]
  //     if (menu) {
  //       router.push(menu.path)
  //     } else {
  //       menu = menuList.value[idx - 1]
  //       router.push(menu.path)
  //     }
  //   } else {
  //     menuList.value.splice(idx, 1)
  //   }
  // }

  //   const setLoginType = (state: string) => {
  //     loginType.value = state
  //   }

  return { collapsed, theme, setCollapsed }
  // state: () => {
  //     return {
  //         collapsed:false,
  //     }
  // },
  // actions:{
  //     setCollapsed(){
  //         this.collapsed = !this.collapsed
  //     }
  // }
})
