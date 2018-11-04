<template>
    <div class="profile">
        <header class="back">
            <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            我的账户
        </header>
            <div class="outer">
                <a class="address" v-if="!userInfo.username">
                    <p class="left"><span></span></p>
                    <p class="right">
                        <span>账户名</span>
                        <input type="text" placeholder="请设置用户名" v-model="formData.username" v-on:blur="setName()">
                    </p>
                </a>
                <a class="address" v-if="userInfo.username">
                    <p class="left"><span></span></p>
                    <p class="right">
                        <span>账户名</span>
                        <input type="text" placeholder="请设置用户名" v-model="formData.username" v-on:blur="setName()">
                    </p>
                </a>
                <a class="address">
                    <p class="left"><span></span></p>
                    <p class="right">
                        <span>登录密码</span>
                        <span>设置&#xe762;</span>
                    </p>
                </a>

                <a class="address">
                <p class="left"><span></span></p>
                <p class="right">
                    <span>已绑定手机</span>
                    <span>{{userInfo['phone']}}</span>
                </p>
                </a>
                <a v-on:click="log_out()" class="address">
                <p class="right" >
                    <span></span>
                    <span>退出登录</span>
                </p>
                </a>
            </div>
    </div>
</template>
<script>
    export default {
        name:'account',
        data(){
            return{
                userInfo:{},
                formData:{
                    username:"",
                    password:''
                }
            }
        },
        mounted(){
            fetch('/api/get_custom_account',{credentials:'include'})
                .then(res=>res.json())
                .then(r=>{
                    this.userInfo=r[0];
                    this.formData.username=this.userInfo.username;
                })
        },
        methods:{
            log_out:function(){
                fetch('/api/custom_logout',{credentials:'include'})
                    .then(res=>res.json())
                    .then(r=>{
                        if(r==='ok'){
                            localStorage.login_to=location.hash.slice(1);
                            router.push({name:'login'})
                        }
                })
            },
            setName:function(){
                fetch('/api/set_custom_username?username='+this.formData.username,{credentials:'include'})
                    .then(res=>res.json())
                    .then(r=>{
                        if(r==='ok'){
                            alert('设置成功')
                        }
                    })
            }
        },
        beforeMount(){
            fetch('/api/get_user_auth',{
                credentials:'include',
            }).then(res=>res.json())
                .then(auth=>{
                    if(!auth){
                        localStorage.login_to=location.hash.slice(1);
                        router.push({name:'login'});
                    }
                })
        },
    }
</script>
<style scoped>
    /*-------------profile*/
    .profile{ width:100%; height:100%;}
    .profile .outer{ width:100%; height:100%; padding:.88rem 0 1rem 0; background-color: #F5F5F5; box-sizing: border-box;}
    .profile .top{ width:100%; height:3rem; background-image: linear-gradient(90deg,#90f,#90C);}
    .profile .top a{ display: block; width:100%; height:100%;}
    .profile .top a>div{ width:100%; height:100%; display: flex; flex-direction: column; justify-content: center; align-items: center;}
    .profile .top a img{ width:1.5rem; height:1.5rem; border-radius: 50%;}
    .profile .top a p{ font-size: .36rem; color: #000; text-align: center; margin:.1rem 0; font-family:"iconfont";}
    .profile .outer a.address{ display: block; padding:0 .2rem; width:100%; display: flex; box-sizing: border-box; height:1rem; align-items: center; justify-content: space-between; background-color: #fff; border-bottom: 1px solid #f5f5f5;}
    .profile .outer a.address p{ font-size: .36rem; color: #000;}
    .profile .outer a.address p span{ font-family: "iconfont";}
    .profile .outer a.address p.left span{ margin-right: .2rem; flex: none;}
    .profile .outer a.address p.right{ flex:1; display: flex; justify-content:space-between;}
    .profile .outer a.address p.right input{ height:100%;font-size: .36rem;text-align: right;border:0;outline: none}

    /*---------------头部*/
    header.back{ width: 100%; height:.88rem; background-image: linear-gradient(90deg,#90f,#90C); text-align: center;line-height: .88rem; font-size: .36rem; font-weight:600; color: #fff; position: fixed; top:0; left:0;}
    header a.back{ display: block; font-family: "iconfont"; width: 1rem; height: .88rem; font-size: .5rem; color: #fff; line-height: .88rem;text-align:center;box-sizing: border-box; text-align: center; position: absolute; top:0; left:0;  }/*---------------------footer*/

    /*--------------footer--------------*/
    footer{ height:1rem; width:100%; position: fixed; bottom: 0px; z-index: 999; background-color: #fff; box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);}
    footer ul{ width:100%; height:100%; display: flex;}
    footer ul li{ width:25%; height:100%;}
    footer ul li a{ display: block; width:100%; height:100%; font-size: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;}
    footer ul li a span{ font-family: "iconfont"; font-size: .4rem; color: #666; line-height: .5rem;}
    footer ul li a p{ font-size: .26rem; text-align: center;}

</style>