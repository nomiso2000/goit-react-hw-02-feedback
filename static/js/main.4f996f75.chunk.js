(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={btnBox:"FeedbackOptions_btnBox__3wnnB",btnBoxTitle:"FeedbackOptions_btnBoxTitle__UzxWa",button:"FeedbackOptions_button__2PoeD"}},function(e,t,a){e.exports={feedbackList:"Statistics_feedbackList__1Bqrm",statisticsBoxTitle:"Statistics_statisticsBoxTitle__3zLKL"}},,,,,,function(e,t,a){e.exports={notifications:"Notifications_notifications__2zeou"}},function(e,t,a){e.exports={feedbackContainer:"App_feedbackContainer__1izqP"}},,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),l=a.n(o),r=a(5),i=a(6),s=a(7),u=a(12),b=a(10),d=a(11),m=a(1),f=a.n(m),v=function(e){var t=e.options,a=e.onLeaveFeedback,n=Object(d.a)(t,3),o=n[0],l=n[1],r=n[2];return c.a.createElement("div",null,c.a.createElement("span",{className:f.a.btnBoxTitle},"Please leave feedback"),c.a.createElement("div",{className:f.a.btnBox},c.a.createElement("button",{className:f.a.button,type:"button","data-rate":o,onClick:a},"Good"),c.a.createElement("button",{className:f.a.button,type:"button","data-rate":l,onClick:a},"Neutral"),c.a.createElement("button",{className:f.a.button,type:"button","data-rate":r,onClick:a},"Bad")))},k=function(e){var t=e.label,a=e.value;return c.a.createElement("p",{className:"feddbackItem"},"".concat(t,": ").concat(a))};k.defaultProps={label:"feedback",value:0};var p=k,E=function(e){var t=e.children;return c.a.createElement("li",{className:"Item"},t)},_=a(2),h=a.n(_),g=function(e){var t=e.good,a=e.neutral,n=e.bad,o=e.total,l=e.positivePercentage;return c.a.createElement("div",null,c.a.createElement("span",{className:h.a.statisticsBoxTitle},"Statistics"),c.a.createElement("ul",{className:h.a.feedbackList},c.a.createElement(E,null,c.a.createElement(p,{label:"Good",value:t})),c.a.createElement(E,null,c.a.createElement(p,{label:"Neutral",value:a})),c.a.createElement(E,null,c.a.createElement(p,{label:"Bad",value:n})),c.a.createElement(E,null,c.a.createElement(p,{label:"Total",value:o})),c.a.createElement(E,null,c.a.createElement(p,{label:"Positive feedback",value:l}))))},x=a(8),N=a.n(x),B=function(e){var t=e.message;return c.a.createElement("div",{className:N.a.notifications},t)},F=a(9),P=a.n(F),O=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleLeaveFeedback=function(t){var a=t.target.dataset.rate;e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e}return Object(s.a)(a,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good;return"".concat(Math.floor(e/this.countTotalFeedback()*100),"%")}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return c.a.createElement("div",{className:P.a.feedbackContainer},c.a.createElement(v,{options:["good","neutral","bad"],onLeaveFeedback:this.handleLeaveFeedback}),t>0||a>0||n>0?c.a.createElement(g,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):c.a.createElement(B,{message:"No feedback given"}))}}]),a}(n.Component);a(18);l.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.4f996f75.chunk.js.map