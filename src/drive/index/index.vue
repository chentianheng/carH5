<template>
    <div>
        <div class="container">
            <img class="mainImg" src="../../images/assets/home/main_06.png" alt="mainImg"/>
            <img class="logoImg" src="../../images/assets/home/logo_03.png" alt="logoImg"/>
            <img class="titleImg" src="../../images/assets/home/word.png" alt="titleImg"/>
            <img @click="hrefChoice" class="imgFooter" src="../../images/assets/home/footer.png" alt="">
        </div>
    </div>

</template>

<script>
    import {Toast} from 'vux'
    import Drive from '@/tool/classFactory/car.js';
    import wx from 'weixin-js-sdk';
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
        name: "home",
        components: {
            Toast
        },
        data () {
            return {
                copyUrl: 'http://h5share.yf-gz.cn/h5/index.html#/index',
                shareImg: 'https://zhaocha.yf-gz.cn/file/1558329389276_bf3be9dc56d3db5a0ed0d9d39fd00151.png',
                // music:'http://qiniu.jindou360.com/FgS86ODTt7EjQPAL82WVgBDmEu2I',
                audio: {
                    currentTime: 0,
                    maxTime: 0,
                    playing: false,
                    muted: false,
                    speed: 1,
                    waiting: true,
                    preload: 'auto'
                },
                controlList: {
                    // 不显示下载
                    noDownload: false,
                    // 不显示静音
                    noMuted: false,
                    // 不显示音量条
                    noVolume: false,
                    // 不显示进度条
                    noProcess: false,
                    // 只能播放一个
                    onlyOnePlaying: false,
                    // 不要快进按钮
                    noSpeed: false
                },
            }
        },
        created () {
            var option = getParams(location.search);
            if(option.code){
                this.code = option.code
                this.getAccess_token(this.code)
            }
            if(localStorage.getItem('nickName')){
                this.userMsg.nickName = localStorage.getItem('nickName');
            }
            if(localStorage.getItem('headImgUrl')){
                this.userMsg.headImgUrl = localStorage.getItem('headImgUrl');
            }
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
                console.log(localStorage.getItem('headImgUrl'))
                if(!localStorage.getItem('headImgUrl')){
                    this.getMsgTap()
                }else {
                    this.$router.push({ path:'/choice' })
                }
            },
            onError () {
                console.log('onError')
                this.audio.waiting = true
            },
            startPlayOrPause() {
                const that = this
                return this.audio.playing ? this.pausePlay() : this.startPlay()
            },
            // 开始播放
            startPlay() {
                this.$refs.audio.play()
            },
            // 暂停
            //haha
            pausePlay() {
                this.$refs.audio.pause()
            },
            // 当音频暂停
            onPause (e) {
                this.audio.playing = false
            },
            // 当音频开始等待
            onWaiting (res) {
            },
            onPlaying (res){

            },
            // 当音频开始播放
            onPlay (res) {
                console.log('onPlay')
                this.audio.playing = true
                this.audio.loading = false
                if(!this.controlList.onlyOnePlaying){
                    return
                }
                let target = res.target
                let audios = document.getElementsByTagName('audio');
                [...audios].forEach((item) => {
                    if(item !== target){
                        item.pause()
                    }
                })
            },
            // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
            onTimeupdate(res) {
                this.audio.currentTime = res.target.currentTime
                this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
            },
            // 当加载语音流元数据完成后，会触发该事件的回调函数
            // 语音元数据主要是语音的长度之类的数据
            onLoadedmetadata(res) {
                console.log('onLoadedmetadata')
                const that = this
                this.audio.waiting = false
                this.audio.maxTime = parseInt(res.target.duration)
                if(!this.audio.playing){
                    this.startPlay()
                }
            },
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
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

