<template>
<div class="login-form">
    <h2>{{msg}}</h2>
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="userName" placeholder="请输入用户名">
        </div>
        <span class="g-form-error"></span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passWord" placeholder="请输入密码">
        </div>
        <span class="g-form-error"></span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="login">登录</a>
        </div>
      </div>
      <p></p>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      msg: '登陆组件',
      userName:'',
      passWord:''
    }
  },
  methods:{
    login(){

      // this.$http({
      //     method:'GET',
      //     url:'https://cgi.vip.qq.com/profile/userinfo',
      //     data:{ 
      //       r:'profile/userinfoext',
      //       data:'uin,is_club,is_superclub,level,is_year_club'
      //     },
      //     headers: {"X-Requested-With": "XMLHttpRequest"},
      //     emulateJSON: true
      // }).then((response) => {
      //       console.log(this.userName,this.passWord);
      //     // 响应成功回调
      //     }, (response) => {
      //         // 响应错误回调
      // });
      this.$http.get('api/login').then((res)=>{ //本地测试数据需配置代理，json-server
        this.$emit("has-login",res.data);
        console.log(res.data)
			},(err)=>{
           console.log(err)
      });

      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
</style>
