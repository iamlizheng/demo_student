<template> 
    <div class="left-menu">
        <dl id="menu-list">
            <dt>学生管理</dt>
            <router-link to='/studentList' tag='dd' >学生列表</router-link>
            <router-link to='/studentAdd' tag='dd' >新增学生</router-link>
        </dl>
    </div>
</template>

<style scoped>
.left-menu {
    float: left;
    width: 200px;
    height: calc(100% - 70px);
    background-color: #4d5e70;
}
.left-menu dl dt {
    padding-left: 8px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
}
.left-menu dl dd {
    height: 40px;
    line-height: 40px;
    padding-left: 30px;
    cursor: pointer;
}
.left-menu dl dd.active {
    background-color: #ddd;
    color: #354457;
}
</style>