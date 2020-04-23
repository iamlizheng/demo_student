<template>
        <button class="el-button" @click="logout">退出登陆</button>
</template>
<script>
export default {
    methods : {
        logout () {
            window.sessionStorage.setItem('_log',false);
            this.$router.replace('/login');
        }
    }
}
</script>

<style scoped>
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 10px;
    font-size: 12px;
    border-radius: 4px;
    color: #fff;
    background-color: #909399;
    border-color: #909399;
}
</style>