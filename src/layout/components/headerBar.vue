<template>
    <div class="bar">
        <div class="better">
            <Breadcrumb>
                <BreadcrumbItem v-for="(menu, idx) in appRouter.bread" :to="idx == 1 ? '' : menu.path"
                    v-show="menu.name != 'admin'">
                    <Icon :type="menu.meta.icon"></Icon> {{ menu.meta.title }}
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
        <Space class="user">
            <span class="icon">
                <Icon :size="24" type="md-expand" @click="isFull"></Icon>
            </span>
            <span class="icon">
                <Icon :size="24" type="md-funnel" />
            </span>
            <span>
                <Dropdown>
                    <Badge>
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" :size="32"
                            style="margin-top: -6px;" />
                    </Badge>

                    <template #list>
                        <DropdownMenu>
                            <DropdownItem name="message">
                                消息中心<Badge style="margin-left: 10px" :count="12"></Badge>
                            </DropdownItem>
                            <DropdownItem name="logout">退出登录</DropdownItem>
                        </DropdownMenu>
                    </template>
                </Dropdown>
            </span>
        </Space>
    </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { useRouterStore } from "@/stores/modules/router"
let app = document.getElementById("#app")
const { toggle } = useFullscreen(app)

const isFull = () => {
    toggle()
}
//console.log(isFullscreen, enter, exit, toggle);

const appRouter = useRouterStore()
</script>

<style scoped lang="less">
.bar {
    width: 100%;
    padding-left: 38px;
    display: flex;
    justify-content: space-between;

    .user {
        display: flex;

        span {
            display: inline-block;

            //padding: 0 8px;
            //margin: 0 4px;
            // &:last-child {
            //     //margin: 0 2px;
            // }

        }



        .icon {

            padding: 0 8px;

            &:hover {
                background-color: #ccc;
            }
        }


    }
}
</style>