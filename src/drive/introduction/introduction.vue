<template>
    <div class="container">
        <!--<img @click="hrefMain" class="btn1" src="../../images/assets/introduction/btn1.png" alt="btn1">-->
        <!--<img @click="hrefSecondary" class="btn2" src="../../images/assets/introduction/btn2.png" alt="btn2">-->
        <div class="container">
            <div class="content">
                <img class="primaryTitle" src="../../images/assets/introduction/primary.png" alt="" />
                <p class="pContent">全新XC40 & MAO LiveHouse</p>
                <p class="pContent">'范西客'的自由之路上市音乐派对</p>
                <p class="pContent">全新XC40隆重上市</p>
                <p class="pContent">汽车打卡Talk Show</p>
                <img @click="hrefMain" class="btn1" src="../../images/assets/introduction/btn1.png" alt="btn1">
                <img class="line" src="../../images/assets/introduction/line.png" />
                <img class="secondaryTitle" src="../../images/assets/introduction/secondary.png" />
                <p class="pContent">沃尔沃南区XC40联动上市发布会</p>
                <p class="pContent">全新XC40直播上市</p>
                <p class="pContent">全区直播互动</p>
                <img @click="hrefSecondary" class="btn2" src="../../images/assets/introduction/btn2.png" alt="btn2">
            </div>

        </div>
    </div>
</template>

<script>
    import Drive from '@/tool/classFactory/car.js';
    import wx from 'weixin-js-sdk';
    export default {
        data(){
            return{
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
            hrefMain(){
                // this.$router.push({ path:'/primary' })
                this.$router.push('../primary')
            },
            hrefSecondary(){
                // this.$router.push({ path:'/secondary' })
                this.$router.push('../secondary')
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
        background: black url("../../images/assets/main/mainBg.png") no-repeat ;
        background-size: 100%;
        width: 100%;
    }
    .content{
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: rgba(0,0,0,0.9);
        top: 7rem;
        width: 20rem;
        height: 28rem;
        align-items: center;
    }
    .primaryTitle{
        height: 1.2rem;
        margin-bottom: 1rem;
    }
    .secondaryTitle{
        height: 1.1rem;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }
    .pContent{
        color: #FFFFFF;
        opacity: 0.7;
    }
    .btn1{
        margin-top: 1rem;
        width: 30%;
    }
    .btn2{
        margin-top: 1rem;
        width: 30%;
    }
    .line{
        margin-top: 1rem;
        width: 20.5rem;
    }
</style>