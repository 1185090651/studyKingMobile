import { request } from "./request";

// 登录
export async function Login(info) {
    let { data: res} = await request({
        url: '/login',
        method: 'post',
        data: info
    })
    return res
}

// 注册
export async function Register(info) {
    let { data: res} = await request({
        url: '/register',
        method: 'post',
        data: info
    })
    return res
}

// 获取资料列表
export async function getResource(username) {
    let { data: res } = await request({
        url: '/resource/getlist',
        method: 'get',
        params: {username}
    })
    return res
}

// 获取通知列表
export async function getNotify(sub_id) {
    let { data: res } = await request({
        url: '/notify/getlist',
        method: 'get',
        params: sub_id
    })
    return res
}

// 获取讨论列表
export async function getDiscussion(info) {
    let { data: res } = await request({
        url: '/discussion/getlist',
        method: 'get',
        params: info
    })
    return res
}

// 添加讨论
export async function addDisStu(info) {
    let { data: res} = await request({
        url: '/discussion/adddisstu',
        method: 'post',
        data: info
    })
    return res
}

// 获取作业
export async function getHwStu(info) {
    let { data: res} = await request({
        url: '/homework/gethwstu',
        method: 'get',
        params: info
    })
    return res
}

// 获取题目
export async function getQuestion(info) {
    let { data: res} = await request({
        url: '/homework/getquestion',
        method: 'get',
        params: info
    })
    return res
}

// 提交答案
export async function submitAnswer(info) {
    let { data: res} = await request({
        url: '/homework/submitanswer',
        method: 'post',
        data: info
    })
    return res
}