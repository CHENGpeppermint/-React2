(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{104:function(e,t,n){},105:function(e,t){},106:function(e,t,n){},111:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),l=n.n(c),r=n(53),u=n(26),i=n(27),m=n(30),s=n(29),p=function(e){return o.a.createElement("div",null,o.a.createElement("input",{value:e.inpValue,type:"text",onChange:e.handleChange}),o.a.createElement("button",{onClick:e.addTodo},"\u6dfb\u52a0"))},d=function(e){return o.a.createElement("div",null,o.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c",e.arr1.length),o.a.createElement("ul",null,e.renderTodos(!1)),o.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210",e.arr2.length),o.a.createElement("ul",null,e.renderTodos(!0)))},E=(a.Component,function(e){return console.log(e),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h2",null,"React"),o.a.createElement("p",null,"\u7528\u4e8e\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return e.history.push("/doc")}},"\u5feb\u901f\u5f00\u59cb"),o.a.createElement("button",{onClick:function(){return e.history.push("/tuto")}},"\u5165\u95e8\u6559\u7a0b")))}),h=(n(104),a.Component,n(105),function(e,t){var n=function(n){Object(m.a)(c,n);var a=Object(s.a)(c);function c(){var e;return Object(u.a)(this,c),(e=a.call(this)).state={data:[]},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.data})}))}},{key:"render",value:function(){return o.a.createElement(e,Object.assign({},this.props,{data:this.state.data}))}}]),c}(a.Component);return n.displayName="withFetch(".concat(e.name,")"),n}),f=(h((function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"\u6807\u9898",e.name),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.content}}))}),"https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312"),h((function(e){return o.a.createElement("ul",null,e.data.map((function(e){return o.a.createElement("li",null,e.title)})))}),"https://cnodejs.org/api/v1/topics"),n(97),o.a.createContext(),n(98)),v=n(10),b=n(12),g=(n(106),function(){return o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement(b.b,{activeClassName:"active",exact:!0,to:"/"},"React"),o.a.createElement(b.b,{activeClassName:"active",to:"/doc"},"\u6587\u6863"),o.a.createElement(b.b,{activeClassName:"active",to:"/tuto"},"\u6559\u7a0b"),o.a.createElement(b.b,{activeClassName:"active",to:"/blog"},"\u535a\u5ba2"),o.a.createElement(b.b,{activeClassName:"active",to:"/comm"},"\u793e\u533a")))}),j=function(){return o.a.createElement("div",null,"Core")},C=function(){return o.a.createElement("div",null,"Guide")},k=function(){return o.a.createElement("div",null,"Api")},y=function(){return o.a.createElement("div",null,"Hooks")},O=(n(111),n(21)),N=Object(v.k)((function(e){console.log(e);var t=Object(v.g)(),n=Object(v.h)(),c=Object(v.i)(),l=Object(v.j)();return console.log(t),console.log(n),console.log(c),console.log(l),Object(a.useEffect)((function(){localStorage.getItem("userinfo")||e.history.push({pathname:"/login",state:e.location})}),[]),o.a.createElement("div",{className:"doc"},o.a.createElement("div",{className:"content"},o.a.createElement(v.b,{path:"/doc/core",component:j}),o.a.createElement(v.b,{path:"/doc/guide",component:C}),o.a.createElement(v.b,{path:"/doc/api",component:k}),o.a.createElement(v.b,{path:"/doc/hooks",component:y})),o.a.createElement("ol",null,o.a.createElement("li",null,o.a.createElement(b.b,{to:"/doc/core"},"\u6838\u5fc3\u6982\u5ff5")),o.a.createElement("li",null,o.a.createElement(b.b,{to:"/doc/guide"},"\u9ad8\u7ea7\u6307\u5f15")),o.a.createElement("li",null,o.a.createElement(b.b,{to:"/doc/api"},"API")),o.a.createElement("li",null,o.a.createElement(b.b,{to:"/doc/hooks"},"Hooks"))))})),w=function(){return o.a.createElement("div",null,"Tuto")},x=function(){return o.a.createElement("div",null,"Blog")},I=function(){return o.a.createElement("div",null,"Comm")},S=function(e){return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){localStorage.setItem("userinfo","tom"),e.history.replace(e.location.state)}},"\u767b\u5f55"))},T=(o.a.Component,[{path:"/",exact:!0,component:E},{path:"/doc",component:N,pri:!0,routes:[{path:"/doc/core",component:j},{path:"/doc/guide",component:C},{path:"doc/api",component:k},{path:"doc/hooks",component:y}]},{path:"/tuto",component:w,pri:!0},{path:"/blog",component:x},{path:"/comm",component:I},{path:"/login",component:S}]);function A(e){var t=e.component,n=Object(f.a)(e,["component"]);return o.a.createElement(v.b,Object.assign({},n,{render:function(e){var a=e.location;return localStorage.getItem("userinfo")?o.a.createElement(t,n):o.a.createElement(v.a,{to:{pathname:"/login",state:a}})}}))}function H(e){return e.pri?o.a.createElement(A,e):o.a.createElement(v.b,{path:e.path,render:function(t){return o.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}var J=function(){return o.a.createElement(b.a,null,o.a.createElement(g,null),o.a.createElement(v.d,null,T.map((function(e){return o.a.createElement(H,e)}))))};n(179);l.a.render(o.a.createElement(J,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},99:function(e,t,n){e.exports=n(180)}},[[99,1,2]]]);
//# sourceMappingURL=main.03544d7c.chunk.js.map