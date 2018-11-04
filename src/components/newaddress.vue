<template>
    <div class="newAddress">
        <header class="back">
            <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            添加地址
        </header>
            <div class="outer">
                <form action="">
                    <div class="inner">
                        <div class="username">
                            <div class="left">
                                <h3>联系人</h3>
                            </div>
                            <div class="right">
                                <div class="name">
                                    <input type="text" placeholder="你的姓名" v-model="formData.name"/>
                                </div>
                                <div class="sex">
                                    <span v-bind:class="{'active':isman}" v-on:click="changeSex()">先生</span>
                                    <span v-bind:class="{'active':!isman}" v-on:click="changeSex()">女士</span>
                                </div>
                            </div>
                        </div>
                        <div class="tel">
                            <div class="left">
                                <h3>电话</h3>
                            </div>
                            <div class="right">
                                <input type="text" placeholder="你的手机号" v-model="formData.phone"/>
                            </div>
                        </div>
                        <div class="tel">
                            <div class="left">
                                <h3>详细地址</h3>
                            </div>
                            <div class="right">
                                <input type="text" placeholder="详细地址" v-model="formData.address"/>
                            </div>
                        </div>
                        <!--<div class="label">
                            <div class="left">
                                <h3>标签</h3>
                            </div>
                            <div class="right">
                                <div class="sex">
                                    <span class="active">家</span>
                                    <span>学校</span>
                                    <span>公司</span>
                                </div>
                            </div>
                        </div>-->
                    </div>
                    <div class="btn">
                        <div v-on:click="submit" class="submit1">确定</div>
                    </div>
                </form>
            </div>
    </div>
</template>
<script>
    import router from '../router';
export default {
    name:"newaddress",
    methods:{
        submit(){
            fetch('/api/add_user_address',{
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(this.formData)
            }).then(res=>res.json())
                .then(r=>{
                    if(r==='ok'){
                        router.push({name:"checkout",id:2})
                    }
                })
        },
        changeSex(){
            this.isman=!this.isman;
            this.formData.gender=Number(this.isman);
        }
    },
    data(){
        return{
            formData:{
                name:'',
                gender:1,
                phone:'',
                address:''
            },
            isman:1
        }
    }
}
</script>
<style scoped>
    /*---------------头部*/
    header.back{ width: 100%; height:.88rem; background-image: linear-gradient(90deg,#90f,#90C); text-align: center;line-height: .88rem; font-size: .36rem; font-weight:600; color: #fff; position: fixed; top:0; left:0;}
    header a.back{ display: block; font-family: "iconfont"; width: 1rem; height: .88rem; font-size: .5rem; color: #fff; line-height: .88rem;text-align:center;box-sizing: border-box; text-align: center; position: absolute; top:0; left:0;  }

    /*------------------------------添加新地址*/
    .newAddress{ width:100%;height: 100%}
    .newAddress .outer{ width: 100%; height:100%; box-sizing: border-box; padding:.88rem 0 1rem 0; background: #f5f5f5;}
    .newAddress .outer .inner{ width:100%; padding-left: .3rem; box-sizing: border-box; background: #fff;}
    .newAddress .outer .inner .username{ display: flex; border-bottom: .02rem solid #f5f5f5;}
    .newAddress .outer .inner .username .left{ width:1.3rem;}
    .newAddress .outer .inner .username .left h3{ margin:0; font-size: .32rem; margin-top: .2rem;}
    .newAddress .outer .inner .username .right{ flex: 1;}
    .newAddress .outer .inner .username .right .name{ width:100%; height:.9rem; border-bottom: 1px solid #f5f5f5;}
    .newAddress .outer .inner .username .right .name input{ width:100%; height:100%; border:0; outline:none; font-size: .36rem; padding:0; color: #999;}
    .newAddress .outer .inner .username .right .sex{ height:.9rem; width:100%; font-size: .36rem; line-height: .9rem;}
    .newAddress .outer .inner .username .right .sex span{ border:1px solid #ddd; border-radius: .1rem; font-size: .34rem; line-height: .7rem; padding:.05rem .2rem; margin-right: .1rem; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}
    .newAddress .outer .inner .username .right .sex span.active{ color: #90f; background: #eef7ff; border-color: rgba(35,149,255,.18);}
    .newAddress .outer .inner .tel{ display: flex; border-bottom: .02rem solid #f5f5f5;}
    .newAddress .outer .inner .tel .left{ width:1.3rem;}
    .newAddress .outer .inner .tel .left h3{ margin:0; font-size: .32rem; line-height: .9rem;}
    .newAddress .outer .inner .tel .right{ flex: 1; height:.9rem;}
    .newAddress .outer .inner .tel .right input{ width:100%; height:100%; border:0; outline:none; font-size: .36rem; padding:0; color: #000;}
    .newAddress .outer .inner .label{ display: flex; border-bottom: .02rem solid #f5f5f5;}
    .newAddress .outer .inner .label .left{ width:1.3rem;}
    .newAddress .outer .inner .label .left h3{ margin:0; font-size: .32rem; line-height: .9rem;}
    .newAddress .outer .inner .label .right{ flex: 1; height:.9rem;}
    .newAddress .outer .inner .label .right input{ width:100%; height:100%; border:0; outline:none; font-size: .36rem; padding:0; color: #999;}
    .newAddress .outer .inner .label .right .sex{ height:.9rem; width:100%; font-size: .36rem; line-height: .9rem;}
    .newAddress .outer .inner .label .right .sex span{ border:1px solid #ddd; border-radius: .1rem; font-size: .34rem; line-height: .7rem; padding:.05rem .2rem; margin-right: .1rem; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}
    .newAddress .outer .inner .label .right .sex span.active{ color: #90f; background: #eef7ff; border-color: rgba(35,149,255,.18);}
    .newAddress .outer .btn{ width:100%; padding:.2rem .3rem; box-sizing: border-box;}
    .newAddress .outer .btn div.submit1{ width:100%; height:1rem; background: #60c; text-align: center; font-size: .36rem; color: #fff; line-height: 1rem; border-radius: .1rem; outline:none; border:0; margin:0 auto;}
    .needLogin { display: flex; flex-direction: column; justify-content: center; align-items: center;}
    .needLogin img{ display: block; width: 4rem; height:4rem;}
    .needLogin h3{ font-size: .36rem; color: #666;}
    .needLogin a.login{ display: block; width:2rem; height:0.6rem; background: #56d176; border-radius: 4px; color: #fff; font-size: .36rem; line-height: .6rem; text-align: center;}

</style>