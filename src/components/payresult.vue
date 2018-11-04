<template>
    <div class="orderContent">
        <header class="back">
            <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            订单详情
        </header>
            <div class="outer">
                <section class="status" v-if="this.list.state">
                    <img v-bind:src="shop_pic" alt=""/>
                    <h3>订单已完成&gt;</h3>
                    <p>感谢您对我们的支持与信赖，欢迎下次光临</p>
                </section>
                <section class="status" v-if="!this.list.state">
                    <img v-bind:src="shop_pic" alt=""/>
                    <h3>订单尚未完成&gt;</h3>
                    <p>请您耐心等待商家配送</p>
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
                            <li v-for="v in this.goods">
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
                    <!--<div class="price">
                        <p class="name">在线支付立减</p>
                        <p class="price">
                            <span></span>
                            <span>-¥21</span>
                        </p>
                    </div>-->
                    <div class="final">
                        <p>实付<span>¥{{total(this.goods)}}</span></p>
                    </div>
                </section>
               <!-- <section class="deliver">
                    <h3>配送信息</h3>
                    <p class="arrTime">送达时间：尽快送达[12:50]</p>
                    <p class="address">送货地址：王郑毅(男士) 15735806726</p>
                    <p class="type">配送方式：蜂鸟专送</p>
                    <p class="person">配送骑手：封海洋，15503618553</p>
                </section>
                <section class="orderinfo">
                    <h3>订单信息</h3>
                    <p class="arrTime">订单号：3012725248456417396
                    </p>
                    <p class="address">支付方式：在线支付</p>
                    <p class="type">下单时间：2017-09-24 12:03</p>
                </section>-->
            </div>
    </div>
</template>
<script>
    export default {
        name:'payresult',
        data(){
            return{
                list:{},
                goods:[]
            }
        },
        methods:{
            total:function(val){
                let sum = 0;
                val.forEach(v=>{
                    sum+=v.num*v.price;
                })
                return sum;
            }
        },
        mounted(){
            fetch('/api/get_order_by_id?id='+this.$route.params.id,{credentials:'include'})
                .then(res=>res.json())
                .then(r=>{
                    this.goods = JSON.parse(r[0].goods_list);
                    r.forEach(v=>{
                        v.goods_list = JSON.parse(v.goods_list)
                    })
                    this.list=r[0];
                })
        },

        computed:{
            shop_pic:function(){
                if(this.list.address_id){
                    return this.list.goods_list[0].spic
                }
            },
            shop_name:function(){
                if(this.list.address_id){
                    return this.list.goods_list[0].sname
                }
            }
        }
    }
</script>
<style scoped>
    /*--------------------ordercontent-----------*/
    .orderContent {width: 100%;height: 100%;}
    .orderContent .outer{ width:100%; padding:.88rem 0 0 0; background-color: #F5F5F5;}
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
    .orderContent .outer .foods .foodlist ul li p.price{ width:25%; display: flex; justify-content: space-between;}
    .orderContent .outer .foods .foodlist ul li p.name{ width:75%}
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