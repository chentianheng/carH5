<template>
    <div class="container">

        <img class="title" src="../../images/assets/choice/标题.png" alt="title"/>
        <img @click="hrefFashion" class="btn1" src="../../images/assets/choice/btn1.png" alt="btn1"/>
        <img @click="hrefTech" class="btn2" src="../../images/assets/choice/btn2.png" alt="btn2"/>
        <img @click="hrefReliable" class="btn3" src="../../images/assets/choice/btn3.png" alt="btn3"/>

        <img class="footer" src="../../images/assets/home/main_06.png" height="50" width="50"/>
    </div>
</template>

<script>
    import Drive from '@/tool/classFactory/car.js';
    import wx from 'weixin-js-sdk'
    export default {
        name: "home",
        data () {
            return {
                copyUrl: 'http://h5share.yf-gz.cn/h5/index.html#/index',
                shareImg: 'https://zhaocha.yf-gz.cn/file/1558329389276_bf3be9dc56d3db5a0ed0d9d39fd00151.png'
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
            hrefFashion(){
                this.$router.push({ path:'/fashion' })
            },
            hrefTech(){
                this.$router.push({ path:'/tech' })
            },
            hrefReliable(){
                this.$router.push({ path:'/reliable' })
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
    .background {
        display: inline-flex;
        width: 100%;
    }
    .title{
        margin-top: 2rem;
        width: 80%;
    }
    .btn1{
        margin-top: 3rem;
        width: 50%;
    }
    .btn2{
        margin-top: 1rem;
        width: 50%;
    }
    .btn3{
        margin-top: 1rem;
        width: 50%;
    }
    .footer{
        margin-top: 10rem;
        display: flex;
    }
</style>
