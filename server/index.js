const Koa = require('koa');
const Router = require('koa-router');
const Blogs = require('./Blogs');


const app = new Koa();
const router = new Router();

router.get('/api/findAll', async (ctx, response) => {
    ctx.response.type = 'text/json';
    const data = await Blogs.findAll();
    ctx.response.body = JSON.stringify(data);
})

app.use(router.routes());

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