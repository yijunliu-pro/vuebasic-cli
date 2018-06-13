<template>
<div>
   <div class="ruoter">
      <p>{{msg}}</p>
      {{$route.params}}
      <button @click="getparams">点击打印路由参数</button>  
    </div> 
</div>

</template>
<script>
export default {
  data () {
    return {msg: '路由组件1，可以自定义组件'}
  },
  methods:{
    getparams(){
      console.log(this.$route.params)
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
