<template>
    <Menu :active-name="appRouter.urlInfo.name" theme="dark" width="auto" :open-names="[`${appRouter.urlInfo.personName}`]"
        :class="menuitemClasses" accordion>
        <div class="logo-con">
            <img v-show="!app.collapsed" :src="maxLogo" key="max-logo" />
            <img v-show="app.collapsed" :src="minLogo" key="min-logo" />
        </div>
        <template v-for="(item, componentIndex) in admin">
            <!-- 展开并且有子菜单 -->
            <Submenu v-if="!app.collapsed && item.children" :key="componentIndex" :name="item.name">
                <template #title>
                    <Icon :type="item.meta.icon" />
                    <span>{{ item.meta.title }}</span>
                </template>
                <MenuItem v-for="(children, index) in item.children" :key="index" :name="children.name"
                    :to="item.path + '/' + children.path">

                {{ children.meta.title }}
                </MenuItem>
            </Submenu>

            <!-- 展开但没有子菜单 -->
            <MenuItem v-else-if="!app.collapsed" :name="item.name" :key="item.icon" :to="item.path">
            <Icon :type="item.meta.icon" />
            <span>{{ item.meta.title }}</span>
            </MenuItem>

            <!-- 不展开有子菜单 -->
            <Dropdown v-else-if="app.collapsed && item.children" placement="right-start" class="menu_dropdown"
                :key="item.name">
                <MenuItem :name="item.name">
                <Icon :type="item.meta.icon" />
                <span>{{ item.meta.title }}</span>
                </MenuItem>
                <template #list>
                    <DropdownMenu>
                        <DropdownItem v-for="(children, index) in item.children" :key="index">
                            <MenuItem :name="item.to" :to="item.path + '/' + children.path">
                            {{ children.meta.title }}
                            </MenuItem>
                        </DropdownItem>
                    </DropdownMenu>
                </template>
            </Dropdown>

            <!-- 不展开无子菜单 -->
            <Tooltip v-else-if="app.collapsed" :content="item.meta.title" placement="right" :key="item.path">
                <MenuItem :name="item.name" :to="item.path">
                <Icon :type="item.meta.icon" />
                <span>{{ item.meta.title }}</span>
                </MenuItem>
            </Tooltip>
        </template>
    </Menu>
</template>

<script setup lang="ts">
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import { useAppStore } from "@/stores/modules/app"
import { useRouterStore } from "@/stores/modules/router"
import { computed, ref } from "vue";
import admin from "@/router/admin"
import { useRouter } from 'vue-router';
const app = useAppStore()
const appRouter = useRouterStore()
const router = useRouter()
const menuitemClasses = computed(() => {
    return [
        'menu-item',
        app.collapsed ? 'collapsed-menu' : ''
    ]
})

const handleToRouter = (path: string) => {
    //console.log(path);
    router.push(path)
}
</script>

<style scoped lang="less">
.logo-con {
    width: 100%;

    img {
        width: 100%;
        padding: 4px 12px;
        height: 58px;
    }
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
    //width: 69px;
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
    font-size: 24px;
}

.menu_dropdown {
    // background-color: #ccc;
    //left: 80px;

    :global(.menu_dropdown .ivu-select-dropdown) {
        //background-color: red !important;
        //margin-left: 4px;
        left: 84px !important;
    }
}
</style>