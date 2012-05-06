var mc = require('../config/method_constant'),
    xld = require('../business/xml_loader_delegate'),
    parser_xml = require("../business/parser_xml"),
    events = require("events");

exports = module.exports = new events.EventEmitter();

exports.get_categorys = function( config_var ) {

   //add method_name property
   config_var.method_name = mc.GET_CATEGORYS;
   
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, '', mc.GET_CATEGORYS );
   
   //add 'result' listener
   xld.once( mc.GET_CATEGORYS + "_event", function( result ) {
      exports.emit( mc.GET_CATEGORYS + "_complete", parser_xml.xml_to_categorylist( result ));
   });

}

exports.get_archives = function( config_var ) {

   //add method_name property
   config_var.method_name = mc.GET_ARCHIVES;
   
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, '', mc.GET_ARCHIVES );
   
   //add 'result' listener
   xld.once( mc.GET_ARCHIVES + "_event", function( result ) {
      exports.emit( mc.GET_ARCHIVES + "_complete", parser_xml.xml_to_archivelist( result ));
   });

}

exports.get_article_by_id = function( config_var, id ) {

   //add method_name property
   config_var.method_name = mc.GET_ARTICLE_BY_ID;

   //set parameters
   parameters = "&articleid=" + id;
   
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, parameters, mc.GET_ARTICLE_BY_ID );
   
   //add 'result' listener
   xld.once( mc.GET_ARTICLE_BY_ID + parameters + "_event", function( result ) {
      exports.emit( mc.GET_ARTICLE_BY_ID + id + "_complete", parser_xml.xml_to_article_detail( result ));
   });

}

exports.get_articles = function( config_var, pagesize, page ) {

   //add method_name property
   config_var.method_name = mc.GET_ARTICLES;

   //set parameters
   parameters = "&pagesize=" + pagesize + "&page=" + page;
   
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, parameters, mc.GET_ARTICLES );
   
   //add 'result' listener
   xld.once( mc.GET_ARTICLES + parameters + "_event", function( result ) {
      exports.emit( mc.GET_ARTICLES + pagesize + page + "_complete", parser_xml.xml_to_articlelist( result ));
   });
   
}

exports.get_articles_by_category = function( config_var, categoryid, pagesize, page ) {

   //add method_name property
   config_var.method_name = mc.GET_ARTICLES_BY_CATEGORY;
 
   //set parameters
   parameters = "&categoryid=" + categoryid + "&pagesize=" + pagesize + "&page=" + page;
  
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, parameters, mc.GET_ARTICLES_BY_CATEGORY );
   
   //add 'result' listener
   xld.once( mc.GET_ARTICLES_BY_CATEGORY + parameters + "_event", function( result ) {
      exports.emit( mc.GET_ARTICLES_BY_CATEGORY + categoryid + pagesize + page + "_complete", parser_xml.xml_to_articlelist( result ));
   });
   
}

exports.get_articles_by_date = function( config_var, date, pagesize, page ) {

   //add method_name property
   config_var.method_name = mc.GET_ARTICLES_BY_DATE;
  
   //set parameters
   parameters = "&date=" + date + "&pagesize=" + pagesize + "&page=" + page;
   
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, parameters, mc.GET_ARTICLES_BY_DATE );
   
   //add 'result' listener
   xld.once( mc.GET_ARTICLES_BY_DATE + parameters + "_event", function( result ) {
      exports.emit( mc.GET_ARTICLES_BY_DATE + date + pagesize + page + "_complete", parser_xml.xml_to_srch_result( result ));
   });
   
}

exports.get_articles_by_search = function( config_var, key, pagesize, page ) {

   //add method_name property
   config_var.method_name = mc.GET_ARTICLES_BY_SEARCH;
   
   //set parameters
   parameters = "&s=" + key + "&pagesize=" + pagesize + "&page=" + page;
  
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, parameters, mc.GET_ARTICLES_BY_SEARCH );
   
   //add 'result' listener
   xld.once( mc.GET_ARTICLES_BY_SEARCH + parameters + "_event", function( result ) {
      exports.emit( mc.GET_ARTICLES_BY_SEARCH + key + pagesize + page + "_complete", parser_xml.xml_to_srch_result( result ));
   });
   
}

