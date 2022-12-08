<template>
    <div :style="{ width: fullWidth + 'px', height: fullHeight + 'px' }">
        <a-layout class="login-wrapper">
            <!-- <a-layout-header>
        </a-layout-header> -->
            <a-layout-content>
                <div class="icarus-login">
                    <div class="icarus-title">Login</div>
                    <a-form :model="formState" name="normal_login" autocomplete="off" @finish="onFinish"
                        @finishFailed="onFinishFailed" class="login-form">
                        <a-form-item label="Username" name="username"
                            :rules="[{ required: true, message: 'Please input your username!' }]">
                            <a-input v-model:value="formState.username" placeholder="username">
                                <template #prefix>
                                    <UserOutlined class="site-form-item-icon" />
                                </template>
                            </a-input>
                        </a-form-item>
                        <a-form-item label="Password" name="password"
                            :rules="[{ required: true, message: 'Please input your password!' }]">
                            <a-input-password v-model:value="formState.password" placeholder="password">
                                <template #prefix>
                                    <LockOutlined class="site-form-item-icon" />
                                </template>
                            </a-input-password>
                        </a-form-item>
                        <a-form-item>
                            <a-form-item name="remember" no-style>
                                <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                            </a-form-item>
                            <a class="login-form-forgot" href="">Forgot password</a>
                        </a-form-item>
                        <a-form-item>
                            <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                                Log in
                            </a-button>
                            <span :style="{ float: 'right' }">Or
                                <a href="">register now!</a>
                            </span>
                        </a-form-item>
                    </a-form>
                </div>
            </a-layout-content>
            <!-- <a-layout-footer style="text-align: center">
        </a-layout-footer> -->
        </a-layout>
    </div>
</template>
<script>
import { reactive, defineComponent, computed, watch, onBeforeUnmount, onMounted } from 'vue';
import { message } from 'ant-design-vue';
import { UserOutlined, LockOutlined, WindowsFilled } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        UserOutlined,
        LockOutlined,
    },
    setup() {
        let fullWidth = document.documentElement.clientWidth;
        let fullHeight = document.documentElement.clientHeight;
        const formState = reactive({
            username: '',
            password: '',
            remember: true
        });
        function handleResize() {
            fullHeight = document.documentElement.clientHeight
            fullWidth = document.documentElement.clientWidth
        }
        onMounted(() => {
            window.addEventListener("resize", handleResize)
        });
        onBeforeUnmount(() => {
            window.removeEventListener("resize", handleResize)
        });
        const onFinish = (values) => {
            console.log('Success: ', values);
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed: ', errorInfo);
            message.error(errorInfo)
        };
        const disabled = computed(() => {
            return !(formState.username && formState.password)
        })
        return {
            formState,
            onFinish,
            onFinishFailed,
            disabled,
            fullWidth,
            fullHeight
        };
    },
});
</script>
<style scoped>

.register {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}
.login-wrapper {
    position: absolute;
    width: 101%;
    height: 101%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../assets/img/icarus-login-bg.jpg");
}

.icarus-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    border-radius: 10px;
    margin: -190px 0 0 -250px;
    background: rgba(255, 255, 255);
    overflow: hidden;
}

.icarus-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    /* color: #fff; */
    font-weight: bold;
    border-bottom: 1px solid #ddd;
}

.login-form {
    padding: 30px;
    max-width: 500px;
}

.login-form-forgot {
    float: right;
}

.login-form-button {
    width: 100%;
}
</style>