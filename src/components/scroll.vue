<template>

<div class="scrollbox">
  <div class="scrollitem">
    <ul>
      <li v-for="(item,index) in scrollList" :key="index">
        <a :href="item.href" target="_blank">
            <img :src="item.src" />{{item.title}}
        </a>
      </li> 
    </ul> 
  </div>
  <span class="btn prev">左</span>
  <span class="btn next">></span>
</div> 

</template>
<script>
export default {
  props:{
    scrollList:{
      type:Array,
      default:[]
    }
  },
  data () {
    return {
      msg: '2016',
      len:0
    }
  },
  mounted(){
    this.len = this.scrollList.length;
  },
  methods:{
    
    play(){

    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scrollbox{
  width: 900px;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  .scrollitem{
    width: 100%;
    overflow: hidden;
    ul{width: 9999px;}
    li{
      float: left;
      display: inline;
      width: 206px;
      padding: 0 20px 0 0;
      text-align: center;
      img{
        width: 205px;
        height: 200px;
      }
    }
  }
  .btn{
    position: absolute;
    top: 20px;
    width: 20px;
    height: 30px;
    background: rgba(0,0,0,.5);
    font-size: 20px;
    color: #fff;
    &.prev{
      left: 0;
    }
    &.next{right: 0;}
  }
}
</style>
