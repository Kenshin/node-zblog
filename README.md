##zblog api for Node.js Library
基于Node.js版的zblog api

### 使用方法：  
安装：  
<pre>
$ npm install -g node-zblog
</pre>

使用：  
<pre>
var zblog  = require("node-zblog").method,
    config = require("node-zblog").config,
    mc     = require("node-zblog").event_name,
    url    = new config.zblog_config( 'www.k-zone.cn', '80', '/zblog/api/index.asp', 'null', 'null' ),
    
    //call get_articles
    zblog.get_articles( url, m_pagesize, page );
    
    //listener mc.GET_ARTICLES event
    zblog.once( mc.GET_ARTICLES + m_pagesize + page + "_complete", function( result ) {
    	  //call event
    	  m_events.emit( "articles_complete" + m_pagesize + page, result );
    });
    
	//listener article complete event
	m_events.once( "articles_complete" + m_pagesize + page, function( result ) {
		//TO DO
	});
</pre>

测试：  
<pre>
..\node_modules\node-zblog\test\node test.js
</pre>

## 更新日志：
version 1.1.0 [2012-5-29]
* 增加了出错处理

version 1.0.0 [2012-05-06]
* 完成了zblog api for node.js的全部功能。

## 联系方式：
* 博客：[k-zone.cn](http://www.k-zone.cn/zblog)
* 微博：[新浪微博](http://weibo.com/23784148)
* 联络：kenshin[AT]ksria.com

## 版权和许可：
Copyright 2012 [k-zone.cn](http://www.k-zone.cn/zblog)  
Licensed under MIT or GPL Version 2 licenses
