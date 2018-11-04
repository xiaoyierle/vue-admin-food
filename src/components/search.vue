<template>
    <div class="searchPage">
        <section class="searchTop">
            <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            <form class="searchForm">
                <div class="searchBtn">&#xe761;</div>
                <input type="text" placeholder="请输入商品名称" />
                <input type="button" value="搜索"/>
            </form>
        </section>
        <div class="searchMain">
            <h2>热门搜索</h2>
            <div class="hotSearch">
                <ul>
                    <li key=1><span>大碗面</span></li>
                    <li key=1><span>大碗面</span></li>
                    <li key=1><span>大碗面</span></li>
                    <li key=1><span>大碗面</span></li>
                    <li key=1><span>大碗面</span></li>
                    <li key=1><span>大碗面</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'search'
    }
</script>
<style scoped>
    .searchPage .searchTop{width:100%;height:1rem;display: flex;}
    .back{font-family: "iconfont";width:1rem;height:1rem;padding:.2rem;font-size: .5rem;color: #999;line-height: .6rem;box-sizing: border-box;text-align: center;}
    .searchPage .searchTop .searchForm{height:1rem;padding:.2rem .2rem .2rem 0;flex-grow: 1;box-sizing: border-box;display: flex;justify-content: flex-end;}
    .searchPage .searchTop .searchForm .searchBtn{width:.6rem;font-size: .3rem;line-height: .6rem;background: #f8f8f8;color: #999;font-family: "iconfont";font-weight:600;text-align: center;}
    .searchPage .searchTop .searchForm input[type=text]{background-color: #f8f8f8;border:0;flex-grow:1;color: #999;outline:none;}
    .searchPage .searchTop .searchForm input[type=button]{background-color: #fff;border:0;font-size: .34rem;color: #333;width:.8rem;padding:0;margin:0;font-weight:700;outline:none;}
    .searchPage .searchMain{ width:100%; padding:0 .2rem; box-sizing: border-box;}
    .searchPage .searchMain h2{ font-size: .34rem; color: #666; font-weight: 600;}
    .searchPage .searchMain .hotSearch{ padding:.1rem 0;}
    .searchPage .searchMain .hotSearch ul li{ display: inline-block; height:auto;}
    .searchPage .searchMain .hotSearch ul li span{ display: block; font-size: .3rem; padding:.15rem .15rem; margin:.2rem .2rem 0 0; background: #f7f7f7; border-radius: 0.06rem;}
</style>