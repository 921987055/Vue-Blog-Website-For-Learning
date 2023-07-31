const Blogs = require('./Blogs');

(async ()=> {
    let blogs = await Blogs.findAll();
    console.log(`$find ${blogs.length} blogs:`);
    for(let blog of blogs) {
        console.log(JSON.stringify(blog));
    }
})();
