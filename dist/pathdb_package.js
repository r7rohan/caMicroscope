parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"aJmB":[function(require,module,exports) {
function e(){function e(e){var t=RegExp(e+"[^;]+").exec(document.cookie);return decodeURIComponent(t?t.toString().replace(/^[^=]+./,""):"")}console.log("PathDbMods()..."),fetch("/jwt/token",{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(e){console.log(e),e.hasOwnProperty("token")&&e.token&&(document.cookie="token="+e.token+";")}),console.warn("{PathDB mods enabled}"),Store.prototype.default_findMark=Store.prototype.findMark,Store.prototype.findMark=function(e,t,i,r,a,o,n,s,d,p){var l=this,c=this.base+"Mark/find",u={};return e&&(u.slide=e),t&&(u.name=t),i&&(u.specimen=i),r&&(u.study=r),a&&(u.footprint=a),o&&(u.source=o),n&&(u.x0=n),s&&(u.x1=s),d&&(u.y0=d),p&&(u.y1=p),fetch(c+"?"+objToParamStr(u),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler).then(function(e){return l.filterBroken(e,"mark")})},Store.prototype.getMarkByIds=function(e,t,i,r,a,o,n,s,d,p){var l=this;if(!Array.isArray(e)||!t)return{hasError:!0,message:"args are illegal"};var c=this.base+"Mark/multi",u={},m=e.map(function(e){return'"'+e+'"'}).join(",");return u.name="["+m+"]",u.slide=t,i&&(u.study=i),r&&(u.specimen=r),a&&(u.source=a),o&&(u.footprint=o),n&&(u.x0=n),s&&(u.x1=s),d&&(u.y0=d),p&&(u.y1=p),fetch(c+"?"+objToParamStr(u),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler).then(function(e){return l.filterBroken(e,"mark")})},Store.prototype.findMarkTypes=function(e,t){var i="Mark/types",r=this.base+i,a={};return e?(parseInt(e)==e||parseFloat(e)==e?a.slide='"'+e+'"':a.slide=e,t&&(a.name=t,i="Mark/typesExec"),fetch(r+"?"+objToParamStr(a),{credentials:"same-origin",mode:"cors"}).then(this.errorHandler)):(console.error("Store.findMarkTypes needs slide ... "),null)},Store.prototype.default_findSlide=Store.prototype.findSlide,Store.prototype.findSlide=function(t,i,r,a){return fetch("/node/"+t+"?_format=json",{mode:"cors",headers:new Headers({Authorization:"Bearer "+e("token")})}).then(function(e){return e.ok?e.json().then(function(e){return[e]}):{error:!e.ok,text:e.statusText,url:e.url}})},Store.prototype.default_getSlide=Store.prototype.getSlide,Store.prototype.getSlide=function(t){return fetch("/node/"+t+"?_format=json",{mode:"cors",headers:new Headers({Authorization:"Bearer "+e("token")})}).then(function(e){return e.ok?e.json().then(function(e){return[e]}):{error:!e.ok,text:e.statusText,url:e.url}})},Store.prototype.default_findHeatmapType=Store.prototype.findHeatmapType,Store.prototype.findHeatmapType=function(e,t){var i=this,r=this.base+"Heatmap/types",a={};return this.subject_id&&(a.subject=this.subject_id),this.case_id?(a.case=this.case_id,a.slide=this.case_id):(a.case=this.slideId,a.slide=this.slideId),fetch(r+"?"+objToParamStr(a),{credentials:"include",mode:"cors"}).then(this.errorHandler).then(function(e){return i.filterBroken(e,"heatmap")})},Store.prototype.default_findHeatmap=Store.prototype.findHeatmap,Store.prototype.findHeatmap=function(e,t){var i=this,r=this.base+"Heatmap/find",a={};return this.subject_id&&(a.subject=this.subject_id),this.case_id?(a.case=this.case_id,a.slide=this.case_id):(a.case=this.slideId,a.slide=this.slideId),t&&(a.name=t),fetch(r+"?"+objToParamStr(a),{credentials:"include",mode:"cors"}).then(this.errorHandler).then(function(e){return i.filterBroken(e,"heatmap")})},Store.prototype.default_getHeatmap=Store.prototype.getHeatmap,Store.prototype.getHeatmap=function(e,t){var i=this,r=this.base+"Heatmap/get",a={};return this.subject_id&&(a.subject=this.subject_id),this.case_id?a.case=this.case_id:a.case=this.slideId,t&&(a.exec=t),fetch(r+"?"+objToParamStr(a),{credentials:"include",mode:"cors"}).then(this.errorHandler).then(function(e){return i.filterBroken(e,"heatmap")})},StatesHelper.prototype.default_getCurrentStatesURL=StatesHelper.prototype.getCurrentStatesURL,getCurrentStatesURL=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=StatesHelper.getCurrentStates(e);if(t)return console.log(t),t=StatesHelper.encodeStates(t),""+location.origin+location.pathname+"?slideId="+$D.params.slideId+"&states="+$D.params.states+"&mode="+$D.params.mode},CaMic.prototype.default_loadImg=CaMic.prototype.loadImg,CaMic.prototype.loadImg=function(e){var t=this,i=new URLSearchParams(window.location.search).get("slideId");this.slideId=i,this.slideName=i,this.study="",this.specimen="",this.subject_id="",this.case_id="",this.image_id="",this.study_id="",this.store.getSlide(i).then(function(i){if(i=i[0],console.log(i),t.mpp=1e9,i.field_mpp_y&&i.field_mpp_y.length>=1&&(t.mpp_y=i.field_mpp_y[0].value,t.mpp=t.mpp_y),i.field_mpp_x&&i.field_mpp_x.length>=1&&(t.mpp_x=i.field_mpp_x[0].value,t.mpp=t.mpp_x),i.referencepixelphysicalvaluey&&i.referencepixelphysicalvaluey.length>=1&&(t.mpp_y=i.referencepixelphysicalvaluey[0],t.mpp=t.mpp_y),i.referencepixelphysicalvaluex&&i.referencepixelphysicalvaluex.length>=1&&(t.mpp_x=i.referencepixelphysicalvaluex[0],t.mpp=t.mpp_x),i.field_subject_id&&i.field_subject_id.length>=1&&(t.subject_id=i.field_subject_id[0].value),i.clinicaltrialsubjectid&&i.clinicaltrialsubjectid.length>=1&&(t.subject_id=i.clinicaltrialsubjectid[0].value),i.field_case_id&&i.field_case_id.length>=1&&(t.case_id=i.field_case_id[0].value),i.field_case_id&&i.field_case_id.length>=1&&(t.case_id=i.field_case_id[0].value),i.field_image_id&&i.field_image_id.length>=1&&(t.image_id=i.field_image_id[0].value),i.imageid&&i.imageid.length>=1&&(t.imageid=i.imageid[0].value),i.field_study_id&&i.imageid.length>=1&&(t.study_id=i.field_study_id[0].value),i.studyid&&i.studyid.length>=1&&(t.study_id=i.studyid[0].value),!(i.field_iip_path&&i.field_iip_path.length>=1))throw"No image location --could be token";t.location=i.field_iip_path[0].value,t.url="../../img/IIP/raw/?DeepZoom="+t.location+".dzi",t.viewer.open(t.url),t.viewer.mpp=t.mpp,t.viewer.mpp_x=t.mpp_x,t.viewer.mpp_y=t.mpp_y,t.mpp&&1e9!=t.mpp&&t.createScalebar(t.mpp),new OpenSeadragonImaging.ImagingHelper({viewer:t.viewer}).setMaxZoom(1);var r={};r._id=t.slideId,r.name=t.slideName,r.subject_id=t.subject_id,r.case_id=t.case_id,r.image_id=t.image_id,r.study_id=t.study_id,r.study=t.study,r.specimen=t.specimen,r.mpp=t.mpp,r.mpp_x=t.mpp_x,r.mpp_y=t.mpp_y,r.location=t.location,r.url=t.url,e&&"function"==typeof e&&e.call(null,r),Loading.text.textContent="Loading Slide's Tiles..."}).catch(function(e){console.error(e),Loading.text.textContent="ERROR - PathDB Image Error (Try A Refresh)"})}}e(),console.warn("This Setup Is Intended For Pathdb");
},{}]},{},["aJmB"], null)
//# sourceMappingURL=/pathdb_package.map