<template>
    <div id="app">
        <img style="position: absolute;height: 30px;width: auto;left: 10px;top: 10px;"
             src="./images/assets/btn/play.png" @click="startPlayOrPause"/>
        <!--<router-view v-bind:style="{height : myHeight}">-->
        <!--</router-view>-->
        <keep-alive>
            <router-view v-bind:style="{height : myHeight}"></router-view>
        </keep-alive>
        <div>
            <audio ref="audio" id="music_mp3_0" class="dn"
                   :src="music" :preload="audio.preload"
                   @play="onPlay"
                   @error="onError"
                   @waiting="onWaiting"
                   @playing="onPlaying"
                   @pause="onPause"
                   @timeupdate="onTimeupdate"
                   @loadedmetadata="onLoadedmetadata"></audio>
        </div>
        <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="msg" :position="middle">{{msg}}</toast>
    </div>
</template>

<script>
    import wx from 'weixin-js-sdk'
    import Drive from '@/tool/classFactory/car.js';
    import {Toast} from 'vux'
    export default {
        name: 'app',
        components: {
            Toast
        },
        data() {
            return {
                myHeight: (window.innerHeight) + 'px',
                music: 'https://zhaocha.yf-gz.cn/file/1558359586024_7e903f1a0ab60a058a2f3157b9ac84c8.mp3',
                showPositionValue: false,
                middle: 'middle',
                msg:'信息不全',
                audio: {
                    currentTime: 0,
                    maxTime: 0,
                    playing: false,
                    muted: true,
                    speed: 1,
                    waiting: true,
                    preload: 'auto'
                },
                time:50,
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
        methods: {
            timer: function () {
                if (this.time > 0) {
                    this.time--;
                    var m = '';
                    var s = '';
                    m = Math.floor(this.time/60%60);
                    m < 10&&(m='0'+m);
                    s = Math.floor(this.time%60);
                    s < 10&&(s='0'+s);
                    setTimeout(this.timer, 1000);
                } else {
                    this.time = 0;
                    return this.audio.playing ? this.pausePlay() : this.startPlay()
                }
            },
            wxConfig() {
                Drive.prototype.jsTicket().then(res => {
                    let list = res.data.data || [];
                    var jsTicket = list
                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: jsTicket.appId, // 必填，公众号的唯一标识
                        timestamp: jsTicket.timestamp, // 必填，生成签名的时间戳
                        nonceStr: jsTicket.nonceStr, // 必填，生成签名的随机串
                        signature: jsTicket.signature,// 必填，签名，见附录1
                        jsApiList: ['hideOptionMenu', 'chooseWXPay', 'updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });
                    // console.log(list)
                });
            },
            //处理微信浏览器音乐自动播放问题
            audioAutoPlay() {
                var musicEle0 = document.getElementById('music_mp3_0');
                musicEle0.play();
                // document.addEventListener('DOMContentLoaded', function () {
                //     function audioAutoPlay() {
                //         var musicEle0 = document.getElementById('music_mp3_0');
                //         musicEle0.play();
                //     }
                //     audioAutoPlay();
                //     this.showPositionValue = true
                // });
            },
            musicPlay(isPlay) {
                if (isPlay && !this.audio.playing) {
                    this.startPlay()
                }
                if (!isPlay && !this.audio.playing) {
                    this.pausePlay()
                }
            },
            onError() {
                console.log('onError')
                this.audio.waiting = true
            }
            ,
            startPlayOrPause() {
                const that = this
                return this.audio.playing ? this.pausePlay() : this.startPlay()
            }
            ,
            // 开始播放
            startPlay() {
                this.$refs.audio.play()
            }
            ,
            // 暂停
            //haha
            pausePlay() {
                this.$refs.audio.pause()
            }
            ,
            // 当音频暂停
            onPause(e) {
                this.audio.playing = false
            }
            ,
            // 当音频开始等待
            onWaiting(res) {
            }
            ,
            onPlaying(res) {

            }
            ,
            // 当音频开始播放
            onPlay(res) {
                console.log('onPlay')
                this.audio.playing = true
                this.audio.loading = false
                if (!this.controlList.onlyOnePlaying) {
                    return
                }
                let target = res.target
                let audios = document.getElementsByTagName('audio');
                [...audios].forEach((item) => {
                    if (item !== target) {
                        item.pause()
                    }
                })
            }
            ,
            // 当timeupdate事件大概每秒一次，用来更新音频流的当前播放时间
            onTimeupdate(res) {
                this.audio.currentTime = res.target.currentTime
                this.sliderTime = parseInt(this.audio.currentTime / this.audio.maxTime * 100)
            }
            ,
            // 当加载语音流元数据完成后，会触发该事件的回调函数
            // 语音元数据主要是语音的长度之类的数据
            onLoadedmetadata(res) {
                console.log('onLoadedmetadata')
                this.showPositionValue = true
                const that = this
                this.audio.waiting = false
                this.audio.maxTime = parseInt(res.target.duration)
                if (!this.audio.playing) {
                    this.startPlay()
                }
            }
        },
        mounted() {
            this.timer()
            this.wxConfig()
        }
        ,
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';

    body {
        background-color: #f7f7f7;
    }

</style>
