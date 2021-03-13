<template>
  <div class="class"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "axios3-4",
  created() {
    //拦截器 在请求或响应被处理前拦截
    //请求拦截器  响应拦截器  取消拦截器

    //请求拦截器
    axios.interceptors.request.use(
      (config) => {
        // TODO在发送请求前做些什么
        return config;
      },
      (err) => {
        // TODO在请求错误时做些什么(未到达后端)
        return Promise.reject(err);
      }
    );
    //响应拦截器
    axios.interceptors.response.use(
      (res) => {
        // TODO请求成功对响应数据进行处理
        return res;
      },
      (err) => {
        // TODO响应错误做些什么(到达后端)
        return Promise.reject(err);
      }
    );
    //取消拦截器  ejext
    let inter = axios.interceptors.request.use((config) => {
      config.headers = {
        author: true,
      };
      return config;
    });
    axios.interceptors.request.eject(inter);

    //开发实例
    //登陆状态 token = ''
    let instance = axios.interceptors.request.use(
      (config) => {
        config.headers.token = "";
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    instance.get().then().catch();
    //移动端开发
    let instance_phone = axios.create();
    //请求时弹窗
    instance_phone.interceptors.request.use((config) => {
      $("#model").show();
      return config;
    });
    //响应时隐藏弹窗
    instance_phone.interceptors.response.use((res) => {
      $("#model").hide();
      return res;
    });
  },
};
</script>
