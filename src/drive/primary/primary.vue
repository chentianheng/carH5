<template>
    <div class="container">
        <p>XC40 x 广州MAO LiveHouse</p>
        <p>报名参与，有机会免费获得音乐派对门票！</p>
        <div class="input">
            <label for="name">姓名：</label>
            <input id="name" type="text" v-model="member.name" style="font-size: 15px;">
        </div>
        <div class="input">
            <label for="tel">电话：</label>
            <input id="tel" type="number" v-model="member.phone" style="font-size: 15px;">
        </div>
        <button @click="mainSubmit" class="submitBtn"></button>
        <p class="submitFooter">*活动详情敬请咨询沃尔沃当地授权经销商</p>

        <!--    弹窗提示-->
        <div class="thxContainer" v-show="isshow">
            <img src="../../images/assets/btn/thx.png" alt="" height="200" width="200">
        </div>
        <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="msg" :position="middle">{{msg}}</toast>
    </div>
</template>

<script>
    import {Toast} from 'vux'
    import Drive from '@/tool/classFactory/car.js';
    import wx from 'weixin-js-sdk';
    export default {
        components: {
            Toast
        },
        name: "main",
        data(){
            return{
                copyUrl: 'http://h5share.yf-gz.cn/h5/index.html#/index',
                shareImg: 'https://zhaocha.yf-gz.cn/file/1558329389276_bf3be9dc56d3db5a0ed0d9d39fd00151.png',
                isshow:false,
                member:{
                    name: null,
                    phone: null,
                    province: null,
                    city: null
                },
                showPositionValue: false,
                middle: 'middle',
                msg:'信息不全',
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
            },
            postMember(){
                const that = this;
                console.log(that.member)
                if(that.member.phone && that.member.name){
                    Drive.prototype.postMember(that.member).then(res => {
                        let list = res.data.data || [];
                        that.isshow = true
                        console.log(list)
                    });
                }else {
                    that.showPositionValue = true
                }

            },
            mainSubmit(){
                this.postMember()
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
    p{
        margin-top: 10rem;
        color: #FFFFFF;
    }
    p + p {
        margin-top: 0.5rem;
    }
    .input{
        background-color: rgba(239,63,129,0.7);
        padding: 0.5rem;
        margin-top: 1.5rem;
    }
    .input label{
        display: inline-flex;
        vertical-align: top;
        color: #FFFFFF;
    }
    .input input{
        background-color: transparent;
        border: none;
        color: #FFFFFF;
    }
    .submitBtn{
        background-image: url("../../images/assets/btn/submit.png");
        background-size:12rem 1.5rem ;
        background-repeat: no-repeat;
        border-style: none;
        width: 12rem;
        height: 1.5rem;
        position: absolute;
        bottom: 34px;
        opacity: 0.8;
    }
    .submitFooter{
        color: #FFFFFF;
        font-size: 0.7rem;
        position: absolute;
        bottom: 10px;
    }
    .thxContainer{
        display: flex;
        position: absolute;
        background-color: rgba(0,0,0,0.8);
        top: 4rem;
        width: 20rem;
        height: 30rem;
        justify-content: center;
        align-items: center;
    }
</style>