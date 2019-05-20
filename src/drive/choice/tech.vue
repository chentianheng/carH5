<template>
    <div class="container">
        <div class="headImg" >
            <img v-if="userMsg.headImgUrl" :src="userMsg.headImgUrl" style="height: auto;
    width: 86px;">
        </div>
        <div class="username">{{ userMsg.nickName ? userMsg.nickName : '点击登录' }}</div>
        <div class="userTitle">就是科技范西客</div>
        <div class="subtitle1">手机用新款，电脑要高配</div>
        <div class="subtitle2">你是执着于拥有酷炫装备的科技控</div>
        <img class="XC40" src="../../images/assets/btn/xc40.png">
        <div class="backBtn">
            <button @click="hrefChoice" class="choiceBtn">再测一次</button>
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
            // console.log(localStorage.getItem('userMsg').nickName)
            if(localStorage.getItem('nickName')){
                this.userMsg.nickName = localStorage.getItem('nickName');
            }
            if(localStorage.getItem('headImgUrl')){
                this.userMsg.headImgUrl = localStorage.getItem('headImgUrl');
            }
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
                    localStorage.setItem('nickName',list.nickName);
                    localStorage.setItem('headImgUrl',list.headImgUrl);
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
        background: black url("../../images/assets/choice/tech.png") no-repeat ;
        background-size:  auto 100%;
        width: 100%;
    }
    .headImg {
        position: absolute;
        top: 2rem;
        left: 1rem;
        width: 4rem;
        height: 4rem;
    }
    .username {
        position: absolute;
        top: 6rem;
        left: 1.5rem;
        color: #000000;
        font-weight: bold;
        margin-top: 6px;
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