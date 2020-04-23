import Vue from 'vue'
import toast from './Toast.vue'

const Toast = Vue.extend(toast);

const icons = {
    success : 'o(^▽^)o',
    fail : '(￣▽￣)',
    info : '温馨提示！'
}
const colors = {
    success : '#67C23A',
    fail : '#F56C6C',
    info : '#E6A23C'
}
const durations = {
    success : 1500,
    fail : 3000,
    info : 4000
}

//生成消息提示组件的函数
export default function ({msg='ok', type='success', duration, callback=null}) {
    duration || (duration = durations[type]);
    const vm = new Toast({
        el : document.createElement('div'),
        data () {
            return {
                msg,
                icon : icons[type],
                color : colors[type]
            }
        }
    });
    document.body.appendChild(vm.$el);
    setTimeout( _ => {
        vm.$data.style = true;
    }, duration - 200)
    setTimeout( _ => {
        vm.$data.ifShow = false;
        callback && callback({type, msg});
    }, duration)
}