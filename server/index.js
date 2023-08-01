const Koa = require('koa');
const Router = require('koa-router');
const { koaBody } = require('koa-body');
const Blogs = require('./Blogs');


const app = new Koa();
const router = new Router();

router.post('/api/findAll', async (ctx, response) => {
    const rb = ctx.request.body;
    console.log(rb);
    ctx.response.type = 'text/json';
    const data = await Blogs.findAll();
    ctx.response.body = JSON.stringify(data);
})

router.post('/api/findByTitle', async (ctx, response) => {
    const rb = ctx.request.body;
    console.log(rb);
    ctx.response.type = 'text/json';
    const data = await Blogs.findAll({
        where: {
            blog_title: rb.blog_title
        }
    });
    ctx.response.body = JSON.stringify(data);
})

router.post('/api/deleteBlog', async (ctx, response) => {
    const rb = ctx.request.body;
    console.log(rb);
    ctx.response.type = 'text/json';
    const data = await Blogs.destroy({
        where: {
            blog_id: rb.blog_id
        }
    });
    ctx.response.body = JSON.stringify(data);
})

router.post('/api/addBlog', async (ctx, response) => {
    const rb = ctx.request.body;
    console.log(rb);
    ctx.response.type = 'text/json';
    const data = await Blogs.create(rb);
    ctx.response.body = JSON.stringify(data);
})

router.post('/api/updateBlog', async (ctx, response) => {
    const rb = ctx.request.body;
    console.log(rb);
    ctx.response.type = 'text/json';
    const data = await Blogs.update({
        blog_title: rb.blog_title,
        blog_content: rb.blog_content
    }, {
        where: {
            blog_id: rb.blog_id
        }
    });
    ctx.response.body = JSON.stringify(data);
})

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log('server is listenning ...');


// (async ()=> {
//     let blog = await Blogs.create({
//         blog_title: 'Second Blog',
//         blog_content: 'This is the Second.'
//     });
//     console.log('created:' + JSON.stringify(blog));
// })();



// sequelize.close().then(() =>{
//     console.log('Connection has been closed successfully.');
// }).catch(error => {
//     console.error('Unable to close the database: ', error);
// })