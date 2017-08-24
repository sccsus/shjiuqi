<template>
    <div class="tmpl">
        <!-- 引入返回导航 -->
        <nav-bar title="图文分享"></nav-bar>
        <div class="photo-header">
            <ul>
                <li v-for="category in categorys" :k='category.id'>
                    <a @click="getImg(category.id)">{{category.title}}</a>                    
                </li>
                
            </ul>
        </div>
        <div class="photo-list">
            <ul>
              <li v-for="img in imgs" :k="img.id">
                  <router-link :to="{name:'PhotoDetails',params:{imgId:img.id}}">
                  <img v-lazy="img.img_url">
                      <p>
                          <span>{{img.title}}</span>
                          <span>{{img.zhaiyao}}</span>
                      </p>
                  </router-link>
              </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            categorys:[],//图片分类，{id:1,title:'家居生活'}
            imgs:[],//保存图片数据
        }
    },
    created(){
        this.$ajax.get('getimgcategory')
        .then(res=>{
            console.log(res);
              let obj={
                id:0,
                title:"全部"
            }
            res.data.message.unshift(obj);
            this.categorys=res.data.message;
        }).then(err=>{
            console.log(err)
        })
            this.getImg(0);       
    },
    methods:{
        getImg(id){
            this.$ajax.get('getimages/'+id)
            .then(res=>{
                this.imgs=res.data.message;
            })
             .catch(err=>{
            console.log(err);
        })

        }
    }

}


</script>
<style scoped>

/*图片懒加载*/
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}


.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}



</style>
