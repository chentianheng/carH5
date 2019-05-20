<template>
    <div class="container" @click="getMsgTap">
        <div class="headImg" >
            <img :src="userMsg.headImgUrl" style="height: auto;
    width: 86px;">
        </div>
        <div class="username">{{ userMsg.nickName ? userMsg.nickName : '点击登录' }}</div>
        <div class="userTitle">就是时尚范西客</div>
        <div class="subtitle1">讲究设计、质感、搭配</div>
        <div class="subtitle2">你就是行走在都市中的时髦精</div>
        <img class="XC40" src="../../images/assets/btn/xc40.png">
        <div class="backBtn">
            <button  @click="hrefChoice" class="choiceBtn">再测一次</button>
        </div>
        <div class="nextBtn">
            <button @click="hrefIntroduction" class="choiceBtn">与沃同行</button>
        </div>
        <div>
            <img class="qrcode" src="../../images/assets/home/qrcode.png">
        </div>

    </div>
</template>

<script>
    import Drive from '@/tool/classFactory/car.js';
    const getParams = function (url) {
        let params = {}
        if (url.includes('?')) {
            let list = url.split('?')[1].split('&');
            list.forEach(item => {
                params[item.split('=')[0]] = decodeURIComponent(item.split('=')[1])
            })
        }
        return params
    }
    export default {
        data(){
            return{
                username:'范西客',
                code:'',
                userMsg:{
                    headImgUrl:'',
                    nickName:''
                }
            }
        },
        created () {
            var option = getParams(location.search);
            if(option.code){
                this.code = option.code
                this.getAccess_token(this.code)
            }
            this.userMsg = localStorage.getItem('userMsg');
        },
        methods:{
            getMsgTap(){
                var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + 'wx3450d66aef061ce2' + '&redirect_uri=' +
                    encodeURIComponent('http://h5share.yf-gz.cn/h5/index.html#/fashion') + '&response_type=' +
                    'code' + '&scope=' + 'snsapi_userinfo' + '&state=' + 123 + '#wechat_redirect'
                window.location.href = url
            },
            getAccess_token(code){
                const that = this;
                Drive.prototype.updateUserInfo(code).then(res => {
                    let list = res.data.data || [];
                    console.log(list)
                    that.userMsg = list
                    localStorage.setItem('userMsg',list);

                });
            },
            hrefChoice(){
                this.$router.push({ path:'/choice' })
            },
            hrefIntroduction(){
                this.$router.push({ path:'/introduction' })
            }
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        background: black url("https://zhaocha.yf-gz.cn/file/1558284360980_a8d8cf2ff4f4c39722919ec31a976f63.png") no-repeat ;
        background-size:  auto 100%;
        width: 100%;
    }
    .headImg {
        position: absolute;
        top: 2rem;
        left: 1rem;
        width: 4rem;
        height: 4rem;
        /*padding: 0.5rem;*/
        /*background-color: #FFFFFF;*/
    }
    .username {
        position: absolute;
        top: 6rem;
        left: 1.5rem;
        color: #FFFFFF;
    }
    .userTitle {
        font-size: 1.2rem;
        position: absolute;
        top: 9rem;
        left: 1.5rem;
        color: #FFFFFF;
        background-color: black;
        opacity: 0.6;
    }
    .subtitle1{
        position: absolute;
        top: 11rem;
        left: 1.5rem;
        color: #FFFFFF;
        background-color: black;
        opacity: 0.6;
    }
    .subtitle2{
        position: absolute;
        top: 12.5rem;
        left: 1.5rem;
        color: #FFFFFF;
        background-color: black;
        opacity: 0.6;
    }
    .XC40{
        position: absolute;
        left: 1.5rem;
        bottom: 8rem;
        width: 30%;
    }
    .qrcode{
        position: absolute;
        right: 2.5rem;
        bottom: 3rem;
        width: 23%;
    }
    .backBtn{
        position: absolute;
        left: 1.5rem;
        bottom: 5rem;
        border: 0.1rem solid #FFFFFF;
        padding: 0.2rem;
    }
    .nextBtn{
        position: absolute;
        left: 8rem;
        bottom: 5rem;
        border: 0.1rem solid #FFFFFF;
        padding: 0.2rem;
    }
    .choiceBtn{
        border-radius: 0;
        background-color: transparent;
        border: 0.1rem solid #FFFFFF;
        padding: 0.2rem 0.4rem;
        color: #FFFFFF;
    }
</style>