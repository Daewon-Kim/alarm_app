(this.webpackJsonpalarm_app=this.webpackJsonpalarm_app||[]).push([[0],{19:function(t,e,n){},37:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),s=n(31),a=n.n(s),o=n(4),r=n(2),l=(n(37),n(16),n(1));var u=function(){return Object(l.jsx)("div",{className:"link_to_home",children:Object(l.jsx)(o.b,{to:"/",children:"Home!"})})},h=n(9),d=n(10),j=n(11),m=n(13),b=n(12),v=(n(62),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(h.a)(this,n),(c=e.call(this,t)).state={date:new Date},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"present_time_clock",children:[this.state.date.getHours(),":",this.state.date.getMinutes(),":",this.state.date.getSeconds()]})}}]),n}(i.a.Component)),O=(n(19),function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(h.a)(this,n),(c=e.call(this,t)).clickHandler=c.clickHandler.bind(Object(j.a)(c)),c.state={timeOut:!1,curSeconds:(new Date).getSeconds(),isEnd:!0},c.timerId=0,c}return Object(d.a)(n,[{key:"componentWillMount",value:function(){var t=this;this.timerId=setInterval((function(e){t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){if(this.state.timeOut){var t=(new Date).getSeconds();this.setState({curSeconds:t})}}},{key:"clickHandler",value:function(){var t=this;if(this.setState({timeOut:!0}),this.state.timeOut){var e=this.state.curSeconds;console.log(e),setTimeout((function(){t.showClock(e),t.setState({isEnd:!1})}),5e3)}}},{key:"showClock",value:function(t){return console.log("I'm in showClock",t),!0}},{key:"render",value:function(){var t=this.state.isEnd;return Object(l.jsx)("div",{children:t?Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{path:"/five",exact:!0,component:v}),Object(l.jsx)("button",{className:"five_btns",onClick:this.clickHandler,children:"Start"})]}):Object(l.jsx)("div",{className:"time_up",children:"Time up!"})})}}]),n}(c.Component)),k=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(h.a)(this,n),(c=e.call(this,t)).clickHandler=c.clickHandler.bind(Object(j.a)(c)),c.state={timeOut:!1,curSeconds:(new Date).getSeconds(),isEnd:!0},c.timerId=0,c}return Object(d.a)(n,[{key:"componentWillMount",value:function(){var t=this;this.timerId=setInterval((function(e){t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){if(this.state.timeOut){var t=(new Date).getSeconds();this.setState({curSeconds:t})}}},{key:"clickHandler",value:function(){var t=this;if(this.setState({timeOut:!0}),this.state.timeOut){var e=this.state.curSeconds;console.log(e),setTimeout((function(){t.showClock(e),t.setState({isEnd:!1})}),1e4)}}},{key:"showClock",value:function(t){return console.log("I'm in showClock",t),!0}},{key:"render",value:function(){var t=this.state.isEnd;return Object(l.jsx)("div",{children:t?Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{path:"/ten",exact:!0,component:v}),Object(l.jsx)("button",{className:"ten_btns",onClick:this.clickHandler,children:"Start"})]}):Object(l.jsx)("div",{className:"time_up",children:" Time up! "})})}}]),n}(c.Component),f=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(h.a)(this,n),(c=e.call(this,t)).clickHandler=c.clickHandler.bind(Object(j.a)(c)),c.state={timeOut:!1,curSeconds:(new Date).getSeconds(),isEnd:!0},c.timerId=0,c}return Object(d.a)(n,[{key:"componentWillMount",value:function(){var t=this;this.timerId=setInterval((function(e){t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"tick",value:function(){if(this.state.timeOut){var t=(new Date).getSeconds();this.setState({curSeconds:t})}}},{key:"clickHandler",value:function(){var t=this;if(this.setState({timeOut:!0}),this.state.timeOut){var e=this.state.curSeconds;console.log(e),setTimeout((function(){t.showClock(e),t.setState({isEnd:!1})}),3e4)}}},{key:"showClock",value:function(t){return console.log("I'm in showClock",t),!0}},{key:"render",value:function(){var t=this.state.isEnd;return Object(l.jsx)("div",{children:t?Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{path:"/thirty",exact:!0,component:v}),Object(l.jsx)("button",{className:"thirty_btns",onClick:this.clickHandler,children:"Start"})]}):Object(l.jsx)("div",{className:"time_up",children:" Time up! "})})}}]),n}(c.Component);n(63);var p=function(){return Object(l.jsxs)("div",{className:"home_section",children:[Object(l.jsx)("div",{className:"this_is_home",children:" This is Home "}),Object(l.jsxs)(o.a,{children:[Object(l.jsx)(r.a,{path:"/five",component:O}),Object(l.jsx)(r.a,{path:"/ten",component:k}),Object(l.jsx)(r.a,{path:"/thirty",component:f})]}),Object(l.jsxs)("div",{className:"btns",children:[Object(l.jsx)(o.b,{to:"/five",children:Object(l.jsx)("button",{className:"first_btns",children:"5\ucd08"})}),Object(l.jsx)(o.b,{to:"/ten",children:Object(l.jsx)("button",{className:"second_btns",children:"10\ucd08"})}),Object(l.jsx)(o.b,{to:"/thirty",children:Object(l.jsx)("button",{className:"third_btns",children:"30\ucd08"})})]})]})};var x=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(r.a,{path:"/",exact:!0,component:p}),Object(l.jsx)(r.a,{path:"/",exact:!0,component:v}),Object(l.jsx)(r.a,{path:"/five",component:O}),Object(l.jsx)(r.a,{path:"/ten",component:k}),Object(l.jsx)(r.a,{path:"/thirty",component:f})]})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.2bb0e447.chunk.js.map