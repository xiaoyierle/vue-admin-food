<template>
    <div class="address">
        <header class="back">
            <a class="back" v-on:click="$router.back(-1)">&#xe6d9;</a>
            我的地址
        </header>
            <div class="outer">
                <section v-for="v in list" v-on:click="set_default(v.id)">
                    <div class="left">
                        <p class="person">
                            <span class="name">{{v.name}}</span>
                            <span class="sex">{{v.gender==1?'先生':'女士'}}</span>
                            <span class="tel">{{v.phone}}</span>
                        </p>
                        <p class="home">
                            {{v.address}}
                        </p>
                    </div>
                    <div class="right">&#xe64b;</div>
                </section>
            </div>
            <div class="addressFooter">
                <a v-on:click="go_newaddress">
                <h3><span>&#xe601;</span>新增收货地址</h3>
                </a>
            </div>
    </div>
</template>
<script>
    import router from '../router';
    export default {
        name:'address',
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            fetch('/api/get_user_address',{
                credentials:'include'
            }).then(res=>res.json())
                .then(r=>this.list = r);
        },
        methods:{
            set_default(id){
                fetch('/api/set_default_address?id='+id,{credentials:'include'})
                    .then(res=>res.json())
                    .then(r=>{
                        if(r==='ok'){
                            router.push({name:'checkout'});
                        }
                    })
            },
            go_newaddress(){
                router.push({name:'newaddress'})
            }
        }
    }
</script>
<style scoped>
    /*---------------头部*/
    header.back{ width: 100%; height:.88rem; background-image: linear-gradient(90deg,#90f,#90C); text-align: center;line-height: .88rem; font-size: .36rem; font-weight:600; color: #fff; position: fixed; top:0; left:0;}
    header a.back{ display: block; font-family: "iconfont"; width: 1rem; height: .88rem; font-size: .5rem; color: #fff; line-height: .88rem;text-align:center;box-sizing: border-box; text-align: center; position: absolute; top:0; left:0;  }
    /*--------------address*/
    .address{ width:100%;height:100%}
    .address .outer{ width: 100%; height:100%; box-sizing: border-box; padding:.88rem 0 1rem 0; background: #f5f5f5;}
    .address .outer section{ width:100%; height:1.5rem; padding:.3rem; box-sizing: border-box; background: #fff; display: flex;}
    .address .outer section .left{ width:6rem; height:100%; display: flex; flex-direction: column; justify-content: space-between; flex: none;}
    .address .outer section .left p.person{ font-size: .38rem; line-height: .4rem;}
    .address .outer section .left p.person span.name{ font-family: "微软雅黑"; font-weight:700; color: #333;}
    .address .outer section .left p.person span{ margin-right: .1rem; color: #666;}
    .address .outer section .left p.home{ font-size: .32rem; line-height: .32rem; width:6rem; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; color: #666;}
    .address .outer section .right{ height:100%; flex: 1; font-size: .4rem; line-height: 1rem; text-align: center; font-family: "iconfont";}
    .address .addressFooter{ height: 1rem; width: 100%; position: fixed; bottom: 0px; z-index: 999; background-color: #fff; box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1); display: flex; justify-content: space-between;}
    .address .addressFooter a{ display: block; width:100%; height:100%;}
    .address .addressFooter a h3{ line-height: 1rem; font-size: .36rem; margin:0; display: flex; justify-content: center; align-items: center; color: #0085ff;}
    .address .addressFooter a h3 span{ display: block; width:.4rem; height:.4rem; border-radius: 50%; border:1px solid #0085ff; color: #0085ff; font-family: "iconfont"; font-size: .3rem; line-height: .4rem; text-align: center;}

</style>