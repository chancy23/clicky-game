(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,c){},130:function(e,t,c){},132:function(e,t,c){},134:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),a=c(27),r=c.n(a),o=(c(54),c(42)),l=c(43),s=c(46),d=c(44),m=c(47),p=c(17),g=c.n(p),u=(c(56),function(e){return n.a.createElement("div",{id:"scoreboard"},n.a.createElement("p",null,"Current Score: ",e.currentScore," | Top Score: ",e.topScore))}),h=(c(58),function(e){return n.a.createElement(g.a,{fixedTop:!0},n.a.createElement(g.a.Header,null,n.a.createElement(g.a.Brand,null,n.a.createElement("a",{href:"/"},"Clicky Game"))),n.a.createElement(u,{currentScore:e.currentScore,topScore:e.topScore}))}),w=c(15),b=c.n(w),f=c(45),A=c.n(f),k=(c(128),function(){return n.a.createElement(b.a,{id:"instructionsDisplay"},n.a.createElement(A.a,null,n.a.createElement("h2",null,"Let's Get Clickin'!"),n.a.createElement("hr",null),n.a.createElement("ul",null,n.a.createElement("li",null,"To begin, click on an image."),n.a.createElement("li",null,"You get a point for every image clicked."),n.a.createElement("li",null,"Once you click any image a second, the game is over."))))}),y=(c(130),function(e){return n.a.createElement(b.a,{id:"display"},e.data.map(function(t){return n.a.createElement("button",{key:t.id,onClick:e.handleIncrement},n.a.createElement("img",{src:t.img,id:t.id,alt:"game piece"}))}),";")}),S=(c(132),[{id:1,img:"https://www.billboard.com/files/media/cher-mamma-mia-premiere-2018-uu-billboard-1548.jpg",clicked:!1},{id:2,img:"https://3.bp.blogspot.com/-eYSjHgly08s/Wwk5BgWpY8I/AAAAAAAANFM/FtuY3Yp-ziEPJdmviKnW8cyFboiroYXggCLcBGAs/s1600/Cher%2B2018%2Bjames%2Bcorden.png",clicked:!1},{id:3,img:"https://nyppagesix.files.wordpress.com/2017/06/gettyimages-493892077.jpg?quality=90&strip=all&w=618&h=410&crop=1",clicked:!1},{id:4,img:"https://www.billboard.com/files/media/cher-jan-2018-u-billboard-1548.jpg",clicked:!1},{id:5,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZnfpdmgqtMtrA9uqRgFSoXpBgfoHbT63Hhlj-k5zQHjQYKY1",clicked:!1},{id:6,img:"https://4.bp.blogspot.com/-E2xSYHfZwpw/WvLg0Ccgf1I/AAAAAAAANDs/xW3w-1PEFFgZMZ-FIb_jf96E9HgV1HS0QCLcBGAs/s1600/Cher%2Bhere%2Bwe%2Bgo%2Bagain%2Btour%2B2018.png",clicked:!1},{id:7,img:"https://peopledotcom.files.wordpress.com/2018/07/cher-3-2000b.jpg",clicked:!1},{id:8,img:"https://www.gannett-cdn.com/presto/2018/12/03/USAT/a7b6d2cc-58b5-4d30-937d-8692bfe0d0ba-AP_2018_Kennedy_Center_Honors_-_Arrivals_7.JPG?width=680&height=510&fit=bounds&auto=webp",clicked:!1},{id:9,img:"https://www.gaystarnews.com/wp-content/uploads/2018/09/cher-hope-you-find-it.gif",clicked:!1},{id:10,img:"https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2018-07/eto_b02_mama_mia_071518.jpg?itok=NowIQVL5&h=c673cd1c",clicked:!1},{id:11,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDz2wROL7GlIRXMOrfJL6irGH_RGYM8FgMx0TyXE-0O_ZC0BHnw",clicked:!1},{id:12,img:"https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/single/public/cherhilead.png?itok=JYHwVYWX&mtime=1519823367",clicked:!1}]),E=function(e){function t(){var e,c;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(c=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={currentScore:0,topScore:0,data:S},c.handleIncrement=function(e){var t=e.target.getAttribute("id");console.log(t);for(var i=function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[c],e[c]=i}return e}(c.state.data),n=0;n<i.length;n++)i[n].id===parseInt(t)&&(!1===i[n].clicked?(i[n].clicked=!0,c.setState({currentScore:c.state.currentScore+1})):c.changeTopScore())},c.resetGame=function(){c.setState({currentScore:0,data:[{id:1,img:"https://www.billboard.com/files/media/cher-mamma-mia-premiere-2018-uu-billboard-1548.jpg",clicked:!1},{id:2,img:"https://3.bp.blogspot.com/-eYSjHgly08s/Wwk5BgWpY8I/AAAAAAAANFM/FtuY3Yp-ziEPJdmviKnW8cyFboiroYXggCLcBGAs/s1600/Cher%2B2018%2Bjames%2Bcorden.png",clicked:!1},{id:3,img:"https://nyppagesix.files.wordpress.com/2017/06/gettyimages-493892077.jpg?quality=90&strip=all&w=618&h=410&crop=1",clicked:!1},{id:4,img:"https://www.billboard.com/files/media/cher-jan-2018-u-billboard-1548.jpg",clicked:!1},{id:5,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZnfpdmgqtMtrA9uqRgFSoXpBgfoHbT63Hhlj-k5zQHjQYKY1",clicked:!1},{id:6,img:"https://4.bp.blogspot.com/-E2xSYHfZwpw/WvLg0Ccgf1I/AAAAAAAANDs/xW3w-1PEFFgZMZ-FIb_jf96E9HgV1HS0QCLcBGAs/s1600/Cher%2Bhere%2Bwe%2Bgo%2Bagain%2Btour%2B2018.png",clicked:!1},{id:7,img:"https://peopledotcom.files.wordpress.com/2018/07/cher-3-2000b.jpg",clicked:!1},{id:8,img:"https://www.gannett-cdn.com/presto/2018/12/03/USAT/a7b6d2cc-58b5-4d30-937d-8692bfe0d0ba-AP_2018_Kennedy_Center_Honors_-_Arrivals_7.JPG?width=680&height=510&fit=bounds&auto=webp",clicked:!1},{id:9,img:"https://www.gaystarnews.com/wp-content/uploads/2018/09/cher-hope-you-find-it.gif",clicked:!1},{id:10,img:"https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2018-07/eto_b02_mama_mia_071518.jpg?itok=NowIQVL5&h=c673cd1c",clicked:!1},{id:11,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDz2wROL7GlIRXMOrfJL6irGH_RGYM8FgMx0TyXE-0O_ZC0BHnw",clicked:!1},{id:12,img:"https://www.sbs.com.au/topics/sites/sbs.com.au.topics/files/styles/single/public/cherhilead.png?itok=JYHwVYWX&mtime=1519823367",clicked:!1}]})},c.changeTopScore=function(){c.state.currentScore>c.state.topScore?(c.setState({topScore:c.state.currentScore}),c.resetGame()):c.resetGame()},c}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h,{currentScore:this.state.currentScore,topScore:this.state.topScore}),n.a.createElement(k,null),n.a.createElement(y,{data:this.state.data,handleIncrement:this.handleIncrement}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,c){e.exports=c(134)},54:function(e,t,c){},56:function(e,t,c){},58:function(e,t,c){}},[[48,2,1]]]);
//# sourceMappingURL=main.71a0d59c.chunk.js.map