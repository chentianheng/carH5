<template>
    <div class="container">
        <p>沃尔沃南区 XC40 联动上市发布会</p>
        <p>沃尔沃全南区授权经销店</p>
        <p>报名参与活动，有机会免费获得精美礼品！</p>
        <div class="input">
            <label for="name">姓名：</label>
            <input id="name" type="text">
        </div>
        <div class="input">
            <label for="tel">电话：</label>
            <input id="tel" type="number">
        </div>
        <div class="input">
            <label for="tel">省份：</label>
            <input id="province" type="text">
        </div>
        <div class="input">
            <label for="tel">城市：</label>
            <input id="city" type="text" >
        </div>
        <button @click="mainSubmit" class="submitBtn"></button>
        <p class="submitFooter">*活动详情敬请咨询沃尔沃当地授权经销商</p>

        <!--    弹窗提示-->
        <div class="thxContainer" v-show="isshow">
            <img src="../../images/assets/btn/thx.png" alt="" height="200" width="200">
        </div>
    </div>
</template>

<script>
    import Drive from '@/tool/classFactory/car.js';
    export default {
        name: "secondary",
        data(){
            return{
                isshow:false
            }
        },
        methods:{
            mainSubmit(){
                this.isshow = true
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
        margin-top: 8rem;
        color: #FFFFFF;
    }
    p + p {
        margin-top: 0.5rem;
    }
    .input{
        background-color: rgba(239,63,129,0.7);
        padding: 0.5rem;
        margin-top: 1rem;
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
        margin-top: 9rem;
        opacity: 0.8;
    }
    .submitFooter{
        color: #FFFFFF;
        font-size: 0.7rem;
        margin-top: 1rem;
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