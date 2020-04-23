<template>
    <div class="stu-login">
        <div class="main_panel">
        <div class="title_line"></div>
        <div class="title">Student</div>
        <div class="title_line"></div>
        <input type="text" class="input" placeholder="用 户 名" id="account">
        <input type="password" class="input" placeholder="密 码" id="password">
        <div class="register_btn" @click="login">登录</div>
        <router-link to="/register" tag="div" class="register_link">快速注册</router-link>
        <!-- <div class="register_link" onclick="javascript:location.href='/passport'">忘记密码</div> -->
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    created () {
        this.$toast({
            msg : '暂无用户验证，可直接点击登陆',
            type : 'info',
            duration : 3000
        })
    },
    data () {
        return {
            account : null,
            password : null
        }
    },
    methods : {
        login () {
            window.sessionStorage.setItem('_log',true)//模拟登陆了
            this.$router.replace('/studentList');
            //登陆验证后端接口关闭，点击登陆直接进入
            // this.$api.stuLogin({account : this.account, password : this.password})
        }
    }
}
</script>

<style scoped>
.stu-login {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: #fff;
}
.main_panel {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    width: 500px;
    height: 200px;
}
.title {
    position: relative;
    display: inline-block;
    width: 260px;
    font-size: 70px;
    color: #222;
    text-align: center;
    background: white;
    float: left;
    margin-bottom: 10px;
}
.title_line {
    display: inline-block;
    float: left;
    width: 120px;
    height: 4px;
    margin-top: 50px;
    background: #222;
}
.input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 440px;
    height: 40px;
    padding: 5px 24px;
    font-size: 16px;
    font-color: #666;
    margin-top: 15px;
}
.register_btn {
    position: relative;
    display: block;
    width: 490px;
    margin-left: auto;
    margin-right: auto;
    background: #222;
    color: white;
    text-align: center;
    height: 38px;
    line-height: 38px;
    margin-top: 30px;
    font-size: 14px;
    cursor: pointer;
}
.register_link {
    color: gray;
    float: right;
    margin-top: 20px;
    margin-right: 10px;
    cursor: pointer;
}
</style>