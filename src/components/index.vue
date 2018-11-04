<template>
    <div>
        <header>点餐吧</header>
        <div class="searchBox">
            <div class="search">
                <a href="#/search">&#xe761;搜索商家、商品名称</a>
            </div>
        </div>
        <nav>
            <ul>
                <li key=1>肯德基</li>
                <li key=2>肯德基</li>
                <li key=3>肯德基</li>
                <li key=4>肯德基</li>
                <li key=5>肯德基</li>
                <li key=6>肯德基</li>
                <li key=7>肯德基</li>
            </ul>
        </nav>
        <div class="banner" id="swiperCon">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="">
                            <div class="pic">
                                <img src="/imgs/111.jpeg" alt=""/>
                            </div>
                            <p>美食</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/2.jpeg" alt=""/>
                        </div>
                        <p>甜品饮品</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/3.jpeg" alt=""/>
                        </div>
                        <p>商超便利</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/4.jpeg" alt=""/>
                        </div>
                        <p>果蔬生鲜</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/5.jpeg" alt=""/>
                        </div>
                        <p>新店特惠</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/6.jpeg" alt=""/>
                        </div>
                        <p>大牌必吃</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/7.jpeg" alt=""/>
                        </div>
                        <p>夜宵</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/8.jpeg" alt=""/>
                        </div>
                        <p>浪漫鲜花</p>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/9.jpeg" alt=""/>
                        </div>
                        <p>汉堡薯条</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/10.jpeg" alt=""/>
                        </div>
                        <p>包子粥店</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/11.jpeg" alt=""/>
                        </div>
                        <p>地方菜系</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/12.jpeg" alt=""/>
                        </div>
                        <p>披萨意面</p>
                        </a>
                        <a href="">
                        <div class="pic">
                            <img src="/imgs/13.jpeg" alt=""/>
                        </div>
                        <p>麻辣烫</p>
                        </a>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="category">
            <section>
                <div class="top">
                    <a href="/" class="left">
                    <h3>限量抢购</h3>
                    <div>超值美味9.9元起</div>
                    <p><span>3人</span>正在抢&gt;</p>
                    <img src="/imgs/cat1.png" alt=""/>
                    </a>
                    <a href="/" class="right">
                    <h3>热卖套餐</h3>
                    <div>销量最高，好评最多</div>
                    <p><span>3人</span>Top 100 &gt;</p>
                    <img src="/imgs/cat2.png" alt=""/>
                    </a>
                </div>
                <div class="bottom">
                    <a href="/" class="left">
                    <h3>天天特价</h3>
                    <span>低至一折</span>
                    <img src="/imgs/cat3.png" alt=""/>
                    </a>
                    <a href="/" class="left">
                    <h3>天天特价</h3>
                    <span>低至一折</span>
                    <img src="/imgs/cat4.png" alt=""/>
                    </a>
                    <a href="/" class="right">
                    <h3>天天特价</h3>
                    <span>低至一折</span>
                    <img src="/imgs/cat5.png" alt=""/>
                    </a>
                </div>
            </section>
        </div>
        <div class="shopBox">
            <div class="shop">
                <h3 class="title">推荐商家</h3>
                <ul>
                    <li key=1 v-for="v in stores"
                    v-on:click="to(v.id)"
                    >
                        <a href="javascript:;">
                        <section>
                            <div class="left">
                                <div class="imgbox">
                                    <img v-bind:src="v.pic" alt=""/>
                                </div>
                            </div>
                            <div class="right">
                                <section class="title">
                                    <h3><span>品牌</span>{{v.name}}</h3>
                                    <span class="titleType">票</span>
                                </section>
                                <section class="information">
                                    <div class="stars">
                                        <span>&#xe607;</span>
                                        <span>&#xe607;</span>
                                        <span>&#xe607;</span>
                                        <span>&#xe607;</span>
                                        <span>&#xe607;</span>
                                        <div>
                                            <span>&#xe607;</span>
                                            <span>&#xe607;</span>
                                            <span>&#xe607;</span>
                                            <span>&#xe607;</span>
                                            <span>&#xe607;</span>
                                        </div>
                                    </div>
                                    <span class="score">
                                {v.sstar}
                                    </span>
                                    <span class="sale">月售68单</span>
                                </section>
                                <section class="sendInfo">
                                    <div class="fee">
                                        <span>¥{{v.price}}起送</span>
                                        <span class="line">|</span>
                                        <span>配送费¥{{v.deliver}}</span>
                                    </div>
                                    <div class="time">
                                        <span>1.09km</span>
                                        <span class="line">|</span>
                                        <span>33分钟</span>
                                    </div>
                                </section>
                                <section class="line"></section>
                                <section class="discount">
                                    <div class="information">
                                        <h3><span>减</span>特价双人餐</h3>
                                        <h3><span>首</span>新用户下单立减5元</h3>
                                    </div>
                                    <div class="more">

                                    </div>
                                </section>
                            </div>
                        </section>
                        </a>
                    </li>
                </ul>
            </div>
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
    import router from '../router/index.js';
    import BMap from 'BMap'
    export default {
        name:"index",
        data(){
            return{
                stores:[],
                pos:{},
                map:null
            }
        },
        methods:{
            to(id){
                router.push({name:'store',params:{id}})
            }
        },
        mounted(){
            fetch('/api/get_store')
                .then(res=>res.json())
                .then(data=>this.stores=data);


        }
    }
