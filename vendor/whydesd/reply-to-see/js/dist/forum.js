module.exports=function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=6)}([function(e,n){e.exports=flarum.core.compat["common/app"]},function(e,n){e.exports=flarum.core.compat["common/extend"]},function(e,n){e.exports=flarum.core.compat["common/components/CommentPost"]},function(e,n){e.exports=flarum.core.compat["common/components/DiscussionPage"]},function(e,n){e.exports=flarum.core.compat["common/utils/DiscussionControls"]},function(e,n){e.exports=flarum.core.compat["common/components/LogInModal"]},function(e,n,o){"use strict";o.r(n);var t=o(1),r=o(0),c=o.n(r),u=o(2),i=o.n(u),a=o(3),l=o.n(a),f=o(4),s=o.n(f),p=o(5),m=o.n(p);c.a.initializers.add("whydesd/reply-to-see",function(){Object(t.extend)(i.a.prototype,"content",function(){c.a.session.user&&c.a.current instanceof l.a?$(".reply2see_reply").off("click").on("click",function(){return s.a.replyAction.call(c.a.current.discussion,!0,!1)}):$(".reply2see_reply").off("click").on("click",function(){return c.a.modal.show(m.a)})})})}]);
//# sourceMappingURL=forum.js.map
