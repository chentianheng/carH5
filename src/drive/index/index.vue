<template>
    <div class="container">
        <img class="mainImg" src="../../images/assets/home/main_06.png" alt="mainImg"/>
        <img class="logoImg" src="../../images/assets/home/logo_03.png" alt="logoImg"/>
        <img class="titleImg" src="../../images/assets/home/word.png" alt="titleImg"/>
        <img @click="hrefChoice" class="imgFooter" src="../../images/assets/home/footer.png" alt="">
    </div>
</template>

<script>
    import Drive from '@/tool/classFactory/car.js';
    export default {
        name: "home",
        data () {
            return {

            }
        },
        created () {
            this.getMember()
        },
        methods:{
            getMember(){
                const that = this;
                Drive.prototype.getMember().then(res => {
                    let list = res.data.data || [];
                    that.userMsg = list
                    console.log(list)
                });
            },
            hrefChoice(){
                this.$router.push({ path:'/choice' })
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
        margin-top: 15.5rem;
        width: 70%;
    }
</style>
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
