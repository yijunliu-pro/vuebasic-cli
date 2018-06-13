<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <div class="head-nav">
          <ul class="nav-list">
            <li v-if="username !== ''">{{username}}</li>
            <li v-if="username === ''" @click="logDialog">登录</li>
            <li v-if="username === ''" class="nav-pile">|</li>

            <li v-if="username !== ''" @click="excitDialog">退出</li>
            <li v-if="username !== ''" class="nav-pile">|</li>

            <li v-if="username === ''" @click="regDialog">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutDialog">关于11</li>
          </ul>
        </div>  
      </div>
    </div>
    <div class="app-content layout">
      
      <!--路由S-->
      <div class="router-tab">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/router1">go to 路由1</router-link>
        <router-link to="/router2">go to 路由2</router-link>
      </div>
      <div class="router-cont">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <transition name="fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
        
      </div>
      <!--路由E-->

      <!--命名视图路由S-->
      <ul>
            <li>
                <router-link to="/">/</router-link>
            </li>
            <li>
                <router-link to="/other">/other</router-link>
            </li>
        </ul>
        <router-view class="view one" ></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
        <!--命名视图路由E-->

      <!--幻灯片组件S-->
      <slide-show :slideList="slideList" :speed="slideSpeed"></slide-show> 
      <!--幻灯片组件E-->


      <!--视频组件S-->
      <video-com></video-com>
      <!--视频组件E-->

      <!--左右滚动组件S-->
      <my-scroll :scrollList="scrollList"></my-scroll>
      <!--左右滚动组件E-->


      <!--页面元素的过渡切换S-->
      <div class="transSingle" :style="{width:'1000px',height:'50px',margin:'0 auto',background:'#ddd'}">
        <transition name="fade">
          <div v-show="show">
            过渡效果
          </div>
        </transition>
      </div>
      <button @click="show = !show">切换是否显示</button>
      <!--页面元素的过渡切换E-->


      <!--组件的过渡切换S-->
      <div class="transCom"  :style="{width:'1000px',height:'50px',margin:'0 auto',background:'#ddd'}">
        <transition name="animi" mode="out-in">
          <div :is="currentCom"></div>
        </transition>
      </div>
      <button @click="changeCom()">切换组件</button>
      <!--组件的过渡切换E-->

      <!--多元素过渡切换S-->
      <div :style="{width:'1000px',height:'50px',margin:'0 auto',background:'#ddd'}">
        <transition name="fade" mode="out-in">
          <p v-if="show2" key="1">第一个元素</p>
          <p v-else key="2">第二个原色</p>
        </transition>
      </div>
      <button @click="show2 = !show2">切换是否显示</button>
      <!--多元素过渡切换E-->

      <!--js实现过渡S-->
      
      <!--js实现过渡E-->

    </div>

    <!-- <hello></hello> -->
    <my-footer></my-footer>
    
    <!--弹出层组件-->
    
    <!--登录S-->
    <log-dialog  :items="items" :isShow="isLogDialogShow" @on-close="closeDailog('isLogDialogShow')">
      <my-login @has-login="succsessLog"></my-login>
    </log-dialog>
    <!--登录E-->

    <!--关于我们S-->
    <log-dialog :isShow="isAboutDialogShow" :items="items" @on-close="closeDailog('isAboutDialogShow')">
      <p>父组件的内容，子组件必须要有slot插槽，去替换slot插槽的内功，不然该部分不会显示</p>
      <!-- 具名slot -->
      <p slot="aboutus">关于我们的内容，</p>

      <!--作用域插槽-->
      <template slot="item" slot-scope="props">
        <li>{{ props.text }}</li>
      </template>
         
     
     
    </log-dialog>
    <!--关于我们-->
  </div>
</template>

