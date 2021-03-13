<template>
  <div class="class"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "axios3-1",
  created() {
    //axios实例
    //针对于不同url和timeout
    let axios1 = axios.create({
      baseURL: "http://localhost:8080",
      timeout: 1000,
    });
    axios1.get("/data.json").then((res) => {
      console.log(res.data);
    });
    let axios2 = axios.create({
      baseURL: "http://localhost:9090",
      timeout: 1000,
    });
    axios2.get("city.json").then((res) => {
      console.log(res.data);
    });
  },
};
</script>
