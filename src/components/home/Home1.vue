<template>
    <div>
       <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index" >
                <a :href="img.url">
                    <img :src="img.img" alt="">
                </a>
            </mt-swipe-item>
         </mt-swipe>
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'NewsList'}" href="#" title="新闻列表">
                            <span class="mui-icon mui-icon-home"></span>
                            <div class="mui-media-body">新闻资讯</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:'PhotoList'}" href="#">
                            <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                            <div class="mui-media-body">图文分享</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}" href="#">
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">商品展示</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}" href="#">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">留言反馈</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}" href="#">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">搜索资讯</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link :to="{name:''}" href="#">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">联系我们</div></router-link></li>
                </ul> 
    </div>
</template>
<script>
    export default {
        data(){
            
            return {
                  imgs:[],  
            }
        },created(){
            this.$ajax.get("getlunbo")
            .then(res=>{
                // console.log(res);
                this.imgs=res.data.message;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
</script>
<style scoped>
    .mint-swipe{
        height:200px;
    }
    .mint-swipe img{
        height: 200px;
        width: 100%;
        /*background-size:cover;*/
    }
 .mui-table-view.mui-grid-view.mui-grid-9{
  background-color: white;
  margin: 0;
}
.mui-table-view.mui-grid-view.mui-grid-9 li{
  border: 0;
}
.mui-icon-home:before,.mui-icon-email:before ,.mui-icon-chatbubble:before,.mui-icon-location:before,.mui-icon-search:before,.mui-icon-phone:before{
    content: '';
}
.mui-icon-home{
    background-image:url("../../static/img/news.png");
}
.mui-icon-email{
    background-image:url("../../static/img/picShare.png");
}
.mui-icon-chatbubble{
    background-image:url("../../static/img/goodShow.png");
}
.mui-icon-location{
    background-image:url("../../static/img/feedback.png");
}
.mui-icon-search{
    background-image:url("../../static/img/search.png");
}
.mui-icon-phone{
    background-image:url("../../static/img/callme.png");
}
.mui-icon{
    height:50px;
    width: 50px;
    -webkit-background-size:100%;
    background-size:100%;
}
</style>