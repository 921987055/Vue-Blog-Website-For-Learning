<template>
  <el-container>
    <el-header class="el-col-header">
      <el-row type="flex" justify="space-between">
        <el-col :span="10">
          <el-avatar fit="fill" shape="square">
            <img src="../assets/logo.png" alt="blog-icon">
            </el-avatar>
            <span>顾和覃的博客</span>
        </el-col>
        <el-col :span="10">
          <el-menu
      mode="horizontal"
      class="el-menu-solid"
      background-color="#8d0801"
      color="#001427"
      active-text-color="#ffd04b"
      @select="HandleSelect">
      <el-menu-item index="1">
      <template slot="title">
        <i class="el-icon-user-solid"></i>
        <span>About</span>
      </template>
      </el-menu-item>

      <el-menu-item index="2">
        <i class="el-icon-s-platform"></i>
        <span>Blogs</span>
      </el-menu-item>

      <el-menu-item index="3">
        <i class="el-icon-upload"></i>
        <router-link to="/posts">PostsBlog</router-link>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-upload"></i>
        <span>Github Page</span>
      </el-menu-item>
      </el-menu>
        </el-col>
      </el-row>
    </el-header>

    <router-view @ShowBlogContent="ShowBlogContent"></router-view>
 
  </el-container>
</template>

<script>
export default {
    name: 'BlogPage',
    dara() {
      return {
        flag: false
      }
    },
    methods: {
      HandleSelect(index) {
        console.log(index)
        switch(index) {
          case '1' : this.$router.push('/about').catch(err => console.log(err)); break;
          case '2' : this.$router.push('/works').catch(err => console.log(err)); break;
          case '3' : this.$router.push('/posts').catch(err => console.log(err)); break;
          case '4' : window.location.href = 'https://github.com/921987055/Vue-Blog-Website-For-Learning'; break;
          default: break;
        }
      },
      ShowBlogContent(data) {
        // console.log('Blog Content id: ', data.blog_id);
        this.$router.push(`/blog/${data.blog_id}`).catch(err => console.log(err));
      }
    }
}
</script>

<style scoped>
* {
  color: #001427;
}

.el-col-header {
  background-color: #bf0603;
}
</style>