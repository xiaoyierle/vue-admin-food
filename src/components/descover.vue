<template>
    <div class="discovery">
        <header class="back">
            <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            发现
        </header>
        <div>
            <section class="one">
                <a href="/">
                <div class="left">
                    <h3>积分商城</h3>
                    <p>0元好物在这里</p>
                </div>
                <img src="/imgs/jfsc.jpeg" alt=""/>
                </a>
                <a href="/">
                <div class="left">
                    <h3>必吃爆料</h3>
                    <p>最夯外卖指南</p>
                </div>
                <img src="/imgs/bcbl.jpeg" alt=""/>
                </a>
                <a href="/">
                <div class="left">
                    <h3>推荐有奖</h3>
                    <p>5元现金拿不停</p>
                </div>
                <img src="/imgs/tjyj.jpeg" alt=""/>
                </a>
                <a href="/">
                <div class="left">
                    <h3>周边优惠</h3>
                    <p>领取口碑好券</p>
                </div>
                <img src="/imgs/zbyh.jpeg" alt=""/>
                </a>
            </section>
            <div class="tiao"></div>
            <section class="item">
                <h3 class="activity-head">
                    <span>&#xe6e4;</span>美食推荐
                </h3>
                <p>这里有每日必吃美食</p>
                <div class="innerbox">
                    <ul>
                        <li>
                            <img src="/imgs/mlnr.jpeg" alt=""/>
                            <div class="name">
                                <h3>麻辣拌牛肉（可不辣）</h3>
                                <p><span>¥26</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="/imgs/mlnr.jpeg" alt=""/>
                            <div class="name">
                                <h3>麻辣拌牛肉（可不辣）</h3>
                                <p><span>¥26</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="/imgs/mlnr.jpeg" alt=""/>
                            <div class="name">
                                <h3>麻辣拌牛肉（可不辣）</h3>
                                <p><span>¥26</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="tiao"></div>
            <section class="item">
                <h3 class="activity-head">
                    <span>&#xe66d;</span>天天特价
                </h3>
                <p>特价商品，一网打尽</p>
                <div class="innerbox">
                    <ul>
                        <li>
                            <img src="/imgs/mlnr.jpeg" alt=""/>
                            <div class="name">
                                <h3>麻辣拌牛肉（可不辣）</h3>
                                <p><span>¥26</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="/imgs/mlnr.jpeg" alt=""/>
                            <div class="name">
                                <h3>麻辣拌牛肉（可不辣）</h3>
                                <p><span>¥26</span></p>
                            </div>
                        </li>
                        <li>
                            <img src="/imgs/mlnr.jpeg" alt=""/>
                            <div class="name">
                                <h3>麻辣拌牛肉（可不辣）</h3>
                                <p><span>¥26</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
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
    
</script>
<style scoped>
    /*---------------头部*/
    header.back{ width: 100%; height:.88rem; background-image: linear-gradient(90deg,#90f,#90C); text-align: center;line-height: .88rem; font-size: .36rem; font-weight:600; color: #fff; position: fixed; top:0; left:0;}
    header a.back{ display: block; font-family: "iconfont"; width: 1rem; height: .88rem; font-size: .5rem; color: #fff; line-height: .88rem;text-align:center;box-sizing: border-box; text-align: center; position: absolute; top:0; left:0;  }/*---------------------footer*/
    /*descover 模块*/
    .discovery{ height:100%; width:100%;}
    .discovery .tiao{ width:100%; height:.24rem; background: #eee;}
    .discovery .one{ width:100%; display: flex; flex-wrap: wrap;}
    .discovery .one a{ display: block; width:50%; height:1.6rem; padding:0 .3rem; border-right: 1px solid #eee; border-bottom: 1px solid #eee; box-sizing: border-box; display: flex; justify-content:space-around; align-items: center;}
    .discovery .one a .left{ font-size: .3rem;}
    .discovery .one a .left h3{ margin:0;}
    .discovery .one a .left p{ font-size: .28rem; color: #999; font-weight:400;}
    .discovery .one a img{ display: block; width:.9rem; height:.9rem;}
    .discovery>div{ height:100%; padding:.88rem 0 1rem 0;}
    .discovery section.item{ width:100%; padding:.3rem 0;}
    .discovery section.item .activity-head{ font-size: .36rem; text-align: center; margin: 0;}
    .discovery section.item .activity-head span{ font-size: .36rem; color: #FF0036; font-family: "iconfont";}
    .discovery section.item p{ font-size: .2rem; text-align: center; color: #666;}
    .discovery section.item .innerbox {width: 100%;padding: .3rem;box-sizing: border-box;}
    .discovery section.item .innerbox ul{ display: flex; justify-content: space-between;}
    .discovery section.item .innerbox ul li{ width:2.2rem;  }
    .discovery section.item .innerbox ul li img{ width:100%;}
    .discovery section.item .innerbox ul li .name h3{ font-size: .22rem; margin:0; color: #666; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;}
    .discovery section.item .innerbox ul li .name p{ font-size: .26rem; color: #ff0036; text-align: left;}
/*--------------footer--------------*/
    footer{ height:1rem; width:100%; position: fixed; bottom: 0px; z-index: 999; background-color: #fff; box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);}
    footer ul{ width:100%; height:100%; display: flex;}
    footer ul li{ width:25%; height:100%;}
    footer ul li a{ display: block; width:100%; height:100%; font-size: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;}
    footer ul li a span{ font-family: "iconfont"; font-size: .4rem; color: #666; line-height: .5rem;}
    footer ul li a p{ font-size: .26rem; text-align: center;}

</style>