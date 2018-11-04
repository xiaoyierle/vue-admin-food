<template>
    <div class="orderContent checkout">
        <header class="back">
            <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            确认订单
        </header>
            <form action="">
                <div class="outer">
                    <section v-if="!address" class="address">
                        <a v-on:click="go_address">
                        <h3><span>请选择一个收货地址</span><span>&#xe762;</span></h3>
                        </a>
                    </section>
                    <section v-if="address" class="addressDefault">
                        <a v-on:click="go_address">
                            <div class="left">
                                <p class="person">
                                    <span class="name">{{address.name}}</span>
                                    <span class="sex">{{address.gender==1?'先生':'女士'}}</span>
                                    <span class="tel">{{address.phone}}</span>
                                </p>
                                <p class="home">
                                    {{address.address}}
                                </p>
                            </div>
                            <div class="right">&#xe762;</div>
                        </a>
                    </section>
                    <section class="time">
                        <p>
                            <span>送达时间</span>
                            <span class="right">尽快送达|预计19:38</span>
                        </p>
                    </section>
                    <section class="foods">
                        <div class="head">
                            <div class="img">
                                <img v-bind:src="shop_pic" alt=""/>
                                <span>{{shop_name}}</span>
                            </div>
                            <span class="icon">&#xe762;</span>
                        </div>
                        <div class="foodlist">
                            <ul>
                                <li v-for="v in goods">
                                    <p class="name">{{v.gname}}</p>
                                    <p class="price">
                                        <span>x{{v.num}}</span>
                                        <span>¥{{v.num*v.price}}</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <!--<ul class="listitem">
                            <li>
                                <p class="name">餐盒费</p>
                                <p class="price">
                                    <span>x1</span>
                                    <span>¥2</span>
                                </p>
                            </li>
                            <li>
                                <p class="name">配送费</p>
                                <p class="price">
                                    <span></span>
                                    <span>¥3</span>
                                </p>
                            </li>
                        </ul>-->

                        <div class="final">
                            <p>共计<span>¥{{total}}</span></p>
                        </div>
                    </section>
                    <!--<section class="payway">
                        <h3><span>支付方式</span><span>在线支付&#xe762;</span></h3>
                        <div class="add">
                            <a href="/">
                            <span>备注/发票:</span>
                            <span>口味、偏好等要求&#xe762;</span>
                            </a>
                        </div>
                    </section>-->
                </div>
                <div class="checkfooter">
                    <h3>待支付 ¥{{total}}<span></span></h3>
                    <div v-on:click="order">去支付</div>
                </div>
            </form>
    </div>
</template>
<script>
    import router from "../router"
    export default {
        name:"checkout",
        mounted(){
            this.spic=localStorage.spic,
            this.goods=JSON.parse(localStorage.goods),
            fetch('/api/get_user_default_address',{
                credentials:"include"
            })
                .then(res=>res.json())
                .then(r=>this.address=r[0])
        },
        data(){
            return{
                address:{},
                goods:[],
                spic:''
            }
        },
        methods:{
            go_address:function () {
                router.push({name:'address'})
            },
            order:function(){
                const data = {
                    address_id:this.address.id,
                    goods_list:JSON.stringify(this.goods),
                    sid:this.$route.params.id,
                    uid:this.goods[0].uid
                }
               if(this.address){
                   fetch('/api/add_order',{
                       method:'post',
                       credentials:'include',
                       body:JSON.stringify(data),
                       headers:{
                           'Content-Type':'application/json'
                       }
                   }).then(res=>res.json())
                       .then(r=>{
                           if(r.message==='ok'){
                               let id = r.oid
                               router.push({name:'payresult',params:{id}})
                           }
                       })
               }else{
                   alert('请选择地址')
               }
            }
        },
        computed:{
            total:function(){
                let r = 0;
                this.goods.forEach(v=>{
                    r += v.num*v.price
                })
                return r;
            },
            shop_name:function(){
                if(this.goods.length){
                    return this.goods[0].sname;
                }
            },
            shop_pic:function(){
                if(this.goods.length){
                    return this.goods[0].spic
                }
            }
        }
    }
