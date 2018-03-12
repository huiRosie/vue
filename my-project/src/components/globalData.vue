<script type="text/javascript">    
    export default{
        name:'globalData',
        data:{
            // Ip:'http:/'+'/192.168.11.26',
            // Ip:'https:/'+'/www.elebill.com',
            // Ip:'https://www.elebill.com',
            // Ip:'http://192.168.11.26',
            Ip:'.',
            loginStatus:'登录',
        },
        methods:{
            //  调取接口，获取用户认证信息
            getUserInfo:function(){
                var self = this;
                self.$http.get(self.Ip+'/user/info',{credentials:true}).then(function(res){ 
                    // console.log(res);   
                    self.userName = res.data.data.userName;                          
                    self.userPhone = res.data.data.userPhone;                          
                    self.userEmail = res.data.data.userEmail;                          
                    self.userAuth = res.data.data.userAuth;                          
                    self.companyAuth = res.data.data.companyAuth;
                    localStorage.setItem('eleUserAuth',self.userAuth);                         
                    localStorage.setItem('eleCompanyAuth',self.companyAuth);                         
                })
            },
            // 获取用户认证信息
            getAuthInfo:function(){
                var userAuth = localStorage.getItem('eleUserAuth');     
                var companyAuth = localStorage.getItem('eleCompanyAuth');     
            },
            bidBill:function(billId){
                 console.log(billId)
                this.$router.push({ name:'InDetail', params: { billId: billId }})
            },
            // 日期倒计时
            countDown:function(countDate){
                // var countDate = '2017-12-12';
                var cYear = countDate.slice(0,4);
                var cMonth = this.addNum(countDate.slice(5,7));
                var cDay = this.addNum(countDate.slice(8,10));
                //slice(start,end)不包括start，包括end
                // 剩余天数
                var leftDate = (new Date(cYear,cMonth-1,cDay)) - (new Date());
                var leftDays = parseInt(leftDate / 1000 / 60 / 60 / 24 ,10); //计算剩余的天数 
                return leftDays;
            },
            // 日期倒计时
            countDowns:function(countDate,newDate){
                var cYear = countDate.slice(0,4);
                var cMonth = this.addNum(countDate.slice(5,7));
                var cDay = this.addNum(countDate.slice(8,10));
                // 剩余天数
                var leftDate = (new Date(cYear,cMonth-1,cDay)) - (new Date());
                var leftDays = parseInt(leftDate / 1000 / 60 / 60 / 24 ,10); //计算剩余的天数 
                return leftDays;
            },
            changeVueDate:function(dates,fmt) {
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1,(dates.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                let o = {
                    'M+': dates.getMonth() + 1,
                    'd+': dates.getDate(),
                    'h+': dates.getHours(),
                    'm+': dates.getMinutes(),
                    's+': dates.getSeconds()
                };
                for (let k in o) {
                    if (new RegExp(`(${k})`).test(fmt)) {
                        let str = o[k] + '';
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
                    }
                }
                return fmt;
            },
            padLeftZero:function (str) {
                return ('00' + str).substr(str.length);
            },
            // 数字自动转换成中文
            changeWord:function () {
                var num = this.billMoney;
                if(num>100000000000){
                    this.billMoney = 100000000000;
                    num = 100000000000
                    const title = '提示';
                    const content = '<p>票面金额输入有误，请重新输入！</p>';
                    this.$Modal.info({
                        title: title,
                        content: content
                    });
                }
                if(!/^(0|[1-9]\d*)(\.\d+)?$/.test(num)){
                    return "";
                }
                var unit = "千百拾亿千百拾万千百拾元角分";
                var	str = "";
                num += "00";
                var p = num.indexOf('.');
                if(p >= 0){
                    num = num.substring(0, p) + num.substr(p + 1, 2);
                }
                unit = unit.substr(unit.length - num.length);
                for(var i = 0; i < num.length; i++){
                    str += '零壹贰叁肆伍陆柒捌玖'.charAt(num.charAt(i)) + unit.charAt(i);
                }	
                this.billMoneyChange = str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g,"零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
                return this.billMoneyChange;
            },
            changeDate:function(dates) { 
                var year = dates.getFullYear(); 
                var month = dates.getMonth() + 1; 
                var days = dates.getDate(); 
                return year + "-" + addNum(month) + "-" + addNum(days); 
            },
            // 不足两位前面加0
            addNum:function(num){
               return  num > 9 ? num : '0'+num 
            },
            //封装过期控制代码localStorage存储
            setData:function (key,value){
                var curTime = new Date().getTime();
                localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
            },
            //localStorage取值
             getData:function(key){
                var data = localStorage.getItem(key);
                var dataObj = JSON.parse(data);
                console.log(dataObj)
                if(data==null){
                    this.$router.push('/login');
                }
                var dataObiTime = ((new Date().getTime() - dataObj.time)/1000/60).toFixed(2);//分钟
                if (dataObiTime>120) {
                    this.$router.push('/login');
                }else{
                    var dataObjToJson = dataObj.data;
                    return dataObjToJson;
                }
            },
            //localStorage删除指定键对应的值
            deleteItem:function (key){
                localStorage.removeItem(key);
            }
        }
    }
</script>
