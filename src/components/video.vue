<template>
<div>
  <p>{{msg}}</p>
  <div id="mod_player1" :style="{width:'900px'}"></div>
   <div class="videobox">
      <div class="mod_player" id="mod_player2"></div>
      <div class="playlist" id="playlist">
        <ul>
          <li v-for="(item,index) in videoDataList" :vid="item.vid" @click="gotoNextVideo(item,index)" :class="{current:index===videoIndex}">
            <a href="javascript:;" class="mod_poster">
              <img :src="item.pic496x280" :alt="item.title">
              <span class="video_tit">{{item.title}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div> 
</div>

</template>

<script>

// import Txplayer from "Txplayer"
// require('Txplayer')
export default {
  data () {
    return {
      msg: '这是放一个视频222',
      videoDataList:[],
      videoIndex:0,
      len:0
    }
  },
  mounted (){
    this.$nextTick(function(){
      this.oneVideo();


      var _this = this;
      var cid = "7ffruw1z8nwz6er"; //cid
      this.$http.jsonp('http://data.video.qq.com/fcgi-bin/data?tid=69&idlist=' + cid + '&appid=10001007&appkey=e075742beb866145&otype=json&callback=videoLs').then(function(response){
				console.log(response.body);
        _this.videoDataList = response.body.results[0].fields.video_ids;
        _this.len = _this.videoDataList.length;
        _this.moreVideo();
			})
      // $.ajax({
			// url: 'http://data.video.qq.com/fcgi-bin/data?tid=69&idlist=' + cid + '&appid=10001007&appkey=e075742beb866145&otype=json&callback=videoLs',
			// method: "get",
			// dataType: "jsonp",
			// jsonpCallback: "callBack",
			// success: function(res) {
      //     _this.videoDataList = res.results[0].fields.video_ids;
      //     _this.len = _this.videoDataList.length;
      //     _this.moreVideo();

      //   }
	    // });
    })
  },
  methods: {
    oneVideo (){
      
      var player1 = new Txplayer({
        containerId: 'mod_player1',
        vid: 'r0018hmh1pa',
        width: '100%',
        height: screen.availHeight/3,
        autoplay: 0

      });
    },
    moreVideo(){
      var _this = this;
      var vid = this.videoDataList[this.videoIndex].vid;
      this.player2 = new Txplayer({
          containerId: 'mod_player2',
          vid: vid,
          width: '100%',
          height: screen.availHeight/3,
          autoplay: 0
      });
      this.player2.on('playStateChange', function(data) {
        let state = data.state;
        console.log("state:"+state);
            /**
             * -1（未开始）
             * 0（已结束）
             1（正在播放）
             2（已暂停）
             3（正在缓冲）
             */
            switch (state) {
                case 0: // 播放结束
                    if(_this.videoIndex === _this.len-1){
                       _this.videoIndex = 0;
                    }else{
                      _this.videoIndex = _this.videoIndex + 1;
                    }
                    vid = _this.videoDataList[_this.videoIndex].vid;
                     _this.player2.play({
                        vid: vid
                    });
                    break;
                default:
                    break;
            }
        });
    },
    gotoNextVideo(item,index){
      this.videoIndex = index;
      this.moreVideo();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.videobox{
  width:900px;
  overflow: hidden;
}
.mod_player{
	width:500px;
	height:408px;
	float:left;
	display:inline;
	background:#000;
}
.playlist{
	float: right;
	display:inline;
	position:relative;
	width:308px;
	height:398px;
	margin-top:10px;
	overflow-y:auto;
  ul{
    overflow: hidden;
    position: relative;
    top: 0;
    li{
      border-bottom:1px dotted #e5e1d1;margin-bottom:8px;
      a{
        	display: block;
          height:70px;
          min-height:70px;
          padding:0 0 10px 0;
      }
    }
  }
}
.playlist li.current a{font-weight:bold;color: #f30}
.playlist li a:hover{cursor: pointer;}
.playlist img{
	float: left;
	display:inline;
	width: 120px;
	height:70px;
	margin-right: 10px;
}
.playlist a:hover{text-decoration: none;}
.playlist h4{
	color: #a6a6a6;
	margin-bottom:6px;
	font:normal 12px/20px simSun;
}
.playlist::-webkit-scrollbar,.jutoulist::-webkit-scrollbar{width:8px}
.playlist::-webkit-scrollbar-button,.jutoulist::-webkit-scrollbar-button{display:none}
.playlist::-webkit-scrollbar-button:vertical:end:increment,.jutoulist::-webkit-scrollbar-button:vertical:end:increment{display:block;height:4px;}
.playlist::-webkit-scrollbar-track,.jutoulist::-webkit-scrollbar-track{height:200px;border-radius:3px;}
.playlist::-webkit-scrollbar-button:vertical:end:increment{background-color:#ffcec7;}
.playlist::-webkit-scrollbar-track{background-color:#ffcec7;}
.playlist::-webkit-scrollbar-track-piece:vertical:start{width:4px;background:#ffcec7}
.playlist::-webkit-scrollbar-track-piece:vertical:end{width:4px;background:#ffcec7}
.playlist::-webkit-scrollbar-thumb:vertical{background:#f85c44;cursor:pointer}
.playlist{
	scrollbar-arrow-color:#f85c44;/*ie下上下箭头的颜色*/
	scrollbar-face-color:#f85c44;/*ie下滚动条的基本颜色*/
	scrollbar-track-color:#ffcec7;/*ie下立体滚动条背景颜色*/
	scrollbar-highlight-color:#f85c44;/*ie下滚动条空白部分的颜色*/
	scrollbar-3dlight-color:#616161;/*立体滚动条亮边的颜色*/
	scrollbar-shadow-color:#f85c44;/*ie下立体滚动条阴影的颜色*/
	scrollbar-darkshadow-color:#616161;/*立体滚动条强阴影的颜色*/
}
</style>
