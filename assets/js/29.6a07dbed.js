(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{438:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"同源和跨域怎么区分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同源和跨域怎么区分"}},[t._v("#")]),t._v(" 同源和跨域怎么区分?")]),t._v(" "),s("p",[t._v("HTTP 里面的")]),t._v(" "),s("ul",[s("li",[t._v("协议头")]),t._v(" "),s("li",[t._v("域名")]),t._v(" "),s("li",[t._v("端口号")])]),t._v(" "),s("p",[t._v("上面三个都一样就是同源, 有一个不同就是跨域.")]),t._v(" "),s("p",[t._v("例如, 本地构建两个服务器 web 和 接口, 他们地址分别是:")]),t._v(" "),s("ul",[s("li",[t._v("web: http://127.0.0.1:8000/index.html")]),t._v(" "),s("li",[t._v("api: http://127.0.0.1:8001/index.html")])]),t._v(" "),s("p",[t._v("这样在 index.html 里面请求 api 的接口就产生了跨域")]),t._v(" "),s("h2",{attrs:{id:"如何解决跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何解决跨域"}},[t._v("#")]),t._v(" 如何解决跨域")]),t._v(" "),s("p",[t._v("从服务器前后端分离就出现了跨域问题,那么跨域怎么解决?")]),t._v(" "),s("h3",{attrs:{id:"jsonp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[t._v("#")]),t._v(" JSONP")]),t._v(" "),s("p",[t._v("HTML 里面有些标签需求发送网络请求而没有跨域的问题,例如我们请求三方的 js 就可以直接跨域.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://code.jquery.com/jquery-migrate-1.2.1.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"支持跨域访问的-html-元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持跨域访问的-html-元素"}},[t._v("#")]),t._v(" 支持跨域访问的 HTML 元素")]),t._v(" "),s("ul",[s("li",[t._v("script")]),t._v(" "),s("li",[t._v("img")]),t._v(" "),s("li",[t._v("link")])]),t._v(" "),s("p",[t._v("JSONP 就是利用这些没有跨域限制的元素来实现跨域的, 只是他有缺点")]),t._v(" "),s("h4",{attrs:{id:"jsonp-的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-的缺点"}},[t._v("#")]),t._v(" JSONP 的缺点")]),t._v(" "),s("ul",[s("li",[t._v("需要服务端的支持")]),t._v(" "),s("li",[t._v("只能发送 get 请求")])]),t._v(" "),s("h3",{attrs:{id:"实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现原理"}},[t._v("#")]),t._v(" 实现原理:")]),t._v(" "),s("p",[t._v("JSONP 实现跨域需要服务端配合, 客户端使用 script 发送网络请求,在请求的 URL 里设置查询参数 "),s("code",[t._v("callback=response")]),t._v(". response 是本地定义的全局回调函数,用于接收服务端的响应数据.")]),t._v(" "),s("h4",{attrs:{id:"客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),s("p",[t._v("例如 "),s("code",[t._v("http://xxx.com/index.html")]),t._v(" 文档里使用 script 元素发送 ajax 请求到服务端,")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://api.xxx.com/list?callback=response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局的函数,接受服务器返回的数据")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"服务端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),s("ul",[s("li",[t._v("服务端收到客户端的网络请求,并解析出响应的回调函数 "),s("code",[t._v("response")])]),t._v(" "),s("li",[t._v("准备要返回给客户端的数据 "),s("code",[t._v("data = {...}")])]),t._v(" "),s("li",[t._v("服务器返回的数据其实就是 "),s("code",[t._v("response(data)")]),t._v(", 这样客户端接收到了以后把这个字符串当 js 代码进行调用. 所以请求的响应数据就是:")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'response('")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),t._v("\n")])])]),s("h3",{attrs:{id:"ajax-使用-jsonp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax-使用-jsonp"}},[t._v("#")]),t._v(" ajax 使用 JSONP")]),t._v(" "),s("h4",{attrs:{id:"客户端-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端-2"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://127.0.0.1:8001/list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dataType")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"服务端-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端-2"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8001")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ok'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("callback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Function"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("code")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("`$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("callback"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])]),s("h3",{attrs:{id:"cors-跨域资源访问-需要服务器支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cors-跨域资源访问-需要服务器支持"}},[t._v("#")]),t._v(" CORS 跨域资源访问(需要服务器支持)")]),t._v(" "),s("p",[t._v("CORS 需要服务端设置允许跨域访问, 客户端一般正常发送请求.")]),t._v(" "),s("ul",[s("li",[t._v("客户端(正常发送请求 ajax/fetch)")]),t._v(" "),s("li",[t._v("服务端设置跨域相关的头信息(需要处理 options 试探性请求)")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2bd9d330-79ce-4126-992e-4fc3f3f3e66f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T052422Z&X-Amz-Expires=86400&X-Amz-Signature=44d55adfecbcbd4dff6bf6ac597e0842b3a8e7bb34c165d5b8b7e104d621ad0a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cba38990-f1ff-43ba-8403-ed0e5ddde404/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T052511Z&X-Amz-Expires=86400&X-Amz-Signature=b4d04c37402f87bc525ade31855113dbbd01f74fe88db33dc2f036d9400426c4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e62e4917-3aa4-403b-b7e8-06e2d087ef17/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T052534Z&X-Amz-Expires=86400&X-Amz-Signature=97492034dc69332386121bf3299bc04dc9d1ffb16856237905866b8eb25d46f9&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b0ed896e-39c8-443c-a1ff-6d0795f99189/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T052554Z&X-Amz-Expires=86400&X-Amz-Signature=c9e6188d01333712bbc7449746038cb0ba42c797fd564e4ab816db48a9b2c31f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"弊端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弊端"}},[t._v("#")]),t._v(" 弊端")]),t._v(" "),s("p",[t._v("服务器设置的源只能有一个, 可以是 * 也可以是具体的地址. 如果设置 * 就是支持多个源跨域,并且不能携带 cookie")]),t._v(" "),s("h3",{attrs:{id:"http-proxy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-proxy"}},[t._v("#")]),t._v(" Http Proxy")]),t._v(" "),s("p",[t._v("配合 webpack webpack-dev-server")]),t._v(" "),s("p",[t._v("跨域是浏览器做出的限制, 服务端和服务端没有跨域的的问题. 所以当浏览器有跨域问题的时候再本地可以把请求转发为本地的 node server, 也就是 webpack-dev-server 然后由本地的 dev-server 来转发浏览器的请求.")]),t._v(" "),s("p",[t._v("配置 wepack\n"),s("img",{attrs:{src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cb563303-bc97-48de-a3eb-8adcaa95ccb1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230130T052952Z&X-Amz-Expires=86400&X-Amz-Signature=296c2b8f87020812e6e762f8041396d874eb565fe7efdb548996f112d0324187&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);