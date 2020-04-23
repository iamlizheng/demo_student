import Axios from 'axios'
import Urls from './Urls'

// const appkey = 'DuYiyongzhi_1564986206465';


const appkey = 'iamlizheng_1587656454686';

const request = Axios.create({
        baseURL : 'http://open.duyiedu.com'
            //axios v0.18.0以前此写法无效，官方无解释
    // params : {
    //     appkey
    // }
});

const re = Axios.create({
    baseURL : 'http://localhost:8083',
});


//请求学生信息，参数：page=当前获取页数，size=每页大小
function findByPage ( page, size ) {
    return request.get(Urls.findByPage, {
        params : {
            appkey,
            page,
            size
        }
    })
}
//更改指定学生信息，参数：options=修改的信息对象
function updateStu (options) {
    return request.get(Urls.updateStu,{
        params : {
            ...options
        }
    })
}

//删除指定学生信息，参数：studentNumber=学生学号
function delStu (studentNumber) {
    return request.get(Urls.delStu,{
        params : {
            appkey,
            sNo : studentNumber
        }
    })
}

//增加学生信息，参数：options=学生信息对象
function addStu (options) {
    return request.get(Urls.addStu, {
        params : {
            appkey,
            ...options
        }
    })
}

//搜索学生,后端接口目前有问题，暂不使用
// function searchStu (options) {
//     return request.get(Urls.searchStu,{
//         params : {
//             appkey,
//             ...options
//         }
//     })
// }

//登陆，后端接口目前有问题，暂不使用
// function stuLogin (options) {
//     return request.post(Urls.stuLogin, {
//         appkey,
//         ...options
//     })
// }

// 注册，后端接口目前有问题，暂不使用
// function stuRegister (options) {
//     return request.post(Urls.stuRegister, {
//                 appkey,
//             ...options
//     })
// }

//用户登陆状态验证
function logStatus () {
    if (window.sessionStorage.getItem('_log')) {
        return;
    }
    const flag = window.confirm('您还未登陆，请先进行登陆操作，谢谢！');
    this.$router.replace('/login');
}


export default {
    findByPage,
    updateStu,
    delStu,
    addStu,
    // searchStu,
    // stuLogin,
    // stuRegister,
    logStatus
}