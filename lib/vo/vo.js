exports.archive_ro = function() {
    this.archiveslist = new Array();
}

exports.archive_vo = function ( count, date, names, url ) {
   this.count = count;
   this.date = date;
   this.names = names;
   this.url = url;
}

exports.article_detail_vo = function ( article, content, comments) {
   this.article = article;   //come from article_vo
   this.content = content;
   this.comments = comments; //come from comment_ro
}

exports.article_ro = function() {
    this.articlelist = new Array();
}

exports.article_vo = function ( id, url, title, alias, intro, category, tags, date, commnums ) {
   this.id = id;
   this.url = url;
   this.title = title;
   this.alias = alias;
   this.intro = intro;
   this.category = category;
   this.tags = tags;
   this.date = date;
   this.commnums = commnums;
}

exports.category_ro = function () {
    this.categorylist = new Array();
}

exports.category_vo = function (id, names, url, intro, order, count ) {
   this.id = id;
   this.names = names;
   this.url = url;
   this.intro = intro;
   this.order = order;
   this.count = count;   //当前分类对应的文章总数
}

exports.comment_ro = function() {
   this.commentslist = new Array();
}

exports.comment_vo = function( id, author, email, url, date, content ) {
    this.id = id;
    this.author = author;
    this.email = email;
    this.url = url;
    this.date = date;
    this.content = content;
}

exports.srch_result_ro = function () {
    this.articlelist = Array();
    this.total;
}

exports.statistics_vo = function ( title, url, articles, comments, views, guestcomments, themes ) {
   this.title = title;
   this.url = url;
   this.articles = articles;
   this.comments = comments;
   this.views = views;
   this.guestcomment = guestcomments;
   this.themes = themes;
}

exports.tag_ro = function () {
    this.taglist = new Array();
}

exports.tag_vo = function ( id, names, url, count ) {
    this.id = id;
    this.names = names;
    this.url = url;
    this.count = count;
}

exports.result_method_vo = function () {
    this.result_json = null;
    this.result_obj = null;
    this.result_xml = null;
}

exports.maxarticlenum = 0;

/*
exports.pagination_vo = function() {
	this.maxarticlenum;
	this.pagesize;
	this.curpage;
	this.lastpage;
	this.loopCount;
	this.pageno;
	this.pagelabel;
}
*/