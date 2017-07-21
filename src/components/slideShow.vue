<template>
 <div class="slide-show" @mouseover="clearPlay" @mouseout="autoPlay">
  
   <div class="slide-img">
      <a :href="slideList[nowIndex].href">
          <transition name="slide-trans">
             <img v-if="isShow" :src="slideList[nowIndex].src">
          </transition>
          <transition name="slide-trans-old">
            <img v-if="!isShow" :src="slideList[nowIndex].src">
          </transition>

          
      </a>
    </div>
    
    <h2>{{slideList[nowIndex].title}}</h2>
    <ul class="slide-pages">
      <li @click="slide(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slideList">
        <a :class="{current:nowIndex === index}" @click="slide(index)">{{index+1}}</a>
      </li>
      <li @click="slide(nextIndex)">&gt;</li>
    </ul>
</div>
</template>

<script>
export default {
  props: {
    slideList: {
      type: Array,
      default: []
    },
    speed:{
      type:Number,
      default:1000
    }
  },
  data () {
    return {
      nowIndex: 0, //默认幻灯片显示项
      len: 0,
      isShow:true
    }
  },
  mounted (){ //编译完成后执行
    this.$nextTick(function(){
			this.len = this.slideList.length;
      this.autoPlay();
    })
  },
  computed:{ //计算属性，自动同步
    prevIndex () {     
      if (this.nowIndex === 0) {
        return this.len - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.len - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }

  },
  methods:{
    slide (index){//图片切换
      this.isShow = false; //old的过渡效果
      setTimeout(()=>{ 
        this.isShow = true;    
        this.nowIndex = index;  
      },10); //10时间之后新的过渡进来

    },
    autoPlay (){
      this.timer = setInterval(() =>{
        this.slide(this.nextIndex);
      },this.speed);
    },
    clearPlay (){
      clearInterval(this.timer);
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .current {
  font-weight: bold;
  color: #f30;
}
</style>
</style>