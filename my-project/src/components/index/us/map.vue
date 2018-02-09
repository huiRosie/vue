<template>
    <!--地图容器-->
	<div style="width:1055px;height:552px;margin:0 auto;" id="dituContent"></div>
</template>

<script>
export default {
  name: 'Mymap',
  data () {
    return {
      markerArr : [{
                title:'武汉小墨科技有限公司',
                content: '武汉市洪山区光谷大道41号现代光谷世贸中心A座1108',
                point: 114.428188 + '|' + 30.478188,
                isOpen: 0,
                icon: {
                    w: 23,
                    h: 25,
                    l: 46,
                    t: 21,
                    x: 9,
                    lb: 12
                }
            }]
    }
  },
  mounted(){
      this.initMap();
  },
  methods:{
      //创建和初始化地图函数：
		initMap() {
			this.createMap(); //创建地图
			this.setMapEvent(); //设置地图事件
			// this.addMapControl(); //向地图添加控件
			this.addMarker(); //向地图中添加marker
		},

		//创建地图函数：
		createMap() {
			var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
			var point = new BMap.Point(114.428188, 30.478188); //定义一个中心点坐标
			map.centerAndZoom(point, 15); //设定地图的中心点和坐标并将地图显示在地图容器中
			window.map = map; //将map变量存储在全局
		},

		//地图事件设置函数：
		setMapEvent(){
			map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
			map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
			map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
			map.enableKeyboard(); //启用键盘上下左右键移动地图
		},

		//地图控件添加函数：
		addMapControl(){
			//向地图中添加缩放控件
			// var ctrl_nav = new BMap.NavigationControl({
			// 	anchor: BMAP_ANCHOR_TOP_LEFT,
			// 	type: BMAP_NAVIGATION_CONTROL_LARGE
			// });
			// map.addControl(ctrl_nav);
			// //向地图中添加缩略图控件
			// var ctrl_ove = new BMap.OverviewMapControl({
			// 	anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
			// 	isOpen: 1
			// });
			// map.addControl(ctrl_ove);
			// //向地图中添加比例尺控件
			// var ctrl_sca = new BMap.ScaleControl({
			// 	anchor: BMAP_ANCHOR_BOTTOM_LEFT
			// });
			// map.addControl(ctrl_sca);
		},

		//标注点数组
		//创建marker
		addMarker() {
            var markerArr = this.markerArr;
			for(var i = 0; i < markerArr.length; i++) {
				var json = markerArr[i];
				var p0 = json.point.split("|")[0];
				var p1 = json.point.split("|")[1];
				var point = new BMap.Point(p0, p1);
				var iconImg = this.createIcon(json.icon);
				var marker = new BMap.Marker(point, {
					icon: iconImg
				});
				var iw = this.createInfoWindow(i);
				var label = new BMap.Label(json.title, {
					"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
				});
				marker.setLabel(label);
				map.addOverlay(marker);
				label.setStyle({
					borderColor: "#808080",
					color: "#333",
					cursor: "pointer"
				});
				var self = this;
				(function() {
					var index = i;
					var _iw = self.createInfoWindow(i);
					var _marker = marker;
					_marker.addEventListener("click", function() {
						this.openInfoWindow(_iw);
					});
					_iw.addEventListener("open", function() {
						_marker.getLabel().hide();
					})
					_iw.addEventListener("close", function() {
						_marker.getLabel().show();
					})
					label.addEventListener("click", function() {
						_marker.openInfoWindow(_iw);
					})
					if(!!json.isOpen) {
						label.hide();
						_marker.openInfoWindow(_iw);
					}
				})()
			}
		},
		//创建InfoWindow
		createInfoWindow(i) {
			var json = this.markerArr[i];
			var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>" + json.content + "</div>");
			return iw;
		},
		//创建一个Icon
		createIcon(json) {
			var icon = new BMap.Icon("http://api.map.baidu.com/lbsapi/creatmap/images/us_mk_icon.png", new BMap.Size(json.w, json.h), {
				imageOffset: new BMap.Size(-json.l, -json.t),
				infoWindowOffset: new BMap.Size(json.lb + 5, 1),
				offset: new BMap.Size(json.x, json.h)
			})
			return icon;
		}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html,
    body {
        margin: 0;
        padding: 0;
    }
    
    .iw_poi_title {
        color: #CC5522;
        font-size: 14px;
        font-weight: bold;
        overflow: hidden;
        padding-right: 13px;
        white-space: nowrap
    }
    
    .iw_poi_content {
        font: 12px arial, sans-serif;
        overflow: visible;
        padding-top: 4px;
        white-space: -moz-pre-wrap;
        word-wrap: break-word
    }
</style>
