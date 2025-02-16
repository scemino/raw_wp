var h;h||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="undefined"!=typeof WorkerGlobalScope,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"renderer"!=process.type,da=Object.assign({},h),ea=[],fa="./this.program",ha=(a,b)=>{throw b;},k="",ia,ja;
if(ca){var fs=require("fs");require("path");k=__dirname+"/";ja=a=>{a=ka(a)?new URL(a):a;return fs.readFileSync(a)};ia=async a=>{a=ka(a)?new URL(a):a;return fs.readFileSync(a,void 0)};!h.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=h);ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?k=self.location.href:"undefined"!=typeof document&&document.currentScript&&(k=document.currentScript.src),k=k.startsWith("blob:")?
"":k.slice(0,k.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=async a=>{if(ka(a))return new Promise((c,d)=>{var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=()=>{200==e.status||0==e.status&&e.response?c(e.response):d(e.status)};e.onerror=d;e.send(null)});var b=await fetch(a,{credentials:"same-origin"});if(b.ok)return b.arrayBuffer();throw Error(b.status+
" : "+b.url);};var la=h.print||console.log.bind(console),m=h.printErr||console.error.bind(console);Object.assign(h,da);da=null;h.arguments&&(ea=h.arguments);h.thisProgram&&(fa=h.thisProgram);var ma=h.wasmBinary,na,q=!1,oa,r,t,pa,qa,u,v,x,y,ka=a=>a.startsWith("file://");
function ra(){var a=na.buffer;h.HEAP8=r=new Int8Array(a);h.HEAP16=pa=new Int16Array(a);h.HEAPU8=t=new Uint8Array(a);h.HEAPU16=qa=new Uint16Array(a);h.HEAP32=u=new Int32Array(a);h.HEAPU32=v=new Uint32Array(a);h.HEAPF32=x=new Float32Array(a);h.HEAPF64=y=new Float64Array(a);h.HEAP64=new BigInt64Array(a);h.HEAPU64=new BigUint64Array(a)}var z=0,A=null;function sa(a){h.onAbort?.(a);a="Aborted("+a+")";m(a);q=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var ta;
async function ua(a){if(!ma)try{var b=await ia(a);return new Uint8Array(b)}catch{}if(a==ta&&ma)a=new Uint8Array(ma);else if(ja)a=ja(a);else throw"both async and sync fetching of the wasm failed";return a}async function va(a,b){try{var c=await ua(a);return await WebAssembly.instantiate(c,b)}catch(d){m(`failed to asynchronously prepare wasm: ${d}`),sa(d)}}
async function wa(a){var b=ta;if(!ma&&"function"==typeof WebAssembly.instantiateStreaming&&!ka(b)&&!ca)try{var c=fetch(b,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(c,a)}catch(d){m(`wasm streaming compile failed: ${d}`),m("falling back to ArrayBuffer instantiation")}return va(b,a)}class xa{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var ya=a=>{for(;0<a.length;)a.shift()(h)},za=[],Aa=[],Ba=()=>{var a=h.preRun.shift();Aa.unshift(a)},Ca=h.noExitRuntime||!0,Da="undefined"!=typeof TextDecoder?new TextDecoder:void 0,B=(a,b=0,c=NaN)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Da)return Da.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):
(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},Ea=0,Fa=[0,31,60,91,121,152,182,213,244,274,305,335],Ga=[0,31,59,90,120,151,181,212,243,273,304,334],C={},Ha=a=>{a instanceof xa||"unwind"==a||ha(1,a)},Ia=a=>{oa=a;Ca||0<Ea||(h.onExit?.(a),q=!0);ha(a,new xa(a))},Ja=a=>{oa=a;Ia(a)},Ka=()=>{if(!(Ca||0<Ea))try{var a=oa;oa=a;Ia(a)}catch(b){Ha(b)}},La=a=>{if(!q)try{a(),Ka()}catch(b){Ha(b)}},D=(a,b,c)=>{var d=t;if(!(0<c))return 0;var e=b;c=b+c-1;for(var g=
0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},Sa=(a,b)=>{Ma=a;Na=b;if(E)if(Oa||=!0,0==a)F=function(){setTimeout(H,Math.max(0,Pa+b-performance.now())|0)};else if(1==a)F=function(){Qa(H)};
else if(2==a){if("undefined"==typeof Ra)if("undefined"==typeof setImmediate){var c=[];addEventListener("message",d=>{if("setimmediate"===d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Ra=d=>{c.push(d);if(ba){let e;(e=h).setImmediates??(e.setImmediates=[]);h.setImmediates.push(d);postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Ra=setImmediate;F=function(){Ra(H)}}},ab=(a,b,c,d,e)=>{function g(){return f<Ta?(Ka(),!1):!0}E=a;Ua=d;var f=Ta;Oa=
!1;H=function(){if(!q)if(0<Va.length){var l=Va.shift();l.Td(l.Id);if(Wa){var n=Wa,p=0==n%1?n-1:Math.floor(n);Wa=l.Kd?p:(8*n+(p+.5))/9}h.setStatus&&(l=h.statusMessage||"Please wait...",n=Wa??0,p=Xa.Pd??0,n?n<p?h.setStatus("{message} ({expected - remaining}/{expected})"):h.setStatus(l):h.setStatus(""));g()&&setTimeout(H,0)}else if(g())if(Ya=Ya+1|0,1==Ma&&1<Na&&0!=Ya%Na)F();else{0==Ma&&(Pa=performance.now());a:if(!q){for(l of Za)if(!1===l())break a;La(a);for(n of $a)n()}g()&&F()}};e||(0<b?Sa(0,1E3/b):
Sa(1,1),F());if(c)throw"unwind";},Oa=!1,F=null,Ta=0,E=null,Ua=0,Ma=0,Na=0,Ya=0,Va=[],Za=[],$a=[];function bb(){F=null;Ta++}var cb=0;function Qa(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===cb)cb=b+1E3/60;else for(;b+2>=cb;)cb+=1E3/60;setTimeout(a,Math.max(cb-b,0))}}var Xa={},Pa,H,Ra,Wa;function db(a){var b=I.Jc[a];b.target.removeEventListener(b.Ic,b.pd,b.Kc);I.Jc.splice(a,1)}
function eb(){if(navigator.userActivation?navigator.userActivation.isActive:I.Zc&&I.Dd.Xc){var a=I.Qc;I.Qc=[];for(var b of a)b.bd(...b.ld)}}function J(a){if(!a.target)return-4;if(a.Lc)a.pd=function(c){++I.Zc;I.Dd=a;eb();a.Mc(c);eb();--I.Zc},a.target.addEventListener(a.Ic,a.pd,a.Kc),I.Jc.push(a);else for(var b=0;b<I.Jc.length;++b)I.Jc[b].target==a.target&&I.Jc[b].Ic==a.Ic&&db(b--);return 0}function fb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var I={Jd:0,Ud:0,$c:0,Wc:0,gd:0,dd:0,Yc:0,Nd:0,Zd:0,Md:0,Sd:0,ad:0,ge:0,cd:0,Wd(a,b,c){r.set(r.subarray(b,b+c),a)},ae(){for(;I.Jc.length;)db(I.Jc.length-1);I.Qc=[]},Zc:0,Qc:[],Ld(a,b,c){function d(g,f){if(g.length!=f.length)return!1;for(var l in g)if(g[l]!=f[l])return!1;return!0}for(var e of I.Qc)if(e.bd==a&&d(e.ld,c))return;I.Qc.push({bd:a,td:b,ld:c});I.Qc.sort((g,f)=>g.td<f.td)},ce(a){I.Qc=I.Qc.filter(b=>b.bd!=a)},Jc:[],be:(a,b)=>{for(var c=0;c<I.Jc.length;++c)I.Jc[c].target!=a||b&&b!=I.Jc[c].Ic||
db(c--)},fullscreenEnabled(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}},gb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],K=a=>{a=2<a?a?B(t,a):"":a;return gb[a]||("undefined"!=typeof document?document.querySelector(a):null)},hb=a=>0>gb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},ib=[],jb,L=a=>{var b=ib[a];b||(a>=ib.length&&(ib.length=a+1),ib[a]=b=jb.get(a));return b},kb=(a,b,c,d,e,g)=>{I.Yc||(I.Yc=M(256));a={target:K(a),Ic:g,Lc:d,
Mc:(f=event)=>{var l=f.target.id?f.target.id:"",n=I.Yc;D(fb(f.target),n+0,128);D(l,n+128,128);L(d)(e,n,b)&&f.preventDefault()},Kc:c};return J(a)},lb=(a,b,c,d,e,g)=>{I.$c||(I.$c=M(160));a={target:K(a),Ic:g,Lc:d,Mc:f=>{var l=I.$c;y[l>>3]=f.timeStamp;var n=l>>2;u[n+2]=f.location;r[l+12]=f.ctrlKey;r[l+13]=f.shiftKey;r[l+14]=f.altKey;r[l+15]=f.metaKey;r[l+16]=f.repeat;u[n+5]=f.charCode;u[n+6]=f.keyCode;u[n+7]=f.which;D(f.key||"",l+32,32);D(f.code||"",l+64,32);D(f.char||"",l+96,32);D(f.locale||"",l+128,
32);L(d)(e,l,b)&&f.preventDefault()},Kc:c};return J(a)},mb=(a,b,c)=>{y[a>>3]=b.timeStamp;var d=a>>2;u[d+2]=b.screenX;u[d+3]=b.screenY;u[d+4]=b.clientX;u[d+5]=b.clientY;r[a+24]=b.ctrlKey;r[a+25]=b.shiftKey;r[a+26]=b.altKey;r[a+27]=b.metaKey;pa[2*d+14]=b.button;pa[2*d+15]=b.buttons;u[d+8]=b.movementX;u[d+9]=b.movementY;a=hb(c);u[d+10]=b.clientX-(a.left|0);u[d+11]=b.clientY-(a.top|0)},nb=(a,b,c,d,e,g)=>{I.Wc||(I.Wc=M(64));a=K(a);return J({target:a,Xc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,
Ic:g,Lc:d,Mc:(f=event)=>{mb(I.Wc,f,a);L(d)(e,I.Wc,b)&&f.preventDefault()},Kc:c})},ob=(a,b,c,d,e)=>{I.ad||(I.ad=M(257));return J({target:a,Ic:e,Lc:d,Mc:(g=event)=>{var f=I.ad,l=document.pointerLockElement||document.Rc||document.kd||document.jd;r[f]=!!l;var n=l?.id||"";D(fb(l),f+1,128);D(n,f+129,128);L(d)(20,f,b)&&g.preventDefault()},Kc:c})},pb=(a,b,c,d,e)=>J({target:a,Ic:e,Lc:d,Mc:(g=event)=>{L(d)(38,0,b)&&g.preventDefault()},Kc:c}),qb=(a,b,c,d)=>{I.dd||(I.dd=M(36));a=K(a);return J({target:a,Ic:"resize",
Lc:d,Mc:(e=event)=>{if(e.target==a){var g=document.body;if(g){var f=I.dd;u[f>>2]=0;u[f+4>>2]=g.clientWidth;u[f+8>>2]=g.clientHeight;u[f+12>>2]=innerWidth;u[f+16>>2]=innerHeight;u[f+20>>2]=outerWidth;u[f+24>>2]=outerHeight;u[f+28>>2]=pageXOffset|0;u[f+32>>2]=pageYOffset|0;L(d)(10,f,b)&&e.preventDefault()}}},Kc:c})},rb=(a,b,c,d,e,g)=>{I.cd||(I.cd=M(1552));a=K(a);return J({target:a,Xc:"touchstart"==g||"touchend"==g,Ic:g,Lc:d,Mc:f=>{var l={},n=f.touches;for(var p of n)p.qd=p.sd=0,l[p.identifier]=p;for(var w of f.changedTouches)w.qd=
1,l[w.identifier]=w;for(var Q of f.targetTouches)l[Q.identifier].sd=1;n=I.cd;y[n>>3]=f.timeStamp;r[n+12]=f.ctrlKey;r[n+13]=f.shiftKey;r[n+14]=f.altKey;r[n+15]=f.metaKey;p=n+16;w=hb(a);Q=0;for(let G of Object.values(l))if(l=p>>2,u[l]=G.identifier,u[l+1]=G.screenX,u[l+2]=G.screenY,u[l+3]=G.clientX,u[l+4]=G.clientY,u[l+5]=G.pageX,u[l+6]=G.pageY,r[p+28]=G.qd,r[p+29]=G.sd,u[l+8]=G.clientX-(w.left|0),u[l+9]=G.clientY-(w.top|0),p+=48,31<++Q)break;u[n+8>>2]=Q;L(d)(e,n,b)&&f.preventDefault()},Kc:c})},N,sb=
a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,g)=>b.drawArraysInstancedANGLE(c,d,e,g),a.drawElementsInstanced=(c,d,e,g,f)=>b.drawElementsInstancedANGLE(c,d,e,g,f))},tb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},
ub=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},vb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},wb=1,xb=[],O=[],yb=[],zb=[],P=[],R=[],Ab=[],Bb=[],S=[],Cb={},Db=4,Eb=0,Fb=a=>{for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b},U=(a,b,c,d)=>{for(var e=0;e<a;e++){var g=N[c](),f=g&&Fb(d);g?(g.name=f,d[f]=g):T||=1282;u[b+4*e>>2]=f}},Hb=(a,b)=>{a.Rc||(a.Rc=a.getContext,a.getContext=function(d,e){e=a.Rc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.rd?a.getContext("webgl2",b):a.getContext("webgl",b);return c?
Gb(c,b):0},Gb=(a,b)=>{var c=Fb(Bb),d={handle:c,attributes:b,version:b.rd,hd:a};a.canvas&&(a.canvas.Hd=d);Bb[c]=d;("undefined"==typeof b.od||b.od)&&Ib(d);return c},Ib=a=>{a||=V;if(!a.Gd){a.Gd=!0;var b=a.hd;b.Yd=b.getExtension("WEBGL_multi_draw");b.Rd=b.getExtension("EXT_polygon_offset_clamp");b.Qd=b.getExtension("EXT_clip_control");b.he=b.getExtension("WEBGL_polygon_mode");sb(b);tb(b);ub(b);b.Od=b.getExtension("WEBGL_draw_instanced_base_vertex_base_instance");b.Vd=b.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance");
2<=a.version&&(b.nd=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.nd)b.nd=b.getExtension("EXT_disjoint_timer_query");vb(b).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}},T,V,Jb=(a,b,c,d,e,g)=>{a={target:K(a),Ic:g,Lc:d,Mc:(f=event)=>{L(d)(e,0,b)&&f.preventDefault()},Kc:c};J(a)},Kb=(a,b,c,d)=>{I.gd||(I.gd=M(96));return J({target:a,Xc:!0,Ic:"wheel",Lc:d,Mc:(e=event)=>{var g=I.gd;mb(g,e,a);y[g+64>>3]=e.deltaX;y[g+72>>3]=e.deltaY;y[g+80>>3]=e.deltaZ;
u[g+88>>2]=e.deltaMode;L(d)(9,g,b)&&e.preventDefault()},Kc:c})},Lb=["default","low-power","high-performance"],Mb={},Ob=()=>{if(!Nb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:fa||"./this.program"},b;for(b in Mb)void 0===Mb[b]?delete a[b]:a[b]=Mb[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);Nb=c}return Nb},Nb,Pb=[null,[],[]],Qb=[],Rb=()=>{var a=vb(N);
return a=a.concat(a.map(b=>"GL_"+b))},Sb=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=N.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){T||=1282;return}c=Rb().length;break;case 33307:case 33308:if(2>V.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=N.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)u[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:T||=1280;m(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}u[b>>2]=c}else T||=1281},Tb=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},Ub=a=>{var b=Tb(a)+1,c=M(b);c&&D(a,c,b);return c},Vb=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),Wb=a=>{a-=5120;return 0==a?r:1==a?t:2==a?pa:4==a?u:6==a?x:5==a||28922==a||28520==a||30779==a||30782==a?v:qa},Xb=(a,b,c,d,e)=>{a=Wb(a);b=d*((Eb||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+Db-1&-Db);return a.subarray(e>>>31-Math.clz32(a.BYTES_PER_ELEMENT),
e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},W=a=>{var b=N.Ed;if(b){var c=b.Sc[a];"number"==typeof c&&(b.Sc[a]=c=N.getUniformLocation(b,b.Bd[a]+(0<c?`[${c}]`:"")));return c}T||=1282},X=[],Yb=[],$b=a=>{var b=Tb(a)+1,c=Zb(b);D(a,c,b);return c},cc=a=>{var b=ac();a();bc(b)};h.requestAnimationFrame=Qa;h.pauseMainLoop=bb;h.resumeMainLoop=function(){Ta++;var a=Ma,b=Na,c=E;E=null;ab(c,0,!1,Ua,!0);Sa(a,b);F()};h.preMainLoop&&Za.push(h.preMainLoop);h.postMainLoop&&$a.push(h.postMainLoop);for(var Y=0;32>Y;++Y)Qb.push(Array(Y));
var dc=new Float32Array(288);for(Y=0;288>=Y;++Y)X[Y]=dc.subarray(0,Y);var ec=new Int32Array(288);for(Y=0;288>=Y;++Y)Yb[Y]=ec.subarray(0,Y);
var sc={ja:function(){return 0},pb:function(){return 0},rb:function(){},vb:()=>sa(""),gb:()=>{Ca=!1;Ea=0},kb:function(a){var b=new Date(u[a+20>>2]+1900,u[a+16>>2],u[a+12>>2],u[a+8>>2],u[a+4>>2],u[a>>2],0),c=u[a+32>>2],d=b.getTimezoneOffset(),e=(new Date(b.getFullYear(),6,1)).getTimezoneOffset(),g=(new Date(b.getFullYear(),0,1)).getTimezoneOffset(),f=Math.min(g,e);0>c?u[a+32>>2]=Number(e!=g&&f==d):0<c!=(f==d)&&(e=Math.max(g,e),b.setTime(b.getTime()+6E4*((0<c?f:e)-d)));u[a+24>>2]=b.getDay();c=b.getFullYear();
u[a+28>>2]=(0!==c%4||0===c%100&&0!==c%400?Ga:Fa)[b.getMonth()]+b.getDate()-1|0;u[a>>2]=b.getSeconds();u[a+4>>2]=b.getMinutes();u[a+8>>2]=b.getHours();u[a+12>>2]=b.getDate();u[a+16>>2]=b.getMonth();u[a+20>>2]=b.getYear();a=b.getTime();return BigInt(isNaN(a)?-1:a/1E3)},ib:(a,b)=>{C[a]&&(clearTimeout(C[a].id),delete C[a]);if(!b)return 0;var c=setTimeout(()=>{delete C[a];La(()=>fc(a,performance.now()))},b);C[a]={id:c,fe:b};return 0},lb:(a,b,c,d)=>{var e=(new Date).getFullYear(),g=(new Date(e,0,1)).getTimezoneOffset();
e=(new Date(e,6,1)).getTimezoneOffset();v[a>>2]=60*Math.max(g,e);u[b>>2]=Number(g!=e);b=f=>{var l=Math.abs(f);return`UTC${0<=f?"-":"+"}${String(Math.floor(l/60)).padStart(2,"0")}${String(l%60).padStart(2,"0")}`};a=b(g);b=b(e);e<g?(D(a,c,17),D(b,d,17)):(D(a,d,17),D(b,c,17))},db:function(a){if(void 0===window.localStorage)return 0;a=a?B(t,a):"";return(a=window.localStorage.getItem(a))?Ub(a):0},ic:function(a,b){void 0!==window.localStorage&&(a=a?B(t,a):"",b=b?B(t,b):"",window.localStorage.setItem(a,
b))},Ta:()=>{bb();E=null},ub:()=>Date.now(),ca:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,ea:(a,b,c)=>{a=K(a);if(!a)return-4;a=hb(a);y[b>>3]=a.width;y[c>>3]=a.height;return 0},Ua:()=>performance.now(),Za:(a,b)=>{function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},jb:a=>{var b=t.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);a:{d=(Math.min(2147483648,65536*Math.ceil(Math.max(a,d)/65536))-na.buffer.byteLength+
65535)/65536|0;try{na.grow(d);ra();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},M:(a,b,c,d)=>kb(a,b,c,d,12,"blur"),ba:(a,b,c)=>{a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},N:(a,b,c,d)=>kb(a,b,c,d,13,"focus"),W:(a,b,c,d)=>lb(a,b,c,d,2,"keydown"),U:(a,b,c,d)=>lb(a,b,c,d,1,"keypress"),V:(a,b,c,d)=>lb(a,b,c,d,3,"keyup"),_a:(a,b,c)=>{a=L(a);ab(a,b,c)},aa:(a,b,c,d)=>nb(a,b,c,d,5,"mousedown"),Z:(a,b,c,d)=>nb(a,b,c,d,33,"mouseenter"),Y:(a,b,c,d)=>nb(a,b,c,d,34,"mouseleave"),_:(a,b,
c,d)=>nb(a,b,c,d,8,"mousemove"),$:(a,b,c,d)=>nb(a,b,c,d,6,"mouseup"),P:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Rc||document.body.kd||document.body.jd))return-1;a=K(a);if(!a)return-4;ob(a,b,c,d,"mozpointerlockchange");ob(a,b,c,d,"webkitpointerlockchange");ob(a,b,c,d,"mspointerlockchange");return ob(a,b,c,d,"pointerlockchange")},O:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.Rc||document.body.kd||document.body.jd))return-1;
a=K(a);if(!a)return-4;pb(a,b,c,d,"mozpointerlockerror");pb(a,b,c,d,"webkitpointerlockerror");pb(a,b,c,d,"mspointerlockerror");return pb(a,b,c,d,"pointerlockerror")},da:(a,b,c,d)=>qb(a,b,c,d),Q:(a,b,c,d)=>rb(a,b,c,d,25,"touchcancel"),R:(a,b,c,d)=>rb(a,b,c,d,23,"touchend"),S:(a,b,c,d)=>rb(a,b,c,d,24,"touchmove"),T:(a,b,c,d)=>rb(a,b,c,d,22,"touchstart"),L:(a,b,c,d)=>{Jb(a,b,c,d,31,"webglcontextlost");return 0},K:(a,b,c,d)=>{Jb(a,b,c,d,32,"webglcontextrestored");return 0},X:(a,b,c,d)=>(a=K(a))?"undefined"!=
typeof a.onwheel?Kb(a,b,c,d):-1:-4,Ya:(a,b)=>{var c=b>>2;b={alpha:!!r[b+0],depth:!!r[b+1],stencil:!!r[b+2],antialias:!!r[b+3],premultipliedAlpha:!!r[b+4],preserveDrawingBuffer:!!r[b+5],powerPreference:Lb[u[c+2]],failIfMajorPerformanceCaveat:!!r[b+12],rd:u[c+4],Xd:u[c+5],od:r[b+24],Fd:r[b+25],$d:u[c+7],de:r[b+32]};a=K(a);return!a||b.Fd?0:Hb(a,b)},Xa:a=>{V=Bb[a];h.ctx=N=V?.hd;return!a||N?0:-5},sb:(a,b)=>{var c=0;Ob().forEach((d,e)=>{var g=b+c;e=v[a+4*e>>2]=g;for(g=0;g<d.length;++g)r[e++]=d.charCodeAt(g);
r[e]=0;c+=d.length+1});return 0},tb:(a,b)=>{var c=Ob();v[a>>2]=c.length;var d=0;c.forEach(e=>d+=e.length+1);v[b>>2]=d;return 0},jc:Ja,ia:()=>52,ob:()=>52,mb:function(){return 70},nb:(a,b,c,d)=>{for(var e=0,g=0;g<c;g++){var f=v[b>>2],l=v[b+4>>2];b+=8;for(var n=0;n<l;n++){var p=t[f+n],w=Pb[a];0===p||10===p?((1===a?la:m)(B(w)),w.length=0):w.push(p)}e+=l}v[d>>2]=e;return 0},$a:function(a,b,c,d){const e=a?B(t,a):"";console.log("fs_js_save_snapshot: called with",e,b);let g;try{g=window.indexedDB.open("chips",
1)}catch(f){console.log("fs_js_save_snapshot: failed to open IndexedDB with "+f);return}g.onupgradeneeded=()=>{console.log("fs_js_save_snapshot: creating db");g.result.createObjectStore("store")};g.onsuccess=()=>{console.log("fs_js_save_snapshot: onsuccess");const f=g.result.transaction(["store"],"readwrite");var l=f.objectStore("store");const n=e+"_"+b;l=l.put(t.subarray(c,c+d),n);l.onsuccess=()=>{console.log("fs_js_save_snapshot:",n,"successfully stored")};l.onerror=()=>{console.log("fs_js_save_snapshot: FAILED to store",
n)};f.onerror=()=>{console.log("fs_js_save_snapshot: transaction onerror")}};g.onerror=()=>{console.log("fs_js_save_snapshot: open_request onerror")}},p:a=>N.activeTexture(a),va:(a,b)=>{N.attachShader(O[a],R[b])},b:(a,b)=>{35051==a?N.md=b:35052==a&&(N.Pc=b);N.bindBuffer(a,xb[b])},a:(a,b,c)=>{N.bindBufferBase(a,b,xb[c])},l:(a,b)=>{N.bindFramebuffer(a,yb[b])},Ea:(a,b)=>{N.bindRenderbuffer(a,zb[b])},o:(a,b)=>{N.bindSampler(a,S[b])},d:(a,b)=>{N.bindTexture(a,P[b])},J:a=>{N.bindVertexArray(Ab[a])},F:(a,
b,c,d)=>N.blendColor(a,b,c,d),G:(a,b)=>N.blendEquationSeparate(a,b),H:(a,b,c,d)=>N.blendFuncSeparate(a,b,c,d),zb:(a,b,c,d,e,g,f,l,n,p)=>N.blitFramebuffer(a,b,c,d,e,g,f,l,n,p),Ha:(a,b,c,d)=>{2<=V.version?c&&b?N.bufferData(a,t,d,c,b):N.bufferData(a,b,d):N.bufferData(a,c?t.subarray(c,c+b):b,d)},z:(a,b,c,d)=>{2<=V.version?c&&N.bufferSubData(a,b,t,d,c):N.bufferSubData(a,b,t.subarray(d,d+c))},pa:a=>N.checkFramebufferStatus(a),Ub:(a,b,c,d)=>N.clearBufferfi(a,b,c,d),na:(a,b,c)=>{N.clearBufferfv(a,b,x,c>>
2)},Sb:(a,b,c)=>{N.clearBufferiv(a,b,u,c>>2)},q:(a,b,c,d)=>{N.colorMask(!!a,!!b,!!c,!!d)},Yb:a=>{N.compileShader(R[a])},ya:(a,b,c,d,e,g,f,l)=>{2<=V.version?N.Pc||!f?N.compressedTexImage2D(a,b,c,d,e,g,f,l):N.compressedTexImage2D(a,b,c,d,e,g,t,l,f):N.compressedTexImage2D(a,b,c,d,e,g,t.subarray(l,l+f))},gc:(a,b,c,d,e,g,f,l,n)=>{N.Pc?N.compressedTexImage3D(a,b,c,d,e,g,f,l,n):N.compressedTexImage3D(a,b,c,d,e,g,f,t,n,l)},dc:()=>{var a=Fb(O),b=N.createProgram();b.name=a;b.Vc=b.Tc=b.Uc=0;b.ed=1;O[a]=b;return a},
_b:a=>{var b=Fb(R);R[b]=N.createShader(a);return b},C:a=>N.cullFace(a),Ka:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=xb[d];e&&(N.deleteBuffer(e),e.name=0,xb[d]=null,d==N.md&&(N.md=0),d==N.Pc&&(N.Pc=0))}},f:(a,b)=>{for(var c=0;c<a;++c){var d=u[b+4*c>>2],e=yb[d];e&&(N.deleteFramebuffer(e),e.name=0,yb[d]=null)}},n:a=>{if(a){var b=O[a];b?(N.deleteProgram(b),b.name=0,O[a]=null):T||=1281}},A:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=zb[d];e&&(N.deleteRenderbuffer(e),e.name=0,zb[d]=null)}},
g:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=S[d];e&&(N.deleteSampler(e),e.name=0,S[d]=null)}},y:a=>{if(a){var b=R[a];b?(N.deleteShader(b),R[a]=null):T||=1281}},B:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=P[d];e&&(N.deleteTexture(e),e.name=0,P[d]=null)}},Ja:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2];N.deleteVertexArray(Ab[d]);Ab[d]=null}},u:a=>N.depthFunc(a),t:a=>{N.depthMask(!!a)},e:a=>N.disable(a),I:a=>{N.disableVertexAttribArray(a)},Cb:(a,b,c)=>{N.drawArrays(a,b,c)},Db:(a,b,c,
d)=>{N.drawArraysInstanced(a,b,c,d)},oa:(a,b)=>{for(var c=Qb[a],d=0;d<a;d++)c[d]=u[b+4*d>>2];N.drawBuffers(c)},Eb:(a,b,c,d)=>{N.drawElements(a,b,c,d)},Fb:(a,b,c,d,e)=>{N.drawElementsInstanced(a,b,c,d,e)},i:a=>N.enable(a),Pb:a=>{N.enableVertexAttribArray(a)},qa:(a,b,c,d)=>{N.framebufferRenderbuffer(a,b,c,zb[d])},m:(a,b,c,d,e)=>{N.framebufferTexture2D(a,b,c,P[d],e)},x:(a,b,c,d,e)=>{N.framebufferTextureLayer(a,b,P[c],d,e)},D:a=>N.frontFace(a),Ia:(a,b)=>{U(a,b,"createBuffer",xb)},ra:(a,b)=>{U(a,b,"createFramebuffer",
yb)},Fa:(a,b)=>{U(a,b,"createRenderbuffer",zb)},ec:(a,b)=>{U(a,b,"createSampler",S)},Ca:(a,b)=>{U(a,b,"createTexture",P)},Sa:(a,b)=>{U(a,b,"createVertexArray",Ab)},Wb:(a,b)=>N.getAttribLocation(O[a],b?B(t,b):""),c:(a,b)=>Sb(a,b),ac:(a,b,c,d)=>{a=N.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,d,b):0;c&&(u[c>>2]=b)},ua:(a,b,c)=>{if(c)if(a>=wb)T||=1281;else if(a=O[a],35716==b)a=N.getProgramInfoLog(a),null===a&&(a="(unknown error)"),u[c>>2]=a.length+1;else if(35719==b){if(!a.Vc){var d=
N.getProgramParameter(a,35718);for(b=0;b<d;++b)a.Vc=Math.max(a.Vc,N.getActiveUniform(a,b).name.length+1)}u[c>>2]=a.Vc}else if(35722==b){if(!a.Tc)for(d=N.getProgramParameter(a,35721),b=0;b<d;++b)a.Tc=Math.max(a.Tc,N.getActiveAttrib(a,b).name.length+1);u[c>>2]=a.Tc}else if(35381==b){if(!a.Uc)for(d=N.getProgramParameter(a,35382),b=0;b<d;++b)a.Uc=Math.max(a.Uc,N.getActiveUniformBlockName(a,b).length+1);u[c>>2]=a.Uc}else u[c>>2]=N.getProgramParameter(a,b);else T||=1281},Xb:(a,b,c,d)=>{a=N.getShaderInfoLog(R[a]);
null===a&&(a="(unknown error)");b=0<b&&d?D(a,d,b):0;c&&(u[c>>2]=b)},sa:(a,b,c)=>{c?35716==b?(a=N.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),u[c>>2]=a?a.length+1:0):35720==b?(a=N.getShaderSource(R[a]),u[c>>2]=a?a.length+1:0):u[c>>2]=N.getShaderParameter(R[a],b):T||=1281},Qa:(a,b)=>{if(2>V.version)return T||=1282,0;var c=Cb[a];if(c)return 0>b||b>=c.length?(T||=1281,0):c[b];switch(a){case 7939:return c=Rb().map(Ub),c=Cb[a]=c,0>b||b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},
ta:(a,b)=>{b=b?B(t,b):"";if(a=O[a]){var c=a,d=c.Sc,e=c.Cd,g;if(!d){c.Sc=d={};c.Bd={};var f=N.getProgramParameter(c,35718);for(g=0;g<f;++g){var l=N.getActiveUniform(c,g);var n=l.name;l=l.size;var p=Vb(n);p=0<p?n.slice(0,p):n;var w=c.ed;c.ed+=l;e[p]=[l,w];for(n=0;n<l;++n)d[w]=n,c.Bd[w++]=p}}c=a.Sc;d=0;e=b;g=Vb(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.Cd[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||N.getUniformLocation(a,b)))return d}else T||=1281;return-1},yb:(a,b,c)=>{for(var d=Qb[b],e=0;e<
b;e++)d[e]=u[c+4*e>>2];N.invalidateFramebuffer(a,d)},cc:a=>{a=O[a];N.linkProgram(a);a.Sc=0;a.Cd={}},Ra:(a,b)=>{3317==a?Db=b:3314==a&&(Eb=b);N.pixelStorei(a,b)},E:(a,b)=>N.polygonOffset(a,b),Bb:a=>N.readBuffer(a),Da:(a,b,c,d,e)=>N.renderbufferStorageMultisample(a,b,c,d,e),wa:(a,b,c)=>{N.samplerParameterf(S[a],b,c)},h:(a,b,c)=>{N.samplerParameteri(S[a],b,c)},r:(a,b,c,d)=>N.scissor(a,b,c,d),Zb:(a,b,c,d)=>{for(var e="",g=0;g<b;++g){var f=(f=v[c+4*g>>2])?B(t,f,d?v[d+4*g>>2]:void 0):"";e+=f}N.shaderSource(R[a],
e)},Oa:(a,b,c)=>N.stencilFunc(a,b,c),ma:(a,b,c,d)=>N.stencilFuncSeparate(a,b,c,d),s:a=>N.stencilMask(a),Na:(a,b,c)=>N.stencilOp(a,b,c),la:(a,b,c,d)=>N.stencilOpSeparate(a,b,c,d),xa:(a,b,c,d,e,g,f,l,n)=>{if(2<=V.version){if(N.Pc){N.texImage2D(a,b,c,d,e,g,f,l,n);return}if(n){var p=Wb(l);n>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);N.texImage2D(a,b,c,d,e,g,f,l,p,n);return}}p=n?Xb(l,f,d,e,n):null;N.texImage2D(a,b,c,d,e,g,f,l,p)},fc:(a,b,c,d,e,g,f,l,n,p)=>{if(N.Pc)N.texImage3D(a,b,c,d,e,g,f,l,n,p);else if(p){var w=
Wb(n);N.texImage3D(a,b,c,d,e,g,f,l,n,w,p>>>31-Math.clz32(w.BYTES_PER_ELEMENT))}else N.texImage3D(a,b,c,d,e,g,f,l,n,null)},Ba:(a,b,c)=>N.texParameteri(a,b,c),Aa:(a,b,c,d,e)=>N.texStorage2D(a,b,c,d,e),za:(a,b,c,d,e,g)=>N.texStorage3D(a,b,c,d,e,g),xb:(a,b,c,d,e,g,f,l,n)=>{if(2<=V.version){if(N.Pc){N.texSubImage2D(a,b,c,d,e,g,f,l,n);return}if(n){var p=Wb(l);N.texSubImage2D(a,b,c,d,e,g,f,l,p,n>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}}n=n?Xb(l,f,e,g,n):null;N.texSubImage2D(a,b,c,d,e,g,f,l,n)},wb:(a,
b,c,d,e,g,f,l,n,p,w)=>{if(N.Pc)N.texSubImage3D(a,b,c,d,e,g,f,l,n,p,w);else if(w){var Q=Wb(p);N.texSubImage3D(a,b,c,d,e,g,f,l,n,p,Q,w>>>31-Math.clz32(Q.BYTES_PER_ELEMENT))}else N.texSubImage3D(a,b,c,d,e,g,f,l,n,p,null)},Ob:(a,b,c)=>{if(2<=V.version)b&&N.uniform1fv(W(a),x,c>>2,b);else{if(288>=b)for(var d=X[b],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);N.uniform1fv(W(a),d)}},$b:(a,b)=>{N.uniform1i(W(a),b)},Kb:(a,b,c)=>{if(2<=V.version)b&&N.uniform1iv(W(a),u,c>>2,b);else{if(288>=b)for(var d=
Yb[b],e=0;e<b;++e)d[e]=u[c+4*e>>2];else d=u.subarray(c>>2,c+4*b>>2);N.uniform1iv(W(a),d)}},Nb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2fv(W(a),x,c>>2,2*b);else{if(144>=b){b*=2;for(var d=X[b],e=0;e<b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2]}else d=x.subarray(c>>2,c+8*b>>2);N.uniform2fv(W(a),d)}},Jb:(a,b,c)=>{if(2<=V.version)b&&N.uniform2iv(W(a),u,c>>2,2*b);else{if(144>=b){b*=2;for(var d=Yb[b],e=0;e<b;e+=2)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2]}else d=u.subarray(c>>2,c+8*b>>2);N.uniform2iv(W(a),
d)}},Mb:(a,b,c)=>{if(2<=V.version)b&&N.uniform3fv(W(a),x,c>>2,3*b);else{if(96>=b){b*=3;for(var d=X[b],e=0;e<b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2]}else d=x.subarray(c>>2,c+12*b>>2);N.uniform3fv(W(a),d)}},Ib:(a,b,c)=>{if(2<=V.version)b&&N.uniform3iv(W(a),u,c>>2,3*b);else{if(96>=b){b*=3;for(var d=Yb[b],e=0;e<b;e+=3)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2]}else d=u.subarray(c>>2,c+12*b>>2);N.uniform3iv(W(a),d)}},Lb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4fv(W(a),
x,c>>2,4*b);else{if(72>=b){var d=X[4*b],e=x;c>>=2;b*=4;for(var g=0;g<b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=x.subarray(c>>2,c+16*b>>2);N.uniform4fv(W(a),d)}},Hb:(a,b,c)=>{if(2<=V.version)b&&N.uniform4iv(W(a),u,c>>2,4*b);else{if(72>=b){b*=4;for(var d=Yb[b],e=0;e<b;e+=4)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+8)>>2],d[e+3]=u[c+(4*e+12)>>2]}else d=u.subarray(c>>2,c+16*b>>2);N.uniform4iv(W(a),d)}},Gb:(a,b,c,d)=>{if(2<=V.version)b&&N.uniformMatrix4fv(W(a),
!!c,x,d>>2,16*b);else{if(18>=b){var e=X[16*b],g=x;d>>=2;b*=16;for(var f=0;f<b;f+=16){var l=d+f;e[f]=g[l];e[f+1]=g[l+1];e[f+2]=g[l+2];e[f+3]=g[l+3];e[f+4]=g[l+4];e[f+5]=g[l+5];e[f+6]=g[l+6];e[f+7]=g[l+7];e[f+8]=g[l+8];e[f+9]=g[l+9];e[f+10]=g[l+10];e[f+11]=g[l+11];e[f+12]=g[l+12];e[f+13]=g[l+13];e[f+14]=g[l+14];e[f+15]=g[l+15]}}else e=x.subarray(d>>2,d+64*b>>2);N.uniformMatrix4fv(W(a),!!c,e)}},j:a=>{a=O[a];N.useProgram(a);N.Ed=a},Qb:(a,b)=>{N.vertexAttribDivisor(a,b)},Rb:(a,b,c,d,e,g)=>{N.vertexAttribPointer(a,
b,c,!!d,e,g)},k:(a,b,c,d)=>N.viewport(a,b,c,d),fb:Ia,Wa:function(){h.ud=a=>{0!=gc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.ud)},Pa:function(){h.Ad=a=>{const b=a.clipboardData.getData("text");cc(()=>{const c=$b(b);hc(c)})};window.addEventListener("paste",h.Ad)},Ga:function(){h.ee=[];h.vd=b=>{b.stopPropagation();b.preventDefault()};h.wd=b=>{b.stopPropagation();b.preventDefault()};h.xd=b=>{b.stopPropagation();b.preventDefault()};h.yd=b=>{b.stopPropagation();
b.preventDefault();const c=b.dataTransfer.files;h.zd=c;ic(c.length);for(let e=0;e<c.length;e++)cc(()=>{const g=$b(c[e].name);jc(e,g)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);kc(b.clientX,b.clientY,d)};const a=h.Nc;a.addEventListener("dragenter",h.vd,!1);a.addEventListener("dragleave",h.wd,!1);a.addEventListener("dragover",h.xd,!1);a.addEventListener("drop",h.yd,!1)},qb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},
hc:function(a){const b=h.zd;return 0>a||a>=b.length?0:b[a].size},bc:function(a,b,c,d,e){const g=new FileReader;g.onload=f=>{f=f.target.result;f.byteLength>d?lc(a,0,1,b,0,c,d,e):(t.set(new Uint8Array(f),c),lc(a,1,0,b,f.byteLength,c,d,e))};g.onerror=()=>{lc(a,0,2,b,0,c,d,e)};g.readAsArrayBuffer(h.zd[a])},Tb:function(a,b){0!==b&&(document.title=b?B(t,b):"");a=a?B(t,a):"";void 0!==h.canvas&&("object"===typeof h.canvas?gb[a]=h.canvas:console.warn("sokol_app.h: Module['canvas'] is set but is not an object"));
h.Nc=K(a);h.Nc||console.warn("sokol_app.h: can't find html5_canvas_selector ",a);h.Nc.requestPointerLock||console.warn("sokol_app.h: target doesn't support requestPointerLock: ",a)},Va:function(){window.removeEventListener("beforeunload",h.ud)},Ma:function(){window.removeEventListener("paste",h.Ad)},Vb:function(){const a=h.Nc;a.removeEventListener("dragenter",h.vd);a.removeEventListener("dragleave",h.wd);a.removeEventListener("dragover",h.xd);a.removeEventListener("drop",h.yd)},w:function(){h.Nc&&
h.Nc.requestPointerLock&&h.Nc.requestPointerLock()},Ab:function(a,b){if(h.Nc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}h.Nc.style.cursor=a}},hb:function(a,b,c){const d=document.createElement("canvas");
d.width=a;d.height=b;const e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(t.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},La:function(a){a=a?B(t,a):"";const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";
b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ab:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=a.next()){const c=b.value[0],d=b.value[1];cc(()=>{const e=$b(c),g=$b(d);mc(e,g)})}},bb:function(){return h.Oc?h.Oc.bufferSize:0},eb:function(a,b,c){h.Hc=null;h.Oc=null;"undefined"!==typeof AudioContext?h.Hc=new AudioContext({sampleRate:a,
latencyHint:"interactive"}):(h.Hc=null,console.log("sokol_audio.h: no WebAudio support"));return h.Hc?(console.log("sokol_audio.h: sample rate ",h.Hc.sampleRate),h.Oc=h.Hc.createScriptProcessor(c,0,b),h.Oc.onaudioprocess=d=>{const e=d.outputBuffer.length,g=nc(e);if(g){const f=d.outputBuffer.numberOfChannels;for(let l=0;l<f;l++){const n=d.outputBuffer.getChannelData(l);for(let p=0;p<e;p++)n[p]=x[(g>>2)+(f*p+l)]}}},h.Oc.connect(h.Hc.destination),a=()=>{h.Hc&&"suspended"===h.Hc.state&&h.Hc.resume()},
document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},cb:function(){return h.Hc?h.Hc.sampleRate:0},ha:function(){const a=h.Hc;null!==a&&(h.Oc&&h.Oc.disconnect(),a.close(),h.Hc=null,h.Oc=null)},v:function(a,b,c,d,e,g){b=b?B(t,b):"";const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const l=0<d;l&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==
XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!l){const n=new Uint8Array(f.response),p=n.length;p<=g?(t.set(n,e),oc(a,d,p)):pc(a)}else qc(a,f.status)};f.send()},ga:function(a,b){b=b?B(t,b):"";const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");rc(a,d)}else qc(a,c.status)};c.send()},ka:function(){return navigator.userAgent.includes("Macintosh")?1:0},fa:function(a,b){b=
b?B(t,b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z;(async function(){function a(c){Z=c.exports;na=Z.kc;ra();jb=Z.Cc;z--;h.monitorRunDependencies?.(z);0==z&&A&&(c=A,A=null,c());return Z}z++;h.monitorRunDependencies?.(z);var b={a:sc};if(h.instantiateWasm)return new Promise(c=>{h.instantiateWasm(b,(d,e)=>{a(d,e);c(d.exports)})});ta??=h.locateFile?h.locateFile("raw-ui.wasm",k):k+"raw-ui.wasm";return a((await wa(b)).instance)})();
var M=a=>(M=Z.mc)(a);h._fs_emsc_alloc=a=>(h._fs_emsc_alloc=Z.nc)(a);h._fs_emsc_load_snapshot_callback=(a,b,c)=>(h._fs_emsc_load_snapshot_callback=Z.oc)(a,b,c);
var hc=h.__sapp_emsc_onpaste=a=>(hc=h.__sapp_emsc_onpaste=Z.pc)(a),gc=h.__sapp_html5_get_ask_leave_site=()=>(gc=h.__sapp_html5_get_ask_leave_site=Z.qc)(),ic=h.__sapp_emsc_begin_drop=a=>(ic=h.__sapp_emsc_begin_drop=Z.rc)(a),jc=h.__sapp_emsc_drop=(a,b)=>(jc=h.__sapp_emsc_drop=Z.sc)(a,b),kc=h.__sapp_emsc_end_drop=(a,b,c)=>(kc=h.__sapp_emsc_end_drop=Z.tc)(a,b,c),lc=h.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,g,f,l)=>(lc=h.__sapp_emsc_invoke_fetch_cb=Z.uc)(a,b,c,d,e,g,f,l),tc=h._main=(a,b)=>(tc=h._main=Z.vc)(a,
b),nc=h.__saudio_emsc_pull=a=>(nc=h.__saudio_emsc_pull=Z.wc)(a),mc=h.__sargs_add_kvp=(a,b)=>(mc=h.__sargs_add_kvp=Z.xc)(a,b),rc=h.__sfetch_emsc_head_response=(a,b)=>(rc=h.__sfetch_emsc_head_response=Z.yc)(a,b),oc=h.__sfetch_emsc_get_response=(a,b,c)=>(oc=h.__sfetch_emsc_get_response=Z.zc)(a,b,c),qc=h.__sfetch_emsc_failed_http_status=(a,b)=>(qc=h.__sfetch_emsc_failed_http_status=Z.Ac)(a,b),pc=h.__sfetch_emsc_failed_buffer_too_small=a=>(pc=h.__sfetch_emsc_failed_buffer_too_small=Z.Bc)(a),fc=(a,b)=>
(fc=Z.Dc)(a,b),bc=a=>(bc=Z.Ec)(a),Zb=a=>(Zb=Z.Fc)(a),ac=()=>(ac=Z.Gc)();function uc(a=[]){var b=tc;a.unshift(fa);var c=a.length,d=Zb(4*(c+1)),e=d;a.forEach(f=>{v[e>>2]=$b(f);e+=4});v[e>>2]=0;try{var g=b(c,d);Ja(g,!0)}catch(f){Ha(f)}}
function vc(a=ea){function b(){h.calledRun=!0;if(!q){Z.lc();h.onRuntimeInitialized?.();h.noInitialRun||uc(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();za.unshift(c)}ya(za)}}if(0<z)A=vc;else{if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Ba();ya(Aa);0<z?A=vc:h.setStatus?(h.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>h.setStatus(""),1);b()},1)):b()}}
if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();vc();
