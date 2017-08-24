<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="backnews"></a>
            <h1 class="mui-title">{{title}}</h1>
        </header>
    </div>
</template>
<script>
    export default({
        data(){
            return {

            }
        },
        props:["title"],  
        methods:{
            backnews(){
                this.$router.go(-1);
            }
        }      
    })
</script>
<style>
    .mui-bar{
        position: relative;
    }
    .mui-bar-tab{
        position: fixed;
    }
</style>