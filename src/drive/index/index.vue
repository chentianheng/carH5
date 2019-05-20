<template>
    <div class="container">
        <img class="mainImg" src="../../images/assets/home/main_06.png" alt="mainImg"/>
        <img class="logoImg" src="../../images/assets/home/logo_03.png" alt="logoImg"/>
        <img class="titleImg" src="../../images/assets/home/word.png" alt="titleImg"/>
        <img @click="hrefChoice" class="imgFooter" src="../../images/assets/home/footer.png" alt="">
    </div>
</template>

<script>
    import {Toast} from 'vux'
    import Drive from '@/tool/classFactory/car.js';
    import wx from 'weixin-js-sdk'
    export default {
        name: "home",
        components: {
            Toast
        },
        data () {
            return {
                copyUrl: 'https://jiayi.yf-gz.cn/?superiorId=" + customer.getId() + "#/my',
                shareImg: 'https://zhaocha.yf-gz.cn/file/1547712343646_1f34c44062c690edeacba339a53a07f1.png'
            }
        },
        created () {
            this.getMember()
        },
        methods:{
            share () {
                console.log('share')
                var that = this
                this.option = {
                    title: '嘉壹科技', // 分享标题, 请自行替换
                    desc: '一站式互联网金融信息服务平台，免高额中介服务费，学习掌握贷款黑科技，最高200000极速下款，一键提交，最快10分钟下款！！！', // 分享描述, 请自行替换
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
                    title: '嘉壹科技:一站式互联网金融服务平台，免高额中介服务费，最高20万极速下款。', // 分享标题
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
            hrefChoice(){
                this.$router.push({ path:'/choice' })
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
        background: black url("../../images/assets/choice/background02.png") no-repeat ;
        background-size: 100%;
        width: 100%;
    }
    .mainImg{
        margin-top: 5rem;
        width: 50%;
    }
    .logoImg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 12%;
    }
    .titleImg{
        margin-top: 2rem;
        height: 1.5rem;
    }
    .imgFooter{
        width: 70%;
        position: absolute;
        bottom: 25px;
        width: 70%;
    }
</style>
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
