<template>
    <div id="app">
        <img style="position: absolute;height: 30px;width: auto;left: 10px;top: 10px;" src="./images/assets/btn/play.png"  @click="startPlayOrPause"/>
        <router-view v-bind:style="{height : myHeight}">
        </router-view>
        <div>
            <audio ref="audio" class="dn"
                   :src="music" :preload="audio.preload"
                   @play="onPlay"
                   @error="onError"
                   @waiting="onWaiting"
                   @playing="onPlaying"
                   @pause="onPause"
                   @timeupdate="onTimeupdate"
                   @loadedmetadata="onLoadedmetadata"></audio>
        </div>
    </div>
</template>

<script>
    import wx from 'weixin-js-sdk'
    import Drive from '@/tool/classFactory/car.js';
    export default {
        name: 'app',
        data() {
            return {
                myHeight: (window.innerHeight) + 'px',
                music:'http://qiniu.jindou360.com/FgS86ODTt7EjQPAL82WVgBDmEu2I',
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
        methods:{
            wxConfig () {
                Drive.prototype.jsTicket().then(res => {
                    let list = res.data.data || [];
                    var jsTicket = list
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: jsTicket.appId, // 必填，公众号的唯一标识
                        timestamp: jsTicket.timestamp, // 必填，生成签名的时间戳
                        nonceStr: jsTicket.nonceStr, // 必填，生成签名的随机串
                        signature: jsTicket.signature,// 必填，签名，见附录1
                        jsApiList: ['hideOptionMenu', 'chooseWXPay','updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    // console.log(list)
                });
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
            }
        },
        mounted () {
            this.wxConfig()
        },
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    body {
        background-color: #f7f7f7;
    }

</style>
