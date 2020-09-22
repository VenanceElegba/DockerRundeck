(function(C){function U(a,b){return function(c){return n(a.call(this,c),b)}}function pa(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function V(){}function H(a){W(a);p(this,a)}function I(a){var b=X(a),c=b.year||0,d=b.month||0,f=b.week||0,e=b.day||0,h=b.hour||0,q=b.minute||0,l=b.second||0,b=b.millisecond||0;this._input=a;this._milliseconds=+b+1E3*l+6E4*q+36E5*h;this._days=+e+7*f;this._months=+d+12*c;this._data={};this._bubble()}function p(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function x(a){return 0>a?Math.ceil(a):Math.floor(a)}function n(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function J(a,b,c,d){var f,g,h=b._milliseconds,q=b._days;b=b._months;h&&a._d.setTime(+a._d+h*c);(q||b)&&(f=a.minute(),g=a.hour());q&&a.date(a.date()+q*c);b&&a.month(a.month()+b*c);h&&!d&&e.updateOffset(a);(q||b)&&(a.minute(f),a.hour(g))}function K(a){return"[object Array]"===
Object.prototype.toString.call(a)}function Y(a,b,c){var d,f=Math.min(a.length,b.length),e=Math.abs(a.length-b.length),h=0;for(d=0;f>d;d++)(c&&a[d]!==b[d]||!c&&m(a[d])!==m(b[d]))&&h++;return h+e}function u(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=qa[a]||ra[b]||b}return a}function X(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=u(c),b&&(d[b]=a[c]));return d}function sa(a){var b,c;if(0===a.indexOf("week"))b=7,c="day";else{if(0!==a.indexOf("month"))return;b=12;c="month"}e[a]=function(d,
f){var g,h,q=e.fn._lang[a],l=[];if("number"==typeof d&&(f=d,d=C),h=function(a){a=e().utc().set(c,a);return q.call(e.fn._lang,a,d||"")},null!=f)return h(f);for(g=0;b>g;g++)l.push(h(g));return l}}function m(a){a=+a;var b=0;return 0!==a&&isFinite(a)&&(b=0<=a?Math.floor(a):Math.ceil(a)),b}function L(a){return 0===a%4&&0!==a%100||0===a%400}function W(a){var b;a._a&&-2===a._pf.overflow&&(b=0>a._a[y]||11<a._a[y]?y:1>a._a[v]||a._a[v]>(new Date(Date.UTC(a._a[s],a._a[y]+1,0))).getUTCDate()?v:0>a._a[r]||23<
a._a[r]?r:0>a._a[z]||59<a._a[z]?z:0>a._a[D]||59<a._a[D]?D:0>a._a[E]||999<a._a[E]?E:-1,a._pf._overflowDayOfYear&&(s>b||b>v)&&(b=v),a._pf.overflow=b)}function Z(a){a._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function $(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&0>a._pf.overflow&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,
a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function M(a){return a?a.toLowerCase().replace("_","-"):a}function t(a){var b,c,d,f,g=0,h=function(a){if(!A[a]&&aa)try{require("./lang/"+a)}catch(b){}return A[a]};if(!a)return e.fn._lang;if(!K(a)){if(c=h(a))return c;a=[a]}for(;g<a.length;){f=M(a[g]).split("-");b=f.length;for(d=(d=M(a[g+1]))?d.split("-"):null;0<b;){if(c=h(f.slice(0,b).join("-")))return c;if(d&&d.length>=b&&Y(f,d,!0)>=b-1)break;b--}g++}return e.fn._lang}
function ta(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function ua(a){var b,c,d=a.match(ba);b=0;for(c=d.length;c>b;b++)d[b]=w[d[b]]?w[d[b]]:ta(d[b]);return function(f){var e="";for(b=0;c>b;b++)e+=d[b]instanceof Function?d[b].call(f,a):d[b];return e}}function ca(a,b){return a.isValid()?(b=da(b,a.lang()),N[b]||(N[b]=ua(b)),N[b](a)):a.lang().invalidDate()}function da(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(F.lastIndex=0;0<=d&&F.test(a);)a=a.replace(F,
c),F.lastIndex=0,--d;return a}function va(a,b){switch(a){case "DDDD":return wa;case "YYYY":case "GGGG":case "gggg":return xa;case "YYYYY":case "GGGGG":case "ggggg":return ya;case "S":case "SS":case "SSS":case "DDD":return za;case "MMM":case "MMMM":case "dd":case "ddd":case "dddd":return Aa;case "a":case "A":return t(b._l)._meridiemParse;case "X":return Ba;case "Z":case "ZZ":return O;case "T":return Ca;case "SSSS":return Da;case "MM":case "DD":case "YY":case "GG":case "gg":case "HH":case "hh":case "mm":case "ss":case "M":case "D":case "d":case "H":case "h":case "m":case "s":case "w":case "ww":case "W":case "WW":case "e":case "E":return Ea;
default:var c=RegExp,d;d=Fa(a.replace("\\","")).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");return new c(d)}}function ea(a){a=((O.exec(a)||[])[0]+"").match(Ga)||["-",0,0];var b=+(60*a[1])+m(a[2]);return"+"===a[0]?-b:b}function P(a){var b,c,d,f,g,h,q,l,k,n=[];if(!a._d){c=Ha(a);a._w&&null==a._a[v]&&null==a._a[y]&&(f=function(b){return b?3>b.length?68<parseInt(b,10)?"19"+b:"20"+b:b:null==a._a[s]?e().weekYear():a._a[s]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=fa(f(g.GG),g.W||1,g.E,4,1):(q=t(a._l),l=null!=
g.d?ga(g.d,q):null!=g.e?parseInt(g.e,10)+q._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&l<q._week.dow&&k++,h=fa(f(g.gg),k,l,q._week.doy,q._week.dow)),a._a[s]=h.year,a._dayOfYear=h.dayOfYear);a._dayOfYear&&(d=null==a._a[s]?c[s]:a._a[s],a._dayOfYear>(L(d)?366:365)&&(a._pf._overflowDayOfYear=!0),b=ha(d,0,a._dayOfYear),a._a[y]=b.getUTCMonth(),a._a[v]=b.getUTCDate());for(b=0;3>b&&null==a._a[b];++b)a._a[b]=n[b]=c[b];for(;7>b;b++)a._a[b]=n[b]=null==a._a[b]?2===b?1:0:a._a[b];n[r]+=m((a._tzm||0)/60);n[z]+=
m((a._tzm||0)%60);a._d=(a._useUTC?ha:Ia).apply(null,n)}}function Ha(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function Q(a){a._a=[];a._pf.empty=!0;var b,c,d,f,e;b=t(a._l);var h=""+a._i,q=h.length,l=0;d=da(a._f,b).match(ba)||[];for(b=0;b<d.length;b++)if(f=d[b],(c=(va(f,a).exec(h)||[])[0])&&(e=h.substr(0,h.indexOf(c)),0<e.length&&a._pf.unusedInput.push(e),h=h.slice(h.indexOf(c)+c.length),l+=c.length),w[f]){c?a._pf.empty=
!1:a._pf.unusedTokens.push(f);var k=a,n=void 0,p=k._a;switch(f){case "M":case "MM":null!=c&&(p[y]=m(c)-1);break;case "MMM":case "MMMM":n=t(k._l).monthsParse(c);null!=n?p[y]=n:k._pf.invalidMonth=c;break;case "D":case "DD":null!=c&&(p[v]=m(c));break;case "DDD":case "DDDD":null!=c&&(k._dayOfYear=m(c));break;case "YY":p[s]=m(c)+(68<m(c)?1900:2E3);break;case "YYYY":case "YYYYY":p[s]=m(c);break;case "a":case "A":k._isPm=t(k._l).isPM(c);break;case "H":case "HH":case "h":case "hh":p[r]=m(c);break;case "m":case "mm":p[z]=
m(c);break;case "s":case "ss":p[D]=m(c);break;case "S":case "SS":case "SSS":case "SSSS":p[E]=m(1E3*("0."+c));break;case "X":k._d=new Date(1E3*parseFloat(c));break;case "Z":case "ZZ":k._useUTC=!0;k._tzm=ea(c);break;case "w":case "ww":case "W":case "WW":case "d":case "dd":case "ddd":case "dddd":case "e":case "E":f=f.substr(0,1);case "gg":case "gggg":case "GG":case "GGGG":case "GGGGG":f=f.substr(0,2),c&&(k._w=k._w||{},k._w[f]=c)}}else a._strict&&!c&&a._pf.unusedTokens.push(f);a._pf.charsLeftOver=q-l;
0<h.length&&a._pf.unusedInput.push(h);a._isPm&&12>a._a[r]&&(a._a[r]+=12);!1===a._isPm&&12===a._a[r]&&(a._a[r]=0);P(a);W(a)}function Fa(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,c,d,f,e){return c||d||f||e})}function Ia(a,b,c,d,f,e,h){b=new Date(a,b,c,d,f,e,h);return 1970>a&&b.setFullYear(a),b}function ha(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function ga(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=
typeof a)return null}else a=parseInt(a,10);return a}function Ja(a,b,c,d,f){return f.relativeTime(b||1,!!c,a,d)}function G(a,b,c){var d;b=c-b;c-=a.day();return c>b&&(c-=7),b-7>c&&(c+=7),d=e(a).add("d",c),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function fa(a,b,c,d,f){var e,h,k=(new Date(Date.UTC(a,0))).getUTCDay();return c=null!=c?c:f,e=f-k+(k>d?7:0),h=7*(b-1)+(c-f)+e+1,{year:0<h?a:a-1,dayOfYear:0<h?h:(L(a-1)?366:365)+h}}function ia(a){var b=a._i,c=a._f;"undefined"==typeof a._pf&&Z(a);if(null===
b)a=e.invalid({nullInput:!0});else{"string"==typeof b&&(a._i=b=t().preparse(b));if(e.isMoment(b))a=p({},b),a._d=new Date(+b._d);else if(c)if(K(c)){var d=a,f,g,h;if(0===d._f.length)d._pf.invalidFormat=!0,d._d=new Date(0/0);else{for(b=0;b<d._f.length;b++)c=0,f=p({},d),Z(f),f._f=d._f[b],Q(f),$(f)&&(c+=f._pf.charsLeftOver,c+=10*f._pf.unusedTokens.length,f._pf.score=c,(null==h||h>c)&&(h=c,g=f));p(d,g||f)}}else Q(a);else if(f=a,g=f._i,h=Ka.exec(g),g===C)f._d=new Date;else if(h)f._d=new Date(+h[1]);else if("string"==
typeof g)if(h=f._i,d=La.exec(h)){f._pf.iso=!0;for(g=4;0<g;g--)if(d[g]){f._f=Ma[g-1]+(d[6]||" ");break}for(g=0;4>g;g++)if(ja[g][1].exec(h)){f._f+=ja[g][0];break}O.exec(h)&&(f._f+="Z");Q(f)}else f._d=new Date(h);else K(g)?(f._a=g.slice(0),P(f)):"[object Date]"===Object.prototype.toString.call(g)||g instanceof Date?f._d=new Date(+g):"object"==typeof g?f._d||(d=X(f._i),f._a=[d.year,d.month,d.day,d.hour,d.minute,d.second,d.millisecond],P(f)):f._d=new Date(g);a=new H(a)}return a}function ka(a,b){e.fn[a]=
e.fn[a+"s"]=function(a){var d=this._isUTC?"UTC":"";return null!=a?(this._d["set"+d+b](a),e.updateOffset(this),this):this._d["get"+d+b]()}}function Na(a){e.duration.fn[a]=function(){return this._data[a]}}function la(a,b){e.duration.fn["as"+a]=function(){return+this/b}}function R(a){var b=!1,c=e;"undefined"==typeof ender&&(this.moment=a?function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),
c.apply(null,arguments)}:e)}for(var e,k,B=Math.round,s=0,y=1,v=2,r=3,z=4,D=5,E=6,A={},aa="undefined"!=typeof module&&module.exports,Ka=/^\/?Date\((\-?\d+)/i,Oa=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Pa=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,ba=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
F=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Ea=/\d\d?/,za=/\d{1,3}/,wa=/\d{3}/,xa=/\d{1,4}/,ya=/[+\-]?\d{1,6}/,Da=/\d+/,Aa=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,O=/Z|[\+\-]\d\d:?\d\d/i,Ca=/T/i,Ba=/[\+\-]?\d+(\.\d{1,3})?/,La=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/,Ma=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],ja=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Ga=/([\+\-]|\d\d)/gi,S=["Date","Hours","Minutes","Seconds","Milliseconds"],T={Milliseconds:1,Seconds:1E3,Minutes:6E4,Hours:36E5,Days:864E5,Months:2592E6,Years:31536E6},qa={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},ra={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",
weekyear:"weekYear",isoweekyear:"isoWeekYear"},N={},ma="DDD w W M D d".split(" "),na="MDHhmswW".split(""),w={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,
a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return n(this.year()%100,2)},YYYY:function(){return n(this.year(),4)},YYYYY:function(){return n(this.year(),5)},gg:function(){return n(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return n(this.weekYear(),5)},GG:function(){return n(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return n(this.isoWeekYear(),5)},e:function(){return this.weekday()},
E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return m(this.milliseconds()/100)},SS:function(){return n(m(this.milliseconds()/10),2)},SSS:function(){return n(this.milliseconds(),3)},SSSS:function(){return n(this.milliseconds(),
3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+n(m(a/60),2)+":"+n(m(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+n(m(10*a/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}},oa=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];ma.length;)k=ma.pop(),w[k+"o"]=pa(w[k],k);for(;na.length;)k=na.pop(),w[k+k]=U(w[k],2);w.DDDD=U(w.DDD,3);p(V.prototype,{set:function(a){var b,
c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January February March April May June July August September October November December".split(" "),months:function(a){return this._months[a.month()]},_monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;this._monthsParse||(this._monthsParse=[]);for(b=0;12>b;b++)if(this._monthsParse[b]||(c=e.utc([2E3,b]),d="^"+
this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su Mo Tu We Th Fr Sa".split(" "),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,
c,d;this._weekdaysParse||(this._weekdaysParse=[]);for(b=0;7>b;b++)if(this._weekdaysParse[b]||(c=e([2E3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&
(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return 11<a?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==
typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var f=this._relativeTime[c];return"function"==typeof f?f(a,b,c,d):f.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[0<a?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",
a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return G(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}});e=function(a,b,c,d){return"boolean"==typeof c&&(d=c,c=C),ia({_i:a,_f:b,_l:c,_strict:d,_isUTC:!1})};e.utc=function(a,b,c,d){return"boolean"==typeof c&&(d=c,c=C),ia({_useUTC:!0,_isUTC:!0,_l:c,_i:a,_f:b,_strict:d}).utc()};e.unix=function(a){return e(1E3*a)};
e.duration=function(a,b){var c,d,f,g=e.isDuration(a),h="number"==typeof a,k=g?a._input:h?{}:a,l=null;return h?b?k[b]=a:k.milliseconds=a:(l=Oa.exec(a))?(c="-"===l[1]?-1:1,k={y:0,d:m(l[v])*c,h:m(l[r])*c,m:m(l[z])*c,s:m(l[D])*c,ms:m(l[E])*c}):(l=Pa.exec(a))&&(c="-"===l[1]?-1:1,f=function(a){a=a&&parseFloat(a.replace(",","."));return(isNaN(a)?0:a)*c},k={y:f(l[2]),M:f(l[3]),d:f(l[4]),h:f(l[5]),m:f(l[6]),s:f(l[7]),w:f(l[8])}),d=new I(k),g&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d};e.version="2.4.0";
e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";e.updateOffset=function(){};e.lang=function(a,b){var c,d;a?(b?(d=M(a),b.abbr=d,A[d]||(A[d]=new V),A[d].set(b)):null===b?(delete A[a],a="en"):A[a]||t(a),d=(c=e.duration.fn._lang=e.fn._lang=t(a),c._abbr)):d=e.fn._lang._abbr;return d};e.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),t(a)};e.isMoment=function(a){return a instanceof H};e.isDuration=function(a){return a instanceof I};for(k=oa.length-1;0<=k;--k)sa(oa[k]);e.normalizeUnits=function(a){return u(a)};
e.invalid=function(a){var b=e.utc(0/0);return null!=a?p(b._pf,a):b._pf.userInvalidated=!0,b};e.parseZone=function(a){return e(a).parseZone()};p(e.fn=H.prototype,{clone:function(){return e(this)},valueOf:function(){return+this._d+6E4*(this._offset||0)},unix:function(){return Math.floor(+this/1E3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return ca(e(this).utc(),
"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){return[this.year(),this.month(),this.date(),this.hours(),this.minutes(),this.seconds(),this.milliseconds()]},isValid:function(){return $(this)},isDSTShifted:function(){return this._a?this.isValid()&&0<Y(this._a,(this._isUTC?e.utc(this._a):e(this._a)).toArray()):!1},parsingFlags:function(){return p({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},
format:function(a){a=ca(this,a||e.defaultFormat);return this.lang().postformat(a)},add:function(a,b){var c;return c="string"==typeof a?e.duration(+b,a):e.duration(a,b),J(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?e.duration(+b,a):e.duration(a,b),J(this,c,-1),this},diff:function(a,b,c){var d,f;a=this._isUTC?e(a).zone(this._offset||0):e(a).local();var g=6E4*(this.zone()-a.zone());return b=u(b),"year"===b||"month"===b?(d=432E5*(this.daysInMonth()+a.daysInMonth()),f=12*(this.year()-
a.year())+(this.month()-a.month()),f+=(this-e(this).startOf("month")-(a-e(a).startOf("month")))/d,f-=6E4*(this.zone()-e(this).startOf("month").zone()-(a.zone()-e(a).startOf("month").zone()))/d,"year"===b&&(f/=12)):(d=this-a,f="second"===b?d/1E3:"minute"===b?d/6E4:"hour"===b?d/36E5:"day"===b?(d-g)/864E5:"week"===b?(d-g)/6048E5:d),c?f:x(f)},from:function(a,b){return e.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(e(),a)},calendar:function(){var a=
this.diff(e().zone(this.zone()).startOf("day"),"days",!0),a=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(a,this))},isLeapYear:function(){return L(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=ga(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,
c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),e.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=u(a)){case "year":this.month(0);case "month":this.date(1);case "week":case "isoWeek":case "day":this.hours(0);case "hour":this.minutes(0);case "minute":this.seconds(0);case "second":this.milliseconds(0)}return"week"===
a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=u(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+e(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+e(a).startOf(b)},isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+e(a).startOf(b)},min:function(a){return a=
e.apply(null,arguments),this>a?this:a},max:function(a){return a=e.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=ea(a)),16>Math.abs(a)&&(a*=60),this._offset=a,this._isUTC=!0,b!==a&&J(this,e.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return"string"==typeof this._i&&
this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?e(a).zone():0,0===(this.zone()-a)%60},daysInMonth:function(){var a=this.year(),b=this.month();return(new Date(Date.UTC(a,b+1,0))).getUTCDate()},dayOfYear:function(a){var b=B((e(this).startOf("day")-e(this).startOf("year"))/864E5)+1;return null==a?b:this.add("d",a-b)},weekYear:function(a){var b=G(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=G(this,1,4).year;
return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=G(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=u(a),this[a]()},set:function(a,b){return a=u(a),"function"==typeof this[a]&&this[a](b),this},
lang:function(a){return a===C?this._lang:(this._lang=t(a),this)}});for(k=0;k<S.length;k++)ka(S[k].toLowerCase().replace(/s$/,""),S[k]);ka("year","FullYear");e.fn.days=e.fn.day;e.fn.months=e.fn.month;e.fn.weeks=e.fn.week;e.fn.isoWeeks=e.fn.isoWeek;e.fn.toJSON=e.fn.toISOString;p(e.duration.fn=I.prototype,{_bubble:function(){var a,b;a=this._milliseconds;b=this._days;var c=this._months,d=this._data;d.milliseconds=a%1E3;a=x(a/1E3);d.seconds=a%60;a=x(a/60);d.minutes=a%60;a=x(a/60);d.hours=a%24;b+=x(a/24);
d.days=b%30;c+=x(b/30);d.months=c%12;b=x(c/12);d.years=b},weeks:function(){return x(this.days()/7)},valueOf:function(){return this._milliseconds+864E5*this._days+this._months%12*2592E6+31536E6*m(this._months/12)},humanize:function(a){var b=+this,c;c=!a;var d=this.lang(),f=B(Math.abs(b)/1E3),e=B(f/60),h=B(e/60),k=B(h/24),l=B(k/365),f=45>f&&["s",f]||1===e&&["m"]||45>e&&["mm",e]||1===h&&["h"]||22>h&&["hh",h]||1===k&&["d"]||25>=k&&["dd",k]||45>=k&&["M"]||345>k&&["MM",B(k/30)]||1===l&&["y"]||["yy",l];
c=(f[2]=c,f[3]=0<b,f[4]=d,Ja.apply({},f));return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=e.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=e.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=u(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=u(a),this["as"+
a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:e.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),g=Math.abs(this.seconds()+this.milliseconds()/1E3);return this.asSeconds()?(0>this.asSeconds()?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||g?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(g?g+"S":""):"P0D"}});for(k in T)T.hasOwnProperty(k)&&(la(k,T[k]),Na(k.toLowerCase()));la("Weeks",
6048E5);e.duration.fn.asMonths=function(){return(+this-31536E6*this.years())/2592E6+12*this.years()};e.lang("en",{ordinal:function(a){var b=a%10,b=1===m(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+b}});aa?(module.exports=e,R(!0)):"function"==typeof define&&define.amd?define("moment",function(a,b,c){return!0!==c.config().noGlobal&&R(c.config().noGlobal===C),e}):R()}).call(this);