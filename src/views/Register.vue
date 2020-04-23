<template>
    <div class="register-page">
        <div class="main_panel">
        <div class="title_line"></div>
        <div class="title">Student</div>
        <div class="title_line"></div>
        <input type="text" class="input" placeholder="账 号" id="account" v-model="account" />
        <input type="text" class="input" placeholder="用 户 名" id="user" v-model="user" />
        <input type="password" class="input" placeholder="密 码" id="password" v-model="password" />
        <input type="password" class="input" placeholder="确 认 密 码" id="repeat" v-model="repeat" />
        <div class="register_btn" @click="register">注  册</div>
        </div>
    </div>
</template>

<script>
export default {
    created () {
        this.$toast({
            msg : '目前未开启注册功能,3秒后将自动返回登陆界面',
            type : 'info',
            duration : 3000,
            callback : () => {
                setTimeout(() => {
                    this.$router.go(-1)
                },0)
                }
        })
    },
    data () {
        return {
            account : '',
            user : '',
            password : '',
            repeat : ''
        }
    },
    methods : {
        register() {
            this.$router.go(-1);
            return;
            // this.$api.stuRegister({
            //     account : this.account + '',
            //     user : this.user + '',
            //     password : this.password + '',
            //     rePassword : this.repeat + ''
            // }).then( res => {
            //     this.$tosat({
            //         msg : res.data.msg,
            //         type : res.data.status
            //     })
            //     if (res.data.status === 'success') {
            //         this.account = '';
            //         this.user = '';
            //         this.password = '';
            //         this.rePassword = '';
            //     }
            // })
        }
    }
}
</script>

<style scoped>
.register-page {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: #fff;
}
.main_panel {
    /*background: blue;*/
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
    font-size: 22px;
    cursor: pointer;
}
</style>