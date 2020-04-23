<template>
    <div class="right-content">
        <router-view>
        <!-- 新增学生展示区域 -->
        <!-- <student-add></student-add> -->
        <!-- 学生列表展示区域 -->
        <!-- <student-list></student-list> -->
        </router-view>
    </div>
</template>

<script>
import StudentAdd from '@/components/StudentAdd'
import StudentList from '@/components/StudentList'


export default {
    components : {
        StudentAdd,
        StudentList
    }
}
</script>

<style scoped>
.right-content {
    float: right;
    width: calc(100% - 200px);
    min-width: 500px;
    background-color: #eee;
    height:  calc(100% - 70px);
    position: relative;
}
.content {
    position: absolute;
    width: 100%;
}
</style>