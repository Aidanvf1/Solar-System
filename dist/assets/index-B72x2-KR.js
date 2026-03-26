(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Gv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Dh={exports:{}},ht={};var g_;function Zy(){if(g_)return ht;g_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function v(O,ie,ve){this.props=O,this.context=ie,this.refs=y,this.updater=ve||b}v.prototype.isReactComponent={},v.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function w(){}w.prototype=v.prototype;function U(O,ie,ve){this.props=O,this.context=ie,this.refs=y,this.updater=ve||b}var L=U.prototype=new w;L.constructor=U,T(L,v.prototype),L.isPureReactComponent=!0;var P=Array.isArray;function z(){}var F={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function C(O,ie,ve){var Ne=ve.ref;return{$$typeof:s,type:O,key:ie,ref:Ne!==void 0?Ne:null,props:ve}}function D(O,ie){return C(O.type,ie,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function ne(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ve){return ie[ve]})}var se=/\/+/g;function me(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?ne(""+O.key):ie.toString(36)}function fe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(z,z):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function I(O,ie,ve,Ne,Ve){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var he=!1;if(O===null)he=!0;else switch(ae){case"bigint":case"string":case"number":he=!0;break;case"object":switch(O.$$typeof){case s:case e:he=!0;break;case _:return he=O._init,I(he(O._payload),ie,ve,Ne,Ve)}}if(he)return Ve=Ve(O),he=Ne===""?"."+me(O,0):Ne,P(Ve)?(ve="",he!=null&&(ve=he.replace(se,"$&/")+"/"),I(Ve,ie,ve,"",function(We){return We})):Ve!=null&&(V(Ve)&&(Ve=D(Ve,ve+(Ve.key==null||O&&O.key===Ve.key?"":(""+Ve.key).replace(se,"$&/")+"/")+he)),ie.push(Ve)),1;he=0;var Fe=Ne===""?".":Ne+":";if(P(O))for(var Ye=0;Ye<O.length;Ye++)Ne=O[Ye],ae=Fe+me(Ne,Ye),he+=I(Ne,ie,ve,ae,Ve);else if(Ye=M(O),typeof Ye=="function")for(O=Ye.call(O),Ye=0;!(Ne=O.next()).done;)Ne=Ne.value,ae=Fe+me(Ne,Ye++),he+=I(Ne,ie,ve,ae,Ve);else if(ae==="object"){if(typeof O.then=="function")return I(fe(O),ie,ve,Ne,Ve);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return he}function G(O,ie,ve){if(O==null)return O;var Ne=[],Ve=0;return I(O,Ne,"","",function(ae){return ie.call(ve,ae,Ve++)}),Ne}function oe(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(ve){(O._status===0||O._status===-1)&&(O._status=1,O._result=ve)},function(ve){(O._status===0||O._status===-1)&&(O._status=2,O._result=ve)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var Te=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Me={map:G,forEach:function(O,ie,ve){G(O,function(){ie.apply(this,arguments)},ve)},count:function(O){var ie=0;return G(O,function(){ie++}),ie},toArray:function(O){return G(O,function(ie){return ie})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ht.Activity=g,ht.Children=Me,ht.Component=v,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=U,ht.StrictMode=r,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ht.__COMPILER_RUNTIME={__proto__:null,c:function(O){return F.H.useMemoCache(O)}},ht.cache=function(O){return function(){return O.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(O,ie,ve){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ne=T({},O.props),Ve=O.key;if(ie!=null)for(ae in ie.key!==void 0&&(Ve=""+ie.key),ie)!Z.call(ie,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&ie.ref===void 0||(Ne[ae]=ie[ae]);var ae=arguments.length-2;if(ae===1)Ne.children=ve;else if(1<ae){for(var he=Array(ae),Fe=0;Fe<ae;Fe++)he[Fe]=arguments[Fe+2];Ne.children=he}return C(O.type,Ve,Ne)},ht.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ht.createElement=function(O,ie,ve){var Ne,Ve={},ae=null;if(ie!=null)for(Ne in ie.key!==void 0&&(ae=""+ie.key),ie)Z.call(ie,Ne)&&Ne!=="key"&&Ne!=="__self"&&Ne!=="__source"&&(Ve[Ne]=ie[Ne]);var he=arguments.length-2;if(he===1)Ve.children=ve;else if(1<he){for(var Fe=Array(he),Ye=0;Ye<he;Ye++)Fe[Ye]=arguments[Ye+2];Ve.children=Fe}if(O&&O.defaultProps)for(Ne in he=O.defaultProps,he)Ve[Ne]===void 0&&(Ve[Ne]=he[Ne]);return C(O,ae,Ve)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(O){return{$$typeof:d,render:O}},ht.isValidElement=V,ht.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:oe}},ht.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},ht.startTransition=function(O){var ie=F.T,ve={};F.T=ve;try{var Ne=O(),Ve=F.S;Ve!==null&&Ve(ve,Ne),typeof Ne=="object"&&Ne!==null&&typeof Ne.then=="function"&&Ne.then(z,Te)}catch(ae){Te(ae)}finally{ie!==null&&ve.types!==null&&(ie.types=ve.types),F.T=ie}},ht.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ht.use=function(O){return F.H.use(O)},ht.useActionState=function(O,ie,ve){return F.H.useActionState(O,ie,ve)},ht.useCallback=function(O,ie){return F.H.useCallback(O,ie)},ht.useContext=function(O){return F.H.useContext(O)},ht.useDebugValue=function(){},ht.useDeferredValue=function(O,ie){return F.H.useDeferredValue(O,ie)},ht.useEffect=function(O,ie){return F.H.useEffect(O,ie)},ht.useEffectEvent=function(O){return F.H.useEffectEvent(O)},ht.useId=function(){return F.H.useId()},ht.useImperativeHandle=function(O,ie,ve){return F.H.useImperativeHandle(O,ie,ve)},ht.useInsertionEffect=function(O,ie){return F.H.useInsertionEffect(O,ie)},ht.useLayoutEffect=function(O,ie){return F.H.useLayoutEffect(O,ie)},ht.useMemo=function(O,ie){return F.H.useMemo(O,ie)},ht.useOptimistic=function(O,ie){return F.H.useOptimistic(O,ie)},ht.useReducer=function(O,ie,ve){return F.H.useReducer(O,ie,ve)},ht.useRef=function(O){return F.H.useRef(O)},ht.useState=function(O){return F.H.useState(O)},ht.useSyncExternalStore=function(O,ie,ve){return F.H.useSyncExternalStore(O,ie,ve)},ht.useTransition=function(){return F.H.useTransition()},ht.version="19.2.3",ht}var __;function _p(){return __||(__=1,Dh.exports=Zy()),Dh.exports}var K=_p();const W=Gv(K);var Uh={exports:{}},Ko={},Lh={exports:{}},Nh={};var v_;function Ky(){return v_||(v_=1,(function(s){function e(I,G){var oe=I.length;I.push(G);e:for(;0<oe;){var Te=oe-1>>>1,Me=I[Te];if(0<l(Me,G))I[Te]=G,I[oe]=Me,oe=Te;else break e}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var G=I[0],oe=I.pop();if(oe!==G){I[0]=oe;e:for(var Te=0,Me=I.length,O=Me>>>1;Te<O;){var ie=2*(Te+1)-1,ve=I[ie],Ne=ie+1,Ve=I[Ne];if(0>l(ve,oe))Ne<Me&&0>l(Ve,ve)?(I[Te]=Ve,I[Ne]=oe,Te=Ne):(I[Te]=ve,I[ie]=oe,Te=ie);else if(Ne<Me&&0>l(Ve,oe))I[Te]=Ve,I[Ne]=oe,Te=Ne;else break e}}return G}function l(I,G){var oe=I.sortIndex-G.sortIndex;return oe!==0?oe:I.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,g=null,x=3,M=!1,b=!1,T=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=I)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function P(I){if(T=!1,L(I),!b)if(i(m)!==null)b=!0,z||(z=!0,ne());else{var G=i(p);G!==null&&fe(P,G.startTime-I)}}var z=!1,F=-1,Z=5,C=-1;function D(){return y?!0:!(s.unstable_now()-C<Z)}function V(){if(y=!1,z){var I=s.unstable_now();C=I;var G=!0;try{e:{b=!1,T&&(T=!1,w(F),F=-1),M=!0;var oe=x;try{t:{for(L(I),g=i(m);g!==null&&!(g.expirationTime>I&&D());){var Te=g.callback;if(typeof Te=="function"){g.callback=null,x=g.priorityLevel;var Me=Te(g.expirationTime<=I);if(I=s.unstable_now(),typeof Me=="function"){g.callback=Me,L(I),G=!0;break t}g===i(m)&&r(m),L(I)}else r(m);g=i(m)}if(g!==null)G=!0;else{var O=i(p);O!==null&&fe(P,O.startTime-I),G=!1}}break e}finally{g=null,x=oe,M=!1}G=void 0}}finally{G?ne():z=!1}}}var ne;if(typeof U=="function")ne=function(){U(V)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,me=se.port2;se.port1.onmessage=V,ne=function(){me.postMessage(null)}}else ne=function(){v(V,0)};function fe(I,G){F=v(function(){I(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(I){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var oe=x;x=G;try{return I()}finally{x=oe}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var oe=x;x=I;try{return G()}finally{x=oe}},s.unstable_scheduleCallback=function(I,G,oe){var Te=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?Te+oe:Te):oe=Te,I){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=oe+Me,I={id:_++,callback:G,priorityLevel:I,startTime:oe,expirationTime:Me,sortIndex:-1},oe>Te?(I.sortIndex=oe,e(p,I),i(m)===null&&I===i(p)&&(T?(w(F),F=-1):T=!0,fe(P,oe-Te))):(I.sortIndex=Me,e(m,I),b||M||(b=!0,z||(z=!0,ne()))),I},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(I){var G=x;return function(){var oe=x;x=G;try{return I.apply(this,arguments)}finally{x=oe}}}})(Nh)),Nh}var x_;function Qy(){return x_||(x_=1,Lh.exports=Ky()),Lh.exports}var Oh={exports:{}},Vn={};var S_;function Jy(){if(S_)return Vn;S_=1;var s=_p();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Vn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},Vn.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Vn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Vn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Vn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Vn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Vn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Vn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Vn.requestFormReset=function(m){r.d.r(m)},Vn.unstable_batchedUpdates=function(m,p){return m(p)},Vn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Vn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Vn.version="19.2.3",Vn}var y_;function $y(){if(y_)return Oh.exports;y_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Oh.exports=Jy(),Oh.exports}var M_;function eM(){if(M_)return Ko;M_=1;var s=Qy(),e=_p(),i=$y();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return m(c),t;if(h===o)return m(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var S=!1,R=c.child;R;){if(R===a){S=!0,a=c,o=h;break}if(R===o){S=!0,o=c,a=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===a){S=!0,a=h,o=c;break}if(R===o){S=!0,o=h,a=c;break}R=R.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function me(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case U:return t.displayName||"Context";case w:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:me(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return me(t(n))}catch{}}return null}var fe=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},Te=[],Me=-1;function O(t){return{current:t}}function ie(t){0>Me||(t.current=Te[Me],Te[Me]=null,Me--)}function ve(t,n){Me++,Te[Me]=t.current,t.current=n}var Ne=O(null),Ve=O(null),ae=O(null),he=O(null);function Fe(t,n){switch(ve(ae,n),ve(Ve,t),ve(Ne,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?B0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=B0(n),t=H0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Ne),ve(Ne,t)}function Ye(){ie(Ne),ie(Ve),ie(ae)}function We(t){t.memoizedState!==null&&ve(he,t);var n=Ne.current,a=H0(n,t.type);n!==a&&(ve(Ve,t),ve(Ne,a))}function vt(t){Ve.current===t&&(ie(Ne),ie(Ve)),he.current===t&&(ie(he),Yo._currentValue=oe)}var an,yt;function xt(t){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",yt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+t+yt}var Lt=!1;function ct(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ce){var re=ce}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ce){re=ce}t.call(Se.prototype)}}else{try{throw Error()}catch(ce){re=ce}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var H=S.split(`
`),ee=R.split(`
`);for(c=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(o===H.length||c===ee.length)for(o=H.length-1,c=ee.length-1;1<=o&&0<=c&&H[o]!==ee[c];)c--;for(;1<=o&&0<=c;o--,c--)if(H[o]!==ee[c]){if(o!==1||c!==1)do if(o--,c--,0>c||H[o]!==ee[c]){var de=`
`+H[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=c);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function rn(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ct(t.type,!1);case 11:return ct(t.type.render,!1);case 1:return ct(t.type,!0);case 31:return xt("Activity");default:return""}}function X(t){try{var n="",a=null;do n+=rn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var jt=Object.prototype.hasOwnProperty,Tt=s.unstable_scheduleCallback,wt=s.unstable_cancelCallback,qe=s.unstable_shouldYield,N=s.unstable_requestPaint,E=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,pe=s.unstable_ImmediatePriority,ye=s.unstable_UserBlockingPriority,le=s.unstable_NormalPriority,$e=s.unstable_LowPriority,Le=s.unstable_IdlePriority,Je=s.log,we=s.unstable_setDisableYieldValue,Ae=null,De=null;function Ie(t){if(typeof Je=="function"&&we(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Ae,t)}catch{}}var Ge=Math.clz32?Math.clz32:j,Pe=Math.log,dt=Math.LN2;function j(t){return t>>>=0,t===0?32:31-(Pe(t)/dt|0)|0}var Be=256,Ue=262144,ke=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?c=Ee(o):(S&=R,S!==0?c=Ee(S):a||(a=R&~t,a!==0&&(c=Ee(a))))):(R=o&~h,R!==0?c=Ee(R):S!==0?c=Ee(S):a||(a=o&~t,a!==0&&(c=Ee(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function lt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=ke;return ke<<=1,(ke&62914560)===0&&(ke=4194304),t}function je(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function et(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tt(t,n,a,o,c,h){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,H=t.expirationTimes,ee=t.hiddenUpdates;for(a=S&~a;0<a;){var de=31-Ge(a),Se=1<<de;R[de]=0,H[de]=-1;var re=ee[de];if(re!==null)for(ee[de]=null,de=0;de<re.length;de++){var ce=re[de];ce!==null&&(ce.lane&=-536870913)}a&=~Se}o!==0&&jn(t,o,0),h!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function jn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function rt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function St(t,n){var a=n&-n;return a=(a&42)!==0?1:Mt(a),(a&(t.suspendedLanes|n))!==0?0:a}function Mt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ft(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vt(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:u_(t.type))}function gn(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var dn=Math.random().toString(36).slice(2),ln="__reactFiber$"+dn,_n="__reactProps$"+dn,ei="__reactContainer$"+dn,qi="__reactEvents$"+dn,Li="__reactListeners$"+dn,Er="__reactHandles$"+dn,ka="__reactResources$"+dn,ji="__reactMarker$"+dn;function Xa(t){delete t[ln],delete t[_n],delete t[qi],delete t[Li],delete t[Er]}function Ni(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ei]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=q0(t);t!==null;){if(a=t[ln])return a;t=q0(t)}return n}t=a,a=t.parentNode}return null}function Oi(t){if(t=t[ln]||t[ei]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function li(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Pi(t){var n=t[ka];return n||(n=t[ka]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[ji]=!0}var Q=new Set,ue={};function k(t,n){B(t,n),B(t+"Capture",n)}function B(t,n){for(ue[t]=n,t=0;t<n.length;t++)Q.add(n[t])}var _e=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Re={},Ce={};function ze(t){return jt.call(Ce,t)?!0:jt.call(Re,t)?!1:_e.test(t)?Ce[t]=!0:(Re[t]=!0,!1)}function He(t,n,a){if(ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function st(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sn(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function $t(t){if(!t._valueTracker){var n=Bt(t)?"checked":"value";t._valueTracker=sn(t,n,""+t[n])}}function kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Bt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function it(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ht=/[\n"\\]/g;function ft(t){return t.replace(Ht,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(t,n,a,o,c,h,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+st(n)):t.value!==""+st(n)&&(t.value=""+st(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Un(t,S,st(n)):a!=null?Un(t,S,st(a)):o!=null&&t.removeAttribute("value"),c==null&&h!=null&&(t.defaultChecked=!!h),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+st(R):t.removeAttribute("name")}function fa(t,n,a,o,c,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){$t(t);return}a=a!=null?""+st(a):"",n=n!=null?""+st(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),$t(t)}function Un(t,n,a){n==="number"&&it(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Si(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+st(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Xt(t,n,a){if(n!=null&&(n=""+st(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+st(a):""}function Ln(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(fe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=st(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),$t(t)}function En(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Nn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function On(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Nn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ts(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&On(t,c,o)}else for(var h in n)n.hasOwnProperty(h)&&On(t,h,n[h])}function Fi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bl(t){return Yx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ha(){}var Ac=null;function Rc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ns=null,is=null;function zp(t){var n=Oi(t);if(n&&(t=n.stateNode)){var a=t[_n]||null;e:switch(t=n.stateNode,n.type){case"input":if(Dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[_n]||null;if(!c)throw Error(r(90));Dn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&kt(o)}break e;case"textarea":Xt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Si(t,!!a.multiple,n,!1)}}}var Cc=!1;function Bp(t,n,a){if(Cc)return t(n,a);Cc=!0;try{var o=t(n);return o}finally{if(Cc=!1,(ns!==null||is!==null)&&(fu(),ns&&(n=ns,t=is,is=ns=null,zp(n),t)))for(n=0;n<t.length;n++)zp(t[n])}}function lo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=!1;if(da)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){wc=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{wc=!1}var Wa=null,Dc=null,Tl=null;function Hp(){if(Tl)return Tl;var t,n=Dc,a=n.length,o,c="value"in Wa?Wa.value:Wa.textContent,h=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[h-o];o++);return Tl=c.slice(t,1<o?1-o:void 0)}function Al(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function Gp(){return!1}function ti(t){function n(a,o,c,h,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Rl:Gp,this.isPropagationStopped=Gp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=ti(br),co=g({},br,{view:0,detail:0}),qx=ti(co),Uc,Lc,fo,wl=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(Uc=t.screenX-fo.screenX,Lc=t.screenY-fo.screenY):Lc=Uc=0,fo=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),Vp=ti(wl),jx=g({},wl,{dataTransfer:0}),Zx=ti(jx),Kx=g({},co,{relatedTarget:0}),Nc=ti(Kx),Qx=g({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Jx=ti(Qx),$x=g({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eS=ti($x),tS=g({},br,{data:0}),kp=ti(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=aS[t])?!!n[t]:!1}function Oc(){return rS}var sS=g({},co,{key:function(t){if(t.key){var n=nS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oS=ti(sS),lS=g({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=ti(lS),uS=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),cS=ti(uS),fS=g({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),hS=ti(fS),dS=g({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pS=ti(dS),mS=g({},br,{newState:0,oldState:0}),gS=ti(mS),_S=[9,13,27,32],Pc=da&&"CompositionEvent"in window,ho=null;da&&"documentMode"in document&&(ho=document.documentMode);var vS=da&&"TextEvent"in window&&!ho,Wp=da&&(!Pc||ho&&8<ho&&11>=ho),Yp=" ",qp=!1;function jp(t,n){switch(t){case"keyup":return _S.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function xS(t,n){switch(t){case"compositionend":return Zp(n);case"keypress":return n.which!==32?null:(qp=!0,Yp);case"textInput":return t=n.data,t===Yp&&qp?null:t;default:return null}}function SS(t,n){if(as)return t==="compositionend"||!Pc&&jp(t,n)?(t=Hp(),Tl=Dc=Wa=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wp&&n.locale!=="ko"?null:n.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yS[t.type]:n==="textarea"}function Qp(t,n,a,o){ns?is?is.push(o):is=[o]:ns=o,n=vu(n,"onChange"),0<n.length&&(a=new Cl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var po=null,mo=null;function MS(t){N0(t,0)}function Dl(t){var n=li(t);if(kt(n))return t}function Jp(t,n){if(t==="change")return n}var $p=!1;if(da){var Fc;if(da){var Ic="oninput"in document;if(!Ic){var em=document.createElement("div");em.setAttribute("oninput","return;"),Ic=typeof em.oninput=="function"}Fc=Ic}else Fc=!1;$p=Fc&&(!document.documentMode||9<document.documentMode)}function tm(){po&&(po.detachEvent("onpropertychange",nm),mo=po=null)}function nm(t){if(t.propertyName==="value"&&Dl(mo)){var n=[];Qp(n,mo,t,Rc(t)),Bp(MS,n)}}function ES(t,n,a){t==="focusin"?(tm(),po=n,mo=a,po.attachEvent("onpropertychange",nm)):t==="focusout"&&tm()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(mo)}function TS(t,n){if(t==="click")return Dl(n)}function AS(t,n){if(t==="input"||t==="change")return Dl(n)}function RS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ui=typeof Object.is=="function"?Object.is:RS;function go(t,n){if(ui(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!jt.call(n,c)||!ui(t[c],n[c]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,n){var a=im(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=im(a)}}function rm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=it(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=it(t.document)}return n}function zc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var CS=da&&"documentMode"in document&&11>=document.documentMode,rs=null,Bc=null,_o=null,Hc=!1;function om(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hc||rs==null||rs!==it(o)||(o=rs,"selectionStart"in o&&zc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&go(_o,o)||(_o=o,o=vu(Bc,"onSelect"),0<o.length&&(n=new Cl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=rs)))}function Tr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ss={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionrun:Tr("Transition","TransitionRun"),transitionstart:Tr("Transition","TransitionStart"),transitioncancel:Tr("Transition","TransitionCancel"),transitionend:Tr("Transition","TransitionEnd")},Gc={},lm={};da&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Ar(t){if(Gc[t])return Gc[t];if(!ss[t])return t;var n=ss[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in lm)return Gc[t]=n[a];return t}var um=Ar("animationend"),cm=Ar("animationiteration"),fm=Ar("animationstart"),wS=Ar("transitionrun"),DS=Ar("transitionstart"),US=Ar("transitioncancel"),hm=Ar("transitionend"),dm=new Map,Vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vc.push("scrollEnd");function Ii(t,n){dm.set(t,n),k(n,[t])}var Ul=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],os=0,kc=0;function Ll(){for(var t=os,n=kc=os=0;n<t;){var a=yi[n];yi[n++]=null;var o=yi[n];yi[n++]=null;var c=yi[n];yi[n++]=null;var h=yi[n];if(yi[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}h!==0&&pm(a,c,h)}}function Nl(t,n,a,o){yi[os++]=t,yi[os++]=n,yi[os++]=a,yi[os++]=o,kc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Xc(t,n,a,o){return Nl(t,n,a,o),Ol(t)}function Rr(t,n){return Nl(t,null,null,n),Ol(t)}function pm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(c=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,c&&n!==null&&(c=31-Ge(a),t=h.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function Ol(t){if(50<Bo)throw Bo=0,eh=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ls={};function LS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,a,o){return new LS(t,n,a,o)}function Wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,n){var a=t.alternate;return a===null?(a=ci(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function mm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Pl(t,n,a,o,c,h){var S=0;if(o=t,typeof t=="function")Wc(t)&&(S=1);else if(typeof t=="string")S=Iy(t,a,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=ci(31,a,n,c),t.elementType=C,t.lanes=h,t;case T:return Cr(a.children,c,h,n);case y:S=8,c|=24;break;case v:return t=ci(12,a,n,c|2),t.elementType=v,t.lanes=h,t;case P:return t=ci(13,a,n,c),t.elementType=P,t.lanes=h,t;case z:return t=ci(19,a,n,c),t.elementType=z,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:S=10;break e;case w:S=9;break e;case L:S=11;break e;case F:S=14;break e;case Z:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ci(S,a,n,c),n.elementType=t,n.type=o,n.lanes=h,n}function Cr(t,n,a,o){return t=ci(7,t,o,n),t.lanes=a,t}function Yc(t,n,a){return t=ci(6,t,null,n),t.lanes=a,t}function gm(t){var n=ci(18,null,null,0);return n.stateNode=t,n}function qc(t,n,a){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _m=new WeakMap;function Mi(t,n){if(typeof t=="object"&&t!==null){var a=_m.get(t);return a!==void 0?a:(n={value:t,source:n,stack:X(n)},_m.set(t,n),n)}return{value:t,source:n,stack:X(n)}}var us=[],cs=0,Fl=null,vo=0,Ei=[],bi=0,Ya=null,Zi=1,Ki="";function ma(t,n){us[cs++]=vo,us[cs++]=Fl,Fl=t,vo=n}function vm(t,n,a){Ei[bi++]=Zi,Ei[bi++]=Ki,Ei[bi++]=Ya,Ya=t;var o=Zi;t=Ki;var c=32-Ge(o)-1;o&=~(1<<c),a+=1;var h=32-Ge(n)+c;if(30<h){var S=c-c%5;h=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Zi=1<<32-Ge(n)+c|a<<c|o,Ki=h+t}else Zi=1<<h|a<<c|o,Ki=t}function jc(t){t.return!==null&&(ma(t,1),vm(t,1,0))}function Zc(t){for(;t===Fl;)Fl=us[--cs],us[cs]=null,vo=us[--cs],us[cs]=null;for(;t===Ya;)Ya=Ei[--bi],Ei[bi]=null,Ki=Ei[--bi],Ei[bi]=null,Zi=Ei[--bi],Ei[bi]=null}function xm(t,n){Ei[bi++]=Zi,Ei[bi++]=Ki,Ei[bi++]=Ya,Zi=n.id,Ki=n.overflow,Ya=t}var Pn=null,en=null,Dt=!1,qa=null,Ti=!1,Kc=Error(r(519));function ja(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(Mi(n,t)),Kc}function Sm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[_n]=o,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<Go.length;a++)bt(Go[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),fa(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),Ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||I0(n.textContent,a)?(o.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),o.onScroll!=null&&bt("scroll",n),o.onScrollEnd!=null&&bt("scrollend",n),o.onClick!=null&&(n.onclick=ha),n=!0):n=!1,n||ja(t,!0)}function ym(t){for(Pn=t.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:Pn=Pn.return}}function fs(t){if(t!==Pn)return!1;if(!Dt)return ym(t),Dt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||mh(t.type,t.memoizedProps)),a=!a),a&&en&&ja(t),ym(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=Y0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));en=Y0(t)}else n===27?(n=en,lr(t.type)?(t=Sh,Sh=null,en=t):en=n):en=Pn?Ri(t.stateNode.nextSibling):null;return!0}function wr(){en=Pn=null,Dt=!1}function Qc(){var t=qa;return t!==null&&(ri===null?ri=t:ri.push.apply(ri,t),qa=null),t}function xo(t){qa===null?qa=[t]:qa.push(t)}var Jc=O(null),Dr=null,ga=null;function Za(t,n,a){ve(Jc,n._currentValue),n._currentValue=a}function _a(t){t._currentValue=Jc.current,ie(Jc)}function $c(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ef(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){var S=c.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=c;for(var H=0;H<n.length;H++)if(R.context===n[H]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),$c(h.return,a,t),o||(S=null);break e}h=R.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),$c(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function hs(t,n,a,o){t=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=c.type;ui(c.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(c===he.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}c=c.return}t!==null&&ef(n,t,a,o),n.flags|=262144}function Il(t){for(t=t.firstContext;t!==null;){if(!ui(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ur(t){Dr=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Fn(t){return Mm(Dr,t)}function zl(t,n){return Dr===null&&Ur(t),Mm(t,n)}function Mm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ga===null){if(t===null)throw Error(r(308));ga=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ga=ga.next=n;return a}var NS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},OS=s.unstable_scheduleCallback,PS=s.unstable_NormalPriority,vn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new NS,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&OS(PS,function(){t.controller.abort()})}var yo=null,nf=0,ds=0,ps=null;function FS(t,n){if(yo===null){var a=yo=[];nf=0,ds=sh(),ps={status:"pending",value:void 0,then:function(o){a.push(o)}}}return nf++,n.then(Em,Em),n}function Em(){if(--nf===0&&yo!==null){ps!==null&&(ps.status="fulfilled");var t=yo;yo=null,ds=0,ps=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function IS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var bm=I.S;I.S=function(t,n){o0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&FS(t,n),bm!==null&&bm(t,n)};var Lr=O(null);function af(){var t=Lr.current;return t!==null?t:Jt.pooledCache}function Bl(t,n){n===null?ve(Lr,Lr.current):ve(Lr,n.pool)}function Tm(){var t=af();return t===null?null:{parent:vn._currentValue,pool:t}}var ms=Error(r(460)),rf=Error(r(474)),Hl=Error(r(542)),Gl={then:function(){}};function Am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ha,ha),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wm(t),t;default:if(typeof n.status=="string")n.then(ha,ha);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wm(t),t}throw Or=n,ms}}function Nr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Or=a,ms):a}}var Or=null;function Cm(){if(Or===null)throw Error(r(459));var t=Or;return Or=null,t}function wm(t){if(t===ms||t===Hl)throw Error(r(483))}var gs=null,Mo=0;function Vl(t){var n=Mo;return Mo+=1,gs===null&&(gs=[]),Rm(gs,t,n)}function Eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function kl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dm(t){function n(J,Y){if(t){var $=J.deletions;$===null?(J.deletions=[Y],J.flags|=16):$.push(Y)}}function a(J,Y){if(!t)return null;for(;Y!==null;)n(J,Y),Y=Y.sibling;return null}function o(J){for(var Y=new Map;J!==null;)J.key!==null?Y.set(J.key,J):Y.set(J.index,J),J=J.sibling;return Y}function c(J,Y){return J=pa(J,Y),J.index=0,J.sibling=null,J}function h(J,Y,$){return J.index=$,t?($=J.alternate,$!==null?($=$.index,$<Y?(J.flags|=67108866,Y):$):(J.flags|=67108866,Y)):(J.flags|=1048576,Y)}function S(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,Y,$,ge){return Y===null||Y.tag!==6?(Y=Yc($,J.mode,ge),Y.return=J,Y):(Y=c(Y,$),Y.return=J,Y)}function H(J,Y,$,ge){var at=$.type;return at===T?de(J,Y,$.props.children,ge,$.key):Y!==null&&(Y.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Z&&Nr(at)===Y.type)?(Y=c(Y,$.props),Eo(Y,$),Y.return=J,Y):(Y=Pl($.type,$.key,$.props,null,J.mode,ge),Eo(Y,$),Y.return=J,Y)}function ee(J,Y,$,ge){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==$.containerInfo||Y.stateNode.implementation!==$.implementation?(Y=qc($,J.mode,ge),Y.return=J,Y):(Y=c(Y,$.children||[]),Y.return=J,Y)}function de(J,Y,$,ge,at){return Y===null||Y.tag!==7?(Y=Cr($,J.mode,ge,at),Y.return=J,Y):(Y=c(Y,$),Y.return=J,Y)}function Se(J,Y,$){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Yc(""+Y,J.mode,$),Y.return=J,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return $=Pl(Y.type,Y.key,Y.props,null,J.mode,$),Eo($,Y),$.return=J,$;case b:return Y=qc(Y,J.mode,$),Y.return=J,Y;case Z:return Y=Nr(Y),Se(J,Y,$)}if(fe(Y)||ne(Y))return Y=Cr(Y,J.mode,$,null),Y.return=J,Y;if(typeof Y.then=="function")return Se(J,Vl(Y),$);if(Y.$$typeof===U)return Se(J,zl(J,Y),$);kl(J,Y)}return null}function re(J,Y,$,ge){var at=Y!==null?Y.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return at!==null?null:R(J,Y,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===at?H(J,Y,$,ge):null;case b:return $.key===at?ee(J,Y,$,ge):null;case Z:return $=Nr($),re(J,Y,$,ge)}if(fe($)||ne($))return at!==null?null:de(J,Y,$,ge,null);if(typeof $.then=="function")return re(J,Y,Vl($),ge);if($.$$typeof===U)return re(J,Y,zl(J,$),ge);kl(J,$)}return null}function ce(J,Y,$,ge,at){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return J=J.get($)||null,R(Y,J,""+ge,at);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return J=J.get(ge.key===null?$:ge.key)||null,H(Y,J,ge,at);case b:return J=J.get(ge.key===null?$:ge.key)||null,ee(Y,J,ge,at);case Z:return ge=Nr(ge),ce(J,Y,$,ge,at)}if(fe(ge)||ne(ge))return J=J.get($)||null,de(Y,J,ge,at,null);if(typeof ge.then=="function")return ce(J,Y,$,Vl(ge),at);if(ge.$$typeof===U)return ce(J,Y,$,zl(Y,ge),at);kl(Y,ge)}return null}function Qe(J,Y,$,ge){for(var at=null,It=null,nt=Y,mt=Y=0,Rt=null;nt!==null&&mt<$.length;mt++){nt.index>mt?(Rt=nt,nt=null):Rt=nt.sibling;var zt=re(J,nt,$[mt],ge);if(zt===null){nt===null&&(nt=Rt);break}t&&nt&&zt.alternate===null&&n(J,nt),Y=h(zt,Y,mt),It===null?at=zt:It.sibling=zt,It=zt,nt=Rt}if(mt===$.length)return a(J,nt),Dt&&ma(J,mt),at;if(nt===null){for(;mt<$.length;mt++)nt=Se(J,$[mt],ge),nt!==null&&(Y=h(nt,Y,mt),It===null?at=nt:It.sibling=nt,It=nt);return Dt&&ma(J,mt),at}for(nt=o(nt);mt<$.length;mt++)Rt=ce(nt,J,mt,$[mt],ge),Rt!==null&&(t&&Rt.alternate!==null&&nt.delete(Rt.key===null?mt:Rt.key),Y=h(Rt,Y,mt),It===null?at=Rt:It.sibling=Rt,It=Rt);return t&&nt.forEach(function(dr){return n(J,dr)}),Dt&&ma(J,mt),at}function ot(J,Y,$,ge){if($==null)throw Error(r(151));for(var at=null,It=null,nt=Y,mt=Y=0,Rt=null,zt=$.next();nt!==null&&!zt.done;mt++,zt=$.next()){nt.index>mt?(Rt=nt,nt=null):Rt=nt.sibling;var dr=re(J,nt,zt.value,ge);if(dr===null){nt===null&&(nt=Rt);break}t&&nt&&dr.alternate===null&&n(J,nt),Y=h(dr,Y,mt),It===null?at=dr:It.sibling=dr,It=dr,nt=Rt}if(zt.done)return a(J,nt),Dt&&ma(J,mt),at;if(nt===null){for(;!zt.done;mt++,zt=$.next())zt=Se(J,zt.value,ge),zt!==null&&(Y=h(zt,Y,mt),It===null?at=zt:It.sibling=zt,It=zt);return Dt&&ma(J,mt),at}for(nt=o(nt);!zt.done;mt++,zt=$.next())zt=ce(nt,J,mt,zt.value,ge),zt!==null&&(t&&zt.alternate!==null&&nt.delete(zt.key===null?mt:zt.key),Y=h(zt,Y,mt),It===null?at=zt:It.sibling=zt,It=zt);return t&&nt.forEach(function(jy){return n(J,jy)}),Dt&&ma(J,mt),at}function Qt(J,Y,$,ge){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var at=$.key;Y!==null;){if(Y.key===at){if(at=$.type,at===T){if(Y.tag===7){a(J,Y.sibling),ge=c(Y,$.props.children),ge.return=J,J=ge;break e}}else if(Y.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===Z&&Nr(at)===Y.type){a(J,Y.sibling),ge=c(Y,$.props),Eo(ge,$),ge.return=J,J=ge;break e}a(J,Y);break}else n(J,Y);Y=Y.sibling}$.type===T?(ge=Cr($.props.children,J.mode,ge,$.key),ge.return=J,J=ge):(ge=Pl($.type,$.key,$.props,null,J.mode,ge),Eo(ge,$),ge.return=J,J=ge)}return S(J);case b:e:{for(at=$.key;Y!==null;){if(Y.key===at)if(Y.tag===4&&Y.stateNode.containerInfo===$.containerInfo&&Y.stateNode.implementation===$.implementation){a(J,Y.sibling),ge=c(Y,$.children||[]),ge.return=J,J=ge;break e}else{a(J,Y);break}else n(J,Y);Y=Y.sibling}ge=qc($,J.mode,ge),ge.return=J,J=ge}return S(J);case Z:return $=Nr($),Qt(J,Y,$,ge)}if(fe($))return Qe(J,Y,$,ge);if(ne($)){if(at=ne($),typeof at!="function")throw Error(r(150));return $=at.call($),ot(J,Y,$,ge)}if(typeof $.then=="function")return Qt(J,Y,Vl($),ge);if($.$$typeof===U)return Qt(J,Y,zl(J,$),ge);kl(J,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,Y!==null&&Y.tag===6?(a(J,Y.sibling),ge=c(Y,$),ge.return=J,J=ge):(a(J,Y),ge=Yc($,J.mode,ge),ge.return=J,J=ge),S(J)):a(J,Y)}return function(J,Y,$,ge){try{Mo=0;var at=Qt(J,Y,$,ge);return gs=null,at}catch(nt){if(nt===ms||nt===Hl)throw nt;var It=ci(29,nt,null,J.mode);return It.lanes=ge,It.return=J,It}}}var Pr=Dm(!0),Um=Dm(!1),Ka=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Gt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Ol(t),pm(t,null,a),n}return Nl(t,o,n,a),Ol(t)}function bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,rt(t,a)}}function lf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var uf=!1;function To(){if(uf){var t=ps;if(t!==null)throw t}}function Ao(t,n,a,o){uf=!1;var c=t.updateQueue;Ka=!1;var h=c.firstBaseUpdate,S=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var H=R,ee=H.next;H.next=null,S===null?h=ee:S.next=ee,S=H;var de=t.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==S&&(R===null?de.firstBaseUpdate=ee:R.next=ee,de.lastBaseUpdate=H))}if(h!==null){var Se=c.baseState;S=0,de=ee=H=null,R=h;do{var re=R.lane&-536870913,ce=re!==R.lane;if(ce?(At&re)===re:(o&re)===re){re!==0&&re===ds&&(uf=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Qe=t,ot=R;re=n;var Qt=a;switch(ot.tag){case 1:if(Qe=ot.payload,typeof Qe=="function"){Se=Qe.call(Qt,Se,re);break e}Se=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=ot.payload,re=typeof Qe=="function"?Qe.call(Qt,Se,re):Qe,re==null)break e;Se=g({},Se,re);break e;case 2:Ka=!0}}re=R.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=c.callbacks,ce===null?c.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(ee=de=ce,H=Se):de=de.next=ce,S|=re;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,c.lastBaseUpdate=ce,c.shared.pending=null}}while(!0);de===null&&(H=Se),c.baseState=H,c.firstBaseUpdate=ee,c.lastBaseUpdate=de,h===null&&(c.shared.lanes=0),ir|=S,t.lanes=S,t.memoizedState=Se}}function Lm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Nm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lm(a[t],n)}var _s=O(null),Xl=O(0);function Om(t,n){t=Aa,ve(Xl,t),ve(_s,n),Aa=t|n.baseLanes}function cf(){ve(Xl,Aa),ve(_s,_s.current)}function ff(){Aa=Xl.current,ie(_s),ie(Xl)}var fi=O(null),Ai=null;function $a(t){var n=t.alternate;ve(pn,pn.current&1),ve(fi,t),Ai===null&&(n===null||_s.current!==null||n.memoizedState!==null)&&(Ai=t)}function hf(t){ve(pn,pn.current),ve(fi,t),Ai===null&&(Ai=t)}function Pm(t){t.tag===22?(ve(pn,pn.current),ve(fi,t),Ai===null&&(Ai=t)):er()}function er(){ve(pn,pn.current),ve(fi,fi.current)}function hi(t){ie(fi),Ai===t&&(Ai=null),ie(pn)}var pn=O(0);function Wl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vh(a)||xh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,pt=null,Zt=null,xn=null,Yl=!1,vs=!1,Fr=!1,ql=0,Ro=0,xs=null,zS=0;function cn(){throw Error(r(321))}function df(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ui(t[a],n[a]))return!1;return!0}function pf(t,n,a,o,c,h){return va=h,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?vg:wf,Fr=!1,h=a(o,c),Fr=!1,vs&&(h=Im(n,a,o,c)),Fm(t),h}function Fm(t){I.H=Do;var n=Zt!==null&&Zt.next!==null;if(va=0,xn=Zt=pt=null,Yl=!1,Ro=0,xs=null,n)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&Il(t)&&(Sn=!0))}function Im(t,n,a,o){pt=t;var c=0;do{if(vs&&(xs=null),Ro=0,vs=!1,25<=c)throw Error(r(301));if(c+=1,xn=Zt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=xg,h=n(a,o)}while(vs);return h}function BS(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Co(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(pt.flags|=1024),n}function mf(){var t=ql!==0;return ql=0,t}function gf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function _f(t){if(Yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Yl=!1}va=0,xn=Zt=pt=null,vs=!1,Ro=ql=0,xs=null}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?pt.memoizedState=xn=t:xn=xn.next=t,xn}function mn(){if(Zt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=xn===null?pt.memoizedState:xn.next;if(n!==null)xn=n,Zt=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},xn===null?pt.memoizedState=xn=t:xn=xn.next=t}return xn}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var n=Ro;return Ro+=1,xs===null&&(xs=[]),t=Rm(xs,t,n),n=pt,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?vg:wf),t}function Zl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===U)return Fn(t)}throw Error(r(438,String(t)))}function vf(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=jl(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function xa(t,n){return typeof n=="function"?n(t):n}function Kl(t){var n=mn();return xf(n,Zt,t)}function xf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,h=o.pending;if(h!==null){if(c!==null){var S=c.next;c.next=h.next,h.next=S}n.baseQueue=c=h,o.pending=null}if(h=t.baseState,c===null)t.memoizedState=h;else{n=c.next;var R=S=null,H=null,ee=n,de=!1;do{var Se=ee.lane&-536870913;if(Se!==ee.lane?(At&Se)===Se:(va&Se)===Se){var re=ee.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),Se===ds&&(de=!0);else if((va&re)===re){ee=ee.next,re===ds&&(de=!0);continue}else Se={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=Se,S=h):H=H.next=Se,pt.lanes|=re,ir|=re;Se=ee.action,Fr&&a(h,Se),h=ee.hasEagerState?ee.eagerState:a(h,Se)}else re={lane:Se,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},H===null?(R=H=re,S=h):H=H.next=re,pt.lanes|=Se,ir|=Se;ee=ee.next}while(ee!==null&&ee!==n);if(H===null?S=h:H.next=R,!ui(h,t.memoizedState)&&(Sn=!0,de&&(a=ps,a!==null)))throw a;t.memoizedState=h,t.baseState=S,t.baseQueue=H,o.lastRenderedState=h}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Sf(t){var n=mn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do h=t(h,S.action),S=S.next;while(S!==c);ui(h,n.memoizedState)||(Sn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function zm(t,n,a){var o=pt,c=mn(),h=Dt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!ui((Zt||c).memoizedState,a);if(S&&(c.memoizedState=a,Sn=!0),c=c.queue,Ef(Gm.bind(null,o,c,t),[t]),c.getSnapshot!==n||S||xn!==null&&xn.memoizedState.tag&1){if(o.flags|=2048,Ss(9,{destroy:void 0},Hm.bind(null,o,c,a,n),null),Jt===null)throw Error(r(349));h||(va&127)!==0||Bm(o,n,a)}return a}function Bm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=jl(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Hm(t,n,a,o){n.value=a,n.getSnapshot=o,Vm(n)&&km(t)}function Gm(t,n,a){return a(function(){Vm(n)&&km(t)})}function Vm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ui(t,a)}catch{return!0}}function km(t){var n=Rr(t,2);n!==null&&si(n,t,2)}function yf(t){var n=Zn();if(typeof t=="function"){var a=t;if(t=a(),Fr){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function Xm(t,n,a,o){return t.baseState=a,xf(t,Zt,typeof o=="function"?o:xa)}function HS(t,n,a,o,c){if($l(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};I.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Wm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Wm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var h=I.T,S={};I.T=S;try{var R=a(c,o),H=I.S;H!==null&&H(S,R),Ym(t,n,R)}catch(ee){Mf(t,n,ee)}finally{h!==null&&S.types!==null&&(h.types=S.types),I.T=h}}else try{h=a(c,o),Ym(t,n,h)}catch(ee){Mf(t,n,ee)}}function Ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){qm(t,n,o)},function(o){return Mf(t,n,o)}):qm(t,n,a)}function qm(t,n,a){n.status="fulfilled",n.value=a,jm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wm(t,a)))}function Mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,jm(n),n=n.next;while(n!==o)}t.action=null}function jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zm(t,n){return n}function Km(t,n){if(Dt){var a=Jt.formState;if(a!==null){e:{var o=pt;if(Dt){if(en){t:{for(var c=en,h=Ti;c.nodeType!==8;){if(!h){c=null;break t}if(c=Ri(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){en=Ri(c.nextSibling),o=c.data==="F!";break e}}ja(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zm,lastRenderedState:n},a.queue=o,a=mg.bind(null,pt,o),o.dispatch=a,o=yf(!1),h=Cf.bind(null,pt,!1,o.queue),o=Zn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=HS.bind(null,pt,c,h,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Qm(t){var n=mn();return Jm(n,Zt,t)}function Jm(t,n,a){if(n=xf(t,n,Zm)[0],t=Kl(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Co(n)}catch(S){throw S===ms?Hl:S}else o=n;n=mn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,Ss(9,{destroy:void 0},GS.bind(null,c,a),null)),[o,h,t]}function GS(t,n){t.action=n}function $m(t){var n=mn(),a=Zt;if(a!==null)return Jm(n,a,t);mn(),n=n.memoizedState,a=mn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Ss(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=jl(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function eg(){return mn().memoizedState}function Ql(t,n,a,o){var c=Zn();pt.flags|=t,c.memoizedState=Ss(1|n,{destroy:void 0},a,o===void 0?null:o)}function Jl(t,n,a,o){var c=mn();o=o===void 0?null:o;var h=c.memoizedState.inst;Zt!==null&&o!==null&&df(o,Zt.memoizedState.deps)?c.memoizedState=Ss(n,h,a,o):(pt.flags|=t,c.memoizedState=Ss(1|n,h,a,o))}function tg(t,n){Ql(8390656,8,t,n)}function Ef(t,n){Jl(2048,8,t,n)}function VS(t){pt.flags|=4;var n=pt.updateQueue;if(n===null)n=jl(),pt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ng(t){var n=mn().memoizedState;return VS({ref:n,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ig(t,n){return Jl(4,2,t,n)}function ag(t,n){return Jl(4,4,t,n)}function rg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sg(t,n,a){a=a!=null?a.concat([t]):null,Jl(4,4,rg.bind(null,n,t),a)}function bf(){}function og(t,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&df(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function lg(t,n){var a=mn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&df(n,o[1]))return o[0];if(o=t(),Fr){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o}function Tf(t,n,a){return a===void 0||(va&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=u0(),pt.lanes|=t,ir|=t,a)}function ug(t,n,a,o){return ui(a,n)?a:_s.current!==null?(t=Tf(t,a,o),ui(t,n)||(Sn=!0),t):(va&42)===0||(va&1073741824)!==0&&(At&261930)===0?(Sn=!0,t.memoizedState=a):(t=u0(),pt.lanes|=t,ir|=t,n)}function cg(t,n,a,o,c){var h=G.p;G.p=h!==0&&8>h?h:8;var S=I.T,R={};I.T=R,Cf(t,!1,n,a);try{var H=c(),ee=I.S;if(ee!==null&&ee(R,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=IS(H,o);wo(t,n,de,mi(t))}else wo(t,n,o,mi(t))}catch(Se){wo(t,n,{then:function(){},status:"rejected",reason:Se},mi())}finally{G.p=h,S!==null&&R.types!==null&&(S.types=R.types),I.T=S}}function kS(){}function Af(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=fg(t).queue;cg(t,c,n,oe,a===null?kS:function(){return hg(t),a(o)})}function fg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:oe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hg(t){var n=fg(t);n.next===null&&(n=t.alternate.memoizedState),wo(t,n.next.queue,{},mi())}function Rf(){return Fn(Yo)}function dg(){return mn().memoizedState}function pg(){return mn().memoizedState}function XS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();t=Qa(a);var o=Ja(n,t,a);o!==null&&(si(o,n,a),bo(o,n,a)),n={cache:tf()},t.payload=n;return}n=n.return}}function WS(t,n,a){var o=mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$l(t)?gg(n,a):(a=Xc(t,n,a,o),a!==null&&(si(a,t,o),_g(a,n,o)))}function mg(t,n,a){var o=mi();wo(t,n,a,o)}function wo(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($l(t))gg(n,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,R=h(S,a);if(c.hasEagerState=!0,c.eagerState=R,ui(R,S))return Nl(t,n,c,0),Jt===null&&Ll(),!1}catch{}if(a=Xc(t,n,c,o),a!==null)return si(a,t,o),_g(a,n,o),!0}return!1}function Cf(t,n,a,o){if(o={lane:2,revertLane:sh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},$l(t)){if(n)throw Error(r(479))}else n=Xc(t,a,o,2),n!==null&&si(n,t,2)}function $l(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function gg(t,n){vs=Yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function _g(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,rt(t,a)}}var Do={readContext:Fn,use:Zl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Do.useEffectEvent=cn;var vg={readContext:Fn,use:Zl,useCallback:function(t,n){return Zn().memoizedState=[t,n===void 0?null:n],t},useContext:Fn,useEffect:tg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ql(4194308,4,rg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ql(4194308,4,t,n)},useInsertionEffect:function(t,n){Ql(4,2,t,n)},useMemo:function(t,n){var a=Zn();n=n===void 0?null:n;var o=t();if(Fr){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Zn();if(a!==void 0){var c=a(n);if(Fr){Ie(!0);try{a(n)}finally{Ie(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=WS.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Zn();return t={current:t},n.memoizedState=t},useState:function(t){t=yf(t);var n=t.queue,a=mg.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(t,n){var a=Zn();return Tf(a,t,n)},useTransition:function(){var t=yf(!1);return t=cg.bind(null,pt,t.queue,!0,!1),Zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,c=Zn();if(Dt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Jt===null)throw Error(r(349));(At&127)!==0||Bm(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,tg(Gm.bind(null,o,h,t),[t]),o.flags|=2048,Ss(9,{destroy:void 0},Hm.bind(null,o,h,a,n),null),a},useId:function(){var t=Zn(),n=Jt.identifierPrefix;if(Dt){var a=Ki,o=Zi;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Rf,useFormState:Km,useActionState:Km,useOptimistic:function(t){var n=Zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Cf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:vf,useCacheRefresh:function(){return Zn().memoizedState=XS.bind(null,pt)},useEffectEvent:function(t){var n=Zn(),a={impl:t};return n.memoizedState=a,function(){if((Gt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},wf={readContext:Fn,use:Zl,useCallback:og,useContext:Fn,useEffect:Ef,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:Kl,useRef:eg,useState:function(){return Kl(xa)},useDebugValue:bf,useDeferredValue:function(t,n){var a=mn();return ug(a,Zt.memoizedState,t,n)},useTransition:function(){var t=Kl(xa)[0],n=mn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:zm,useId:dg,useHostTransitionStatus:Rf,useFormState:Qm,useActionState:Qm,useOptimistic:function(t,n){var a=mn();return Xm(a,Zt,t,n)},useMemoCache:vf,useCacheRefresh:pg};wf.useEffectEvent=ng;var xg={readContext:Fn,use:Zl,useCallback:og,useContext:Fn,useEffect:Ef,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:Sf,useRef:eg,useState:function(){return Sf(xa)},useDebugValue:bf,useDeferredValue:function(t,n){var a=mn();return Zt===null?Tf(a,t,n):ug(a,Zt.memoizedState,t,n)},useTransition:function(){var t=Sf(xa)[0],n=mn().memoizedState;return[typeof t=="boolean"?t:Co(t),n]},useSyncExternalStore:zm,useId:dg,useHostTransitionStatus:Rf,useFormState:$m,useActionState:$m,useOptimistic:function(t,n){var a=mn();return Zt!==null?Xm(a,Zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:vf,useCacheRefresh:pg};xg.useEffectEvent=ng;function Df(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=mi(),c=Qa(o);c.payload=n,a!=null&&(c.callback=a),n=Ja(t,c,o),n!==null&&(si(n,t,o),bo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=mi(),c=Qa(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ja(t,c,o),n!==null&&(si(n,t,o),bo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=mi(),o=Qa(a);o.tag=2,n!=null&&(o.callback=n),n=Ja(t,o,a),n!==null&&(si(n,t,a),bo(n,t,a))}};function Sg(t,n,a,o,c,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!go(a,o)||!go(c,h):!0}function yg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Uf.enqueueReplaceState(n,n.state,null)}function Ir(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Mg(t){Ul(t)}function Eg(t){console.error(t)}function bg(t){Ul(t)}function eu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Tg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Lf(t,n,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){eu(t,n)},a}function Ag(t){return t=Qa(t),t.tag=3,t}function Rg(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;t.payload=function(){return c(h)},t.callback=function(){Tg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Tg(n,a,o),typeof c!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function YS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&hs(n,a,c,!0),a=fi.current,a!==null){switch(a.tag){case 31:case 13:return Ai===null?hu():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ih(t,o,c)),!1;case 22:return a.flags|=65536,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ih(t,o,c)),!1}throw Error(r(435,a.tag))}return ih(t,o,c),hu(),!1}if(Dt)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Kc&&(t=Error(r(422),{cause:o}),xo(Mi(t,a)))):(o!==Kc&&(n=Error(r(423),{cause:o}),xo(Mi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Mi(o,a),c=Lf(t.stateNode,o,c),lf(t,c),fn!==4&&(fn=2)),!1;var h=Error(r(520),{cause:o});if(h=Mi(h,a),zo===null?zo=[h]:zo.push(h),fn!==4&&(fn=2),n===null)return!0;o=Mi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Lf(a.stateNode,o,t),lf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ar===null||!ar.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ag(c),Rg(c,t,a,o),lf(a,c),!1}a=a.return}while(a!==null);return!1}var Nf=Error(r(461)),Sn=!1;function In(t,n,a,o){n.child=t===null?Um(n,null,a,o):Pr(n,t.child,a,o)}function Cg(t,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return Ur(n),o=pf(t,n,a,S,h,c),R=mf(),t!==null&&!Sn?(gf(t,n,c),Sa(t,n,c)):(Dt&&R&&jc(n),n.flags|=1,In(t,n,o,c),n.child)}function wg(t,n,a,o,c){if(t===null){var h=a.type;return typeof h=="function"&&!Wc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Dg(t,n,h,o,c)):(t=Pl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Gf(t,c)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:go,a(S,o)&&t.ref===n.ref)return Sa(t,n,c)}return n.flags|=1,t=pa(h,o),t.ref=n.ref,t.return=n,n.child=t}function Dg(t,n,a,o,c){if(t!==null){var h=t.memoizedProps;if(go(h,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=h,Gf(t,c))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,Sa(t,n,c)}return Of(t,n,a,o,c)}function Ug(t,n,a,o){var c=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return Lg(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bl(n,h!==null?h.cachePool:null),h!==null?Om(n,h):cf(),Pm(n);else return o=n.lanes=536870912,Lg(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Bl(n,h.cachePool),Om(n,h),er(),n.memoizedState=null):(t!==null&&Bl(n,null),cf(),er());return In(t,n,c,a),n.child}function Uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lg(t,n,a,o,c){var h=af();return h=h===null?null:{parent:vn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Bl(n,null),cf(),Pm(n),t!==null&&hs(t,n,o,!0),n.childLanes=c,null}function tu(t,n){return n=iu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ng(t,n,a){return Pr(n,t.child,null,a),t=tu(n,n.pendingProps),t.flags|=2,hi(n),n.memoizedState=null,t}function qS(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(o.mode==="hidden")return t=tu(n,o),n.lanes=536870912,Uo(null,t);if(hf(n),(t=en)?(t=W0(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=gm(t),a.return=n,n.child=a,Pn=n,en=null)):t=null,t===null)throw ja(n);return n.lanes=536870912,null}return tu(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(hf(n),c)if(n.flags&256)n.flags&=-257,n=Ng(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Sn||hs(t,n,a,!1),c=(a&t.childLanes)!==0,Sn||c){if(o=Jt,o!==null&&(S=St(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,Rr(t,S),si(o,t,S),Nf;hu(),n=Ng(t,n,a)}else t=h.treeContext,en=Ri(S.nextSibling),Pn=n,Dt=!0,qa=null,Ti=!1,t!==null&&xm(n,t),n=tu(n,o),n.flags|=4096;return n}return t=pa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function nu(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Of(t,n,a,o,c){return Ur(n),a=pf(t,n,a,o,void 0,c),o=mf(),t!==null&&!Sn?(gf(t,n,c),Sa(t,n,c)):(Dt&&o&&jc(n),n.flags|=1,In(t,n,a,c),n.child)}function Og(t,n,a,o,c,h){return Ur(n),n.updateQueue=null,a=Im(n,o,a,c),Fm(t),o=mf(),t!==null&&!Sn?(gf(t,n,h),Sa(t,n,h)):(Dt&&o&&jc(n),n.flags|=1,In(t,n,a,h),n.child)}function Pg(t,n,a,o,c){if(Ur(n),n.stateNode===null){var h=ls,S=a.contextType;typeof S=="object"&&S!==null&&(h=Fn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Uf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},sf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Fn(S):ls,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Df(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Uf.enqueueReplaceState(h,h.state,null),Ao(n,o,h,c),To(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,H=Ir(a,R);h.props=H;var ee=h.context,de=a.contextType;S=ls,typeof de=="object"&&de!==null&&(S=Fn(de));var Se=a.getDerivedStateFromProps;de=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,de||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||ee!==S)&&yg(n,h,o,S),Ka=!1;var re=n.memoizedState;h.state=re,Ao(n,o,h,c),To(),ee=n.memoizedState,R||re!==ee||Ka?(typeof Se=="function"&&(Df(n,a,Se,o),ee=n.memoizedState),(H=Ka||Sg(n,a,H,o,re,ee,S))?(de||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),h.props=o,h.state=ee,h.context=S,o=H):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,of(t,n),S=n.memoizedProps,de=Ir(a,S),h.props=de,Se=n.pendingProps,re=h.context,ee=a.contextType,H=ls,typeof ee=="object"&&ee!==null&&(H=Fn(ee)),R=a.getDerivedStateFromProps,(ee=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Se||re!==H)&&yg(n,h,o,H),Ka=!1,re=n.memoizedState,h.state=re,Ao(n,o,h,c),To();var ce=n.memoizedState;S!==Se||re!==ce||Ka||t!==null&&t.dependencies!==null&&Il(t.dependencies)?(typeof R=="function"&&(Df(n,a,R,o),ce=n.memoizedState),(de=Ka||Sg(n,a,de,o,re,ce,H)||t!==null&&t.dependencies!==null&&Il(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ce,H),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ce,H)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=H,o=de):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,nu(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Pr(n,t.child,null,c),n.child=Pr(n,null,a,c)):In(t,n,a,c),n.memoizedState=h.state,t=n.child):t=Sa(t,n,c),t}function Fg(t,n,a,o){return wr(),n.flags|=256,In(t,n,a,o),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ff(t){return{baseLanes:t,cachePool:Tm()}}function If(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=pi),t}function Ig(t,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(c?$a(n):er(),(t=en)?(t=W0(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=gm(t),a.return=n,n.child=a,Pn=n,en=null)):t=null,t===null)throw ja(n);return xh(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(er(),c=n.mode,R=iu({mode:"hidden",children:R},c),o=Cr(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Ff(a),o.childLanes=If(t,S,a),n.memoizedState=Pf,Uo(null,o)):($a(n),zf(n,R))}var H=t.memoizedState;if(H!==null&&(R=H.dehydrated,R!==null)){if(h)n.flags&256?($a(n),n.flags&=-257,n=Bf(t,n,a)):n.memoizedState!==null?(er(),n.child=t.child,n.flags|=128,n=null):(er(),R=o.fallback,c=n.mode,o=iu({mode:"visible",children:o.children},c),R=Cr(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Pr(n,t.child,null,a),o=n.child,o.memoizedState=Ff(a),o.childLanes=If(t,S,a),n.memoizedState=Pf,n=Uo(null,o));else if($a(n),xh(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var ee=S.dgst;S=ee,o=Error(r(419)),o.stack="",o.digest=S,xo({value:o,source:null,stack:null}),n=Bf(t,n,a)}else if(Sn||hs(t,n,a,!1),S=(a&t.childLanes)!==0,Sn||S){if(S=Jt,S!==null&&(o=St(S,a),o!==0&&o!==H.retryLane))throw H.retryLane=o,Rr(t,o),si(S,t,o),Nf;vh(R)||hu(),n=Bf(t,n,a)}else vh(R)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,en=Ri(R.nextSibling),Pn=n,Dt=!0,qa=null,Ti=!1,t!==null&&xm(n,t),n=zf(n,o.children),n.flags|=4096);return n}return c?(er(),R=o.fallback,c=n.mode,H=t.child,ee=H.sibling,o=pa(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,ee!==null?R=pa(ee,R):(R=Cr(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Uo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Ff(a):(c=R.cachePool,c!==null?(H=vn._currentValue,c=c.parent!==H?{parent:H,pool:H}:c):c=Tm(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=If(t,S,a),n.memoizedState=Pf,Uo(t.child,o)):($a(n),a=t.child,t=a.sibling,a=pa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function zf(t,n){return n=iu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function iu(t,n){return t=ci(22,t,null,n),t.lanes=0,t}function Bf(t,n,a){return Pr(n,t.child,null,a),t=zf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function zg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),$c(t.return,n,a)}function Hf(t,n,a,o,c,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=h)}function Bg(t,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var S=pn.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,ve(pn,S),In(t,n,o,a),o=Dt?vo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,a,n);else if(t.tag===19)zg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Wl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Hf(n,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Wl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Hf(n,!0,a,null,h,o);break;case"together":Hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ir|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(hs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=pa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=pa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Gf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Il(t)))}function jS(t,n,a){switch(n.tag){case 3:Fe(n,n.stateNode.containerInfo),Za(n,vn,t.memoizedState.cache),wr();break;case 27:case 5:We(n);break;case 4:Fe(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?($a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ig(t,n,a):($a(n),t=Sa(t,n,a),t!==null?t.sibling:null);$a(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(hs(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Bg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ve(pn,pn.current),o)break;return null;case 22:return n.lanes=0,Ug(t,n,a,n.pendingProps);case 24:Za(n,vn,t.memoizedState.cache)}return Sa(t,n,a)}function Hg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Gf(t,a)&&(n.flags&128)===0)return Sn=!1,jS(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Dt&&(n.flags&1048576)!==0&&vm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Nr(n.elementType),n.type=t,typeof t=="function")Wc(t)?(o=Ir(t,o),n.tag=1,n=Pg(null,n,t,o,a)):(n.tag=0,n=Of(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===L){n.tag=11,n=Cg(null,n,t,o,a);break e}else if(c===F){n.tag=14,n=wg(null,n,t,o,a);break e}}throw n=me(t)||t,Error(r(306,n,""))}}return n;case 0:return Of(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Ir(o,n.pendingProps),Pg(t,n,o,c,a);case 3:e:{if(Fe(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,of(t,n),Ao(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Za(n,vn,o),o!==h.cache&&ef(n,[vn],a,!0),To(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Fg(t,n,o,a);break e}else if(o!==c){c=Mi(Error(r(424)),n),xo(c),n=Fg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,en=Ri(t.firstChild),Pn=n,Dt=!0,qa=null,Ti=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(wr(),o===c){n=Sa(t,n,a);break e}In(t,n,o,a)}n=n.child}return n;case 26:return nu(t,n),t===null?(a=Q0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,t=n.pendingProps,o=xu(ae.current).createElement(a),o[ln]=n,o[_n]=t,zn(o,a,t),A(o),n.stateNode=o):n.memoizedState=Q0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return We(n),t===null&&Dt&&(o=n.stateNode=j0(n.type,n.pendingProps,ae.current),Pn=n,Ti=!0,c=en,lr(n.type)?(Sh=c,en=Ri(o.firstChild)):en=c),In(t,n,n.pendingProps.children,a),nu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((c=o=en)&&(o=by(o,n.type,n.pendingProps,Ti),o!==null?(n.stateNode=o,Pn=n,en=Ri(o.firstChild),Ti=!1,c=!0):c=!1),c||ja(n)),We(n),c=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,mh(c,h)?o=null:S!==null&&mh(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=pf(t,n,BS,null,null,a),Yo._currentValue=c),nu(t,n),In(t,n,o,a),n.child;case 6:return t===null&&Dt&&((t=a=en)&&(a=Ty(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,Pn=n,en=null,t=!0):t=!1),t||ja(n)),null;case 13:return Ig(t,n,a);case 4:return Fe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Pr(n,null,o,a):In(t,n,o,a),n.child;case 11:return Cg(t,n,n.type,n.pendingProps,a);case 7:return In(t,n,n.pendingProps,a),n.child;case 8:return In(t,n,n.pendingProps.children,a),n.child;case 12:return In(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Za(n,n.type,o.value),In(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Ur(n),c=Fn(c),o=o(c),n.flags|=1,In(t,n,o,a),n.child;case 14:return wg(t,n,n.type,n.pendingProps,a);case 15:return Dg(t,n,n.type,n.pendingProps,a);case 19:return Bg(t,n,a);case 31:return qS(t,n,a);case 22:return Ug(t,n,a,n.pendingProps);case 24:return Ur(n),o=Fn(vn),t===null?(c=af(),c===null&&(c=Jt,h=tf(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},sf(n),Za(n,vn,c)):((t.lanes&a)!==0&&(of(t,n),Ao(n,null,null,a),To()),c=t.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Za(n,vn,o)):(o=h.cache,Za(n,vn,o),o!==c.cache&&ef(n,[vn],a,!0))),In(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ya(t){t.flags|=4}function Vf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(d0())t.flags|=8192;else throw Or=Gl,rf}else t.flags&=-16777217}function Gg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!n_(n))if(d0())t.flags|=8192;else throw Or=Gl,rf}function au(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,bs|=n)}function Lo(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function ZS(t,n,a){var o=n.pendingProps;switch(Zc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),_a(vn),Ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(fs(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qc())),tn(n),null;case 26:var c=n.type,h=n.memoizedState;return t===null?(ya(n),h!==null?(tn(n),Gg(n,h)):(tn(n),Vf(n,c,null,o,a))):h?h!==t.memoizedState?(ya(n),tn(n),Gg(n,h)):(tn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ya(n),tn(n),Vf(n,c,t,o,a)),null;case 27:if(vt(n),a=ae.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ya(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}t=Ne.current,fs(n)?Sm(n):(t=j0(c,o,a),n.stateNode=t,ya(n))}return tn(n),null;case 5:if(vt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ya(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(h=Ne.current,fs(n))Sm(n);else{var S=xu(ae.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}h[ln]=n,h[_n]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(zn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ya(n)}}return tn(n),Vf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ya(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,fs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Pn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||I0(t.nodeValue,a)),t||ja(n,!0)}else t=xu(t).createTextNode(o),t[ln]=n,n.stateNode=t}return tn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=fs(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),t=!1}else a=Qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(hi(n),n):(hi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=fs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ln]=n}else wr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),c=!1}else c=Qc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(hi(n),n):(hi(n),null)}return hi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),au(n,n.updateQueue),tn(n),null);case 4:return Ye(),t===null&&ch(n.stateNode.containerInfo),tn(n),null;case 10:return _a(n.type),tn(n),null;case 19:if(ie(pn),o=n.memoizedState,o===null)return tn(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)Lo(o,!1);else{if(fn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Wl(t),h!==null){for(n.flags|=128,Lo(o,!1),t=h.updateQueue,n.updateQueue=t,au(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)mm(a,t),a=a.sibling;return ve(pn,pn.current&1|2),Dt&&ma(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&E()>uu&&(n.flags|=128,c=!0,Lo(o,!1),n.lanes=4194304)}else{if(!c)if(t=Wl(h),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,au(n,t),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Dt)return tn(n),null}else 2*E()-o.renderingStartTime>uu&&a!==536870912&&(n.flags|=128,c=!0,Lo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=E(),t.sibling=null,a=pn.current,ve(pn,c?a&1|2:a&1),Dt&&ma(n,o.treeForkCount),t):(tn(n),null);case 22:case 23:return hi(n),ff(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&au(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ie(Lr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(vn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function KS(t,n){switch(Zc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(vn),Ye(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return vt(n),null;case 31:if(n.memoizedState!==null){if(hi(n),n.alternate===null)throw Error(r(340));wr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(hi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));wr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(pn),null;case 4:return Ye(),null;case 10:return _a(n.type),null;case 22:case 23:return hi(n),ff(),t!==null&&ie(Lr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(vn),null;case 25:return null;default:return null}}function Vg(t,n){switch(Zc(n),n.tag){case 3:_a(vn),Ye();break;case 26:case 27:case 5:vt(n);break;case 4:Ye();break;case 31:n.memoizedState!==null&&hi(n);break;case 13:hi(n);break;case 19:ie(pn);break;case 10:_a(n.type);break;case 22:case 23:hi(n),ff(),t!==null&&ie(Lr);break;case 24:_a(vn)}}function No(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==c)}}catch(R){Yt(n,n.return,R)}}function tr(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&t)===t){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,c=n;var H=a,ee=R;try{ee()}catch(de){Yt(c,H,de)}}}o=o.next}while(o!==h)}}catch(de){Yt(n,n.return,de)}}function kg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Nm(n,a)}catch(o){Yt(t,t.return,o)}}}function Xg(t,n,a){a.props=Ir(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Yt(t,n,o)}}function Oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Yt(t,n,c)}}function Qi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Yt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Yt(t,n,c)}else a.current=null}function Wg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Yt(t,t.return,c)}}function kf(t,n,a){try{var o=t.stateNode;vy(o,t.type,a,n),o[_n]=n}catch(c){Yt(t,t.return,c)}}function Yg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&lr(t.type)||t.tag===4}function Xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&lr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ha));else if(o!==4&&(o===27&&lr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Wf(t,n,a),t=t.sibling;t!==null;)Wf(t,n,a),t=t.sibling}function ru(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&lr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ru(t,n,a),t=t.sibling;t!==null;)ru(t,n,a),t=t.sibling}function qg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,o,a),n[ln]=t,n[_n]=a}catch(h){Yt(t,t.return,h)}}var Ma=!1,yn=!1,Yf=!1,jg=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function QS(t,n){if(t=t.containerInfo,dh=Au,t=sm(t),zc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var S=0,R=-1,H=-1,ee=0,de=0,Se=t,re=null;t:for(;;){for(var ce;Se!==a||c!==0&&Se.nodeType!==3||(R=S+c),Se!==h||o!==0&&Se.nodeType!==3||(H=S+o),Se.nodeType===3&&(S+=Se.nodeValue.length),(ce=Se.firstChild)!==null;)re=Se,Se=ce;for(;;){if(Se===t)break t;if(re===a&&++ee===c&&(R=S),re===h&&++de===o&&(H=S),(ce=Se.nextSibling)!==null)break;Se=re,re=Se.parentNode}Se=ce}a=R===-1||H===-1?null:{start:R,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:t,selectionRange:a},Au=!1,Rn=n;Rn!==null;)if(n=Rn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Rn=t;else for(;Rn!==null;){switch(n=Rn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Qe=Ir(a.type,c);t=o.getSnapshotBeforeUpdate(Qe,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Yt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)_h(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_h(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Rn=t;break}Rn=n.return}}function Zg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(t,a),o&4&&No(5,a);break;case 1:if(ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Yt(a,a.return,S)}else{var c=Ir(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Yt(a,a.return,S)}}o&64&&kg(a),o&512&&Oo(a,a.return);break;case 3:if(ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Nm(t,n)}catch(S){Yt(a,a.return,S)}}break;case 27:n===null&&o&4&&qg(a);case 26:case 5:ba(t,a),n===null&&o&4&&Wg(a),o&512&&Oo(a,a.return);break;case 12:ba(t,a);break;case 31:ba(t,a),o&4&&Jg(t,a);break;case 13:ba(t,a),o&4&&$g(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sy.bind(null,a),Ay(t,a))));break;case 22:if(o=a.memoizedState!==null||Ma,!o){n=n!==null&&n.memoizedState!==null||yn,c=Ma;var h=yn;Ma=o,(yn=n)&&!h?Ta(t,a,(a.subtreeFlags&8772)!==0):ba(t,a),Ma=c,yn=h}break;case 30:break;default:ba(t,a)}}function Kg(t){var n=t.alternate;n!==null&&(t.alternate=null,Kg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Xa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,ni=!1;function Ea(t,n,a){for(a=a.child;a!==null;)Qg(t,n,a),a=a.sibling}function Qg(t,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:yn||Qi(a,n),Ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yn||Qi(a,n);var o=on,c=ni;lr(a.type)&&(on=a.stateNode,ni=!1),Ea(t,n,a),ko(a.stateNode),on=o,ni=c;break;case 5:yn||Qi(a,n);case 6:if(o=on,c=ni,on=null,Ea(t,n,a),on=o,ni=c,on!==null)if(ni)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(h){Yt(a,n,h)}else try{on.removeChild(a.stateNode)}catch(h){Yt(a,n,h)}break;case 18:on!==null&&(ni?(t=on,k0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ls(t)):k0(on,a.stateNode));break;case 4:o=on,c=ni,on=a.stateNode.containerInfo,ni=!0,Ea(t,n,a),on=o,ni=c;break;case 0:case 11:case 14:case 15:tr(2,a,n),yn||tr(4,a,n),Ea(t,n,a);break;case 1:yn||(Qi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Xg(a,n,o)),Ea(t,n,a);break;case 21:Ea(t,n,a);break;case 22:yn=(o=yn)||a.memoizedState!==null,Ea(t,n,a),yn=o;break;default:Ea(t,n,a)}}function Jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ls(t)}catch(a){Yt(n,n.return,a)}}}function $g(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ls(t)}catch(a){Yt(n,n.return,a)}}function JS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new jg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new jg),n;default:throw Error(r(435,t.tag))}}function su(t,n){var a=JS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=oy.bind(null,t,o);o.then(c,c)}})}function ii(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(lr(R.type)){on=R.stateNode,ni=!1;break e}break;case 5:on=R.stateNode,ni=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,ni=!0;break e}R=R.return}if(on===null)throw Error(r(160));Qg(h,S,c),on=null,ni=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)e0(n,t),n=n.sibling}var zi=null;function e0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ii(n,t),ai(t),o&4&&(tr(3,t,t.return),No(3,t),tr(5,t,t.return));break;case 1:ii(n,t),ai(t),o&512&&(yn||a===null||Qi(a,a.return)),o&64&&Ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=zi;if(ii(n,t),ai(t),o&512&&(yn||a===null||Qi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ji]||h[ln]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),zn(h,o,a),h[ln]=t,A(h),o=h;break e;case"link":var S=e_("link","href",c).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break t}}h=c.createElement(o),zn(h,o,a),c.head.appendChild(h);break;case"meta":if(S=e_("meta","content",c).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break t}}h=c.createElement(o),zn(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[ln]=t,A(h),o=h}t.stateNode=o}else t_(c,t.type,t.stateNode);else t.stateNode=$0(c,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?t_(c,t.type,t.stateNode):$0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&kf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ii(n,t),ai(t),o&512&&(yn||a===null||Qi(a,a.return)),a!==null&&o&4&&kf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ii(n,t),ai(t),o&512&&(yn||a===null||Qi(a,a.return)),t.flags&32){c=t.stateNode;try{En(c,"")}catch(Qe){Yt(t,t.return,Qe)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,kf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Yf=!0);break;case 6:if(ii(n,t),ai(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Qe){Yt(t,t.return,Qe)}}break;case 3:if(Mu=null,c=zi,zi=Su(n.containerInfo),ii(n,t),zi=c,ai(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ls(n.containerInfo)}catch(Qe){Yt(t,t.return,Qe)}Yf&&(Yf=!1,t0(t));break;case 4:o=zi,zi=Su(t.stateNode.containerInfo),ii(n,t),ai(t),zi=o;break;case 12:ii(n,t),ai(t);break;case 31:ii(n,t),ai(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,su(t,o)));break;case 13:ii(n,t),ai(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lu=E()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,su(t,o)));break;case 22:c=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,ee=Ma,de=yn;if(Ma=ee||c,yn=de||H,ii(n,t),yn=de,Ma=ee,ai(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||H||Ma||yn||zr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(h=H.stateNode,c)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=H.stateNode;var Se=H.memoizedProps.style,re=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(Qe){Yt(H,H.return,Qe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=c?"":H.memoizedProps}catch(Qe){Yt(H,H.return,Qe)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;c?X0(ce,!0):X0(H.stateNode,!1)}catch(Qe){Yt(H,H.return,Qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,su(t,a))));break;case 19:ii(n,t),ai(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,su(t,o)));break;case 30:break;case 21:break;default:ii(n,t),ai(t)}}function ai(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Yg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=Xf(t);ru(t,h,c);break;case 5:var S=a.stateNode;a.flags&32&&(En(S,""),a.flags&=-33);var R=Xf(t);ru(t,R,S);break;case 3:case 4:var H=a.stateNode.containerInfo,ee=Xf(t);Wf(t,ee,H);break;default:throw Error(r(161))}}catch(de){Yt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function t0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zg(t,n.alternate,n),n=n.sibling}function zr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:tr(4,n,n.return),zr(n);break;case 1:Qi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xg(n,n.return,a),zr(n);break;case 27:ko(n.stateNode);case 26:case 5:Qi(n,n.return),zr(n);break;case 22:n.memoizedState===null&&zr(n);break;case 30:zr(n);break;default:zr(n)}t=t.sibling}}function Ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Ta(c,h,a),No(4,h);break;case 1:if(Ta(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ee){Yt(o,o.return,ee)}if(o=h,c=o.updateQueue,c!==null){var R=o.stateNode;try{var H=c.shared.hiddenCallbacks;if(H!==null)for(c.shared.hiddenCallbacks=null,c=0;c<H.length;c++)Lm(H[c],R)}catch(ee){Yt(o,o.return,ee)}}a&&S&64&&kg(h),Oo(h,h.return);break;case 27:qg(h);case 26:case 5:Ta(c,h,a),a&&o===null&&S&4&&Wg(h),Oo(h,h.return);break;case 12:Ta(c,h,a);break;case 31:Ta(c,h,a),a&&S&4&&Jg(c,h);break;case 13:Ta(c,h,a),a&&S&4&&$g(c,h);break;case 22:h.memoizedState===null&&Ta(c,h,a),Oo(h,h.return);break;case 30:break;default:Ta(c,h,a)}n=n.sibling}}function qf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&So(a))}function jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t))}function Bi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)n0(t,n,a,o),n=n.sibling}function n0(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(t,n,a,o),c&2048&&No(9,n);break;case 1:Bi(t,n,a,o);break;case 3:Bi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&So(t)));break;case 12:if(c&2048){Bi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Yt(n,n.return,H)}}else Bi(t,n,a,o);break;case 31:Bi(t,n,a,o);break;case 13:Bi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Bi(t,n,a,o):Po(t,n):h._visibility&2?Bi(t,n,a,o):(h._visibility|=2,ys(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&qf(S,n);break;case 24:Bi(t,n,a,o),c&2048&&jf(n.alternate,n);break;default:Bi(t,n,a,o)}}function ys(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,R=a,H=o,ee=S.flags;switch(S.tag){case 0:case 11:case 15:ys(h,S,R,H,c),No(8,S);break;case 23:break;case 22:var de=S.stateNode;S.memoizedState!==null?de._visibility&2?ys(h,S,R,H,c):Po(h,S):(de._visibility|=2,ys(h,S,R,H,c)),c&&ee&2048&&qf(S.alternate,S);break;case 24:ys(h,S,R,H,c),c&&ee&2048&&jf(S.alternate,S);break;default:ys(h,S,R,H,c)}n=n.sibling}}function Po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:Po(a,o),c&2048&&qf(o.alternate,o);break;case 24:Po(a,o),c&2048&&jf(o.alternate,o);break;default:Po(a,o)}n=n.sibling}}var Fo=8192;function Ms(t,n,a){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)i0(t,n,a),t=t.sibling}function i0(t,n,a){switch(t.tag){case 26:Ms(t,n,a),t.flags&Fo&&t.memoizedState!==null&&zy(a,zi,t.memoizedState,t.memoizedProps);break;case 5:Ms(t,n,a);break;case 3:case 4:var o=zi;zi=Su(t.stateNode.containerInfo),Ms(t,n,a),zi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Fo,Fo=16777216,Ms(t,n,a),Fo=o):Ms(t,n,a));break;default:Ms(t,n,a)}}function a0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Io(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,s0(o,t)}a0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r0(t),t=t.sibling}function r0(t){switch(t.tag){case 0:case 11:case 15:Io(t),t.flags&2048&&tr(9,t,t.return);break;case 3:Io(t);break;case 12:Io(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ou(t)):Io(t);break;default:Io(t)}}function ou(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,s0(o,t)}a0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:tr(8,n,n.return),ou(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ou(n));break;default:ou(n)}t=t.sibling}}function s0(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:tr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:So(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rn=o;else e:for(a=t;Rn!==null;){o=Rn;var c=o.sibling,h=o.return;if(Kg(o),o===a){Rn=null;break e}if(c!==null){c.return=h,Rn=c;break e}Rn=h}}}var $S={getCacheForType:function(t){var n=Fn(vn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Fn(vn).controller.signal}},ey=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Jt=null,Et=null,At=0,Wt=0,di=null,nr=!1,Es=!1,Zf=!1,Aa=0,fn=0,ir=0,Br=0,Kf=0,pi=0,bs=0,zo=null,ri=null,Qf=!1,lu=0,o0=0,uu=1/0,cu=null,ar=null,bn=0,rr=null,Ts=null,Ra=0,Jf=0,$f=null,l0=null,Bo=0,eh=null;function mi(){return(Gt&2)!==0&&At!==0?At&-At:I.T!==null?sh():Vt()}function u0(){if(pi===0)if((At&536870912)===0||Dt){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),pi=t}else pi=536870912;return t=fi.current,t!==null&&(t.flags|=32),pi}function si(t,n,a){(t===Jt&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(As(t,0),sr(t,At,pi,!1)),et(t,a),((Gt&2)===0||t!==Jt)&&(t===Jt&&((Gt&2)===0&&(Br|=a),fn===4&&sr(t,At,pi,!1)),Ji(t))}function c0(t,n,a){if((Gt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),c=o?iy(t,n):nh(t,n,!0),h=o;do{if(c===0){Es&&!o&&sr(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!ty(a)){c=nh(t,n,!1),h=!1;continue}if(c===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;c=zo;var H=R.current.memoizedState.isDehydrated;if(H&&(As(R,S).flags|=256),S=nh(R,S,!1),S!==2){if(Zf&&!H){R.errorRecoveryDisabledLanes|=h,Br|=h,c=4;break e}h=ri,ri=c,h!==null&&(ri===null?ri=h:ri.push.apply(ri,h))}c=S}if(h=!1,c!==2)continue}}if(c===1){As(t,0),sr(t,n,0,!0);break}e:{switch(o=t,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:sr(o,n,pi,!nr);break e;case 2:ri=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=lu+300-E(),10<c)){if(sr(o,n,pi,!nr),xe(o,0,!0)!==0)break e;Ra=n,o.timeoutHandle=G0(f0.bind(null,o,a,ri,cu,Qf,n,pi,Br,bs,nr,h,"Throttled",-0,0),c);break e}f0(o,a,ri,cu,Qf,n,pi,Br,bs,nr,h,null,-0,0)}}break}while(!0);Ji(t)}function f0(t,n,a,o,c,h,S,R,H,ee,de,Se,re,ce){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},i0(n,h,Se);var Qe=(h&62914560)===h?lu-E():(h&4194048)===h?o0-E():0;if(Qe=By(Se,Qe),Qe!==null){Ra=h,t.cancelPendingCommit=Qe(x0.bind(null,t,n,h,a,o,c,S,R,H,de,Se,null,re,ce)),sr(t,h,S,!ee);return}}x0(t,n,h,a,o,c,S,R,H)}function ty(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!ui(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function sr(t,n,a,o){n&=~Kf,n&=~Br,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var h=31-Ge(c),S=1<<h;o[h]=-1,c&=~S}a!==0&&jn(t,a,n)}function fu(){return(Gt&6)===0?(Ho(0),!1):!0}function th(){if(Et!==null){if(Wt===0)var t=Et.return;else t=Et,ga=Dr=null,_f(t),gs=null,Mo=0,t=Et;for(;t!==null;)Vg(t.alternate,t),t=t.return;Et=null}}function As(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ra=0,th(),Jt=t,Et=a=pa(t.current,null),At=n,Wt=0,di=null,nr=!1,Es=Oe(t,n),Zf=!1,bs=pi=Kf=Br=ir=fn=0,ri=zo=null,Qf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ge(o),h=1<<c;n|=t[c],o&=~h}return Aa=n,Ll(),a}function h0(t,n){pt=null,I.H=Do,n===ms||n===Hl?(n=Cm(),Wt=3):n===rf?(n=Cm(),Wt=4):Wt=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,Et===null&&(fn=1,eu(t,Mi(n,t.current)))}function d0(){var t=fi.current;return t===null?!0:(At&4194048)===At?Ai===null:(At&62914560)===At||(At&536870912)!==0?t===Ai:!1}function p0(){var t=I.H;return I.H=Do,t===null?Do:t}function m0(){var t=I.A;return I.A=$S,t}function hu(){fn=4,nr||(At&4194048)!==At&&fi.current!==null||(Es=!0),(ir&134217727)===0&&(Br&134217727)===0||Jt===null||sr(Jt,At,pi,!1)}function nh(t,n,a){var o=Gt;Gt|=2;var c=p0(),h=m0();(Jt!==t||At!==n)&&(cu=null,As(t,n)),n=!1;var S=fn;e:do try{if(Wt!==0&&Et!==null){var R=Et,H=di;switch(Wt){case 8:th(),S=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var ee=Wt;if(Wt=0,di=null,Rs(t,R,H,ee),a&&Es){S=0;break e}break;default:ee=Wt,Wt=0,di=null,Rs(t,R,H,ee)}}ny(),S=fn;break}catch(de){h0(t,de)}while(!0);return n&&t.shellSuspendCounter++,ga=Dr=null,Gt=o,I.H=c,I.A=h,Et===null&&(Jt=null,At=0,Ll()),S}function ny(){for(;Et!==null;)g0(Et)}function iy(t,n){var a=Gt;Gt|=2;var o=p0(),c=m0();Jt!==t||At!==n?(cu=null,uu=E()+500,As(t,n)):Es=Oe(t,n);e:do try{if(Wt!==0&&Et!==null){n=Et;var h=di;t:switch(Wt){case 1:Wt=0,di=null,Rs(t,n,h,1);break;case 2:case 9:if(Am(h)){Wt=0,di=null,_0(n);break}n=function(){Wt!==2&&Wt!==9||Jt!==t||(Wt=7),Ji(t)},h.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:Am(h)?(Wt=0,di=null,_0(n)):(Wt=0,di=null,Rs(t,n,h,7));break;case 5:var S=null;switch(Et.tag){case 26:S=Et.memoizedState;case 5:case 27:var R=Et;if(S?n_(S):R.stateNode.complete){Wt=0,di=null;var H=R.sibling;if(H!==null)Et=H;else{var ee=R.return;ee!==null?(Et=ee,du(ee)):Et=null}break t}}Wt=0,di=null,Rs(t,n,h,5);break;case 6:Wt=0,di=null,Rs(t,n,h,6);break;case 8:th(),fn=6;break e;default:throw Error(r(462))}}ay();break}catch(de){h0(t,de)}while(!0);return ga=Dr=null,I.H=o,I.A=c,Gt=a,Et!==null?0:(Jt=null,At=0,Ll(),fn)}function ay(){for(;Et!==null&&!qe();)g0(Et)}function g0(t){var n=Hg(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,n===null?du(t):Et=n}function _0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Og(a,n,n.pendingProps,n.type,void 0,At);break;case 11:n=Og(a,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:_f(n);default:Vg(a,n),n=Et=mm(n,Aa),n=Hg(a,n,Aa)}t.memoizedProps=t.pendingProps,n===null?du(t):Et=n}function Rs(t,n,a,o){ga=Dr=null,_f(n),gs=null,Mo=0;var c=n.return;try{if(YS(t,c,n,a,At)){fn=1,eu(t,Mi(a,t.current)),Et=null;return}}catch(h){if(c!==null)throw Et=c,h;fn=1,eu(t,Mi(a,t.current)),Et=null;return}n.flags&32768?(Dt||o===1?t=!0:Es||(At&536870912)!==0?t=!1:(nr=t=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),v0(n,t)):du(n)}function du(t){var n=t;do{if((n.flags&32768)!==0){v0(n,nr);return}t=n.return;var a=ZS(n.alternate,n,Aa);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);fn===0&&(fn=5)}function v0(t,n){do{var a=KS(t.alternate,t);if(a!==null){a.flags&=32767,Et=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=a}while(t!==null);fn=6,Et=null}function x0(t,n,a,o,c,h,S,R,H){t.cancelPendingCommit=null;do pu();while(bn!==0);if((Gt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=kc,tt(t,a,h,S,R,H),t===Jt&&(Et=Jt=null,At=0),Ts=n,rr=t,Ra=a,Jf=h,$f=c,l0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ly(le,function(){return b0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=G.p,G.p=2,S=Gt,Gt|=4;try{QS(t,n,a)}finally{Gt=S,G.p=c,I.T=o}}bn=1,S0(),y0(),M0()}}function S0(){if(bn===1){bn=0;var t=rr,n=Ts,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var c=Gt;Gt|=4;try{e0(n,t);var h=ph,S=sm(t.containerInfo),R=h.focusedElem,H=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&rm(R.ownerDocument.documentElement,R)){if(H!==null&&zc(R)){var ee=H.start,de=H.end;if(de===void 0&&(de=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(de,R.value.length);else{var Se=R.ownerDocument||document,re=Se&&Se.defaultView||window;if(re.getSelection){var ce=re.getSelection(),Qe=R.textContent.length,ot=Math.min(H.start,Qe),Qt=H.end===void 0?ot:Math.min(H.end,Qe);!ce.extend&&ot>Qt&&(S=Qt,Qt=ot,ot=S);var J=am(R,ot),Y=am(R,Qt);if(J&&Y&&(ce.rangeCount!==1||ce.anchorNode!==J.node||ce.anchorOffset!==J.offset||ce.focusNode!==Y.node||ce.focusOffset!==Y.offset)){var $=Se.createRange();$.setStart(J.node,J.offset),ce.removeAllRanges(),ot>Qt?(ce.addRange($),ce.extend(Y.node,Y.offset)):($.setEnd(Y.node,Y.offset),ce.addRange($))}}}}for(Se=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Se.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var ge=Se[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Au=!!dh,ph=dh=null}finally{Gt=c,G.p=o,I.T=a}}t.current=n,bn=2}}function y0(){if(bn===2){bn=0;var t=rr,n=Ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var c=Gt;Gt|=4;try{Zg(t,n.alternate,n)}finally{Gt=c,G.p=o,I.T=a}}bn=3}}function M0(){if(bn===4||bn===3){bn=0,N();var t=rr,n=Ts,a=Ra,o=l0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,Ts=rr=null,E0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ar=null),Ft(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,c=G.p,G.p=2,I.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var R=o[S];h(R.value,{componentStack:R.stack})}}finally{I.T=n,G.p=c}}(Ra&3)!==0&&pu(),Ji(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===eh?Bo++:(Bo=0,eh=t):Bo=0,Ho(0)}}function E0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,So(n)))}function pu(){return S0(),y0(),M0(),b0()}function b0(){if(bn!==5)return!1;var t=rr,n=Jf;Jf=0;var a=Ft(Ra),o=I.T,c=G.p;try{G.p=32>a?32:a,I.T=null,a=$f,$f=null;var h=rr,S=Ra;if(bn=0,Ts=rr=null,Ra=0,(Gt&6)!==0)throw Error(r(331));var R=Gt;if(Gt|=4,r0(h.current),n0(h,h.current,S,a),Gt=R,Ho(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Ae,h)}catch{}return!0}finally{G.p=c,I.T=o,E0(t,n)}}function T0(t,n,a){n=Mi(a,n),n=Lf(t.stateNode,n,2),t=Ja(t,n,2),t!==null&&(et(t,2),Ji(t))}function Yt(t,n,a){if(t.tag===3)T0(t,t,a);else for(;n!==null;){if(n.tag===3){T0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ar===null||!ar.has(o))){t=Mi(a,t),a=Ag(2),o=Ja(n,a,2),o!==null&&(Rg(a,o,n,t),et(o,2),Ji(o));break}}n=n.return}}function ih(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new ey;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Zf=!0,c.add(a),t=ry.bind(null,t,n,a),n.then(t,t))}function ry(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(At&a)===a&&(fn===4||fn===3&&(At&62914560)===At&&300>E()-lu?(Gt&2)===0&&As(t,0):Kf|=a,bs===At&&(bs=0)),Ji(t)}function A0(t,n){n===0&&(n=be()),t=Rr(t,n),t!==null&&(et(t,n),Ji(t))}function sy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),A0(t,a)}function oy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),A0(t,a)}function ly(t,n){return Tt(t,n)}var mu=null,Cs=null,ah=!1,gu=!1,rh=!1,or=0;function Ji(t){t!==Cs&&t.next===null&&(Cs===null?mu=Cs=t:Cs=Cs.next=t),gu=!0,ah||(ah=!0,cy())}function Ho(t,n){if(!rh&&gu){rh=!0;do for(var a=!1,o=mu;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var S=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ge(42|t)+1)-1,h&=c&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,D0(o,h))}else h=At,h=xe(o,o===Jt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Oe(o,h)||(a=!0,D0(o,h));o=o.next}while(a);rh=!1}}function uy(){R0()}function R0(){gu=ah=!1;var t=0;or!==0&&Sy()&&(t=or);for(var n=E(),a=null,o=mu;o!==null;){var c=o.next,h=C0(o,n);h===0?(o.next=null,a===null?mu=c:a.next=c,c===null&&(Cs=a)):(a=o,(t!==0||(h&3)!==0)&&(gu=!0)),o=c}bn!==0&&bn!==5||Ho(t),or!==0&&(or=0)}function C0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Ge(h),R=1<<S,H=c[S];H===-1?((R&a)===0||(R&o)!==0)&&(c[S]=lt(R,n)):H<=n&&(t.expiredLanes|=R),h&=~R}if(n=Jt,a=At,a=xe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&wt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&wt(o),Ft(a)){case 2:case 8:a=ye;break;case 32:a=le;break;case 268435456:a=Le;break;default:a=le}return o=w0.bind(null,t),a=Tt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&wt(o),t.callbackPriority=2,t.callbackNode=null,2}function w0(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(pu()&&t.callbackNode!==a)return null;var o=At;return o=xe(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(c0(t,o,n),C0(t,E()),t.callbackNode!=null&&t.callbackNode===a?w0.bind(null,t):null)}function D0(t,n){if(pu())return null;c0(t,n,!0)}function cy(){My(function(){(Gt&6)!==0?Tt(pe,uy):R0()})}function sh(){if(or===0){var t=ds;t===0&&(t=Be,Be<<=1,(Be&261888)===0&&(Be=256)),or=t}return or}function U0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bl(""+t)}function L0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function fy(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=U0((c[_n]||null).action),S=o.submitter;S&&(n=(n=S[_n]||null)?U0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var R=new Cl("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(or!==0){var H=S?L0(c,S):new FormData(c);Af(a,{pending:!0,data:H,method:c.method,action:h},null,H)}}else typeof h=="function"&&(R.preventDefault(),H=S?L0(c,S):new FormData(c),Af(a,{pending:!0,data:H,method:c.method,action:h},h,H))},currentTarget:c}]})}}for(var oh=0;oh<Vc.length;oh++){var lh=Vc[oh],hy=lh.toLowerCase(),dy=lh[0].toUpperCase()+lh.slice(1);Ii(hy,"on"+dy)}Ii(um,"onAnimationEnd"),Ii(cm,"onAnimationIteration"),Ii(fm,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(wS,"onTransitionRun"),Ii(DS,"onTransitionStart"),Ii(US,"onTransitionCancel"),Ii(hm,"onTransitionEnd"),B("onMouseEnter",["mouseout","mouseover"]),B("onMouseLeave",["mouseout","mouseover"]),B("onPointerEnter",["pointerout","pointerover"]),B("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function N0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],H=R.instance,ee=R.currentTarget;if(R=R.listener,H!==h&&c.isPropagationStopped())break e;h=R,c.currentTarget=ee;try{h(c)}catch(de){Ul(de)}c.currentTarget=null,h=H}else for(S=0;S<o.length;S++){if(R=o[S],H=R.instance,ee=R.currentTarget,R=R.listener,H!==h&&c.isPropagationStopped())break e;h=R,c.currentTarget=ee;try{h(c)}catch(de){Ul(de)}c.currentTarget=null,h=H}}}}function bt(t,n){var a=n[qi];a===void 0&&(a=n[qi]=new Set);var o=t+"__bubble";a.has(o)||(O0(n,t,2,!1),a.add(o))}function uh(t,n,a){var o=0;n&&(o|=4),O0(a,t,o,n)}var _u="_reactListening"+Math.random().toString(36).slice(2);function ch(t){if(!t[_u]){t[_u]=!0,Q.forEach(function(a){a!=="selectionchange"&&(py.has(a)||uh(a,!1,t),uh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[_u]||(n[_u]=!0,uh("selectionchange",!1,n))}}function O0(t,n,a,o){switch(u_(n)){case 2:var c=Vy;break;case 8:c=ky;break;default:c=Th}a=c.bind(null,n,a,t),c=void 0,!wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function fh(t,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===c)break;if(S===4)for(S=o.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;R!==null;){if(S=Ni(R),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){o=h=S;continue e}R=R.parentNode}}o=o.return}Bp(function(){var ee=h,de=Rc(a),Se=[];e:{var re=dm.get(t);if(re!==void 0){var ce=Cl,Qe=t;switch(t){case"keypress":if(Al(a)===0)break e;case"keydown":case"keyup":ce=oS;break;case"focusin":Qe="focus",ce=Nc;break;case"focusout":Qe="blur",ce=Nc;break;case"beforeblur":case"afterblur":ce=Nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=cS;break;case um:case cm:case fm:ce=Jx;break;case hm:ce=hS;break;case"scroll":case"scrollend":ce=qx;break;case"wheel":ce=pS;break;case"copy":case"cut":case"paste":ce=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Xp;break;case"toggle":case"beforetoggle":ce=gS}var ot=(n&4)!==0,Qt=!ot&&(t==="scroll"||t==="scrollend"),J=ot?re!==null?re+"Capture":null:re;ot=[];for(var Y=ee,$;Y!==null;){var ge=Y;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||J===null||(ge=lo(Y,J),ge!=null&&ot.push(Vo(Y,ge,$))),Qt)break;Y=Y.return}0<ot.length&&(re=new ce(re,Qe,null,a,de),Se.push({event:re,listeners:ot}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==Ac&&(Qe=a.relatedTarget||a.fromElement)&&(Ni(Qe)||Qe[ei]))break e;if((ce||re)&&(re=de.window===de?de:(re=de.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(Qe=a.relatedTarget||a.toElement,ce=ee,Qe=Qe?Ni(Qe):null,Qe!==null&&(Qt=u(Qe),ot=Qe.tag,Qe!==Qt||ot!==5&&ot!==27&&ot!==6)&&(Qe=null)):(ce=null,Qe=ee),ce!==Qe)){if(ot=Vp,ge="onMouseLeave",J="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Xp,ge="onPointerLeave",J="onPointerEnter",Y="pointer"),Qt=ce==null?re:li(ce),$=Qe==null?re:li(Qe),re=new ot(ge,Y+"leave",ce,a,de),re.target=Qt,re.relatedTarget=$,ge=null,Ni(de)===ee&&(ot=new ot(J,Y+"enter",Qe,a,de),ot.target=$,ot.relatedTarget=Qt,ge=ot),Qt=ge,ce&&Qe)t:{for(ot=my,J=ce,Y=Qe,$=0,ge=J;ge;ge=ot(ge))$++;ge=0;for(var at=Y;at;at=ot(at))ge++;for(;0<$-ge;)J=ot(J),$--;for(;0<ge-$;)Y=ot(Y),ge--;for(;$--;){if(J===Y||Y!==null&&J===Y.alternate){ot=J;break t}J=ot(J),Y=ot(Y)}ot=null}else ot=null;ce!==null&&P0(Se,re,ce,ot,!1),Qe!==null&&Qt!==null&&P0(Se,Qt,Qe,ot,!0)}}e:{if(re=ee?li(ee):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var It=Jp;else if(Kp(re))if($p)It=AS;else{It=bS;var nt=ES}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ee&&Fi(ee.elementType)&&(It=Jp):It=TS;if(It&&(It=It(t,ee))){Qp(Se,It,a,de);break e}nt&&nt(t,re,ee),t==="focusout"&&ee&&re.type==="number"&&ee.memoizedProps.value!=null&&Un(re,"number",re.value)}switch(nt=ee?li(ee):window,t){case"focusin":(Kp(nt)||nt.contentEditable==="true")&&(rs=nt,Bc=ee,_o=null);break;case"focusout":_o=Bc=rs=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,om(Se,a,de);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":om(Se,a,de)}var mt;if(Pc)e:{switch(t){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else as?jp(t,a)&&(Rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Rt="onCompositionStart");Rt&&(Wp&&a.locale!=="ko"&&(as||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&as&&(mt=Hp()):(Wa=de,Dc="value"in Wa?Wa.value:Wa.textContent,as=!0)),nt=vu(ee,Rt),0<nt.length&&(Rt=new kp(Rt,t,null,a,de),Se.push({event:Rt,listeners:nt}),mt?Rt.data=mt:(mt=Zp(a),mt!==null&&(Rt.data=mt)))),(mt=vS?xS(t,a):SS(t,a))&&(Rt=vu(ee,"onBeforeInput"),0<Rt.length&&(nt=new kp("onBeforeInput","beforeinput",null,a,de),Se.push({event:nt,listeners:Rt}),nt.data=mt)),fy(Se,t,ee,a,de)}N0(Se,n)})}function Vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function vu(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=lo(t,a),c!=null&&o.unshift(Vo(t,c,h)),c=lo(t,n),c!=null&&o.push(Vo(t,c,h))),t.tag===3)return o;t=t.return}return[]}function my(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function P0(t,n,a,o,c){for(var h=n._reactName,S=[];a!==null&&a!==o;){var R=a,H=R.alternate,ee=R.stateNode;if(R=R.tag,H!==null&&H===o)break;R!==5&&R!==26&&R!==27||ee===null||(H=ee,c?(ee=lo(a,h),ee!=null&&S.unshift(Vo(a,ee,H))):c||(ee=lo(a,h),ee!=null&&S.push(Vo(a,ee,H)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var gy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function F0(t){return(typeof t=="string"?t:""+t).replace(gy,`
`).replace(_y,"")}function I0(t,n){return n=F0(n),F0(t)===n}function Kt(t,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||En(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&En(t,""+o);break;case"className":Ke(t,"class",o);break;case"tabIndex":Ke(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ke(t,a,o);break;case"style":ts(t,o,h);break;case"data":if(n!=="object"){Ke(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=bl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Kt(t,n,"name",c.name,c,null),Kt(t,n,"formEncType",c.formEncType,c,null),Kt(t,n,"formMethod",c.formMethod,c,null),Kt(t,n,"formTarget",c.formTarget,c,null)):(Kt(t,n,"encType",c.encType,c,null),Kt(t,n,"method",c.method,c,null),Kt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=bl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ha);break;case"onScroll":o!=null&&bt("scroll",t);break;case"onScrollEnd":o!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=bl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":bt("beforetoggle",t),bt("toggle",t),He(t,"popover",o);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":He(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wx.get(a)||a,He(t,a,o))}}function hh(t,n,a,o,c,h){switch(a){case"style":ts(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?En(t,o):(typeof o=="number"||typeof o=="bigint")&&En(t,""+o);break;case"onScroll":o!=null&&bt("scroll",t);break;case"onScrollEnd":o!=null&&bt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ue.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=t[_n]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):He(t,a,o)}}}function zn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,h,S,a,null)}}c&&Kt(t,n,"srcSet",a.srcSet,a,null),o&&Kt(t,n,"src",a.src,a,null);return;case"input":bt("invalid",t);var R=h=S=c=null,H=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":c=de;break;case"type":S=de;break;case"checked":H=de;break;case"defaultChecked":ee=de;break;case"value":h=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Kt(t,n,o,de,a,null)}}fa(t,h,R,H,ee,S,c,!1);return;case"select":bt("invalid",t),o=S=h=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Kt(t,n,c,R,a,null)}n=h,a=S,t.multiple=!!o,n!=null?Si(t,!!o,n,!1):a!=null&&Si(t,!!o,a,!0);return;case"textarea":bt("invalid",t),h=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":c=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Kt(t,n,S,R,a,null)}Ln(t,o,c,h);return;case"option":for(H in a)a.hasOwnProperty(H)&&(o=a[H],o!=null)&&(H==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Kt(t,n,H,o,a,null));return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(o=0;o<Go.length;o++)bt(Go[o],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,ee,o,a,null)}return;default:if(Fi(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&hh(t,n,de,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Kt(t,n,R,o,a,null))}function vy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,S=null,R=null,H=null,ee=null,de=null;for(ce in a){var Se=a[ce];if(a.hasOwnProperty(ce)&&Se!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=Se;default:o.hasOwnProperty(ce)||Kt(t,n,ce,null,o,Se)}}for(var re in o){var ce=o[re];if(Se=a[re],o.hasOwnProperty(re)&&(ce!=null||Se!=null))switch(re){case"type":h=ce;break;case"name":c=ce;break;case"checked":ee=ce;break;case"defaultChecked":de=ce;break;case"value":S=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==Se&&Kt(t,n,re,ce,o,Se)}}Dn(t,S,R,H,ee,de,h,c);return;case"select":ce=S=R=re=null;for(h in a)if(H=a[h],a.hasOwnProperty(h)&&H!=null)switch(h){case"value":break;case"multiple":ce=H;default:o.hasOwnProperty(h)||Kt(t,n,h,null,o,H)}for(c in o)if(h=o[c],H=a[c],o.hasOwnProperty(c)&&(h!=null||H!=null))switch(c){case"value":re=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==H&&Kt(t,n,c,h,o,H)}n=R,a=S,o=ce,re!=null?Si(t,!!a,re,!1):!!o!=!!a&&(n!=null?Si(t,!!a,n,!0):Si(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,o,c)}for(S in o)if(c=o[S],h=a[S],o.hasOwnProperty(S)&&(c!=null||h!=null))switch(S){case"value":re=c;break;case"defaultValue":ce=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Kt(t,n,S,c,o,h)}Xt(t,re,ce);return;case"option":for(var Qe in a)re=a[Qe],a.hasOwnProperty(Qe)&&re!=null&&!o.hasOwnProperty(Qe)&&(Qe==="selected"?t.selected=!1:Kt(t,n,Qe,null,o,re));for(H in o)re=o[H],ce=a[H],o.hasOwnProperty(H)&&re!==ce&&(re!=null||ce!=null)&&(H==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":Kt(t,n,H,re,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)re=a[ot],a.hasOwnProperty(ot)&&re!=null&&!o.hasOwnProperty(ot)&&Kt(t,n,ot,null,o,re);for(ee in o)if(re=o[ee],ce=a[ee],o.hasOwnProperty(ee)&&re!==ce&&(re!=null||ce!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:Kt(t,n,ee,re,o,ce)}return;default:if(Fi(n)){for(var Qt in a)re=a[Qt],a.hasOwnProperty(Qt)&&re!==void 0&&!o.hasOwnProperty(Qt)&&hh(t,n,Qt,void 0,o,re);for(de in o)re=o[de],ce=a[de],!o.hasOwnProperty(de)||re===ce||re===void 0&&ce===void 0||hh(t,n,de,re,o,ce);return}}for(var J in a)re=a[J],a.hasOwnProperty(J)&&re!=null&&!o.hasOwnProperty(J)&&Kt(t,n,J,null,o,re);for(Se in o)re=o[Se],ce=a[Se],!o.hasOwnProperty(Se)||re===ce||re==null&&ce==null||Kt(t,n,Se,re,o,ce)}function z0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,S=c.initiatorType,R=c.duration;if(h&&R&&z0(S)){for(S=0,R=c.responseEnd,o+=1;o<a.length;o++){var H=a[o],ee=H.startTime;if(ee>R)break;var de=H.transferSize,Se=H.initiatorType;de&&z0(Se)&&(H=H.responseEnd,S+=de*(H<R?1:(R-ee)/(H-ee)))}if(--o,n+=8*(h+S)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var dh=null,ph=null;function xu(t){return t.nodeType===9?t:t.ownerDocument}function B0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function mh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gh=null;function Sy(){var t=window.event;return t&&t.type==="popstate"?t===gh?!1:(gh=t,!0):(gh=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,My=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch(Ey)}:G0;function Ey(t){setTimeout(function(){throw t})}function lr(t){return t==="head"}function k0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),Ls(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")ko(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ko(a);for(var h=a.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[ji]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&ko(t.ownerDocument.body);a=c}while(a);Ls(n)}function X0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function _h(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_h(a),Xa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function by(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ji])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ri(t.nextSibling),t===null)break}return null}function Ty(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ri(t.nextSibling),t===null))return null;return t}function W0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ri(t.nextSibling),t===null))return null;return t}function vh(t){return t.data==="$?"||t.data==="$~"}function xh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ay(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Sh=null;function Y0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function q0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function j0(t,n,a){switch(n=xu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ko(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Xa(t)}var Ci=new Map,Z0=new Set;function Su(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ca=G.d;G.d={f:Ry,r:Cy,D:wy,C:Dy,L:Uy,m:Ly,X:Oy,S:Ny,M:Py};function Ry(){var t=Ca.f(),n=fu();return t||n}function Cy(t){var n=Oi(t);n!==null&&n.tag===5&&n.type==="form"?hg(n):Ca.r(t)}var ws=typeof document>"u"?null:document;function K0(t,n,a){var o=ws;if(o&&typeof n=="string"&&n){var c=ft(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Z0.has(c)||(Z0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),zn(n,"link",t),A(n),o.head.appendChild(n)))}}function wy(t){Ca.D(t),K0("dns-prefetch",t,null)}function Dy(t,n){Ca.C(t,n),K0("preconnect",t,n)}function Uy(t,n,a){Ca.L(t,n,a);var o=ws;if(o&&t&&n){var c='link[rel="preload"][as="'+ft(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+ft(a.imageSizes)+'"]')):c+='[href="'+ft(t)+'"]';var h=c;switch(n){case"style":h=Ds(t);break;case"script":h=Us(t)}Ci.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ci.set(h,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Xo(h))||n==="script"&&o.querySelector(Wo(h))||(n=o.createElement("link"),zn(n,"link",t),A(n),o.head.appendChild(n)))}}function Ly(t,n){Ca.m(t,n);var a=ws;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ft(o)+'"][href="'+ft(t)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Us(t)}if(!Ci.has(h)&&(t=g({rel:"modulepreload",href:t},n),Ci.set(h,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wo(h)))return}o=a.createElement("link"),zn(o,"link",t),A(o),a.head.appendChild(o)}}}function Ny(t,n,a){Ca.S(t,n,a);var o=ws;if(o&&t){var c=Pi(o).hoistableStyles,h=Ds(t);n=n||"default";var S=c.get(h);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Xo(h)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ci.get(h))&&yh(t,a);var H=S=o.createElement("link");A(H),zn(H,"link",t),H._p=new Promise(function(ee,de){H.onload=ee,H.onerror=de}),H.addEventListener("load",function(){R.loading|=1}),H.addEventListener("error",function(){R.loading|=2}),R.loading|=4,yu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},c.set(h,S)}}}function Oy(t,n){Ca.X(t,n);var a=ws;if(a&&t){var o=Pi(a).hoistableScripts,c=Us(t),h=o.get(c);h||(h=a.querySelector(Wo(c)),h||(t=g({src:t,async:!0},n),(n=Ci.get(c))&&Mh(t,n),h=a.createElement("script"),A(h),zn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Py(t,n){Ca.M(t,n);var a=ws;if(a&&t){var o=Pi(a).hoistableScripts,c=Us(t),h=o.get(c);h||(h=a.querySelector(Wo(c)),h||(t=g({src:t,async:!0,type:"module"},n),(n=Ci.get(c))&&Mh(t,n),h=a.createElement("script"),A(h),zn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Q0(t,n,a,o){var c=(c=ae.current)?Su(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ds(a.href),a=Pi(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ds(a.href);var h=Pi(c).hoistableStyles,S=h.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=c.querySelector(Xo(t)))&&!h._p&&(S.instance=h,S.state.loading=5),Ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(t,a),h||Fy(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Us(a),a=Pi(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ds(t){return'href="'+ft(t)+'"'}function Xo(t){return'link[rel="stylesheet"]['+t+"]"}function J0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Fy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),zn(n,"link",a),A(n),t.head.appendChild(n))}function Us(t){return'[src="'+ft(t)+'"]'}function Wo(t){return"script[async]"+t}function $0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ft(a.href)+'"]');if(o)return n.instance=o,A(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),A(o),zn(o,"style",c),yu(o,a.precedence,t),n.instance=o;case"stylesheet":c=Ds(a.href);var h=t.querySelector(Xo(c));if(h)return n.state.loading|=4,n.instance=h,A(h),h;o=J0(a),(c=Ci.get(c))&&yh(o,c),h=(t.ownerDocument||t).createElement("link"),A(h);var S=h;return S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),zn(h,"link",o),n.state.loading|=4,yu(h,a.precedence,t),n.instance=h;case"script":return h=Us(a.src),(c=t.querySelector(Wo(h)))?(n.instance=c,A(c),c):(o=a,(c=Ci.get(h))&&(o=g({},a),Mh(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),A(c),zn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,yu(o,a.precedence,t));return n.instance}function yu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)h=R;else if(h!==c)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function yh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Mh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Mu=null;function e_(t,n,a){if(Mu===null){var o=new Map,c=Mu=new Map;c.set(a,o)}else c=Mu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var h=a[c];if(!(h[ji]||h[ln]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var R=o.get(S);R?R.push(h):o.set(S,[h])}}return o}function t_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Iy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ds(o.href),h=n.querySelector(Xo(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Eu.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,A(h);return}h=n.ownerDocument||n,o=J0(o),(c=Ci.get(c))&&yh(o,c),h=h.createElement("link"),A(h);var S=h;S._p=new Promise(function(R,H){S.onload=R,S.onerror=H}),zn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Eu.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Eh=0;function By(t,n){return t.stylesheets&&t.count===0&&Tu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Tu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Eh===0&&(Eh=62500*xy());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Tu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Eh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Eu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var bu=null;function Tu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,bu=new Map,n.forEach(Hy,t),bu=null,Eu.call(t))}function Hy(t,n){if(!(n.state.loading&4)){var a=bu.get(t);if(a)var o=a.get(null);else{a=new Map,bu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var S=c[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,c),a.set(S,c),this.count++,o=Eu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Yo={$$typeof:U,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function Gy(t,n,a,o,c,h,S,R,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function i_(t,n,a,o,c,h,S,R,H,ee,de,Se){return t=new Gy(t,n,a,S,H,ee,de,Se,R),n=1,h===!0&&(n|=24),h=ci(3,null,null,n),t.current=h,h.stateNode=t,n=tf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},sf(h),t}function a_(t){return t?(t=ls,t):ls}function r_(t,n,a,o,c,h){c=a_(c),o.context===null?o.context=c:o.pendingContext=c,o=Qa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ja(t,o,n),a!==null&&(si(a,t,n),bo(a,t,n))}function s_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bh(t,n){s_(t,n),(t=t.alternate)&&s_(t,n)}function o_(t){if(t.tag===13||t.tag===31){var n=Rr(t,67108864);n!==null&&si(n,t,67108864),bh(t,67108864)}}function l_(t){if(t.tag===13||t.tag===31){var n=mi();n=Mt(n);var a=Rr(t,n);a!==null&&si(a,t,n),bh(t,n)}}var Au=!0;function Vy(t,n,a,o){var c=I.T;I.T=null;var h=G.p;try{G.p=2,Th(t,n,a,o)}finally{G.p=h,I.T=c}}function ky(t,n,a,o){var c=I.T;I.T=null;var h=G.p;try{G.p=8,Th(t,n,a,o)}finally{G.p=h,I.T=c}}function Th(t,n,a,o){if(Au){var c=Ah(o);if(c===null)fh(t,n,o,Ru,a),c_(t,o);else if(Wy(c,t,n,a,o))o.stopPropagation();else if(c_(t,o),n&4&&-1<Xy.indexOf(t)){for(;c!==null;){var h=Oi(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ee(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var H=1<<31-Ge(S);R.entanglements[1]|=H,S&=~H}Ji(h),(Gt&6)===0&&(uu=E()+500,Ho(0))}}break;case 31:case 13:R=Rr(h,2),R!==null&&si(R,h,2),fu(),bh(h,2)}if(h=Ah(o),h===null&&fh(t,n,o,Ru,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else fh(t,n,o,null,a)}}function Ah(t){return t=Rc(t),Rh(t)}var Ru=null;function Rh(t){if(Ru=null,t=Ni(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ru=t,null}function u_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pe:return 2;case ye:return 8;case le:case $e:return 32;case Le:return 268435456;default:return 32}default:return 32}}var Ch=!1,ur=null,cr=null,fr=null,qo=new Map,jo=new Map,hr=[],Xy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(t,n){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Zo(t,n,a,o,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Oi(n),n!==null&&o_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Wy(t,n,a,o,c){switch(n){case"focusin":return ur=Zo(ur,t,n,a,o,c),!0;case"dragenter":return cr=Zo(cr,t,n,a,o,c),!0;case"mouseover":return fr=Zo(fr,t,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return qo.set(h,Zo(qo.get(h)||null,t,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,jo.set(h,Zo(jo.get(h)||null,t,n,a,o,c)),!0}return!1}function f_(t){var n=Ni(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,gn(t.priority,function(){l_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,gn(t.priority,function(){l_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Cu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ah(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Ac=o,a.target.dispatchEvent(o),Ac=null}else return n=Oi(a),n!==null&&o_(n),t.blockedOn=a,!1;n.shift()}return!0}function h_(t,n,a){Cu(t)&&a.delete(n)}function Yy(){Ch=!1,ur!==null&&Cu(ur)&&(ur=null),cr!==null&&Cu(cr)&&(cr=null),fr!==null&&Cu(fr)&&(fr=null),qo.forEach(h_),jo.forEach(h_)}function wu(t,n){t.blockedOn===n&&(t.blockedOn=null,Ch||(Ch=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Yy)))}var Du=null;function d_(t){Du!==t&&(Du=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Du===t&&(Du=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Rh(o||a)===null)continue;break}var h=Oi(a);h!==null&&(t.splice(n,3),n-=3,Af(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ls(t){function n(H){return wu(H,t)}ur!==null&&wu(ur,t),cr!==null&&wu(cr,t),fr!==null&&wu(fr,t),qo.forEach(n),jo.forEach(n);for(var a=0;a<hr.length;a++){var o=hr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)f_(a),a.blockedOn===null&&hr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],S=c[_n]||null;if(typeof h=="function")S||d_(a);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(c=h,S=h[_n]||null)R=S.formAction;else if(Rh(c)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),d_(a)}}}function p_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function wh(t){this._internalRoot=t}Uu.prototype.render=wh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=mi();r_(a,o,t,n,null,null)},Uu.prototype.unmount=wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r_(t.current,2,null,t,null,null),fu(),n[ei]=null}};function Uu(t){this._internalRoot=t}Uu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Vt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<hr.length&&n!==0&&n<hr[a].priority;a++);hr.splice(a,0,t),a===0&&f_(t)}};var m_=e.version;if(m_!=="19.2.3")throw Error(r(527,m_,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var qy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{Ae=Lu.inject(qy),De=Lu}catch{}}return Ko.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Mg,h=Eg,S=bg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=i_(t,1,!1,null,null,a,o,null,c,h,S,p_),t[ei]=n.current,ch(t),new wh(n)},Ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",h=Mg,S=Eg,R=bg,H=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=i_(t,1,!0,n,a??null,o,c,H,h,S,R,p_),n.context=a_(null),a=n.current,o=mi(),o=Mt(o),c=Qa(o),c.callback=null,Ja(a,c,o),a=o,n.current.lanes=a,et(n,a),Ji(n),t[ei]=n.current,ch(t),new Uu(n)},Ko.version="19.2.3",Ko}var E_;function tM(){if(E_)return Uh.exports;E_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Uh.exports=eM(),Uh.exports}var nM=tM();const iM=Gv(nM);var b_="popstate";function aM(s={}){function e(r,l){let{pathname:u,search:f,hash:d}=r.location;return _d("",{pathname:u,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:fl(l)}return sM(e,i,null,s)}function un(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Yi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rM(){return Math.random().toString(36).substring(2,10)}function T_(s,e){return{usr:s.state,key:s.key,idx:e}}function _d(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?io(e):e,state:i,key:e&&e.key||r||rM()}}function fl({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function io(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function sM(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function g(){d="POP";let y=_(),v=y==null?null:y-p;p=y,m&&m({action:d,location:T.location,delta:v})}function x(y,v){d="PUSH";let w=_d(T.location,y,v);p=_()+1;let U=T_(w,p),L=T.createHref(w);try{f.pushState(U,"",L)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(L)}u&&m&&m({action:d,location:T.location,delta:1})}function M(y,v){d="REPLACE";let w=_d(T.location,y,v);p=_();let U=T_(w,p),L=T.createHref(w);f.replaceState(U,"",L),u&&m&&m({action:d,location:T.location,delta:0})}function b(y){return oM(y)}let T={get action(){return d},get location(){return s(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(b_,g),m=y,()=>{l.removeEventListener(b_,g),m=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let v=b(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:M,go(y){return f.go(y)}};return T}function oM(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),un(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:fl(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Vv(s,e,i="/"){return lM(s,e,i,!1)}function lM(s,e,i,r){let l=typeof e=="string"?io(e):e,u=Ba(l.pathname||"/",i);if(u==null)return null;let f=kv(s);uM(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=SM(u);d=vM(f[m],p,r)}return d}function kv(s,e=[],i=[],r="",l=!1){let u=(f,d,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(r)&&m)return;un(_.relativePath.startsWith(r),`Absolute route path "${_.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(r.length)}let g=Fa([r,_.relativePath]),x=i.concat(_);f.children&&f.children.length>0&&(un(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),kv(f.children,e,x,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:gM(g,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let m of Xv(f.path))u(f,d,!0,m)}),e}function Xv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=Xv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function uM(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:_M(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var cM=/^:[\w-]+$/,fM=3,hM=2,dM=1,pM=10,mM=-2,A_=s=>s==="*";function gM(s,e){let i=s.split("/"),r=i.length;return i.some(A_)&&(r+=mM),e&&(r+=hM),i.filter(l=>!A_(l)).reduce((l,u)=>l+(cM.test(u)?fM:u===""?dM:pM),r)}function _M(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function vM(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,_=u==="/"?e:e.slice(u.length)||"/",g=dc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),x=m.route;if(!g&&p&&i&&!r[r.length-1].route.index&&(g=dc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Fa([u,g.pathname]),pathnameBase:bM(Fa([u,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(u=Fa([u,g.pathnameBase]))}return f}function dc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=xM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:_,isOptional:g},x)=>{if(_==="*"){let b=d[x]||"";f=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const M=d[x];return g&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function xM(s,e=!1,i=!0){Yi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function SM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Yi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Ba(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}var Wv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yM=s=>Wv.test(s);function MM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?io(s):s,u;if(i)if(yM(i))u=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),Yi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?u=R_(i.substring(1),"/"):u=R_(i,e)}else u=e;return{pathname:u,search:TM(r),hash:AM(l)}}function R_(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ph(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function EM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Yv(s){let e=EM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function qv(s,e,i,r=!1){let l;typeof s=="string"?l=io(s):(l={...s},un(!l.pathname||!l.pathname.includes("?"),Ph("?","pathname","search",l)),un(!l.pathname||!l.pathname.includes("#"),Ph("#","pathname","hash",l)),un(!l.search||!l.search.includes("#"),Ph("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),g-=1;l.pathname=x.join("/")}d=g>=0?e[g]:"/"}let m=MM(l,d),p=f&&f!=="/"&&f.endsWith("/"),_=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var Fa=s=>s.join("/").replace(/\/\/+/g,"/"),bM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),TM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,AM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,RM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function CM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function wM(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var jv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zv(s,e){let i=s;if(typeof i!="string"||!Wv.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(jv)try{let u=new URL(window.location.href),f=i.startsWith("//")?new URL(u.protocol+i):new URL(i),d=Ba(f.pathname,e);f.origin===u.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{Yi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Kv=["POST","PUT","PATCH","DELETE"];new Set(Kv);var DM=["GET",...Kv];new Set(DM);var ao=K.createContext(null);ao.displayName="DataRouter";var xc=K.createContext(null);xc.displayName="DataRouterState";var UM=K.createContext(!1),Qv=K.createContext({isTransitioning:!1});Qv.displayName="ViewTransition";var LM=K.createContext(new Map);LM.displayName="Fetchers";var NM=K.createContext(null);NM.displayName="Await";var Ui=K.createContext(null);Ui.displayName="Navigation";var _l=K.createContext(null);_l.displayName="Location";var Va=K.createContext({outlet:null,matches:[],isDataRoute:!1});Va.displayName="Route";var vp=K.createContext(null);vp.displayName="RouteError";var Jv="REACT_ROUTER_ERROR",OM="REDIRECT",PM="ROUTE_ERROR_RESPONSE";function FM(s){if(s.startsWith(`${Jv}:${OM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function IM(s){if(s.startsWith(`${Jv}:${PM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new RM(e.status,e.statusText,e.data)}catch{}}function zM(s,{relative:e}={}){un(vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=K.useContext(Ui),{hash:l,pathname:u,search:f}=xl(s,{relative:e}),d=u;return i!=="/"&&(d=u==="/"?i:Fa([i,u])),r.createHref({pathname:d,search:f,hash:l})}function vl(){return K.useContext(_l)!=null}function $r(){return un(vl(),"useLocation() may be used only in the context of a <Router> component."),K.useContext(_l).location}var $v="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ex(s){K.useContext(Ui).static||K.useLayoutEffect(s)}function tx(){let{isDataRoute:s}=K.useContext(Va);return s?QM():BM()}function BM(){un(vl(),"useNavigate() may be used only in the context of a <Router> component.");let s=K.useContext(ao),{basename:e,navigator:i}=K.useContext(Ui),{matches:r}=K.useContext(Va),{pathname:l}=$r(),u=JSON.stringify(Yv(r)),f=K.useRef(!1);return ex(()=>{f.current=!0}),K.useCallback((m,p={})=>{if(Yi(f.current,$v),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=qv(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Fa([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,u,l,s])}K.createContext(null);function xl(s,{relative:e}={}){let{matches:i}=K.useContext(Va),{pathname:r}=$r(),l=JSON.stringify(Yv(i));return K.useMemo(()=>qv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function HM(s,e){return nx(s,e)}function nx(s,e,i,r,l){un(vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=K.useContext(Ui),{matches:f}=K.useContext(Va),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",_=d?d.pathnameBase:"/",g=d&&d.route;{let w=g&&g.path||"";ax(p,!g||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let x=$r(),M;if(e){let w=typeof e=="string"?io(e):e;un(_==="/"||w.pathname?.startsWith(_),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${w.pathname}" was given in the \`location\` prop.`),M=w}else M=x;let b=M.pathname||"/",T=b;if(_!=="/"){let w=_.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=Vv(s,{pathname:T});Yi(g||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Yi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=WM(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:Fa([_,u.encodeLocation?u.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?_:Fa([_,u.encodeLocation?u.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),f,i,r,l);return e&&v?K.createElement(_l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},v):v}function GM(){let s=KM(),e=CM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=K.createElement(K.Fragment,null,K.createElement("p",null,"💿 Hey developer 👋"),K.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",K.createElement("code",{style:u},"ErrorBoundary")," or"," ",K.createElement("code",{style:u},"errorElement")," prop on your route.")),K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},e),i?K.createElement("pre",{style:l},i):null,f)}var VM=K.createElement(GM,null),ix=class extends K.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=IM(s.digest);i&&(s=i)}let e=s!==void 0?K.createElement(Va.Provider,{value:this.props.routeContext},K.createElement(vp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?K.createElement(kM,{error:s},e):e}};ix.contextType=UM;var Fh=new WeakMap;function kM({children:s,error:e}){let{basename:i}=K.useContext(Ui);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=FM(e.digest);if(r){let l=Fh.get(e);if(l)throw l;let u=Zv(r.location,i);if(jv&&!Fh.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Fh.set(e,f),f}return K.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return s}function XM({routeContext:s,match:e,children:i}){let r=K.useContext(ao);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),K.createElement(Va.Provider,{value:s},i)}function WM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,f=i?.errors;if(f!=null){let _=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);un(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,_+1))}let d=!1,m=-1;if(i)for(let _=0;_<u.length;_++){let g=u[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:x,errors:M}=i,b=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!M||M[g.route.id]===void 0);if(g.route.lazy||b){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let p=i&&r?(_,g)=>{r(_,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:wM(i.matches),errorInfo:g})}:void 0;return u.reduceRight((_,g,x)=>{let M,b=!1,T=null,y=null;i&&(M=f&&g.route.id?f[g.route.id]:void 0,T=g.route.errorElement||VM,d&&(m<0&&x===0?(ax("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):m===x&&(b=!0,y=g.route.hydrateFallbackElement||null)));let v=e.concat(u.slice(0,x+1)),w=()=>{let U;return M?U=T:b?U=y:g.route.Component?U=K.createElement(g.route.Component,null):g.route.element?U=g.route.element:U=_,K.createElement(XM,{match:g,routeContext:{outlet:_,matches:v,isDataRoute:i!=null},children:U})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?K.createElement(ix,{location:i.location,revalidation:i.revalidation,component:T,error:M,children:w(),routeContext:{outlet:null,matches:v,isDataRoute:!0},onError:p}):w()},null)}function xp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YM(s){let e=K.useContext(ao);return un(e,xp(s)),e}function qM(s){let e=K.useContext(xc);return un(e,xp(s)),e}function jM(s){let e=K.useContext(Va);return un(e,xp(s)),e}function Sp(s){let e=jM(s),i=e.matches[e.matches.length-1];return un(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function ZM(){return Sp("useRouteId")}function KM(){let s=K.useContext(vp),e=qM("useRouteError"),i=Sp("useRouteError");return s!==void 0?s:e.errors?.[i]}function QM(){let{router:s}=YM("useNavigate"),e=Sp("useNavigate"),i=K.useRef(!1);return ex(()=>{i.current=!0}),K.useCallback(async(l,u={})=>{Yi(i.current,$v),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var C_={};function ax(s,e,i){!e&&!C_[s]&&(C_[s]=!0,Yi(!1,i))}K.memo(JM);function JM({routes:s,future:e,state:i,onError:r}){return nx(s,void 0,i,r,e)}function ac(s){un(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $M({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,unstable_useTransitions:f}){un(!vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),m=K.useMemo(()=>({basename:d,navigator:l,static:u,unstable_useTransitions:f,future:{}}),[d,l,u,f]);typeof i=="string"&&(i=io(i));let{pathname:p="/",search:_="",hash:g="",state:x=null,key:M="default"}=i,b=K.useMemo(()=>{let T=Ba(p,d);return T==null?null:{location:{pathname:T,search:_,hash:g,state:x,key:M},navigationType:r}},[d,p,_,g,x,M,r]);return Yi(b!=null,`<Router basename="${d}"> is not able to match the URL "${p}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:K.createElement(Ui.Provider,{value:m},K.createElement(_l.Provider,{children:e,value:b}))}function eE({children:s,location:e}){return HM(vd(s),e)}function vd(s,e=[]){let i=[];return K.Children.forEach(s,(r,l)=>{if(!K.isValidElement(r))return;let u=[...e,l];if(r.type===K.Fragment){i.push.apply(i,vd(r.props.children,u));return}un(r.type===ac,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),un(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=vd(r.props.children,u)),i.push(f)}),i}var rc="get",sc="application/x-www-form-urlencoded";function Sc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function tE(s){return Sc(s)&&s.tagName.toLowerCase()==="button"}function nE(s){return Sc(s)&&s.tagName.toLowerCase()==="form"}function iE(s){return Sc(s)&&s.tagName.toLowerCase()==="input"}function aE(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function rE(s,e){return s.button===0&&(!e||e==="_self")&&!aE(s)}var Nu=null;function sE(){if(Nu===null)try{new FormData(document.createElement("form"),0),Nu=!1}catch{Nu=!0}return Nu}var oE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ih(s){return s!=null&&!oE.has(s)?(Yi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sc}"`),null):s}function lE(s,e){let i,r,l,u,f;if(nE(s)){let d=s.getAttribute("action");r=d?Ba(d,e):null,i=s.getAttribute("method")||rc,l=Ih(s.getAttribute("enctype"))||sc,u=new FormData(s)}else if(tE(s)||iE(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?Ba(m,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||rc,l=Ih(s.getAttribute("formenctype"))||Ih(d.getAttribute("enctype"))||sc,u=new FormData(d,s),!sE()){let{name:p,type:_,value:g}=s;if(_==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,g)}}else{if(Sc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=rc,r=null,l=sc,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function uE(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&Ba(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${r}`,l}async function cE(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function fE(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function hE(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await cE(u,i);return f.links?f.links():[]}return[]}));return gE(r.flat(1).filter(fE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function w_(s,e,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):u==="data"?e.filter((m,p)=>{let _=r.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function dE(s,e,{includeHydrateFallback:i}={}){return pE(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function pE(s){return[...new Set(s)]}function mE(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function gE(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(mE(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function rx(){let s=K.useContext(ao);return yp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function _E(){let s=K.useContext(xc);return yp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Mp=K.createContext(void 0);Mp.displayName="FrameworkContext";function sx(){let s=K.useContext(Mp);return yp(s,"You must render this element inside a <HydratedRouter> element"),s}function vE(s,e){let i=K.useContext(Mp),[r,l]=K.useState(!1),[u,f]=K.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:g}=e,x=K.useRef(null);K.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=v=>{v.forEach(w=>{f(w.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),K.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Qo(d,M),onBlur:Qo(m,b),onMouseEnter:Qo(p,M),onMouseLeave:Qo(_,b),onTouchStart:Qo(g,M)}]:[!1,x,{}]}function Qo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function xE({page:s,...e}){let{router:i}=rx(),r=K.useMemo(()=>Vv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?K.createElement(yE,{page:s,matches:r,...e}):null}function SE(s){let{manifest:e,routeModules:i}=sx(),[r,l]=K.useState([]);return K.useEffect(()=>{let u=!1;return hE(s,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,e,i]),r}function yE({page:s,matches:e,...i}){let r=$r(),{future:l,manifest:u,routeModules:f}=sx(),{basename:d}=rx(),{loaderData:m,matches:p}=_E(),_=K.useMemo(()=>w_(s,e,p,u,r,"data"),[s,e,p,u,r]),g=K.useMemo(()=>w_(s,e,p,u,r,"assets"),[s,e,p,u,r]),x=K.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let T=new Set,y=!1;if(e.forEach(w=>{let U=u.routes[w.route.id];!U||!U.hasLoader||(!_.some(L=>L.route.id===w.route.id)&&w.route.id in m&&f[w.route.id]?.shouldRevalidate||U.hasClientLoader?y=!0:T.add(w.route.id))}),T.size===0)return[];let v=uE(s,d,l.unstable_trailingSlashAwareDataRequests,"data");return y&&T.size>0&&v.searchParams.set("_routes",e.filter(w=>T.has(w.route.id)).map(w=>w.route.id).join(",")),[v.pathname+v.search]},[d,l.unstable_trailingSlashAwareDataRequests,m,r,u,_,e,s,f]),M=K.useMemo(()=>dE(g,u),[g,u]),b=SE(g);return K.createElement(K.Fragment,null,x.map(T=>K.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),M.map(T=>K.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),b.map(({key:T,link:y})=>K.createElement("link",{key:T,nonce:i.nonce,...y})))}function ME(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var EE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{EE&&(window.__reactRouterVersion="7.12.0")}catch{}function bE({basename:s,children:e,unstable_useTransitions:i,window:r}){let l=K.useRef();l.current==null&&(l.current=aM({window:r,v5Compat:!0}));let u=l.current,[f,d]=K.useState({action:u.action,location:u.location}),m=K.useCallback(p=>{i===!1?d(p):K.startTransition(()=>d(p))},[i]);return K.useLayoutEffect(()=>u.listen(m),[u,m]),K.createElement($M,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:i})}var ox=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ep=K.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:m,to:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b){let{basename:T,unstable_useTransitions:y}=K.useContext(Ui),v=typeof p=="string"&&ox.test(p),w=Zv(p,T);p=w.to;let U=zM(p,{relative:l}),[L,P,z]=vE(r,M),F=CE(p,{replace:f,state:d,target:m,preventScrollReset:_,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:y});function Z(D){e&&e(D),D.defaultPrevented||F(D)}let C=K.createElement("a",{...M,...z,href:w.absoluteURL||U,onClick:w.isExternal||u?e:Z,ref:ME(b,P),target:m,"data-discover":!v&&i==="render"?"true":void 0});return L&&!v?K.createElement(K.Fragment,null,C,K.createElement(xE,{page:U})):C});Ep.displayName="Link";var TE=K.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:m,...p},_){let g=xl(f,{relative:p.relative}),x=$r(),M=K.useContext(xc),{navigator:b,basename:T}=K.useContext(Ui),y=M!=null&&NE(g)&&d===!0,v=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,w=x.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(w=w.toLowerCase(),U=U?U.toLowerCase():null,v=v.toLowerCase()),U&&T&&(U=Ba(U,T)||U);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let P=w===v||!l&&w.startsWith(v)&&w.charAt(L)==="/",z=U!=null&&(U===v||!l&&U.startsWith(v)&&U.charAt(v.length)==="/"),F={isActive:P,isPending:z,isTransitioning:y},Z=P?e:void 0,C;typeof r=="function"?C=r(F):C=[r,P?"active":null,z?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof u=="function"?u(F):u;return K.createElement(Ep,{...p,"aria-current":Z,className:C,ref:_,style:D,to:f,viewTransition:d},typeof m=="function"?m(F):m)});TE.displayName="NavLink";var AE=K.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:f=rc,action:d,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x,...M},b)=>{let{unstable_useTransitions:T}=K.useContext(Ui),y=UE(),v=LE(d,{relative:p}),w=f.toLowerCase()==="get"?"get":"post",U=typeof d=="string"&&ox.test(d),L=P=>{if(m&&m(P),P.defaultPrevented)return;P.preventDefault();let z=P.nativeEvent.submitter,F=z?.getAttribute("formmethod")||f,Z=()=>y(z||P.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:l,state:u,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:x});T&&i!==!1?K.startTransition(()=>Z()):Z()};return K.createElement("form",{ref:b,method:w,action:v,onSubmit:r?m:L,...M,"data-discover":!U&&s==="render"?"true":void 0})});AE.displayName="Form";function RE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lx(s){let e=K.useContext(ao);return un(e,RE(s)),e}function CE(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=tx(),_=$r(),g=xl(s,{relative:u});return K.useCallback(x=>{if(rE(x,e)){x.preventDefault();let M=i!==void 0?i:fl(_)===fl(g),b=()=>p(s,{replace:M,state:r,preventScrollReset:l,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d});m?K.startTransition(()=>b()):b()}},[_,p,g,i,r,e,s,l,u,f,d,m])}var wE=0,DE=()=>`__${String(++wE)}__`;function UE(){let{router:s}=lx("useSubmit"),{basename:e}=K.useContext(Ui),i=ZM(),r=s.fetch,l=s.navigate;return K.useCallback(async(u,f={})=>{let{action:d,method:m,encType:p,formData:_,body:g}=lE(u,e);if(f.navigate===!1){let x=f.fetcherKey||DE();await r(x,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function LE(s,{relative:e}={}){let{basename:i}=K.useContext(Ui),r=K.useContext(Va);un(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...xl(s||".",{relative:e})},f=$r();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(_=>_==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let _=d.toString();u.search=_?`?${_}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Fa([i,u.pathname])),fl(u)}function NE(s,{relative:e}={}){let i=K.useContext(Qv);un(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=lx("useViewTransitionState"),l=xl(s,{relative:e});if(!i.isTransitioning)return!1;let u=Ba(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Ba(i.nextLocation.pathname,r)||i.nextLocation.pathname;return dc(l.pathname,f)!=null||dc(l.pathname,u)!=null}const bp="182",OE=0,D_=1,PE=2,oc=1,FE=2,ol=3,Mr=0,Hn=1,na=2,Ia=0,Ks=1,U_=2,L_=3,N_=4,IE=5,jr=100,zE=101,BE=102,HE=103,GE=104,VE=200,kE=201,XE=202,WE=203,xd=204,Sd=205,YE=206,qE=207,jE=208,ZE=209,KE=210,QE=211,JE=212,$E=213,eb=214,yd=0,Md=1,Ed=2,Js=3,bd=4,Td=5,Ad=6,Rd=7,ux=0,tb=1,nb=2,ra=0,cx=1,fx=2,hx=3,dx=4,px=5,mx=6,gx=7,_x=300,Jr=301,$s=302,Cd=303,wd=304,yc=306,Dd=1e3,Pa=1001,Ud=1002,Bn=1003,ib=1004,Ou=1005,Yn=1006,zh=1007,Kr=1008,xi=1009,vx=1010,xx=1011,hl=1012,Tp=1013,la=1014,ia=1015,Ha=1016,Ap=1017,Rp=1018,dl=1020,Sx=35902,yx=35899,Mx=1021,Ex=1022,Wi=1023,Ga=1026,Qr=1027,bx=1028,Cp=1029,eo=1030,wp=1031,Dp=1033,lc=33776,uc=33777,cc=33778,fc=33779,Ld=35840,Nd=35841,Od=35842,Pd=35843,Fd=36196,Id=37492,zd=37496,Bd=37488,Hd=37489,Gd=37490,Vd=37491,kd=37808,Xd=37809,Wd=37810,Yd=37811,qd=37812,jd=37813,Zd=37814,Kd=37815,Qd=37816,Jd=37817,$d=37818,ep=37819,tp=37820,np=37821,ip=36492,ap=36494,rp=36495,sp=36283,op=36284,lp=36285,up=36286,ab=3200,Tx=0,rb=1,Sr="",Di="srgb",to="srgb-linear",pc="linear",qt="srgb",Ns=7680,O_=519,sb=512,ob=513,lb=514,Up=515,ub=516,cb=517,Lp=518,fb=519,P_=35044,F_="300 es",aa=2e3,mc=2001;function Ax(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hb(){const s=gc("canvas");return s.style.display="block",s}const I_={};function z_(...s){const e="THREE."+s.shift();console.log(e,...s)}function ut(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Nt(...s){const e="THREE."+s.shift();console.error(e,...s)}function pl(...s){const e=s.join(" ");e in I_||(I_[e]=!0,ut(...s))}function db(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class ro{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let B_=1234567;const ul=Math.PI/180,ml=180/Math.PI;function so(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[i&63|128]+kn[i>>8&255]+"-"+kn[i>>16&255]+kn[i>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function Ct(s,e,i){return Math.max(e,Math.min(i,s))}function Np(s,e){return(s%e+e)%e}function pb(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function mb(s,e,i){return s!==e?(i-s)/(e-s):0}function cl(s,e,i){return(1-i)*s+i*e}function gb(s,e,i,r){return cl(s,e,1-Math.exp(-i*r))}function _b(s,e=1){return e-Math.abs(Np(s,e*2)-e)}function vb(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function xb(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function Sb(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yb(s,e){return s+Math.random()*(e-s)}function Mb(s){return s*(.5-Math.random())}function Eb(s){s!==void 0&&(B_=s);let e=B_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bb(s){return s*ul}function Tb(s){return s*ml}function Ab(s){return(s&s-1)===0&&s!==0}function Rb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cb(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wb(s,e,i,r,l){const u=Math.cos,f=Math.sin,d=u(i/2),m=f(i/2),p=u((e+r)/2),_=f((e+r)/2),g=u((e-r)/2),x=f((e-r)/2),M=u((r-e)/2),b=f((r-e)/2);switch(l){case"XYX":s.set(d*_,m*g,m*x,d*p);break;case"YZY":s.set(m*x,d*_,m*g,d*p);break;case"ZXZ":s.set(m*g,m*x,d*_,d*p);break;case"XZX":s.set(d*_,m*b,m*M,d*p);break;case"YXY":s.set(m*M,d*_,m*b,d*p);break;case"ZYZ":s.set(m*b,m*M,d*_,d*p);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function js(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Db={DEG2RAD:ul,RAD2DEG:ml,generateUUID:so,clamp:Ct,euclideanModulo:Np,mapLinear:pb,inverseLerp:mb,lerp:cl,damp:gb,pingpong:_b,smoothstep:vb,smootherstep:xb,randInt:Sb,randFloat:yb,randFloatSpread:Mb,seededRandom:Eb,degToRad:bb,radToDeg:Tb,isPowerOfTwo:Ab,ceilPowerOfTwo:Rb,floorPowerOfTwo:Cb,setQuaternionFromProperEuler:wb,normalize:Kn,denormalize:js};class Pt{constructor(e=0,i=0){Pt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Sl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],x=u[f+0],M=u[f+1],b=u[f+2],T=u[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=T;return}if(g!==T||m!==x||p!==M||_!==b){let y=m*x+p*M+_*b+g*T;y<0&&(x=-x,M=-M,b=-b,T=-T,y=-y);let v=1-d;if(y<.9995){const w=Math.acos(y),U=Math.sin(w);v=Math.sin(v*w)/U,d=Math.sin(d*w)/U,m=m*v+x*d,p=p*v+M*d,_=_*v+b*d,g=g*v+T*d}else{m=m*v+x*d,p=p*v+M*d,_=_*v+b*d,g=g*v+T*d;const w=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=w,p*=w,_*=w,g*=w}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,f){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[f],x=u[f+1],M=u[f+2],b=u[f+3];return e[i]=d*b+_*g+m*M-p*x,e[i+1]=m*b+_*x+p*g-d*M,e[i+2]=p*b+_*M+d*x-m*g,e[i+3]=_*b-d*g-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(u/2),x=m(r/2),M=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=x*_*g+p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g-x*M*b;break;case"YXZ":this._x=x*_*g+p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g+x*M*b;break;case"ZXY":this._x=x*_*g-p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g-x*M*b;break;case"ZYX":this._x=x*_*g-p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g+x*M*b;break;case"YZX":this._x=x*_*g+p*M*b,this._y=p*M*g+x*_*b,this._z=p*_*b-x*M*g,this._w=p*_*g-x*M*b;break;case"XZY":this._x=x*_*g-p*M*b,this._y=p*M*g-x*_*b,this._z=p*_*b+x*M*g,this._w=p*_*g+x*M*b;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(f-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(u-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(f-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+f*d+l*p-u*m,this._y=l*_+f*m+u*d-r*p,this._z=u*_+f*p+r*m-l*d,this._w=f*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,u=-u,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,i=0,r=0){te.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(H_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(H_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*r),_=2*(d*i-u*l),g=2*(u*r-f*i);return this.x=i+m*p+f*g-d*_,this.y=r+m*_+d*p-u*g,this.z=l+m*g+u*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new te,H_=new Sl;class gt{constructor(e,i,r,l,u,f,d,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,d,m,p)}set(e,i,r,l,u,f,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],M=r[5],b=r[8],T=l[0],y=l[3],v=l[6],w=l[1],U=l[4],L=l[7],P=l[2],z=l[5],F=l[8];return u[0]=f*T+d*w+m*P,u[3]=f*y+d*U+m*z,u[6]=f*v+d*L+m*F,u[1]=p*T+_*w+g*P,u[4]=p*y+_*U+g*z,u[7]=p*v+_*L+g*F,u[2]=x*T+M*w+b*P,u[5]=x*y+M*U+b*z,u[8]=x*v+M*L+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*d*p-r*u*_+r*d*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*f-d*p,x=d*m-_*u,M=p*u-f*m,b=i*g+r*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(l*p-_*r)*T,e[2]=(d*r-l*f)*T,e[3]=x*T,e[4]=(_*i-l*m)*T,e[5]=(l*u-d*i)*T,e[6]=M*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Hh.makeScale(e,i)),this}rotate(e){return this.premultiply(Hh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Hh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hh=new gt,G_=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ub(){const s={enabled:!0,workingColorSpace:to,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===qt&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qt&&(l.r=Qs(l.r),l.g=Qs(l.g),l.b=Qs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Sr?pc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return pl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return pl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[to]:{primaries:e,whitePoint:r,transfer:pc,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),s}const Ot=Ub();function za(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Os;class Lb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Os===void 0&&(Os=gc("canvas")),Os.width=e.width,Os.height=e.height;const l=Os.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Os}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=gc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=za(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(za(i[r]/255)*255):i[r]=za(i[r]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nb=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(Gh(l[f].image)):u.push(Gh(l[f]))}else u=Gh(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Gh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Lb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let Ob=0;const Vh=new te;class Jn extends ro{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,r=Pa,l=Pa,u=Yn,f=Kr,d=Wi,m=xi,p=Jn.DEFAULT_ANISOTROPY,_=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=so(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case Pa:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case Pa:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=_x;Jn.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,i=0,r=0,l=1){hn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],_=m[4],g=m[8],x=m[1],M=m[5],b=m[9],T=m[2],y=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+T)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,L=(M+1)/2,P=(v+1)/2,z=(_+x)/4,F=(g+T)/4,Z=(b+y)/4;return U>L&&U>P?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=z/r,u=F/r):L>P?L<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(L),r=z/l,u=Z/l):P<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),r=F/u,l=Z/u),this.set(r,l,u,i),this}let w=Math.sqrt((y-b)*(y-b)+(g-T)*(g-T)+(x-_)*(x-_));return Math.abs(w)<.001&&(w=1),this.x=(y-b)/w,this.y=(g-T)/w,this.z=(x-_)/w,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this.w=Ct(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this.w=Ct(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pb extends ro{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new hn(0,0,e,i),this.scissorTest=!1,this.viewport=new hn(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new Jn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Op(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sa extends Pb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Rx extends Jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fb extends Jn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl{constructor(e=new te(1/0,1/0,1/0),i=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Hi):Hi.fromBufferAttribute(u,f),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pu.copy(r.boundingBox)),Pu.applyMatrix4(e.matrixWorld),this.union(Pu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Fu.subVectors(this.max,Jo),Ps.subVectors(e.a,Jo),Fs.subVectors(e.b,Jo),Is.subVectors(e.c,Jo),pr.subVectors(Fs,Ps),mr.subVectors(Is,Fs),Hr.subVectors(Ps,Is);let i=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Hr.z,Hr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Hr.z,0,-Hr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Hr.y,Hr.x,0];return!kh(i,Ps,Fs,Is,Fu)||(i=[1,0,0,0,1,0,0,0,1],!kh(i,Ps,Fs,Is,Fu))?!1:(Iu.crossVectors(pr,mr),i=[Iu.x,Iu.y,Iu.z],kh(i,Ps,Fs,Is,Fu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new te,new te,new te,new te,new te,new te,new te,new te],Hi=new te,Pu=new yl,Ps=new te,Fs=new te,Is=new te,pr=new te,mr=new te,Hr=new te,Jo=new te,Fu=new te,Iu=new te,Gr=new te;function kh(s,e,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Gr.fromArray(s,u);const d=l.x*Math.abs(Gr.x)+l.y*Math.abs(Gr.y)+l.z*Math.abs(Gr.z),m=e.dot(Gr),p=i.dot(Gr),_=r.dot(Gr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Ib=new yl,$o=new te,Xh=new te;class Ml{constructor(e=new te,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ib.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);const i=$o.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector($o,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(Xh)),this.expandByPoint($o.copy(e.center).sub(Xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Da=new te,Wh=new te,zu=new te,gr=new te,Yh=new te,Bu=new te,qh=new te;class Mc{constructor(e=new te,i=new te(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Wh.copy(e).add(i).multiplyScalar(.5),zu.copy(i).sub(e).normalize(),gr.copy(this.origin).sub(Wh);const u=e.distanceTo(i)*.5,f=-this.direction.dot(zu),d=gr.dot(this.direction),m=-gr.dot(zu),p=gr.lengthSq(),_=Math.abs(1-f*f);let g,x,M,b;if(_>0)if(g=f*m-d,x=f*d-m,b=u*_,g>=0)if(x>=-b)if(x<=b){const T=1/_;g*=T,x*=T,M=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=u,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(g=Math.max(0,-(f*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+x*(x+2*m)+p);else x=f>0?-u:u,g=Math.max(0,-(f*x+d)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Wh).addScaledVector(zu,x),M}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),l=Da.dot(Da)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(u=(e.min.y-x.y)*_,f=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,f=(e.min.y-x.y)*_),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,r,l,u){Yh.subVectors(i,e),Bu.subVectors(r,e),qh.crossVectors(Yh,Bu);let f=this.direction.dot(qh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;gr.subVectors(this.origin,e);const m=d*this.direction.dot(Bu.crossVectors(gr,Bu));if(m<0)return null;const p=d*this.direction.dot(Yh.cross(gr));if(p<0||m+p>f)return null;const _=-d*gr.dot(qh);return _<0?null:this.at(_/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,i,r,l,u,f,d,m,p,_,g,x,M,b,T,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,d,m,p,_,g,x,M,b,T,y)}set(e,i,r,l,u,f,d,m,p,_,g,x,M,b,T,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=M,v[7]=b,v[11]=T,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/zs.setFromMatrixColumn(e,0).length(),u=1/zs.setFromMatrixColumn(e,1).length(),f=1/zs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const x=f*_,M=f*g,b=d*_,T=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=x-T*p,i[9]=-d*m,i[2]=T-x*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const x=m*_,M=m*g,b=p*_,T=p*g;i[0]=x+T*d,i[4]=b*d-M,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-d,i[2]=M*d-b,i[6]=T+x*d,i[10]=f*m}else if(e.order==="ZXY"){const x=m*_,M=m*g,b=p*_,T=p*g;i[0]=x-T*d,i[4]=-f*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=f*_,i[9]=T-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const x=f*_,M=f*g,b=d*_,T=d*g;i[0]=m*_,i[4]=b*p-M,i[8]=x*p+T,i[1]=m*g,i[5]=T*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const x=f*m,M=f*p,b=d*m,T=d*p;i[0]=m*_,i[4]=T-x*g,i[8]=b*g+M,i[1]=g,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*g+b,i[10]=x-T*g}else if(e.order==="XZY"){const x=f*m,M=f*p,b=d*m,T=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+T,i[5]=f*_,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*_,i[10]=T*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zb,e,Bb)}lookAt(e,i,r){const l=this.elements;return gi.subVectors(e,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),_r.crossVectors(r,gi),_r.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),_r.crossVectors(r,gi)),_r.normalize(),Hu.crossVectors(gi,_r),l[0]=_r.x,l[4]=Hu.x,l[8]=gi.x,l[1]=_r.y,l[5]=Hu.y,l[9]=gi.y,l[2]=_r.z,l[6]=Hu.z,l[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],M=r[13],b=r[2],T=r[6],y=r[10],v=r[14],w=r[3],U=r[7],L=r[11],P=r[15],z=l[0],F=l[4],Z=l[8],C=l[12],D=l[1],V=l[5],ne=l[9],se=l[13],me=l[2],fe=l[6],I=l[10],G=l[14],oe=l[3],Te=l[7],Me=l[11],O=l[15];return u[0]=f*z+d*D+m*me+p*oe,u[4]=f*F+d*V+m*fe+p*Te,u[8]=f*Z+d*ne+m*I+p*Me,u[12]=f*C+d*se+m*G+p*O,u[1]=_*z+g*D+x*me+M*oe,u[5]=_*F+g*V+x*fe+M*Te,u[9]=_*Z+g*ne+x*I+M*Me,u[13]=_*C+g*se+x*G+M*O,u[2]=b*z+T*D+y*me+v*oe,u[6]=b*F+T*V+y*fe+v*Te,u[10]=b*Z+T*ne+y*I+v*Me,u[14]=b*C+T*se+y*G+v*O,u[3]=w*z+U*D+L*me+P*oe,u[7]=w*F+U*V+L*fe+P*Te,u[11]=w*Z+U*ne+L*I+P*Me,u[15]=w*C+U*se+L*G+P*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],x=e[10],M=e[14],b=e[3],T=e[7],y=e[11],v=e[15],w=m*M-p*x,U=d*M-p*g,L=d*x-m*g,P=f*M-p*_,z=f*x-m*_,F=f*g-d*_;return i*(T*w-y*U+v*L)-r*(b*w-y*P+v*z)+l*(b*U-T*P+v*F)-u*(b*L-T*z+y*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],x=e[10],M=e[11],b=e[12],T=e[13],y=e[14],v=e[15],w=g*y*p-T*x*p+T*m*M-d*y*M-g*m*v+d*x*v,U=b*x*p-_*y*p-b*m*M+f*y*M+_*m*v-f*x*v,L=_*T*p-b*g*p+b*d*M-f*T*M-_*d*v+f*g*v,P=b*g*m-_*T*m-b*d*x+f*T*x+_*d*y-f*g*y,z=i*w+r*U+l*L+u*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=w*F,e[1]=(T*x*u-g*y*u-T*l*M+r*y*M+g*l*v-r*x*v)*F,e[2]=(d*y*u-T*m*u+T*l*p-r*y*p-d*l*v+r*m*v)*F,e[3]=(g*m*u-d*x*u-g*l*p+r*x*p+d*l*M-r*m*M)*F,e[4]=U*F,e[5]=(_*y*u-b*x*u+b*l*M-i*y*M-_*l*v+i*x*v)*F,e[6]=(b*m*u-f*y*u-b*l*p+i*y*p+f*l*v-i*m*v)*F,e[7]=(f*x*u-_*m*u+_*l*p-i*x*p-f*l*M+i*m*M)*F,e[8]=L*F,e[9]=(b*g*u-_*T*u-b*r*M+i*T*M+_*r*v-i*g*v)*F,e[10]=(f*T*u-b*d*u+b*r*p-i*T*p-f*r*v+i*d*v)*F,e[11]=(_*d*u-f*g*u-_*r*p+i*g*p+f*r*M-i*d*M)*F,e[12]=P*F,e[13]=(_*T*l-b*g*l+b*r*x-i*T*x-_*r*y+i*g*y)*F,e[14]=(b*d*l-f*T*l-b*r*m+i*T*m+f*r*y-i*d*y)*F,e[15]=(f*g*l-_*d*l+_*r*m-i*g*m-f*r*x+i*d*x)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,d=e.y,m=e.z,p=u*f,_=u*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*f,0,p*m-l*d,_*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,_=f+f,g=d+d,x=u*p,M=u*_,b=u*g,T=f*_,y=f*g,v=d*g,w=m*p,U=m*_,L=m*g,P=r.x,z=r.y,F=r.z;return l[0]=(1-(T+v))*P,l[1]=(M+L)*P,l[2]=(b-U)*P,l[3]=0,l[4]=(M-L)*z,l[5]=(1-(x+v))*z,l[6]=(y+w)*z,l[7]=0,l[8]=(b+U)*F,l[9]=(y-w)*F,l[10]=(1-(x+T))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let u=zs.set(l[0],l[1],l[2]).length();const f=zs.set(l[4],l[5],l[6]).length(),d=zs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),Gi.copy(this);const p=1/u,_=1/f,g=1/d;return Gi.elements[0]*=p,Gi.elements[1]*=p,Gi.elements[2]*=p,Gi.elements[4]*=_,Gi.elements[5]*=_,Gi.elements[6]*=_,Gi.elements[8]*=g,Gi.elements[9]*=g,Gi.elements[10]*=g,i.setFromRotationMatrix(Gi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,i,r,l,u,f,d=aa,m=!1){const p=this.elements,_=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),M=(r+l)/(r-l);let b,T;if(m)b=u/(f-u),T=f*u/(f-u);else if(d===aa)b=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===mc)b=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,f,d=aa,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,T;if(m)b=1/(f-u),T=f/(f-u);else if(d===aa)b=-2/(f-u),T=-(f+u)/(f-u);else if(d===mc)b=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const zs=new te,Gi=new nn,zb=new te(0,0,0),Bb=new te(1,1,1),_r=new te,Hu=new te,gi=new te,k_=new nn,X_=new Sl;class ua{constructor(e=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ct(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return k_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return X_.setFromEuler(this),this.setFromQuaternion(X_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class Pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hb=0;const W_=new te,Bs=new Sl,Ua=new nn,Gu=new te,el=new te,Gb=new te,Vb=new Sl,Y_=new te(1,0,0),q_=new te(0,1,0),j_=new te(0,0,1),Z_={type:"added"},kb={type:"removed"},Hs={type:"childadded",child:null},jh={type:"childremoved",child:null};class qn extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new te,i=new ua,r=new Sl,l=new te(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new gt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Bs.setFromAxisAngle(e,i),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,i){return Bs.setFromAxisAngle(e,i),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Y_,e)}rotateY(e){return this.rotateOnAxis(q_,e)}rotateZ(e){return this.rotateOnAxis(j_,e)}translateOnAxis(e,i){return W_.copy(e).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Y_,e)}translateY(e){return this.translateOnAxis(q_,e)}translateZ(e){return this.translateOnAxis(j_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Gu.copy(e):Gu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),el.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(el,Gu,this.up):Ua.lookAt(Gu,el,this.up),this.quaternion.setFromRotationMatrix(Ua),l&&(Ua.extractRotation(l.matrixWorld),Bs.setFromRotationMatrix(Ua),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z_),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kb),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z_),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(el,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),x=f(e.skeletons),M=f(e.animations),b=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}qn.DEFAULT_UP=new te(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new te,La=new te,Zh=new te,Na=new te,Gs=new te,Vs=new te,K_=new te,Kh=new te,Qh=new te,Jh=new te,$h=new hn,ed=new hn,td=new hn;class Xi{constructor(e=new te,i=new te,r=new te){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Vi.subVectors(e,i),l.cross(Vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Vi.subVectors(l,i),La.subVectors(r,i),Zh.subVectors(e,i);const f=Vi.dot(Vi),d=Vi.dot(La),m=Vi.dot(Zh),p=La.dot(La),_=La.dot(Zh),g=f*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,M=(p*m-d*_)*x,b=(f*_-d*m)*x;return u.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(e,i,r,l,u,f,d,m){return this.getBarycoord(e,i,r,l,Na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Na.x),m.addScaledVector(f,Na.y),m.addScaledVector(d,Na.z),m)}static getInterpolatedAttribute(e,i,r,l,u,f){return $h.setScalar(0),ed.setScalar(0),td.setScalar(0),$h.fromBufferAttribute(e,i),ed.fromBufferAttribute(e,r),td.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector($h,u.x),f.addScaledVector(ed,u.y),f.addScaledVector(td,u.z),f}static isFrontFacing(e,i,r,l){return Vi.subVectors(r,i),La.subVectors(e,i),Vi.cross(La).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Vi.cross(La).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Xi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,d;Gs.subVectors(l,r),Vs.subVectors(u,r),Kh.subVectors(e,r);const m=Gs.dot(Kh),p=Vs.dot(Kh);if(m<=0&&p<=0)return i.copy(r);Qh.subVectors(e,l);const _=Gs.dot(Qh),g=Vs.dot(Qh);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(r).addScaledVector(Gs,f);Jh.subVectors(e,u);const M=Gs.dot(Jh),b=Vs.dot(Jh);if(b>=0&&M<=b)return i.copy(u);const T=M*p-m*b;if(T<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(Vs,d);const y=_*b-M*g;if(y<=0&&g-_>=0&&M-b>=0)return K_.subVectors(u,l),d=(g-_)/(g-_+(M-b)),i.copy(l).addScaledVector(K_,d);const v=1/(y+T+x);return f=T*v,d=x*v,i.copy(r).addScaledVector(Gs,f).addScaledVector(Vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Vu={h:0,s:0,l:0};function nd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ut{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ot.workingColorSpace){if(e=Np(e,1),i=Ct(i,0,1),r=Ct(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=nd(f,u,e+1/3),this.g=nd(f,u,e),this.b=nd(f,u,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=Di){function r(u){u!==void 0&&parseFloat(u)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Di){const r=Cx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=za(e.r),this.g=za(e.g),this.b=za(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return Ot.workingToColorSpace(Xn.copy(this),e),Math.round(Ct(Xn.r*255,0,255))*65536+Math.round(Ct(Xn.g*255,0,255))*256+Math.round(Ct(Xn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(Xn.copy(this),i);const r=Xn.r,l=Xn.g,u=Xn.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=_<=.5?g/(f+d):g/(2-f-d),f){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(Xn.copy(this),i),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Di){Ot.workingToColorSpace(Xn.copy(this),e);const i=Xn.r,r=Xn.g,l=Xn.b;return e!==Di?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+i,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(vr),e.getHSL(Vu);const r=cl(vr.h,Vu.h,i),l=cl(vr.s,Vu.s,i),u=cl(vr.l,Vu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Ut;Ut.NAMES=Cx;let Xb=0;class es extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Ks,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=Sd,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xd&&(r.blendSrc=this.blendSrc),this.blendDst!==Sd&&(r.blendDst=this.blendDst),this.blendEquation!==jr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Oa extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=ux,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=new te,ku=new Pt;let Wb=0;class oa{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=P_,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ku.fromBufferAttribute(this,i),ku.applyMatrix3(e),this.setXY(i,ku.x,ku.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix3(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyMatrix4(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.applyNormalMatrix(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Mn.fromBufferAttribute(this,i),Mn.transformDirection(e),this.setXYZ(i,Mn.x,Mn.y,Mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=js(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=js(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=js(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=js(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=js(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),r=Kn(r,this.array),l=Kn(l,this.array),u=Kn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P_&&(e.usage=this.usage),e}}class wx extends oa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Dx extends oa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Gn extends oa{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Yb=0;const wi=new nn,id=new qn,ks=new te,_i=new yl,tl=new yl,Cn=new te;class $n extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ax(e)?Dx:wx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new gt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,i,r){return wi.makeTranslation(e,i,r),this.applyMatrix4(wi),this}scale(e,i,r){return wi.makeScale(e,i,r),this.applyMatrix4(wi),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];_i.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ml);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];tl.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(_i.min,tl.min),_i.expandByPoint(Cn),Cn.addVectors(_i.max,tl.max),_i.expandByPoint(Cn)):(_i.expandByPoint(tl.min),_i.expandByPoint(tl.max))}_i.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)Cn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Cn.fromBufferAttribute(d,p),m&&(ks.fromBufferAttribute(e,p),Cn.add(ks)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oa(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new te,m[Z]=new te;const p=new te,_=new te,g=new te,x=new Pt,M=new Pt,b=new Pt,T=new te,y=new te;function v(Z,C,D){p.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,C),g.fromBufferAttribute(r,D),x.fromBufferAttribute(u,Z),M.fromBufferAttribute(u,C),b.fromBufferAttribute(u,D),_.sub(p),g.sub(p),M.sub(x),b.sub(x);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(T.copy(_).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(V),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(V),d[Z].add(T),d[C].add(T),d[D].add(T),m[Z].add(y),m[C].add(y),m[D].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let Z=0,C=w.length;Z<C;++Z){const D=w[Z],V=D.start,ne=D.count;for(let se=V,me=V+ne;se<me;se+=3)v(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const U=new te,L=new te,P=new te,z=new te;function F(Z){P.fromBufferAttribute(l,Z),z.copy(P);const C=d[Z];U.copy(C),U.sub(P.multiplyScalar(P.dot(C))).normalize(),L.crossVectors(z,C);const V=L.dot(m[Z])<0?-1:1;f.setXYZW(Z,U.x,U.y,U.z,V)}for(let Z=0,C=w.length;Z<C;++Z){const D=w[Z],V=D.start,ne=D.count;for(let se=V,me=V+ne;se<me;se+=3)F(e.getX(se+0)),F(e.getX(se+1)),F(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new oa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new te,u=new te,f=new te,d=new te,m=new te,p=new te,_=new te,g=new te;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),_.subVectors(f,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,u),g.subVectors(l,u),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Cn.fromBufferAttribute(e,i),Cn.normalize(),e.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let M=0,b=0;for(let T=0,y=m.length;T<y;T++){d.isInterleavedBufferAttribute?M=m[T]*d.data.stride+d.offset:M=m[T]*_;for(let v=0;v<_;v++)x[b++]=p[M++]}return new oa(x,_,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],M=e(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],g=u[p];for(let x=0,M=g.length;x<M;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q_=new nn,Vr=new Mc,Xu=new Ml,J_=new te,Wu=new te,Yu=new te,qu=new te,ad=new te,ju=new te,$_=new te,Zu=new te;class wn extends qn{constructor(e=new $n,i=new Oa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ju.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(ad.fromBufferAttribute(g,e),f?ju.addScaledVector(ad,_):ju.addScaledVector(ad.sub(i),_))}i.add(ju)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xu.copy(r.boundingSphere),Xu.applyMatrix4(u),Vr.copy(e.ray).recast(e.near),!(Xu.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Xu,J_)===null||Vr.origin.distanceToSquared(J_)>(e.far-e.near)**2))&&(Q_.copy(u).invert(),Vr.copy(e.ray).applyMatrix4(Q_),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Vr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=f[y.materialIndex],w=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let L=w,P=U;L<P;L+=3){const z=d.getX(L),F=d.getX(L+1),Z=d.getX(L+2);l=Ku(this,v,e,r,p,_,g,z,F,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const w=d.getX(y),U=d.getX(y+1),L=d.getX(y+2);l=Ku(this,f,e,r,p,_,g,w,U,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],v=f[y.materialIndex],w=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let L=w,P=U;L<P;L+=3){const z=L,F=L+1,Z=L+2;l=Ku(this,v,e,r,p,_,g,z,F,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let y=b,v=T;y<v;y+=3){const w=y,U=y+1,L=y+2;l=Ku(this,f,e,r,p,_,g,w,U,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function qb(s,e,i,r,l,u,f,d){let m;if(e.side===Hn?m=r.intersectTriangle(f,u,l,!0,d):m=r.intersectTriangle(l,u,f,e.side===Mr,d),m===null)return null;Zu.copy(d),Zu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Zu);return p<i.near||p>i.far?null:{distance:p,point:Zu.clone(),object:s}}function Ku(s,e,i,r,l,u,f,d,m,p){s.getVertexPosition(d,Wu),s.getVertexPosition(m,Yu),s.getVertexPosition(p,qu);const _=qb(s,e,i,r,Wu,Yu,qu,$_);if(_){const g=new te;Xi.getBarycoord($_,Wu,Yu,qu,g),l&&(_.uv=Xi.getInterpolatedAttribute(l,d,m,p,g,new Pt)),u&&(_.uv1=Xi.getInterpolatedAttribute(u,d,m,p,g,new Pt)),f&&(_.normal=Xi.getInterpolatedAttribute(f,d,m,p,g,new te),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new te,materialIndex:0};Xi.getNormal(Wu,Yu,qu,x.normal),_.face=x,_.barycoord=g}return _}class El extends $n{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],_=[],g=[];let x=0,M=0;b("z","y","x",-1,-1,r,i,e,f,u,0),b("z","y","x",1,-1,r,i,-e,f,u,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,u,4),b("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(_,3)),this.setAttribute("uv",new Gn(g,2));function b(T,y,v,w,U,L,P,z,F,Z,C){const D=L/F,V=P/Z,ne=L/2,se=P/2,me=z/2,fe=F+1,I=Z+1;let G=0,oe=0;const Te=new te;for(let Me=0;Me<I;Me++){const O=Me*V-se;for(let ie=0;ie<fe;ie++){const ve=ie*D-ne;Te[T]=ve*w,Te[y]=O*U,Te[v]=me,p.push(Te.x,Te.y,Te.z),Te[T]=0,Te[y]=0,Te[v]=z>0?1:-1,_.push(Te.x,Te.y,Te.z),g.push(ie/F),g.push(1-Me/Z),G+=1}}for(let Me=0;Me<Z;Me++)for(let O=0;O<F;O++){const ie=x+O+fe*Me,ve=x+O+fe*(Me+1),Ne=x+(O+1)+fe*(Me+1),Ve=x+(O+1)+fe*Me;m.push(ie,ve,Ve),m.push(ve,Ne,Ve),oe+=6}d.addGroup(M,oe,C),M+=oe,x+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Qn(s){const e={};for(let i=0;i<s.length;i++){const r=no(s[i]);for(const l in r)e[l]=r[l]}return e}function jb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Ux(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const Zb={clone:no,merge:Qn};var Kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kb,this.fragmentShader=Qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=jb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Lx extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new te,ev=new Pt,tv=new Pt;class vi extends Lx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,i){return this.getViewBounds(e,ev,tv),i.subVectors(tv,ev)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ul*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Xs=-90,Ws=1;class Jb extends qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Xs,Ws,e,i);l.layers=this.layers,this.add(l);const u=new vi(Xs,Ws,e,i);u.layers=this.layers,this.add(u);const f=new vi(Xs,Ws,e,i);f.layers=this.layers,this.add(f);const d=new vi(Xs,Ws,e,i);d.layers=this.layers,this.add(d);const m=new vi(Xs,Ws,e,i);m.layers=this.layers,this.add(m);const p=new vi(Xs,Ws,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(e===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,x,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Nx extends Jn{constructor(e=[],i=Jr,r,l,u,f,d,m,p,_){super(e,i,r,l,u,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ox extends sa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Nx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new El(5,5,5),u=new ca({name:"CubemapFromEquirect",uniforms:no(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Ia});u.uniforms.tEquirect.value=i;const f=new wn(l,u),d=i.minFilter;return i.minFilter===Kr&&(i.minFilter=Yn),new Jb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}class Zs extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $b={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,r),v=this._getHandJoint(p,T);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($b)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Zs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class eT extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class tT extends Jn{constructor(e=null,i=1,r=1,l,u,f,d,m,p=Bn,_=Bn,g,x){super(null,f,d,m,p,_,l,u,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sd=new te,nT=new te,iT=new gt;class Yr{constructor(e=new te(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=sd.subVectors(r,i).cross(nT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||iT.getNormalMatrix(e),l=this.coplanarPoint(sd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new Ml,aT=new Pt(.5,.5),Qu=new te;class Fp{constructor(e=new Yr,i=new Yr,r=new Yr,l=new Yr,u=new Yr,f=new Yr){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=aa,r=!1){const l=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],p=u[3],_=u[4],g=u[5],x=u[6],M=u[7],b=u[8],T=u[9],y=u[10],v=u[11],w=u[12],U=u[13],L=u[14],P=u[15];if(l[0].setComponents(p-f,M-_,v-b,P-w).normalize(),l[1].setComponents(p+f,M+_,v+b,P+w).normalize(),l[2].setComponents(p+d,M+g,v+T,P+U).normalize(),l[3].setComponents(p-d,M-g,v-T,P-U).normalize(),r)l[4].setComponents(m,x,y,L).normalize(),l[5].setComponents(p-m,M-x,v-y,P-L).normalize();else if(l[4].setComponents(p-m,M-x,v-y,P-L).normalize(),i===aa)l[5].setComponents(p+m,M+x,v+y,P+L).normalize();else if(i===mc)l[5].setComponents(m,x,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const i=aT.distanceTo(e.center);return kr.radius=.7071067811865476+i,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Qu.x=l.normal.x>0?e.max.x:e.min.x,Qu.y=l.normal.y>0?e.max.y:e.min.y,Qu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Qu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Px extends es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _c=new te,vc=new te,nv=new nn,nl=new Mc,Ju=new Ml,od=new te,iv=new te;class rT extends qn{constructor(e=new $n,i=new Px){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)_c.fromBufferAttribute(i,l-1),vc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=_c.distanceTo(vc);e.setAttribute("lineDistance",new Gn(r,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ju.copy(r.boundingSphere),Ju.applyMatrix4(l),Ju.radius+=u,e.ray.intersectsSphere(Ju)===!1)return;nv.copy(l).invert(),nl.copy(e.ray).applyMatrix4(nv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=p){const v=_.getX(T),w=_.getX(T+1),U=$u(this,e,nl,m,v,w,T);U&&i.push(U)}if(this.isLineLoop){const T=_.getX(b-1),y=_.getX(M),v=$u(this,e,nl,m,T,y,b-1);v&&i.push(v)}}else{const M=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let T=M,y=b-1;T<y;T+=p){const v=$u(this,e,nl,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=$u(this,e,nl,m,b-1,M,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function $u(s,e,i,r,l,u,f){const d=s.geometry.attributes.position;if(_c.fromBufferAttribute(d,l),vc.fromBufferAttribute(d,u),i.distanceSqToSegment(_c,vc,od,iv)>r)return;od.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(od);if(!(p<e.near||p>e.far))return{distance:p,point:iv.clone().applyMatrix4(s.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:s}}class sT extends rT{constructor(e,i){super(e,i),this.isLineLoop=!0,this.type="LineLoop"}}class Fx extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const av=new nn,cp=new Mc,ec=new Ml,tc=new te;class oT extends qn{constructor(e=new $n,i=new Fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ec.copy(r.boundingSphere),ec.applyMatrix4(l),ec.radius+=u,e.ray.intersectsSphere(ec)===!1)return;av.copy(l).invert(),cp.copy(e.ray).applyMatrix4(av);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=x,T=M;b<T;b++){const y=p.getX(b);tc.fromBufferAttribute(g,y),rv(tc,y,m,l,e,i,this)}}else{const x=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let b=x,T=M;b<T;b++)tc.fromBufferAttribute(g,b),rv(tc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function rv(s,e,i,r,l,u,f){const d=cp.distanceSqToPoint(s);if(d<i){const m=new te;cp.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class gl extends Jn{constructor(e,i,r=la,l,u,f,d=Bn,m=Bn,p,_=Ga,g=1){if(_!==Ga&&_!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,u,f,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class lT extends gl{constructor(e,i=la,r=Jr,l,u,f=Bn,d=Bn,m,p=Ga){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,u,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ix extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ec extends $n{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=e/d,x=i/m,M=[],b=[],T=[],y=[];for(let v=0;v<_;v++){const w=v*x-f;for(let U=0;U<p;U++){const L=U*g-u;b.push(L,-w,0),T.push(0,0,1),y.push(U/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let w=0;w<d;w++){const U=w+p*v,L=w+p*(v+1),P=w+1+p*(v+1),z=w+1+p*v;M.push(U,L,z),M.push(L,P,z)}this.setIndex(M),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(T,3)),this.setAttribute("uv",new Gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ip extends $n{constructor(e=.5,i=1,r=32,l=1,u=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:u,thetaLength:f},r=Math.max(3,r),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let g=e;const x=(i-e)/l,M=new te,b=new Pt;for(let T=0;T<=l;T++){for(let y=0;y<=r;y++){const v=u+y/r*f;M.x=g*Math.cos(v),M.y=g*Math.sin(v),m.push(M.x,M.y,M.z),p.push(0,0,1),b.x=(M.x/i+1)/2,b.y=(M.y/i+1)/2,_.push(b.x,b.y)}g+=x}for(let T=0;T<l;T++){const y=T*(r+1);for(let v=0;v<r;v++){const w=v+y,U=w,L=w+r+1,P=w+r+2,z=w+1;d.push(U,L,z),d.push(L,P,z)}}this.setIndex(d),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ea extends $n{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+d,Math.PI);let p=0;const _=[],g=new te,x=new te,M=[],b=[],T=[],y=[];for(let v=0;v<=r;v++){const w=[],U=v/r;let L=0;v===0&&f===0?L=.5/i:v===r&&m===Math.PI&&(L=-.5/i);for(let P=0;P<=i;P++){const z=P/i;g.x=-e*Math.cos(l+z*u)*Math.sin(f+U*d),g.y=e*Math.cos(f+U*d),g.z=e*Math.sin(l+z*u)*Math.sin(f+U*d),b.push(g.x,g.y,g.z),x.copy(g).normalize(),T.push(x.x,x.y,x.z),y.push(z+L,1-U),w.push(p++)}_.push(w)}for(let v=0;v<r;v++)for(let w=0;w<i;w++){const U=_[v][w+1],L=_[v][w],P=_[v+1][w],z=_[v+1][w+1];(v!==0||f>0)&&M.push(U,L,z),(v!==r-1||m<Math.PI)&&M.push(L,P,z)}this.setIndex(M),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(T,3)),this.setAttribute("uv",new Gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uT extends ca{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sv extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tx,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cT extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fT extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zx extends qn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ld=new nn,ov=new te,lv=new te;class hT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fp,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;ov.setFromMatrixPosition(e.matrixWorld),i.position.copy(ov),lv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(lv),i.updateMatrixWorld(),ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dT extends hT{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0}}class pT extends zx{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new dT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Bx extends Lx{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class mT extends zx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class gT extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const uv=new nn;class _T{constructor(e,i,r=0,l=1/0){this.ray=new Mc(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Pp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Nt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return uv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uv),this}intersectObject(e,i=!0,r=[]){return fp(e,this,r,i),r.sort(cv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)fp(e[l],this,r,i);return r.sort(cv),r}}function cv(s,e){return s.distance-e.distance}function fp(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const u=s.children;for(let f=0,d=u.length;f<d;f++)fp(u[f],e,i,!0)}}function fv(s,e,i,r){const l=vT(r);switch(i){case Mx:return s*e;case bx:return s*e/l.components*l.byteLength;case Cp:return s*e/l.components*l.byteLength;case eo:return s*e*2/l.components*l.byteLength;case wp:return s*e*2/l.components*l.byteLength;case Ex:return s*e*3/l.components*l.byteLength;case Wi:return s*e*4/l.components*l.byteLength;case Dp:return s*e*4/l.components*l.byteLength;case lc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Pd:return Math.max(s,16)*Math.max(e,8)/4;case Ld:case Od:return Math.max(s,8)*Math.max(e,8)/2;case Fd:case Id:case Bd:case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zd:case Gd:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ep:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case tp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ip:case ap:case rp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sp:case op:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lp:case up:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vT(s){switch(s){case xi:case vx:return{byteLength:1,components:1};case hl:case xx:case Ha:return{byteLength:2,components:1};case Ap:case Rp:return{byteLength:2,components:4};case la:case Tp:case ia:return{byteLength:4,components:1};case Sx:case yx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);function Hx(){let s=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function xT(s){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,_);else{g.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<g.length;M++){const b=g[x],T=g[M];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,g[x]=T)}g.length=x+1;for(let M=0,b=g.length;M<b;M++){const T=g[M];s.bufferSubData(p,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var ST=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ET=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KT="gl_FragColor = linearToOutputTexel( gl_FragColor );",QT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,w1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:ST,alphahash_pars_fragment:yT,alphamap_fragment:MT,alphamap_pars_fragment:ET,alphatest_fragment:bT,alphatest_pars_fragment:TT,aomap_fragment:AT,aomap_pars_fragment:RT,batching_pars_vertex:CT,batching_vertex:wT,begin_vertex:DT,beginnormal_vertex:UT,bsdfs:LT,iridescence_fragment:NT,bumpmap_pars_fragment:OT,clipping_planes_fragment:PT,clipping_planes_pars_fragment:FT,clipping_planes_pars_vertex:IT,clipping_planes_vertex:zT,color_fragment:BT,color_pars_fragment:HT,color_pars_vertex:GT,color_vertex:VT,common:kT,cube_uv_reflection_fragment:XT,defaultnormal_vertex:WT,displacementmap_pars_vertex:YT,displacementmap_vertex:qT,emissivemap_fragment:jT,emissivemap_pars_fragment:ZT,colorspace_fragment:KT,colorspace_pars_fragment:QT,envmap_fragment:JT,envmap_common_pars_fragment:$T,envmap_pars_fragment:e1,envmap_pars_vertex:t1,envmap_physical_pars_fragment:h1,envmap_vertex:n1,fog_vertex:i1,fog_pars_vertex:a1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:c1,lights_pars_begin:f1,lights_toon_fragment:d1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:_1,lights_physical_pars_fragment:v1,lights_fragment_begin:x1,lights_fragment_maps:S1,lights_fragment_end:y1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:T1,map_fragment:A1,map_pars_fragment:R1,map_particle_fragment:C1,map_particle_pars_fragment:w1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:U1,morphinstance_vertex:L1,morphcolor_vertex:N1,morphnormal_vertex:O1,morphtarget_pars_vertex:P1,morphtarget_vertex:F1,normal_fragment_begin:I1,normal_fragment_maps:z1,normal_pars_fragment:B1,normal_pars_vertex:H1,normal_vertex:G1,normalmap_pars_fragment:V1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:X1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:Y1,opaque_fragment:q1,packing:j1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:J1,roughnessmap_fragment:$1,roughnessmap_pars_fragment:eA,shadowmap_pars_fragment:tA,shadowmap_pars_vertex:nA,shadowmap_vertex:iA,shadowmask_pars_fragment:aA,skinbase_vertex:rA,skinning_pars_vertex:sA,skinning_vertex:oA,skinnormal_vertex:lA,specularmap_fragment:uA,specularmap_pars_fragment:cA,tonemapping_fragment:fA,tonemapping_pars_fragment:hA,transmission_fragment:dA,transmission_pars_fragment:pA,uv_pars_fragment:mA,uv_pars_vertex:gA,uv_vertex:_A,worldpos_vertex:vA,background_vert:xA,background_frag:SA,backgroundCube_vert:yA,backgroundCube_frag:MA,cube_vert:EA,cube_frag:bA,depth_vert:TA,depth_frag:AA,distance_vert:RA,distance_frag:CA,equirect_vert:wA,equirect_frag:DA,linedashed_vert:UA,linedashed_frag:LA,meshbasic_vert:NA,meshbasic_frag:OA,meshlambert_vert:PA,meshlambert_frag:FA,meshmatcap_vert:IA,meshmatcap_frag:zA,meshnormal_vert:BA,meshnormal_frag:HA,meshphong_vert:GA,meshphong_frag:VA,meshphysical_vert:kA,meshphysical_frag:XA,meshtoon_vert:WA,meshtoon_frag:YA,points_vert:qA,points_frag:jA,shadow_vert:ZA,shadow_frag:KA,sprite_vert:QA,sprite_frag:JA},Xe={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ta={basic:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Qn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Qn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Qn([Xe.points,Xe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Qn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Qn([Xe.common,Xe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Qn([Xe.sprite,Xe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Qn([Xe.common,Xe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Qn([Xe.lights,Xe.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ta.physical={uniforms:Qn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const nc={r:0,b:0,g:0},Xr=new ua,$A=new nn;function eR(s,e,i,r,l,u,f){const d=new Ut(0);let m=u===!0?0:1,p,_,g=null,x=0,M=null;function b(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?i:e).get(L)),L}function T(U){let L=!1;const P=b(U);P===null?v(d,m):P&&P.isColor&&(v(P,1),L=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(U,L){const P=b(L);P&&(P.isCubeTexture||P.mapping===yc)?(_===void 0&&(_=new wn(new El(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:no(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,F,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Xr.copy(L.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4($A.makeRotationFromEuler(Xr)),_.material.toneMapped=Ot.getTransfer(P.colorSpace)!==qt,(g!==P||x!==P.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=P,x=P.version,M=s.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new wn(new Ec(2,2),new ca({name:"BackgroundMaterial",uniforms:no(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(P.colorSpace)!==qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||x!==P.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=P,x=P.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,L){U.getRGB(nc,Ux(s)),r.buffers.color.setClear(nc.r,nc.g,nc.b,L,f)}function w(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),m=L,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:T,addToRenderList:y,dispose:w}}function tR(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function d(D,V,ne,se,me){let fe=!1;const I=g(se,ne,V);u!==I&&(u=I,p(u.object)),fe=M(D,se,ne,me),fe&&b(D,se,ne,me),me!==null&&e.update(me,s.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,L(D,V,ne,se),me!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(me).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function _(D){return s.deleteVertexArray(D)}function g(D,V,ne){const se=ne.wireframe===!0;let me=r[D.id];me===void 0&&(me={},r[D.id]=me);let fe=me[V.id];fe===void 0&&(fe={},me[V.id]=fe);let I=fe[se];return I===void 0&&(I=x(m()),fe[se]=I),I}function x(D){const V=[],ne=[],se=[];for(let me=0;me<i;me++)V[me]=0,ne[me]=0,se[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ne,attributeDivisors:se,object:D,attributes:{},index:null}}function M(D,V,ne,se){const me=u.attributes,fe=V.attributes;let I=0;const G=ne.getAttributes();for(const oe in G)if(G[oe].location>=0){const Me=me[oe];let O=fe[oe];if(O===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(O=D.instanceColor)),Me===void 0||Me.attribute!==O||O&&Me.data!==O.data)return!0;I++}return u.attributesNum!==I||u.index!==se}function b(D,V,ne,se){const me={},fe=V.attributes;let I=0;const G=ne.getAttributes();for(const oe in G)if(G[oe].location>=0){let Me=fe[oe];Me===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor));const O={};O.attribute=Me,Me&&Me.data&&(O.data=Me.data),me[oe]=O,I++}u.attributes=me,u.attributesNum=I,u.index=se}function T(){const D=u.newAttributes;for(let V=0,ne=D.length;V<ne;V++)D[V]=0}function y(D){v(D,0)}function v(D,V){const ne=u.newAttributes,se=u.enabledAttributes,me=u.attributeDivisors;ne[D]=1,se[D]===0&&(s.enableVertexAttribArray(D),se[D]=1),me[D]!==V&&(s.vertexAttribDivisor(D,V),me[D]=V)}function w(){const D=u.newAttributes,V=u.enabledAttributes;for(let ne=0,se=V.length;ne<se;ne++)V[ne]!==D[ne]&&(s.disableVertexAttribArray(ne),V[ne]=0)}function U(D,V,ne,se,me,fe,I){I===!0?s.vertexAttribIPointer(D,V,ne,me,fe):s.vertexAttribPointer(D,V,ne,se,me,fe)}function L(D,V,ne,se){T();const me=se.attributes,fe=ne.getAttributes(),I=V.defaultAttributeValues;for(const G in fe){const oe=fe[G];if(oe.location>=0){let Te=me[G];if(Te===void 0&&(G==="instanceMatrix"&&D.instanceMatrix&&(Te=D.instanceMatrix),G==="instanceColor"&&D.instanceColor&&(Te=D.instanceColor)),Te!==void 0){const Me=Te.normalized,O=Te.itemSize,ie=e.get(Te);if(ie===void 0)continue;const ve=ie.buffer,Ne=ie.type,Ve=ie.bytesPerElement,ae=Ne===s.INT||Ne===s.UNSIGNED_INT||Te.gpuType===Tp;if(Te.isInterleavedBufferAttribute){const he=Te.data,Fe=he.stride,Ye=Te.offset;if(he.isInstancedInterleavedBuffer){for(let We=0;We<oe.locationSize;We++)v(oe.location+We,he.meshPerAttribute);D.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let We=0;We<oe.locationSize;We++)y(oe.location+We);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let We=0;We<oe.locationSize;We++)U(oe.location+We,O/oe.locationSize,Ne,Me,Fe*Ve,(Ye+O/oe.locationSize*We)*Ve,ae)}else{if(Te.isInstancedBufferAttribute){for(let he=0;he<oe.locationSize;he++)v(oe.location+he,Te.meshPerAttribute);D.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let he=0;he<oe.locationSize;he++)y(oe.location+he);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let he=0;he<oe.locationSize;he++)U(oe.location+he,O/oe.locationSize,Ne,Me,O*Ve,O/oe.locationSize*he*Ve,ae)}}else if(I!==void 0){const Me=I[G];if(Me!==void 0)switch(Me.length){case 2:s.vertexAttrib2fv(oe.location,Me);break;case 3:s.vertexAttrib3fv(oe.location,Me);break;case 4:s.vertexAttrib4fv(oe.location,Me);break;default:s.vertexAttrib1fv(oe.location,Me)}}}}w()}function P(){Z();for(const D in r){const V=r[D];for(const ne in V){const se=V[ne];for(const me in se)_(se[me].object),delete se[me];delete V[ne]}delete r[D]}}function z(D){if(r[D.id]===void 0)return;const V=r[D.id];for(const ne in V){const se=V[ne];for(const me in se)_(se[me].object),delete se[me];delete V[ne]}delete r[D.id]}function F(D){for(const V in r){const ne=r[V];if(ne[D.id]===void 0)continue;const se=ne[D.id];for(const me in se)_(se[me].object),delete se[me];delete ne[D.id]}}function Z(){C(),f=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function nR(s,e,i){let r;function l(p){r=p}function u(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function f(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b];i.update(M,r,1)}function m(p,_,g,x){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],_[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let b=0;for(let T=0;T<g;T++)b+=_[T]*x[T];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function iR(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Z=F===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==xi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ia&&!Z)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ut("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),z=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:L,maxSamples:P,samples:z}}function aR(s){const e=this;let i=null,r=0,l=!1,u=!1;const f=new Yr,d=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||l;return l=x,r=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,M){const b=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!l||b===null||b.length===0||u&&!y)u?_(null):p();else{const w=u?0:r,U=w*4;let L=v.clippingState||null;m.value=L,L=_(b,x,U,M);for(let P=0;P!==U;++P)L[P]=i[P];v.clippingState=L,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,M,b){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=m.value,b!==!0||y===null){const v=M+T*4,w=x.matrixWorldInverse;d.getNormalMatrix(w),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,L=M;U!==T;++U,L+=4)f.copy(g[U]).applyMatrix4(w,d),f.normal.toArray(y,L),y[L+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function rR(s){let e=new WeakMap;function i(f,d){return d===Cd?f.mapping=Jr:d===wd&&(f.mapping=$s),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Cd||d===wd)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Ox(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const yr=4,hv=[.125,.215,.35,.446,.526,.582],Zr=20,sR=256,il=new Bx,dv=new Ut;let ud=null,cd=0,fd=0,hd=!1;const oR=new te;class pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=oR}=u;ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,cd,fd),this._renderer.xr.enabled=hd,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Jr||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ha,format:Wi,colorSpace:to,depthBuffer:!1},l=mv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lR(u)),this._blurMaterial=cR(u,e,i),this._ggxMaterial=uR(u,e,i)}return l}_compileMaterial(e){const i=new wn(new $n,e);this._renderer.compile(i,il)}_sceneToCubeUV(e,i,r,l,u){const m=new vi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(dv),g.toneMapping=ra,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new El,new Oa({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let v=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,v=!0):(y.color.copy(dv),v=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):L===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const P=this._cubeSize;Ys(l,L*P,U>2?P:0,P,P),g.setRenderTarget(l),v&&g.render(T,m),g.render(e,m)}g.toneMapping=M,g.autoClear=x,e.background=w}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Jr||e.mapping===$s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Ys(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,il)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,M=g*x,{_lodMax:b}=this,T=this._sizeLods[r],y=3*T*(r>b-yr?r-b+yr:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Ys(u,y,v,3*T,2*T),l.setRenderTarget(u),l.render(d,il),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-r,Ys(e,y,v,3*T,2*T),l.setRenderTarget(e),l.render(d,il)}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),T=u/b,y=isFinite(u)?1+Math.floor(_*T):Zr;y>Zr&&ut(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zr}`);const v=[];let w=0;for(let F=0;F<Zr;++F){const Z=F/T,C=Math.exp(-Z*Z/2);v.push(C),F===0?w+=C:F<y&&(w+=2*C)}for(let F=0;F<v.length;F++)v[F]=v[F]/w;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-r;const L=this._sizeLods[l],P=3*L*(l>U-yr?l-U+yr:0),z=4*(this._cubeSize-L);Ys(i,P,z,3*L,2*L),m.setRenderTarget(i),m.render(g,il)}}function lR(s){const e=[],i=[],r=[];let l=s;const u=s-yr+1+hv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>s-yr?m=hv[f-s+yr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,b=6,T=3,y=2,v=1,w=new Float32Array(T*b*M),U=new Float32Array(y*b*M),L=new Float32Array(v*b*M);for(let z=0;z<M;z++){const F=z%3*2/3-1,Z=z>2?0:-1,C=[F,Z,0,F+2/3,Z,0,F+2/3,Z+1,0,F,Z,0,F+2/3,Z+1,0,F,Z+1,0];w.set(C,T*b*z),U.set(x,y*b*z);const D=[z,z,z,z,z,z];L.set(D,v*b*z)}const P=new $n;P.setAttribute("position",new oa(w,T)),P.setAttribute("uv",new oa(U,y)),P.setAttribute("faceIndex",new oa(L,v)),r.push(new wn(P,null)),l>yr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function mv(s,e,i){const r=new sa(s,e,i);return r.texture.mapping=yc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ys(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function uR(s,e,i){return new ca({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function cR(s,e,i){const r=new Float32Array(Zr),l=new te(0,1,0);return new ca({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function gv(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function _v(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fR(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Cd||m===wd,_=m===Jr||m===$s;if(p||_){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new pv(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new pv(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function hR(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&pl("WebGLRenderer: "+r+" extension not supported."),l}}}function dR(s,e,i,r){const l={},u=new WeakMap;function f(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const M=u.get(x);M&&(e.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,b=g.attributes.position;let T=0;if(M!==null){const w=M.array;T=M.version;for(let U=0,L=w.length;U<L;U+=3){const P=w[U+0],z=w[U+1],F=w[U+2];x.push(P,z,z,F,F,P)}}else if(b!==void 0){const w=b.array;T=b.version;for(let U=0,L=w.length/3-1;U<L;U+=3){const P=U+0,z=U+1,F=U+2;x.push(P,z,z,F,F,P)}}else return;const y=new(Ax(x)?Dx:wx)(x,1);y.version=T;const v=u.get(g);v&&e.remove(v),u.set(g,y)}function _(g){const x=u.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function pR(s,e,i){let r;function l(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,M){s.drawElements(r,M,u,x*f),i.update(M,r,1)}function p(x,M,b){b!==0&&(s.drawElementsInstanced(r,M,u,x*f,b),i.update(M,r,b))}function _(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,b);let y=0;for(let v=0;v<b;v++)y+=M[v];i.update(y,r,1)}function g(x,M,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/f,M[v],T[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,T,0,b);let v=0;for(let w=0;w<b;w++)v+=M[w]*T[w];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function mR(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:Nt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function gR(s,e,i){const r=new WeakMap,l=new hn;function u(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let D=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var M=D;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let L=0;b===!0&&(L=1),T===!0&&(L=2),y===!0&&(L=3);let P=d.attributes.position.count*L,z=1;P>e.maxTextureSize&&(z=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*z*4*g),Z=new Rx(F,P,z,g);Z.type=ia,Z.needsUpdate=!0;const C=L*4;for(let V=0;V<g;V++){const ne=v[V],se=w[V],me=U[V],fe=P*z*4*V;for(let I=0;I<ne.count;I++){const G=I*C;b===!0&&(l.fromBufferAttribute(ne,I),F[fe+G+0]=l.x,F[fe+G+1]=l.y,F[fe+G+2]=l.z,F[fe+G+3]=0),T===!0&&(l.fromBufferAttribute(se,I),F[fe+G+4]=l.x,F[fe+G+5]=l.y,F[fe+G+6]=l.z,F[fe+G+7]=0),y===!0&&(l.fromBufferAttribute(me,I),F[fe+G+8]=l.x,F[fe+G+9]=l.y,F[fe+G+10]=l.z,F[fe+G+11]=me.itemSize===4?l.w:1)}}x={count:g,texture:Z,size:new Pt(P,z)},r.set(d,x),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const T=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function _R(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const vR={[cx]:"LINEAR_TONE_MAPPING",[fx]:"REINHARD_TONE_MAPPING",[hx]:"CINEON_TONE_MAPPING",[dx]:"ACES_FILMIC_TONE_MAPPING",[mx]:"AGX_TONE_MAPPING",[gx]:"NEUTRAL_TONE_MAPPING",[px]:"CUSTOM_TONE_MAPPING"};function xR(s,e,i,r,l){const u=new sa(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new sa(e,i,{type:Ha,depthBuffer:!1,stencilBuffer:!1}),d=new $n;d.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const m=new uT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new wn(d,m),_=new Bx(-1,1,1,-1,0,1);let g=null,x=null,M=!1,b,T=null,y=[],v=!1;this.setSize=function(w,U){u.setSize(w,U),f.setSize(w,U);for(let L=0;L<y.length;L++){const P=y[L];P.setSize&&P.setSize(w,U)}},this.setEffects=function(w){y=w,v=y.length>0&&y[0].isRenderPass===!0;const U=u.width,L=u.height;for(let P=0;P<y.length;P++){const z=y[P];z.setSize&&z.setSize(U,L)}},this.begin=function(w,U){if(M||w.toneMapping===ra&&y.length===0)return!1;if(T=U,U!==null){const L=U.width,P=U.height;(u.width!==L||u.height!==P)&&this.setSize(L,P)}return v===!1&&w.setRenderTarget(u),b=w.toneMapping,w.toneMapping=ra,!0},this.hasRenderPass=function(){return v},this.end=function(w,U){w.toneMapping=b,M=!0;let L=u,P=f;for(let z=0;z<y.length;z++){const F=y[z];if(F.enabled!==!1&&(F.render(w,P,L,U),F.needsSwap!==!1)){const Z=L;L=P,P=Z}}if(g!==w.outputColorSpace||x!==w.toneMapping){g=w.outputColorSpace,x=w.toneMapping,m.defines={},Ot.getTransfer(g)===qt&&(m.defines.SRGB_TRANSFER="");const z=vR[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,w.setRenderTarget(T),w.render(p,_),T=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),m.dispose()}}const Gx=new Jn,hp=new gl(1,1),Vx=new Rx,kx=new Fb,Xx=new Nx,vv=[],xv=[],Sv=new Float32Array(16),yv=new Float32Array(9),Mv=new Float32Array(4);function oo(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=vv[l];if(u===void 0&&(u=new Float32Array(l),vv[l]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(u,d)}return u}function Tn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function An(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Tc(s,e){let i=xv[e];i===void 0&&(i=new Int32Array(e),xv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function SR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function yR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;s.uniform2fv(this.addr,e),An(i,e)}}function MR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;s.uniform3fv(this.addr,e),An(i,e)}}function ER(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;s.uniform4fv(this.addr,e),An(i,e)}}function bR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,r))return;Mv.set(r),s.uniformMatrix2fv(this.addr,!1,Mv),An(i,r)}}function TR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,r))return;yv.set(r),s.uniformMatrix3fv(this.addr,!1,yv),An(i,r)}}function AR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,r))return;Sv.set(r),s.uniformMatrix4fv(this.addr,!1,Sv),An(i,r)}}function RR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function CR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;s.uniform2iv(this.addr,e),An(i,e)}}function wR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;s.uniform3iv(this.addr,e),An(i,e)}}function DR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;s.uniform4iv(this.addr,e),An(i,e)}}function UR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function LR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;s.uniform2uiv(this.addr,e),An(i,e)}}function NR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;s.uniform3uiv(this.addr,e),An(i,e)}}function OR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;s.uniform4uiv(this.addr,e),An(i,e)}}function PR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(hp.compareFunction=i.isReversedDepthBuffer()?Lp:Up,u=hp):u=Gx,i.setTexture2D(e||u,l)}function FR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||kx,l)}function IR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Xx,l)}function zR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Vx,l)}function BR(s){switch(s){case 5126:return SR;case 35664:return yR;case 35665:return MR;case 35666:return ER;case 35674:return bR;case 35675:return TR;case 35676:return AR;case 5124:case 35670:return RR;case 35667:case 35671:return CR;case 35668:case 35672:return wR;case 35669:case 35673:return DR;case 5125:return UR;case 36294:return LR;case 36295:return NR;case 36296:return OR;case 35678:case 36198:case 36298:case 36306:case 35682:return PR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return zR}}function HR(s,e){s.uniform1fv(this.addr,e)}function GR(s,e){const i=oo(e,this.size,2);s.uniform2fv(this.addr,i)}function VR(s,e){const i=oo(e,this.size,3);s.uniform3fv(this.addr,i)}function kR(s,e){const i=oo(e,this.size,4);s.uniform4fv(this.addr,i)}function XR(s,e){const i=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function WR(s,e){const i=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function YR(s,e){const i=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function qR(s,e){s.uniform1iv(this.addr,e)}function jR(s,e){s.uniform2iv(this.addr,e)}function ZR(s,e){s.uniform3iv(this.addr,e)}function KR(s,e){s.uniform4iv(this.addr,e)}function QR(s,e){s.uniform1uiv(this.addr,e)}function JR(s,e){s.uniform2uiv(this.addr,e)}function $R(s,e){s.uniform3uiv(this.addr,e)}function eC(s,e){s.uniform4uiv(this.addr,e)}function tC(s,e,i){const r=this.cache,l=e.length,u=Tc(i,l);Tn(r,u)||(s.uniform1iv(this.addr,u),An(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=hp:f=Gx;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,u[d])}function nC(s,e,i){const r=this.cache,l=e.length,u=Tc(i,l);Tn(r,u)||(s.uniform1iv(this.addr,u),An(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||kx,u[f])}function iC(s,e,i){const r=this.cache,l=e.length,u=Tc(i,l);Tn(r,u)||(s.uniform1iv(this.addr,u),An(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Xx,u[f])}function aC(s,e,i){const r=this.cache,l=e.length,u=Tc(i,l);Tn(r,u)||(s.uniform1iv(this.addr,u),An(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Vx,u[f])}function rC(s){switch(s){case 5126:return HR;case 35664:return GR;case 35665:return VR;case 35666:return kR;case 35674:return XR;case 35675:return WR;case 35676:return YR;case 5124:case 35670:return qR;case 35667:case 35671:return jR;case 35668:case 35672:return ZR;case 35669:case 35673:return KR;case 5125:return QR;case 36294:return JR;case 36295:return $R;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return aC}}class sC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=BR(i.type)}}class oC{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rC(i.type)}}class lC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function Ev(s,e){s.seq.push(e),s.map[e.id]=e}function uC(s,e,i){const r=s.name,l=r.length;for(dd.lastIndex=0;;){const u=dd.exec(r),f=dd.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Ev(i,p===void 0?new sC(d,s,e):new oC(d,s,e));break}else{let g=i.map[d];g===void 0&&(g=new lC(d),Ev(i,g)),i=g}}}class hc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);uC(d,m,this)}const l=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function bv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const cC=37297;let fC=0;function hC(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Tv=new gt;function dC(s){Ot._getMatrix(Tv,Ot.workingColorSpace,s);const e=`mat3( ${Tv.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(s)){case pc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Av(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+hC(s.getShaderSource(e),d)}else return u}function pC(s,e){const i=dC(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const mC={[cx]:"Linear",[fx]:"Reinhard",[hx]:"Cineon",[dx]:"ACESFilmic",[mx]:"AgX",[gx]:"Neutral",[px]:"Custom"};function gC(s,e){const i=mC[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ic=new te;function _C(){Ot.getLuminanceCoefficients(ic);const s=ic.x.toFixed(4),e=ic.y.toFixed(4),i=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function xC(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function SC(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function ll(s){return s!==""}function Rv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yC=/^[ \t]*#include +<([\w\d./]+)>/gm;function dp(s){return s.replace(yC,EC)}const MC=new Map;function EC(s,e){let i=_t[e];if(i===void 0){const r=MC.get(e);if(r!==void 0)i=_t[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return dp(i)}const bC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wv(s){return s.replace(bC,TC)}function TC(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Dv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const AC={[oc]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function RC(s){return AC[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const CC={[Jr]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[yc]:"ENVMAP_TYPE_CUBE_UV"};function wC(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":CC[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const DC={[$s]:"ENVMAP_MODE_REFRACTION"};function UC(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":DC[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LC={[ux]:"ENVMAP_BLENDING_MULTIPLY",[tb]:"ENVMAP_BLENDING_MIX",[nb]:"ENVMAP_BLENDING_ADD"};function NC(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":LC[s.combine]||"ENVMAP_BLENDING_NONE"}function OC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function PC(s,e,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=RC(i),p=wC(i),_=UC(i),g=NC(i),x=OC(i),M=vC(i),b=xC(u),T=l.createProgram();let y,v,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ll).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ll).join(`
`),v.length>0&&(v+=`
`)):(y=[Dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),v=[Dv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ra?"#define TONE_MAPPING":"",i.toneMapping!==ra?_t.tonemapping_pars_fragment:"",i.toneMapping!==ra?gC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,pC("linearToOutputTexel",i.outputColorSpace),_C(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),f=dp(f),f=Rv(f,i),f=Cv(f,i),d=dp(d),d=Rv(d,i),d=Cv(d,i),f=wv(f),d=wv(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===F_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===F_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=w+y+f,L=w+v+d,P=bv(l,l.VERTEX_SHADER,U),z=bv(l,l.FRAGMENT_SHADER,L);l.attachShader(T,P),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(V){if(s.debug.checkShaderErrors){const ne=l.getProgramInfoLog(T)||"",se=l.getShaderInfoLog(P)||"",me=l.getShaderInfoLog(z)||"",fe=ne.trim(),I=se.trim(),G=me.trim();let oe=!0,Te=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,P,z);else{const Me=Av(l,P,"vertex"),O=Av(l,z,"fragment");Nt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+Me+`
`+O)}else fe!==""?ut("WebGLProgram: Program Info Log:",fe):(I===""||G==="")&&(Te=!1);Te&&(V.diagnostics={runnable:oe,programLog:fe,vertexShader:{log:I,prefix:y},fragmentShader:{log:G,prefix:v}})}l.deleteShader(P),l.deleteShader(z),Z=new hc(l,T),C=SC(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&F(this),Z};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,cC)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=z,this}let FC=0;class IC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new zC(e),i.set(e,r)),r}}class zC{constructor(e){this.id=FC++,this.code=e,this.usedTimes=0}}function BC(s,e,i,r,l,u,f){const d=new Pp,m=new IC,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,V,ne,se){const me=ne.fog,fe=se.geometry,I=C.isMeshStandardMaterial?ne.environment:null,G=(C.isMeshStandardMaterial?i:e).get(C.envMap||I),oe=G&&G.mapping===yc?G.image.height:null,Te=b[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&ut("WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const Me=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,O=Me!==void 0?Me.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let ve,Ne,Ve,ae;if(Te){const je=ta[Te];ve=je.vertexShader,Ne=je.fragmentShader}else ve=C.vertexShader,Ne=C.fragmentShader,m.update(C),Ve=m.getVertexShaderID(C),ae=m.getFragmentShaderID(C);const he=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),Ye=se.isInstancedMesh===!0,We=se.isBatchedMesh===!0,vt=!!C.map,an=!!C.matcap,yt=!!G,xt=!!C.aoMap,Lt=!!C.lightMap,ct=!!C.bumpMap,rn=!!C.normalMap,X=!!C.displacementMap,jt=!!C.emissiveMap,Tt=!!C.metalnessMap,wt=!!C.roughnessMap,qe=C.anisotropy>0,N=C.clearcoat>0,E=C.dispersion>0,q=C.iridescence>0,pe=C.sheen>0,ye=C.transmission>0,le=qe&&!!C.anisotropyMap,$e=N&&!!C.clearcoatMap,Le=N&&!!C.clearcoatNormalMap,Je=N&&!!C.clearcoatRoughnessMap,we=q&&!!C.iridescenceMap,Ae=q&&!!C.iridescenceThicknessMap,De=pe&&!!C.sheenColorMap,Ie=pe&&!!C.sheenRoughnessMap,Ge=!!C.specularMap,Pe=!!C.specularColorMap,dt=!!C.specularIntensityMap,j=ye&&!!C.transmissionMap,Be=ye&&!!C.thicknessMap,Ue=!!C.gradientMap,ke=!!C.alphaMap,Ee=C.alphaTest>0,xe=!!C.alphaHash,Oe=!!C.extensions;let lt=ra;C.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(lt=s.toneMapping);const be={shaderID:Te,shaderType:C.type,shaderName:C.name,vertexShader:ve,fragmentShader:Ne,defines:C.defines,customVertexShaderID:Ve,customFragmentShaderID:ae,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:We,batchingColor:We&&se._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&se.instanceColor!==null,instancingMorph:Ye&&se.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:to,alphaToCoverage:!!C.alphaToCoverage,map:vt,matcap:an,envMap:yt,envMapMode:yt&&G.mapping,envMapCubeUVHeight:oe,aoMap:xt,lightMap:Lt,bumpMap:ct,normalMap:rn,displacementMap:X,emissiveMap:jt,normalMapObjectSpace:rn&&C.normalMapType===rb,normalMapTangentSpace:rn&&C.normalMapType===Tx,metalnessMap:Tt,roughnessMap:wt,anisotropy:qe,anisotropyMap:le,clearcoat:N,clearcoatMap:$e,clearcoatNormalMap:Le,clearcoatRoughnessMap:Je,dispersion:E,iridescence:q,iridescenceMap:we,iridescenceThicknessMap:Ae,sheen:pe,sheenColorMap:De,sheenRoughnessMap:Ie,specularMap:Ge,specularColorMap:Pe,specularIntensityMap:dt,transmission:ye,transmissionMap:j,thicknessMap:Be,gradientMap:Ue,opaque:C.transparent===!1&&C.blending===Ks&&C.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ee,alphaHash:xe,combine:C.combine,mapUv:vt&&T(C.map.channel),aoMapUv:xt&&T(C.aoMap.channel),lightMapUv:Lt&&T(C.lightMap.channel),bumpMapUv:ct&&T(C.bumpMap.channel),normalMapUv:rn&&T(C.normalMap.channel),displacementMapUv:X&&T(C.displacementMap.channel),emissiveMapUv:jt&&T(C.emissiveMap.channel),metalnessMapUv:Tt&&T(C.metalnessMap.channel),roughnessMapUv:wt&&T(C.roughnessMap.channel),anisotropyMapUv:le&&T(C.anisotropyMap.channel),clearcoatMapUv:$e&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Le&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&T(C.sheenRoughnessMap.channel),specularMapUv:Ge&&T(C.specularMap.channel),specularColorMapUv:Pe&&T(C.specularColorMap.channel),specularIntensityMapUv:dt&&T(C.specularIntensityMap.channel),transmissionMapUv:j&&T(C.transmissionMap.channel),thicknessMapUv:Be&&T(C.thicknessMap.channel),alphaMapUv:ke&&T(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(rn||qe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!fe.attributes.uv&&(vt||ke),fog:!!me,useFog:C.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Fe,skinning:se.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:vt&&C.map.isVideoTexture===!0&&Ot.getTransfer(C.map.colorSpace)===qt,decodeVideoTextureEmissive:jt&&C.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(C.emissiveMap.colorSpace)===qt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===na,flipSided:C.side===Hn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Oe&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&C.extensions.multiDraw===!0||We)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return be.vertexUv1s=p.has(1),be.vertexUv2s=p.has(2),be.vertexUv3s=p.has(3),p.clear(),be}function v(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)D.push(V),D.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(w(D,C),U(D,C),D.push(s.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function w(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function U(C,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),C.push(d.mask)}function L(C){const D=b[C.type];let V;if(D){const ne=ta[D];V=Zb.clone(ne.uniforms)}else V=C.uniforms;return V}function P(C,D){let V=g.get(D);return V!==void 0?++V.usedTimes:(V=new PC(s,D,C,u),_.push(V),g.set(D,V)),V}function z(C){if(--C.usedTimes===0){const D=_.indexOf(C);_[D]=_[_.length-1],_.pop(),g.delete(C.cacheKey),C.destroy()}}function F(C){m.remove(C)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:L,acquireProgram:P,releaseProgram:z,releaseShaderCache:F,programs:_,dispose:Z}}function HC(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function GC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(g,x,M,b,T,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:M,groupOrder:b,renderOrder:g.renderOrder,z:T,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=M,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=T,v.group=y),e++,v}function d(g,x,M,b,T,y){const v=f(g,x,M,b,T,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,x,M,b,T,y){const v=f(g,x,M,b,T,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||GC),r.length>1&&r.sort(x||Uv),l.length>1&&l.sort(x||Uv)}function _(){for(let g=e,x=s.length;g<x;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function VC(){let s=new WeakMap;function e(r,l){const u=s.get(r);let f;return u===void 0?(f=new Lv,s.set(r,[f])):l>=u.length?(f=new Lv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function kC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new te,color:new Ut};break;case"SpotLight":i={position:new te,direction:new te,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new te,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new te,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=i,i}}}function XC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let WC=0;function YC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qC(s){const e=new kC,i=XC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new te);const l=new te,u=new nn,f=new nn;function d(p){let _=0,g=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,b=0,T=0,y=0,v=0,w=0,U=0,L=0,P=0,z=0,F=0;p.sort(YC);for(let C=0,D=p.length;C<D;C++){const V=p[C],ne=V.color,se=V.intensity,me=V.distance;let fe=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===eo?fe=V.shadow.map.texture:fe=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=ne.r*se,g+=ne.g*se,x+=ne.b*se;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],se);F++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,oe=i.get(V);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,r.directionalShadow[M]=oe,r.directionalShadowMap[M]=fe,r.directionalShadowMatrix[M]=V.shadow.matrix,w++}r.directional[M]=I,M++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(ne).multiplyScalar(se),I.distance=me,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[T]=I;const G=V.shadow;if(V.map&&(r.spotLightMap[P]=V.map,P++,G.updateMatrices(V),V.castShadow&&z++),r.spotLightMatrix[T]=G.matrix,V.castShadow){const oe=i.get(V);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,r.spotShadow[T]=oe,r.spotShadowMap[T]=fe,L++}T++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(ne).multiplyScalar(se),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=I,y++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const G=V.shadow,oe=i.get(V);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,oe.shadowCameraNear=G.camera.near,oe.shadowCameraFar=G.camera.far,r.pointShadow[b]=oe,r.pointShadowMap[b]=fe,r.pointShadowMatrix[b]=V.shadow.matrix,U++}r.point[b]=I,b++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(se),I.groundColor.copy(V.groundColor).multiplyScalar(se),r.hemi[v]=I,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==b||Z.spotLength!==T||Z.rectAreaLength!==y||Z.hemiLength!==v||Z.numDirectionalShadows!==w||Z.numPointShadows!==U||Z.numSpotShadows!==L||Z.numSpotMaps!==P||Z.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=T,r.rectArea.length=y,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=L+P-z,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,Z.directionalLength=M,Z.pointLength=b,Z.spotLength=T,Z.rectAreaLength=y,Z.hemiLength=v,Z.numDirectionalShadows=w,Z.numPointShadows=U,Z.numSpotShadows=L,Z.numSpotMaps=P,Z.numLightProbes=F,r.version=WC++)}function m(p,_){let g=0,x=0,M=0,b=0,T=0;const y=_.matrixWorldInverse;for(let v=0,w=p.length;v<w;v++){const U=p[v];if(U.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),g++}else if(U.isSpotLight){const L=r.spot[M];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const L=r.rectArea[b];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),f.identity(),u.copy(U.matrixWorld),u.premultiply(y),f.extractRotation(u),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const L=r.point[x];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const L=r.hemi[T];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(y),T++}}}return{setup:d,setupView:m,state:r}}function Nv(s){const e=new qC(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function f(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function jC(s){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let d;return f===void 0?(d=new Nv(s),e.set(l,[d])):u>=f.length?(d=new Nv(s),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const ZC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QC=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],JC=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],Ov=new nn,al=new te,pd=new te;function $C(s,e,i){let r=new Fp;const l=new Pt,u=new Pt,f=new hn,d=new cT,m=new fT,p={},_=i.maxTextureSize,g={[Mr]:Hn,[Hn]:Mr,[na]:na},x=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:ZC,fragmentShader:KC}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new $n;b.setAttribute("position",new oa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new wn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let v=this.type;this.render=function(z,F,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;z.type===FE&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=oc);const C=s.getRenderTarget(),D=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Ia),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const se=v!==this.type;se&&F.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(fe=>fe.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,fe=z.length;me<fe;me++){const I=z[me],G=I.shadow;if(G===void 0){ut("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const oe=G.getFrameExtents();if(l.multiply(oe),u.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/oe.x),l.x=u.x*oe.x,G.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/oe.y),l.y=u.y*oe.y,G.mapSize.y=u.y)),G.map===null||se===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ol){if(I.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new sa(l.x,l.y,{format:eo,type:Ha,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new gl(l.x,l.y,ia),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=Ga,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn}else{I.isPointLight?(G.map=new Ox(l.x),G.map.depthTexture=new lT(l.x,la)):(G.map=new sa(l.x,l.y),G.map.depthTexture=new gl(l.x,l.y,la)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=Ga;const Me=s.state.buffers.depth.getReversed();this.type===oc?(G.map.depthTexture.compareFunction=Me?Lp:Up,G.map.depthTexture.minFilter=Yn,G.map.depthTexture.magFilter=Yn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn)}G.camera.updateProjectionMatrix()}const Te=G.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<Te;Me++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,Me),s.clear();else{Me===0&&(s.setRenderTarget(G.map),s.clear());const O=G.getViewport(Me);f.set(u.x*O.x,u.y*O.y,u.x*O.z,u.y*O.w),ne.viewport(f)}if(I.isPointLight){const O=G.camera,ie=G.matrix,ve=I.distance||O.far;ve!==O.far&&(O.far=ve,O.updateProjectionMatrix()),al.setFromMatrixPosition(I.matrixWorld),O.position.copy(al),pd.copy(O.position),pd.add(QC[Me]),O.up.copy(JC[Me]),O.lookAt(pd),O.updateMatrixWorld(),ie.makeTranslation(-al.x,-al.y,-al.z),Ov.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ov,O.coordinateSystem,O.reversedDepth)}else G.updateMatrices(I);r=G.getFrustum(),L(F,Z,G.camera,I,this.type)}G.isPointLightShadow!==!0&&this.type===ol&&w(G,Z),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,D,V)};function w(z,F){const Z=e.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new sa(l.x,l.y,{format:eo,type:Ha})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,Z,x,T,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,Z,M,T,null)}function U(z,F,Z,C){let D=null;const V=Z.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)D=V;else if(D=Z.isPointLight===!0?m:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ne=D.uuid,se=F.uuid;let me=p[ne];me===void 0&&(me={},p[ne]=me);let fe=me[se];fe===void 0&&(fe=D.clone(),me[se]=fe,F.addEventListener("dispose",P)),D=fe}if(D.visible=F.visible,D.wireframe=F.wireframe,C===ol?D.side=F.shadowSide!==null?F.shadowSide:F.side:D.side=F.shadowSide!==null?F.shadowSide:g[F.side],D.alphaMap=F.alphaMap,D.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,D.map=F.map,D.clipShadows=F.clipShadows,D.clippingPlanes=F.clippingPlanes,D.clipIntersection=F.clipIntersection,D.displacementMap=F.displacementMap,D.displacementScale=F.displacementScale,D.displacementBias=F.displacementBias,D.wireframeLinewidth=F.wireframeLinewidth,D.linewidth=F.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ne=s.properties.get(D);ne.light=Z}return D}function L(z,F,Z,C,D){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===ol)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,z.matrixWorld);const se=e.update(z),me=z.material;if(Array.isArray(me)){const fe=se.groups;for(let I=0,G=fe.length;I<G;I++){const oe=fe[I],Te=me[oe.materialIndex];if(Te&&Te.visible){const Me=U(z,Te,C,D);z.onBeforeShadow(s,z,F,Z,se,Me,oe),s.renderBufferDirect(Z,null,se,Me,z,oe),z.onAfterShadow(s,z,F,Z,se,Me,oe)}}}else if(me.visible){const fe=U(z,me,C,D);z.onBeforeShadow(s,z,F,Z,se,fe,null),s.renderBufferDirect(Z,null,se,fe,z,null),z.onAfterShadow(s,z,F,Z,se,fe,null)}}const ne=z.children;for(let se=0,me=ne.length;se<me;se++)L(ne[se],F,Z,C,D)}function P(z){z.target.removeEventListener("dispose",P);for(const Z in p){const C=p[Z],D=z.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const e3={[yd]:Md,[Ed]:Ad,[bd]:Rd,[Js]:Td,[Md]:yd,[Ad]:Ed,[Rd]:bd,[Td]:Js};function t3(s,e){function i(){let j=!1;const Be=new hn;let Ue=null;const ke=new hn(0,0,0,0);return{setMask:function(Ee){Ue!==Ee&&!j&&(s.colorMask(Ee,Ee,Ee,Ee),Ue=Ee)},setLocked:function(Ee){j=Ee},setClear:function(Ee,xe,Oe,lt,be){be===!0&&(Ee*=lt,xe*=lt,Oe*=lt),Be.set(Ee,xe,Oe,lt),ke.equals(Be)===!1&&(s.clearColor(Ee,xe,Oe,lt),ke.copy(Be))},reset:function(){j=!1,Ue=null,ke.set(-1,0,0,0)}}}function r(){let j=!1,Be=!1,Ue=null,ke=null,Ee=null;return{setReversed:function(xe){if(Be!==xe){const Oe=e.get("EXT_clip_control");xe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Be=xe;const lt=Ee;Ee=null,this.setClear(lt)}},getReversed:function(){return Be},setTest:function(xe){xe?he(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(xe){Ue!==xe&&!j&&(s.depthMask(xe),Ue=xe)},setFunc:function(xe){if(Be&&(xe=e3[xe]),ke!==xe){switch(xe){case yd:s.depthFunc(s.NEVER);break;case Md:s.depthFunc(s.ALWAYS);break;case Ed:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case bd:s.depthFunc(s.EQUAL);break;case Td:s.depthFunc(s.GEQUAL);break;case Ad:s.depthFunc(s.GREATER);break;case Rd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=xe}},setLocked:function(xe){j=xe},setClear:function(xe){Ee!==xe&&(Be&&(xe=1-xe),s.clearDepth(xe),Ee=xe)},reset:function(){j=!1,Ue=null,ke=null,Ee=null,Be=!1}}}function l(){let j=!1,Be=null,Ue=null,ke=null,Ee=null,xe=null,Oe=null,lt=null,be=null;return{setTest:function(je){j||(je?he(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(je){Be!==je&&!j&&(s.stencilMask(je),Be=je)},setFunc:function(je,et,tt){(Ue!==je||ke!==et||Ee!==tt)&&(s.stencilFunc(je,et,tt),Ue=je,ke=et,Ee=tt)},setOp:function(je,et,tt){(xe!==je||Oe!==et||lt!==tt)&&(s.stencilOp(je,et,tt),xe=je,Oe=et,lt=tt)},setLocked:function(je){j=je},setClear:function(je){be!==je&&(s.clearStencil(je),be=je)},reset:function(){j=!1,Be=null,Ue=null,ke=null,Ee=null,xe=null,Oe=null,lt=null,be=null}}}const u=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,w=null,U=null,L=null,P=null,z=null,F=new Ut(0,0,0),Z=0,C=!1,D=null,V=null,ne=null,se=null,me=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(oe)[1]),I=G>=1):oe.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),I=G>=2);let Te=null,Me={};const O=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),ve=new hn().fromArray(O),Ne=new hn().fromArray(ie);function Ve(j,Be,Ue,ke){const Ee=new Uint8Array(4),xe=s.createTexture();s.bindTexture(j,xe),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<Ue;Oe++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Be,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Be+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return xe}const ae={};ae[s.TEXTURE_2D]=Ve(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),he(s.DEPTH_TEST),f.setFunc(Js),ct(!1),rn(D_),he(s.CULL_FACE),xt(Ia);function he(j){_[j]!==!0&&(s.enable(j),_[j]=!0)}function Fe(j){_[j]!==!1&&(s.disable(j),_[j]=!1)}function Ye(j,Be){return g[j]!==Be?(s.bindFramebuffer(j,Be),g[j]=Be,j===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Be),j===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Be),!0):!1}function We(j,Be){let Ue=M,ke=!1;if(j){Ue=x.get(Be),Ue===void 0&&(Ue=[],x.set(Be,Ue));const Ee=j.textures;if(Ue.length!==Ee.length||Ue[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Oe=Ee.length;xe<Oe;xe++)Ue[xe]=s.COLOR_ATTACHMENT0+xe;Ue.length=Ee.length,ke=!0}}else Ue[0]!==s.BACK&&(Ue[0]=s.BACK,ke=!0);ke&&s.drawBuffers(Ue)}function vt(j){return b!==j?(s.useProgram(j),b=j,!0):!1}const an={[jr]:s.FUNC_ADD,[zE]:s.FUNC_SUBTRACT,[BE]:s.FUNC_REVERSE_SUBTRACT};an[HE]=s.MIN,an[GE]=s.MAX;const yt={[VE]:s.ZERO,[kE]:s.ONE,[XE]:s.SRC_COLOR,[xd]:s.SRC_ALPHA,[KE]:s.SRC_ALPHA_SATURATE,[jE]:s.DST_COLOR,[YE]:s.DST_ALPHA,[WE]:s.ONE_MINUS_SRC_COLOR,[Sd]:s.ONE_MINUS_SRC_ALPHA,[ZE]:s.ONE_MINUS_DST_COLOR,[qE]:s.ONE_MINUS_DST_ALPHA,[QE]:s.CONSTANT_COLOR,[JE]:s.ONE_MINUS_CONSTANT_COLOR,[$E]:s.CONSTANT_ALPHA,[eb]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(j,Be,Ue,ke,Ee,xe,Oe,lt,be,je){if(j===Ia){T===!0&&(Fe(s.BLEND),T=!1);return}if(T===!1&&(he(s.BLEND),T=!0),j!==IE){if(j!==y||je!==C){if((v!==jr||L!==jr)&&(s.blendEquation(s.FUNC_ADD),v=jr,L=jr),je)switch(j){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case U_:s.blendFunc(s.ONE,s.ONE);break;case L_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case N_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Nt("WebGLState: Invalid blending: ",j);break}else switch(j){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case U_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case L_:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N_:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",j);break}w=null,U=null,P=null,z=null,F.set(0,0,0),Z=0,y=j,C=je}return}Ee=Ee||Be,xe=xe||Ue,Oe=Oe||ke,(Be!==v||Ee!==L)&&(s.blendEquationSeparate(an[Be],an[Ee]),v=Be,L=Ee),(Ue!==w||ke!==U||xe!==P||Oe!==z)&&(s.blendFuncSeparate(yt[Ue],yt[ke],yt[xe],yt[Oe]),w=Ue,U=ke,P=xe,z=Oe),(lt.equals(F)===!1||be!==Z)&&(s.blendColor(lt.r,lt.g,lt.b,be),F.copy(lt),Z=be),y=j,C=!1}function Lt(j,Be){j.side===na?Fe(s.CULL_FACE):he(s.CULL_FACE);let Ue=j.side===Hn;Be&&(Ue=!Ue),ct(Ue),j.blending===Ks&&j.transparent===!1?xt(Ia):xt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),u.setMask(j.colorWrite);const ke=j.stencilWrite;d.setTest(ke),ke&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),jt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(j){D!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),D=j)}function rn(j){j!==OE?(he(s.CULL_FACE),j!==V&&(j===D_?s.cullFace(s.BACK):j===PE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),V=j}function X(j){j!==ne&&(I&&s.lineWidth(j),ne=j)}function jt(j,Be,Ue){j?(he(s.POLYGON_OFFSET_FILL),(se!==Be||me!==Ue)&&(s.polygonOffset(Be,Ue),se=Be,me=Ue)):Fe(s.POLYGON_OFFSET_FILL)}function Tt(j){j?he(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function wt(j){j===void 0&&(j=s.TEXTURE0+fe-1),Te!==j&&(s.activeTexture(j),Te=j)}function qe(j,Be,Ue){Ue===void 0&&(Te===null?Ue=s.TEXTURE0+fe-1:Ue=Te);let ke=Me[Ue];ke===void 0&&(ke={type:void 0,texture:void 0},Me[Ue]=ke),(ke.type!==j||ke.texture!==Be)&&(Te!==Ue&&(s.activeTexture(Ue),Te=Ue),s.bindTexture(j,Be||ae[j]),ke.type=j,ke.texture=Be)}function N(){const j=Me[Te];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function pe(){try{s.texSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function ye(){try{s.texSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Le(){try{s.texStorage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Je(){try{s.texStorage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function we(){try{s.texImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Ae(){try{s.texImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function De(j){ve.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),ve.copy(j))}function Ie(j){Ne.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Ne.copy(j))}function Ge(j,Be){let Ue=p.get(Be);Ue===void 0&&(Ue=new WeakMap,p.set(Be,Ue));let ke=Ue.get(j);ke===void 0&&(ke=s.getUniformBlockIndex(Be,j.name),Ue.set(j,ke))}function Pe(j,Be){const ke=p.get(Be).get(j);m.get(Be)!==ke&&(s.uniformBlockBinding(Be,ke,j.__bindingPointIndex),m.set(Be,ke))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},Te=null,Me={},g={},x=new WeakMap,M=[],b=null,T=!1,y=null,v=null,w=null,U=null,L=null,P=null,z=null,F=new Ut(0,0,0),Z=0,C=!1,D=null,V=null,ne=null,se=null,me=null,ve.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:he,disable:Fe,bindFramebuffer:Ye,drawBuffers:We,useProgram:vt,setBlending:xt,setMaterial:Lt,setFlipSided:ct,setCullFace:rn,setLineWidth:X,setPolygonOffset:jt,setScissorTest:Tt,activeTexture:wt,bindTexture:qe,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:we,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:Pe,texStorage2D:Le,texStorage3D:Je,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:$e,scissor:De,viewport:Ie,reset:dt}}function n3(s,e,i,r,l,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,_=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return M?new OffscreenCanvas(N,E):gc("canvas")}function T(N,E,q){let pe=1;const ye=qe(N);if((ye.width>q||ye.height>q)&&(pe=q/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const le=Math.floor(pe*ye.width),$e=Math.floor(pe*ye.height);g===void 0&&(g=b(le,$e));const Le=E?b(le,$e):g;return Le.width=le,Le.height=$e,Le.getContext("2d").drawImage(N,0,0,le,$e),ut("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+le+"x"+$e+")."),Le}else return"data"in N&&ut("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,E,q,pe,ye=!1){if(N!==null){if(s[N]!==void 0)return s[N];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let le=E;if(E===s.RED&&(q===s.FLOAT&&(le=s.R32F),q===s.HALF_FLOAT&&(le=s.R16F),q===s.UNSIGNED_BYTE&&(le=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(le=s.R8UI),q===s.UNSIGNED_SHORT&&(le=s.R16UI),q===s.UNSIGNED_INT&&(le=s.R32UI),q===s.BYTE&&(le=s.R8I),q===s.SHORT&&(le=s.R16I),q===s.INT&&(le=s.R32I)),E===s.RG&&(q===s.FLOAT&&(le=s.RG32F),q===s.HALF_FLOAT&&(le=s.RG16F),q===s.UNSIGNED_BYTE&&(le=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(le=s.RG8UI),q===s.UNSIGNED_SHORT&&(le=s.RG16UI),q===s.UNSIGNED_INT&&(le=s.RG32UI),q===s.BYTE&&(le=s.RG8I),q===s.SHORT&&(le=s.RG16I),q===s.INT&&(le=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(le=s.RGB8UI),q===s.UNSIGNED_SHORT&&(le=s.RGB16UI),q===s.UNSIGNED_INT&&(le=s.RGB32UI),q===s.BYTE&&(le=s.RGB8I),q===s.SHORT&&(le=s.RGB16I),q===s.INT&&(le=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),q===s.UNSIGNED_INT&&(le=s.RGBA32UI),q===s.BYTE&&(le=s.RGBA8I),q===s.SHORT&&(le=s.RGBA16I),q===s.INT&&(le=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),E===s.RGBA){const $e=ye?pc:Ot.getTransfer(pe);q===s.FLOAT&&(le=s.RGBA32F),q===s.HALF_FLOAT&&(le=s.RGBA16F),q===s.UNSIGNED_BYTE&&(le=$e===qt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function L(N,E){let q;return N?E===null||E===la||E===dl?q=s.DEPTH24_STENCIL8:E===ia?q=s.DEPTH32F_STENCIL8:E===hl&&(q=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===la||E===dl?q=s.DEPTH_COMPONENT24:E===ia?q=s.DEPTH_COMPONENT32F:E===hl&&(q=s.DEPTH_COMPONENT16),q}function P(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Bn&&N.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function z(N){const E=N.target;E.removeEventListener("dispose",z),Z(E),E.isVideoTexture&&_.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),D(E)}function Z(N){const E=r.get(N);if(E.__webglInit===void 0)return;const q=N.source,pe=x.get(q);if(pe){const ye=pe[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&C(N),Object.keys(pe).length===0&&x.delete(q)}r.remove(N)}function C(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const q=N.source,pe=x.get(q);delete pe[E.__cacheKey],f.memory.textures--}function D(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ye=0;ye<E.__webglFramebuffer[pe].length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[pe][ye]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let pe=0,ye=q.length;pe<ye;pe++){const le=r.get(q[pe]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),f.memory.textures--),r.remove(q[pe])}r.remove(N)}let V=0;function ne(){V=0}function se(){const N=V;return N>=l.maxTextures&&ut("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function me(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function fe(N,E){const q=r.get(N);if(N.isVideoTexture&&Tt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const pe=N.image;if(pe===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(q,N,E);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function I(N,E){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){ae(q,N,E);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function G(N,E){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){ae(q,N,E);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function oe(N,E){const q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){he(q,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const Te={[Dd]:s.REPEAT,[Pa]:s.CLAMP_TO_EDGE,[Ud]:s.MIRRORED_REPEAT},Me={[Bn]:s.NEAREST,[ib]:s.NEAREST_MIPMAP_NEAREST,[Ou]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[zh]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},O={[sb]:s.NEVER,[fb]:s.ALWAYS,[ob]:s.LESS,[Up]:s.LEQUAL,[lb]:s.EQUAL,[Lp]:s.GEQUAL,[ub]:s.GREATER,[cb]:s.NOTEQUAL};function ie(N,E){if(E.type===ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yn||E.magFilter===zh||E.magFilter===Ou||E.magFilter===Kr||E.minFilter===Yn||E.minFilter===zh||E.minFilter===Ou||E.minFilter===Kr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Te[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Te[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Te[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Me[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==Ou&&E.minFilter!==Kr||E.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ve(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",z));const pe=E.source;let ye=x.get(pe);ye===void 0&&(ye={},x.set(pe,ye));const le=me(E);if(le!==N.__cacheKey){ye[le]===void 0&&(ye[le]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,q=!0),ye[le].usedTimes++;const $e=ye[N.__cacheKey];$e!==void 0&&(ye[N.__cacheKey].usedTimes--,$e.usedTimes===0&&C(E)),N.__cacheKey=le,N.__webglTexture=ye[le].texture}return q}function Ne(N,E,q){return Math.floor(Math.floor(N/q)/E)}function Ve(N,E,q,pe){const le=N.updateRanges;if(le.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,pe,E.data);else{le.sort((Ae,De)=>Ae.start-De.start);let $e=0;for(let Ae=1;Ae<le.length;Ae++){const De=le[$e],Ie=le[Ae],Ge=De.start+De.count,Pe=Ne(Ie.start,E.width,4),dt=Ne(De.start,E.width,4);Ie.start<=Ge+1&&Pe===dt&&Ne(Ie.start+Ie.count-1,E.width,4)===Pe?De.count=Math.max(De.count,Ie.start+Ie.count-De.start):(++$e,le[$e]=Ie)}le.length=$e+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Ae=0,De=le.length;Ae<De;Ae++){const Ie=le[Ae],Ge=Math.floor(Ie.start/4),Pe=Math.ceil(Ie.count/4),dt=Ge%E.width,j=Math.floor(Ge/E.width),Be=Pe,Ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,j),i.texSubImage2D(s.TEXTURE_2D,0,dt,j,Be,Ue,q,pe,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function ae(N,E,q){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const ye=ve(N,E),le=E.source;i.bindTexture(pe,N.__webglTexture,s.TEXTURE0+q);const $e=r.get(le);if(le.version!==$e.__version||ye===!0){i.activeTexture(s.TEXTURE0+q);const Le=Ot.getPrimaries(Ot.workingColorSpace),Je=E.colorSpace===Sr?null:Ot.getPrimaries(E.colorSpace),we=E.colorSpace===Sr||Le===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ae=T(E.image,!1,l.maxTextureSize);Ae=wt(E,Ae);const De=u.convert(E.format,E.colorSpace),Ie=u.convert(E.type);let Ge=U(E.internalFormat,De,Ie,E.colorSpace,E.isVideoTexture);ie(pe,E);let Pe;const dt=E.mipmaps,j=E.isVideoTexture!==!0,Be=$e.__version===void 0||ye===!0,Ue=le.dataReady,ke=P(E,Ae);if(E.isDepthTexture)Ge=L(E.format===Qr,E.type),Be&&(j?i.texStorage2D(s.TEXTURE_2D,1,Ge,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Ge,Ae.width,Ae.height,0,De,Ie,null));else if(E.isDataTexture)if(dt.length>0){j&&Be&&i.texStorage2D(s.TEXTURE_2D,ke,Ge,dt[0].width,dt[0].height);for(let Ee=0,xe=dt.length;Ee<xe;Ee++)Pe=dt[Ee],j?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,De,Ie,Pe.data):i.texImage2D(s.TEXTURE_2D,Ee,Ge,Pe.width,Pe.height,0,De,Ie,Pe.data);E.generateMipmaps=!1}else j?(Be&&i.texStorage2D(s.TEXTURE_2D,ke,Ge,Ae.width,Ae.height),Ue&&Ve(E,Ae,De,Ie)):i.texImage2D(s.TEXTURE_2D,0,Ge,Ae.width,Ae.height,0,De,Ie,Ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&Be&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ke,Ge,dt[0].width,dt[0].height,Ae.depth);for(let Ee=0,xe=dt.length;Ee<xe;Ee++)if(Pe=dt[Ee],E.format!==Wi)if(De!==null)if(j){if(Ue)if(E.layerUpdates.size>0){const Oe=fv(Pe.width,Pe.height,E.format,E.type);for(const lt of E.layerUpdates){const be=Pe.data.subarray(lt*Oe/Pe.data.BYTES_PER_ELEMENT,(lt+1)*Oe/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,lt,Pe.width,Pe.height,1,De,be)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,Ae.depth,De,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Ge,Pe.width,Pe.height,Ae.depth,0,Pe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ue&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Pe.width,Pe.height,Ae.depth,De,Ie,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Ge,Pe.width,Pe.height,Ae.depth,0,De,Ie,Pe.data)}else{j&&Be&&i.texStorage2D(s.TEXTURE_2D,ke,Ge,dt[0].width,dt[0].height);for(let Ee=0,xe=dt.length;Ee<xe;Ee++)Pe=dt[Ee],E.format!==Wi?De!==null?j?Ue&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,De,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Ge,Pe.width,Pe.height,0,Pe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Pe.width,Pe.height,De,Ie,Pe.data):i.texImage2D(s.TEXTURE_2D,Ee,Ge,Pe.width,Pe.height,0,De,Ie,Pe.data)}else if(E.isDataArrayTexture)if(j){if(Be&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ke,Ge,Ae.width,Ae.height,Ae.depth),Ue)if(E.layerUpdates.size>0){const Ee=fv(Ae.width,Ae.height,E.format,E.type);for(const xe of E.layerUpdates){const Oe=Ae.data.subarray(xe*Ee/Ae.data.BYTES_PER_ELEMENT,(xe+1)*Ee/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Ae.width,Ae.height,1,De,Ie,Oe)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,De,Ie,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,Ae.width,Ae.height,Ae.depth,0,De,Ie,Ae.data);else if(E.isData3DTexture)j?(Be&&i.texStorage3D(s.TEXTURE_3D,ke,Ge,Ae.width,Ae.height,Ae.depth),Ue&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,De,Ie,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Ge,Ae.width,Ae.height,Ae.depth,0,De,Ie,Ae.data);else if(E.isFramebufferTexture){if(Be)if(j)i.texStorage2D(s.TEXTURE_2D,ke,Ge,Ae.width,Ae.height);else{let Ee=Ae.width,xe=Ae.height;for(let Oe=0;Oe<ke;Oe++)i.texImage2D(s.TEXTURE_2D,Oe,Ge,Ee,xe,0,De,Ie,null),Ee>>=1,xe>>=1}}else if(dt.length>0){if(j&&Be){const Ee=qe(dt[0]);i.texStorage2D(s.TEXTURE_2D,ke,Ge,Ee.width,Ee.height)}for(let Ee=0,xe=dt.length;Ee<xe;Ee++)Pe=dt[Ee],j?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,De,Ie,Pe):i.texImage2D(s.TEXTURE_2D,Ee,Ge,De,Ie,Pe);E.generateMipmaps=!1}else if(j){if(Be){const Ee=qe(Ae);i.texStorage2D(s.TEXTURE_2D,ke,Ge,Ee.width,Ee.height)}Ue&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ie,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Ge,De,Ie,Ae);y(E)&&v(pe),$e.__version=le.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function he(N,E,q){if(E.image.length!==6)return;const pe=ve(N,E),ye=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+q);const le=r.get(ye);if(ye.version!==le.__version||pe===!0){i.activeTexture(s.TEXTURE0+q);const $e=Ot.getPrimaries(Ot.workingColorSpace),Le=E.colorSpace===Sr?null:Ot.getPrimaries(E.colorSpace),Je=E.colorSpace===Sr||$e===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,Ae=E.image[0]&&E.image[0].isDataTexture,De=[];for(let xe=0;xe<6;xe++)!we&&!Ae?De[xe]=T(E.image[xe],!0,l.maxCubemapSize):De[xe]=Ae?E.image[xe].image:E.image[xe],De[xe]=wt(E,De[xe]);const Ie=De[0],Ge=u.convert(E.format,E.colorSpace),Pe=u.convert(E.type),dt=U(E.internalFormat,Ge,Pe,E.colorSpace),j=E.isVideoTexture!==!0,Be=le.__version===void 0||pe===!0,Ue=ye.dataReady;let ke=P(E,Ie);ie(s.TEXTURE_CUBE_MAP,E);let Ee;if(we){j&&Be&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ke,dt,Ie.width,Ie.height);for(let xe=0;xe<6;xe++){Ee=De[xe].mipmaps;for(let Oe=0;Oe<Ee.length;Oe++){const lt=Ee[Oe];E.format!==Wi?Ge!==null?j?Ue&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe,0,0,lt.width,lt.height,Ge,lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe,dt,lt.width,lt.height,0,lt.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe,0,0,lt.width,lt.height,Ge,Pe,lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe,dt,lt.width,lt.height,0,Ge,Pe,lt.data)}}}else{if(Ee=E.mipmaps,j&&Be){Ee.length>0&&ke++;const xe=qe(De[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ke,dt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){j?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,De[xe].width,De[xe].height,Ge,Pe,De[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,dt,De[xe].width,De[xe].height,0,Ge,Pe,De[xe].data);for(let Oe=0;Oe<Ee.length;Oe++){const be=Ee[Oe].image[xe].image;j?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe+1,0,0,be.width,be.height,Ge,Pe,be.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe+1,dt,be.width,be.height,0,Ge,Pe,be.data)}}else{j?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ge,Pe,De[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,dt,Ge,Pe,De[xe]);for(let Oe=0;Oe<Ee.length;Oe++){const lt=Ee[Oe];j?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe+1,0,0,Ge,Pe,lt.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Oe+1,dt,Ge,Pe,lt.image[xe])}}}y(E)&&v(s.TEXTURE_CUBE_MAP),le.__version=ye.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Fe(N,E,q,pe,ye,le){const $e=u.convert(q.format,q.colorSpace),Le=u.convert(q.type),Je=U(q.internalFormat,$e,Le,q.colorSpace),we=r.get(E),Ae=r.get(q);if(Ae.__renderTarget=E,!we.__hasExternalTextures){const De=Math.max(1,E.width>>le),Ie=Math.max(1,E.height>>le);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?i.texImage3D(ye,le,Je,De,Ie,E.depth,0,$e,Le,null):i.texImage2D(ye,le,Je,De,Ie,0,$e,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ye,Ae.__webglTexture,0,X(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ye,Ae.__webglTexture,le),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(N,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const pe=E.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,le=L(E.stencilBuffer,ye),$e=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(E),le,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(E),le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,le,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,N)}else{const pe=E.textures;for(let ye=0;ye<pe.length;ye++){const le=pe[ye],$e=u.convert(le.format,le.colorSpace),Le=u.convert(le.type),Je=U(le.internalFormat,$e,Le,le.colorSpace);jt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(E),Je,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(E),Je,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Je,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(N,E,q){const pe=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=r.get(E.depthTexture);if(ye.__renderTarget=E,(!ye.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),ye.__webglTexture===void 0){ye.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),ie(s.TEXTURE_CUBE_MAP,E.depthTexture);const we=u.convert(E.depthTexture.format),Ae=u.convert(E.depthTexture.type);let De;E.depthTexture.format===Ga?De=s.DEPTH_COMPONENT24:E.depthTexture.format===Qr&&(De=s.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,De,E.width,E.height,0,we,Ae,null)}}else fe(E.depthTexture,0);const le=ye.__webglTexture,$e=X(E),Le=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,Je=E.depthTexture.format===Qr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ga)jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,Le,le,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Je,Le,le,0);else if(E.depthTexture.format===Qr)jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,Le,le,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Je,Le,le,0);else throw new Error("Unknown depthTexture format")}function vt(N){const E=r.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=pe}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)We(E.__webglFramebuffer[pe],N,pe);else{const pe=N.texture.mipmaps;pe&&pe.length>0?We(E.__webglFramebuffer[0],N,0):We(E.__webglFramebuffer,N,0)}else if(q){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),Ye(E.__webglDepthbuffer[pe],N,!1);else{const ye=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,le)}}else{const pe=N.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ye(E.__webglDepthbuffer,N,!1);else{const ye=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,le)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function an(N,E,q){const pe=r.get(N);E!==void 0&&Fe(pe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&vt(N)}function yt(N){const E=N.texture,q=r.get(N),pe=r.get(E);N.addEventListener("dispose",F);const ye=N.textures,le=N.isWebGLCubeRenderTarget===!0,$e=ye.length>1;if($e||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,f.memory.textures++),le){q.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Le]=[];for(let Je=0;Je<E.mipmaps.length;Je++)q.__webglFramebuffer[Le][Je]=s.createFramebuffer()}else q.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Le=0;Le<E.mipmaps.length;Le++)q.__webglFramebuffer[Le]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if($e)for(let Le=0,Je=ye.length;Le<Je;Le++){const we=r.get(ye[Le]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&jt(N)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Le=0;Le<ye.length;Le++){const Je=ye[Le];q.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Le]);const we=u.convert(Je.format,Je.colorSpace),Ae=u.convert(Je.type),De=U(Je.internalFormat,we,Ae,Je.colorSpace,N.isXRRenderTarget===!0),Ie=X(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,De,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,q.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ye(q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){i.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(s.TEXTURE_CUBE_MAP,E);for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)Fe(q.__webglFramebuffer[Le][Je],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Je);else Fe(q.__webglFramebuffer[Le],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);y(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($e){for(let Le=0,Je=ye.length;Le<Je;Le++){const we=ye[Le],Ae=r.get(we);let De=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(De=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,Ae.__webglTexture),ie(De,we),Fe(q.__webglFramebuffer,N,we,s.COLOR_ATTACHMENT0+Le,De,0),y(we)&&v(De)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,pe.__webglTexture),ie(Le,E),E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)Fe(q.__webglFramebuffer[Je],N,E,s.COLOR_ATTACHMENT0,Le,Je);else Fe(q.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Le,0);y(E)&&v(Le),i.unbindTexture()}N.depthBuffer&&vt(N)}function xt(N){const E=N.textures;for(let q=0,pe=E.length;q<pe;q++){const ye=E[q];if(y(ye)){const le=w(N),$e=r.get(ye).__webglTexture;i.bindTexture(le,$e),v(le),i.unbindTexture()}}}const Lt=[],ct=[];function rn(N){if(N.samples>0){if(jt(N)===!1){const E=N.textures,q=N.width,pe=N.height;let ye=s.COLOR_BUFFER_BIT;const le=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(N),Le=E.length>1;if(Le)for(let we=0;we<E.length;we++)i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Je=N.texture.mipmaps;Je&&Je.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let we=0;we<E.length;we++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[we]);const Ae=r.get(E[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,q,pe,0,0,q,pe,ye,s.NEAREST),m===!0&&(Lt.length=0,ct.length=0,Lt.push(s.COLOR_ATTACHMENT0+we),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Lt.push(le),ct.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let we=0;we<E.length;we++){i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,$e.__webglColorRenderbuffer[we]);const Ae=r.get(E[we]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Ae,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function X(N){return Math.min(l.maxSamples,N.samples)}function jt(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Tt(N){const E=f.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function wt(N,E){const q=N.colorSpace,pe=N.format,ye=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==to&&q!==Sr&&(Ot.getTransfer(q)===qt?(pe!==Wi||ye!==xi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",q)),E}function qe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=ne,this.setTexture2D=fe,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=oe,this.rebindTextures=an,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function i3(s,e){function i(r,l=Sr){let u;const f=Ot.getTransfer(l);if(r===xi)return s.UNSIGNED_BYTE;if(r===Ap)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Sx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===yx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===vx)return s.BYTE;if(r===xx)return s.SHORT;if(r===hl)return s.UNSIGNED_SHORT;if(r===Tp)return s.INT;if(r===la)return s.UNSIGNED_INT;if(r===ia)return s.FLOAT;if(r===Ha)return s.HALF_FLOAT;if(r===Mx)return s.ALPHA;if(r===Ex)return s.RGB;if(r===Wi)return s.RGBA;if(r===Ga)return s.DEPTH_COMPONENT;if(r===Qr)return s.DEPTH_STENCIL;if(r===bx)return s.RED;if(r===Cp)return s.RED_INTEGER;if(r===eo)return s.RG;if(r===wp)return s.RG_INTEGER;if(r===Dp)return s.RGBA_INTEGER;if(r===lc||r===uc||r===cc||r===fc)if(f===qt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ld||r===Nd||r===Od||r===Pd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ld)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Od)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fd||r===Id||r===zd||r===Bd||r===Hd||r===Gd||r===Vd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Fd||r===Id)return f===qt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===zd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Bd)return u.COMPRESSED_R11_EAC;if(r===Hd)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Gd)return u.COMPRESSED_RG11_EAC;if(r===Vd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===kd||r===Xd||r===Wd||r===Yd||r===qd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===ep||r===tp||r===np)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===kd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$d)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ep)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tp)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===np)return f===qt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ip||r===ap||r===rp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===ip)return f===qt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ap)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sp||r===op||r===lp||r===up)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===sp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===op)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===up)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const a3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class s3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ix(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ca({vertexShader:a3,fragmentShader:r3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wn(new Ec(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o3 extends ro{constructor(e,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,M=null,b=null;const T=typeof XRWebGLBinding<"u",y=new s3,v={},w=i.getContextAttributes();let U=null,L=null;const P=[],z=[],F=new Pt;let Z=null;const C=new vi;C.viewport=new hn;const D=new vi;D.viewport=new hn;const V=[C,D],ne=new gT;let se=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let he=P[ae];return he===void 0&&(he=new rd,P[ae]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ae){let he=P[ae];return he===void 0&&(he=new rd,P[ae]=he),he.getGripSpace()},this.getHand=function(ae){let he=P[ae];return he===void 0&&(he=new rd,P[ae]=he),he.getHandSpace()};function fe(ae){const he=z.indexOf(ae.inputSource);if(he===-1)return;const Fe=P[he];Fe!==void 0&&(Fe.update(ae.inputSource,ae.frame,p||f),Fe.dispatchEvent({type:ae.type,data:ae.inputSource}))}function I(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",G);for(let ae=0;ae<P.length;ae++){const he=z[ae];he!==null&&(z[ae]=null,P[ae].disconnect(he))}se=null,me=null,y.reset();for(const ae in v)delete v[ae];e.setRenderTarget(U),M=null,x=null,g=null,l=null,L=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){u=ae,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",I),l.addEventListener("inputsourceschange",G),w.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Fe=null,Ye=null,We=null;w.depth&&(We=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Fe=w.stencil?Qr:Ga,Ye=w.stencil?dl:la);const vt={colorFormat:i.RGBA8,depthFormat:We,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(vt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new sa(x.textureWidth,x.textureHeight,{format:Wi,type:xi,depthTexture:new gl(x.textureWidth,x.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Fe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Fe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Fe),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new sa(M.framebufferWidth,M.framebufferHeight,{format:Wi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ve.setContext(l),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ae){for(let he=0;he<ae.removed.length;he++){const Fe=ae.removed[he],Ye=z.indexOf(Fe);Ye>=0&&(z[Ye]=null,P[Ye].disconnect(Fe))}for(let he=0;he<ae.added.length;he++){const Fe=ae.added[he];let Ye=z.indexOf(Fe);if(Ye===-1){for(let vt=0;vt<P.length;vt++)if(vt>=z.length){z.push(Fe),Ye=vt;break}else if(z[vt]===null){z[vt]=Fe,Ye=vt;break}if(Ye===-1)break}const We=P[Ye];We&&We.connect(Fe)}}const oe=new te,Te=new te;function Me(ae,he,Fe){oe.setFromMatrixPosition(he.matrixWorld),Te.setFromMatrixPosition(Fe.matrixWorld);const Ye=oe.distanceTo(Te),We=he.projectionMatrix.elements,vt=Fe.projectionMatrix.elements,an=We[14]/(We[10]-1),yt=We[14]/(We[10]+1),xt=(We[9]+1)/We[5],Lt=(We[9]-1)/We[5],ct=(We[8]-1)/We[0],rn=(vt[8]+1)/vt[0],X=an*ct,jt=an*rn,Tt=Ye/(-ct+rn),wt=Tt*-ct;if(he.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(wt),ae.translateZ(Tt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),We[10]===-1)ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const qe=an+Tt,N=yt+Tt,E=X-wt,q=jt+(Ye-wt),pe=xt*yt/N*qe,ye=Lt*yt/N*qe;ae.projectionMatrix.makePerspective(E,q,pe,ye,qe,N),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,he){he===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(he.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let he=ae.near,Fe=ae.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(Fe=y.depthFar)),ne.near=D.near=C.near=he,ne.far=D.far=C.far=Fe,(se!==ne.near||me!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),se=ne.near,me=ne.far),ne.layers.mask=ae.layers.mask|6,C.layers.mask=ne.layers.mask&3,D.layers.mask=ne.layers.mask&5;const Ye=ae.parent,We=ne.cameras;O(ne,Ye);for(let vt=0;vt<We.length;vt++)O(We[vt],Ye);We.length===2?Me(ne,C,D):ne.projectionMatrix.copy(C.projectionMatrix),ie(ae,ne,Ye)};function ie(ae,he,Fe){Fe===null?ae.matrix.copy(he.matrixWorld):(ae.matrix.copy(Fe.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(he.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=ml*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(ae){m=ae,x!==null&&(x.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(ae){return v[ae]};let ve=null;function Ne(ae,he){if(_=he.getViewerPose(p||f),b=he,_!==null){const Fe=_.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Ye=!1;Fe.length!==ne.cameras.length&&(ne.cameras.length=0,Ye=!0);for(let yt=0;yt<Fe.length;yt++){const xt=Fe[yt];let Lt=null;if(M!==null)Lt=M.getViewport(xt);else{const rn=g.getViewSubImage(x,xt);Lt=rn.viewport,yt===0&&(e.setRenderTargetTextures(L,rn.colorTexture,rn.depthStencilTexture),e.setRenderTarget(L))}let ct=V[yt];ct===void 0&&(ct=new vi,ct.layers.enable(yt),ct.viewport=new hn,V[yt]=ct),ct.matrix.fromArray(xt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(xt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),yt===0&&(ne.matrix.copy(ct.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ye===!0&&ne.cameras.push(ct)}const We=l.enabledFeatures;if(We&&We.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const yt=g.getDepthInformation(Fe[0]);yt&&yt.isValid&&yt.texture&&y.init(yt,l.renderState)}if(We&&We.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let yt=0;yt<Fe.length;yt++){const xt=Fe[yt].camera;if(xt){let Lt=v[xt];Lt||(Lt=new Ix,v[xt]=Lt);const ct=g.getCameraImage(xt);Lt.sourceTexture=ct}}}}for(let Fe=0;Fe<P.length;Fe++){const Ye=z[Fe],We=P[Fe];Ye!==null&&We!==void 0&&We.update(Ye,he,p||f)}ve&&ve(ae,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),b=null}const Ve=new Hx;Ve.setAnimationLoop(Ne),this.setAnimationLoop=function(ae){ve=ae},this.dispose=function(){}}}const Wr=new ua,l3=new nn;function u3(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Ux(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,w,U,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,L)):v.isMeshMatcapMaterial?(u(y,v),b(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),T(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,w,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Hn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Hn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const w=e.get(v),U=w.envMap,L=w.envMapRotation;U&&(y.envMap.value=U,Wr.copy(L),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(l3.makeRotationFromEuler(Wr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,w,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*w,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,w){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Hn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,v){v.matcap&&(y.matcap.value=v.matcap)}function T(y,v){const w=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function c3(s,e,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,U){const L=U.program;r.uniformBlockBinding(w,L)}function p(w,U){let L=l[w.id];L===void 0&&(b(w),L=_(w),l[w.id]=L,w.addEventListener("dispose",y));const P=U.program;r.updateUBOMapping(w,P);const z=e.render.frame;u[w.id]!==z&&(x(w),u[w.id]=z)}function _(w){const U=g();w.__bindingPointIndex=U;const L=s.createBuffer(),P=w.__size,z=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,P,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,L),L}function g(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const U=l[w.id],L=w.uniforms,P=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let z=0,F=L.length;z<F;z++){const Z=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,D=Z.length;C<D;C++){const V=Z[C];if(M(V,z,C,P)===!0){const ne=V.__offset,se=Array.isArray(V.value)?V.value:[V.value];let me=0;for(let fe=0;fe<se.length;fe++){const I=se[fe],G=T(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,ne+me,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,me),me+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,U,L,P){const z=w.value,F=U+"_"+L;if(P[F]===void 0)return typeof z=="number"||typeof z=="boolean"?P[F]=z:P[F]=z.clone(),!0;{const Z=P[F];if(typeof z=="number"||typeof z=="boolean"){if(Z!==z)return P[F]=z,!0}else if(Z.equals(z)===!1)return Z.copy(z),!0}return!1}function b(w){const U=w.uniforms;let L=0;const P=16;for(let F=0,Z=U.length;F<Z;F++){const C=Array.isArray(U[F])?U[F]:[U[F]];for(let D=0,V=C.length;D<V;D++){const ne=C[D],se=Array.isArray(ne.value)?ne.value:[ne.value];for(let me=0,fe=se.length;me<fe;me++){const I=se[me],G=T(I),oe=L%P,Te=oe%G.boundary,Me=oe+Te;L+=Te,Me!==0&&P-Me<G.storage&&(L+=P-Me),ne.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=L,L+=G.storage}}}const z=L%P;return z>0&&(L+=P-z),w.__size=L,w.__cache={},this}function T(w){const U={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(U.boundary=4,U.storage=4):w.isVector2?(U.boundary=8,U.storage=8):w.isVector3||w.isColor?(U.boundary=16,U.storage=12):w.isVector4?(U.boundary=16,U.storage=16):w.isMatrix3?(U.boundary=48,U.storage=48):w.isMatrix4?(U.boundary=64,U.storage=64):w.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",w),U}function y(w){const U=w.target;U.removeEventListener("dispose",y);const L=f.indexOf(U.__bindingPointIndex);f.splice(L,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},u={}}return{bind:m,update:p,dispose:v}}const f3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function h3(){return $i===null&&($i=new tT(f3,16,16,eo,Ha),$i.name="DFG_LUT",$i.minFilter=Yn,$i.magFilter=Yn,$i.wrapS=Pa,$i.wrapT=Pa,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class d3{constructor(e={}){const{canvas:i=hb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:M=xi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=f;const T=M,y=new Set([Dp,wp,Cp]),v=new Set([xi,la,hl,dl,Ap,Rp]),w=new Uint32Array(4),U=new Int32Array(4);let L=null,P=null;const z=[],F=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1;this._outputColorSpace=Di;let V=0,ne=0,se=null,me=-1,fe=null;const I=new hn,G=new hn;let oe=null;const Te=new Ut(0);let Me=0,O=i.width,ie=i.height,ve=1,Ne=null,Ve=null;const ae=new hn(0,0,O,ie),he=new hn(0,0,O,ie);let Fe=!1;const Ye=new Fp;let We=!1,vt=!1;const an=new nn,yt=new te,xt=new hn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function rn(){return se===null?ve:1}let X=r;function jt(A,Q){return i.getContext(A,Q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bp}`),i.addEventListener("webglcontextlost",lt,!1),i.addEventListener("webglcontextrestored",be,!1),i.addEventListener("webglcontextcreationerror",je,!1),X===null){const Q="webgl2";if(X=jt(Q,A),X===null)throw jt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Nt("WebGLRenderer: "+A.message),A}let Tt,wt,qe,N,E,q,pe,ye,le,$e,Le,Je,we,Ae,De,Ie,Ge,Pe,dt,j,Be,Ue,ke,Ee;function xe(){Tt=new hR(X),Tt.init(),Ue=new i3(X,Tt),wt=new iR(X,Tt,e,Ue),qe=new t3(X,Tt),wt.reversedDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),N=new mR(X),E=new HC,q=new n3(X,Tt,qe,E,wt,Ue,N),pe=new rR(C),ye=new fR(C),le=new xT(X),ke=new tR(X,le),$e=new dR(X,le,N,ke),Le=new _R(X,$e,le,N),dt=new gR(X,wt,q),Ie=new aR(E),Je=new BC(C,pe,ye,Tt,wt,ke,Ie),we=new u3(C,E),Ae=new VC,De=new jC(Tt),Pe=new eR(C,pe,ye,qe,Le,b,m),Ge=new $C(C,Le,wt),Ee=new c3(X,N,wt,qe),j=new nR(X,Tt,N),Be=new pR(X,Tt,N),N.programs=Je.programs,C.capabilities=wt,C.extensions=Tt,C.properties=E,C.renderLists=Ae,C.shadowMap=Ge,C.state=qe,C.info=N}xe(),T!==xi&&(Z=new xR(T,i.width,i.height,l,u));const Oe=new o3(C,X);this.xr=Oe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(O,ie,!1))},this.getSize=function(A){return A.set(O,ie)},this.setSize=function(A,Q,ue=!0){if(Oe.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,ie=Q,i.width=Math.floor(A*ve),i.height=Math.floor(Q*ve),ue===!0&&(i.style.width=A+"px",i.style.height=Q+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,A,Q)},this.getDrawingBufferSize=function(A){return A.set(O*ve,ie*ve).floor()},this.setDrawingBufferSize=function(A,Q,ue){O=A,ie=Q,ve=ue,i.width=Math.floor(A*ue),i.height=Math.floor(Q*ue),this.setViewport(0,0,A,Q)},this.setEffects=function(A){if(T===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Q=0;Q<A.length;Q++)if(A[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,Q,ue,k){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,Q,ue,k),qe.viewport(I.copy(ae).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,Q,ue,k){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,Q,ue,k),qe.scissor(G.copy(he).multiplyScalar(ve).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){qe.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){Ne=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(A=!0,Q=!0,ue=!0){let k=0;if(A){let B=!1;if(se!==null){const _e=se.texture.format;B=y.has(_e)}if(B){const _e=se.texture.type,Re=v.has(_e),Ce=Pe.getClearColor(),ze=Pe.getClearAlpha(),He=Ce.r,Ke=Ce.g,Ze=Ce.b;Re?(w[0]=He,w[1]=Ke,w[2]=Ze,w[3]=ze,X.clearBufferuiv(X.COLOR,0,w)):(U[0]=He,U[1]=Ke,U[2]=Ze,U[3]=ze,X.clearBufferiv(X.COLOR,0,U))}else k|=X.COLOR_BUFFER_BIT}Q&&(k|=X.DEPTH_BUFFER_BIT),ue&&(k|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",lt,!1),i.removeEventListener("webglcontextrestored",be,!1),i.removeEventListener("webglcontextcreationerror",je,!1),Pe.dispose(),Ae.dispose(),De.dispose(),E.dispose(),pe.dispose(),ye.dispose(),Le.dispose(),ke.dispose(),Ee.dispose(),Je.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Ft),Oe.removeEventListener("sessionend",Vt),gn.stop()};function lt(A){A.preventDefault(),z_("WebGLRenderer: Context Lost."),D=!0}function be(){z_("WebGLRenderer: Context Restored."),D=!1;const A=N.autoReset,Q=Ge.enabled,ue=Ge.autoUpdate,k=Ge.needsUpdate,B=Ge.type;xe(),N.autoReset=A,Ge.enabled=Q,Ge.autoUpdate=ue,Ge.needsUpdate=k,Ge.type=B}function je(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function et(A){const Q=A.target;Q.removeEventListener("dispose",et),tt(Q)}function tt(A){jn(A),E.remove(A)}function jn(A){const Q=E.get(A).programs;Q!==void 0&&(Q.forEach(function(ue){Je.releaseProgram(ue)}),A.isShaderMaterial&&Je.releaseShaderCache(A))}this.renderBufferDirect=function(A,Q,ue,k,B,_e){Q===null&&(Q=Lt);const Re=B.isMesh&&B.matrixWorld.determinant()<0,Ce=ji(A,Q,ue,k,B);qe.setMaterial(k,Re);let ze=ue.index,He=1;if(k.wireframe===!0){if(ze=$e.getWireframeAttribute(ue),ze===void 0)return;He=2}const Ke=ue.drawRange,Ze=ue.attributes.position;let st=Ke.start*He,Bt=(Ke.start+Ke.count)*He;_e!==null&&(st=Math.max(st,_e.start*He),Bt=Math.min(Bt,(_e.start+_e.count)*He)),ze!==null?(st=Math.max(st,0),Bt=Math.min(Bt,ze.count)):Ze!=null&&(st=Math.max(st,0),Bt=Math.min(Bt,Ze.count));const sn=Bt-st;if(sn<0||sn===1/0)return;ke.setup(B,k,Ce,ue,ze);let $t,kt=j;if(ze!==null&&($t=le.get(ze),kt=Be,kt.setIndex($t)),B.isMesh)k.wireframe===!0?(qe.setLineWidth(k.wireframeLinewidth*rn()),kt.setMode(X.LINES)):kt.setMode(X.TRIANGLES);else if(B.isLine){let it=k.linewidth;it===void 0&&(it=1),qe.setLineWidth(it*rn()),B.isLineSegments?kt.setMode(X.LINES):B.isLineLoop?kt.setMode(X.LINE_LOOP):kt.setMode(X.LINE_STRIP)}else B.isPoints?kt.setMode(X.POINTS):B.isSprite&&kt.setMode(X.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))kt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const it=B._multiDrawStarts,Ht=B._multiDrawCounts,ft=B._multiDrawCount,Dn=ze?le.get(ze).bytesPerElement:1,fa=E.get(k).currentProgram.getUniforms();for(let Un=0;Un<ft;Un++)fa.setValue(X,"_gl_DrawID",Un),kt.render(it[Un]/Dn,Ht[Un])}else if(B.isInstancedMesh)kt.renderInstances(st,sn,B.count);else if(ue.isInstancedBufferGeometry){const it=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ht=Math.min(ue.instanceCount,it);kt.renderInstances(st,sn,Ht)}else kt.render(st,sn)};function rt(A,Q,ue){A.transparent===!0&&A.side===na&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Li(A,Q,ue),A.side=Mr,A.needsUpdate=!0,Li(A,Q,ue),A.side=na):Li(A,Q,ue)}this.compile=function(A,Q,ue=null){ue===null&&(ue=A),P=De.get(ue),P.init(Q),F.push(P),ue.traverseVisible(function(B){B.isLight&&B.layers.test(Q.layers)&&(P.pushLight(B),B.castShadow&&P.pushShadow(B))}),A!==ue&&A.traverseVisible(function(B){B.isLight&&B.layers.test(Q.layers)&&(P.pushLight(B),B.castShadow&&P.pushShadow(B))}),P.setupLights();const k=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const _e=B.material;if(_e)if(Array.isArray(_e))for(let Re=0;Re<_e.length;Re++){const Ce=_e[Re];rt(Ce,ue,B),k.add(Ce)}else rt(_e,ue,B),k.add(_e)}),P=F.pop(),k},this.compileAsync=function(A,Q,ue=null){const k=this.compile(A,Q,ue);return new Promise(B=>{function _e(){if(k.forEach(function(Re){E.get(Re).currentProgram.isReady()&&k.delete(Re)}),k.size===0){B(A);return}setTimeout(_e,10)}Tt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let St=null;function Mt(A){St&&St(A)}function Ft(){gn.stop()}function Vt(){gn.start()}const gn=new Hx;gn.setAnimationLoop(Mt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(A){St=A,Oe.setAnimationLoop(A),A===null?gn.stop():gn.start()},Oe.addEventListener("sessionstart",Ft),Oe.addEventListener("sessionend",Vt),this.render=function(A,Q){if(Q!==void 0&&Q.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ue=Oe.enabled===!0&&Oe.isPresenting===!0,k=Z!==null&&(se===null||ue)&&Z.begin(C,se);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(Q),Q=Oe.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,Q,se),P=De.get(A,F.length),P.init(Q),F.push(P),an.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ye.setFromProjectionMatrix(an,aa,Q.reversedDepth),vt=this.localClippingEnabled,We=Ie.init(this.clippingPlanes,vt),L=Ae.get(A,z.length),L.init(),z.push(L),Oe.enabled===!0&&Oe.isPresenting===!0){const Re=C.xr.getDepthSensingMesh();Re!==null&&dn(Re,Q,-1/0,C.sortObjects)}dn(A,Q,0,C.sortObjects),L.finish(),C.sortObjects===!0&&L.sort(Ne,Ve),ct=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ct&&Pe.addToRenderList(L,A),this.info.render.frame++,We===!0&&Ie.beginShadows();const B=P.state.shadowsArray;if(Ge.render(B,A,Q),We===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&Z.hasRenderPass())===!1){const Re=L.opaque,Ce=L.transmissive;if(P.setupLights(),Q.isArrayCamera){const ze=Q.cameras;if(Ce.length>0)for(let He=0,Ke=ze.length;He<Ke;He++){const Ze=ze[He];_n(Re,Ce,A,Ze)}ct&&Pe.render(A);for(let He=0,Ke=ze.length;He<Ke;He++){const Ze=ze[He];ln(L,A,Ze,Ze.viewport)}}else Ce.length>0&&_n(Re,Ce,A,Q),ct&&Pe.render(A),ln(L,A,Q)}se!==null&&ne===0&&(q.updateMultisampleRenderTarget(se),q.updateRenderTargetMipmap(se)),k&&Z.end(C),A.isScene===!0&&A.onAfterRender(C,A,Q),ke.resetDefaultState(),me=-1,fe=null,F.pop(),F.length>0?(P=F[F.length-1],We===!0&&Ie.setGlobalState(C.clippingPlanes,P.state.camera)):P=null,z.pop(),z.length>0?L=z[z.length-1]:L=null};function dn(A,Q,ue,k){if(A.visible===!1)return;if(A.layers.test(Q.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Q);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ye.intersectsSprite(A)){k&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(an);const Re=Le.update(A),Ce=A.material;Ce.visible&&L.push(A,Re,Ce,ue,xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ye.intersectsObject(A))){const Re=Le.update(A),Ce=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),xt.copy(Re.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4(an)),Array.isArray(Ce)){const ze=Re.groups;for(let He=0,Ke=ze.length;He<Ke;He++){const Ze=ze[He],st=Ce[Ze.materialIndex];st&&st.visible&&L.push(A,Re,st,ue,xt.z,Ze)}}else Ce.visible&&L.push(A,Re,Ce,ue,xt.z,null)}}const _e=A.children;for(let Re=0,Ce=_e.length;Re<Ce;Re++)dn(_e[Re],Q,ue,k)}function ln(A,Q,ue,k){const{opaque:B,transmissive:_e,transparent:Re}=A;P.setupLightsView(ue),We===!0&&Ie.setGlobalState(C.clippingPlanes,ue),k&&qe.viewport(I.copy(k)),B.length>0&&ei(B,Q,ue),_e.length>0&&ei(_e,Q,ue),Re.length>0&&ei(Re,Q,ue),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function _n(A,Q,ue,k){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[k.id]===void 0){const st=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[k.id]=new sa(1,1,{generateMipmaps:!0,type:st?Ha:xi,minFilter:Kr,samples:wt.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const _e=P.state.transmissionRenderTarget[k.id],Re=k.viewport||I;_e.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const Ce=C.getRenderTarget(),ze=C.getActiveCubeFace(),He=C.getActiveMipmapLevel();C.setRenderTarget(_e),C.getClearColor(Te),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),ct&&Pe.render(ue);const Ke=C.toneMapping;C.toneMapping=ra;const Ze=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),P.setupLightsView(k),We===!0&&Ie.setGlobalState(C.clippingPlanes,k),ei(A,ue,k),q.updateMultisampleRenderTarget(_e),q.updateRenderTargetMipmap(_e),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Bt=0,sn=Q.length;Bt<sn;Bt++){const $t=Q[Bt],{object:kt,geometry:it,material:Ht,group:ft}=$t;if(Ht.side===na&&kt.layers.test(k.layers)){const Dn=Ht.side;Ht.side=Hn,Ht.needsUpdate=!0,qi(kt,ue,k,it,Ht,ft),Ht.side=Dn,Ht.needsUpdate=!0,st=!0}}st===!0&&(q.updateMultisampleRenderTarget(_e),q.updateRenderTargetMipmap(_e))}C.setRenderTarget(Ce,ze,He),C.setClearColor(Te,Me),Ze!==void 0&&(k.viewport=Ze),C.toneMapping=Ke}function ei(A,Q,ue){const k=Q.isScene===!0?Q.overrideMaterial:null;for(let B=0,_e=A.length;B<_e;B++){const Re=A[B],{object:Ce,geometry:ze,group:He}=Re;let Ke=Re.material;Ke.allowOverride===!0&&k!==null&&(Ke=k),Ce.layers.test(ue.layers)&&qi(Ce,Q,ue,ze,Ke,He)}}function qi(A,Q,ue,k,B,_e){A.onBeforeRender(C,Q,ue,k,B,_e),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(C,Q,ue,k,A,_e),B.transparent===!0&&B.side===na&&B.forceSinglePass===!1?(B.side=Hn,B.needsUpdate=!0,C.renderBufferDirect(ue,Q,k,B,A,_e),B.side=Mr,B.needsUpdate=!0,C.renderBufferDirect(ue,Q,k,B,A,_e),B.side=na):C.renderBufferDirect(ue,Q,k,B,A,_e),A.onAfterRender(C,Q,ue,k,B,_e)}function Li(A,Q,ue){Q.isScene!==!0&&(Q=Lt);const k=E.get(A),B=P.state.lights,_e=P.state.shadowsArray,Re=B.state.version,Ce=Je.getParameters(A,B.state,_e,Q,ue),ze=Je.getProgramCacheKey(Ce);let He=k.programs;k.environment=A.isMeshStandardMaterial?Q.environment:null,k.fog=Q.fog,k.envMap=(A.isMeshStandardMaterial?ye:pe).get(A.envMap||k.environment),k.envMapRotation=k.environment!==null&&A.envMap===null?Q.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",et),He=new Map,k.programs=He);let Ke=He.get(ze);if(Ke!==void 0){if(k.currentProgram===Ke&&k.lightsStateVersion===Re)return ka(A,Ce),Ke}else Ce.uniforms=Je.getUniforms(A),A.onBeforeCompile(Ce,C),Ke=Je.acquireProgram(Ce,ze),He.set(ze,Ke),k.uniforms=Ce.uniforms;const Ze=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ie.uniform),ka(A,Ce),k.needsLights=Ni(A),k.lightsStateVersion=Re,k.needsLights&&(Ze.ambientLightColor.value=B.state.ambient,Ze.lightProbe.value=B.state.probe,Ze.directionalLights.value=B.state.directional,Ze.directionalLightShadows.value=B.state.directionalShadow,Ze.spotLights.value=B.state.spot,Ze.spotLightShadows.value=B.state.spotShadow,Ze.rectAreaLights.value=B.state.rectArea,Ze.ltc_1.value=B.state.rectAreaLTC1,Ze.ltc_2.value=B.state.rectAreaLTC2,Ze.pointLights.value=B.state.point,Ze.pointLightShadows.value=B.state.pointShadow,Ze.hemisphereLights.value=B.state.hemi,Ze.directionalShadowMap.value=B.state.directionalShadowMap,Ze.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ze.spotShadowMap.value=B.state.spotShadowMap,Ze.spotLightMatrix.value=B.state.spotLightMatrix,Ze.spotLightMap.value=B.state.spotLightMap,Ze.pointShadowMap.value=B.state.pointShadowMap,Ze.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Ke,k.uniformsList=null,Ke}function Er(A){if(A.uniformsList===null){const Q=A.currentProgram.getUniforms();A.uniformsList=hc.seqWithValue(Q.seq,A.uniforms)}return A.uniformsList}function ka(A,Q){const ue=E.get(A);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function ji(A,Q,ue,k,B){Q.isScene!==!0&&(Q=Lt),q.resetTextureUnits();const _e=Q.fog,Re=k.isMeshStandardMaterial?Q.environment:null,Ce=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:to,ze=(k.isMeshStandardMaterial?ye:pe).get(k.envMap||Re),He=k.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Ke=!!ue.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ze=!!ue.morphAttributes.position,st=!!ue.morphAttributes.normal,Bt=!!ue.morphAttributes.color;let sn=ra;k.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(sn=C.toneMapping);const $t=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,kt=$t!==void 0?$t.length:0,it=E.get(k),Ht=P.state.lights;if(We===!0&&(vt===!0||A!==fe)){const Nn=A===fe&&k.id===me;Ie.setState(k,A,Nn)}let ft=!1;k.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ht.state.version||it.outputColorSpace!==Ce||B.isBatchedMesh&&it.batching===!1||!B.isBatchedMesh&&it.batching===!0||B.isBatchedMesh&&it.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&it.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&it.instancing===!1||!B.isInstancedMesh&&it.instancing===!0||B.isSkinnedMesh&&it.skinning===!1||!B.isSkinnedMesh&&it.skinning===!0||B.isInstancedMesh&&it.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&it.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&it.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&it.instancingMorph===!1&&B.morphTexture!==null||it.envMap!==ze||k.fog===!0&&it.fog!==_e||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ie.numPlanes||it.numIntersection!==Ie.numIntersection)||it.vertexAlphas!==He||it.vertexTangents!==Ke||it.morphTargets!==Ze||it.morphNormals!==st||it.morphColors!==Bt||it.toneMapping!==sn||it.morphTargetsCount!==kt)&&(ft=!0):(ft=!0,it.__version=k.version);let Dn=it.currentProgram;ft===!0&&(Dn=Li(k,Q,B));let fa=!1,Un=!1,Si=!1;const Xt=Dn.getUniforms(),Ln=it.uniforms;if(qe.useProgram(Dn.program)&&(fa=!0,Un=!0,Si=!0),k.id!==me&&(me=k.id,Un=!0),fa||fe!==A){qe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xt.setValue(X,"projectionMatrix",A.projectionMatrix),Xt.setValue(X,"viewMatrix",A.matrixWorldInverse);const On=Xt.map.cameraPosition;On!==void 0&&On.setValue(X,yt.setFromMatrixPosition(A.matrixWorld)),wt.logarithmicDepthBuffer&&Xt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Xt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),fe!==A&&(fe=A,Un=!0,Si=!0)}if(it.needsLights&&(Ht.state.directionalShadowMap.length>0&&Xt.setValue(X,"directionalShadowMap",Ht.state.directionalShadowMap,q),Ht.state.spotShadowMap.length>0&&Xt.setValue(X,"spotShadowMap",Ht.state.spotShadowMap,q),Ht.state.pointShadowMap.length>0&&Xt.setValue(X,"pointShadowMap",Ht.state.pointShadowMap,q)),B.isSkinnedMesh){Xt.setOptional(X,B,"bindMatrix"),Xt.setOptional(X,B,"bindMatrixInverse");const Nn=B.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Xt.setValue(X,"boneTexture",Nn.boneTexture,q))}B.isBatchedMesh&&(Xt.setOptional(X,B,"batchingTexture"),Xt.setValue(X,"batchingTexture",B._matricesTexture,q),Xt.setOptional(X,B,"batchingIdTexture"),Xt.setValue(X,"batchingIdTexture",B._indirectTexture,q),Xt.setOptional(X,B,"batchingColorTexture"),B._colorsTexture!==null&&Xt.setValue(X,"batchingColorTexture",B._colorsTexture,q));const En=ue.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&dt.update(B,ue,Dn),(Un||it.receiveShadow!==B.receiveShadow)&&(it.receiveShadow=B.receiveShadow,Xt.setValue(X,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ln.envMap.value=ze,Ln.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&Q.environment!==null&&(Ln.envMapIntensity.value=Q.environmentIntensity),Ln.dfgLUT!==void 0&&(Ln.dfgLUT.value=h3()),Un&&(Xt.setValue(X,"toneMappingExposure",C.toneMappingExposure),it.needsLights&&Xa(Ln,Si),_e&&k.fog===!0&&we.refreshFogUniforms(Ln,_e),we.refreshMaterialUniforms(Ln,k,ve,ie,P.state.transmissionRenderTarget[A.id]),hc.upload(X,Er(it),Ln,q)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(hc.upload(X,Er(it),Ln,q),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Xt.setValue(X,"center",B.center),Xt.setValue(X,"modelViewMatrix",B.modelViewMatrix),Xt.setValue(X,"normalMatrix",B.normalMatrix),Xt.setValue(X,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Nn=k.uniformsGroups;for(let On=0,ts=Nn.length;On<ts;On++){const Fi=Nn[On];Ee.update(Fi,Dn),Ee.bind(Fi,Dn)}}return Dn}function Xa(A,Q){A.ambientLightColor.needsUpdate=Q,A.lightProbe.needsUpdate=Q,A.directionalLights.needsUpdate=Q,A.directionalLightShadows.needsUpdate=Q,A.pointLights.needsUpdate=Q,A.pointLightShadows.needsUpdate=Q,A.spotLights.needsUpdate=Q,A.spotLightShadows.needsUpdate=Q,A.rectAreaLights.needsUpdate=Q,A.hemisphereLights.needsUpdate=Q}function Ni(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(A,Q,ue){const k=E.get(A);k.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=Q,E.get(A.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:ue,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Q){const ue=E.get(A);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0};const Oi=X.createFramebuffer();this.setRenderTarget=function(A,Q=0,ue=0){se=A,V=Q,ne=ue;let k=null,B=!1,_e=!1;if(A){const Ce=E.get(A);if(Ce.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(X.FRAMEBUFFER,Ce.__webglFramebuffer),I.copy(A.viewport),G.copy(A.scissor),oe=A.scissorTest,qe.viewport(I),qe.scissor(G),qe.setScissorTest(oe),me=-1;return}else if(Ce.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(Ce.__hasExternalTextures)q.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ke=A.depthTexture;if(Ce.__boundDepthTexture!==Ke){if(Ke!==null&&E.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);const He=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[Q])?k=He[Q][ue]:k=He[Q],B=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?k=E.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[ue]:k=He,I.copy(A.viewport),G.copy(A.scissor),oe=A.scissorTest}else I.copy(ae).multiplyScalar(ve).floor(),G.copy(he).multiplyScalar(ve).floor(),oe=Fe;if(ue!==0&&(k=Oi),qe.bindFramebuffer(X.FRAMEBUFFER,k)&&qe.drawBuffers(A,k),qe.viewport(I),qe.scissor(G),qe.setScissorTest(oe),B){const Ce=E.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ce.__webglTexture,ue)}else if(_e){const Ce=Q;for(let ze=0;ze<A.textures.length;ze++){const He=E.get(A.textures[ze]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ze,He.__webglTexture,ue,Ce)}}else if(A!==null&&ue!==0){const Ce=E.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ce.__webglTexture,ue)}me=-1},this.readRenderTargetPixels=function(A,Q,ue,k,B,_e,Re,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze){qe.bindFramebuffer(X.FRAMEBUFFER,ze);try{const He=A.textures[Ce],Ke=He.format,Ze=He.type;if(!wt.textureFormatReadable(Ke)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(Ze)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=A.width-k&&ue>=0&&ue<=A.height-B&&(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce),X.readPixels(Q,ue,k,B,Ue.convert(Ke),Ue.convert(Ze),_e))}finally{const He=se!==null?E.get(se).__webglFramebuffer:null;qe.bindFramebuffer(X.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,Q,ue,k,B,_e,Re,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(ze=ze[Re]),ze)if(Q>=0&&Q<=A.width-k&&ue>=0&&ue<=A.height-B){qe.bindFramebuffer(X.FRAMEBUFFER,ze);const He=A.textures[Ce],Ke=He.format,Ze=He.type;if(!wt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,st),X.bufferData(X.PIXEL_PACK_BUFFER,_e.byteLength,X.STREAM_READ),A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ce),X.readPixels(Q,ue,k,B,Ue.convert(Ke),Ue.convert(Ze),0);const Bt=se!==null?E.get(se).__webglFramebuffer:null;qe.bindFramebuffer(X.FRAMEBUFFER,Bt);const sn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await db(X,sn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,st),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,_e),X.deleteBuffer(st),X.deleteSync(sn),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Q=null,ue=0){const k=Math.pow(2,-ue),B=Math.floor(A.image.width*k),_e=Math.floor(A.image.height*k),Re=Q!==null?Q.x:0,Ce=Q!==null?Q.y:0;q.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,Re,Ce,B,_e),qe.unbindTexture()};const li=X.createFramebuffer(),Pi=X.createFramebuffer();this.copyTextureToTexture=function(A,Q,ue=null,k=null,B=0,_e=null){_e===null&&(B!==0?(pl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=B,B=0):_e=0);let Re,Ce,ze,He,Ke,Ze,st,Bt,sn;const $t=A.isCompressedTexture?A.mipmaps[_e]:A.image;if(ue!==null)Re=ue.max.x-ue.min.x,Ce=ue.max.y-ue.min.y,ze=ue.isBox3?ue.max.z-ue.min.z:1,He=ue.min.x,Ke=ue.min.y,Ze=ue.isBox3?ue.min.z:0;else{const En=Math.pow(2,-B);Re=Math.floor($t.width*En),Ce=Math.floor($t.height*En),A.isDataArrayTexture?ze=$t.depth:A.isData3DTexture?ze=Math.floor($t.depth*En):ze=1,He=0,Ke=0,Ze=0}k!==null?(st=k.x,Bt=k.y,sn=k.z):(st=0,Bt=0,sn=0);const kt=Ue.convert(Q.format),it=Ue.convert(Q.type);let Ht;Q.isData3DTexture?(q.setTexture3D(Q,0),Ht=X.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(q.setTexture2DArray(Q,0),Ht=X.TEXTURE_2D_ARRAY):(q.setTexture2D(Q,0),Ht=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);const ft=X.getParameter(X.UNPACK_ROW_LENGTH),Dn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),fa=X.getParameter(X.UNPACK_SKIP_PIXELS),Un=X.getParameter(X.UNPACK_SKIP_ROWS),Si=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,$t.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,$t.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,He),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ke),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ze);const Xt=A.isDataArrayTexture||A.isData3DTexture,Ln=Q.isDataArrayTexture||Q.isData3DTexture;if(A.isDepthTexture){const En=E.get(A),Nn=E.get(Q),On=E.get(En.__renderTarget),ts=E.get(Nn.__renderTarget);qe.bindFramebuffer(X.READ_FRAMEBUFFER,On.__webglFramebuffer),qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Fi=0;Fi<ze;Fi++)Xt&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(A).__webglTexture,B,Ze+Fi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(Q).__webglTexture,_e,sn+Fi)),X.blitFramebuffer(He,Ke,Re,Ce,st,Bt,Re,Ce,X.DEPTH_BUFFER_BIT,X.NEAREST);qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(B!==0||A.isRenderTargetTexture||E.has(A)){const En=E.get(A),Nn=E.get(Q);qe.bindFramebuffer(X.READ_FRAMEBUFFER,li),qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,Pi);for(let On=0;On<ze;On++)Xt?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,En.__webglTexture,B,Ze+On):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,En.__webglTexture,B),Ln?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Nn.__webglTexture,_e,sn+On):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Nn.__webglTexture,_e),B!==0?X.blitFramebuffer(He,Ke,Re,Ce,st,Bt,Re,Ce,X.COLOR_BUFFER_BIT,X.NEAREST):Ln?X.copyTexSubImage3D(Ht,_e,st,Bt,sn+On,He,Ke,Re,Ce):X.copyTexSubImage2D(Ht,_e,st,Bt,He,Ke,Re,Ce);qe.bindFramebuffer(X.READ_FRAMEBUFFER,null),qe.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ln?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ht,_e,st,Bt,sn,Re,Ce,ze,kt,it,$t.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(Ht,_e,st,Bt,sn,Re,Ce,ze,kt,$t.data):X.texSubImage3D(Ht,_e,st,Bt,sn,Re,Ce,ze,kt,it,$t):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,_e,st,Bt,Re,Ce,kt,it,$t.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,_e,st,Bt,$t.width,$t.height,kt,$t.data):X.texSubImage2D(X.TEXTURE_2D,_e,st,Bt,Re,Ce,kt,it,$t);X.pixelStorei(X.UNPACK_ROW_LENGTH,ft),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Dn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,fa),X.pixelStorei(X.UNPACK_SKIP_ROWS,Un),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Si),_e===0&&Q.generateMipmaps&&X.generateMipmap(Ht),qe.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){V=0,ne=0,se=null,qe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}function p3(s){const[e,i]=K.useState(0),[r,l]=K.useState([]),u=K.useRef(null);return K.useEffect(()=>{const d=window.location.hostname==="localhost"?"localhost:4000":window.location.host,p=`${window.location.protocol==="https:"?"wss:":"ws:"}//${d}`;console.log("[useWebSocket] Connecting to",p);const _=new WebSocket(p);return _.onopen=()=>{console.log("[useWebSocket] Connected!"),s&&_.send(JSON.stringify({type:"userJoin",username:s}))},_.onmessage=g=>{const x=JSON.parse(g.data);console.log("[useWebSocket] Message:",x),x.type==="userCount"&&(console.log("[useWebSocket] Online users:",x.count),i(x.count)),x.type==="onlineUsers"&&(console.log("[useWebSocket] Online users list:",x.users),l(x.users),i(x.users.length))},_.onerror=g=>{console.error("[useWebSocket] Error:",g)},_.onclose=()=>{console.log("[useWebSocket] Disconnected")},u.current=_,()=>{u.current&&u.current.close()}},[s]),{ws:u.current,userCount:e,onlineUsers:r}}function m3({showLoginModal:s,setShowLoginModal:e,loginInput:i,setLoginInput:r,passwordInput:l,setPasswordInput:u,onLoginSuccess:f}){const[d,m]=K.useState(""),[p,_]=K.useState(!1),[g,x]=K.useState(!1);if(!s)return null;async function M(b){b.preventDefault();const T=i.trim(),y=l.trim();if(!T||!y){x(!0),m("");return}x(!1),_(!0),m("");try{let v=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:T,password:y})}),w=await v.json();if(!v.ok&&v.status===401&&(v=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:T,password:y})}),w=await v.json()),!v.ok){v.status===409?m("Wrong password or username already taken"):m("Something went wrong. Try again.");return}r(""),u(""),f(w.username)}catch{m("Could not reach server. Try again.")}finally{_(!1)}}return W.createElement("div",{className:"modal-backdrop",onClick:()=>e(!1),style:{backdropFilter:"blur(10px)",backgroundColor:"rgba(0, 0, 0, 0.5)"}},W.createElement("div",{className:"login-modal",onClick:b=>b.stopPropagation()},W.createElement("h2",null,"Welcome to Eyes on Space"),W.createElement("p",{className:"modal-subtitle"},"Login or create an account to explore the solar system"),W.createElement("form",{onSubmit:M},W.createElement("input",{type:"text",placeholder:"Enter username",value:i,onChange:b=>{r(b.target.value),x(!1),m("")},style:{border:g?"2px solid #ff0040":void 0,boxShadow:g?"0 0 10px #ff0040":void 0},autoFocus:!0}),W.createElement("input",{type:"password",placeholder:"Enter password",value:l,onChange:b=>{u(b.target.value),x(!1),m("")},style:{border:g?"2px solid #ff0040":void 0,boxShadow:g?"0 0 10px #ff0040":void 0}}),g&&W.createElement("p",{style:{color:"#ff0040",fontSize:"0.9rem",marginTop:"5px",textShadow:"0 0 5px #ff0040"}},"Please enter both username and password"),d&&W.createElement("p",{style:{color:"#ff0040",fontSize:"0.9rem",marginTop:"5px",textShadow:"0 0 5px #ff0040"}},d),W.createElement("div",{className:"modal-buttons"},W.createElement("button",{type:"submit",className:"btn-login",disabled:p},p?"Please wait...":"Continue"),W.createElement("button",{type:"button",className:"btn-skip",onClick:()=>e(!1)},"Skip for now")))))}function g3(s,e){const i=new Date(Date.UTC(0,e,0,12));return i.setUTCFullYear(s),i.getUTCDate()}function qs(s){return String(s).padStart(2,"0")}function _3(s,e,i){const r=new Date,l=r.getFullYear(),u=r.getMonth()+1,f=r.getDate(),d=Number.isFinite(i)?Math.trunc(i):l,m=Math.max(0,Math.min(3e3,d)),p=Number.isFinite(e)?Math.trunc(e):u,_=Math.max(1,Math.min(12,p)),g=g3(m,_),x=Number.isFinite(s)?Math.trunc(s):f;return{day:Math.max(1,Math.min(g,x)),month:_,year:m}}function v3({day:s,month:e,year:i,onChangeDay:r,onChangeMonth:l,onChangeYear:u,onSetDate:f,isPlaying:d,speed:m,onReturnToToday:p}){const[_,g]=K.useState(new Date),[x,M]=K.useState(String(s)),[b,T]=K.useState(String(e)),[y,v]=K.useState(String(i)),w=new Date,U=s===w.getDate()&&e===w.getMonth()+1&&i===w.getFullYear();K.useEffect(()=>{if(d&&m===1&&U){const Z=setInterval(()=>{g(new Date)},50);return()=>clearInterval(Z)}},[d,m,U]),K.useEffect(()=>{M(qs(s)),T(qs(e)),v(String(i))},[s,e,i]);const L=Z=>{const C=String(Z.getHours()).padStart(2,"0"),D=String(Z.getMinutes()).padStart(2,"0"),V=String(Z.getSeconds()).padStart(2,"0"),ne=String(Z.getMilliseconds()).padStart(3,"0");return`${C}:${D}:${V}.${ne}`},P=()=>{const Z=Number.parseInt(x,10),C=Number.parseInt(b,10),D=Number.parseInt(y,10),V=_3(Number.isFinite(Z)?Z:s,Number.isFinite(C)?C:e,Number.isFinite(D)?D:i);M(qs(V.day)),T(qs(V.month)),v(String(V.year)),f(V.day,V.month,V.year)},z=Z=>Z.replace(/\D/g,""),F=Z=>{Z.key==="Enter"&&(Z.preventDefault(),P()),Z.key==="Escape"&&(M(qs(s)),T(qs(e)),v(String(i)))};return W.createElement("div",{id:"datecontrolsgroup"},W.createElement("div",{id:"daycontrol"},W.createElement("label",{htmlFor:"day"},"Day:"),W.createElement("input",{id:"day",value:x,onChange:Z=>M(z(Z.target.value).slice(0,2)),onBlur:P,onKeyDown:F,inputMode:"numeric"}),W.createElement("div",{className:"buttongroup"},W.createElement("button",{className:"buttonleft",onClick:()=>r(-1)},"⋖"),W.createElement("button",{className:"buttonright",onClick:()=>r(1)},"⋗"))),W.createElement("div",{id:"monthcontrol"},W.createElement("label",{htmlFor:"month"},"Month:"),W.createElement("input",{id:"month",value:b,onChange:Z=>T(z(Z.target.value).slice(0,2)),onBlur:P,onKeyDown:F,inputMode:"numeric"}),W.createElement("div",{className:"buttongroup"},W.createElement("button",{className:"buttonleft",onClick:()=>l(-1)},"⋖"),W.createElement("button",{className:"buttonright",onClick:()=>l(1)},"⋗"))),W.createElement("div",{id:"yearcontrol"},W.createElement("label",{htmlFor:"year"},"Year:"),W.createElement("input",{id:"year",value:y,onChange:Z=>v(z(Z.target.value).slice(0,4)),onBlur:P,onKeyDown:F,inputMode:"numeric"}),W.createElement("div",{className:"buttongroup"},W.createElement("button",{className:"buttonleft",onClick:()=>u(-1)},"⋖"),W.createElement("button",{className:"buttonright",onClick:()=>u(1)},"⋗"))),W.createElement("div",{className:"clock-status-block",style:{marginTop:"3px",textAlign:"center"}},W.createElement("div",{className:"clock-title",style:{fontSize:"0.5rem",color:"#888",marginBottom:"1px",textTransform:"uppercase",letterSpacing:"1px"}},"Real-Time Clock"),W.createElement("div",{id:"realtimeclock",style:{fontSize:U?"0.9rem":"0.72rem",color:"#aaa",textAlign:"center",fontFamily:"monospace",letterSpacing:U?"1.5px":"0.5px"}},U?L(_):"Not on today's date"),!U&&W.createElement("button",{type:"button",className:"return-today-btn",onClick:p},"Return to Today")))}function x3(s){if(s<1e3)return`${s}x`;if(s<1e6){const i=s/1e3;return`${Number.isInteger(i)?i:i.toFixed(1)}Kx`}const e=s/1e6;return`${Number.isInteger(e)?e:e.toFixed(1)}Mx`}function S3({isPlaying:s,setIsPlaying:e,speed:i,setSpeed:r,onPlayPause:l}){return W.createElement("section",{id:"dateandcontrols"},W.createElement("button",{id:"playbutton",type:"button",onClick:l,style:{letterSpacing:s?"0px":"0",fontSize:s?"14px":"16px",color:s?"#ef4444":"#22c55e"}},s?"❚❚":"▶"),W.createElement("div",{id:"speedcontrols"},W.createElement("label",{htmlFor:"speed",className:"speed-label"},W.createElement("span",{className:"speed-label-title"},"SPEED:"),W.createElement("span",{className:"speed-value"},x3(i))),W.createElement("div",{className:"speed-range-wrap"},W.createElement("input",{type:"range",id:"speed",value:i,step:"10",min:"1",max:"10000000",onChange:u=>r(+u.target.value)}),W.createElement("div",{className:"speed-range-labels"},W.createElement("span",null,"1x"),W.createElement("span",null,"10Mx")))))}function y3({savedDates:s,showSavedDatesList:e,setShowSavedDatesList:i,onSaveDate:r,onLoadDate:l}){return W.createElement("section",{id:"saveddates"},W.createElement("button",{id:"savedatebutton",onClick:r,className:"link-with-arrow"},"Save Date + ",W.createElement("span",{className:"arrow"},"←")),W.createElement("button",{id:"saved",onClick:()=>i(u=>!u),className:"link-with-arrow"},e?"Hide Dates":"Date Archive"," ",W.createElement("span",{className:"arrow"},"←")),e&&W.createElement("div",{id:"saveddateslist"},W.createElement("ul",null,s.length>0?s.map((u,f)=>W.createElement("li",{key:f,onClick:()=>l(u),className:"link-with-arrow"},u.dateString," ",W.createElement("span",{className:"arrow"},"←"))):W.createElement("li",{className:"no-dates-message"},"No saved dates"))))}const md=6;function M3(s){return Array.isArray(s)?s.filter(Boolean):[]}function E3({onlineUsers:s}){const[e,i]=K.useState(0),r=K.useMemo(()=>M3(s),[s]),l=r.length,u=Math.max(1,Math.ceil(r.length/md)),f=r.slice(e*md,(e+1)*md);return K.useEffect(()=>{e>u-1&&i(Math.max(0,u-1))},[e,u]),W.createElement("section",{id:"onlineusers"},W.createElement("h2",null,"Online Users"),W.createElement("p",null,W.createElement("span",{id:"online-count"},l)," others online"),r.length===0?W.createElement("p",{style:{marginTop:"8px",fontSize:"10px"}},"No one is online."):W.createElement("ul",{className:"user-placeholder-list online-users-paged-list",style:{marginTop:"8px",fontSize:"10px"}},f.map(d=>W.createElement("li",{key:d,className:"user-placeholder"},d))),u>1&&W.createElement("div",{className:"users-pagination"},W.createElement("button",{type:"button",onClick:()=>i(d=>Math.max(d-1,0)),disabled:e===0},"Prev"),W.createElement("span",null,e+1," / ",u),W.createElement("button",{type:"button",onClick:()=>i(d=>Math.min(d+1,u-1)),disabled:e===u-1},"Next")))}function b3({apodData:s,apodLoading:e}){return W.createElement("section",{id:"apod"},W.createElement("h2",null,"NASA APOD"),W.createElement("div",{className:"apod-content"},e?W.createElement("p",{className:"apod-loading"},"Loading..."):s?.unavailable?W.createElement(W.Fragment,null,W.createElement("p",{className:"apod-error"},"APOD unavailable for today, sorry :/"),W.createElement("p",{className:"apod-description"},"You can still visit it directly: ",W.createElement("a",{href:"https://apod.nasa.gov/apod/astropix.html",target:"_blank",rel:"noopener noreferrer",className:"apod-link"},"APOD"))):s?W.createElement(W.Fragment,null,s.media_type==="video"?W.createElement("iframe",{src:s.url,className:"apod-video",frameBorder:"0",allow:"encrypted-media",allowFullScreen:!0,title:s.title}):W.createElement("img",{src:s.url,alt:s.title||"Astronomy Picture of the Day",className:"apod-image"}),W.createElement("p",{className:"apod-description"},"To learn more about NASA's photo of the day visit: ",W.createElement("a",{href:"https://apod.nasa.gov/apod/astropix.html",target:"_blank",rel:"noopener noreferrer",className:"apod-link"},"APOD"))):W.createElement("p",{className:"apod-error"},"Failed to load APOD")))}const Pv={Mercury:{color:"#8c8c8c"},Venus:{color:"#e6c87a"},Earth:{color:"#4a90d9"},Moon:{color:"#cfcfcf"},Mars:{color:"#c1440e"},Jupiter:{color:"#d4a574"},Saturn:{color:"#e6d4a3"},Uranus:{color:"#7de3f4"},Neptune:{color:"#4b70dd"}};function T3({labelsRef:s}){return W.createElement("div",{id:"planetlabels",style:{position:"absolute",top:0,left:0,pointerEvents:"none"}},Object.keys(Pv).map(e=>W.createElement("div",{key:e,ref:i=>s.current[e]=i,style:{position:"absolute",color:Pv[e].color,fontSize:"11px",fontFamily:"monospace",textShadow:"0 0 4px black",whiteSpace:"nowrap",transform:"translateX(-50%)"}},e)))}function A3(){return W.createElement("svg",{className:"hud-icon",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"},W.createElement("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"}),W.createElement("circle",{cx:"12",cy:"12",r:"2.8"}))}function R3(){return W.createElement("svg",{className:"hud-icon",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"},W.createElement("path",{d:"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"}),W.createElement("circle",{cx:"12",cy:"12",r:"2.8"}),W.createElement("path",{d:"M4 20 20 4"}))}function C3(){return W.createElement("svg",{className:"hud-icon",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"},W.createElement("path",{d:"M11 5 7 9H4v6h3l4 4V5z"}),W.createElement("path",{d:"M15 9c1 .7 1.5 1.7 1.5 3S16 14.3 15 15"}),W.createElement("path",{d:"M17.5 7c1.6 1.3 2.5 3 2.5 5s-.9 3.7-2.5 5"}))}function w3(){return W.createElement("svg",{className:"hud-icon",viewBox:"0 0 24 24","aria-hidden":"true",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"},W.createElement("path",{d:"M11 5 7 9H4v6h3l4 4V5z"}),W.createElement("path",{d:"M4 20 14 2"}))}function D3({isMuted:s,setIsMuted:e,volume:i,showOrbits:r,setShowOrbits:l,hideHub:u,setHideHub:f}){const d=K.useRef(null),m=()=>{!d.current||s||d.current.play().catch(()=>{})};return K.useEffect(()=>{d.current&&(d.current.volume=i/100,d.current.loop=!0)},[i]),K.useEffect(()=>{d.current&&(s?d.current.pause():m())},[s]),K.useEffect(()=>{const p=()=>{m()};return window.addEventListener("pointerdown",p,{once:!0}),window.addEventListener("keydown",p,{once:!0}),()=>{window.removeEventListener("pointerdown",p),window.removeEventListener("keydown",p)}},[s]),W.createElement("div",{id:"musicplayer"},W.createElement("audio",{ref:d,autoPlay:!0,src:"/Dune： Part Two Soundtrack ｜ A Time of Quiet Between the Storms - Hans Zimmer ｜ WaterTower [igtwOdqboT0].mp3"}),W.createElement("button",{className:"music-toggle-btn side-control-btn",onClick:()=>f(p=>!p),title:u?"Show HUD":"Hide HUD"},u?W.createElement(R3,null):W.createElement(A3,null)),W.createElement("button",{className:"music-toggle-btn side-control-btn",onClick:()=>e(p=>!p),title:s?"Play Music":"Mute Music"},s?W.createElement(w3,null):W.createElement(C3,null)),W.createElement("button",{className:"music-toggle-btn side-control-btn line-toggle-btn",onClick:()=>l(p=>!p),title:r?"Hide Orbit Lines":"Show Orbit Lines"},r?"Hide Lines":"Show Lines"))}const oi={Sun:{image:"/thesun.png",diameter:"1.39 million km",dayLength:"About 27 Earth days",yearLength:"About 230 million years",avgTemp:"5,500°C surface",hideMoons:!0,hideDistanceFromSun:!0,description:"The Sun is the star at the center of our solar system. Its gravity holds everything together, and its energy powers weather, climate, and life on Earth."},Mercury:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg",diameter:"4,879 km",dayLength:"58.6 Earth days",yearLength:"88 Earth days",moons:"0",avgTemp:"167°C (avg)",distanceFromSun:"57.9 million km",description:"The smallest planet and closest to the Sun, Mercury has extreme temperature swings and a heavily cratered surface with no atmosphere to buffer the heat."},Venus:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/600px-Venus-real_color.jpg",diameter:"12,104 km",dayLength:"243 Earth days",yearLength:"225 Earth days",moons:"0",avgTemp:"464°C (avg)",distanceFromSun:"108.2 million km",description:"Shrouded in thick clouds of sulfuric acid, Venus is the hottest planet in the solar system due to a runaway greenhouse effect."},Earth:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/600px-The_Earth_seen_from_Apollo_17.jpg",diameter:"12,742 km",dayLength:"24 hours",yearLength:"365.25 days",moons:"1",avgTemp:"15°C (avg)",distanceFromSun:"149.6 million km",description:"Our home world — the only known planet to harbor life, with liquid water oceans, a protective magnetic field, and a life-sustaining atmosphere."},Mars:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg",diameter:"6,779 km",dayLength:"24.6 hours",yearLength:"687 Earth days",moons:"2",avgTemp:"-60°C (avg)",distanceFromSun:"227.9 million km",description:"The Red Planet hosts the tallest volcano in the solar system (Olympus Mons) and a canyon system (Valles Marineris) that dwarfs the Grand Canyon."},Jupiter:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/600px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",diameter:"139,820 km",dayLength:"9.9 hours",yearLength:"11.9 Earth years",moons:"95",avgTemp:"-110°C (cloud tops)",distanceFromSun:"778.5 million km",description:"The largest planet in the solar system, Jupiter is a gas giant with the iconic Great Red Spot — a storm larger than Earth that has raged for centuries."},Saturn:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg",diameter:"116,460 km",dayLength:"10.7 hours",yearLength:"29.5 Earth years",moons:"146",avgTemp:"-140°C (cloud tops)",distanceFromSun:"1.43 billion km",description:"Famous for its stunning ring system made of ice and rock, Saturn is the least dense planet — it would float on water if you had a big enough ocean."},Uranus:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg",diameter:"50,724 km",dayLength:"17.2 hours",yearLength:"84 Earth years",moons:"28",avgTemp:"-195°C (avg)",distanceFromSun:"2.87 billion km",description:"An ice giant that orbits on its side with a 98° axial tilt — likely the result of a massive ancient collision. Its blue-green color comes from atmospheric methane."},Neptune:{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",diameter:"49,244 km",dayLength:"16.1 hours",yearLength:"165 Earth years",moons:"16",avgTemp:"-200°C (avg)",distanceFromSun:"4.5 billion km",description:"The windiest planet in the solar system, Neptune experiences storms with winds up to 2,100 km/h. It was the first planet discovered through mathematical prediction rather than observation."},Moon:{image:"/themoon.png",diameter:"3,474 km",dayLength:"29.5 Earth days",yearLength:"27.3 Earth days around Earth",avgTemp:"-20°C (avg surface)",hideMoons:!0,hideDistanceFromSun:!0,description:"Earth's Moon is the fifth-largest natural satellite in the solar system. It stabilizes Earth's axial tilt and drives ocean tides through its gravitational pull."}},Fv={Mercury:{a:.387,e:.205,i:7,color:"#8c8c8c",size:.08,period:87.97,omega:77.45,node:48.33,M0:174.79,axialTilt:.03},Venus:{a:.723,e:.007,i:3.4,color:"#e6c87a",size:.12,period:224.7,omega:131.53,node:76.68,M0:50.42,axialTilt:177.4},Earth:{a:1,e:.017,i:0,color:"#4a90d9",size:.13,period:365.25,omega:102.94,node:-11.26,M0:357.53,axialTilt:23.44},Mars:{a:1.524,e:.093,i:1.85,color:"#c1440e",size:.1,period:686.98,omega:336.04,node:49.58,M0:19.41,axialTilt:25.19},Jupiter:{a:5.203,e:.048,i:1.3,color:"#d4a574",size:.35,period:4332.59,omega:14.75,node:100.56,M0:20.02,axialTilt:3.13},Saturn:{a:9.537,e:.054,i:2.49,color:"#e6d4a3",size:.3,period:10759.22,omega:92.43,node:113.72,M0:317.02,rings:!0,axialTilt:26.73},Uranus:{a:19.19,e:.047,i:.77,color:"#7de3f4",size:.22,period:30688.5,omega:170.96,node:74.23,M0:142.24,axialTilt:97.77},Neptune:{a:30.07,e:.009,i:1.77,color:"#4b70dd",size:.21,period:60182,omega:44.97,node:131.72,M0:256.23,axialTilt:28.32}},qr=6,Wn={a:.00257,e:.0549,i:-4.5,period:27.321661,omega:318.15,node:125.08,M0:115.3654,size:.035,color:"#cfcfcf"},Iv=45,pp={innerAU:2.2,widthAU:1.3,count:1500,ySpread:.5,minSize:.03,maxSize:.07,scatterChance:.32,scatterAU:.75},mp={innerAU:32.5,widthAU:2.6,ySpread:1.1,minSize:.18,maxSize:.42,scatterChance:.4,scatterAU:2.6};mp.count=Math.round(pp.count*(mp.widthAU/pp.widthAU));const U3=["January","February","March","April","May","June","July","August","September","October","November","December"],gd=.7,ki={year:3e3,month:12,day:31},zv="You have reached the end of the simulation";function gp(s,e,i,r=12){const l=new Date(Date.UTC(0,e,i,r));return l.setUTCFullYear(s),l}function Bv(s,e,i){return s!==ki.year?s>ki.year:e!==ki.month?e>ki.month:i>=ki.day}function rl(s,e,i){const r=gp(2e3,0,1,12);return(gp(s,e-1,i,12)-r)/(1e3*60*60*24)}function L3(s,e){return gp(s,e,0,12).getUTCDate()}function N3(s,e,i=1e-6){let r=s,l=1,u=0;for(;Math.abs(l)>i&&u<30;)l=(r-e*Math.sin(r)-s)/(1-e*Math.cos(r)),r-=l,u++;return r}function sl(s,e,i,r,l,u){const f=i*Math.PI/180,d=(r-l)*Math.PI/180,m=l*Math.PI/180,p=u*Math.PI/180,_=N3(p,e),g=2*Math.atan2(Math.sqrt(1+e)*Math.sin(_/2),Math.sqrt(1-e)*Math.cos(_/2)),x=s*(1-e*Math.cos(_)),M=x*Math.cos(g),b=x*Math.sin(g),T=M*Math.cos(d)-b*Math.sin(d),y=M*Math.sin(d)+b*Math.cos(d),v=T,w=y*Math.cos(f),U=y*Math.sin(f),L=v*Math.cos(m)-w*Math.sin(m),P=v*Math.sin(m)+w*Math.cos(m);return{x:-L,y:U,z:P}}function O3(s,e){const i=.3+Math.random()*.3;return new wn(new ea(s+Math.random()*(e-s),4,4),new Oa({color:new Ut(i,i*.9,i*.8)}))}function Hv(s,e,i){for(let r=0;r<i.count;r+=1){const l=i.innerAU+Math.random()*i.widthAU,u=Math.random()<(i.scatterChance||0)?(Math.random()-.5)*2*(i.scatterAU||0):0,f=(l+u)*qr,d=Math.random()*Math.PI*2,m=(Math.random()-.5)*i.ySpread,p=O3(i.minSize,i.maxSize);p.position.set(Math.cos(d)*f,m,Math.sin(d)*f),s.add(p),e.push({mesh:p,r:f,angle:d,y:m})}}function P3(){const[s,e]=K.useState(null),[i,r]=K.useState(!0),{userCount:l,onlineUsers:u}=p3(s),[f,d]=K.useState(l),[m,p]=K.useState(u||[]);K.useEffect(()=>{l!==void 0&&d(l)},[l]),K.useEffect(()=>{Array.isArray(u)&&p(u)},[u]);const g=m.filter(be=>be&&be!==s).length>0,x=K.useRef(null),M=K.useRef(null),b=K.useRef(null),T=K.useRef(null),y=K.useRef({}),v=K.useRef({}),w=K.useRef([]),U=K.useRef([]),L=K.useRef(gd),P=K.useRef(null),z=new Date,[F,Z]=K.useState(z.getDate()),[C,D]=K.useState(z.getMonth()+1),[V,ne]=K.useState(z.getFullYear()),[se,me]=K.useState(!0),[fe,I]=K.useState(1),[G,oe]=K.useState(!0),[Te,Me]=K.useState(!1),[O,ie]=K.useState(null),[ve,Ne]=K.useState(!1),[Ve,ae]=K.useState(!1),[he,Fe]=K.useState([]),[Ye,We]=K.useState(""),[vt,an]=K.useState(!1),[yt,xt]=K.useState(""),[Lt,ct]=K.useState(""),[rn,X]=K.useState(!1),[jt,Tt]=K.useState(30),[wt,qe]=K.useState(null),[N,E]=K.useState(null),[q,pe]=K.useState(null),ye=be=>{$e.current=be,be&&pe(be),E(be)},le=K.useRef(null),$e=K.useRef(null),Le=K.useRef({}),Je=()=>{const be=localStorage.getItem("cameraState");if(be){const{rotX:je,rotY:et,zoom:tt}=JSON.parse(be);return{isDragging:!1,prevX:0,prevY:0,rotX:je,rotY:et,zoom:tt,velX:0,velY:0}}return{isDragging:!1,prevX:0,prevY:0,rotX:.2,rotY:0,zoom:100,velX:0,velY:0}},we=K.useRef(Je()),Ae=K.useRef(!1),De=K.useRef(1),Ie=K.useRef(rl(z.getFullYear(),z.getMonth()+1,z.getDate())),Ge=K.useRef(!1);function Pe(be="date or simulation"){Ge.current||(Ge.current=!0,me(!1),We("Error, refresh page."),an(!0),console.error("Simulation error detected:",be))}function dt(){const be=new Date(Date.UTC(2e3,0,1,12));be.setUTCDate(be.getUTCDate()+Math.floor(Ie.current)),Z(be.getUTCDate()),D(be.getUTCMonth()+1),ne(be.getUTCFullYear())}function j(be){Z(je=>{const et=L3(V,C),tt=je+be;return tt<1?et:tt>et?1:tt})}function Be(be){D(je=>{const et=je+be;return et<1?12:et>12?1:et})}function Ue(be){ne(je=>Math.max(0,Math.min(3e3,je+be)))}function ke(be,je,et){Z(be),D(je),ne(et),We("")}function Ee(){const be=new Date,je=be.getDate(),et=be.getMonth()+1,tt=be.getFullYear();Z(je),D(et),ne(tt),Ie.current=rl(tt,et,je),We("")}async function xe(){const be=`${U3[C-1]} ${F}, ${V}`,je={day:F,month:C,year:V,dateString:be};if(s)try{const et=await fetch("/api/dates",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(je)});if(et.ok){const tt=await et.json();Fe(tt);return}}catch(et){console.error("Failed to save date to backend:",et)}Fe(et=>{const tt=[je,...et];return tt.length>5?tt.slice(0,5):tt})}function Oe(be){Z(be.day),D(be.month),ne(be.year),Ie.current=rl(be.year,be.month,be.day)}async function lt(){try{const be=await fetch("/api/dates");if(be.ok){const je=await be.json();Fe(je)}}catch(be){console.error("Failed to load dates:",be)}}return K.useEffect(()=>{fetch("/api/auth/me").then(be=>be.ok?be.json():null).then(be=>{be?.username&&(e(be.username),r(!1),lt())}).catch(()=>{})},[]),K.useEffect(()=>{if(N)return;const be=setTimeout(()=>{pe(null)},350);return()=>clearTimeout(be)},[N]),K.useEffect(()=>{(async()=>{Ne(!0);try{const je=await fetch("/api/apod");if(je.ok){const et=await je.json();ie(et)}else ie({unavailable:!0})}catch(je){console.error("APOD error:",je),ie({unavailable:!0})}finally{Ne(!1)}})()},[]),K.useEffect(()=>{if(!Number.isFinite(F)||!Number.isFinite(C)||!Number.isFinite(V)){Pe("invalid date values");return}Ie.current=rl(V,C,F)},[F,C,V]),K.useEffect(()=>{L.current=G?gd:0},[G]),K.useEffect(()=>{Ye===zv&&!Bv(V,C,F)&&We("")},[Ye,V,C,F]),K.useEffect(()=>{if(!x.current)return;const be=x.current.clientWidth,je=x.current.clientHeight,et=new eT;et.background=new Ut(1296),M.current=et;const tt=new vi(60,be/je,.1,1e3),jn=we.current;tt.position.x=Math.sin(jn.rotY)*Math.cos(jn.rotX)*jn.zoom,tt.position.y=Math.sin(jn.rotX)*jn.zoom,tt.position.z=Math.cos(jn.rotY)*Math.cos(jn.rotX)*jn.zoom,tt.lookAt(0,0,0),T.current=tt;const rt=new d3({antialias:!0});rt.setSize(be,je),x.current.appendChild(rt.domElement),b.current=rt;const St=[];for(let k=0;k<3e3;k++){let B,_e,Re;do B=(Math.random()-.5)*800,_e=(Math.random()-.5)*800,Re=(Math.random()-.5)*800;while(Math.sqrt(B*B+_e*_e+Re*Re)<200);St.push(B,_e,Re)}const Mt=new $n;Mt.setAttribute("position",new Gn(St,3)),et.add(new oT(Mt,new Fx({color:16777215,size:.5})));const Ft=new wn(new ea(.8,32,32),new Oa({color:16768324}));Ft.userData.name="Sun",et.add(Ft),y.current.Sun=Ft;const Vt=new wn(new ea(.8*1.14,32,32),new Oa({color:16777215,side:Hn,transparent:!0,opacity:.85}));Vt.visible=!1,Ft.add(Vt),Le.current.Sun=Vt;const gn=new wn(new ea(1.5,32,32),new Oa({color:16755251,transparent:!0,opacity:.15}));et.add(gn),et.add(new pT(16777215,2,200)),et.add(new mT(3355443)),Object.entries(Fv).forEach(([k,B])=>{const _e=new wn(new ea(B.size*3,24,24),new sv({color:B.color,emissive:B.color,emissiveIntensity:.3,roughness:.8}));_e.userData.name=k,_e.rotation.z=B.axialTilt*Math.PI/180;const Re=sl(B.a*qr,B.e,B.i,B.omega,B.node,B.M0);if(_e.position.set(Re.x,Re.y,Re.z),et.add(_e),B.rings){const Ke=new wn(new Ip(B.size*3*1.4,B.size*3*2.4,64),new Oa({color:12887658,side:na,transparent:!0,opacity:.7}));Ke.rotation.x=Math.PI/2,_e.add(Ke)}y.current[k]=_e;const Ce=new wn(new ea(B.size*3*1.18,24,24),new Oa({color:16777215,side:Hn,transparent:!0,opacity:.85}));Ce.visible=!1,_e.add(Ce),Le.current[k]=Ce;const ze=[];for(let Ke=0;Ke<=360;Ke+=2){const Ze=sl(B.a*qr,B.e,B.i,B.omega,B.node,Ke);ze.push(new te(Ze.x,Ze.y,Ze.z))}const He=new sT(new $n().setFromPoints(ze),new Px({color:3359829,transparent:!0,opacity:gd}));et.add(He),U.current.push(He)});const dn=y.current.Earth;if(dn){const k=new wn(new ea(Wn.size*3,16,16),new sv({color:Wn.color,emissive:3355443,emissiveIntensity:.2,roughness:.95}));k.userData.name="Moon";let B=Wn.M0%360;const _e=sl(Wn.a*qr*Iv,Wn.e,Wn.i,Wn.omega,Wn.node,B);k.position.set(dn.position.x+_e.x,dn.position.y+_e.y,dn.position.z+_e.z),et.add(k);const Re=new wn(new ea(Wn.size*3*1.3,16,16),new Oa({color:16777215,side:Hn,transparent:!0,opacity:.85}));Re.visible=!1,k.add(Re),P.current=k,y.current.Moon=k,Le.current.Moon=Re}const ln=new Zs;Hv(ln,w.current,pp),et.add(ln);const _n=new Zs;Hv(_n,w.current,mp),et.add(_n);const ei=new _T,qi=new Pt,Li={x:0,y:0},Er=k=>{const B=k?"url('/cursor-space.svg') 16 16, pointer":"url('/cursor-space.svg') 16 16, auto";rt.domElement.style.setProperty("cursor",B,"important")},ka=k=>{we.current.isDragging=!0,we.current.prevX=k.clientX,we.current.prevY=k.clientY,we.current.velX=0,we.current.velY=0,Li.x=k.clientX,Li.y=k.clientY},ji=()=>{we.current.isDragging=!1},Xa=k=>{if(we.current.isDragging){const B=(k.clientX-we.current.prevX)*.005,_e=(k.clientY-we.current.prevY)*.005;we.current.velY=B,we.current.velX=_e,we.current.rotY+=B,we.current.rotX+=_e;const Re=Math.PI/2-.1;we.current.rotX=Math.max(-Re,Math.min(Re,we.current.rotX));const{rotX:Ce,rotY:ze,zoom:He}=we.current;localStorage.setItem("cameraState",JSON.stringify({rotX:Ce,rotY:ze,zoom:He})),tt.position.x=Math.sin(ze)*Math.cos(Ce)*He,tt.position.y=Math.sin(Ce)*He,tt.position.z=Math.cos(ze)*Math.cos(Ce)*He,tt.lookAt(0,0,0),rt.render(et,tt),we.current.prevX=k.clientX,we.current.prevY=k.clientY}else{const B=rt.domElement.getBoundingClientRect();if(k.clientX<B.left||k.clientX>B.right||k.clientY<B.top||k.clientY>B.bottom){le.current&&(Le.current[le.current]&&(Le.current[le.current].visible=!1),le.current=null,Er(!1));return}qi.x=(k.clientX-B.left)/B.width*2-1,qi.y=-((k.clientY-B.top)/B.height)*2+1,ei.setFromCamera(qi,tt);const _e=ei.intersectObjects(Object.values(y.current),!1),Re=_e.length>0?_e[0].object.userData.name:null,Ce=Re&&oi[Re]?Re:null;Ce!==le.current&&(le.current&&Le.current[le.current]&&(Le.current[le.current].visible=!1),le.current=Ce,Ce&&Le.current[Ce]&&(Le.current[Ce].visible=!0),Er(!!Ce))}},Ni=k=>{const B=k.clientX-Li.x,_e=k.clientY-Li.y;Math.sqrt(B*B+_e*_e)>5||le.current&&oi[le.current]&&ye($e.current===le.current?null:le.current)},Oi=k=>{k.preventDefault(),we.current.zoom=Math.max(15,Math.min(200,we.current.zoom+k.deltaY*.05));const{rotX:B,rotY:_e,zoom:Re}=we.current;localStorage.setItem("cameraState",JSON.stringify({rotX:B,rotY:_e,zoom:Re})),tt.position.x=Math.sin(_e)*Math.cos(B)*Re,tt.position.y=Math.sin(B)*Re,tt.position.z=Math.cos(_e)*Math.cos(B)*Re,tt.lookAt(0,0,0),rt.render(et,tt)};let li=0;const Pi=k=>{if(k.touches.length===1)we.current.isDragging=!0,we.current.prevX=k.touches[0].clientX,we.current.prevY=k.touches[0].clientY,we.current.velX=0,we.current.velY=0;else if(k.touches.length===2){we.current.isDragging=!1;const B=k.touches[0].clientX-k.touches[1].clientX,_e=k.touches[0].clientY-k.touches[1].clientY;li=Math.sqrt(B*B+_e*_e)}},A=k=>{if(k.preventDefault(),k.touches.length===1&&we.current.isDragging){const B=(k.touches[0].clientX-we.current.prevX)*.005,_e=(k.touches[0].clientY-we.current.prevY)*.005;we.current.velY=B,we.current.velX=_e,we.current.rotY+=B,we.current.rotX+=_e;const Re=Math.PI/2-.1;we.current.rotX=Math.max(-Re,Math.min(Re,we.current.rotX));const{rotX:Ce,rotY:ze,zoom:He}=we.current;localStorage.setItem("cameraState",JSON.stringify({rotX:Ce,rotY:ze,zoom:He})),tt.position.x=Math.sin(ze)*Math.cos(Ce)*He,tt.position.y=Math.sin(Ce)*He,tt.position.z=Math.cos(ze)*Math.cos(Ce)*He,tt.lookAt(0,0,0),rt.render(et,tt),we.current.prevX=k.touches[0].clientX,we.current.prevY=k.touches[0].clientY}else if(k.touches.length===2){const B=k.touches[0].clientX-k.touches[1].clientX,_e=k.touches[0].clientY-k.touches[1].clientY,Re=Math.sqrt(B*B+_e*_e);if(li>0){const Ce=li-Re;we.current.zoom=Math.max(15,Math.min(200,we.current.zoom+Ce*.1));const{rotX:ze,rotY:He,zoom:Ke}=we.current;localStorage.setItem("cameraState",JSON.stringify({rotX:ze,rotY:He,zoom:Ke})),tt.position.x=Math.sin(He)*Math.cos(ze)*Ke,tt.position.y=Math.sin(ze)*Ke,tt.position.z=Math.cos(He)*Math.cos(ze)*Ke,tt.lookAt(0,0,0),rt.render(et,tt)}li=Re}},Q=()=>{we.current.isDragging=!1,li=0},ue=()=>{if(!x.current)return;const k=x.current.clientWidth,B=x.current.clientHeight;tt.aspect=k/B,tt.updateProjectionMatrix(),rt.setSize(k,B),rt.render(et,tt)};return rt.domElement.addEventListener("mousedown",ka),window.addEventListener("mousemove",Xa),window.addEventListener("mouseup",ji),rt.domElement.addEventListener("click",Ni),rt.domElement.addEventListener("wheel",Oi,{passive:!1}),rt.domElement.addEventListener("touchstart",Pi,{passive:!1}),rt.domElement.addEventListener("touchmove",A,{passive:!1}),rt.domElement.addEventListener("touchend",Q),window.addEventListener("resize",ue),rt.render(et,tt),()=>{rt.domElement.removeEventListener("mousedown",ka),window.removeEventListener("mousemove",Xa),window.removeEventListener("mouseup",ji),rt.domElement.removeEventListener("click",Ni),rt.domElement.removeEventListener("wheel",Oi),rt.domElement.removeEventListener("touchstart",Pi),rt.domElement.removeEventListener("touchmove",A),rt.domElement.removeEventListener("touchend",Q),window.removeEventListener("resize",ue),rt.dispose(),x.current?.contains(rt.domElement)&&x.current.removeChild(rt.domElement)}},[]),K.useEffect(()=>{Ae.current=se,De.current=fe},[se,fe]),K.useEffect(()=>{let be,je=performance.now();const et=tt=>{if(be=requestAnimationFrame(et),!Number.isFinite(tt)||!Number.isFinite(je)||!Number.isFinite(Ie.current)){Pe("NaN time state");return}const jn=Math.min((tt-je)/1e3,.1);if(je=tt,Ae.current){Ie.current+=jn/86400*De.current;const St=new Date(Date.UTC(2e3,0,1,12));St.setUTCDate(St.getUTCDate()+Math.floor(Ie.current));const Mt=St.getUTCDate(),Ft=St.getUTCMonth()+1,Vt=St.getUTCFullYear();Bv(Vt,Ft,Mt)?(Ie.current=rl(ki.year,ki.month,ki.day),Z(ki.day),D(ki.month),ne(ki.year),me(!1),We(zv)):(Z(Mt),D(Ft),ne(Vt))}if(Object.entries(Fv).forEach(([St,Mt])=>{const Ft=y.current[St];if(!Ft)return;const Vt=360/Mt.period;let gn=(Mt.M0+Vt*Ie.current)%360;if(!Number.isFinite(gn)){Pe(`planet calculation for ${St}`);return}gn<0&&(gn+=360);const dn=sl(Mt.a*qr,Mt.e,Mt.i,Mt.omega,Mt.node,gn);Ft.position.set(dn.x,dn.y,dn.z)}),P.current&&y.current.Earth){const St=y.current.Earth,Mt=360/Wn.period;let Ft=(Wn.M0+Mt*Ie.current)%360;if(!Number.isFinite(Ft)){Pe("moon calculation");return}Ft<0&&(Ft+=360);const Vt=sl(Wn.a*qr*Iv,Wn.e,Wn.i,Wn.omega,Wn.node,Ft);P.current.position.set(St.position.x+Vt.x,St.position.y+Vt.y,St.position.z+Vt.z),P.current.lookAt(St.position)}const rt=we.current;if(!rt.isDragging&&(Math.abs(rt.velX)>1e-4||Math.abs(rt.velY)>1e-4)){rt.rotY+=rt.velY,rt.rotX+=rt.velX;const St=Math.PI/2-.1;rt.rotX=Math.max(-St,Math.min(St,rt.rotX)),rt.velX*=.88,rt.velY*=.88;const Mt=T.current;Mt&&(Mt.position.x=Math.sin(rt.rotY)*Math.cos(rt.rotX)*rt.zoom,Mt.position.y=Math.sin(rt.rotX)*rt.zoom,Mt.position.z=Math.cos(rt.rotY)*Math.cos(rt.rotX)*rt.zoom,Mt.lookAt(0,0,0))}w.current.forEach(St=>{const Mt=365.25*Math.pow(St.r/qr,1.5),Ft=2*Math.PI/Mt,Vt=St.angle+Ft*Ie.current;if(!Number.isFinite(Vt)){Pe("asteroid calculation");return}St.mesh.position.x=-Math.cos(Vt)*St.r,St.mesh.position.z=Math.sin(Vt)*St.r}),U.current.forEach(St=>{const Mt=St.material;if(!Mt||!("opacity"in Mt))return;L.current>0&&(St.visible=!0);const Ft=Mt.opacity,Vt=Db.lerp(Ft,L.current,.08);Mt.opacity=Vt,L.current===0&&Vt<.01&&(Mt.opacity=0,St.visible=!1)}),b.current&&M.current&&T.current&&(b.current.render(M.current,T.current),Object.entries(y.current).forEach(([St,Mt])=>{const Ft=v.current[St];if(!Ft)return;const Vt=Mt.position.clone();Vt.project(T.current);const gn=b.current.domElement.getBoundingClientRect();Vt.z<1?(Ft.style.left=(Vt.x*.5+.5)*gn.width+"px",Ft.style.top=(-Vt.y*.5+.5)*gn.height-20+"px",Ft.style.display="block"):Ft.style.display="none"}))};return be=requestAnimationFrame(et),()=>{be&&cancelAnimationFrame(be)}},[]),W.createElement("div",null,W.createElement("header",{id:"mainheader"},W.createElement("h1",null,"Eyes on Space"),W.createElement("p",null,"Username: ",W.createElement("span",{id:"username-display"},s||"[Not logged in]"),s?W.createElement("button",{className:"logout-btn",onClick:async()=>{await fetch("/api/auth/logout",{method:"DELETE"}),e(null),Fe([]),r(!0)}},"Logout"):W.createElement("button",{className:"login-btn",onClick:()=>r(!0)},"Login")),Ye&&W.createElement("p",{className:"simulation-notice-header"},Ye),vt&&W.createElement("div",{className:"refresh-error-banner",role:"alert"},W.createElement("span",null,"Error, refresh page."),W.createElement("button",{type:"button",className:"refresh-error-btn",onClick:()=>window.location.reload()},"Refresh Page"))),W.createElement("div",{id:"panel-links",className:`hud-fade ${Ve?"hud-hidden":"hud-visible"}`},W.createElement("button",{type:"button",className:"panel-link-btn users-link",onClick:()=>qe("users")},W.createElement("span",{className:`users-online-dot ${g?"is-active":"is-idle"}`,"aria-hidden":"true"}),W.createElement("span",{className:"panel-link-arrow"},"→"),W.createElement("span",null,"Online Users")),W.createElement("button",{type:"button",className:"panel-link-btn",onClick:()=>qe("apod")},W.createElement("span",{className:"panel-link-arrow"},"→"),W.createElement("span",null,"NASA APOD")),W.createElement("button",{type:"button",className:"panel-link-btn",onClick:()=>qe("settings")},W.createElement("span",{className:"panel-link-arrow"},"→"),W.createElement("span",null,"Settings"))),W.createElement("main",{id:"solarsystem"},W.createElement("div",{id:"scenearea",ref:x}),W.createElement(T3,{labelsRef:v}),W.createElement("div",{id:"instructions",className:`hud-fade ${Ve?"hud-hidden":"hud-visible"}`},"Drag to move camera • Scroll to zoom")),W.createElement("div",{className:`hud-fade ${Ve?"hud-hidden":"hud-visible"}`},W.createElement(v3,{day:F,month:C,year:V,onChangeDay:j,onChangeMonth:Be,onChangeYear:Ue,onSetDate:ke,isPlaying:se,speed:fe,onReturnToToday:Ee})),W.createElement("div",{className:`hud-fade ${Ve?"hud-hidden":"hud-visible"}`},W.createElement(y3,{savedDates:he,showSavedDatesList:Te,setShowSavedDatesList:Me,onSaveDate:xe,onLoadDate:Oe})),W.createElement("div",{className:`hud-fade ${Ve?"hud-hidden":"hud-visible"}`},W.createElement(S3,{isPlaying:se,setIsPlaying:me,speed:fe,setSpeed:I,onPlayPause:()=>{const be=!se;me(be),be||dt()}})),W.createElement("footer",null,W.createElement("nav",{style:{marginBottom:"-2px"}},W.createElement(Ep,{to:"/about",className:"link-with-arrow"},"About ",W.createElement("span",{className:"arrow"},"←"))),W.createElement("a",{href:"https://github.com/Aidanvf1/Solar-System",className:"link-with-arrow"},"GitHub Repository ",W.createElement("span",{className:"arrow"},"←")),W.createElement("p",null,"© 2026 Aidan Von Feldt")),W.createElement(m3,{showLoginModal:i,setShowLoginModal:r,loginInput:yt,setLoginInput:xt,passwordInput:Lt,setPasswordInput:ct,setUsername:e,onLoginSuccess:be=>{e(be),r(!1),lt()}}),wt&&W.createElement("div",{className:"ui-panel-backdrop",onClick:()=>qe(null)},W.createElement("div",{className:"ui-panel-modal",onClick:be=>be.stopPropagation()},W.createElement("button",{type:"button",className:"ui-panel-close",onClick:()=>qe(null),"aria-label":"Close panel"},"×"),wt==="settings"&&W.createElement("section",{id:"settingspanel"},W.createElement("h2",null,"Settings"),W.createElement("div",{className:"settings-row"},W.createElement("label",{htmlFor:"volume-slider"},"Volume"),W.createElement("div",{className:"settings-volume-wrap"},W.createElement("input",{id:"volume-slider",type:"range",min:"0",max:"100",step:"1",value:jt,onChange:be=>Tt(+be.target.value)}),W.createElement("span",null,jt,"%")))),wt==="apod"&&W.createElement(b3,{apodData:O,apodLoading:ve}),wt==="users"&&W.createElement(E3,{onlineCount:f,onlineUsers:m}))),W.createElement("div",{className:`planet-info-panel${N?" open":""}`},q&&oi[q]&&W.createElement(W.Fragment,null,W.createElement("button",{type:"button",className:"planet-info-close",onClick:()=>ye(null),"aria-label":"Close"},"×"),W.createElement("img",{className:"planet-info-image",src:oi[q].image,alt:q,referrerPolicy:"no-referrer",onError:be=>{const je=oi[q].fallbackImage;je&&be.currentTarget.src!==je&&(be.currentTarget.src=je)}}),W.createElement("h2",{className:"planet-info-name"},q),W.createElement("div",{className:"planet-info-facts"},W.createElement("div",{className:"fact-row"},W.createElement("span",null,"Diameter"),W.createElement("span",null,oi[q].diameter)),W.createElement("div",{className:"fact-row"},W.createElement("span",null,"Day Length"),W.createElement("span",null,oi[q].dayLength)),W.createElement("div",{className:"fact-row"},W.createElement("span",null,"Year Length"),W.createElement("span",null,oi[q].yearLength)),!oi[q].hideMoons&&W.createElement("div",{className:"fact-row"},W.createElement("span",null,"Moons"),W.createElement("span",null,oi[q].moons)),W.createElement("div",{className:"fact-row"},W.createElement("span",null,"Avg. Temperature"),W.createElement("span",null,oi[q].avgTemp)),!oi[q].hideDistanceFromSun&&W.createElement("div",{className:"fact-row"},W.createElement("span",null,"Distance from Sun"),W.createElement("span",null,oi[q].distanceFromSun))),W.createElement("p",{className:"planet-info-description"},oi[q].description))),W.createElement(D3,{isMuted:rn,setIsMuted:X,volume:jt,showOrbits:G,setShowOrbits:oe,hideHub:Ve,setHideHub:ae}))}function F3(){const s=tx();return W.createElement(W.Fragment,null,W.createElement("a",{id:"backbutton",className:"link-with-arrow",onClick:()=>s("/"),style:{cursor:"pointer"}},"Back",W.createElement("span",{className:"arrow"},"←")),W.createElement("header",null,W.createElement("img",{id:"profilepic",src:"Aidanprofessional.png",alt:"Profile Picture",width:"205",height:"307"}),W.createElement("p",{id:"name"},"Created by Aidan Von Feldt"),W.createElement("p",{id:"website-description"},"Hi friends! My name is Aidan Von Feldt. I'm a Computer Science Animation major at BYU. I am facinated with space. This interactive solar system lets you explore planetary motion in 3D. It's mathematically accurate — following Kepler's laws and displaying the real axial tilt of each planet and orbit. Visit my website to learn more about me and my projects. Enjoy!"),W.createElement("a",{id:"websitelink",className:"link-with-arrow",href:"https://www.aidanvonfeldt.com/"},"Visit My Website",W.createElement("span",{className:"arrow"},"←"))))}function I3(){return W.createElement("main",{className:"container-fluid bg-secondary text-center"},"404: Return to sender. Address unknown.")}function z3(){return W.createElement(bE,null,W.createElement(eE,null,W.createElement(ac,{path:"/",element:W.createElement(P3,null),exact:!0}),W.createElement(ac,{path:"/about",element:W.createElement(F3,null)}),W.createElement(ac,{path:"/*",element:W.createElement(I3,null)})))}const B3=iM.createRoot(document.getElementById("root"));B3.render(W.createElement(z3,null));
