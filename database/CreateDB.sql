use vue_blog;

create table blogs (
    blog_id int not null auto_increment,
    blog_title varchar(100),
    blog_content text,
    primary key (blog_id)
) engine=innodb;