exports.get_articles_by_tag = function( config_var, tag, pagesize, page ) {

   //add method_name property
   config_var.method_name = mc.GET_ARTICLES_BY_TAG;
    
   //set parameters
   parameters = "&tag=" + tag + "&pagesize=" + pagesize + "&page=" + page;
  
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, parameters, mc.GET_ARTICLES_BY_TAG );
   
   //add 'result' listener
   xld.once( mc.GET_ARTICLES_BY_TAG + parameters + "_event", function( result ) {
      exports.emit( mc.GET_ARTICLES_BY_TAG + tag + pagesize + page + "_complete", parser_xml.xml_to_srch_result( result ));
   });
   
}

exports.get_articles_count = function( config_var ) {

   //add method_name property
   config_var.method_name = mc.GET_ARTICLES_COUNT;
   
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, '', mc.GET_ARTICLES_COUNT );
   
   //add 'result' listener
   xld.once( mc.GET_ARTICLES_COUNT + "_event", function( result ) {
      exports.emit( mc.GET_ARTICLES_COUNT + "_complete", parser_xml.article_count( result ));
   });
   
}

/*
exports.pagination = function( articlesnum, curpage, pagesize ) {
	
	//计算方法：最大文章数 / 每页文章数
	var lastpage = Math.ceil( articlesnum / pagesize );
	
	//共有多少个分页
	var loopCount = Math.ceil( lastpage / pagesize );
	
	return parser_xml.create_pagination_vo( articlesnum, 
		  								    pagesize, 
											curpage, 
											lastpage, 
											loopCount, 
											-1, 
											-1 );
																		  
}
*/

exports.get_new_articles = function( config_var, count ) {

   //add method_name property
   config_var.method_name = mc.GET_NEW_ARTICLES;
     
   //set parameters
   parameters = "&count=" + count;
  
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, parameters, mc.GET_NEW_ARTICLES );
   
   //add 'result' listener
   xld.once( mc.GET_NEW_ARTICLES + parameters + "_event", function( result ) {
      exports.emit( mc.GET_NEW_ARTICLES + count + "_complete", parser_xml.xml_to_articlelist( result ));
   });
   
}

exports.get_new_comments = function( config_var, count ) {

   //add method_name property
   config_var.method_name = mc.GET_NEW_COMMENTS;
      
   //set parameters
   parameters = "&count=" + count;
  
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, parameters, mc.GET_NEW_COMMENTS );
   
   //add 'result' listener
   xld.once( mc.GET_NEW_COMMENTS + parameters + "_event", function( result ) {
      exports.emit( mc.GET_NEW_COMMENTS + count + "_complete", parser_xml.xml_to_commentlist( result ));
   });
   
}

exports.get_statistics = function( config_var ) {

   //add method_name property
   config_var.method_name = mc.GET_STATISTICS;
   
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, "", mc.GET_STATISTICS );
   
   //add 'result' listener
   xld.once( mc.GET_STATISTICS + "_event", function( result ) {
      exports.emit( mc.GET_STATISTICS + "_complete", parser_xml.xml_to_statistics( result ));
   });
   
}

exports.get_tags = function( config_var ) {

   //add method_name property
   config_var.method_name = mc.GET_TAGS;
   
   //get xml form zblog api
   xld.xml_loader_delegate( config_var, "", mc.GET_TAGS );
   
   //add 'result' listener
   xld.once( mc.GET_TAGS + "_event", function( result ) {
      //parser_xml.xml_to_articlelist( result )
      exports.emit( mc.GET_TAGS + "_complete", parser_xml.xml_to_tags( result ));
   });
   
}
