<template>
    <div class="foods">
        <section class="foodsTop">
            <div class="foodsback">
                <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            </div>
            <div class="shopHeader">
                <img v-bind:src="storeInfo.pic" alt=""/>
                <div class="right">
                    <h2>{{storeInfo.name}}</h2>
                    <p class="deliver">
                        <span class="delType">店家自送</span>
                        <span class="line">/</span>
                        <span class="delTime">37分钟送达</span>
                        <span class="line">/</span>
                        <span class="delFee">配送费¥4</span>
                    </p>
                    <p class="gonggao">公告：{{storeInfo.desc}}</p>
                </div>
            </div>
            <div class="activities">
                <div class="information">
                    <h3><span style="background: #f07373">减</span>满30减6，满55减18</h3>
                </div>
                <div class="more">
                    <h3>3个活动<span>&#xe62a;</span></h3>
                </div>
            </div>
        </section>
        <div class="nav">
            <a href="/" class="active">
                <p>商品</p>
            </a>
            <!--<a href="/">
                <p>评价</p>
            </a>
            <a href="/">
                <p>店铺</p>
            </a>-->
        </div>
        <div class="foodsList">
            <div class="inner">
                <main>
                    <div v-bind:class="['mask',{'active':showlist}]" v-on:click="showlist=!showlist"></div>
                    <div class="ulbox">
                            <ul>
                                <li v-for="(v,k) in b"><span>{{k}}</span><div class="active" v-if="getNum(v)">{{getNum(v)}}</div></li>
                            </ul>
                    </div>
                    <section>
                        <div class="foodouter">
                            <div class="menu" v-for="(value,key) in b">
                                <h3><span class="title">{{key}}</span> <span class="desc">{{value[0]['cname']==key?value[0]['cdesc']:''}}</span></h3>
                                <div class="item" v-for="v in value">
                                    <div class="info">
                                        <img v-bind:src="v.pic" alt=""/>
                                        <div class="information">
                                            <h3>{{v.gname}}</h3>
                                            <p class="sale">月售20份，好评率100%</p>
                                            <div class="price">
                                                <strong>¥<span>{{v.price}}</span></strong>
                                                <div class="btnbox">
                                                    <div class="btn btnl" id="add" v-on:mousedown.prevent v-if="v.num" v-on:click.prevent="v.num = v.num - 1">&#xe64c;</div>
                                                    <span>{{v.num?v.num:""}}</span>
                                                    <div class="btn" id="min" v-on:mousedown.prevent v-on:click.prevent="v.num = v.num + 1">&#xe601;</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <div class="car">
                    <div class="icon">
                        <div class="text" v-on:click="showList">
                            &#xe600;
                            <div v-bind:class="{ active: total_num }">{{total_num}}</div>
                        </div>
                    </div>
                    <div class="content">
                        <h3>¥{{total_price}}</h3>
                        <p>配送费¥{{storeInfo.deliver}}</p>
                    </div>
                    <div v-bind:class="['tips',{'active':total_price>=storeInfo.price}]" v-on:click="go">{{total_price>=storeInfo.price?"去结算":"¥20起送"}}</div>
                    <div v-bind:class="['foodlist',{'active':showlist}]">
                        <div class="title">
                            <span>购物车</span>
                            <span class="clear" v-on:click="clear()">清空</span>
                        </div>

                        <div class="item">
                            <ul>
                                <li v-if="v.num" v-for="v in goods">
                                    <div class="left">{{v.num==0?'':v.gname}}</div>
                                    <div class="right">
                                        <span>¥{{v.price}}</span>
                                        <div class="btnbox">
                                            <div class="btn btnl" v-on:mousedown.prevent v-if="v.num" v-on:click.prevent="v.num = v.num - 1">&#xe64c;</div>
                                            <span>{{v.num}}</span>
                                            <div class="btn" v-on:mousedown.prevent v-on:click.prevent="v.num = v.num + 1">&#xe601;</div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import router from  '../router';
    export default {
        name:'store',
        data:function(){
            return{
                storeInfo:{},
                goods:[],
                cates:[],
                showlist:false
            }
        },
        methods:{
            clear:function(){
                this.goods.forEach(v=>{
                    v.num=0;
                });
                this.showlist=!this.showlist;
            },
            showList:function(){
                if(this.total_num){
                    this.showlist=!this.showlist
                }
            },
            getNum:function(value){
                let catNum = 0;
                value.forEach(v=>{
                    catNum+=v.num;
                })
                return catNum;
            },
            go:function(){
                if(this.total_price>=this.storeInfo.price){
                    fetch('/api/get_user_auth',{
                        credentials:'include',
                    }).then(res=>res.json())
                        .then(auth=>{
                            if(auth){
                                router.push({name:'checkout'});
                            }else{
                                localStorage.login_to=location.hash.slice(1).replace('store','checkout');
                                router.push({name:'login'});
                            }
                            localStorage.goods = JSON.stringify(this.goods.filter(v=>{
                                v.spic=this.storeInfo.pic;
                                if(v.num){
                                    return v;
                                }
                            }));
                            localStorage.spic = this.storeInfo.pic
                        })
                }
            }
        },
        computed:{
          b:function(){
              let result = {};
              this.goods.forEach(v=>{
                  if(!result[v.cname]){
                      result[v.cname] = [];
                  }
                  result[v.cname].push(v);
              })
              return result;
          },
            total_num:function(){
              let r = 0;
              this.goods.forEach(v=>{
                  if(v.num){
                      r+=v.num;
                  }
              })
            return r;
            },
            total_price:function(){
                let r = 0;
                this.goods.forEach(v=>{
                    if(v.num){
                        r+=v.num*v.price;
                    }
                })
                return r;
            },
        },
        mounted(){
            fetch('/api/get_store_by_id?id='+this.$route.params.id)
                .then(res=>res.json())
                .then(data=>this.storeInfo=data[0]);
            fetch('/api/get_goods_by_sid?sid='+this.$route.params.id)
                .then(res=>res.json())
                .then(data=> {
                    return this.goods = data.map(v => {
                        v.num = 0;
                        return v;
                    });
                });
        }
    }
