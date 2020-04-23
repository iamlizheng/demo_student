<template>
    <div :class="{'fade-out':style}" class="toast" v-if='ifShow'>    
        <div class="toast-warp" :style="{'backgroundColor':color}">
            <span class="toast-span-1">{{ icon }}</span>
            <span class="toast-span-2">{{ msg }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ifShow : true,
            style : false,
        }
    },
}
</script>

<style scoped>
    @keyframes fade-in {
        0%{
            top:0;
            opacity:0;
        }
        100%{
            top:10%;
            opacity:.8;
        }
    }
    @keyframes fade-out {
        100%{
            top:0;
            opacity:0;
        }
        0%{
            top:10%;
            opacity:.8;
        }
    }
    .toast {
        position:fixed;
        top:10%;
        left:50%;
        animation:fade-in .6s;
    }
    .toast.fade-out {
        animation:fade-out .6s;
    }
    .toast-warp {
        display:flex;
        padding:20px 30px;
        border-radius:10px;
    }
    .toast-span-1,
    .toast-span-2{
        color:#fff;
        margin:0 15px;
    }
</style>