<template>
  <div class="class"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "axios3-2",
  created() {
    //axios实例的配置
    let axios1 = axios.create({
      //请求的域名,基本地址
      baseURL: "http://localhost:8080",
      //请求时长，毫秒
      timeout: 1000,
      //请求路径
      url: "/data.json",
      //请求方法
      method: "get/post/put/patch/delete",
      //设置请求头
      headers: {
        //鉴别身份信息
        token: "",
      },
      //请求参数拼接到url(可见)
      params: {},
      //请求参数放在请求体(不可见)
      data: {},
    });
    axios1.get("/data.json", {
      //配置
    });

    //优先级：全局低于实例低于请求
    //1.全局配置
    axios.defaults.timeout = 1000;
    axios.defaults.baseURL = "http://localhost:8080";
    //2.实例配置
    axios1.defaults.timeout = 3000;
    //3.请求配置
    axios1.get('/data.json',{
        timeout = 5000
    });

    //开发实例
    // http://localhost:8080
    // http://localhost:8081
    let instance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000
    });
    let instance1 = axios.create({
        baseURL: 'http://localhost:8081',
        timeout: 3000
    });
    instance.get('/data.json', {
        params:{
            id: 12
        }
    }).then(res=>{
        console.log(res);
    });
    instance1.get('/city.json', {
        timeout:5000
    }).then(res=>{
        console.log(res);
    });
  },
};
</script>
