<template>
    <div class="container">
    <div class="commentRoom">
        <div class="msgBox" style="width: 100%;">
            <li
                    is="msgBox"
                    v-for="(msg,index) in msgs"
                    :key="msg.id"
                    :data="msg"
            ></li>
        </div>
    </div>
    <div class="msgContainer">
        <form v-on:submit.prevent="addNewMsg">
            <input
                    class="msgInput"
                    type="text"
                    v-model="chatList.msg"
                    maxlength="20"
            >
            <button class="sendBtn">发送</button>
        </form>
    </div>
        <img class="footer" src="../../images/assets/home/main_06.png" height="50" width="50"/>

        <!--    弹窗提示:点击开始抽奖游戏-->
        <div class="thxContainer" v-show="btnShow">
            <img @click="playGame" src="../../images/assets/activity/playGame.png" alt="" height="200" width="200">
        </div>

        <!--   弹出抽奖结果-->
        <div class="thxContainer" v-show="resultShow" @click="resultTap">
            <img src="../../images/assets/activity/gift.png" alt="" width="150">
            <p class="resultMsg">{{ message }}</p>
            <p class="resultFooter">*请截图保存抽奖结果</p>
        </div>

    </div>


</template>

<script>
    import msgBox from '../../components/msgBox'
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
        name: "comment",
        components:{
            msgBox
        },
        data(){
            return{
                page :'1',
                pageSize:"20",
                message:'',
                btnShow:false,
                resultShow:false,
                newMsgText :'',
                msgs:[
                ],
                chatList:{
                    headImgUrl:'',
                    nickName:'',
                    msg:''
                },
                messages:[
                    '恭喜您！抽中了：沃尔沃钱包',
                    '恭喜您！抽中了：沃尔沃活力运动水壶',
                    '恭喜您！抽中了：沃尔沃北欧麋鹿钥匙圈',
                    '谢谢参与'
                ],
                nextMsgId : 3
            }
        },
        created () {
            var option = getParams(location.search);
            console.log(option)
            if(option.code){
                this.code = option.code
                this.getAccess_token(this.code)
            }
            this.getChat()
            if(localStorage.getItem('nickName')){
                this.chatList.nickName = localStorage.getItem('nickName');
            }
            if(localStorage.getItem('headImgUrl')){
                this.chatList.headImgUrl = localStorage.getItem('headImgUrl');
            }
        },
        methods:{
            getChat(){
                const that = this;
                Drive.prototype.getChat().then(res => {
                    let list = res.data.data || [];
                    console.log(list)
                    for(var idx in list){
                        if(list[idx].msg){
                            that.msgs.push({
                                headImgUrl: list[idx].headImgUrl,
                                nickName: list[idx].nickName,
                                msg:list[idx].msg
                            })
                        }
                    }
                    console.log(that.msgs)
                });
            },
            postChat(data){
                const that = this;
                Drive.prototype.postChat(data).then(res => {
                    let list = res.data.data || [];
                    console.log(list)
                    that.msgs.push({
                        headImgUrl: list.headImgUrl,
                        nickName: list.nickName,
                        msg:list.msg
                    })
                    that.chatList.msg = '';
                    that.btnShow = true
                });
            },
            addNewMsg(){
                console.log('hcj')
                console.log(this.chatList)
                const that = this
                if(this.chatList.nickName){
                    if(this.chatList.msg){
                        this.postChat(that.chatList)
                    }
                }else {
                    this.getMsgTap()
                }

            },
            getMsgTap(){
                var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + 'wx3450d66aef061ce2' + '&redirect_uri=' +
                        encodeURIComponent('http://h5share.yf-gz.cn/h5/index.html#/comment') + '&response_type=' +
                    'code' + '&scope=' + 'snsapi_userinfo' + '&state=' + 123 + '#wechat_redirect'
                window.location.href = url
            },
            getAccess_token(code){
                const that = this;
                Drive.prototype.updateUserInfo(code).then(res => {
                    let list = res.data.data || null;
                    console.log(list)
                    that.userMsg = list
                    if(list){
                        localStorage.setItem('nickName',list.nickName);
                    }
                    if(list){
                        localStorage.setItem('headImgUrl',list.headImgUrl);
                    }
                    that.$router.push({ path:'/comment' })
                });
            },
            playGame(){

                this.btnShow = false;
                this.resultShow = true;
                let i = Math.floor(Math.random()*4);
                this.message = this.messages[i]
            },
            resultTap(){
                this.resultShow = !this.resultShow
            }
        }
    }

</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        background: black url("../../images/assets/activity/commentBg.png") no-repeat ;
        background-size: 100%;
        width: 100%;
    }

    .commentRoom{
        display: flex;
        justify-content: center;
        margin-top: 7rem;
        background-color: rgba(242,242,242,0.2);
        width: 19rem;
        height: 22rem;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .msgBox{
        margin-top: 0.4rem;

    }

    .commentRoom::-webkit-scrollbar{
        width: 5px;
        height: 1px;
    }

    .commentRoom::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: rgba(254,63,144,0.8);
    }

    .commentRoom::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: rgba(242,242,242,0.4);
    }

    .msgContainer{
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        border-radius: 5px;
        background-color: rgba(0,0,0,0.8);
        width: 16rem;
        height: 2rem;
    }

    .msgInput{
        background-color: transparent;
        border-style: none;
        color: #ffffff;
        vertical-align: middle;
        line-height: 2rem;
        padding-left: 1rem;
    }

    .sendBtn{
        border-radius: 5px;
        color: #ffffff;
        width: 4rem;
        height: 1.5rem;
        background-color: rgba(254,63,144,0.8);
        font-size: 0.8rem;
        border: none;
    }

    .footer{
        margin-top: 2rem;
        display: flex;
    }

    .thxContainer{
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: rgba(0,0,0,0.8);
        top: 4rem;
        width: 20rem;
        height: 30rem;
        justify-content: center;
        align-items: center;
    }
    .resultMsg{
        color: #ffffff;
        font-size: 16px;
    }

    .resultFooter{
        color: #ffffff;
        margin-top: 5rem;
    }
    /* 旋转效果 */
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50% { transform: rotate(180deg);}
        to { transform: rotate(360deg);}
    }
    /* 假如内容过长，一屏放不下，滚动条下拉覆盖不全 */
    .ivu-spin-fix {
        position: fixed;
    }
</style>