</script>
<style scoped>
    /*---------------头部*/
    header.back{ width: 100%; height:.88rem; background-image: linear-gradient(90deg,#90f,#90C); text-align: center;line-height: .88rem; font-size: .36rem; font-weight:600; color: #fff; position: fixed; top:0; left:0;}
    header a.back{ display: block; font-family: "iconfont"; width: 1rem; height: .88rem; font-size: .5rem; color: #fff; line-height: .88rem;text-align:center;box-sizing: border-box; text-align: center; position: absolute; top:0; left:0;  }/*---------------------footer*/
    /*--------------确认订单*/
    .checkout section.address{ width:100%; height:1.5rem; font-size: .36rem; background: #fff; border-bottom: 3px solid #0085ff;}
    .checkout>a{ display: block; width:100%; height:100%;}
    .checkout section.address h3{ margin:0; line-height: 1.5rem; text-align: center; display: flex; justify-content: space-between; padding:0 .3rem; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; font-size: .36rem;}
    .checkout section.address h3 span{ font-family: "iconfont";}
    .checkout section.time{ width:100%; height:1rem; background: #fff; margin:.2rem 0; padding:0 .3rem; box-sizing: border-box;}
    .checkout section.time p{ font-size: .36rem; display: flex; justify-content: space-between;}
    .checkout section.time p span{ line-height: 1rem;}
    .checkout section.time p span.right{ line-height: 1rem;color: #0AA6E8; font-family: "iconfont";}
    .checkout section.payway{ width:100%; background: #fff; padding:0 .3rem; box-sizing: border-box;}
    .checkout section.payway h3{ height:1rem; display: flex; justify-content:space-between; box-sizing: border-box; border-bottom: 1px solid #ccc; margin:0;}
    .checkout section.payway h3 span{ line-height: 1rem; font-size: .36rem; font-family: 'iconfont';}
    .checkout section.payway .add{ width:100%;}
    .checkout section.payway .add a{ display: block; width:100%; height:1rem; display: flex; justify-content:space-between;}
    .checkout section.payway .add a span{ font-size: .36rem; line-height: 1rem; font-family: "iconfont";}
    .checkout .outer section.addressDefault>a{display: block;width: 100%;height:1.5rem;display: flex;padding:.3rem;box-sizing: border-box}
    .checkout .outer section.addressDefault>a:active{background: #eee;}
    .checkout .outer section.addressDefault{ width:100%; height:1.5rem;  box-sizing: border-box; background: #fff; display: flex;}
    .checkout .outer section.addressDefault .left{ width:6rem; height:100%; display: flex; flex-direction: column; justify-content: space-between; flex: none;}
    .checkout .outer section.addressDefault .left p.person{ font-size: .38rem; line-height: .4rem;}
    .checkout .outer section.addressDefault .left p.person span.name{ font-family: "微软雅黑"; font-weight:700; color: #333;}
    .checkout .outer section.addressDefault .left p.person span{ margin-right: .1rem; color: #666;}
    .checkout .outer section.addressDefault .left p.home{ font-size: .32rem; line-height: .32rem; width:6rem; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; color: #666;}
    .checkout .outer section.addressDefault .right{ height:100%; flex: 1; font-size: .4rem; line-height: 1rem; text-align: center; font-family: "iconfont";}


    .checkout .checkfooter {height: 1rem;width: 100%;position: fixed;bottom: 0px;z-index: 999;background-color: #fff;box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);display: flex;justify-content: space-between;}
    .checkout .checkfooter h3 {margin: 0;line-height: 1rem;font-size: .36rem;padding-left: .3rem;}
    .checkout .checkfooter div{ width:2.1rem; height:100%; background-color: #0085ff; border:0; color: #fff; font-size: .36rem; outline: none;text-align: center;line-height: 1rem}
    .orderContent {width: 100%;height: 100%;}
    .orderContent form{width:100%;height:100%}
    .orderContent .outer{ box-sizing:border-box;width:100%; height:100%;padding:.88rem 0 1rem 0; background-color: #F5F5F5;}
    .orderContent .outer .status{ width:100%; display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #fff; margin-bottom:.2rem; padding-top: .2rem;}
    .orderContent .outer .status img{ width:1.6rem; height:1.6rem; border-radius: 50%; overflow: hidden;}
    .orderContent .outer .status h3{ margin:0; font-size: .4rem; font-weight:500; text-align: center;}
    .orderContent .outer .status p{ font-size: .3rem; color: #666; text-align: center; margin-bottom: .3rem;}
    .orderContent .outer .foods{ padding:0 .4rem; box-sizing: border-box; background-color: #fff; margin-bottom: .2rem;}
    .orderContent .outer .foods .head{ width:100%; height:.88rem; display: flex; justify-content:space-between; align-items: center; border-bottom: 3px solid #dfdfdf; margin-bottom: .05rem;}
    .orderContent .outer .foods .head .img{ display: flex;}
    .orderContent .outer .foods .head .img img{ display: block; width:.4rem; height:.4rem; margin-right: .1rem;}
    .orderContent .outer .foods .head .img span{ font-size: .3rem; color: #333;}
    .orderContent .outer .foods .head .icon{ font-size: .3rem; color: #666; font-family: "iconfont";}
    .orderContent .outer .foods .foodlist{ width:100%;}
    .orderContent .outer .foods .foodlist ul{ width:100%;}
    .orderContent .outer .foods .foodlist ul li{ width:100%; height:.88rem; border-top: 1px solid #eee; display: flex; font-size: .3rem; color: #333; align-items: center; justify-content: space-between;}
    .orderContent .outer .foods .foodlist ul li p.name{ width:75%; display: flex; justify-content: space-between;}
    .orderContent .outer .foods .foodlist ul li p.price{ width:25%; display: flex; justify-content: space-between;}
    .orderContent .outer .foods .listitem{ width:100%;}
    .orderContent .outer .foods .listitem li{ width:100%; height:.88rem; border-top: 1px solid #eee; display: flex; font-size: .3rem; color: #333; align-items: center; justify-content: space-between;}
    .orderContent .outer .foods .listitem li p.price{ width:25%; display: flex; justify-content: space-between;}
    .orderContent .outer .foods>.price{ width:100%; height:.88rem; border-top: 1px solid #eee; border-bottom: 1px solid #eee; display: flex; font-size: .3rem; color: #333; align-items: center; justify-content: space-between; margin-bottom: .05rem;}
    .orderContent .outer .foods .price p.price{ width:25%; display: flex; justify-content: space-between; color: red;}
    .orderContent .outer .foods .final{ font-size: .3rem; height:1rem; border-top: 3px solid #dfdfdf;}
    .orderContent .outer .foods .final p{ line-height: 1rem; text-align: right;}
    .orderContent .outer .foods .final p span{ font-size: .34rem;}
    .orderContent .outer .deliver{ padding:0 .4rem; box-sizing: border-box; background-color: #fff; margin-bottom: .2rem;}
    .orderContent .outer .deliver h3{ font-size: .32rem; margin:0; color: #333; line-height: .8rem; height:.8rem;}
    .orderContent .outer .deliver p{ font-size: .32rem; color: #666; height:.8rem; line-height: .8rem;}
    .orderContent .outer .orderinfo{ padding:0 .4rem; box-sizing: border-box; background-color: #fff; margin-bottom: .2rem;}
    .orderContent .outer .orderinfo h3{ font-size: .32rem; margin:0; color: #333; line-height: .8rem; height:.8rem;}
    .orderContent .outer .orderinfo p{ font-size: .32rem; color: #666; height:.8rem; line-height: .8rem;}

</style>