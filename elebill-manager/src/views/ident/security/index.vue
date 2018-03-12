<template>
    <div class="securityBox">
        <div class="security">
            <div class="securityTitle">
                风投相册
            </div>
            <div class="securityNav">
                <div class="securityNavList">
                    <a class="securityNavItem" v-for="(statusItem,index) in statusList" 
                    v-bind:class="{topNavRightItemActive:statusChoose==index}"
                    @click="clickNav(index,statusItem.eName)"
                    :key="statusItem.eName">{{statusItem.cName}}</a>
                </div>
                <div class="uploadBtn">
                    <Upload
                        class="uploadFile_btn" 
                        ref="uploadFile" 
                        :show-upload-list="false"
                        :default-file-list="uploadList"
                        :on-success="handleSuccess" 
                        :on-format-error="handleFormatError"
                        :on-exceeded-size="handleMaxSize" 
                        action="/common/upload"
                        style="width:80px;" >
                        <div class="uploadBtn_txt">上 传</div>
                    </Upload>
                </div>
            </div>
            <div class="securityContent">
                <ul class="securityList">
                    <li class="securityItem" v-for="(item,index) in uploadList" :key="index">
                        <template v-if="item.status!= 'finished'">
                            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                        </template>
                    </li>
                    <li class="securityItem" v-if="recordList.length>0" v-for="(imgItem,index) in recordList" :key="index" >
                        <div class="imgItemBox" v-if="imgItem.billImgCategory=='video'">
                            <video controls="controls">
                                <source :src="imgItem.billImg" type="video/mp4">
                            </video>
                        </div>
                        <div class="imgItemBox" v-else>
                            <img :src="imgItem.billImg" alt="">
                        </div>
                        <div class="imgBottom">
                            <div class="createDate">{{(new Date(imgItem.createDate).getFullYear())+'-'+((new Date(imgItem.createDate).getMonth()+1)>9?(new Date(imgItem.createDate).getMonth()+1):'0'+(new Date(imgItem.createDate).getMonth()+1))+'-'+((new Date(imgItem.createDate).getDate())>9?(new Date(imgItem.createDate).getDate()):'0'+(new Date(imgItem.createDate).getDate()))}}</div>
                            <div class="deleteBtn" @click="deleteImg(imgItem.billImgId)">删除</div>
                        </div>
                    </li>
                    <li class="securityNone" v-if="recordList.length==0" >
                        空空如也~~快去上传吧~~
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {securityList,securityUpload,securityDelete} from '../../../assets/js/billApi'

    export default {
        name: 'Security',
        components:{

        },
        data () {
            return {
                statusChoose:0,
                statusList:[
                    {
                        cName:'背书记录',
                        eName:'endorse'
                    },
                    {
                        cName:'转账记录',
                        eName:'account'
                    },
                    {
                        cName:'优质企业合作记录',
                        eName:'cooperate'
                    },
                    {
                        cName:'财务视频',
                        eName:'video'
                    }
                ],
                recordList:'',
                total:0,
                current:1,
                visible:false,
                imgName:'',
                uploadList:[],
                billImgs:'',
                billImgCategory:'endorse',
                createDate:''
            }
        },
        created:function(){
            console.log(this.uploadList)
            this.getrecordList(1,'endorse');
        },
        methods:{
            // 上传成功
            handleSuccess (res,file,fileList) {
                this.uploadList = fileList;
                console.log(this.uploadList)
                if(res.data.indexOf('http://')==-1&&res.data.indexOf('https://')==-1){
                    file.url = "http://"+res.data;
                }else{
                    file.url = res.data;
                }
                file.name = file.url;
                if(fileList.length==1){
                    this.billImgs = fileList[0].url;
                }else{
                    this.billImgs = '';
                    for(let i=0;i<fileList.length;i++){
                        var newUrl = fileList[i].url;
                        this.billImgs += newUrl+',';
                    }
                    this.billImgs =(this.billImgs.substring(this.billImgs.length-1)==',')?this.billImgs.substring(0,this.billImgs.length-1):this.billImgs;
                    console.log(this.billImgs)
                }
                this.upload();
            },
            // 预览
            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            // 删除照片
            handleRemove() {
                this.uploadList.splice(this.uploadList[0], 1);
                this.billImgs = '';
            },
            // 上传失败
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            // 图片大小不能超过2M
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            clickNav:function(index,billImgCategory){
                var self = this;
                self.statusChoose = index;
                self.billImgCategory = billImgCategory;
                self.getrecordList(1,billImgCategory);
            },
            getrecordList:function(currentPage,billImgCategory){
                var self = this;
                securityList({
                    billImgCategory:billImgCategory,
                    pageSize:12,
                    currentPage:currentPage
                },{emulateJSON:true,credentials:true}).then(function(res){
                    console.log(res)
                    self.recordList = res.data.data.recordList;
                })
            },
            close:function(){
                this.visible = false;
                this.uploadList = [];
            },
            upload:function(){
                var self = this;
                securityUpload({
                    billImgCategory:self.billImgCategory,
                    billImgs:self.billImgs
                }).then(function(res){
                    if(res.data.code==200){
                        self.$Message.success('上传成功');
                        self.uploadList = [];
                        self.getrecordList(1,self.billImgCategory);
                    }
                })
            },
            deleteImg:function(billImgId){
                var self = this;
                self.$Modal.confirm({
                    title:'提示',
                    content:'您确定删除该图片吗？',
                    onOk:function(){
                        securityDelete({
                            billImgId:billImgId
                        }).then(function(){
                            self.getrecordList(1,self.billImgCategory);
                            self.$Message.success('操作成功');
                        })
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.mark{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.6)
}
.securityBox{
    width: 983px;
    height: auto;
    margin: 0 auto;
    .security {
        width: 983px;
        height: auto;
        margin: 0 auto;
        background: #fff;
        img{
            cursor: pointer;
        }
        .securityTitle{
            width: 100%;
            height: 58px;
            line-height: 58px;
            padding: 0 20px;
            border-bottom: 1px solid #eee;
        }
        .securityNav{
            width: 100%;
            height: 44px;
            line-height: 44px;
            padding: 0 20px;
            overflow: hidden;
            .securityNavList{
                float: left;
                .securityNavItem{
                    min-width: 100px;
                    height: 44px;
                    line-height: 44px;
                    color: #fff;
                    background: #ddd;
                    border-radius: 4px;
                    float: left;
                    margin-right: 10px;
                    text-align: center;
                    padding: 0 10px;
                }
                .securityNavItem:hover{
                    background: #f71327;
                }
                .topNavRightItemActive{
                    background: #f71327;
                }
            }
            .uploadBtn{
                float: left;
                cursor: pointer;
                width: 80px;
                height: 32px;
                line-height: 32px;
                color: #fff;
                background: #f71327;
                text-align: center;
                margin: 5px 20px;
                .uploadBtn_txt{
                    width: 80px;
                    height: 32px;
                }
            }
        }
        .popBox{
            width: 800px;
            height: 500px;
            border: 1px solid #eee;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -250px;
            margin-left: -400px;
            z-index: 99;
            border-radius: 5px;
            background: #fff;
            .popTitle{
                width: 100%;
                height: 50px;
                line-height: 50px;
                border-bottom: 1px solid #eee;
                .popTip{
                    color: #000;
                    font-size: 16px;
                    width: 600px;
                    padding:0 20px;
                    float: left;
                }
                .popClose{
                    color: #ccc;
                    font-size: 28px;
                    float: right;
                    padding: 0 20px;
                    cursor: pointer;
                }
            }
            .uploadImgList{
                width: 100%;
                height: 390px;
                padding: 20px;
                overflow-y: auto;
                .uploadImgItem{
                    display:inline-block;
                    width: 250px;
                    height: 160px;
                    text-align: center;
                    line-height: 160px;
                    border-radius: 4px;
                    overflow: hidden;
                    background: transparent;
                    position: relative;
                    margin-right: 4px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .uploadImgItemCover{
                        display: none;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: rgba(0,0,0,.6);
                    }
                    .uploadImgItemCover i{
                        color: #fff;
                        font-size: 24px;
                        cursor: pointer;
                        margin: 0 2px;
                    }
                }
                .uploadImgItem:hover {
                    .uploadImgItemCover{
                        display: block;
                    }
                }
                .uploadImgItem:nth-child(3),
                .uploadImgItem:nth-child(6),
                .uploadImgItem:nth-child(9){
                    margin-right: 0;
                }
                .ensureUpload{
                    width: 120px;
                    height: 32px;
                    line-height: 32px;
                    text-align: center;
                    color: #fff;
                    background: #f71327;
                    margin: 10px auto;
                    cursor: pointer;
                }
            }
            .popBottom{
                width: 100%;
                height: 60px;
                text-align: center;
                padding: 10px 20px;
                border-top: 1px solid #eee;
                .ensure{
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                    color: #fff;
                    background: #f71327;
                    float: right;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .cancel{
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                    color: #fff;
                    background: #eee;
                    float: right;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-right: 30px;
                }
            }
        }
        .securityContent{
            width: 983px;
            height: auto;
            .securityList{
                width: 100%;
                height: auto;
                padding: 20px;
                .securityItem{
                    width: 180px;
                    height: 140px;
                    float: left;
                    margin:0 20px 20px 0;
                    .imgItemBox{
                        video{
                            display: block;
                            width: 180px;
                            height: 120px;
                        }
                    }
                    img{
                        display: block;
                        width: 180px;
                        height: 120px;
                    }
                    .imgBottom{
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        color: #fff;
                        background: #cbcbcb;
                        padding: 0 5px;
                        .createDate{
                            float: left;
                        }
                        .deleteBtn{
                            float: right;
                            cursor: pointer;
                        }
                    }
                }
                .securityNone{
                    width: 100%;
                    height: auto;
                    padding: 50px 0 0;
                    text-align: center
                }
            }
        }
    }
}
</style>
