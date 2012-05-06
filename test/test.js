var zblog_method = require("../lib/method/zblog_method"),
	mc = require('../lib/config/method_constant'),
    config = require('../lib/config/config'),
    config_var = new config.zblog_config( 'www.k-zone.cn', '80', '/zblog/api/index.asp', 'null', 'null' );

function get_categorys() {
   zblog_method.get_categorys( config_var );
   zblog_method.addListener( mc.GET_CATEGORYS + "_complete", function( result ) {
      console.log( mc.GET_CATEGORYS + "_complete = " + result.result_xml )
   });
}

function get_archives() {
   zblog_method.get_archives( config_var );
   zblog_method.addListener( mc.GET_ARCHIVES + "_complete", function( result ) {
      console.log( mc.GET_ARCHIVES + "_complete = " + result.result_xml )
   });
}

function get_article_by_id() {
   zblog_method.get_article_by_id( config_var, 500 );
   zblog_method.addListener( mc.GET_ARTICLE_BY_ID + 500 + "_complete", function( result ) {
      console.log( "mc.GET_ARTICLE_BY_ID == " + result.result_obj.comments.commentslist[0].url )
   });
}

function get_articles() {
   zblog_method.get_articles( config_var, 10, 1 );
   zblog_method.addListener( mc.GET_ARTICLES + 10 + 1 + "_complete", function( result ) {
      console.log( "mc.GET_ARTICLES == " + result.result_obj.articlelist[0].intro )
   });
}

function get_articles_by_category() {
   zblog_method.get_articles_by_category( config_var, 12, 6, 1 );
   zblog_method.addListener( mc.GET_ARTICLES_BY_CATEGORY + 12 + 6 + 1 + "_complete", function( result ) {
      console.log( "mc.GET_ARTICLES_BY_CATEGORY == " + result.result_obj.articlelist[0].intro )
   });
}

function get_articles_by_date() {
   zblog_method.get_articles_by_date( config_var, "2009-3", 10, 1 );
   zblog_method.addListener( mc.GET_ARTICLES_BY_DATE + "2009-3" + 10 + 1 + "_complete", function( result ) {
      console.log( "mc.GET_ARTICLES_BY_DATE == " + result.result_obj.articlelist[0].intro )
   });
}

function get_articles_by_search() {
   zblog_method.get_articles_by_search( config_var, "flex", 10, 1 );
   zblog_method.addListener( mc.GET_ARTICLES_BY_SEARCH + "flex" + 10 + 1 + "_complete", function( result ) {
      console.log( "mc.GET_ARTICLES_BY_SEARCH == " + result.result_obj.articlelist[0].intro )
   });
}

function get_articles_by_tag() {
   zblog_method.get_articles_by_tag( config_var, "spark", 6, 2 );
   zblog_method.addListener( mc.GET_ARTICLES_BY_TAG + "spark" + 6 + 2 + "_complete", function( result ) {
      console.log( "mc.GET_ARTICLES_BY_TAG == " + result.result_obj.articlelist[0].intro )
   });
}

function get_new_articles() {
   zblog_method.get_new_articles( config_var, 10 );
   zblog_method.addListener( mc.GET_NEW_ARTICLES + 10 + "_complete", function( result ) {
      console.log( "mc.GET_NEW_ARTICLES == " + result.result_obj.articlelist[0].intro )
   });
}

function get_new_comments() {
   zblog_method.get_new_comments( config_var, 10 );
   zblog_method.addListener( mc.GET_NEW_COMMENTS + 10 + "_complete", function( result ) {
      console.log( "mc.GET_NEW_COMMENTS == " + result.result_obj.commentslist[0].content )
   });
}

function get_statistics() {
   zblog_method.get_statistics( config_var );
   zblog_method.addListener( mc.GET_STATISTICS + "_complete", function( result ) {
      console.log( "mc.GET_STATISTICS == " + result.result_xml )
   });
}

function get_tags() {
   zblog_method.get_tags( config_var );
   zblog_method.addListener( mc.GET_TAGS + "_complete", function( result ) {
      console.log( "mc.GET_TAGS == " + result.result_obj.taglist[0].names )
   });
}

function get_articles_count() {
   zblog_method.get_articles_count( config_var );
   zblog_method.addListener( mc.GET_ARTICLES_COUNT + "_complete", function( result ) {
      console.log( "mc.GET_ARTICLES_COUNT == " + result.result_obj )
      
      pagination( 22 )
   });
}

function pagination( maxarticlenum  ) {
  var result = zblog_method.pagination( maxarticlenum, 1, 10 );  	
  console.log( "pagination_complete == " + result.result_obj.maxarticlenum )
  console.log( "pagination_complete == " + result.result_obj.lastpage )
  console.log( "pagination_complete == " + result.result_obj.loopCount )
}

//get_tags();
get_statistics();
//get_new_comments();
//get_new_articles();
//get_articles_count();
//get_articles_by_tag();
//get_articles_by_search();
//get_articles_by_date();
//get_articles_by_category();
//get_articles();
//get_article_by_id();
//get_archives();
//get_categorys();
