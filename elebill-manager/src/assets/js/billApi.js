import fetch from './fetch'

// 登录
export function loginIn(query){
    return fetch({
        url:'/manager/user/login',
        method:'post',
        data:query
    })
}

// 发布汇票
export function fetchPublishBill(query){
    return fetch({
        url:'/manager/bill/publish',
        method:'post',
        params:query
    })
}

// 获取汇票详情
export function fetchBillDetail(query){
    return fetch({
        url:'/manager/bill/center/billinfo',
        method:'get',
        params:query
    })
}

// 获取订单详情
export function fetchBillOrderDetail(query){
    return fetch({
        url:'/manager/bill/center/orderinfo',
        method:'get',
        params:query
    })
}

// 获取报价汇票详情
export function fetchQuoteBillDetail(query){
    return fetch({
        url:'/manager/bill/outcenter/quoteinfo',
        method:'get',
        params:query
    })
}

// 出票中心
// 获取出票中心汇票列表
export function fetchOutBillList(query){
    return fetch({
        url:'/manager/bill/outcenter',
        method:'get',
        params:query
    })
}

//出票中心 竞价列表
export function fetchQuoteList(query){
    return fetch({
        url:'/manager/bill/outcenter/quotes',
        method:'get',
        params:query
    })
}

//出票中心 竞价列表  立即下单
export function fetchPreBill(query){
    return fetch({
        url:'/manager/bill/outcenter/quoteorder',
        method:'post',
        params:query
    })
}

//出票中心 竞价列表  撤销竞价
export function fetchOutTradeBill(query){
    return fetch({
        url:'/manager/bill/outcenter/quoterevoke',
        method:'post',
        params:query
    })
}

//出票中心 撤销交易 票据下架  
export function fetchFailBill(query){
    return fetch({
        url:'/manager/bill/outcenter/billfinish',
        method:'post',
        params:query
    })
}

//出票中心 取消交易
export function fetchRevokeBill(query){
    return fetch({
        url:'/manager/bill/outcenter/orderrevoke',
        method:'post',
        params:query
    })
}

//出票中心 撤销竞价
export function fetchQuoteRevokeBill(query){
    return fetch({
        url:'/manager/bill/outcenter/quoterevoke',
        method:'post',
        params:query
    })
}

//出票中心 票据背书
export function fetchEndorseBill(query){
    return fetch({
        url:'/manager/bill/outcenter/orderendorse',
        method:'post',
        params:query
    })
}


// 收票中心
// 获取收票中心汇票列表
export function fetchInBillList(query){
    return fetch({
        url:'/manager/bill/incenter',
        method:'get',
        params:query
    })
}

//收票中心 交易成功或失败
export function fetchTradeBill(query){
    return fetch({
        url:'/manager/bill/incenter/billtrade',
        method:'post',
        data:query
    })
}

// 收票中心 汇票审核
export function checkBill(query){
    return fetch({
        url:'/manager/bill/incenter/validate',
        method:'post',
        data:query
    })
}

//收票中心 立即下单
export function fetchOrderBill(query){
    return fetch({
        url:'/manager/bill/incenter/billorder',
        method:'post',
        data:query
    })
}

//收票中心 完成付款
export function fetchPaymentBill(query){
    return fetch({
        url:'/manager/bill/incenter/billpayment',
        method:'post',
        data:query
    })
}
 
//收票中心 签收汇票
export function fetchSignBill(query){
    return fetch({
        url:'/manager/bill/incenter/billsign',
        method:'post',
        data:query
    })
}
 
//收票中心 撤销交易
export function fetchCancelBill(query){
    return fetch({
        url:'/manager/bill/incenter/billrevoke',
        method:'post',
        data:query
    })
}
 



// 认证审核
// 用户认证信息列表
export function identPerList(query){
    return fetch({
        url:'/manager/auth/userAuth',
        method:'get',
        params:query
    })
}

// 企业认证信息列表
export function identComList(query){
    return fetch({
        url:'/manager/auth/companyAuth',
        method:'get',
        params:query
    })
}

// 用户认证信息详情  企业认证信息详情
export function fetchUserInfo(query){
    return fetch({
        url:'/manager/auth/userInfo',
        method:'get',
        params:query
    })
}

// 企业认证 通过 未通过
export function fetchCompanyCheck(query){
    return fetch({
        url:'/manager/auth/companyAuth',
        method:'post',
        params:query
    })
}

// 用户认证 通过 未通过
export function fetchPersonCheck(query){
    return fetch({
        url:'/manager/auth/userAuth',
        method:'post',
        params:query
    })
}


// 获取管理员信息详情
export function fetchAdminInfo(query){
    return fetch({
        url:'/user/info',
        method:'get',
        params:query
    })
}

// 编辑管理员信息
export function fetchEditAdminInfo(query){
    return fetch({
        url:'/user/info/edit',
        method:'post',
        params:query
    })
}


// 用户功能 修改密码
export function fetchChangePwd(query){
    return fetch({
        url:'/user/info/changePwd',
        method:'post',
        params:query
    })
}