<script>
//import Hello from './components/Hello'
import comA from './components/comA'
import comB from './components/comB'
import slideShow from './components/slideShow'
import videoCom from './components/video'
import myFooter from './components/footer'
import logDialog from './components/logDialog'
import myLogin from './components/login'
import myScroll from './components/scroll'


export default {
  name: 'app',
  components: {
    comA,
    comB,
    slideShow,
    videoCom,
    myFooter,
    logDialog,
    myLogin,
    myScroll
  },
  data () {
    return {
      msg: '',
      show: true,
      show2:true,
      currentCom:'com-a',
      slideSpeed:2000,
      isLogDialogShow:false,
      isAboutDialogShow:false,
      username: '',
      items:[
        {
          text:"列表111"
        },
        {
          text:"列表222"
        },
        {
          text:"列表3333"
        }
      ],
      slideList:[
        {
          src: require('./assets/slideShow/pic1.jpg'),
          title: '标题111111111',
          href: 'http://www.qq.com'
        },
        {
          src: require('./assets/slideShow/pic2.jpg'),
          title: '标题222222222222',
          href: 'http://v.qq.com'
        },
        {
          src: require('./assets/slideShow/pic3.jpg'),
          title: '标题333333333',
          href: 'http://fashion.qq.com'
        },
        {
          src: require('./assets/slideShow/pic4.jpg'),
          title: '标题4444444444444',
          href: 'http://ent.qq.com'
        }
      ],
      scrollList:[
        {
          src: require('./assets/slideShow/pic1.jpg'),
          title: '标题111111111',
          href: 'http://www.qq.com'
        },
        {
          src: require('./assets/slideShow/pic2.jpg'),
          title: '标题222222222222',
          href: 'http://v.qq.com'
        },
        {
          src: require('./assets/slideShow/pic3.jpg'),
          title: '标题333333333',
          href: 'http://fashion.qq.com'
        },
        {
          src: require('./assets/slideShow/pic4.jpg'),
          title: '标题4444444444444',
          href: 'http://ent.qq.com'
        },
        {
          src: require('./assets/slideShow/pic2.jpg'),
          title: '标题55555',
          href: 'http://fashion.qq.com'
        },
        {
          src: require('./assets/slideShow/pic4.jpg'),
          title: '标题66666',
          href: 'http://ent.qq.com'
        }
      ]
     
    }
  },
  methods:{
    changeCom(){
      if(this.currentCom === 'com-a'){
          this.currentCom = 'com-b';
      }else{
        this.currentCom = 'com-a'
      }
    },
    logDialog(){
      this.isLogDialogShow = true;
    },
    succsessLog(data){
      console.log("data:"+data.username);
      this.username = data.username;
      this.closeDailog('isLogDialogShow');
    },
    regDialog(){

    },
    aboutDialog(){
      this.isAboutDialogShow = true;
    },

    closeDailog(flag){
      console.log("flag:"+flag,this[flag]);
      this[flag] = false;
    },
    excitDialog(){
      this.username = '';
    }
    
    



  }
  
}

</script>

<style scoped>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
  margin-top: 20px;
}
.head-logo img {
  width: 50px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.layout{width: 1000px;margin: 0 auto;}


.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}



.fade-enter-active,.fade-leave-active{/*过渡的css*/
  transition:all .8s;/*此处也可以自定义animation动画*/
}
.fade-enter,.fade-leave-active{/*进场前一帧和离场后一帧*/
  opacity:0;
}


.animi-enter-active{
  animation:fadeIn 1s;
}
.animi-leave-active{
  animation:fadeIn 1s reverse;
}
@keyframes fadeIn {
  0% {
    transform:translateX(-100px);
  }
  100% {
    transform:translateX(0);
  }
}


.router-tab a{
  display: inline-block;
  padding: 5px 10px;
  background: #ddd;
  color: #000;
}
.router-tab a.router-link-active{
  background: #ccc;
  color: #f30;
}
.router-cont{
  width: 200px;
  padding: 10px;
  background: #ccc;
}
</style>

