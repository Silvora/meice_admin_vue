<template>
    <div class="breadList">
        <div class="left">
            <span @click="handleScroll('left')">&lt;</span>
        </div>
        <div class="menuList" ref="menu">
            <RadioGroup v-model="appRouter.urlInfo.title" class="radioList">

                <div class="radioBtn" v-for="(menu, idx) in appRouter.menuList" :key="menu.name">
                    <Radio :label="menu.meta.title" size="small" @change="handleToRoute(menu.path)"
                        @click="handleToRoute(menu.path)">
                    </Radio>
                    <Icon type="ios-close" v-show="menu.meta.title != '首页'" @click="appRouter.delMenu(idx)" />
                </div>
            </RadioGroup>
        </div>
        <div class="right">
            <span @click="handleScroll('right')">&gt;</span>
            <span>
                <Dropdown placement="bottom-start">
                    <Icon type="md-close" />
                    <template #list>
                        <DropdownMenu>
                            <DropdownItem name="all" @click="handleCloseMenu(['/home'])">
                                关闭所有
                            </DropdownItem>
                            <DropdownItem name="home" @click="handleCloseMenu(['/home', appRouter.urlInfo.path])">
                                关闭其它
                            </DropdownItem>
                        </DropdownMenu>
                    </template>
                </Dropdown>
            </span>
        </div>
    </div>
    <Content class="content">

        <RouterView v-slot="{ Component }">
            <transition name="slide-right">
                <component :is="Component"></component>
            </transition>
        </RouterView>

    </Content>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { useRouterStore } from "@/stores/modules/router"
import { useRouter } from 'vue-router';
const appRouter = useRouterStore()
//console.log(appRouter.menuList);
//const label = ref("金斑蝶")

// const handleDelMenu = (idx) => {

// }
const menu = ref<any>(null)
const router = useRouter()

const handleToRoute = (path: string) => {
    router.push(path)
}

const handleCloseMenu = (list: any) => {
    //console.log("object", list);
    appRouter.closeMenu(list)


}


const handleScroll = (type: string) => {

    let maxW = menu.value.scrollWidth
    let domW = menu.value.clientWidth
    //if()
    if (maxW <= domW) {
        return
    }
    console.log(menu.value.clientWidth, appRouter.menuList.length, menu.value.scrollWidth);

    nextTick(() => {
        if (type == 'left') {
            // menu.value.scrollIntoView({
            //     behavior: 'smooth'
            // })
            //menu.value.scrollWidth = 
            let ani = requestAnimationFrame(function fn() {
                //console.log("object");
                if (menu.value.scrollLeft > 0) {
                    menu.value.scrollLeft -= 2
                    requestAnimationFrame(fn)
                } else {
                    cancelAnimationFrame(ani)
                }
            })

            //menu.value.style.left = '0px'
        } else {
            //menu.value.style.left = '390px'
            //menu.value.scrollLeft = maxW
            let ani = requestAnimationFrame(function fn() {
                //console.log("object");
                if (menu.value.scrollLeft < maxW) {
                    menu.value.scrollLeft += 2
                    requestAnimationFrame(fn)
                } else {
                    cancelAnimationFrame(ani)
                }
            })
        }
    })
}




</script>

<style scoped lang="less">
.breadList {
    width: 100%;
    height: 38px;
    background-color: #F0F0F0;
    display: flex;

    span {
        display: inline-block;
        width: 28px;
        background-color: #fff;
        height: 38px;
        line-height: 38px;
        text-align: center;
        //border: 0.5px solid #f0f0f0;


    }

    label {
        font-size: 12px;
    }

    .left {
        border: 0.5px solid #f0f0f0;
    }

    .right {
        display: flex;
        //border: 0.5px solid #f0f0f0;

        span {
            border: 0.5px solid #f0f0f0;
        }
    }

    .menuList {
        flex: auto;
        width: 100%;
        //background-color: #ff0000;
        overflow: hidden;
        overflow: auto;

        &::-webkit-scrollbar {
            display: none;
        }


        .radioList {
            width: 100%;
            display: flex;

            .radioBtn {
                display: flex;
                background-color: #fff;
                padding: 0 6px;
                margin: 4px 2px;
                line-height: 30px;
                border-radius: 4px;



                i {
                    margin: auto 0;
                    cursor: pointer;

                    &:hover {
                        color: red;
                    }
                }
            }
        }


    }

}

.content {
    margin: 20px;
    height: calc(100vh - 144px);
    background-color: #fff;
    border-radius: 4px;
}
</style>