</script>
<style scoped>
    /*-------------------foods---------------------*/
    .foods {width:100%;height:100%}
    .foodsTop{ width: 100%; background-color: #3190e8; background-size: cover; background-repeat: no-repeat; background-image: url("/imgs/foodsbg.png"); position: relative;}
    .foods .foodsTop .foodsback{ width: 100%; height: 1rem;}
    .foods .foodsTop .foodsback .back{ display: block; font-family: "iconfont"; width: 1rem; height: 1rem; padding: .2rem; font-size: .5rem; color: #fff; line-height: .6rem; box-sizing: border-box; text-align: center;}
    .foods .foodsTop .shopHeader{ padding:0 .3rem; display: flex;}
    .foods .foodsTop .shopHeader img{ width:1.32rem; height:1.32rem; margin-right: .3rem;}
    .foods .foodsTop .shopHeader .right{ flex:1; color: #fff; font-size: .24rem;}
    .foods .foodsTop .shopHeader .right h2{ margin:0; font-size: .36rem; font-weight:700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
    .foods .foodsTop .shopHeader .right p{ line-height: .4rem;}
    .foods .foodsTop .shopHeader .right p .line{ margin:0 .1rem;}
    .foods .foodsTop .shopHeader .right p.gonggao{width:5rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}
    .foods .foodsTop .activities{ height:.36rem; padding:.1rem .3rem; display: flex; justify-content:space-between;}
    .foods .foodsTop .activities .information h3{ font-size: .2rem; line-height: .3rem; color: #fff; margin:0; display: flex; font-weight:500; align-items: center; margin:.1rem 0;}
    .foods .foodsTop .activities .information h3 span{ display: block; font-size: .2rem; width:.26rem; height:.26rem; line-height: .26rem; text-align: center; color: #fff; background-color: #ccc; margin-right: .1rem;}
    .foods .foodsTop .activities .more h3{ font-size: .2rem; line-height: .3rem; color: #fff; margin:0; font-weight:500; margin:.1rem 0 0 0; display: flex;}
    .foods .foodsTop .activities .more h3 span{ display: block; font-size: .2rem; width:.26rem; height:.26rem; text-align: center; color: #fff; font-family: "iconfont";}
    .foods .nav{ width:100%; height:.88rem; background-color: #fff; display: flex; border-bottom: 1px solid #eee;}
    .foods .nav a{ display: block; flex: 1; height: 100%;}
    .foods .nav a.active{box-sizing: border-box;border-bottom: .1rem solid #7CB2AB}
    .foods .nav a p{ line-height: .88rem; font-size: .32rem; color: #666; text-align: center;}
    .foods .foodsList{ width:100%; height:calc(100% - .88rem)}
    .foods .foodsList .inner{ width:100%; height:100%; padding-bottom: 1rem; box-sizing: border-box;}
    .foods .foodsList .inner main{ height:100%; width:100%; display: flex;}
    /*------------------遮罩*/
    .foodsList .inner main div.mask{display:none;width:100%;height: 100%;background: rgba(0,0,0,.5);position:absolute;z-index: 1}
    .foodsList .inner main div.mask.active{display: block}
    /*---------------购物车*/
    .foodsList .inner main .ulbox{ width:1.7rem; height:100%;overflow-y: scroll;position: relative}
    .foodsList .inner main ul{ width:100%; flex: none; background-color: #fff;}
    .foodsList .inner main ul li{ width:100%; border-bottom: .02rem solid #efefef; font-size: .28rem;/*line-height: .8rem;*/ padding:.24rem .1rem; text-align: center; color: #666; background: #F8F8F8; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;position: relative}
    .foodsList .inner main ul li.active{background: #fff}
    .foodsList .inner main ul li div{display: none}
    .foodsList .inner main ul li div.active{display:block;position: absolute;width:.3rem;height:.3rem;background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);font-size: .2rem;line-height: .3rem;border-radius: 50%;color:#fff;top:0;right:0}
    .foodsList .inner main section{ flex:1; height:100%;}
    .foodsList .inner main section .foodouter{ height:100%; overflow-y: scroll;}
    .foodsList .inner main section .foodouter .menu {  }
    .foodsList .inner main section .foodouter .menu .item{ width:100%; height:2.6rem;}
    .foodsList .inner main section .foodouter .menu .item .info{ width:100%; height:100%; box-sizing: border-box; padding:.4rem .2rem; display: flex;}
    .foodsList .inner main section .foodouter .menu .item .info img{ display: block; height:100%;}
    .foodsList .inner main section .foodouter .menu .item .info .information{ padding:0 .1rem; position: relative; flex: 1;}
    .foodsList .inner main section .foodouter .menu .item .info .information h3{ background-color: #fff;}
    .foodsList .inner main section .foodouter .menu .item .info .information p.sale{ font-size: .26rem; color: #666;}
    .foodsList .inner main section .foodouter .menu .item .info .information .price{ width:100%; display: flex; position: absolute; bottom:0; left:0; padding:0 .1rem; display: flex; align-items: center; justify-content: space-between;}
    .foodsList .inner main section .foodouter .menu .item .info .information .price strong{ font-size: .3rem; color: #ff5339;}
    .foodsList .inner main section .foodouter .menu .item .info .information .price strong span{ font-size: .36rem;  }
    .foodsList .inner main section .foodouter .menu .item .info .information .price div.btnbox{ width:1.55rem; height:.4rem; display: flex; justify-content:space-between;  }
    .foodsList .inner main section .foodouter .menu .item .info .information .price div.btn{ width:0.4rem; height:0.4rem; background: #0085d0; color: #fff; font-family: 'iconfont'; font-size: .2rem; text-align: center; line-height: .4rem; border-radius: 50%;  }
    .foodsList .inner main section .foodouter .menu .item .info .information .price div.btnl{ background: #fff; color: #0085d0; border:1px solid #0085d0; border-radius: 50%;  }
    .foodsList .inner main section .foodouter .menu .item .info .information .price div.btnbox span{ font-size: .4rem; line-height: .4rem;  }
    .foodsList .inner main section .foodouter .menu h3{ font-size: .32rem; background-color: #f1f1f1; color: #666; margin:0; font-weight:500;  }
    .foodsList .inner main section .foodouter .menu h3 span{ color: #999; font-size: .24rem;  }
    .foodsList .inner main section .foodouter .menu h3 span.desc{ width:4.5rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}
    .foodsList .inner main section .foodouter .menu h3 span.title{font-size: .3rem;color:#666;font-family: "微软雅黑"}
    /*-----car*/
    .foodsList .inner .car{ height:1rem; width:100%; position: fixed; bottom:0; left:0; background-color: rgb(61,61,63); box-sizing: border-box; display: flex;z-index: 10}
    .foodsList .inner .car .icon{ width:1rem; height:1rem; position: relative; flex:none; margin-left: .3rem;}
    .foodsList .inner .car .icon .text{position:relative; width:100%; height:100%; border-radius: 50%; background: #C2B8C7; border:3px solid rgb(61,61,63); font-size: .6rem; line-height: 1rem; text-align: center; font-family: "iconfont"; color: rgb(61,61,63); position: absolute; bottom:.3rem; left:0; z-index: 999;}
    .foodsList .inner .car .icon .text div{display: none}
    .foodsList .inner .car .icon .text div.active{display:block;position: absolute;width:.4rem;height:.4rem;background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);font-size: .2rem;line-height: .4rem;border-radius: 50%;color:#fff;top:-.1rem;right:-.1rem;text-align: center}
    .foodsList .inner .car .content{ flex:1; padding-left: .4rem;}
    .foodsList .inner .car .content h3{ margin:0; font-size: .4rem; color: #fff;}
    .foodsList .inner .car .content p{ margin:0; font-size: .3rem; color: #fff; font-weight:400;}
    .foodsList .inner .car .tips{ width:2rem; height:100%; flex:none; font-size: .36rem; line-height: 1rem; text-align: center; color: #fff; background-color: rgb(61,61,63);}
    .foodsList .inner .car .tips.active{background: #7AB1AE}
    /*------------购物车*/
    .foodsList .inner .car .foodlist{ width:100%; position: absolute; bottom:1rem; left:0; background-color: #eee; display: none;}
    .foodsList .inner .car .foodlist.active{display: block}
    .foodsList .inner .car .foodlist .title{ width:100%; display: flex; justify-content:space-between; box-sizing: border-box; height:.8rem; line-height: .8rem;}
    .foodsList .inner .car .foodlist .title span{ font-size: .34rem; color: #666;width: 2rem;text-align: center}
    .foodsList .inner .car .foodlist .item{ background: #fff; max-height:6rem;overflow-y: scroll}
    .foodsList .inner .car .foodlist .item ul { width: 100%;  }
    .foodsList .inner .car .foodlist .item ul li{ width:100%; height:1rem; padding:0 .4rem; box-sizing: border-box; display: flex; justify-content:space-between; font-size: .34rem; align-items: center;}
    .foodsList .inner .car .foodlist .item ul li .left{ flex:1;}
    .foodsList .inner .car .foodlist .item ul li .right{ display: flex; justify-content: space-between; width:2.4rem;}
    .foodsList .inner .car .foodlist .item ul li .right>span{ font-weight:700; color: #ff5339;}
    .foodsList .inner .car .foodlist .item ul li .right .btnbox{ width:1.55rem; height:.4rem; display: flex; justify-content:space-between;}
    .foodsList .inner .car .foodlist .item ul li .right .btnbox .btn{ width:0.4rem; height:0.4rem; background: #0085d0; color: #fff; font-family: 'iconfont'; font-size: .2rem; text-align: center; line-height: .4rem; border-radius: 50%;}
    .foodsList .inner .car .foodlist .item ul li .right .btnbox .btnl{ background: #fff; color: #0085d0; border:1px solid #0085d0; border-radius: 50%;}
    .foodsList .inner .car .foodlist .item ul li .right .btnbox span{ font-size: .4rem; line-height: .4rem; font-weight:700;}

</style>