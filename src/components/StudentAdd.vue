<template>
    <!-- 新增学生展示区域 -->
    <div class="add-student content" id="add-student">
        <form id="add-student-form">
            <div>
                <label for="name" autofocus>姓名</label>
                <input type="text" id="name" name="name" v-model="student.name" maxlength="5" required>
            </div>
            <div>
                <label for="">性别</label>
                <input type="radio" name="sex" id="male" value="0" checked  v-model="student.sex">
                <label for="male" class="label-sex">男</label>
                <input type="radio" name="sex" id="female" value="1" v-model="student.sex">
                <label for="female" class="label-sex">女</label>
            </div>
            <div>
                <label for="sNo">学号</label>
                <input type="text" id="sNo" name="sNo" v-model="student.sNo" maxlength="8" minlength="8" required>
            </div>
            <div>
                <label for="email">邮箱</label>
                <input type="text" id="email" name="email" v-model="student.email" required>
            </div>
            <div>
                <label for="birth">出生年</label>
                <input type="text" id="birth" name="birth" v-model="student.birth" maxlength="4" required>
            </div>
            <div>
                <label for="phone">手机号</label>
                <input type="text" id="phone" name="phone" v-model="student.phone" maxlength="11" minlength="11" required>
            </div>
            <div>
                <label for="address">住址</label>
                <input type="text" id="address" name="address" v-model="student.address" maxlength="8" required>
            </div>
            <div>
                <label for=""></label>
                <input type="submit" class="btn" id="add-student-btn" @click.prevent="addStu">
                <input type="reset" class="btn">
            </div>
        </form>
    </div>
</template>

<script>
export default {
        created () {
            this.$api.logStatus();
        },
    data () {
        return {
            student : {
                name : '',
                sex : 0,
                sNo : '',
                email : '',
                birth : '',
                phone : '',
                address : ''
            }
        }
    },
    methods : {
        addStu () {
            if ( this.checkInputValue()) {
                this.$api.addStu(this.student).then( res => {
                    this.$toast({
                        msg : res.data.msg,
                        type : res.data.status,
                        callback : this.resetForm
                    })
                }).catch( err => {
                    // console.log(err)
                } )
            } else {
                this.$toast({
                    msg : '请填写完整的信息！',
                    type : 'fail',
                })
            } 
        },
        resetForm ({type}) {
            if (type === 'success') {
                const flag = window.confirm('是否清空当前表单信息？选择:[确定]则清空并跳转学生列表，选择:[取消]则不操作并留在当前页！')
                if (flag) {
                    this.student = {sex : 0};
                    this.$router.push('/studentList');
                }
            }
        },
        checkInputValue () {
            const obj = this.student;
            let flag = true;
            for (let prop in obj) {
                if(prop !== "sex" && obj.hasOwnProperty(prop)){
                    if (obj[prop].length === 0) {
                        flag = false;
                    }
                }  
            }
            return flag;
        }
    }
}
</script>