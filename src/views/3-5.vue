<template>
  <div class="class"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "axios3-4",
  created() {
    //错误处理
    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
    axios
      .get("")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //实际开发
    let instance = axios.create();
    instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        return err;
      }
    );
    instance.get("").then();
  },
};
</script>
