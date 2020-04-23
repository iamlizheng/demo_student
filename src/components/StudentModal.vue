<template>
    <!--  编辑弹框区域  -->
    <div class="modal" id="modal">
        <!-- 遮罩层 -->
        <div class="mask" id="mask"  @click="setShowModal(false)" ></div>
        <!-- 编辑内容区 -->
        <div class="modal-content">
            <h3>编辑信息</h3>
            <form id="edit-form">
                <div>
                    <label for="name">姓名</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        :value="editStudentInfo.name" 
                        @input="editStu($event, 'name')"
                        maxlength="5"
                        minlength="2"
                    >
                </div>
                <div>
                    <label for="">性别</label>
                    <input 
                        type="radio" 
                        name="sex" id="male" 
                        value="0" 
                        :checked="editStudentInfo.sex === 0" 
                        @change="user.sex = 0"
                    >
                    <label for="male" class="label-sex">男</label>
                    <input 
                        type="radio" 
                        name="sex" 
                        id="female" 
                        value="1" 
                        :checked="editStudentInfo.sex === 1" 
                        @change="user.sex = 1"
                    >
                    <label for="female" class="label-sex">女</label>
                </div>
                <div>
                    <label for="sNo">学号</label>
                    <input 
                        type="text" 
                        id="sNo" 
                        name="sNo" 
                        readonly 
                        :value="editStudentInfo.sNo"
                    >
                </div>
                <div>
                    <label for="email">邮箱</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        :value="editStudentInfo.email" 
                        @input="editStu($event, 'email')"
                    >
                </div>
                <div>
                    <label for="birth">出生年</label>
                    <input 
                        type="text" 
                        id="birth" 
                        name="birth" 
                        :value="editStudentInfo.birth" 
                        @input="editStu($event, 'birth')"
                        maxlength="4"
                    >
                </div>
                <div>
                    <label for="phone">手机号</label>
                    <input 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        :value="editStudentInfo.phone" 
                        @input="editStu($event, 'phone')"
                        maxlength="11"
                    >
                </div>
                <div>
                    <label for="address">住址</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        :value="editStudentInfo.address" 
                        @input="editStu($event, 'address')"
                    >
                </div>
                <div>
                    <label for=""></label>
                    <input 
                        type="submit" 
                        class="btn" 
                        id="edit-submit-btn" 
                        @click.prevent="commit"
                    >
                    <input 
                        type="button" 
                        value="取消" 
                        class="btn cancel" 
                        @click="setShowModal(false)">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
    data () {
        return {
            user : {}
        }
    },
    methods : {
        ...mapMutations(['setShowModal']),
        ...mapActions(['getStudentList', 'updateStu']),
        editStu (e, prop) {
            this.user[prop] = e.target.value;
        },
        commit () {
            const user = Object.assign({}, this.editStudentInfo, this.user);
            this.updateStu(user).then( res => {
                this.$toast(res);
            })
        }
    },
    computed : {
        ...mapState(['editStudentInfo'])
    }
}
</script>