"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,n,t,i,o,a,r){var s=e._snigelConfig;if(s){try{i=s.settings.adconsent.objName}catch(e){}o="__"+i}var c,l=void 0,u=e.performance,p=u&&u.now?function(){return Math.floor(u.now())}:function(){return 0};!function(){if("function"===_typeof(e.CustomEvent))return!1;function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:l};var i=n.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}t.prototype=e.Event.prototype,e.CustomEvent=t}();try{var f=function(n,t,i,o){e.console[n]&&w.level>=t&&console[n].apply(console,function(e,n,t){return e=[].slice.call(e),n&&e.unshift(n),e.unshift("display: inline-block; color: #fff; background: "+t+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cAdConsent"),e}(i,n.toUpperCase()+":",o))},d=function(e,n){return{region:e,loaded:!1,applies:l,version:n,status:"stub"}},g=function(n,t){return function(i,o,a){e[n](i,t?l:o,a,o)}},v=function(e,n,t){return!n||n===e.version||(C(t,null,!1),k("Wrong framework version detected: "+n),!1)},m=function(e,n,t){var i=U.applies?l:U.applies,o={tcString:l,tcfPolicyVersion:2,cmpId:229,cmpVersion:49,gdprApplies:i,eventStatus:!1===i?"tcloaded":l,cmpStatus:U.status,listenerId:n,isServiceSpecific:!0,useNonStandardStacks:!1,publisherCC:I.publisherCC,purposeOneTreatment:!1};k("Sending TCData structure:",o,t),C(t,o,!0)},b=function(e,n,t,i,o){e.queue.push({command:n,version:t,parameter:i,callback:o})},y=function(t,i,o){if(o){var a=t+"Locator";!function t(){if(!e.frames[a]){var i=n.body;if(i){var o=n.createElement("iframe");o.style.display="none",o.name=a,i.appendChild(o)}else setTimeout(t,5)}}();var r=function(n){var i=n.data,o="string"==typeof i;try{var a=(o?JSON.parse(i):i)[t+"Call"];if(a){e[t](a.command,a.version,function(e,i){try{if(n&&n.source&&n.source.postMessage){var r={};r[t+"Return"]={returnValue:e,success:i===l||i,callId:a.callId},n.source.postMessage(o?JSON.stringify(r):r,"*")}}catch(e){}},a.parameter)}}catch(e){}}}if("function"!==_typeof(e[t])){var s=function(n,a,r,s){var c=e[t];if(c.queue){for(var l in i)if(n===l){var u=!0;(0,i[l])(c,n,a,r,s);break}u||b(c,n,a,s,r)}else c(n,o?a:s,r,s)};e[t]=o?s:function(e,n,t){s(e,null,t,n)},e[t].queue=[],o&&(e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r))}},C=function(e,n,t){e&&e(n,t)},h=function i(o,a,r,s,c){if(G.region!==l){if(!B)if(B=!0,0==G.region)R.dispatchCustomEventConsent(3,3);else if(z){var u=n.createElement("script");u.type="text/javascript",u.src=A.cfg.apiBaseUrl+"/adconsent"+z+".js",u.async=!0,u.charset="utf-8",n.head.appendChild(u)}}else!function(n){var i=null,o=t.getItem("snconsent_geo");if(o){var a=t.getItem("snconsent_geo_exp");if(a)try{parseInt(a)>=(new Date).getTime()&&(i=JSON.parse(e.atob(o)))}catch(e){}}if(i)n(i);else{var r=new XMLHttpRequest;r.open("GET","https://pro.ip-api.com/json/?fields=57354&key=33arzTfj1gigDqW"),r.timeout=5e3,r.onload=function(){var i=r.responseText.toLowerCase();t.setItem("snconsent_geo",e.btoa(i)),t.setItem("snconsent_geo_exp",(new Date).getTime()+36e5),n(JSON.parse(i))},r.onerror=r.ontimeout=function(){n(null)},r.send()}}(function(e){var n=e?e.countrycode:null;"us"===n&&"california"===e.regionname?_(l,l,l,l,2):-1!=="at be bg hr cy cz dk ee fi fr de gr hu is ie it lv li lt lu mt nl no pl pt ro sk si es se gb".indexOf(n)?_(l,l,l,l,1):(n||(O("ErrorGeotargeting"),D("Geotargeting failed")),_(l,l,l,l,0)),i()})},_=function(n,t,i,o,a){if(G.region===l)if(N[a]){for(var s in x){var c=x[s];c.applies=c.region==a,c.applies?z=s:(c.loaded=!0,c.status="loaded")}G.region=a,T("Configured consent region "+N[a]),function(){if(1!==G.region&&L.processListeners(m),2!==G.region){var n=e[r],t=n.queue;if(t){n.queue=[];for(var i=0;i<t.length;i++){var o=t[i];n(o.command,o.version,o.callback,o.parameter)}}}}()}else D("Incorrect consent region "+a)},E=function(e,n,t){return function(i,o,a,r,s){s=!!s,G.region===l&&e.applies===l&&(s?_(i,o,a,r,n):(e.applies=!1,!1===t.applies&&_(i,o,a,r,0)))}},S=function(e,n,t,i,o){q.enabled=o===l||!!o,q.callback=i},A=g(o);A.gdpr=g("__tcfapi",!0);var L=A.gdpr;L.listenerId=1,L.tcfListeners=[],L.addEventListener=function(e,n,t){if(v(U,e,n)){k("Adding event listener "+L.listenerId,n);var i={id:L.listenerId++,callback:n||function(){}};L.tcfListeners.push(i),t(null,i.id,i.callback)}},L.removeEventListener=function(e,n,t,i,o){if(v(U,t,i)){k("Removing event listener "+o);for(var a=0;a<L.tcfListeners.length;a++)if(L.tcfListeners[a].id==o)return L.tcfListeners.splice(a,1),void C(i,!0);D("Couldn't find listener id "+o+"."),C(i,!1)}},L.getTCData=function(e,n,t,i){v(U,t,i)&&m(0,0,i)},L.processListeners=function(e){for(var n=L.tcfListeners.slice(),t=0;t<n.length;t++)e(null,n[t].id,n[t].callback)},A.ccpa=g(r,!0),A.version=49,A.cmpId=229,A.cfg={apiBaseUrl:"https://cdn.snigelweb.com/adconsent/49",publisherCC:"US"};var I=A.cfg;A.log={levels:{off:0,error:1,warning:2,info:3,debug:4},level:2,error:function(){f("error",1,arguments,"#ff0000")},warn:function(){f("warn",2,arguments,"#ffe600")},info:function(){f("info",3,arguments,"#3b88a3")},debug:function(){f("debug",4,arguments,"#808080")}};var w=A.log,k=w.debug,T=w.info,P=w.warn,D=w.error;A.consent={regions:{0:"NONE",1:"GDPR",2:"CCPA"},region:l,api:{__tcfapi:d(1,2),__uspapi:d(2,1)}};var G=A.consent,N=G.regions,x=G.api,U=x.__tcfapi,V=x[r];A.analytics={enabled:!1,callback:l,send:function(e){q.sendEvent(N[G.region],e,p())},sendEvent:function(n,t,i){(T("Sending analytics event action"+(q.enabled?"":" disabled")+": "+n+", label: "+t+", value: "+i),q.enabled)&&(q.callback||function(n){e.gtag?gtag("event",n.action,{event_category:n.category,event_label:n.label,event_value:n.value}):e.ga?ga("send",{hitType:"event",eventCategory:n.category,eventAction:n.action,eventLabel:n.label,eventValue:n.value,nonInteraction:n.nonInteraction}):P("Unable to find Google Analytics module (gtag or ga).")})({category:"AdConsent",action:n,label:t||n,value:i||0,nonInteraction:!0})}};var q=A.analytics,O=q.send;A.event={fired:{},dispatchCustomEvent:function(e,t,i){i&&j[e]||(j[e]=!0,k("Emitting custom event "+e+" with details: ",t),n.dispatchEvent(new CustomEvent(e,t)))},dispatchCustomEventConsent:function(e,n){var t={0:"N/A",1:"NoConsent",2:"PartialConsent",3:"FullConsent"};O(t[n]),1==G.region&&0!=e&&O("Publisher"+t[e]),R.dispatchCustomEvent("cmpConsentAvailable",{detail:{consentSummary:{mapping:{0:"not available",1:"no consent",2:"partial consent",3:"full consent"},publisherConsent:e,vendorsConsent:n,gdprApplies:U.applies,uspApplies:V.applies}}})}};var R=A.event,j=R.fired,J=(c=e.location.search)?c.replace(/^\?/,"").split("&").reduce(function(e,n){var t=n.split("="),i=t[0],o=t.length>1?t[1]:l;return/\[\]$/.test(i)?(e[i=i.replace("[]","")]=e[i]||[],e[i].push(o)):e[i]=o||"",e},{}):{},M=("true"==J.sn_debug?"debug":null)||("true"==J.adconsent_debug?"debug":null)||J.adconsent_log;if(w.level=w.levels[M]||w.level,e[i])return void D("Stub is tried to load again!");if(e.__tcfapi||e[r])return void P("A cmp is already registered in the system. AdConsent is stopping.");e[i]=A;var z=l,B=!1;y("__tcfapi",{start:h,setGDPRApplies:E(U,1,V),enableGoogleAnalytics:S,ping:function(e,n,t,i){var o={gdprApplies:U.applies,cmpLoaded:U.loaded,cmpStatus:U.status,displayStatus:"disabled",apiVersion:"2.0",cmpVersion:49,cmpId:229,gvlVersion:l,tcfPolicyVersion:2};C(i,o,!0)},getTCData:L.getTCData,addEventListener:function(e,n,t,i,o){L.addEventListener(t,i,m)},removeEventListener:L.removeEventListener},!0),y(r,{start:h,setUSPApplies:E(V,2,U),enableGoogleAnalytics:S,getUSPData:function(e,n,t,i,o){!1===V.applies?v(V,t,i)&&C(i,{version:1,uspString:"1---"},!0):b(e,n,t,o,i)}},!0),y(o,{start:h,setPublisherCC:function(e,n,t,i,o){"string"!=typeof o||2!=o.length?C(i,{message:"Invalid publisher country code detected. Ignoring call."},!1):(I.publisherCC=o.toUpperCase(),C(i,null,!0))},setConsentRegion:_,setGDPRApplies:E(U,1,V),setUSPApplies:E(V,2,U),enableGoogleAnalytics:S})}catch(e){if(s&&s.passThroughException)throw e;console.error(e)}}(window,document,localStorage,"adconsent","__cmp",0,"__uspapi");