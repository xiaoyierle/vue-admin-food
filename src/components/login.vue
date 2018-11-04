<template>
    <div class="login">
        <div class="logo">
            <img src="/imgs/logo.jpg" alt=""/>
            <h3>欢迎来到点菜吧！</h3>
            <p>这里有你想要的美食推荐</p>
        </div>
        <form class="form-horizontal">
            <div class="form-group">
                <input type="text" v-model="formData.phone" class="form-control" placeholder="手机号"/>
            </div>
            <div class="form-group">
                <input type="password" v-model="formData.code" class="form-control" placeholder="密码"/>
            </div>
            <div class="form-group">
                <div class="btn btn-success" v-on:click="submit">登录</div>
            </div>
        </form>
    </div>
</template>
<script>
    import router from '../router';
    export default {
        name:'login',
        data(){
            return{
                formData:{
                    phone:'',
                    code:'',
                }
            }
        },
        methods:{
            submit(){
                fetch('/api/user_login',{
                    method:'post',
                    credentials:'include',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(this.formData)
                }).then(res=>res.json())
                    .then(r=>{


                            if(localStorage.login_to){
                                router.push(localStorage.login_to)
                            }else{
                                router.push({name:"my"});
                            }

                    })
            }
        }
    }
</script>
<style scoped>
    /*--------login*/
    .login{ width:100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;}
    .login .logo{ width:300px;}
    .login .logo img{ display: block; width:300px;}
    .login .logo h3{ font-size: .32rem; color: #333; font-family: "苹方"; font-weight: 500; text-align: center;}
    .login .logo p{ font-size: .3rem; color: #666; font-family: "苹方"; font-weight:200; text-align: center;}
    .login .form-horizontal{ width:300px; height:300px; display: flex; flex-direction: column; align-items: center;}
    .login .form-horizontal .form-group{ width:100%; height:48px; margin-top: 16px;}
    .login .form-horizontal .form-group input{ width:100%; height:100%; outline:none; border: 1px solid #ddd; border-radius: 4px; color: #333; padding-left: 10px; box-sizing: border-box;}
    .login .form-horizontal .form-group div{ width:100%; height:100%; outline:none; border: 1px solid #ddd; border-radius: 4px; color: #333;text-align: center;line-height: 48px;font-size: 16px}

</style>