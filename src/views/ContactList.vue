<template>
  <div class="home">
    <!-- 联系人列表 -->
    <van-contact-list
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- 弹窗 -->
    <van-popup v-model:show="show" position="bottom" :style="{ height: '75%' }">
      <van-contact-edit
        :is-edit="isEdit"
        :contact-info="editingContact"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Http from "../service/http";
import { ContactList, Toast, ContactEdit, Popup } from "vant";

export default {
  name: "ContactList",
  components: {
    [ContactList.name]: ContactList, //列表组件
    [ContactEdit.name]: ContactEdit, //编辑组件
    [Popup.name]: Popup, //弹窗组件
  },
  data() {
    return {
      list: [], //联系人列表
      instance: null, //axios实例
      show: false, //编辑弹窗的显示
      editingContact: {}, //正在编辑的联系人数据
      isEdit: false, //新建或编辑
    };
  },
  created() {
    this.instance = axios.create({
      baseURL: "http://localhost:9000/api",
      timeout: 1000,
    });
    this.getList();
  },
  methods: {
    //获取列表
    async getList() {
      let res = await Http.getContactList();
      this.list = res.data;
    },
    //添加联系人
    onAdd() {
      this.show = true;
      this.isEdit = false;
    },
    //编辑联系人
    onEdit(info) {
      this.show = true;
      this.isEdit = true;
      this.editingContact = info;
    },
    //保存联系人
    async onSave(info) {
      if (this.isEdit) {
        //编辑保存
        let res = await Http.editContact(info);
        if (res.code === 200) {
          Toast("编辑成功");
          this.show = false;
          this.getList();
        }
      } else {
        //新建保存
        let res = await Http.newContactJson(info); //json
        if (res.code === 200) {
          Toast("新建成功");
          this.show = false;
          this.getList();
        }
        // let res = await Http.newContactForm(info, true); //form-data
        // if (res.code === 200) {
        //   Toast("新建成功");
        //   this.show = false;
        //   this.getList();
        // }
      }
    },
    //删除联系人
    async onDelete(info) {
      let res = await Http.deleteContact({
        id: info.id,
      });
      if (res.code === 200) {
        Toast("删除成功");
        this.show = false;
        this.getList();
      }
    },
  },
};
</script>
