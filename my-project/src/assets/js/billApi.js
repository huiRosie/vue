import fetch from './fetch'

// 获取汇票列表
export function fetchBillList(query){
    return fetch({
        url:'/bill/page',
        method:'post',
        data:query
    })
}

// 获取汇票详情
export function getBillDetail(query){
    return fetch({
        url:'/bill/info',
        method:'get',
        params:query
    })
}

// 发布汇票
export function publishBill(query){
    return fetch({
        url:'/bill/publish',
        method:'post',
        data:query
    })
}

// 票据竞价
export function quoteBill(query){
    return fetch({
        url:'/bill/quote/bidding',
        method:'post',
        data:query
    })
}

// 竞价列表
export function quoteBillList(query){
    return fetch({
        url:'/bill/quote/page',
        method:'get',
        data:query
    })
}

// 放弃竞价
export function refuseBill(query){
    return fetch({
        url:'/bill/quote/refuse',
        method:'post',
        data:query
    })
}

// 撤回汇票
export function revokeBill(query){
    return fetch({
        url:'/bill/revoke',
        method:'post',
        data:query
    })
}

