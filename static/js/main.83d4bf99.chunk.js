(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={bold:"Statistics_bold__2RxSK",list:"Statistics_list__2Gj2q"}},,function(e,t,a){e.exports={container:"Section_container__6x940",title:"Section_title__pGFkG"}},function(e,t,a){e.exports={container:"FeedbackOptions_container__2znM1",button:"FeedbackOptions_button__1ez19"}},,,,,function(e,t,a){e.exports={message:"Notification_message__21JaO"}},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(6),o=a.n(i),r=(a(18),a(7)),l=a(8),d=a(9),b=a(12),j=a(11),u=a(4),h=a.n(u);function O(e){var t=e.title,a=e.children;return Object(n.jsxs)("div",{className:h.a.container,children:[Object(n.jsxs)("h2",{className:h.a.title,children:[" ",t]}),a]})}var v=a(5),x=a.n(v);var p=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(n.jsx)("div",{className:x.a.container,children:t.map((function(e){return Object(n.jsx)("button",{type:"button",className:x.a.button,onClick:function(){return a(e)},children:e},e)}))})},f=a(2),g=a.n(f);function _(e){var t=e.good,a=e.neutral,s=e.bad,c=e.total,i=e.positivePercentage;return Object(n.jsxs)("ul",{className:g.a.list,children:[Object(n.jsxs)("li",{children:["Good: ",t]}),Object(n.jsxs)("li",{children:["Neutral: ",a]}),Object(n.jsxs)("li",{children:["Bad: ",s]}),Object(n.jsxs)("li",{className:g.a.bold,children:["Total: ",c]}),Object(n.jsxs)("li",{className:g.a.bold,children:["Positive Feedback: ",i,"%"]})]})}var m=a(10),k=a.n(m);function N(e){var t=e.message;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("p",{className:k.a.message,children:t})})}N.defaultProps={message:" "};var F=N,S=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState(Object(r.a)({},t,e.state[t]+1))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.good+this.state.neutral+this.state.bad,t=Math.round(this.state.good/e*100),a=this.state,s=a.good,c=a.neutral,i=a.bad;return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{title:"Please leave feedback",children:Object(n.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:this.onLeaveFeedback})}),Object(n.jsx)(O,{title:"Statistics",children:e?Object(n.jsx)(_,{good:s,neutral:c,bad:i,total:e,positivePercentage:t}):Object(n.jsx)(F,{message:"No statistics given"})})]})}}]),a}(s.Component);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.83d4bf99.chunk.js.map