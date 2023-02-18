(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{455:function(_,v,e){"use strict";e.r(v);var t=e(2),a=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"题目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[_._v("#")]),_._v(" 题目")]),_._v(" "),v("p",[_._v("Vue 每个生命周期都做了什么?")]),_._v(" "),v("h2",{attrs:{id:"vue3-生命周期图示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue3-生命周期图示"}},[_._v("#")]),_._v(" Vue3 生命周期图示")]),_._v(" "),v("p",[v("img",{attrs:{src:"/docs/assets/img/vue-lifecycle.png",alt:"Vue3生命周期"}})]),_._v(" "),v("p",[_._v("Vue 的声明周期从大的方面主要分下面几个阶段:")]),_._v(" "),v("ul",[v("li",[_._v("创建: created")]),_._v(" "),v("li",[_._v("挂载: mounted")]),_._v(" "),v("li",[_._v("更新: updated")]),_._v(" "),v("li",[_._v("卸载: unmounted")])]),_._v(" "),v("p",[_._v("在每个阶段 VUE 都提供了两个回调的钩子函数分别对应当前阶段开始前和当前阶段完成后:")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("beforeCreate")])]),_._v(" "),v("li",[v("p",[_._v("created")])]),_._v(" "),v("li",[v("p",[_._v("beforeMount")])]),_._v(" "),v("li",[v("p",[_._v("mounted")])]),_._v(" "),v("li",[v("p",[_._v("beforeUpdate")])]),_._v(" "),v("li",[v("p",[_._v("updated")])]),_._v(" "),v("li",[v("p",[_._v("beforeUnmount")])]),_._v(" "),v("li",[v("p",[_._v("unmounted")])]),_._v(" "),v("li",[v("p",[_._v("activated")])]),_._v(" "),v("li",[v("p",[_._v("deactivated")])])]),_._v(" "),v("h2",{attrs:{id:"生命周期钩子函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子函数"}},[_._v("#")]),_._v(" 生命周期钩子函数")]),_._v(" "),v("h2",{attrs:{id:"_1-beforecreate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-beforecreate"}},[_._v("#")]),_._v(" 1.beforeCreate")]),_._v(" "),v("p",[v("code",[_._v("beforeCreate")]),_._v(" 被回调的时候仅仅是创建了一个 VUE 的实例,这个时候 data/method 等还没有初始化,所以在这个阶段你访问当前实例的 data 属性返回 "),v("code",[_._v("undefined")]),_._v(". 开发中这个阶段一般不会用到")]),_._v(" "),v("h2",{attrs:{id:"_2-created"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-created"}},[_._v("#")]),_._v(" 2.created")]),_._v(" "),v("p",[v("code",[_._v("created")]),_._v(" 回调的时候意味着 VUE 的实例已经初始化完成,尚未开始渲染模板.响应式/计算属性/方法/侦听器都已经起作用了.也就是说 VUE 的实例对象已经完全可用了.")]),_._v(" "),v("p",[_._v("通常在这个阶段我们会做和 DOM 节点没有关系但是跟 JS 模型有关系的操作,比如网络请求数据/开启数据侦听/绑定事件等操作.")]),_._v(" "),v("h2",{attrs:{id:"_3-beforemount"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-beforemount"}},[_._v("#")]),_._v(" 3. beforeMount")]),_._v(" "),v("p",[_._v("这个时期主要做的事情就是给 DOM 挂载做准备工作. 但是还不能访问 DOM")]),_._v(" "),v("ul",[v("li",[_._v("模板解析编译")]),_._v(" "),v("li",[_._v("把 VUE 的实例通过调用 "),v("code",[_._v("render()")]),_._v(" 转换成虚拟节点 vdom")]),_._v(" "),v("li",[_._v("还没有开始渲染 DOM")])]),_._v(" "),v("p",[_._v("这个钩子在服务端渲染时不会被调用.")]),_._v(" "),v("h2",{attrs:{id:"_4-mounted"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-mounted"}},[_._v("#")]),_._v(" 4. mounted")]),_._v(" "),v("p",[_._v("这个时候组件已经挂载到 DOM 上了, 我们可以拿到 DOM 的元素了")]),_._v(" "),v("ul",[v("li",[_._v("完成 DOM 渲染")]),_._v(" "),v("li",[_._v("组件创建完成")]),_._v(" "),v("li",[_._v("由"),v("code",[_._v("创建阶段")]),_._v(" 进入 "),v("code",[_._v("运行阶段")])]),_._v(" "),v("li",[_._v("同步子组件都已经被挂载(不包含异步组件或 "),v("code",[_._v("<Suspense>")]),_._v(" 树内的组件)")]),_._v(" "),v("li",[_._v("自身的 DOM 树已经创建完成并插入了父容器中. 注意仅当根容器在文档中才可以保证组件 DOM 树也在文档中.")])]),_._v(" "),v("p",[_._v("这个钩子通常用于执行需要访问组件所渲染的 DOM 树相关的副作用")]),_._v(" "),v("h2",{attrs:{id:"_5-beforeupdate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-beforeupdate"}},[_._v("#")]),_._v(" 5. beforeUpdate")]),_._v(" "),v("p",[_._v("当一个响应式状态改变引起组件更新 DOM 之前被调用")]),_._v(" "),v("ul",[v("li",[_._v("data 发生变化之后")]),_._v(" "),v("li",[_._v("准备 更新 DOM (还没更新 DOM)")])]),_._v(" "),v("p",[_._v("这个钩子可以用来在 VUE 更新 DOM 之前访问 DOM 状态. 这个钩子中更改状态也是安全的.")]),_._v(" "),v("h2",{attrs:{id:"_6-updated"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-updated"}},[_._v("#")]),_._v(" 6. updated")]),_._v(" "),v("p",[_._v("当一个响应式状态改变引起组件更新 DOM 之后被调用")]),_._v(" "),v("ul",[v("li",[_._v("data 发生变化之后")]),_._v(" "),v("li",[_._v("更新 DOM 完成")]),_._v(" "),v("li",[v("strong",[_._v("不要在 updated 里修改 data, 可能导致死循环")])])]),_._v(" "),v("p",[_._v("父组件的更新钩子将在其子组件更新钩子之后调用")]),_._v(" "),v("p",[_._v("这个钩子会在组件的任意 DOM 更新之后被调用,这些更新可能是由不同的状态变更导致的.如果你需要在某个特定的状态更改后访问更新后的 DOM,使用 nextTick()")]),_._v(" "),v("p",[_._v("不要在 "),v("code",[_._v("updated")]),_._v(" 钩子里更改组件的状态,这可能会导致无限更新循环")]),_._v(" "),v("h2",{attrs:{id:"_7-beforeunmount"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-beforeunmount"}},[_._v("#")]),_._v(" 7. beforeUnmount")]),_._v(" "),v("p",[_._v("组件被卸载之前调用.这个钩子被调用时,组件实例依然还有全部功能")]),_._v(" "),v("ul",[v("li",[_._v("组件进入销毁阶段(尚未销毁,可以正常使用)")]),_._v(" "),v("li",[_._v("可以移除/解绑一些全局事件,自定义事件")])]),_._v(" "),v("h2",{attrs:{id:"_8-unmounted"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-unmounted"}},[_._v("#")]),_._v(" 8. unmounted")]),_._v(" "),v("p",[_._v("在一个组件实例被卸载后使用.")]),_._v(" "),v("ul",[v("li",[_._v("组件被销毁了")]),_._v(" "),v("li",[_._v("所有子组件也被销毁了")])]),_._v(" "),v("p",[_._v("一个组件在以下情况视为已经卸载:")]),_._v(" "),v("ul",[v("li",[_._v("其所有子组件都被卸载")]),_._v(" "),v("li",[_._v("所有相关的响应式作用(渲染作用以及 "),v("code",[_._v("setup()")]),_._v(" 时创建的计算属性和侦听器)都已经停止")])]),_._v(" "),v("p",[_._v("可以在这个钩子里手动清理一些副作用, 例如计时器/DOM事件监听器或者服务器连接等")]),_._v(" "),v("h2",{attrs:{id:"keepalive"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#keepalive"}},[_._v("#")]),_._v(" KeepAlive")]),_._v(" "),v("p",[_._v("当使用 "),v("code",[_._v("KeepAlive")]),_._v(" 缓存组件的时候会用到 "),v("code",[_._v("activated")]),_._v(" 和 "),v("code",[_._v("deactivated")]),_._v(" 两个钩子. 例如 tabControl 组件,当 tab 切换的时候需要卸载一个组件挂载另一个组件. 使用 "),v("code",[_._v("KeepAlive")]),_._v(" 则可以把暂时不需要展示的组件缓存起来当需要展示的时候从缓存里拿出来展示,这样不仅仅可以优化性能而且还能保存组件之前的状态.")]),_._v(" "),v("h2",{attrs:{id:"_9-activated"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-activated"}},[_._v("#")]),_._v(" 9. activated")]),_._v(" "),v("p",[_._v("当组件插入 DOM 中时候被调用.")]),_._v(" "),v("ul",[v("li",[_._v("首次挂载")]),_._v(" "),v("li",[_._v("从缓存中取出重新插入 DOM 的时候调用")])]),_._v(" "),v("h2",{attrs:{id:"_10-deactivated"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-deactivated"}},[_._v("#")]),_._v(" 10. deactivated")]),_._v(" "),v("p",[_._v("当组件从 DOM 中移除的时候被调用")]),_._v(" "),v("ul",[v("li",[_._v("从 DOM 上移除进入缓存")]),_._v(" "),v("li",[_._v("组件卸载")])])])}),[],!1,null,null,null);v.default=a.exports}}]);