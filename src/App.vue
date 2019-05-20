<template>
    <div id="app">
        <router-view v-bind:style="{height : myHeight}"></router-view>
    </div>
</template>

<script>
    import wx from 'weixin-js-sdk'
    import Drive from '@/tool/classFactory/car.js';
    export default {
        name: 'app',
        data() {
            return {
                myHeight: (window.innerHeight) + 'px'
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
