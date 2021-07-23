window.__require=function t(e,o,n){function r(c,s){if(!o[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var u="function"==typeof __require&&__require;if(!s&&u)return u(p,!0);if(i)return i(p,!0);throw new Error("Cannot find module '"+c+"'")}c=p}var a=o[c]={exports:{}};e[c][0].call(a.exports,function(t){return r(e[c][1][t]||t)},a,a.exports,t,e,o,n)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<n.length;c++)r(n[c]);return r}({bg_Move:[function(t,e,o){"use strict";cc._RF.push(e,"c3ae5ZrOd1BmJpHEiWTGB0o","bg_Move");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bg1=null,e.bg2=null,e.bg3=null,e.ground1=null,e.ground2=null,e.ground3=null,e.speed=0,e}return n(e,t),e.prototype.start=function(){this.speed=100},e.prototype.update=function(t){var e=this.speed*t;this.node.x-=e,this.node.x<=-2017&&(this.node.x=40,this.ground1=this.ground2,this.ground2=this.ground3,this.ground3=this.ground2,this.ground3.x=40)},r([s(cc.Node)],e.prototype,"bg1",void 0),r([s(cc.Node)],e.prototype,"bg2",void 0),r([s(cc.Node)],e.prototype,"bg3",void 0),r([s(cc.Node)],e.prototype,"ground1",void 0),r([s(cc.Node)],e.prototype,"ground2",void 0),r([s(cc.Node)],e.prototype,"ground3",void 0),e=r([c],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],collision_control:[function(t,e,o){"use strict";cc._RF.push(e,"b02ffyD93xFU5gCWFl8fjWI","collision_control");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./dino"),c=cc._decorator,s=c.ccclass,p=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dino=null,e.jumptimes=0,e}return n(e,t),e.prototype.onLoad=function(){this.jumptimes=this.dino.jumptimes},e.prototype.onBeginContact=function(t,e){"floor"==t.node.group&&(this.jumptimes=0)},e.prototype.start=function(){},e.prototype.update=function(t){this.jumptimes=this.dino.jumptimes},r([p(i.default)],e.prototype,"dino",void 0),e=r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./dino":"dino"}],dino:[function(t,e,o){"use strict";cc._RF.push(e,"d8411y5IE5NuZKuxRmUntMB","dino");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=(i.property,{}),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.firstHeight=0,e.currentTween=null,e.jumptimes=0,e.dashtimes=0,e.dashDuration=.1,e.jumpDuration=.3,e._speed=300,e.sp=cc.v2(0,0),e.anima="idle",e.dinoAnim=null,e}return n(e,t),e.prototype.onLoad=function(){this.firstHeight=this.node.y,this.dinoAnim=this.node.getComponent(cc.Animation),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeydown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyup,this);this.schedule(function(){this.dashtimes=0},1.5,1e3,1)},e.prototype.onDestroy=function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeydown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyup,this)},e.prototype.setAnimation=function(t){this.anima!=t&&(this.anima=t,this.dinoAnim.play(t))},e.prototype.onKeydown=function(t){s[t.keyCode]=1},e.prototype.onKeyup=function(t){var e,o,n=this;t.keyCode==cc.macro.KEY.space&&this.jumptimes<2?(this.jumptimes++,null===(e=this.currentTween)||void 0===e||e.stop(),this.currentTween=cc.tween(this.node).then(this.jumpUp()).call(function(){n.currentTween=cc.tween(n.node).then(n.jumpDown()).call(function(){n.jumptimes=0,n.dinoAnim.play("idle")}).start()}).start(),this.dinoAnim.play("jump")):t.keyCode==cc.macro.KEY.n&&0==this.dashtimes&&(this.dashtimes++,null===(o=this.currentTween)||void 0===o||o.stop(),this.node.scaleX<0?this.currentTween=cc.tween(this.node).then(this.DashLeft()).call(function(){n.dinoAnim.play("idle")}).start():this.currentTween=cc.tween(this.node).then(this.DashRight()).call(function(){n.dinoAnim.play("idle")}).start(),this.dinoAnim.play("dash")),s[t.keyCode]=0},e.prototype.DashRight=function(){return cc.tween().to(this.dashDuration,{x:this.node.x+120},{easing:"sineOut"})},e.prototype.DashLeft=function(){return cc.tween().to(this.dashDuration,{x:this.node.x-120},{easing:"sineOut"})},e.prototype.jumpUp=function(){return cc.tween().to(this.jumpDuration,{y:this.node.y+80},{easing:"sineOut"})},e.prototype.jumpDown=function(){var t=(this.node.y-this.firstHeight)/264;return cc.tween().to(t,{y:-60},{easing:"sineIn"})},e.prototype.update=function(t){var e=this.anima,o=Math.abs(this.node.scaleX),n=this.node.getComponent(cc.RigidBody).linearVelocity;s[cc.macro.KEY.a]||s[cc.macro.KEY.left]?(this.sp.x=-1,this.node.scaleX=-o,e="run"):s[cc.macro.KEY.d]||s[cc.macro.KEY.right]?(this.sp.x=1,this.node.scaleX=o,e="run"):(this.sp.x=0,e="idle"),this.sp.x?n.x=this.sp.x*this._speed:n.x=0,this.node.getComponent(cc.RigidBody).linearVelocity=n,e&&this.setAnimation(e)},e=r([c],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],game:[function(t,e,o){"use strict";cc._RF.push(e,"b288bl/dKFKI7hZ9EM0LrdL","game");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=t("./hero"),c=cc._decorator,s=c.ccclass,p=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mapNode=null,e.audio=null,e.stopaudio=null,e.st=null,e.hero=null,e.showscore=null,e.score=0,e.speed=50,e.tmpX=125,e}return n(e,t),e.prototype.onLoad=function(){var t=this;this.hero.node.on("dead",function(){t.stoping()}),this.hero.node.on("getscore",function(){t.getscore()}),cc.director.getPhysicsManager().enabled=!0,cc.audioEngine.playMusic(this.audio,!0)},e.prototype.stoping=function(){cc.audioEngine.playMusic(this.stopaudio,!0),cc.director.pause(),this.st.node.once("click",function(){cc.director.resume(),cc.director.loadScene("game")})},e.prototype.start=function(){},e.prototype.getscore=function(){this.score+=1,this.showscore.string="\u5206\u6578:"+this.score},r([p(cc.Node)],e.prototype,"mapNode",void 0),r([p(cc.AudioClip)],e.prototype,"audio",void 0),r([p(cc.AudioClip)],e.prototype,"stopaudio",void 0),r([p(cc.Button)],e.prototype,"st",void 0),r([p(i.default)],e.prototype,"hero",void 0),r([p(cc.Label)],e.prototype,"showscore",void 0),e=r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./hero":"hero"}],hero:[function(t,e,o){"use strict";cc._RF.push(e,"b5d76bRDldB84QWM7xe9OFq","hero");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i,c=t("./ob_control"),s=cc._decorator,p=s.ccclass,u=s.property,a=1;(function(t){t[t.stand=0]="stand",t[t.attack=1]="attack"})(i||(i={}));var h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.lv=new cc.Vec2,e.sp=new cc.Vec2,e.speed=0,e.p1=cc.v2(0,0),e.p2=cc.v2(0,0),e.combo=0,e.whetherDeathOrNot=!1,e.isUp=!1,e.animationState=null,e.jumpTimes=0,e.Input={},e.leftRatio=1,e.rightRatio=1,e.map=null,e}return n(e,t),e.prototype.onLoad=function(){var t=this;this.sp=cc.v2(0,0),this.heroState=a,this.anima="idle",this.heroAni=this.node.getComponent(cc.Animation),this.heroAni.on(cc.Animation.EventType.FINISHED,function(){"jump"===t.animationState.name&&(t.isUp=!1)}),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeydown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyup,this),cc.systemEvent.emit,this.schedule(function(){t.Input[cc.macro.KEY.d]?t.rightRatio=1.1*t.rightRatio:t.rightRatio=1,t.Input[cc.macro.KEY.a]?t.leftRatio=1.1*t.leftRatio:t.leftRatio=1},.1)},e.prototype.onDestroy=function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeydown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyup,this)},e.prototype.setAni=function(t){this.anima!=t&&(this.anima=t,this.animationState=this.heroAni.play(t))},e.prototype.onKeyup=function(t){this.Input[t.keyCode]=0,t.keyCode===cc.macro.KEY.space&&this.jumpTimes<=2&&(this.node.getComponent(cc.RigidBody).linearVelocity=new cc.Vec2(this.getComponent(cc.RigidBody).linearVelocity.x,1.5*this.speed),this.isUp=!0,this.setAni("jump"),this.jumpTimes++)},e.prototype.onKeydown=function(t){this.Input[t.keyCode]=1},e.prototype.onBeginContact=function(t,e,o){this.jumpTimes=0,"death"===o.node.group&&(this.anima="idle",this.destroy(),this.node.emit("dead"))},e.prototype.start=function(){},e.prototype.update=function(t){this.p1=cc.v2(this.node.convertToWorldSpaceAR(cc.v2(0,0))),this.p2=cc.v2(this.p1.x,-200);for(var e=cc.director.getPhysicsManager().rayCast(this.p1,this.p2,cc.RayCastType.AllClosest),o=0;o<e.length;o++){var n=e[o],r=n.collider.node.group;console.log(r),"death"!==r||n.collider.getComponent(c.default).overhead||(n.collider.getComponent(c.default).overhead=!0,this.node.emit("getscore"))}var i=this.anima,s=Math.abs(this.node.scaleX);Math.abs(this.node.scaleY);this.lv=this.node.getComponent(cc.RigidBody).linearVelocity;var p=this.Input[cc.macro.KEY.a]||this.Input[cc.macro.KEY.left],u=this.Input[cc.macro.KEY.d]||this.Input[cc.macro.KEY.right];this.Input[cc.macro.KEY.w]||this.Input[cc.macro.KEY.up];p?(this.sp.x=-1,this.node.scaleX=-s,i="run"):u?(this.sp.x=1,this.node.scaleX=s,i="run"):p||u?this.sp.y=0:this.sp.x=0,p||u||this.isUp||(i="idle"),this.sp.x&&this.sp.y?(this.lv.x=this.sp.x*this.speed,this.lv.y=this.sp.y*this.speed):this.sp.x||this.sp.y?(this.sp.x<0?this.lv.x=this.sp.x*this.speed*this.leftRatio:this.lv.x=this.sp.x*this.speed*this.rightRatio,this.sp.y&&(this.lv.y=this.sp.y*this.speed)):this.lv.x=0,this.node.getComponent(cc.RigidBody).linearVelocity=this.lv,i&&this.setAni(i)},r([u(cc.Vec2)],e.prototype,"sp",void 0),r([u(cc.Integer)],e.prototype,"speed",void 0),r([u(cc.Node)],e.prototype,"map",void 0),e=r([p],e)}(cc.Component);o.default=h,cc._RF.pop()},{"./ob_control":"ob_control"}],ob_control:[function(t,e,o){"use strict";cc._RF.push(e,"6b3d9dkTThCuJVPX0qRo9Y3","ob_control");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.speed=0,e.overhead=!1,e}return n(e,t),e.prototype.start=function(){this.speed=50},e.prototype.update=function(t){var e=this.speed*t;this.node.x-=e,this.node.x<=0&&(this.node.destroy(),console.log("destroy"))},e=r([c],e)}(cc.Component));o.default=s,cc._RF.pop()},{}],passingTime:[function(t,e,o){"use strict";cc._RF.push(e,"d5f67+p9VlOZZnkkrSoft91","passingTime");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.loginTime=0,e}return n(e,t),e.prototype.start=function(){this.loginTime=Date.now()},e.prototype.update=function(t){var e=Date.now()-this.loginTime,o=Math.floor(e/1e3);this.label.string="\u7d93\u904e\u6642\u9593:"+o+"\u79d2"},r([s(cc.Label)],e.prototype,"label",void 0),e=r([c],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],show_ob:[function(t,e,o){"use strict";cc._RF.push(e,"ce7a949lJtNMqhsxe4yieSy","show_ob");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=i.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.trap=null,e}return n(e,t),e.prototype.onLoad=function(){this.ins_pre()},e.prototype.ins_pre=function(){for(var t=0;t<100;t++){var e=cc.instantiate(this.trap);this.node.addChild(e),e.scale=t%3==0?.8:t%8==0?.5:.3,e.setPosition(400+200*t,-100)}},e.prototype.start=function(){},r([s(cc.Prefab)],e.prototype,"trap",void 0),e=r([c],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],trap_control:[function(t,e,o){"use strict";cc._RF.push(e,"13da2ZQQPBERYIlMCnXezDc","trap_control");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(c=(i<3?r(c):i>3?r(e,o,c):r(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,c=i.ccclass,s=(i.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.speed=200,e}return n(e,t),e.prototype.start=function(){},e.prototype.update=function(t){var e=this.speed*t;this.node.x-=e},e=r([c],e)}(cc.Component));o.default=s,cc._RF.pop()},{}]},{},["bg_Move","collision_control","dino","game","hero","ob_control","passingTime","show_ob","trap_control"]);