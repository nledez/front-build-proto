(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fae184a"],{"00f7":function(e,t,r){"use strict";r("6eaa")},"1c99":function(e,t,r){},"24d0":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"people page fixed-page"},[r("div",{staticClass:"flexrow mt2 add-people"},[r("span",{staticClass:"flexrow-item people-field-label"},[e._v(" "+e._s(e.$t("people.add_member_to_team"))+" ")]),r("people-field",{ref:"people-field",staticClass:"flexrow-item add-people-field",attrs:{people:e.unlistedPeople},on:{enter:e.addPerson},model:{value:e.person,callback:function(t){e.person=t},expression:"person"}}),r("button",{staticClass:"button flexrow-item",on:{click:e.addPerson}},[e._v(" "+e._s(e.$t("main.add"))+" ")])],1),r("production-team-list",{attrs:{entries:e.teamPersons,"is-loading":e.isTeamLoading,"is-error":e.isTeamLoadingError},on:{remove:e.removePerson}})],1)},o=[],s=r("2f62"),a=r("2229"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"data-list"},[r("div",{staticClass:"datatable-wrapper"},[r("table",{staticClass:"datatable"},[r("thead",{staticClass:"datatable-head"},[r("tr",[r("th",{staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.name"))+" ")]),r("th",{staticClass:"email",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.email"))+" ")]),r("th",{staticClass:"phone",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.phone"))+" ")]),r("th",{staticClass:"role",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("people.list.role"))+" ")]),r("th",{staticClass:"actions",attrs:{scope:"col"}})])]),e.isEmpty?e._e():r("tbody",{staticClass:"datatable-body"},e._l(e.entries,(function(t){return r("tr",{key:t.id,staticClass:"datatable-row"},[r("people-name-cell",{staticClass:"name",attrs:{person:t}}),r("td",{staticClass:"email"},[e._v(e._s(t.email))]),r("td",{staticClass:"phone"},[e._v(e._s(t.phone))]),r("td",{staticClass:"role"},[e._v(e._s(e.$t("people.role."+t.role)))]),e.isCurrentUserAdmin?r("td",{staticClass:"actions"},[r("button",{staticClass:"button",on:{click:function(r){return e.removePerson(t)}}},[e._v(" "+e._s(e.$t("main.remove"))+" ")])]):r("td",{staticClass:"actions"})],1)})),0)])]),e.isEmpty?r("p",{staticClass:"has-text-centered mt2"},[e._v(" "+e._s(e.$t("people.empty_team"))+" ")]):e._e(),r("p",{staticClass:"has-text-centered footer-info"},[e._v(" "+e._s(e.entries.length)+" "+e._s(e.$tc("people.persons",e.entries.length))+" ")])])},c=[],l=r("7365");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f={name:"production-team-list",components:{PeopleNameCell:l["a"]},props:["entries"],computed:u(u({},Object(s["c"])(["isCurrentUserAdmin"])),{},{isEmpty:function(){return!this.entries||0===this.entries.length}}),methods:u(u({},Object(s["b"])(["removePersonFromTeam"])),{},{removePerson:function(e){this.removePersonFromTeam(e)}})},m=f,b=(r("5e63"),r("2877")),O=Object(b["a"])(m,i,c,!1,null,"25c8aa17",null),v=O.exports,h=r("9616");function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _={name:"people",components:{PeopleField:h["a"],ProductionTeamList:v},data:function(){return{person:null,isTeamLoading:!1,isTeamLoadingError:!1}},computed:j(j({},Object(s["c"])(["currentProduction","productionMap","openProductions","personMap","people"])),{},{teamPersons:function(){var e=this;return Object(a["h"])(this.currentProduction.team.map((function(t){return e.personMap.get(t)})))},unlistedPeople:function(){var e=this;return this.people.filter((function(t){return!e.currentProduction.team.includes(t.id)&&t.active}))}}),methods:j(j({},Object(s["b"])(["addPersonToTeam"])),{},{addPerson:function(){var e=this;this.person&&(this.addPersonToTeam(this.person),setTimeout((function(){e.$refs["people-field"].clear()}),1))},removePerson:function(e){this.removePersonFromTeam(e)}}),metaInfo:function(){return{title:"".concat(this.currentProduction.name," | ").concat(this.$t("people.team")," - Kitsu")}}},w=_,g=(r("dce4"),Object(b["a"])(w,n,o,!1,null,"22c0519f",null));t["default"]=g.exports},"5e63":function(e,t,r){"use strict";r("1c99")},"6eaa":function(e,t,r){},7365:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",{staticClass:"name",attrs:{scope:"row"}},[r("div",{staticClass:"people-name"},[r("people-avatar",{staticClass:"avatar",attrs:{person:e.person}}),r("people-name",{staticClass:"people-name",attrs:{"with-link":"",person:e.person}})],1)])},o=[],s=r("2f62"),a=r("eb8c"),i=r("0073");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={name:"people-name-cell",components:{PeopleName:i["a"],PeopleAvatar:a["a"]},props:{person:{type:Object,required:!0}},computed:l({},Object(s["c"])([])),methods:l({},Object(s["b"])([]))},d=u,f=(r("00f7"),r("2877")),m=Object(f["a"])(d,n,o,!1,null,"badaef58",null);t["a"]=m.exports},"898d":function(e,t,r){},dce4:function(e,t,r){"use strict";r("898d")}}]);
//# sourceMappingURL=chunk-3fae184a.d5e73788.js.map