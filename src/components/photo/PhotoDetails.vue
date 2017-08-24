<template>
<div>
            <nav-bar title="图片详情"></nav-bar> 
            <div class="photo-title">
            <p>{{imgInfo.title}}</p>
            <span>发起日期：{{imgInfo.add_time | convertData}}</span>
            <span>{{imgInfo.click}}次浏览</span>
            <span>分类：民生经济</span>
            </div>
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(img,index) in imgs">
                            <!-- <img :src="img.src" alt="" height="100"> -->
                             <img class="preview-img"  :src="img.src" height="100" @click="$preview.open(index,imgs)">
                        </li>
            </ul>
                <div class="photo-desc">
                        <p v-html="imgInfo.content"></p>
                    </div>
            <com-bar :cid="imgId"></com-bar>
</div>
</template>
<script>
   export default{
    data(){
        return {
            imgs:[],
            imgId:'',
            imgInfo:'',
        }
    },
    created(){
        this.imgId=this.$route.params.imgId;
        console.log(this.imgId);
        this.$ajax.all([this.$ajax.get('getimageInfo/'+ this.imgId),this.$ajax.get('getthumimages/'+this.imgId)])
        .then(this.$ajax.spread((InfoRes,ImgRes)=>{
            console.log(InfoRes,ImgRes)
            this.imgInfo=InfoRes.data.message[0];
            this.imgs=ImgRes.data.message;
            this.imgs.forEach(ele=>{
                ele.w=600;
                ele.h=400;
            })
            console.log(this.imgInfo);
        })
        )
    }

}
</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}

.photo-desc p {
    font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 2 2;
}
</style>