(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34abdfc5"],{"0024":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list"},[s("div",{staticStyle:{overflow:"hidden"}},[s("table",{ref:"headerWrapper",staticClass:"datatable"},[s("thead",{staticClass:"datatable-head"},[s("tr",{staticClass:"datatable-row-header"},[s("th",{staticClass:"type"},[t._v(" "+t._s(t.$t("tasks.fields.task_type"))+" ")]),s("th",{staticClass:"status"},[t._v(" "+t._s(t.$t("tasks.fields.task_status"))+" ")]),s("th",{staticClass:"estimation"},[t._v(" "+t._s(t.$t("tasks.fields.estimation").substring(0,3))+". ")]),s("th",{staticClass:"estimation"},[t._v(" "+t._s(t.$t("tasks.fields.duration").substring(0,3))+". ")]),s("th",{staticClass:"startdate"},[t._v(" "+t._s(t.$t("tasks.fields.start_date_short"))+" ")]),s("th",{staticClass:"duedate"},[t._v(" "+t._s(t.$t("tasks.fields.due_date"))+" ")]),s("th",{staticClass:"assignees"},[t._v(" "+t._s(t.$t("tasks.fields.assignees"))+" ")]),s("th",{staticClass:"end-cell"})])])])]),s("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),t.entries.length>0?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onBodyScroll,expression:"onBodyScroll"}]},[s("table",{staticClass:"datatable"},[s("tbody",{staticClass:"datatable-body"},t._l(t.sortedEntries,(function(e){return s("tr",{key:"string"===typeof e?e:e.id,class:{selected:t.currentTask&&t.currentTask.id===e,"datatable-row":!0,"datatable-row--selectable":!0},on:{click:function(s){t.selectTask(t.getTask(e))}}},[t.getTaskType(e)?s("task-type-cell",{staticClass:"type",attrs:{"task-type":t.getTaskType(e),"production-id":t.currentProduction.id}}):t._e(),s("td",{staticClass:"status"},[t.getTask(e)?s("validation-tag",{attrs:{task:t.getTask(e),"is-static":!0}}):t._e()],1),s("td",{staticClass:"estimation"},[t._v(" "+t._s(t.getTaskEstimation(e))+" ")]),s("td",{staticClass:"estimation"},[t._v(" "+t._s(t.getTaskDuration(e))+" ")]),s("td",{staticClass:"startdate"},[t._v(" "+t._s(t.getTaskStartDate(e))+" ")]),s("td",{staticClass:"duedate"},[t._v(" "+t._s(t.getTaskDueDate(e))+" ")]),s("td",{staticClass:"assignees"},[t.isCurrentUserClient||t.isCurrentUserVendor?t._e():s("div",{staticClass:"flexrow"},t._l(t.getAssignees(e),(function(a){return s("div",{key:a,staticClass:"avatar-wrapper"},[s("people-avatar",{key:e+"-"+a,staticClass:"person-avatar flexrow-item",attrs:{person:t.personMap.get(a),size:30,"font-size":15}})],1)})),0)]),s("td",{staticClass:"end-cell"})],1)})),0)])]):t._e()],1)},r=[],i=s("2f62"),n=s("31f2"),o=s("58f5"),c=s("e60b"),d=s("fe13"),l=s("eb8c");function u(t){return b(t)||h(t)||p(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t,e){if(t){if("string"===typeof t)return g(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?g(t,e):void 0}}function h(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function b(t){if(Array.isArray(t))return g(t)}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}function m(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function y(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){k(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function k(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var _={name:"entity-task-list",mixins:[n["a"]],components:{TableInfo:c["a"],TaskTypeCell:o["a"],PeopleAvatar:l["a"],ValidationTag:d["a"]},props:{entries:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1}},data:function(){return{currentTask:null}},computed:y(y({},Object(i["c"])(["currentProduction","getTaskTypePriority","isCurrentUserClient","isCurrentUserVendor","personMap","taskMap","taskTypeMap"])),{},{sortedEntries:function(){var t=this;return u(this.entries).sort((function(e,s){var a=t.getTask(e),r=t.getTask(s),i=t.taskTypeMap.get(a.task_type_id),n=t.taskTypeMap.get(r.task_type_id),o=t.getTaskTypePriority(a.task_type_id),c=t.getTaskTypePriority(r.task_type_id);return o===c?i.name.localeCompare(n.name):o-c}))}}),methods:y(y({},Object(i["b"])([])),{},{onBodyScroll:function(t,e){this.$refs.headerWrapper.style.left="-".concat(e.scrollLeft,"px")},getTask:function(t){return"string"===typeof t?this.taskMap.get(t):t},getTaskStartDate:function(t){var e=this.getTask(t);return e&&e.start_date?e.start_date.substring(0,10):""},getTaskDueDate:function(t){var e=this.getTask(t);return e&&e.due_date?e.due_date.substring(0,10):""},getTaskEstimation:function(t){var e=this.getTask(t);return e&&e.estimation?this.formatDuration(e.estimation):""},getTaskDuration:function(t){var e=this.getTask(t);return e&&e.duration?this.formatDuration(e.duration):""},getTaskType:function(t){var e=this.getTask(t);return e?this.taskTypeMap.get(e.task_type_id):null},getAssignees:function(t){var e=this.getTask(t);return e?e.assignees:[]},selectTask:function(t){this.currentTask=t,this.$emit("task-selected",t)}})},v=_,T=(s("3c42"),s("2877")),O=Object(T["a"])(v,a,r,!1,null,"3051ceb0",null);e["a"]=O.exports},"07d8":function(t,e,s){},"24b2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns fixed-page edit"},[s("div",{staticClass:"column main-column"},[s("div",{staticClass:"page-header flexrow"},[s("router-link",{staticClass:"flexrow-item has-text-centered back-link",attrs:{to:t.editsPath}},[s("chevron-left-icon")],1),t.currentEdit?s("entity-thumbnail",{staticClass:"edit-thumbnail flexrow-item",attrs:{entity:t.currentEdit,"with-link":!1}}):t._e(),s("div",{staticClass:"flexrow-item"},[s("page-title",{staticClass:"entity-title",attrs:{text:t.title}})],1),s("div",{staticClass:"flexrow-item"},[t.isCurrentUserManager?s("button-simple",{attrs:{icon:"edit"},on:{click:function(e){t.modals.edit=!0}}}):t._e()],1)],1),s("div",{staticClass:"flexrow infos"},[s("div",{staticClass:"flexrow-item"},[s("page-subtitle",{attrs:{text:t.$t("edits.tasks")}}),s("entity-task-list",{staticClass:"task-list",attrs:{entries:t.currentTasks.map((function(t){return t.id})),"is-loading":!t.currentEdit,"is-error":!1},on:{"task-selected":t.onTaskSelected}})],1),s("div",{staticClass:"flexrow-item"},[s("page-subtitle",{attrs:{text:t.$t("main.info")}}),s("div",{staticClass:"table-body"},[t.currentEdit?s("table",{staticClass:"datatable"},[s("tbody",{staticClass:"datatable-body"},[s("tr",{staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(t.$t("edits.fields.description")))]),s("description-cell",{attrs:{entry:t.currentEdit,full:!0}})],1),t._l(t.editMetadataDescriptors,(function(e){return s("tr",{key:e.id,staticClass:"datatable-row"},[s("td",{staticClass:"field-label"},[t._v(t._s(e.name))]),s("td",[t._v(" "+t._s(t.currentEdit.data?t.currentEdit.data[e.field_name]:"")+" ")])])}))],2)]):t._e()])],1)]),t.scheduleItems.length>0?s("div",{staticClass:"infos schedule"},[s("page-subtitle",{staticClass:"schedule-title",attrs:{text:"Schedule"}}),s("div",{staticClass:"wrapper"},[s("schedule",{ref:"schedule-widget",staticClass:"schedule-widget",attrs:{"start-date":t.tasksStartDate,"end-date":t.tasksEndDate,hierarchy:t.scheduleItems,"zoom-level":2,height:385,"is-loading":!1,"is-estimation-linked":!0,"hide-root":!0,"with-milestones":!1}})],1)],1):t._e()]),t.currentTask?s("div",{staticClass:"column side-column"},[s("task-info",{attrs:{task:t.currentTask}})],1):t._e(),s("edit-edit-modal",{ref:"edit-edit-modal",attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"edit-to-edit":t.currentEdit},on:{cancel:function(e){t.modals.edit=!1},confirm:t.confirmEditEdit}})],1)},r=[],i=s("2f62"),n=s("0a35"),o=s("9d8b"),c=s("f58f"),d=s("31f2"),l=s("de40"),u=s("0fcb"),f=s("489a"),p=s("bb21"),h=s("0024"),b=s("8d07"),g=s("8751"),m=s("d7c7"),y=s("9d94");function k(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function _(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?k(Object(s),!0).forEach((function(e){v(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function v(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var T={name:"edit",mixins:[c["a"],d["a"]],components:{ButtonSimple:l["a"],ChevronLeftIcon:n["j"],DescriptionCell:u["a"],EditEditModal:f["a"],EntityThumbnail:p["a"],EntityTaskList:h["a"],PageSubtitle:g["a"],PageTitle:b["a"],Schedule:m["a"],TaskInfo:y["default"]},data:function(){return{currentEdit:null,currentTask:null,isLoading:!1,isError:!1,errors:{edit:!1},loading:{edit:!1},modals:{edit:!1}}},mounted:function(){this.clearSelectedTasks(),this.currentEdit=this.getCurrentEdit(),this.isLoading=!0,this.isError=!1,this.currentEdit||this.resetData()},computed:_(_({},Object(i["c"])(["currentEpisode","currentProduction","getTaskTypePriority","isCurrentUserManager","isTVShow","route","editMap","editMetadataDescriptors","editsPath","taskMap","taskTypeMap"])),{},{title:function(){return this.currentEdit?this.currentEdit.episode_name?"".concat(this.currentEdit.episode_name," / ")+"".concat(this.currentEdit.name):"".concat(this.currentEdit.name):"Loading..."},editThumbnailPath:function(){var t=this.currentEdit.preview_file_id;return"/api/pictures/originals/preview-files/".concat(t,".png")},isPreview:function(){return this.currentEdit&&this.currentEdit.preview_file_id&&this.currentEdit.preview_file_id.length>0}}),methods:_(_({},Object(i["b"])(["clearSelectedTasks","editEdit","loadAssets","loadEdits"])),{},{changeTab:function(t){this.selectedTab=t},getCurrentEdit:function(){return this.editMap.get(this.route.params.edit_id)||null},onEditClicked:function(){this.modals.edit=!0},confirmEditEdit:function(t){var e=this;t.id=this.currentEdit.id,this.loading.edit=!0,this.errors.edit=!1,this.editEdit(t).then((function(){e.loading.edit=!1,e.modals.edit=!1})).catch((function(t){console.error(t),e.loading.edit=!1,e.errors.edit=!0}))},onTaskSelected:function(t){this.currentTask=t},buildAssetRoute:function(t){var e=t.episode_id;this.isTVShow&&!e&&(e="main");var s={name:"asset",params:{production_id:this.currentProduction.id,asset_id:t.asset_id}};return Object(o["a"])(s,e)},resetData:function(){var t=this;this.$nextTick((function(){t.loadEdits((function(){t.loadAssets().then((function(){t.currentEdit=t.getCurrentEdit(),t.isLoading=!1}))}))}))}}),watch:{currentProduction:function(){this.isTVShow||this.resetData()},currentEpisode:function(){this.isTVShow&&0===this.editMap.size&&this.resetData()}},metaInfo:function(){return{title:"".concat(this.title," - Kitsu")}}},O=T,C=(s("34ab"),s("2877")),w=Object(C["a"])(O,a,r,!1,null,"a27e5528",null);e["default"]=w.exports},"34ab":function(t,e,s){"use strict";s("07d8")},"3c42":function(t,e,s){"use strict";s("b065")},b065:function(t,e,s){},f58f:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var a=s("3657"),r=s("c1df"),i=s.n(r);function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={created:function(){},mounted:function(){},beforeDestroy:function(){},computed:{currentTasks:function(){var t=this,e=this.currentAsset||this.currentShot;return e?e.tasks.map((function(e){return t.taskMap.get(e)})).filter((function(t){return t})).sort((function(e,s){var a=t.getTaskTypePriority(e.task_type_id),r=t.getTaskTypePriority(s.task_type_id);return a-r})):[]},tasksStartDate:function(){return this.scheduleItems.length>0&&this.scheduleItems[0].children.length>0?Object(a["l"])(this.scheduleItems[0].children):i()()},tasksEndDate:function(){return this.scheduleItems.length>0&&this.scheduleItems[0].children.length>0?Object(a["m"])(this.scheduleItems[0].children):i()().add(30,"days")},scheduleItems:function(){var t=this,e=0,s={avatar:!1,id:"root",name:"Tasks",color:"#888",priority:1,expanded:!0,loading:!1,children:[],editable:!1},r=i()(),n=this.currentTasks.map((function(i){var n,c=t.formatDuration(i.estimation),d=r.clone();if(!i.start_date&&!i.real_start_date&&!i.due_date&&!i.end_date)return null;i.start_date?d=Object(a["t"])(i.start_date):i.real_start_date&&(d=Object(a["t"])(i.real_start_date)),i.due_date?n=Object(a["t"])(i.due_date):i.end_date?n=Object(a["t"])(i.end_date):i.estimation&&(n=d.clone().add(c,"days")),n&&!n.isBefore(d)||(n=d.clone().add(1,"days")),c&&(e+=i.estimation);var l=t.taskTypeMap.get(i.task_type_id);return o(o({},i),{},{name:l.name,startDate:d,endDate:n,expanded:!1,loading:!1,man_days:c,editable:!1,unresizable:!1,parentElement:s,color:l.color,children:[]})})).filter((function(t){return null!==t})),c=i()(),d=i()().add("days",1);return n.length>0&&(c=Object(a["l"])(n),d=Object(a["m"])(n)),Object.assign(s,{children:n,startDate:c,endDate:d,man_days:e}),[s]}},methods:{}}}}]);
//# sourceMappingURL=chunk-34abdfc5.49d966b9.js.map