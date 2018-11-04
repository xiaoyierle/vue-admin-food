<template>
    <div class="order">
        <header class="back">
            <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            订单
        </header>
            <div class="outer">
                <a v-for="v in list" v-on:click="orderDetial(v.id)">
                <div class="top">
                    <div class="left">
                        <img v-bind:src='v.goods_list[0].spic' alt=""/>
                    </div>
                    <div class="right">
                        <div class="title">
                            <p class="name">
                                <span>{{v.goods_list[0].sname}}</span>
                                <span>{{v.state===0?'订单未完成':'订单已完成'}}</span>
                            </p>
                            <p class="time">2017-09-24 12:03</p>
                        </div>
                        <div class="item">
                            <p class="name">
                                <span class="info">{{v.goods_list[0].gname}}</span>
                                <span class="num">等{{v.goods_list.length}}件商品</span>
                            </p>
                            <p class="price">
                                ¥{{getTotal(v.goods_list)}}
                            </p>
                        </div>
                    </div>
                </div>
              </a>
            </div>
        <footer>
            <ul>
                <li>
                    <a href="#/">
                        <span>&#xe6a5;</span>
                        <p>外卖</p>
                    </a>
                </li>
                <li>
                    <a href="#/descover">
                        <span>&#xe660;</span>
                        <p>发现</p>
                    </a>
                </li>
                <li>
                    <a href="#/order">
                        <span>&#xe604;</span>
                        <p>订单</p>
                    </a>
                </li>
                <li>
                    <a href="#/my">
                        <span>&#xe622;</span>
                        <p>我的</p>
                    </a>
                </li>
            </ul>
        </footer>
    </div>
</template>
<script>
    import router from "../router";
    export default {
        name:"order",
        data:function(){
            return{
                list:[]
            }
        },
        methods:{
            getTotal:function(val){
                let sum = 0;
                val.forEach(v=>{
                    sum += v.price * v.num
                })
                return sum;
            },
            orderDetial:function(id){
                router.push({name:'payresult',params:{id}})
            }
        }
        ,
        mounted(){
            fetch('/api/get_custom_order',{credentials:'include'})
                .then(res=>res.json())
                .then(r=>{
                    r.forEach(v=>{
                        v.goods_list = JSON.parse(v.goods_list)
                    })
                    this.list=r;
                })
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
        }
    }
</script>
<style scoped>
    /*----------------order*/
    .order {width: 100%;height: 100%;}
    .order .outer{ width:100%; padding:.88rem 0 1rem 0; background-color: #F5F5F5;height: 100%;overflow-y: scroll}
    .order .outer a{ display: block; width:100%; margin-top: .2rem; padding:.3rem .3rem 0 .3rem; box-sizing: border-box; background-color: #fff;}
    .order .outer a .top{ width:100%; display: flex;}
    .order .outer a .top .left{ width:.84rem; margin-right: .2rem;}
    .order .outer a .top .left img{ width:100%;height:0.84rem;border: 0}
    .order .outer a .top .right{ flex: 1;}
    .order .outer a .top .right .title{ padding-bottom: .2rem; border-bottom: 1px solid #eee;}
    .order .outer a .top .right .title p.name{ font-size: .32rem; display: flex; justify-content:space-between;}
    .order .outer a .top .right .title p.name span{ display: block; max-width: 10em; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;}
    .order .outer a .top .right .title p.time{ font-size: .2rem; color: #999; font-weight:400; line-height: .4rem;}
    .order .outer a .top .right .item{ display: flex; justify-content: space-between;}
    .order .outer a .top .right .item p.name{ font-size: .24rem; margin:.3rem 0; color: #999;}
    .order .outer a .top .right .item p.price{ font-size: .3rem; margin:.3rem 0; font-weight:700; color: #000;}
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