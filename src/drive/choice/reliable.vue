<template>
    <div class="container">
        <div class="headImg" ></div>
        <div class="username">{{ username }}</div>
        <div class="userTitle">就是靠谱范西客</div>
        <div class="subtitle1">不用担心神一般的对手</div>
        <div class="subtitle2">只因有你这样靠谱的队友</div>
        <img class="XC40" src="../../images/assets/btn/xc40.png">
        <div class="backBtn">
            <button @click="hrefChoice"class="choiceBtn">再测一次</button>
        </div>
        <div class="nextBtn">
            <button @click="hrefIntroduction" class="choiceBtn">与沃同行</button>
        </div>

    </div>
</template>

<script>
    import Drive from '@/tool/classFactory/car.js';
    export default {
        data(){
            return{
                username:'范西客'
            }
        },
        methods:{
            hrefChoice(){
                this.$router.push({ path:'/choice' })
            },
            hrefIntroduction(){
                this.$router.push({ path:'/introduction' })
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
        background: black url("../../images/assets/choice/ccc.png") no-repeat ;
        background-size:  auto 100%;
        width: 100%;
    }
    .headImg {
        position: absolute;
        top: 2rem;
        left: 1rem;
        width: 3rem;
        height: 3rem;
        padding: 0.5rem;
        background-color: #FFFFFF;
    }
    .username {
        position: absolute;
        top: 6rem;
        left: 1.5rem;
        color: #FFFFFF;
    }
    .userTitle {
        font-size: 1.2rem;
        position: absolute;
        top: 9rem;
        left: 1.5rem;
        color: #FFFFFF;
        background-color: black;
        opacity: 0.6;
    }
    .subtitle1{
        position: absolute;
        top: 11rem;
        left: 1.5rem;
        color: #FFFFFF;
        background-color: black;
        opacity: 0.6;
    }
    .subtitle2{
        position: absolute;
        top: 12.5rem;
        left: 1.5rem;
        color: #FFFFFF;
        background-color: black;
        opacity: 0.6;
    }
    .XC40{
        position: absolute;
        left: 1.5rem;
        bottom: 8rem;
        width: 30%;
    }
    .backBtn{
        position: absolute;
        left: 1.5rem;
        bottom: 5rem;
        border: 0.1rem solid #FFFFFF;
        padding: 0.2rem;
    }
    .nextBtn{
        position: absolute;
        left: 8rem;
        bottom: 5rem;
        border: 0.1rem solid #FFFFFF;
        padding: 0.2rem;
    }
    .choiceBtn{
        border-radius: 0;
        background-color: transparent;
        border: 0.1rem solid #FFFFFF;
        padding: 0.2rem 0.4rem;
        color: #FFFFFF;
    }
</style>