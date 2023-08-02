<template>
    <el-container>
        <el-main>
          <p>搜索</p>
          <el-autocomplete 
          v-model="blog_title"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容"
          value-key="blog_title"
          @select="handleSelect"></el-autocomplete>
        <el-row>

        <el-col v-show="!blog_title" :span="8" v-for="(item, index) in data" :key="index">
            <el-card :body-style="{ padding: '0px' }" class="el-card-solid" shadow="hover" >
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
                <span>{{ item.blog_title }}</span><br/>
                <button @click="handleClick(item)">查看</button>
            </div>
            </el-card>
        </el-col>

        <el-col v-show="blog_title" :span="8" v-for="(item, index) in dataAfterSearch" :key="index + '_'">
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
      data: [],
      dataAfterSearch: [],
      blog_title: '',
      timeout: null,
      timer: null
    }
  },
  created() {
    console.log('created');
    axios.post('/api/findAll').then(res => {
      this.data = res.data;
      // console.log(this.data);
    })
  },
  methods: {
    handleClick(item) {
      // console.log('clicked: ', blog_id);
      this.$emit('ShowBlogContent', item);
    },
    querySearchAsync(queryString, cb) {
      let data = this.data;
      let results = queryString ? data.filter(this.createTitleFilter(queryString)) : data;
      cb(results);

      this.timeout = setTimeout(()=> {
        cb(results);
      }, 3000 * Math.random());
    },
    createTitleFilter(queryString) {
      return (data) => {
        return (data.blog_title.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      }
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  watch: {
    blog_title() {
      if(this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.axios.post('/api/findByTitle', {
          blog_title: this.blog_title
        }).then(res => {
          this.dataAfterSearch = res.data;
        })
      }, 1000)
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