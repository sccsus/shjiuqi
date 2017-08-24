<template>
    <div class="tmpl">
        <nav-bar title="新闻列表"></nav-bar>
        <ul class="mui-table-view">
                <li class="mui-table-view-cell mui-media" v-for="message in messageList" :k="message.id">
                    <router-link :to="{name:'DetailList',query:{newId:message.id}}">
                        <img class="mui-media-object mui-pull-left" :src="message.img_url">
                        <div class="mui-media-body">
                            <span v-text="message.title"></span>
                            <div class="news-desc">
                            <p>点击数：{{message.click}}</p><p>发表时间：{{message.add_time | convertData}}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
    </div>
</template>
<script>
  export default({
    data(){
        return {
            messageList:[],
        }
    },
    created(){
        this.$ajax.get("getnewslist")
        .then(res=>{
            console.log(res.data.message);
            this.messageList=res.data.message;

        })
        .catch(err=>{
            console.log(err);
        })
    }
  })  
</script>
<style scoped>
    .mui-media-body p {
    color: #0bb0f5;
}

.news-desc p:nth-child(1) {
    float: left;
}

.news-desc p:nth-child(2) {
    float: right;
}
.mui-table-view{
    margin-bottom:50px;
}
</style>