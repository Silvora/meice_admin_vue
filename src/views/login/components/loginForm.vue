<template>
    <Login @on-submit="handleSubmit">
        <UserName name="username" />
        <Password name="password" />
        <div class="demo-auto-login">
            <Checkbox v-model="autoLogin" size="large">自动登录</Checkbox>
            <a>忘记密码</a>
        </div>
        <Submit />
    </Login>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const autoLogin = ref(true)
const router = useRouter()
const handleSubmit = () => {
    //console.log("object");
    router.push("/")

}
</script>

<style scoped lang="less">
.demo-login {
    width: 400px;
    margin: 0 auto !important;
}

.demo-auto-login {
    margin-bottom: 24px;
    text-align: left;
}

.demo-auto-login a {
    float: right;
}
</style>