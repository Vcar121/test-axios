<template>
  <div class="class"></div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "axios3-6",
  created() {
    //取消请求
    let source = axios.CancelToken.source();
    axios
      .get("", {
        cancelToken: source.token,
      })
      .then((res) => {
        console.log(res + "?");
      })
      .catch((err) => {
        console.log(err);
      });

    // message可选
    let message = "";
    source.cancel(message);
  },
};
</script>
