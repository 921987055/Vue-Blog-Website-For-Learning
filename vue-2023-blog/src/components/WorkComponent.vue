<template>
    <el-container>
        <el-main>
        <el-row>
        <el-col :span="8" v-for="(item, index) in data" :key="index">
            <el-card :body-style="{ padding: '0px' }" class="el-card-solid" shadow="hover" >
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
                <span>{{ item.blog_title }}</span><br/>
                <button @click="handleClick(item)">查看</button>
            </div>
            </el-card>
        </el-col>
        </el-row>
        </el-main>
      </el-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WorkComponent',
  data() {
    return {
      data: []
    }
  },
  created() {
    console.log('created');
    axios.get('/api/findAll').then(res => {
      this.data = res.data;
      // console.log(this.data);
    })
  },
  methods: {
    handleClick(item) {
      // console.log('clicked: ', blog_id);
      this.$emit('ShowBlogContent', item);
    }
  }
}
</script>

<style scoped>
.el-card-solid {
  background-color: #545c64;
  color: #fff;
}
</style>