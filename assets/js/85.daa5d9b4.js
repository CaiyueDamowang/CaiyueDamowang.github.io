(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{423:function(t,e,n){"use strict";n.r(e);var v=n(9),o=Object(v.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"数据类型与编码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型与编码"}},[t._v("#")]),t._v(" 数据类型与编码")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("一个http报文必须是完整交付")])]),t._v(" "),n("li",[n("p",[t._v("大文件进行压缩时，是实时压缩实时传输，所以无法确定报文长度")])])]),t._v(" "),n("p",[t._v("在传输层将数据包拆封上交到应用层时，应用层开始设法解析数据的格式")]),t._v(" "),n("blockquote",[n("p",[t._v("当然，它可以“猜”。因为很多数据都是有固定格式的，所以通过检查数据的前几个字节也许就能知道这是个 GIF 图片、或者是个 MP3 音乐文件，但这种方式无疑十分低效，而且有很大几率会检查不出来文件类型。")])]),t._v(" "),n("h4",{attrs:{id:"content-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#content-type"}},[t._v("#")]),t._v(" content-type")]),t._v(" "),n("p",[t._v("早在 HTTP 协议诞生之前就已经有了针对这种问题的解决方案，不过它是用在电子邮件系统里的，"),n("strong",[t._v("让电子邮件可以发送 ASCII 码以外的任意数据")]),t._v("，方案的名字叫做“多用途互联网邮件扩展”"),n("code",[t._v("（Multipurpose Internet Mail Extensions）")]),t._v("，简称为 "),n("code",[t._v("MIME")]),t._v("。")]),t._v(" "),n("p",[t._v("简单列举几种格式:")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("text")]),t._v(": text/html 了，表示超文本文档，此外还有纯文本 text/plain、样式表 text/css 等")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("image")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("audio/video")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("application")]),t._v("：数据格式不固定，可能是文本也可能是二进制，必须由上层应用程序来解释。常见的有 "),n("code",[t._v("application/json")]),t._v("，"),n("code",[t._v("application/javascript")]),t._v("、"),n("code",[t._v("application/pdf")]),t._v(" 等，另外，如果实在是不知道数据是什么类型，像刚才说的“黑盒”，就会是 "),n("code",[t._v("application/octet-stream")]),t._v("，即不透明的二进制数据。")])])]),t._v(" "),n("h4",{attrs:{id:"encoding-type"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#encoding-type"}},[t._v("#")]),t._v(" encoding type")]),t._v(" "),n("p",[t._v("但仅有 MIME type 还不够，因为 HTTP 在传输时为了节约带宽，有时候还会压缩数据，为了不要让浏览器继续“猜”，还需要有一个“Encoding type”，告诉数据是用的什么编码格式，这样对方才能正确解压缩，还原出原始的数据。")]),t._v(" "),n("h4",{attrs:{id:"客户端和服务端的内容协商"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端和服务端的内容协商"}},[t._v("#")]),t._v(" 客户端和服务端的内容协商")]),t._v(" "),n("p",[t._v("有了 MIME type 和 Encoding type，无论是浏览器还是服务器就都可以轻松识别出 body 的类型，也就能够正确处理数据了。")]),t._v(" "),n("p",[t._v("HTTP 协议为此定义了两个 Accept 请求头字段和两个 Content 实体头字段，用于客户端和服务器进行“内容协商”。也就是说，客户端用 Accept 头告诉服务器希望接收什么样的数据，而服务器用 Content 头告诉客户端实际发送了什么样的数据。")]),t._v(" "),n("p",[t._v("Accept-Encoding字段标记的是客户端支持的压缩格式，例如上面说的 gzip、deflate 等，同样也可以用“,”列出多个，服务器可以选择其中一种来压缩数据，实际使用的压缩格式放在响应头字段Content-Encoding里。")]),t._v(" "),n("blockquote",[n("p",[t._v("不过这两个字段是可以省略的，如果请求报文里没有 Accept-Encoding 字段，就表示客户端不支持压缩数据；如果响应报文里没有 Content-Encoding 字段，就表示响应数据没有被压缩。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);