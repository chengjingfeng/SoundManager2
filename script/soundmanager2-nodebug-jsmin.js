/*

 SoundManager 2: Javascript Sound for the Web
 --------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.96a.20100520+DEV
*/
(function(i){function na(G,aa){function oa(){if(b.debugURLParam.test(ba))b.debugMode=true}this.flashVersion=8;this.debugFlash=this.debugMode=false;this.useConsole=true;this.waitForWindowLoad=this.consoleOnly=false;this.nullURL="null.mp3";this.allowPolling=true;this.useFastPolling=false;this.useMovieStar=true;this.bgColor="#ffffff";this.useHighPerformance=false;this.flashLoadTimeout=1E3;this.wmode=null;this.allowFullScreen=true;this.allowScriptAccess="always";this.useHTML5Audio=this.useFlashBlock=
false;this.html5Test=/^probably$/i;this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:true},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:true},ogg:{type:["audio/ogg; codecs=vorbis"],required:false},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:false}};if(this.audioFormats.mp4.required)this.flashVersion=
9;this.defaultOptions={autoLoad:false,stream:true,autoPlay:false,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onstop:null,onfinish:null,onbeforefinish:null,onbeforefinishtime:5E3,onbeforefinishcomplete:null,onjustbeforefinish:null,onjustbeforefinishtime:200,multiShot:true,multiShotEvents:false,position:null,pan:0,volume:100};this.flash9Options={isMovieStar:null,usePeakData:false,useWaveformData:false,useEQData:false,onbufferchange:null,
ondataerror:null};this.movieStarOptions={onmetadata:null,useVideo:false,bufferTime:3};this.version=null;this.versionNumber="V2.96a.20100520+DEV";this.movieURL=null;this.url=G||null;this.altURL=null;this.enabled=this.swfLoaded=false;this.o=null;this.movieID="sm2-container";this.id=aa||"sm2movie";this.swfCSS={swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"};this.oMC=null;
this.sounds={};this.soundIDs=[];this.isFullScreen=this.muted=false;this.isIE=navigator.userAgent.match(/MSIE/i);this.isSafari=navigator.userAgent.match(/safari/i);this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.didFlashBlock=this.specialWmodeCase=false;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.baseMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
this.netStreamTypes=["aac","flv","mov","mp4","m4v","f4v","m4a","mp4v","3gp","3g2"];this.netStreamPattern=new RegExp("\\.("+this.netStreamTypes.join("|")+")(\\?.*)?$","i");this.mimePattern=this.baseMimeTypes;this.features={buffering:false,peakData:false,waveformData:false,eqData:false,movieStar:false};this.sandbox={type:null,types:{remote:"remote (domain-based) rules",localWithFile:"local with file access (no internet access)",localWithNetwork:"local with network (internet access only, no local access)",
localTrusted:"local, trusted (local+internet access)"},description:null,noRemote:null,noLocal:null};this.hasHTML5=null;this.html5={};this.ignoreFlash=false;var ca,b=this,z,A=navigator.userAgent,ba=i.location.href.toString(),pa,R,B=[],H=false,I=false,o=false,w=false,qa=false,J,q,ra,C,D,S,da,ea,x,sa,T,U,K,V,ta,W,ua,va,L,wa,M=null,fa=null,N,ga,O,X,ha,m,Y=false,ia=false,xa,ya,E=null,za,Z,ja,y=false,P,u,ka,Aa;G=A.match(/pre\//i);aa=ba.match(/sm2\-useHTML5Maybe\=1/i);var Ba=A.match(/(ipad|iphone)/i),Ea=
A.match(/mobile/i)||G||Ba,Ca=document.location?document.location.protocol.match(/http/i):null,la=typeof document.hasFocus!=="undefined"?document.hasFocus():null,F=typeof document.hasFocus==="undefined"&&this.isSafari,Da=!F;this.useAltURL=!Ca;if(Ba||G){b.useHTML5Audio=true;b.ignoreFlash=true}if(G||aa)b.html5Test=/^(probably|maybe)$/i;this.supported=function(){return E?o&&!w:b.useHTML5Audio&&b.hasHTML5};this.getMovie=function(c){return b.isIE?i[c]:b.isSafari?z(c)||document[c]:z(c)};this.loadFromXML=
function(c){try{b.o._loadFromXML(c)}catch(a){L();return true}};this.createSound=function(c){function a(){f=X(f);b.sounds[e.id]=new ca(e);b.soundIDs.push(e.id);return b.sounds[e.id]}var f=null,h=null,e=null;if(!o)throw ha("soundManager.createSound(): "+N("notReady"),arguments.callee.caller);if(arguments.length===2)c={id:arguments[0],url:arguments[1]};e=f=q(c);if(m(e.id,true))return b.sounds[e.id];if(Z(e)){h=a();h._setup_html5(e)}else{if(b.flashVersion>8&&b.useMovieStar){if(e.isMovieStar===null)e.isMovieStar=
(e.type?e.type.match(b.netStreamPattern):false)||e.url.match(b.netStreamPattern)?true:false;if(e.isMovieStar)if(e.usePeakData)e.usePeakData=false}h=a();b.flashVersion===8?b.o._createSound(e.id,e.onjustbeforefinishtime,e.loops||1):b.o._createSound(e.id,e.url,e.onjustbeforefinishtime,e.usePeakData,e.useWaveformData,e.useEQData,e.isMovieStar,e.isMovieStar?e.useVideo:false,e.isMovieStar?e.bufferTime:false,e.loops||1)}if(e.autoLoad||e.autoPlay)if(h)if(b.isHTML5){h.autobuffer="auto";h.preload="auto"}else h.load(e);
e.autoPlay&&h.play();return h};this.createVideo=function(c){if(arguments.length===2)c={id:arguments[0],url:arguments[1]};if(b.flashVersion>=9){c.isMovieStar=true;c.useVideo=true}else return false;return b.createSound(c)};this.destroyVideo=this.destroySound=function(c,a){if(!m(c))return false;for(var f=0;f<b.soundIDs.length;f++)b.soundIDs[f]===c&&b.soundIDs.splice(f,1);b.sounds[c].unload();a||b.sounds[c].destruct();delete b.sounds[c]};this.load=function(c,a){if(!m(c))return false;b.sounds[c].load(a)};
this.unload=function(c){if(!m(c))return false;b.sounds[c].unload()};this.start=this.play=function(c,a){if(!o)throw ha("soundManager.play(): "+N("notReady"),arguments.callee.caller);if(!m(c)){a instanceof Object||(a={url:a});if(a&&a.url){a.id=c;return b.createSound(a).play()}else return false}b.sounds[c].play(a)};this.setPosition=function(c,a){if(!m(c))return false;b.sounds[c].setPosition(a)};this.stop=function(c){if(!m(c))return false;b.sounds[c].stop()};this.stopAll=function(){for(var c in b.sounds)b.sounds[c]instanceof
ca&&b.sounds[c].stop()};this.pause=function(c){if(!m(c))return false;b.sounds[c].pause()};this.pauseAll=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].pause()};this.resume=function(c){if(!m(c))return false;b.sounds[c].resume()};this.resumeAll=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].resume()};this.togglePause=function(c){if(!m(c))return false;b.sounds[c].togglePause()};this.setPan=function(c,a){if(!m(c))return false;b.sounds[c].setPan(a)};this.setVolume=
function(c,a){if(!m(c))return false;b.sounds[c].setVolume(a)};this.mute=function(c){var a=0;if(typeof c!=="string")c=null;if(c){if(!m(c))return false;b.sounds[c].mute()}else{for(a=b.soundIDs.length;a--;)b.sounds[b.soundIDs[a]].mute();b.muted=true}};this.muteAll=function(){b.mute()};this.unmute=function(c){if(typeof c!=="string")c=null;if(c){if(!m(c))return false;b.sounds[c].unmute()}else{for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].unmute();b.muted=false}};this.unmuteAll=function(){b.unmute()};
this.toggleMute=function(c){if(!m(c))return false;b.sounds[c].toggleMute()};this.getMemoryUse=function(){if(b.flashVersion===8)return 0;if(b.o)return parseInt(b.o._getMemoryUse(),10)};this.disable=function(c){if(typeof c==="undefined")c=false;if(w)return false;w=true;for(var a=b.soundIDs.length;a--;)va(b.sounds[b.soundIDs[a]]);J(c);i.removeEventListener&&i.removeEventListener("load",D,false)};this.canPlayMIME=function(c){var a;if(b.hasHTML5)a=P({type:c});return!E||a?a:c?c.match(b.mimePattern)?true:
false:null};this.canPlayURL=function(c){var a;if(b.hasHTML5)a=P(c);return!E||a?a:c?c.match(b.filePattern)?true:false:null};this.canPlayLink=function(c){if(typeof c.type!=="undefined"&&c.type)if(b.canPlayMIME(c.type))return true;return b.canPlayURL(c.href)};this.getSoundById=function(c){if(!c)throw new Error("SoundManager.getSoundById(): sID is null/undefined");return b.sounds[c]};this.onready=function(c,a){if(c&&c instanceof Function){a||(a=i);ra(c,a);C();return true}else throw N("needFunction");
};this.oninitmovie=function(){};this.onload=function(){};this.onerror=function(){};this.getMoviePercent=function(){return b.o&&typeof b.o.PercentLoaded!=="undefined"?b.o.PercentLoaded():null};this._wD=this._writeDebug=function(){};this._debug=function(){};this.reboot=function(){for(var c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].destruct();try{if(b.isIE)fa=b.o.innerHTML;M=b.o.parentNode.removeChild(b.o)}catch(a){}M=fa=null;w=I=H=ia=Y=o=b.enabled=false;b.swfLoaded=false;b.soundIDs={};b.sounds=
[];b.o=null;for(c=B.length;c--;)B[c].fired=false;i.setTimeout(function(){b.beginDelayedInit()},20)};this.destruct=function(){b.disable(true)};this.beginDelayedInit=function(){qa=true;K();setTimeout(da,500);setTimeout(sa,20)};Z=function(c){return(c.type?P({type:c.type}):false)||P(c.url)};P=function(c){if(!b.useHTML5Audio||!b.hasHTML5)return false;var a,f=b.audioFormats;if(!u){u=[];for(a in f)if(f.hasOwnProperty(a)){u.push(a);if(f[a].related)u=u.concat(f[a].related)}u=new RegExp("\\.("+u.join("|")+
")","i")}a=typeof c.type!=="undefined"?c.type:null;c=typeof c==="string"?c.match(u):null;if(!c||!c.length){if(!a)return false}else c=c[0].substr(1);if(c&&typeof b.html5[c]!=="undefined")return b.html5[c];else{if(!a)if(c&&b.html5[c])return b.html5[c];else a="audio/"+c;a=b.html5.canPlayType(a);return b.html5[c]=a}};Aa=function(){function c(j){var r,Q,v=false;if(!f||typeof f.canPlayType!=="function")return false;if(j instanceof Array){r=0;for(Q=j.length;r<Q&&!v;r++)if(b.html5[j[r]]||f.canPlayType(j[r]).match(b.html5Test)){v=
true;b.html5[j[r]]=true}return v}else return(j=f&&typeof f.canPlayType==="function"?f.canPlayType(j):false)&&(j.match(b.html5Test)?true:false)}function a(j,r){function Q(){if(l>=e&&!ja){ja=true;V&&S()}}function v(s){if(!ma){ma=true;l++;p[j]=s;r(s);Q()}}var t,ma=false;e++;if(Ea){l++;r();Q();return false}if(typeof p[j]!=="undefined"){ma=true;r(p[j])}else{t=new Audio(h[j]);t.addEventListener("canplay",function(s){v(true,s);t=null},false);t.addEventListener("canplaythrough",function(s){v(true,s);t=null},
false);t.addEventListener("error",function(s){v(false,this.error?this.error:s);t=null},false);t.addEventListener("stalled",function(s){v(false,s);t=null},false);t.load()}}if(!b.useHTML5Audio||typeof Audio==="undefined")return false;var f=typeof Audio!=="undefined"?new Audio:null,h={mp3:"data:audio/mpeg;base64,/+MYxAALOAHgCAAAAD////////////v6OGAfB8HwfAgIAgCAYB8HwfB8CAgCAIAgD4Pg+D4OAgCAIP9Xt6vb1CV0qLA0DQND/+MYxA4FcAHcAAAAAISgqCtvV7eqTEFNRTMuOTguNKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/+MYxDMAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
wav:"data:audio/wave;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQIAAAD//w=="},e=0,l=0,p={},d,g={},k,n;k=b.audioFormats;for(d in k)if(k.hasOwnProperty(d)){g[d]=c(k[d].type);if(k[d]&&k[d].related)for(n=0;n<k[d].related.length;n++)b.html5[k[d].related[n]]=g[d]}g.canPlayType=f?c:null;b.html5=q(b.html5,g);b.html5.mp3||a("mp3",function(j){if(j)b.html5.mp3=j});b.html5.wav||a("wav",function(j){if(j)b.html5.wav=j})};T={};z=function(c){return document.getElementById(c)};N=function(){var c=
Array.prototype.slice.call(arguments),a=c.shift();a=T&&T[a]?T[a]:"";var f,h;if(a&&c&&c.length){f=0;for(h=c.length;f<h;f++)a=a.replace("%s",c[f])}return a};X=function(c){if(b.flashVersion===8&&c.loops>1&&c.stream)c.stream=false;return c};ha=function(c,a){if(!a)return new Error("Error: "+c);typeof console!=="undefined"&&typeof console.trace!=="undefined"&&console.trace();c="Error: "+c+". \nCaller: "+a.toString();return new Error(c)};pa=function(){return false};va=function(c){for(var a in c)if(c.hasOwnProperty(a)&&
typeof c[a]==="function")c[a]=pa};L=function(c){if(typeof c==="undefined")c=false;if(w||c)b.disable(c)};wa=function(c){var a=null;if(c)if(c.match(/\.swf(\?\.*)?$/i)){if(a=c.substr(c.toLowerCase().lastIndexOf(".swf?")+4))return c}else if(c.lastIndexOf("/")!==c.length-1)c+="/";return(c&&c.lastIndexOf("/")!==-1?c.substr(0,c.lastIndexOf("/")+1):"./")+b.movieURL};ea=function(){if(b.flashVersion!==8&&b.flashVersion!==9)b.flashVersion=8;var c=b.debugMode||b.debugFlash?"_debug.swf":".swf";b.version=b.versionNumber+
(y?" (HTML5-only mode)":b.flashVersion===9?" (AS3/Flash 9)":" (AS2/Flash 8)");if(b.flashVersion>8){b.defaultOptions=q(b.defaultOptions,b.flash9Options);b.features.buffering=true}if(b.flashVersion>8&&b.useMovieStar){b.defaultOptions=q(b.defaultOptions,b.movieStarOptions);b.filePatterns.flash9=new RegExp("\\.(mp3|"+b.netStreamTypes.join("|")+")(\\?.*)?$","i");b.mimePattern=b.netStreamMimeTypes;b.features.movieStar=true}else b.features.movieStar=false;b.filePattern=b.filePatterns[b.flashVersion!==8?
"flash9":"flash8"];b.movieURL=(b.flashVersion===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",c);b.features.peakData=b.features.waveformData=b.features.eqData=b.flashVersion>8};ta=function(){return document.body?document.body:document.documentElement?document.documentElement:document.getElementsByTagName("div")[0]};ua=function(c,a){if(!b.o||!b.allowPolling)return false;b.o._setPolling(c,a)};W=function(c,a){function f(){}var h=null;h=a?a:b.url;a=b.altURL?b.altURL:h;var e,l,p;c=typeof c===
"undefined"?b.id:c;if(H&&I)return false;if(y){ea();f();b.oMC=z(b.movieID);R();I=H=true;return false}H=true;ea();b.url=wa(Ca?h:a);a=b.url;if(b.useHighPerformance&&b.useMovieStar&&b.defaultOptions.useVideo===true){h="soundManager note: disabling highPerformance, not applicable with movieStar mode+useVideo";b.useHighPerformance=false}b.wmode=!b.wmode&&b.useHighPerformance&&!b.useMovieStar?"transparent":b.wmode;if(b.wmode!==null&&!b.isIE&&!b.useHighPerformance&&navigator.platform.match(/win32/i)){b.specialWmodeCase=
true;b.wmode=null}if(b.flashVersion===8)b.allowFullScreen=false;e={name:c,id:c,src:a,width:"100%",height:"100%",quality:"high",allowScriptAccess:b.allowScriptAccess,bgcolor:b.bgColor,pluginspage:"http://www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash",wmode:b.wmode,allowfullscreen:b.allowFullScreen?"true":"false"};if(b.debugFlash)e.FlashVars="debug=1";b.wmode||delete e.wmode;if(b.isIE){h=document.createElement("div");p='<object id="'+c+'" data="'+a+'" type="'+e.type+'" width="'+
e.width+'" height="'+e.height+'"><param name="movie" value="'+a+'" /><param name="AllowScriptAccess" value="'+b.allowScriptAccess+'" /><param name="quality" value="'+e.quality+'" />'+(b.wmode?'<param name="wmode" value="'+b.wmode+'" /> ':"")+'<param name="bgcolor" value="'+b.bgColor+'" /><param name="allowFullScreen" value="'+e.allowFullScreen+'" />'+(b.debugFlash?'<param name="FlashVars" value="'+e.FlashVars+'" />':"")+"<!-- --\></object>"}else{h=document.createElement("embed");for(l in e)e.hasOwnProperty(l)&&
h.setAttribute(l,e[l])}oa();l=O();if(c=ta()){b.oMC=z(b.movieID)?z(b.movieID):document.createElement("div");if(b.oMC.id){c=b.oMC.className;b.oMC.className=(c?c+" ":b.swfCSS.swfDefault)+(l?" "+l:"");b.oMC.appendChild(h);if(b.isIE){l=b.oMC.appendChild(document.createElement("div"));l.className="sm2-object-box";l.innerHTML=p}I=true}else{b.oMC.id=b.movieID;b.oMC.className=b.swfCSS.swfDefault+" "+l;l=a=null;b.useFlashBlock||(a=b.useHighPerformance?{position:"fixed",width:"8px",height:"8px",bottom:"0px",
left:"0px",overflow:"hidden"}:{position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"});e=null;if(!b.debugFlash)for(e in a)if(a.hasOwnProperty(e))b.oMC.style[e]=a[e];try{b.isIE||b.oMC.appendChild(h);c.appendChild(b.oMC);if(b.isIE){l=b.oMC.appendChild(document.createElement("div"));l.className="sm2-object-box";l.innerHTML=p}I=true}catch(d){throw new Error(N("appXHTML"));}}}f()};m=this.getSoundById;q=function(c,a){var f={},h,e;for(h in c)if(c.hasOwnProperty(h))f[h]=c[h];c=typeof a===
"undefined"?b.defaultOptions:a;for(e in c)if(c.hasOwnProperty(e)&&typeof f[e]==="undefined")f[e]=c[e];return f};U=function(){if(y){W();return false}if(b.o)return false;b.o=b.getMovie(b.id);if(!b.o){if(M){if(b.isIE)b.oMC.innerHTML=fa;else b.oMC.appendChild(M);M=null;H=true}else W(b.id,b.url);b.o=b.getMovie(b.id)}typeof b.oninitmovie==="function"&&setTimeout(b.oninitmovie,1)};S=function(c){if(c)b.url=c;U()};da=function(){if(Y)return false;Y=true;if(F&&!la)return false;var c;o||(c=b.getMoviePercent());
setTimeout(function(){c=b.getMoviePercent();if(!o&&Da)if(c===null)if(b.useFlashBlock||b.flashLoadTimeout===0)b.useFlashBlock&&ga();else L(true);else b.flashLoadTimeout!==0&&L(true)},b.flashLoadTimeout)};O=function(){var c=[];b.debugMode&&c.push(b.swfCSS.sm2Debug);b.debugFlash&&c.push(b.swfCSS.flashDebug);b.useHighPerformance&&c.push(b.swfCSS.highPerf);return c.join(" ")};ga=function(){var c=b.getMoviePercent();if(b.supported()){if(b.oMC)b.oMC.className=O()+" "+b.swfCSS.swfDefault+(" "+b.swfCSS.swfUnblocked)}else{if(E)b.oMC.className=
O()+" "+b.swfCSS.swfDefault+" "+(c===null?b.swfCSS.swfTimedout:b.swfCSS.swfError);C(true);b.onerror instanceof Function&&b.onerror.apply(i);b.didFlashBlock=true}};x=function(){if(la||!F)return true;la=Da=true;F&&i.removeEventListener("mousemove",x,false);Y=false;setTimeout(da,500);if(i.removeEventListener)i.removeEventListener("focus",x,false);else i.detachEvent&&i.detachEvent("onfocus",x)};J=function(c){if(o)return false;if(y){o=true;C();D();return true}b.useFlashBlock&&b.flashLoadTimeout&&!b.getMoviePercent()||
(o=true);if(w||c){if(b.useFlashBlock)b.oMC.className=O()+" "+(b.getMoviePercent()===null?b.swfCSS.swfTimedout:b.swfCSS.swfError);C();b.onerror instanceof Function&&b.onerror.apply(i);return false}if(b.waitForWindowLoad&&!qa){if(i.addEventListener)i.addEventListener("load",D,false);else i.attachEvent&&i.attachEvent("onload",D);return false}else D()};ra=function(c,a){B.push({method:c,scope:a||null,fired:false})};C=function(c){if(!o&&!c)return false;c={success:c?b.supported():!w};var a=[],f,h,e=!b.useFlashBlock||
b.useFlashBlock&&!b.supported();f=0;for(h=B.length;f<h;f++)B[f].fired!==true&&a.push(B[f]);if(a.length){f=0;for(h=a.length;f<h;f++){a[f].scope?a[f].method.apply(a[f].scope,[c]):a[f].method(c);if(!e)a[f].fired=true}}};D=function(){i.setTimeout(function(){b.useFlashBlock&&ga();C();b.onload.apply(i)},1)};za=function(){var c,a,f=!ba.match(/usehtml5audio/i)&&b.isSafari&&A.match(/OS X 10_6_3/i)&&A.match(/531\.22\.7/i);if(A.match(/iphone os (1|2|3_0|3_1)/i)?true:false){b.hasHTML5=false;y=true;if(b.oMC)b.oMC.style.display=
"none";return false}if(b.useHTML5Audio){if(!b.html5||!b.html5.canPlayType){b.hasHTML5=false;return true}else b.hasHTML5=true;if(f){b.useHTML5Audio=false;b.hasHTML5=false;return true}}else return true;for(a in b.audioFormats)if(b.audioFormats.hasOwnProperty(a))if(b.audioFormats[a].required&&!b.html5.canPlayType(b.audioFormats[a].type))c=true;if(b.ignoreFlash)c=false;y=b.useHTML5Audio&&b.hasHTML5&&!c;return c};R=function(){function c(){if(i.removeEventListener)i.removeEventListener("load",b.beginDelayedInit,
false);else i.detachEvent&&i.detachEvent("onload",b.beginDelayedInit)}var a,f=[];if(o)return false;if(b.hasHTML5)for(a in b.audioFormats)b.audioFormats.hasOwnProperty(a)&&f.push(a+": "+b.html5[a]);if(y){if(!o){c();b.enabled=true;J()}return true}U();try{b.o._externalInterfaceTest(false);if(b.allowPolling)ua(true,b.useFastPolling?true:false);b.debugMode||b.o._disableDebug();b.enabled=true}catch(h){L(true);J();return false}J();c()};sa=function(){if(ia)return false;W();U();return ia=true};K=function(){if(V)return false;
V=true;oa();Aa();E=za();V=true;if(b.useHTML5Audio&&b.hasHTML5)ja&&S();else S()};xa=function(c){if(!c._hasTimer)c._hasTimer=true};ya=function(c){if(c._hasTimer)c._hasTimer=false};this._setSandboxType=function(c){var a=b.sandbox;a.type=c;a.description=a.types[typeof a.types[c]!=="undefined"?c:"unknown"];if(a.type==="localWithFile"){a.noRemote=true;a.noLocal=false}else if(a.type==="localWithNetwork"){a.noRemote=false;a.noLocal=true}else if(a.type==="localTrusted"){a.noRemote=false;a.noLocal=false}};
this._externalInterfaceOK=function(){if(b.swfLoaded)return false;(new Date).getTime();b.swfLoaded=true;F=false;b.isIE?setTimeout(R,100):R()};this._onfullscreenchange=function(c){b.isFullScreen=c===1?true:false;if(!b.isFullScreen)try{i.focus()}catch(a){}};ca=function(c){var a=this,f,h,e,l,p;this.sID=c.id;this.url=c.url;this._iO=this.instanceOptions=this.options=q(c);this.pan=this.options.pan;this.volume=this.options.volume;this._lastURL=null;this.isHTML5=false;this.id3={};this._debug=function(){};
this._debug();this.load=function(d){if(typeof d!=="undefined"){a._iO=q(d);a.instanceOptions=a._iO}else{d=a.options;a._iO=d;a.instanceOptions=a._iO;if(a._lastURL&&a._lastURL!==a.url){a._iO.url=a.url;a.url=null}}if(typeof a._iO.url==="undefined")a._iO.url=a.url;if(a._iO.url===a.url&&a.readyState!==0&&a.readyState!==2)return false;a.url=a._iO.url;a._lastURL=a._iO.url;a.loaded=false;a.readyState=1;a.playState=0;if(Z(a._iO)){a._setup_html5(a._iO);a._iO.autoPlay&&a.play()}else try{a.isHTML5=false;a._iO=
X(a._iO);if(b.flashVersion===8)b.o._load(a.sID,a._iO.url,a._iO.stream,a._iO.autoPlay,a._iO.whileloading?1:0,a._iO.loops||1);else{b.o._load(a.sID,a._iO.url,a._iO.stream?true:false,a._iO.autoPlay?true:false,a._iO.loops||1);a._iO.isMovieStar&&a._iO.autoLoad&&!a._iO.autoPlay&&a.pause()}}catch(g){b.onerror();b.disable()}};this.unload=function(){if(a.readyState!==0){a.readyState!==2&&a.setPosition(0,true);if(a.isHTML5){e();if(a.__element){a.__element.pause();a.__element.src="about:blank";a.__element.load();
a.__element=null}}else b.o._unload(a.sID,b.nullURL);f()}};this.destruct=function(){if(a.isHTML5){e();if(a.__element){a.__element.pause();a.__element.src="about:blank";a.__element.load();a.__element=null}}else b.o._destroySound(a.sID);b.destroySound(a.sID,true)};this.start=this.play=function(d){d||(d={});a._iO=q(d,a._iO);a._iO=q(a._iO,a.options);a.instanceOptions=a._iO;if(Z(a._iO)){a._setup_html5(a._iO);l()}if(a.playState===1)if(d=a._iO.multiShot)a.isHTML5&&a.setPosition(a._iO.position);else return false;
if(!a.loaded)if(a.readyState===0)if(a.isHTML5)a.readyState=1;else{a._iO.autoPlay=true;a.load(a._iO)}else if(a.readyState===2)return false;if(a.paused)a.resume();else{a.playState=1;if(!a.instanceCount||b.flashVersion>8&&!a.isHTML5)a.instanceCount++;a.position=typeof a._iO.position!=="undefined"&&!isNaN(a._iO.position)?a._iO.position:0;a._iO=X(a._iO);a._iO.onplay&&a._iO.onplay.apply(a);a.setVolume(a._iO.volume,true);a.setPan(a._iO.pan,true);if(a.isHTML5){l();a._setup_html5().play()}else b.o._start(a.sID,
a._iO.loops||1,b.flashVersion===9?a.position:a.position/1E3)}};this.stop=function(d){if(a.playState===1){a._onbufferchange(0);a.resetOnPosition(0);if(!a.isHTML5)a.playState=0;a.paused=false;a._iO.onstop&&a._iO.onstop.apply(a);if(a.isHTML5){if(a.__element){a.setPosition(0);a.__element.pause();a.playState=0;a._onTimer();e();a.unload();a.__element=null}}else b.o._stop(a.sID,d);a.instanceCount=0;a._iO={}}};this.setPosition=function(d){if(typeof d==="undefined")d=0;d=a.isHTML5?Math.max(d,0):Math.min(a.duration,
Math.max(d,0));a._iO.position=d;a.resetOnPosition(a._iO.position);if(a.isHTML5){if(a.__element){if(a.playState)try{a.__element.currentTime=a._iO.position/1E3}catch(g){}a.paused&&a._onTimer(true)}}else b.o._setPosition(a.sID,b.flashVersion===9?a._iO.position:a._iO.position/1E3,a.paused||!a.playState)};this.pause=function(){if(a.paused||a.playState===0)return false;a.paused=true;if(a.isHTML5){a._setup_html5().pause();e()}else b.o._pause(a.sID);a._iO.onpause&&a._iO.onpause.apply(a)};this.resume=function(){if(!a.paused||
a.playState===0)return false;a.paused=false;if(a.isHTML5){a._setup_html5().play();l()}else b.o._pause(a.sID);a._iO.onresume&&a._iO.onresume.apply(a)};this.togglePause=function(){if(a.playState===0){a.play({position:b.flashVersion===9&&!a.isHTML5?a.position:a.position/1E3});return false}a.paused?a.resume():a.pause()};this.setPan=function(d,g){if(typeof d==="undefined")d=0;if(typeof g==="undefined")g=false;a.isHTML5||b.o._setPan(a.sID,d);a._iO.pan=d;if(!g)a.pan=d};this.setVolume=function(d,g){if(typeof d===
"undefined")d=100;if(typeof g==="undefined")g=false;if(a.isHTML5){if(a.__element)a.__element.volume=d/100}else b.o._setVolume(a.sID,b.muted&&!a.muted||a.muted?0:d);a._iO.volume=d;if(!g)a.volume=d};this.mute=function(){a.muted=true;if(a.isHTML5){if(a.__element)a.__element.muted=true}else b.o._setVolume(a.sID,0)};this.unmute=function(){a.muted=false;var d=typeof a._iO.volume!=="undefined";if(a.isHTML5){if(a.__element)a.__element.muted=false}else b.o._setVolume(a.sID,d?a._iO.volume:a.options.volume)};
this.toggleMute=function(){a.muted?a.unmute():a.mute()};this.onPosition=function(d,g,k){a._onPositionItems.push({position:d,method:g,scope:k||null,fired:false})};this.processOnPosition=function(){var d,g;d=a._onPositionItems.length;if(!d||!a.playState||a._onPositionFired>=d)return false;for(d=d;d--;){g=a._onPositionItems[d];if(!g.fired&&a.position>=g.position){g.scope?g.method.apply(g.scope):g.method();g.fired=true;b._onPositionFired++}}};this.resetOnPosition=function(d){var g,k;g=a._onPositionItems.length;
if(!g)return false;for(g=g;g--;){k=a._onPositionItems[g];if(k.fired&&d<=k.position){k.fired=false;b._onPositionFired--}}};this._onTimer=function(d){if(a._hasTimer||d)if(a.__element&&(d||(a.playState>0||a.readyState===1)&&!a.paused)){d=a.__element;a.duration=p();a.durationEstimate=a.duration;d=d.currentTime?d.currentTime*1E3:0;a._whileplaying(d,{},{},{},{});return true}else return false};p=function(){var d=a.__element?a.__element.duration*1E3:undefined;if(d)return!isNaN(d)?d:null};l=function(){a.isHTML5&&
xa(a)};e=function(){a.isHTML5&&ya(a)};f=function(){a._onPositionItems=[];a._onPositionFired=0;a._hasTimer=null;a._added_events=null;a.__element=null;a.bytesLoaded=null;a.bytesTotal=null;a.position=null;a.duration=null;a.durationEstimate=null;a.loaded=false;a.playState=0;a.paused=false;a.readyState=0;a.muted=false;a.didBeforeFinish=false;a.didJustBeforeFinish=false;a.isBuffering=false;a.instanceOptions={};a.instanceCount=0;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.eqData=[];a.eqData.left=
[];a.eqData.right=[]};f();this._setup_html5=function(d){d=q(a._iO,d);if(a.__element){if(a.url!==d.url)a.__element.src=d.url}else{a.__element=new Audio(d.url);a.isHTML5=true;h()}a.__element.loop=d.loops>1?"loop":"";return a.__element};h=function(){function d(g,k,n){return a.__element?a.__element.addEventListener(g,k,n||false):null}if(a._added_events)return false;a._added_events=true;d("load",function(){if(a.__element){a._onbufferchange(0);a._whileloading(a.bytesTotal,a.bytesTotal,p());a._onload(1)}},
false);d("canplay",function(){a._onbufferchange(0)},false);d("waiting",function(){a._onbufferchange(1)},false);d("progress",function(g){var k=a.__element;if(!a.loaded&&k){a._onbufferchange(0);a._whileloading(g.loaded||0,g.total||1,p())}},false);d("end",function(){a._onfinish()},false);d("error",function(){a.__element&&a._onload(0)},false);d("loadstart",function(){a._onbufferchange(1)},false);d("play",function(){a._onbufferchange(0)},false);d("playing",function(){a._onbufferchange(0)},false);a.__element.addEventListener("timeupdate",
function(){a._onTimer()},false);setTimeout(function(){a&&a.__element&&d("ended",function(){a._onfinish()},false)},250)};this._whileloading=function(d,g,k){if(a._iO.isMovieStar){a.bytesLoaded=d;a.bytesTotal=g;a.duration=Math.floor(k);a.durationEstimate=a.duration}else{a.bytesLoaded=d;a.bytesTotal=g;a.duration=Math.floor(k);a.durationEstimate=parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10);if(a.durationEstimate===undefined)a.durationEstimate=a.duration}a.readyState!==3&&a._iO.whileloading&&a._iO.whileloading.apply(a)};
this._onid3=function(d,g){var k=[],n,j;n=0;for(j=d.length;n<j;n++)k[d[n]]=g[n];a.id3=q(a.id3,k);a._iO.onid3&&a._iO.onid3.apply(a)};this._whileplaying=function(d,g,k,n,j){if(isNaN(d)||d===null)return false;if(a.playState===0&&d>0)d=0;a.position=d;a.processOnPosition();if(b.flashVersion>8&&!a.isHTML5){if(a._iO.usePeakData&&typeof g!=="undefined"&&g)a.peakData={left:g.leftPeak,right:g.rightPeak};if(a._iO.useWaveformData&&typeof k!=="undefined"&&k)a.waveformData={left:k.split(","),right:n.split(",")};
if(a._iO.useEQData)if(typeof j!=="undefined"&&j&&j.leftEQ){d=j.leftEQ.split(",");a.eqData=d;a.eqData.left=d;if(typeof j.rightEQ!=="undefined"&&j.rightEQ)a.eqData.right=j.rightEQ.split(",")}}if(a.playState===1){!a.isHTML5&&a.isBuffering&&a._onbufferchange(0);a._iO.whileplaying&&a._iO.whileplaying.apply(a);a.loaded&&a._iO.onbeforefinish&&a._iO.onbeforefinishtime&&!a.didBeforeFinish&&a.duration-a.position<=a._iO.onbeforefinishtime&&a._onbeforefinish()}};this._onload=function(d){d=d===1?true:false;a.loaded=
d;a.readyState=d?3:2;a._iO.onload&&a._iO.onload.apply(a)};this._onbeforefinish=function(){if(!a.didBeforeFinish){a.didBeforeFinish=true;a._iO.onbeforefinish&&a._iO.onbeforefinish.apply(a)}};this._onjustbeforefinish=function(){if(!a.didJustBeforeFinish){a.didJustBeforeFinish=true;a._iO.onjustbeforefinish&&a._iO.onjustbeforefinish.apply(a)}};this._onfinish=function(){a._onbufferchange(0);a.resetOnPosition(0);a._iO.onbeforefinishcomplete&&a._iO.onbeforefinishcomplete.apply(a);a.didBeforeFinish=false;
a.didJustBeforeFinish=false;if(a.instanceCount){a.instanceCount--;if(!a.instanceCount){a.playState=0;a.paused=false;a.instanceCount=0;a.instanceOptions={};e()}if(!a.instanceCount||a._iO.multiShotEvents)a._iO.onfinish&&a._iO.onfinish.apply(a);if(a.isHTML5){a.unload();a.__element=null}}};this._onmetadata=function(d){if(!d.width&&!d.height){d.width=320;d.height=240}a.metadata=d;a.width=d.width;a.height=d.height;a._iO.onmetadata&&a._iO.onmetadata.apply(a)};this._onbufferchange=function(d){if(a.playState===
0)return false;if(d&&a.isBuffering||!d&&!a.isBuffering)return false;a.isBuffering=d===1?true:false;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a)};this._ondataerror=function(){a.playState>0&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};if(!b.hasHTML5||E)if(i.addEventListener){i.addEventListener("focus",x,false);i.addEventListener("load",b.beginDelayedInit,false);i.addEventListener("unload",b.destruct,false);F&&i.addEventListener("mousemove",x,false)}else if(i.attachEvent){i.attachEvent("onfocus",
x);i.attachEvent("onload",b.beginDelayedInit);i.attachEvent("unload",b.destruct)}else{$.onerror();$.disable()}ka=function(){if(document.readyState==="complete"){K();document.detachEvent("onreadystatechange",ka)}};if(document.addEventListener)document.addEventListener("DOMContentLoaded",K,false);else document.attachEvent&&document.attachEvent("onreadystatechange",ka);document.readyState==="complete"&&setTimeout(K,100)}var $=null;if(typeof SM2_DEFER==="undefined"||!SM2_DEFER)$=new na;i.SoundManager=
na;i.soundManager=$})(window);
