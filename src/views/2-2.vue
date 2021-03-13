

<script>
import axios from "axios";

export default {
  name: "axios2-2",
  components: {},
  created() {
    //get请求数据
    //  http://localhost:8080/data.json?id=12
    axios
      .get("/data.json", {
        id: 12,
      })
      .then((response) => console.log(response));
    axios({
      method: "get",
      url: "/data.json",
      params: {
        id: 12,
      },
    }).then((res) => {
      console.log(res);
    });

    //post发送数据
    //application/json
    let data = {
      id: 12,
    };
    axios.post("/post", data).then((res) => {
      console.log(res);
    });
    axios({
      method: "post",
      url: "/post",
      params: {
        id: 12,
      },
    }).then((res) => {
      console.log(res);
    });
    //form-data
    let formdata = new FormData();
    for (let key in data) {
      formdata.append(key, data[key]);
    }
    axios.post("/post", formdata).then((res) => {
      console.log(res);
    });

    //put更新数据(所有数据推送到后端)
    axios.put("/put", data).then((res) => {
      console.log(res);
    });

    //patch更新数据(将修改的数据推送到后端)
    axios.patch("/patch", data).then((res) => {
      console.log(res);
    });

    //delete删除数据
    axios
      .delete("/delete", {
        params: {
          id: 12,
        },
      })
      .then((res) => {
        console.log(res);
      });
    axios
      .delete("/delete", {
        data: {
          id: 12,
        },
      })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>
