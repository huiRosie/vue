<template>
    <div class="dragBox" v-if="visible" @mousedown="drag">
        <div class="dragBoxTitle">
            <div class="dragBoxTip">查看大图</div>
            <div class="dragBoxClose" @click="close">X</div>
        </div>
        <div class="dragBoxImg">
            <img src="http://www.xiaomoc.top/group1/M00/00/0C/eE0NXVqPaJWAUenXAAERE043uT0659.jpg" style="width: 100%">
        </div>
        <div class="dragBoxBottom">
            <div class="dragBoxClose" @click="close">关闭</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DragBox',
    data() { 
      return {
          visible:false
      }
    },
    methods: { 
        close:function(){
            this.visible = false;
        },
        drag:function(e){
            // console.log(e)
            var oDiv=e.path[1];
            var disX = e.clientX -oDiv.offsetLeft -540;
            var disY = e.clientY - oDiv.offsetTop -280;
            document.onmousemove=function(e){
                e.preventDefault();
                var l = e.clientX-disX;
                var t = e.clientY-disY;
                oDiv.style.left = l+'px';
                oDiv.style.top = t+'px';
            }
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
            }
        }
    }
  }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .dragBox{
        width: 1080px;
        height: 560px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -280px;
        margin-left: -540px;
        z-index: 99;
        border:1px solid #ccc;
        border-radius: 5px;
        background: #fff;
        cursor: move;
        .dragBoxTitle{
            width: 100%;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ccc;
            .dragBoxTip{
                float: left;
                padding-left: 20px;
            }          
            .dragBoxClose{
                float: right;
                padding-right: 20px;
                cursor: pointer;
                font-size: 20px;
                color: #ccc;
            }
        }
        .dragBoxImg{
            width: 1078px;
            height: 458px;
            padding: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .dragBoxBottom{
            width: 100%;
            height: 60px;
            line-height: 40px;
            border-top: 1px solid #ccc;
            .dragBoxClose{
                float: right;
                cursor: pointer;
                width: 80px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                background: #f71327;
                color: #fff;
                border-radius: 4px;
                margin:10px 20px;
            }
        }
    }
</style>
