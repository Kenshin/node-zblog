var xml2json = require("node-xml2json"),
    vo = require("../vo/vo");

exports.xml_to_categorylist = function( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )

   var arr = json.xml.category;
   var newArr = new Array();
   for( i in arr ) {
      obj = new vo.category_vo( arr[i].id, arr[i].name, arr[i].url, arr[i].intro, arr[i].order, arr[i].count );
      newArr.push( obj );
   }
   var category_ro = new vo.category_ro();
   category_ro.categorylist = newArr;

   return get_result_method_vo( json, xml, category_ro );
}

exports.xml_to_archivelist = function ( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )
   
   var arr = json.xml.archive;
   var newArr = new Array();
   for( i in arr ) {
      obj = new vo.archive_vo( arr[i].count, arr[i].date, arr[i].name, arr[i].url );
      newArr.push( obj );
   }
   var archive_ro = new vo.archive_ro();
   archive_ro.archiveslist = newArr;

   return get_result_method_vo( json, xml, archive_ro );
}

exports.xml_to_article_detail = function ( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )

   //get article_vo
   var art_vo  = new vo.article_vo(
                                    json.xml.article.id,
                                    json.xml.article.url,
                                    json.xml.article.title,
                                    json.xml.article.alias,
                                    json.xml.article.intro,
                                    json.xml.article.category,
                                    json.xml.article.tags,
                                    json.xml.article.date,
                                    json.xml.article.commnums
                                  );

   //get comment_ro
   var arr = json.xml.article.comments.comment;
   var newArr = new Array();
   for( i in arr ) {
      obj = new vo.comment_vo( arr[i].id, arr[i].author, arr[i].email, arr[i].url, arr[i].date, arr[i].content );
      newArr.push( obj );
   }

   var comment_ro = new vo.comment_ro();
   comment_ro.commentslist = newArr;

   //get article_detail_vo
   var article_detail_vo = new vo.article_detail_vo( art_vo, replace_symbol_to_html( json.xml.article.content ), comment_ro );

   return get_result_method_vo( json, xml, article_detail_vo );
}

exports.xml_to_articlelist = function ( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )
   
   var arr = json.xml.article;
   var newArr = new Array();
   var obj;
   
   if ( arr.length == undefined ) {
		obj  = new vo.article_vo(
	                                 json.xml.article.id,
	                                 json.xml.article.url,
	                                 json.xml.article.title,
	                                 json.xml.article.alias,
	                                 replace_symbol_to_html( json.xml.article.intro ),
	                                 json.xml.article.category,
	                                 json.xml.article.tags,
	                                 json.xml.article.date,
	                                 json.xml.article.commnums
	                               );
          newArr.push( obj );	                               
   }
   else {
	   for( i in arr ) {
	      obj  = new vo.article_vo(
	                                 arr[i].id,
	                                 arr[i].url,
	                                 arr[i].title,
	                                 arr[i].alias,
	                                 replace_symbol_to_html( arr[i].intro ),
	                                 arr[i].category,
	                                 arr[i].tags,
	                                 arr[i].date,
	                                 arr[i].commnums
	                               );
   		  newArr.push( obj );
	   }
   }
   
   var article_ro = new vo.article_ro();
   article_ro.articlelist = newArr;

   return get_result_method_vo( json, xml, article_ro );
}

exports.xml_to_srch_result = function ( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )
   
   //判断json.xml.articles是否有多个article
   var arr;
   arr = json.xml.articles.article;
   if ( arr.length == undefined ) {
      arr = json.xml.articles;
   }

   var newArr = new Array();
   for( i in arr ) {
      obj  = new vo.article_vo(
                                 arr[i].id,
                                 arr[i].url,
                                 arr[i].title,
                                 arr[i].alias,
                                 replace_symbol_to_html( arr[i].intro ),
                                 arr[i].category,
                                 arr[i].tags,
                                 arr[i].date,
                                 arr[i].commnums
                               );
      newArr.push( obj );
   }
   var srch_result_ro = new vo.srch_result_ro();
   srch_result_ro.articlelist = newArr;
   srch_result_ro.total = json.xml.total;

   return get_result_method_vo( json, xml, srch_result_ro );
}

exports.article_count = function ( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )
   
   vo.maxarticlenum = json.xml.count;


   return get_result_method_vo( json, xml, vo.maxarticlenum );
}

exports.xml_to_commentlist = function ( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )

   var arr = json.xml.comment;
   var newArr = new Array();
   for( i in arr ) {
      obj = new vo.comment_vo( arr[i].id, arr[i].author, arr[i].email, arr[i].url, arr[i].date, arr[i].content );
      newArr.push( obj );
   }

   var comment_ro = new vo.comment_ro();
   comment_ro.commentslist = newArr;

   return get_result_method_vo( json, xml, comment_ro );
}

exports.xml_to_statistics = function ( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )

   var statistics_vo = new vo.statistics_vo(
                                             json.xml.blog.title,
                                             json.xml.blog.url,
                                             json.xml.blog.articles,
                                             json.xml.blog.comments,
                                             json.xml.blog.views,
                                             json.xml.blog.guestcomments,
                                             json.xml.blog.themes
                                           );

   return get_result_method_vo( json, xml, statistics_vo );
}

exports.xml_to_tags = function ( xml ) {
   //console.log("xml===" + xml)
   json = xml2json.parser( xml );
   //console.log("json===" + json )

   var arr = json.xml.tag;
   var newArr = new Array();
   for( i in arr ) {
      obj  = new vo.tag_vo(
	                       arr[i].id,
	                       arr[i].name,
	                       arr[i].url,
	                       arr[i].count
                           );
      newArr.push( obj );
   }
   var tag_ro = new vo.tag_ro();
   tag_ro.taglist = newArr;

   return get_result_method_vo( json, xml, tag_ro );
}

/*
exports.create_pagination_vo = function( articlesnum, pagesize, curpage, lastpage, loopCount, pageno, pagelabel ) {
	
	var pv = new vo.pagination_vo();
	pv.maxarticlenum = articlesnum;
	pv.pagesize = pagesize;
	pv.curpage = curpage;
	pv.lastpage = lastpage;
	pv.loopCount = loopCount;
	pv.pageno = pageno;
	pv.pagelabel = pagelabel;
	
	return get_result_method_vo( null, null, pv );
}
*/

/**
* 替换为html tag
*/
function replace_symbol_to_html( str ) {
	re1  = /&lt;/g;
	re2 = /&gt;/g;
	re3 = /&amp;ldquo;/g;
	re4 = /&amp;rdquo;/g;
	re5 = /&quot;/g;
	re6 = /&amp;nbsp;/g;
	re7 = /&amp;quot;/g;
	re8 = /&amp;rarr;/g;
	re9 = /&amp;mdash;/g;
	re10= /&amp;ndash;/g;

	var intro = str.replace( re1 , '<' )
				   .replace( re2 , '>' )
				   .replace( re3 , '“' )
				   .replace( re4 , '”' )
				   .replace( re5 , '"' )
				   .replace( re6 , ' ' )
				   .replace( re7 , '"' )
				   .replace( re8 , '→' )
				   .replace( re9 , '—' )
				   .replace( re10, '—' )
				   
	return intro;
}

function get_result_method_vo ( json, xml, obj ) {
   var result = new vo.result_method_vo();
   result.result_json = json;
   result.result_xml = xml;
   result.result_obj = obj;
   
   return result;
}
