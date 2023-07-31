<template>
<div>
    <h1>{{ blog_title }}</h1>
    <p>{{ blog_content }}</p>
</div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'BlogContent',
    data() {
        return {
            blog_id: 0,
            blog_title: 'Not Found',
            blog_content: 'Not Found'
        }
    },
    created() {
        this.blog_id = this.$route.params.blog_id;
        axios.get('/api/findAll').then(res => {
            for(let item of res.data) {
                if(item.blog_id == this.blog_id) {
                    this.blog_title = item.blog_title;
                    this.blog_content = item.blog_content;
                    break;
                }
            }
        })
    }
}
</script>

<style scoped>
h1 p {
    display: flex;
    justify-content: center;
}
</style>