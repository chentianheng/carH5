<template>
    <div class="container" >
        <div class="headImg" @click="getMsgTap">
            <img v-if="userMsg.headImgUrl" :src="userMsg.headImgUrl" style="height: 69px;
    width: auto;">
        </div>
        <div class="username" @click="getMsgTap">{{ userMsg.nickName ? userMsg.nickName : '点击登录' }}</div>
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
    import wx from 'weixin-js-sdk'
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
                copyUrl: 'http://h5share.yf-gz.cn/h5/index.html#/fashion',
                shareImg: 'https://zhaocha.yf-gz.cn/file/1558329389276_bf3be9dc56d3db5a0ed0d9d39fd00151.png',
                username:'范西客',
                code:'',
                userMsg:{
                    headImgUrl:'',
                    nickName:''
                }
            }
        },
        created () {
            // var option = getParams(location.search);
            // if(option.code){
            //     this.code = option.code
            //     this.getAccess_token(this.code)
            // }
            // console.log(localStorage.getItem('userMsg').nickName)
            if(localStorage.getItem('nickName')){
                this.userMsg.nickName = localStorage.getItem('nickName');
            }
            if(localStorage.getItem('headImgUrl')){
                this.userMsg.headImgUrl = localStorage.getItem('headImgUrl');
            }
            // this.getMember()
        },
        methods:{
            share () {
                console.log('share')
                var that = this
                this.option = {
                    title: 'VOLVO FUN SEEKER ASSEMBLE', // 分享标题, 请自行替换
                    desc: '选择一个你的标签，看看你是范西客哪一型？', // 分享描述, 请自行替换
                    link: that.copyUrl, // 分享链接，根据自身项目决定是否需要split
                    imgUrl: that.shareImg // 分享图标, 请自行替换，需要绝对路径
                }
                wx.onMenuShareTimeline({
                    title: that.option.title, // 分享标题
                    link: that.option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: that.option.imgUrl, // 分享图标
                    success () {
                        alert('分享朋友圈成功')
                        // 用户确认分享后执行的回调函数
                    },
                    cancel () {
                        // 用户取消分享后执行的回调函数
                    }})
                wx.onMenuShareAppMessage({
                    title: that.option.title, // 分享标题
                    desc: that.option.desc, // 分享描述
                    link: that.option.link,
                    imgUrl: that.option.imgUrl, // 分享图标
                    success: function () {
                        alert('分享给朋友成功')
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                })
                wx.updateTimelineShareData({
                    title: '选择一个你的标签，看看你是范西客哪一型？', // 分享标题
                    link: that.option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: that.option.imgUrl, // 分享图标
                    success () {
                        // alert('分享朋友圈成功')
                        // 用户确认分享后执行的回调函数
                    },
                    cancel () {
                        // 用户取消分享后执行的回调函数
                    }
                })
                wx.updateAppMessageShareData({
                    title: that.option.title, // 分享标题
                    desc: that.option.desc, // 分享描述
                    link: that.option.link,
                    imgUrl: that.option.imgUrl, // 分享图标
                    success: function () {
                        // alert('分享给朋友成功')
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                })
            },
            getMember(){
                const that = this;
                Drive.prototype.getMember().then(res => {
                    let list = res.data.data || [];
                    that.userMsg = list
                    that.share()
                    console.log(list)
                });
            },
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
                // this.$router.push({ path:'/choice' })
                this.$router.push('../choice')
            },
            hrefIntroduction(){
                // this.$router.push({ path:'/introduction' })
                this.$router.push('../introduction')
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