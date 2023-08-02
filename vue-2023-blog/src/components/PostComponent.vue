<template>
    <el-main>
        <p>博客标题</p>
        <el-input placeholder="请输入内容" v-model="blog_title" clearable maxlength="100" show-word-limit></el-input>

        <p>博客内容</p>
        <el-input type="textarea" palceholder="请输入内容" v-model="blog_content" maxlength="1000" show-word-limit rows="10"></el-input>

        <button @click="SubmitBlog">提交博客</button>
        <p class="submit">{{ submitSuccessTip }}</p>
    </el-main>
</template>

<script>
export default {
    data() {
        return {
            blog_title: '',
            blog_content: '',
            submitSuccessTip: ''
        }
    },
    methods: {
        SubmitBlog() {
            this.axios.post('/api/addBlog', {
                blog_title: this.blog_title,
                blog_content: this.blog_content
            }).then(res => {
                this.submitSuccessTip = '提交成功!'
                console.log(res.data);
                console.log('submit successfully!');
                setTimeout(() => {
                    this.submitSuccessTip = '';
                }, 3000);
            })
        }
    }
}
</script>

<style scoped>
p {
    display: flex;
    justify-content: center;
}
.submit {
    color: red;
    display: flex;
    justify-content: center;
}
</style>