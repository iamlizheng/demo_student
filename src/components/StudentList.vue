<template>
    <div class="student-list content" id="student-list">
        <!-- 学生搜索 -->
        <student-search></student-search>
        <!-- 学生列表展示区域 -->
        <table>
            <thead>
                <tr>
                    <th>学号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>邮箱</th>
                    <th>出生年</th>
                    <th>手机号</th>
                    <th>住址</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody id="table-body">
                <tr v-for="student in studentList" :key="student.id">
                    <td>{{ student.sNo }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.sex ? '女' : '男' }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{ student.birth }}</td>
                    <td>{{ student.phone }}</td>
                    <td>{{ student.address }}</td>
                    <td>
                        <button class="btn edit" @click="editStu(student)">编辑</button>
                        <button class="btn del" @click="delStu(student)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 翻页区 -->
        <turn-page></turn-page>
        <!--  编辑弹框区域  -->
        <transition name="modal">
            <student-modal v-if="showModal" />
        </transition>
    </div>
</template>

<script>
import StudentModal from '@/components/StudentModal'
import StudentSearch from '@/components/StudentSearch'
import TurnPage from '@/components/TurnPage'

import {mapActions, mapState, mapMutations} from 'vuex'


export default {
    created () {
        this.$api.logStatus();
        this.getStuList();
    },
    computed : {
        ...mapState({
            studentList : 'list',
            totalPage : 'totalPage',
            showModal : 'showModal',
            currentPage : 'currentPage',
            loginStatus :'loginStatus'
        })
    },
    methods : {
        getStuList () {
            this.getStudentList()
        //     .then(res => {
        //     res.duration = 1000;
        //     res.msg = '学生列表更新成功！'
        //     this.$toast(res);
        // });
        },
        editStu (studentInfo) {
            this.setEditStudentInfo(studentInfo);
            this.setShowModal(true);
        },
        delStu (student) {
            const flag = window.confirm(`请确认是否删除姓名：[${student.name}]，学号：[${student.sNo}]的学生信息?`);
            if(flag){
                this.$api.delStu(student.sNo).then( res => {
                    if ( this.studentList.length === 1 && this.currentPage !== 1) {
                        this.turnPage(this.currentPage - 1 )
                    }
                    this.$toast({
                        msg : res.data.msg,
                        type : res.data.status,
                        callback : this.getStuList
                    })
                })
            } else {
                this.$toast({
                    msg : '操作已取消',
                    type : 'info',
                    duration : 1000
                })
            }
        },
        ...mapActions(['getStudentList','turnPage']),
        ...mapMutations(['setShowModal','setEditStudentInfo'])
    },
    components : {
        StudentModal,
        StudentSearch,
        TurnPage
    },
}
</script>

<style scoped>
.modal-leave-to,
.modal-enter {
    /* top:0; */
    height:0;
    opacity:0;
}
.modal-enter-active,
.modal-leave-active {
    transition:all .6s;
}
.modal-leave,
.modal-enter-to {
    /* top:0; */
    height:100%;
    opacity:1;
}
</style>