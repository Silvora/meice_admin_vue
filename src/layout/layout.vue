<template>
    <div class="layout">
        <Layout style="height: 100vh;">
            <Sider ref="sider" :width="256" hide-trigger collapsible :collapsed-width="78" v-model="app.collapsed">
                <Menu></Menu>
            </Sider>
            <Layout>
                <Header style="padding: 0 20px;" class="layout-header-bar">
                    <div class="header_bar">
                        <Icon style="" @click="collapsedSider" :class="rotateIcon" type="md-menu" size="24">
                        </Icon>
                        <HeaderBar></HeaderBar>
                    </div>
                </Header>
                <Content></Content>
            </Layout>
        </Layout>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useAppStore } from "@/stores/modules/app"
import { useRouterStore } from "@/stores/modules/router"
import Menu from './components/menu.vue';
import HeaderBar from "./components/headerBar.vue"
import Content from './components/content.vue';
import { useRoute } from 'vue-router';
const app = useAppStore()
const appRouter = useRouterStore()
const sider = ref<any>(null)
const rotateIcon = computed(() => {
    return [
        'menu-icon',
        app.collapsed ? 'rotate-icon' : ''
    ];
})


const collapsedSider = () => {
    //console.log(side1.value);
    sider.value.toggleCollapse();
}
const route = useRoute()

const getRoute = () => {
    //console.log(route);
    appRouter.setMenu(route.matched)

}

onMounted(() => {
    getRoute()
}),

    watch(() => route.path, () => getRoute())



</script>

<style scoped lang="less">
.layout {
    //width: 100%;
    height: 100vh;
    //border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    //border-radius: 4px;
    overflow: hidden;

}

.layout .ivu-menu {
    z-index: 0
}

.layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}

.menu-icon {
    transition: all .3s;
}

.rotate-icon {
    transform: rotate(-90deg);
}

.menu-item span {
    display: inline-block;
    overflow: hidden;
    //width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
}

.menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
}

.collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
}

.collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
}

.header_bar {
    display: flex;
    //background-color: red;
    padding: 0;
    margin: 0;

    i {
        line-height: 64px;
        // padding: 0 20px;
    }
}
</style>