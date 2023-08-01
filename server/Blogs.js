const Sequelize = require('sequelize');
const sequelize = require('./db');

let Blogs = sequelize.define('blogs', {
    blog_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    blog_title: Sequelize.STRING(100),
    blog_content: Sequelize.TEXT
},{
    timestamps: false
});

module.exports = Blogs;
