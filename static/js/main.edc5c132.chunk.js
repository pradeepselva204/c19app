(this.webpackJsonpdash19=this.webpackJsonpdash19||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2s9ni",card:"Cards_card__kUs_5",infected:"Cards_infected__2IWey",recovered:"Cards_recovered__nb70B",deaths:"Cards_deaths__2S3fQ"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),u=a(6),s=a.n(u),l=a(10),i=a(74),d=a(75),p=a(85),f=a(84),m=a(225),v=a(230),h=a(226),b=a(227),E=a(13),y=a.n(E),x=a(34),g=a.n(x),C=a(35),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,n=t.lastUpdate,c=t.recovered,o=t.deaths;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(m.a,{container:!0,justify:"center",spacing:3},r.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:a.value,duration:3.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(n).toDateString()))),r.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:c.value,duration:1.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(n).toDateString()))),r.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,className:_()(y.a.card,y.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(g.a,{start:0,end:o.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(n).toDateString()))))):"Loading..."},j=a(33),O=a(36),S=a.n(O),k="https://covid19.mathdro.id/api",D=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(47),U=a(81),A=a.n(U),P=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(j.a)(c,2),u=o[0],i=o[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var d=u.length?r.a.createElement(I.b,{data:{labels:u.map((function(e){return e.date})),datasets:[{data:u.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:u.map((function(e){return e.deaths})),label:"Deaths",borderColor:"#564356",fill:!0}]}}):null;console.log(t);var p=t.confirmed?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(240, 149, 12, 0.911)","rgba(21, 202, 172, 0.733)","rgba(202, 21, 36, 0.733)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current Status in ".concat(a)}}}):null;return r.a.createElement("div",{className:A.a.container},a?p:d)},J=a(231),Q=a(228),R=a(229),G=a(82),L=a.n(G),M=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(J.a,{className:L.a.formControl},r.a.createElement(Q.a,null,"Select the Country"),r.a.createElement(R.a,{defaultValue:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},V=a(83),W=a.n(V),q=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:W.a.container},r.a.createElement(M,{handleCountryChange:this.handleCountryChange}),r.a.createElement(w,{data:t}),r.a.createElement(P,{data:t,country:a}),r.a.createElement("p",null,"Dashboard design: ",r.a.createElement("a",{href:"https://www.linkedin.com/in/pradeep-selvaraj-70b3a6134/"},"Pradeep Selvaraj")))}}]),a}(r.a.Component);o.a.render(r.a.createElement(q,null),document.getElementById("root"))},81:function(e,t,a){e.exports={container:"Chart_container__39584"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__1crQ9"}},83:function(e,t,a){e.exports={container:"App_container__3O0Af"}},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.edc5c132.chunk.js.map