</script>
<style>
    @import "../assets/swiper.min.css";
</style>
<style scoped="">
    header{width: 100%;height:.88rem;background-image: linear-gradient(90deg,#90f,#90C);text-align: center;line-height: .88rem;font-size: .36rem;font-weight:600;color: #fff;}
    .searchBox{width:100%;height:1rem;background-image: linear-gradient(90deg,#90f,#90C);position: sticky;top: 0px;z-index: 999;}
    .search{width:100%;height:100%;padding:.1rem .3rem;box-sizing: border-box;}
    .searchBox a{display: block;width: 100%;height:100%;background-color: #fff;font-size: 0.32rem;line-height: 0.8rem;text-align: center;font-family: "iconfont";}
    nav{width:100%;height:0.9rem;padding:.2rem .3rem .3rem;background-image: linear-gradient(90deg,#90f,#90C);box-sizing: border-box;font-size: 0.26rem;color: #fff;}
    nav ul{width:100%;height:.7rem;overflow-y: hidden;overflow-x: scroll;white-space: nowrap;}
    nav ul li{font-size: 0.26rem;display: inline-block;margin-right: .4rem;}
    nav ul li a{font-size: 0.26rem;color: #fff;}.searchPage{font-size: 0.26rem;}
    .banner{ width:100%; height:3.54rem; font-size: 0.26rem;}
    .banner .swiper-container{ height:100%;}
    .banner .swiper-container .swiper-wrapper{ height:100%;}
    .banner .swiper-container .swiper-wrapper .swiper-slide{ height:100%; display: flex; flex-wrap: wrap;}
    .banner .swiper-container .swiper-wrapper .swiper-slide a{ display: block; width:25%; display: flex; flex-direction: column; justify-content: center; align-items: center;}
    .banner .swiper-container .swiper-wrapper .swiper-slide a .pic{ width:0.9rem; height:0.9rem;}
    .banner .swiper-container .swiper-wrapper .swiper-slide a .pic img{ display: block; width:100%; height:100%;}
    .banner .swiper-container .swiper-wrapper .swiper-slide a p{ color:#666; line-height: 0.26rem; font-size: 0.26rem; margin-bottom:0; margin-top: .1rem; text-align: center;}
    .category{ width:100%; height:5.73rem;}
    .category section>div{ width:100%; padding:0 .3rem; box-sizing: border-box; display: flex;}
    .category section .top{ margin-bottom: .08rem;}
    .category section .top a{ flex: 1; background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%); height:2.8rem; padding:.2rem 0 0 .3rem; box-sizing: border-box; position: relative;}
    .category section .top a h3,p{ margin:0;}
    .category section .top a h3{ font-size: .32rem;}
    .category section .top a div{ font-size: .28rem; color: #777; margin-bottom: .1rem;}
    .category section .top a p{ font-size: .28rem; font-weight: 700;}
    .category section .top a.right p{ color: #af8260;}
    .category section .top a.left p{ color: #333;}
    .category section .top a.left p span{ color: #e81919;}
    .category section .top a img{ display: block; width:2.2rem; height:1.4rem; position: absolute; right:0; bottom:0;}
    .category section .top .left{ margin-right: .08rem;}
    .category section .bottom a{ flex: 1; background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%); height:2.8rem; box-sizing: border-box; position: relative; font-size: 0; display: flex; flex-direction: column; align-items: center;}
    .category section .bottom .left{ margin-right: .08rem;}
    .category section .bottom a h3{ margin:0;}
    .category section .bottom a h3{ font-size: .32rem; margin:0.3rem 0 0.1rem 0;}
    .category section .bottom a span{ padding:0 0.05rem; color: #777; border:1px solid #bbb; font-size: .2rem;}
    .category section .bottom a img{ display: block; width:100%; position: absolute; bottom:0;}
    .shopBox{background: #fff;margin-top: .3rem;padding-bottom: 1rem}
    .shop{ font-size: 0;}
    .shop h3.title{ font-size: .32rem; color: #000; padding:0 .3rem; margin-bottom:0 ; line-height: .32rem;}
    .shop ul li>a{ display: block;}
    .shop ul li section{ box-sizing: border-box; display: flex;}
    .shop ul li section .left{ padding:.3rem; box-sizing: border-box; flex: none;}
    .shop ul li section .left .imgbox{ width:1.3rem; height:1.3rem;}
    .shop ul li section .left .imgbox img{ display: block; width:100%; height:100%;}
    .shop ul li section .right{ padding:.3rem .3rem .3rem 0; box-sizing: border-box; flex: 1;}
    .shop ul li section .right .title{ display: flex; justify-content: space-between;}
    .shop ul li section .right .title h3{ font-size: .3rem; margin:0; line-height: .3rem;}
    .shop ul li section .right .title h3 span{ font-size: .2rem; padding:0 .05rem; margin-right: .1rem; background-image: linear-gradient(-139deg,#fff100,#ffe339); color: #6f3f15; box-sizing: border-box;}
    .shop ul li section .right .title .titleType{ font-size: .2rem; color: #999; border:1px solid #ddd; line-height: .3rem; height:.3rem; width:.3rem; box-sizing: border-box;text-align: center}
    .shop ul li section .right .information {  }
    .shop ul li section .right .information .stars{width:1.2rem; display: flex; justify-content: space-between;margin-right: .1rem;position:relative}
    .shop ul li section .right .information .stars div{width:80%;height: 100%;position:absolute;top:0;left: 0;overflow: hidden}
    .shop ul li section .right .information .stars div{width:}
    .shop ul li section .right .information .stars div span{ font-size:.18rem;color: #ffd000;font-family: 'iconfont';line-height: .4rem}
    .shop ul li section .right .information .stars span{ font-size:.18rem;color:#ccc;font-family: 'iconfont';line-height: .4rem}
    .shop ul li section .right .information .score{ font-size: .2rem; line-height: .4rem; margin:0 .1rem; color: #666;}
    .shop ul li section .right .information .sale{ font-size: .2rem; line-height: .4rem; color: #666;}
    .shop ul li section .right .sendInfo{ font-size: .2rem; line-height: .4rem; color: #666; display: flex; justify-content: space-between;}
    .shop ul li section .right .sendInfo .fee .line{ margin:0 .1rem;}
    .shop ul li section .right .sendInfo .time .line{ margin:0 .1rem;}
    .shop ul li section .right .line{ width:100%; height:1px; border-top:1px dotted #666; margin:.1rem 0;}
    .shop ul li section .right .discount{ width:100%; height:.8rem;}
    .shop ul li section .right .discount .information h3{ font-size: .2rem; line-height: .3rem; color: #666; margin:0; display: flex; font-weight:500; align-items: center; margin:.1rem 0;}
    .shop ul li section .right .discount .information h3 span{ display: block; font-size: .2rem; width:.26rem; height:.26rem; line-height: .26rem; text-align: center; color: #fff; background-color: #ccc; margin-right: .1rem;}
    .shop ul li.addmore{ height:2rem; text-align: center; font-size: .36rem; color: #666; line-height: .36rem;}
/*-------------footer---------------*/
    footer{ height:1rem; width:100%; position: fixed; bottom: 0px; z-index: 999; background-color: #fff; box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);}
    footer ul{ width:100%; height:100%; display: flex;}
    footer ul li{ width:25%; height:100%;}
    footer ul li a{ display: block; width:100%; height:100%; font-size: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;}
    footer ul li a span{ font-family: "iconfont"; font-size: .4rem; color: #666; line-height: .5rem;}
    footer ul li a p{ font-size: .26rem; text-align: center;}

</style>