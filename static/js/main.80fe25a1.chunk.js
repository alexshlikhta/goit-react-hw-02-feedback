(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,c){e.exports={section:"FeedBackStyles_section__EjgbL",section__group:"FeedBackStyles_section__group__1xKGV",section__list:"FeedBackStyles_section__list__35xXe",section__subtitle:"FeedBackStyles_section__subtitle__3MeeB",section__subtitle__value:"FeedBackStyles_section__subtitle__value__1aCNk"}},14:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(4),i=c.n(a),o=(c(14),c(5)),r=c(6),l=c(7),u=c(9),d=c(8),b=(c(15),c(1)),j=c.n(b),_=c(0),h=function(e){var t=e.message;return Object(_.jsx)("h3",{children:t})},v=function(e){var t=e.good,c=e.neutral,n=e.bad,s=e.total,a=e.positivePercentage;return s>0?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("ul",{className:j.a.section__list,children:[Object(_.jsxs)("li",{children:["Good: ",t]}),Object(_.jsxs)("li",{children:["Neutral: ",c]}),Object(_.jsxs)("li",{children:["Bad: ",n]})]}),Object(_.jsxs)("div",{className:j.a.section__subtitle,children:["Total: ",Object(_.jsx)("span",{className:j.a.section__subtitle__value,children:s})]}),Object(_.jsxs)("div",{className:j.a.section__subtitle,children:["Positive feedback: ",Object(_.jsx)("span",{className:j.a.section__subtitle__value,children:a})]})]}):Object(_.jsx)(h,{message:"There is no feedback"})},k=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(_.jsx)("div",{className:j.a.section__group,children:t.map((function(e,t){return Object(_.jsx)("button",{className:"",onClick:function(){c(e)},children:e},t)}))})},O=function(e){var t=e.title,c=e.children;return Object(_.jsxs)("section",{className:j.a.section,children:[Object(_.jsx)("h1",{children:t}),c]})},g=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(r.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)})),e.countTotalFeedback()},e}return Object(l.a)(c,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return"".concat((this.state.good/this.countTotalFeedback()*100).toFixed(0),"%")}},{key:"render",value:function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(O,{title:"Please leave feedback",children:Object(_.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(_.jsx)(O,{title:"Statistics",children:Object(_.jsx)(v,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),c}(n.Component),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(g,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.80fe25a1.chunk.js.map