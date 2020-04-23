<template>
    <div class="search">
        <input type="text" id="search-inp" placeholder="请输入搜索内容" v-model="font">
        <button id="search-btn" @click="serachStu">搜索</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            font : ''
        }
    },
    methods : {
        serachStu () {
            this.$toast({
                msg : '目前暂不支持该功能！',
                type : 'info'
            })
            this.font = '';
        }
    }
}
</script>