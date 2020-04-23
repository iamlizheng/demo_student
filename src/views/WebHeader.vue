<template>
    <div class="header">
        <div class="logo">
            <img src="@/assets/logo.png" alt="logo">
            <span>VUE学生管理系统</span>
        </div>
        <div class="state">
            <student-state />
        </div>
    </div>
</template>
<script>
import StudentState from '@/components/StudentLoginState'

export default {
    components : {
        StudentState
    }
}
</script>

<style scoped>
.header {
    display:flex;
    justify-content:space-between;
    width: 100%;
    height: 70px;
    background-color: #354457;
}
.logo {
    padding-left: 20px;
    height: 70px;
    line-height: 70px;
}
.logo img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.logo span {
    margin-left:10px;
    font-size: 14px;
    color: #b3bcc5;
}
.state {
    padding-right: 20px;
    height: 70px;
    line-height: 70px;
}
</style>