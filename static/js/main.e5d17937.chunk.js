(this["webpackJsonpnypd-moving-violation-charts"]=this["webpackJsonpnypd-moving-violation-charts"]||[]).push([[0],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(41),r=a.n(c),i=(a(55),a(56),a(57),a(42)),l=a(15),u=a(43),p=a(44),s=a(48),v=a(45),m=a(49),E=(a(58),a(46));function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=["TOTAL Movers","Backing Unsafely","Bike Lane","Brake Lights (Defect.or Improper)","Bus Lane","Bus Lane, Driving in","Cell Phone","Commercial Veh on Pkwy","Cruising For Passengers","Defective Brakes","Disobey Sign","Disobey Steady Red Signal","Disobey Traffic Control Device","Driving Too Slow","Equipment","Equipment (Other)","Excessive Noise","Fail to Keep Right","Fail to Signal","Fail to Stop on Signal","Fail to yield Right of Way to Pedestrian","Failure to Signal","Failure to yield Right of Way to Vehicle","Following Too Closely","Headlights (Defect. or Improper)","Improper Lights","Improper Passing","Improper Taxi Pickup","Improper Turn","Improper/Missing Plates","Lamps and Other Equipment on Bicycle","Motorcycle (Other)","Not Giving R of W to Pedes.","Not Giving R of W to Veh.","OBSTRUCTED PLATE","Obstructed Plate","One Way Street","Other Movers","Overheight","Overlength","Overweight","Overwidth","Pavement Markings","Red Light","Safety Belt","School Bus","School Bus, Passing Stopped","Scooter In NYC","Seat Belt","Speeding","Spillback","TBTA Rule","TLC (Other)","Tinted Windows","Tints","Truck Route","Truck Routes","U-Turn","Uninspected","Uninsured","Unlicensed Operator","Unregistered","Unsafe Lane Change"],d=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(s.a)(this,Object(v.a)(t).call(this,e))).state={precinct:"city",violation:"TOTAL Movers",parsedData:{},data:{labels:[],datasets:[{label:"",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[]}]}},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://urbaneoptics.github.io/nyc-moving-violation-data/data/json/aggregates/city_aggregate.json").then((function(e){return e.json()})).then((function(t){e.setState({parsedData:t});var a=Object(l.a)(e.state.data.datasets),n=Object.keys(t);a[0].data=n.map((function(a){return t[a][e.state.violation]})),a[0].label="".concat(e.state.precinct," Precinct/Bureau ").concat(e.state.violation," violations written"),e.setState({data:h({},e.state.data,{labels:n,datasets:a})})}))}},{key:"handlePrecinctSelection",value:function(e){var t=this,a=e.target.value;this.setState({precinct:a}),fetch("https://urbaneoptics.github.io/nyc-moving-violation-data/data/json/aggregates/".concat(e.target.value,"_aggregate.json")).then((function(e){return e.json()})).then((function(e){t.setState({parsedData:e});var n=Object(l.a)(t.state.data.datasets),o=Object.keys(e);n[0].data=o.map((function(a){return e[a][t.state.violation]})),n[0].label="".concat(a," Precinct/Bureau ").concat(t.state.violation," violations written"),t.setState({data:h({},t.state.data,{labels:o,datasets:n})})}))}},{key:"handleViolationTypeSelection",value:function(e){var t=this;this.setState({violation:e.target.value});var a=Object(l.a)(this.state.data.datasets),n=this.state.data.labels;a[0].data=n.map((function(a){return t.state.parsedData[a][e.target.value]})),a[0].label="".concat(this.state.precinct," Precinct/Bureau ").concat(e.target.value," violations written")}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("select",{onChange:function(t){return e.handlePrecinctSelection(t)}},o.a.createElement("option",{value:"city"},"Citywide"),o.a.createElement("option",{value:"001"},"Precinct 001"),o.a.createElement("option",{value:"005"},"Precinct 005"),o.a.createElement("option",{value:"006"},"Precinct 006"),o.a.createElement("option",{value:"007"},"Precinct 007"),o.a.createElement("option",{value:"009"},"Precinct 009"),o.a.createElement("option",{value:"010"},"Precinct 010"),o.a.createElement("option",{value:"013"},"Precinct 013"),o.a.createElement("option",{value:"014"},"Precinct 014"),o.a.createElement("option",{value:"017"},"Precinct 017"),o.a.createElement("option",{value:"018"},"Precinct 018"),o.a.createElement("option",{value:"019"},"Precinct 019"),o.a.createElement("option",{value:"020"},"Precinct 020"),o.a.createElement("option",{value:"022"},"Precinct 022"),o.a.createElement("option",{value:"023"},"Precinct 023"),o.a.createElement("option",{value:"024"},"Precinct 024"),o.a.createElement("option",{value:"025"},"Precinct 025"),o.a.createElement("option",{value:"026"},"Precinct 026"),o.a.createElement("option",{value:"028"},"Precinct 028"),o.a.createElement("option",{value:"030"},"Precinct 030"),o.a.createElement("option",{value:"032"},"Precinct 032"),o.a.createElement("option",{value:"033"},"Precinct 033"),o.a.createElement("option",{value:"034"},"Precinct 034"),o.a.createElement("option",{value:"040"},"Precinct 040"),o.a.createElement("option",{value:"041"},"Precinct 041"),o.a.createElement("option",{value:"042"},"Precinct 042"),o.a.createElement("option",{value:"043"},"Precinct 043"),o.a.createElement("option",{value:"044"},"Precinct 044"),o.a.createElement("option",{value:"045"},"Precinct 045"),o.a.createElement("option",{value:"046"},"Precinct 046"),o.a.createElement("option",{value:"047"},"Precinct 047"),o.a.createElement("option",{value:"048"},"Precinct 048"),o.a.createElement("option",{value:"049"},"Precinct 049"),o.a.createElement("option",{value:"050"},"Precinct 050"),o.a.createElement("option",{value:"052"},"Precinct 052"),o.a.createElement("option",{value:"060"},"Precinct 060"),o.a.createElement("option",{value:"061"},"Precinct 061"),o.a.createElement("option",{value:"062"},"Precinct 062"),o.a.createElement("option",{value:"063"},"Precinct 063"),o.a.createElement("option",{value:"066"},"Precinct 066"),o.a.createElement("option",{value:"067"},"Precinct 067"),o.a.createElement("option",{value:"068"},"Precinct 068"),o.a.createElement("option",{value:"069"},"Precinct 069"),o.a.createElement("option",{value:"070"},"Precinct 070"),o.a.createElement("option",{value:"071"},"Precinct 071"),o.a.createElement("option",{value:"072"},"Precinct 072"),o.a.createElement("option",{value:"073"},"Precinct 073"),o.a.createElement("option",{value:"075"},"Precinct 075"),o.a.createElement("option",{value:"076"},"Precinct 076"),o.a.createElement("option",{value:"077"},"Precinct 077"),o.a.createElement("option",{value:"078"},"Precinct 078"),o.a.createElement("option",{value:"079"},"Precinct 079"),o.a.createElement("option",{value:"081"},"Precinct 081"),o.a.createElement("option",{value:"083"},"Precinct 083"),o.a.createElement("option",{value:"084"},"Precinct 084"),o.a.createElement("option",{value:"088"},"Precinct 088"),o.a.createElement("option",{value:"090"},"Precinct 090"),o.a.createElement("option",{value:"094"},"Precinct 094"),o.a.createElement("option",{value:"100"},"Precinct 100"),o.a.createElement("option",{value:"101"},"Precinct 101"),o.a.createElement("option",{value:"102"},"Precinct 102"),o.a.createElement("option",{value:"103"},"Precinct 103"),o.a.createElement("option",{value:"104"},"Precinct 104"),o.a.createElement("option",{value:"105"},"Precinct 105"),o.a.createElement("option",{value:"106"},"Precinct 106"),o.a.createElement("option",{value:"107"},"Precinct 107"),o.a.createElement("option",{value:"108"},"Precinct 108"),o.a.createElement("option",{value:"109"},"Precinct 109"),o.a.createElement("option",{value:"110"},"Precinct 110"),o.a.createElement("option",{value:"111"},"Precinct 111"),o.a.createElement("option",{value:"112"},"Precinct 112"),o.a.createElement("option",{value:"113"},"Precinct 113"),o.a.createElement("option",{value:"114"},"Precinct 114"),o.a.createElement("option",{value:"115"},"Precinct 115"),o.a.createElement("option",{value:"120"},"Precinct 120"),o.a.createElement("option",{value:"121"},"Precinct 121"),o.a.createElement("option",{value:"122"},"Precinct 122"),o.a.createElement("option",{value:"123"},"Precinct 123"),o.a.createElement("option",{value:"cot"},"Transportation Bureau"),o.a.createElement("option",{value:"housing"},"Housing Bureau"),o.a.createElement("option",{value:"patrol"},"Patrol Bureau"),o.a.createElement("option",{value:"pbbn"},"Brooklyn North"),o.a.createElement("option",{value:"pbbs"},"Brooklyn South"),o.a.createElement("option",{value:"pbbx"},"Bronx"),o.a.createElement("option",{value:"pbmn"},"Manhattan North"),o.a.createElement("option",{value:"pbms"},"Manhattan South"),o.a.createElement("option",{value:"pbqn"},"Queens North"),o.a.createElement("option",{value:"pbqs"},"Queens South"),o.a.createElement("option",{value:"pbsi"},"Staten Island"),o.a.createElement("option",{value:"transit"},"Transit Bureau")),o.a.createElement("select",{value:g.last,onChange:function(t){return e.handleViolationTypeSelection(t)}},g.map((function(e){return o.a.createElement("option",{key:e,value:e},e)}))),o.a.createElement("div",null,o.a.createElement(E.a,{data:this.state.data,height:500,width:1e3})))}}]),t}(o.a.Component);var b=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h2",null,"NYPD Moving Violations ",o.a.createElement("small",{style:{fontSize:"8px"}},"v0.1")),o.a.createElement("p",null,"Select a Precinct or Bureau to get started"),o.a.createElement(d,null),o.a.createElement("small",null,"Comments/Suggestions? email joe@urbaneoptics.com"),o.a.createElement("small",null,"Data retrieved from ",o.a.createElement("a",{href:"https://github.com/UrbaneOptics/nyc-moving-violation-data"},"github.com/UrbaneOptics/nyc-moving-violation-data"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,t,a){e.exports=a(154)},55:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},57:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.e5d17937.chunk.js.map