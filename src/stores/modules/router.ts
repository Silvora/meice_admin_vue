import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useRouterStore = defineStore('appRouter', () => {
  const router = useRouter()

  //当前路由
  const urlInfo = ref<any>({
    // person: [],
    // path: ''
    //name:''
  })

  //面包屑
  const bread = ref<any>([])

  //窗口
  const menuList = ref<any>([])

  //const setBread = () => {}

  const setPath = (url: any) => {
    //console.log('menu', menu)
    //console.log(path)
    //path.value = url
    // let path = menu[menu.length - 1]
    // bread.value = menu
    // if (!menuList.value.includes(path)) {
    //   menuList.value.push(path)
    // }
    // path.value = path
    //console.log(menuList.value)
  }

  const setMenu = (menu: any) => {
    let len = menu.length - 1
    //获取当前路由长度
    let path = menu[len]
    //console.log(menu.shift())
    //menu.splice(0, 1)
    // console.log(menu)
    bread.value = menu

    //配置当前路由状态
    let perComponent = menu[len - 1]

    urlInfo.value = {
      //父路由
      component: perComponent,
      //当前路径
      path: path.path,
      //当前title
      title: path.meta.title,
      //所附父级
      personName: perComponent.name,
      //当前title
      name: path.name
    }
    //console.log('object', urlInfo.value)

    //窗口路由
    if (!menuList.value.includes(path)) {
      menuList.value.push(path)
    }

    //console.log(menuList.value)
  }

  //删除其中一个
  const delMenu = (idx: number) => {
    //console.log('object', idx)
    //console.log(menuList.value[idx])
    let path = menuList.value[idx]
    let len = bread.value.length - 1
    //let bread = bread.value[bread.value.length - 1]
    if (path.name == bread.value[len].name) {
      //console.log('object')
      menuList.value.splice(idx, 1)
      //let l = menuList.value.length-1
      //path = menuList.value[idx]
      //router.push(path.path)
      //console.log(menuList.value[idx])
      let menu = menuList.value[idx]
      if (menu) {
        router.push(menu.path)
      } else {
        menu = menuList.value[idx - 1]
        router.push(menu.path)
      }
    } else {
      menuList.value.splice(idx, 1)
    }
  }

  //关闭
  const closeMenu = (list: any) => {
    const menu = ref<any>([])
    //console.log(menuList.value)
    menuList.value.forEach((item: any) => {
      if (list.includes(item.path)) {
        menu.value.push(item)
      }
    })

    //console.log(menu.value)
    //menu.value.concat(res)

    //console.log(menuList.value, menu.value)
    menuList.value = menu.value
    let len = menu.value.length
    if (len == 1) {
      router.push(menu.value[len - 1].path)
      //setMenu(menu.value[len - 1].path)
    }

    // let path = menu.value[menu.value.length - 1].path
    //setMenu(menu[menu.length - 1])
  }

  return { urlInfo, bread, menuList, setMenu, delMenu, closeMenu }
})
