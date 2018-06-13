<template>
<div>
   <div class="app-foot">
      <p>{{msg}}</p>
    </div> 
</div>

</template>
<script>
export default {
  data () {
    return {msg: '2016'}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
</style>
