(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b5470f8"],{"0dd5":function(e,t,i){"use strict";i("e654")},"5ca3":function(e,t,i){},"9e0d":function(e,t,i){"use strict";i("c20d")},a591:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"episodes page fixed-page"},[i("div",{staticClass:"episode-list-header page-header flexrow"},[i("search-field",{ref:"episode-search-field",staticClass:"flexrow-item mt1",attrs:{placeholder:"ex: e01 s01, anim=wip"},on:{change:e.onSearchChange}}),i("combobox",{staticClass:"mb0 flexrow-item",attrs:{"locale-key-prefix":"statistics.",label:e.$t("statistics.data_mode"),options:e.dataModeOptions},model:{value:e.dataMode,callback:function(t){e.dataMode=t},expression:"dataMode"}}),i("combobox",{staticClass:"mb0 flexrow-item",attrs:{"locale-key-prefix":"statistics.",label:e.$t("statistics.display_mode"),options:e.displayModeOptions},model:{value:e.displayMode,callback:function(t){e.displayMode=t},expression:"displayMode"}}),i("combobox",{staticClass:"mb0 flexrow-item",attrs:{label:e.$t("statistics.count_mode"),"locale-key-prefix":"statistics.",options:e.countModeOptions},model:{value:e.countMode,callback:function(t){e.countMode=t},expression:"countMode"}}),i("span",{staticClass:"filler"}),i("button-simple",{staticClass:"flexrow-item",attrs:{icon:"refresh",title:e.$t("main.reload")},on:{click:e.reset}}),i("button-simple",{staticClass:"flexrow-item",attrs:{icon:"download"},on:{click:e.exportStatisticsToCsv}})],1),i("episode-list",{ref:"episode-list",attrs:{entries:e.displayedEpisodes,"is-loading":e.isLoading,"is-error":e.isLoadingError,"validation-columns":e.episodeValidationColumns,"episode-stats":e.episodeStats,"episode-retakes-stats":e.episodeRetakeStats,"data-mode":e.dataMode,"count-mode":e.countMode,"display-mode":e.displayMode,"show-all":0===e.episodeSearchText.length},on:{"delete-clicked":e.onDeleteClicked,"edit-clicked":e.onEditClicked,"field-changed":e.onFieldChanged,scroll:e.saveScrollPosition}}),i("edit-episode-modal",{attrs:{active:e.modals.isNewDisplayed,"is-loading":e.loading.edit,"is-error":e.errors.edit,"episode-to-edit":e.episodeToEdit},on:{cancel:function(t){e.modals.isNewDisplayed=!1},confirm:e.confirmEditEpisode}}),i("hard-delete-modal",{attrs:{active:e.modals.isDeleteDisplayed,"is-loading":e.loading.del,"is-error":e.errors.del,text:e.deleteText(),"error-text":e.$t("episodes.delete_error"),"lock-text":e.episodeToDelete?e.episodeToDelete.name:""},on:{cancel:function(t){e.modals.isDeleteDisplayed=!1},confirm:e.confirmDeleteEpisode}})],1)},a=[],o=i("c1df"),n=i.n(o),r=i("2f62"),d=i("3455"),l=i("8c97"),c=i("de40"),p=i("992f"),u=i("2c1a"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{modal:!0,"is-active":e.active}},[i("div",{staticClass:"modal-background",on:{click:function(t){return e.$emit("cancel")}}}),i("div",{staticClass:"modal-content"},[i("div",{staticClass:"box"},[e.episodeToEdit&&this.episodeToEdit.id?i("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("episodes.edit_title"))+" "+e._s(e.episodeToEdit.name)+" ")]):i("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("episodes.new_episode"))+" ")]),i("form",{on:{submit:function(e){e.preventDefault()}}},[i("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:e.$t("episodes.fields.name")},on:{enter:e.runConfirmation},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),i("textarea-field",{ref:"descriptionField",attrs:{label:e.$t("episodes.fields.description")},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.runConfirmation.apply(null,arguments):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.metaKey?e.runConfirmation.apply(null,arguments):null}]},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),i("modal-footer",{attrs:{"error-text":e.$t("episodes.edit_error"),"is-loading":e.isLoading,"is-error":e.isError},on:{confirm:e.confirmClicked,cancel:function(t){return e.$emit("cancel")}}})],1)])])},h=[],m=i("d065"),y=i("d5c9"),b=i("7bf8"),g=i("1149");function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function C(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){k(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function k(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var E={name:"edit-episode-modal",mixins:[m["a"]],components:{ModalFooter:y["a"],TextField:b["a"],TextareaField:g["a"]},props:["onConfirmClicked","text","active","cancelRoute","isError","isLoading","isLoadingStay","isSuccess","episodeToEdit","errorText"],data:function(){return this.episodeToEdit&&this.episodeToEdit.id?{form:{id:this.episodeToEdit.id,name:this.episodeToEdit.name,description:this.episodeToEdit.description,production_id:this.episodeToEdit.project_id},episodeSuccessText:""}:{form:{id:"",name:"",description:"",fps:""},episodeSuccessText:""}},computed:C({},Object(r["c"])(["currentProduction"])),methods:C(C({},Object(r["b"])([])),{},{runConfirmation:function(){this.confirmClicked()},confirmClicked:function(){this.$emit("confirm",this.form)},isEditing:function(){return this.episodeToEdit&&this.episodeToEdit.id},resetForm:function(){this.episodeSuccessText="",this.isEditing()?this.form={id:this.episodeToEdit.id,name:this.episodeToEdit.name,description:this.episodeToEdit.description}:(this.form.id=null,this.form.name="",this.form.description="")}}),mounted:function(){this.resetForm()},watch:{active:function(){this.resetForm()},episodeToEdit:function(){this.resetForm()}}},_=E,S=(i("d8b9"),i("2877")),M=Object(S["a"])(_,f,h,!1,null,"7e86a2f2",null),x=M.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"data-list"},[i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onBodyScroll,expression:"onBodyScroll"}],ref:"body",staticClass:"datatable-wrapper"},[i("table",{staticClass:"datatable"},[i("thead",{staticClass:"datatable-head"},[i("tr",[i("th",{staticClass:"expander"}),i("th",{ref:"th-episode",staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("shots.fields.episode"))+" ")]),i("th",{staticClass:"description",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("shots.fields.description"))+" ")]),i("th",{staticClass:"validation",attrs:{scope:"col"}},[e._v(e._s(e.$t("main.all")))]),e._l(e.validationColumns,(function(t){return i("th",{key:e.taskTypeMap.get(t).id,staticClass:"validation validation-cell",attrs:{scope:"col"}},[i("div",{staticClass:"flexrow validation-content",style:e.getValidationStyle(t)},[e.isCurrentUserClient?i("span",{staticClass:"flexrow-item"},[e._v(" "+e._s(e.taskTypeMap.get(t).name)+" ")]):i("router-link",{staticClass:"flexrow-item",attrs:{to:e.taskTypePath(t)}},[e._v(" "+e._s(e.taskTypeMap.get(t).name)+" ")])],1)])})),i("th",{staticClass:"actions",attrs:{scope:"col"}})],2)]),e.isLoading?e._e():i("tbody",{staticClass:"datatable-body"},[e.showAll&&!e.isEmptyList?i("tr",{staticClass:"all-line datatable-row"},[i("td",{staticClass:"expander"}),i("td",{staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("episodes.all_episodes"))+" ")]),i("td",{staticClass:"description"}),i("stats-cell",{attrs:{colors:e.chartColors("all","all"),data:e.chartData("all","all"),"frames-data":e.chartData("all","all","frames"),countMode:e.countMode,displayMode:e.displayMode}}),e._l(e.validationColumns,(function(t){return i("stats-cell",{key:"all-"+t,style:e.getValidationStyle(t),attrs:{colors:e.chartColors("all",t),data:e.chartData("all",t),"frames-data":e.chartData("all",t,"frames"),countMode:e.countMode,displayMode:e.displayMode}})})),i("td",{staticClass:"actions"})],2):e._e(),e._l(e.entries,(function(t){return[i("tr",{key:t.id,staticClass:"datatable-row"},[i("td",{staticClass:"expander",on:{click:function(i){return e.toggleExpanded(t.id)}}},[e.isRetakes&&!0!==e.expanded[t.id]?i("chevron-right-icon"):e._e(),e.isRetakes&&!0===e.expanded[t.id]?i("chevron-down-icon"):e._e()],1),i("td",{staticClass:"name datatable-row-header"},[e._v(" "+e._s(t.name)+" ")]),i("description-cell",{staticClass:"description",attrs:{editable:e.isCurrentUserManager,entry:t},on:{"description-changed":function(i){return e.onDescriptionChanged(t,i)}}}),e.isStats(t.id,"all")?i("stats-cell",{attrs:{colors:e.chartColors(t.id,"all"),data:e.chartData(t.id,"all"),"frames-data":e.chartData(t.id,"all","frames"),countMode:e.countMode,displayMode:e.displayMode}}):i("td"),e._l(e.validationColumns,(function(s){return e.isStats(t.id,s)?i("stats-cell",{key:t.id+s,style:e.getValidationStyle(s),attrs:{colors:e.chartColors(t.id,s),data:e.chartData(t.id,s),"frames-data":e.chartData(t.id,s,"frames"),countMode:e.countMode,displayMode:e.displayMode,label:e.chartLabel(t.id,s),"label-color":e.chartLabelColor(t.id,s)}}):i("td",{style:e.getValidationStyle(s)})})),e.isCurrentUserManager?i("row-actions-cell",{attrs:{entry:t},on:{"delete-clicked":function(i){return e.$emit("delete-clicked",t)},"edit-clicked":function(i){return e.$emit("edit-clicked",t)}}}):i("td",{staticClass:"actions"})],2),e.expanded[t.id]?e._l(e.takeRange(t.id),(function(s){return i("tr",{key:s+"-"+t.id,staticClass:"datatable-row"},[i("td",{staticClass:"expander"}),i("td",{staticClass:"name datatable-row-header"},[e._v(" - Take "+e._s(s)+" ")]),i("td",{staticClass:"description"}),i("td"),e._l(e.validationColumns,(function(a){return[e.chartRetakeMaxCount(t.id,a)+1>s?i("stats-cell",{key:s+t.id+a,style:e.getValidationStyle(a),attrs:{colors:e.chartColors(t.id,a),data:e.chartTakeData(t.id,a,s),"frames-data":e.chartTakeData(t.id,a,s,"frames"),countMode:e.countMode,displayMode:e.displayMode}}):e.isStats(t.id,a)&&e.chartRetakeMaxCount(t.id,a)+1===s?i("stats-cell",{key:s+t.id+a,style:e.getValidationStyle(a),attrs:{colors:e.chartColors(t.id,a),data:e.chartData(t.id,a),"frames-data":e.chartData(t.id,a,"frames"),countMode:e.countMode,displayMode:e.displayMode}}):i("td",{key:s+t.id+a,style:e.getValidationStyle(a)})]})),i("td",{staticClass:"actions"})],2)})):e._e()]}))],2)])]),i("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),e.isLoading||!e.isEmptyList||e.isCurrentUserClient?e._e():i("div",{staticClass:"has-text-centered"},[e._m(0),i("p",{staticClass:"info"},[e._v(e._s(e.$t("episodes.empty_list")))])]),!e.isLoading&&e.isEmptyList&&e.isCurrentUserClient?i("div",{staticClass:"has-text-centered"},[e._m(1),i("p",{staticClass:"info"},[e._v(e._s(e.$t("episodes.empty_list_client")))])]):e._e(),e.isEmptyList?e._e():i("p",{staticClass:"has-text-centered nb-episodes"},[e._v(" "+e._s(e.displayedEpisodesLength)+" "+e._s(e.$tc("episodes.number",e.displayedEpisodesLength))+" ")])],1)},w=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"info"},[s("img",{attrs:{src:i("732b")}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"info"},[s("img",{attrs:{src:i("732b")}})])}],D=i("ba4c"),T=i.n(D),P=i("0a35"),j=i("5097"),L=i("3657"),$=i("09d3"),R=i("0fcb"),F=i("14b2"),V=i("b131"),A=i("e60b");function N(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function U(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?N(Object(i),!0).forEach((function(t){B(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function B(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var I={name:"episode-list",mixins:[j["a"]],components:{DescriptionCell:R["a"],ChevronDownIcon:P["i"],ChevronRightIcon:P["k"],RowActionsCell:F["a"],StatsCell:V["a"],TableInfo:A["a"]},props:{countMode:{type:String,default:"count"},dataMode:{type:String,default:"retakes"},displayMode:{type:String,default:"pie"},entries:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},showAll:{type:Boolean,default:!1},validationColumns:{type:Array,default:function(){return[]}}},data:function(){return{busy:!1,expanded:{},lastSelection:null,takeLabelColors:["#FB8C00","#EF6C00","#d35400","#e74c3c","#c0392b"]}},mounted:function(){var e=this;this.entries.forEach((function(t){T.a.set(e.expanded,t.id,!1)}))},computed:U(U({},Object(r["c"])(["currentProduction","displayedEpisodesLength","episodeSearchText","episodeStats","episodeRetakeStats","isCurrentUserClient","isCurrentUserManager","isSingleEpisode","taskTypeMap"])),{},{isEmptyList:function(){return this.entries&&0===this.entries.length&&!this.isLoading&&!this.isError&&(!this.episodeSearchText||0===this.episodeSearchText.length)},isRetakes:function(){return"retakes"===this.dataMode}}),methods:U(U({},Object(r["b"])(["displayMoreEpisodes","loadMoreEpisodes"])),{},{chartColors:function(e,t){return this.isRetakes?["#ff3860","#6f727a","#22d160"]:Object($["b"])(this.episodeStats,e,t)},chartData:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"count";return this.isRetakes?Object($["f"])(this.episodeRetakeStats,e,t,i):Object($["c"])(this.episodeStats,e,t,i)},chartTakeData:function(e,t,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"count",a=this.episodeRetakeStats[e][t].evolution,o=a[i].retake[s],n=a[i].done[s],r=a[i].other[s];return[["retake",o,"#ff3860"],["other",r,"#6f727a"],["done",n,"#22d160"]]},chartLabel:function(e,t){if(this.isRetakes){var i=Object($["d"])(this.episodeRetakeStats,e,t);return i>=1?"Take ".concat(i+1):""}return""},chartLabelColor:function(e,t){if(this.isRetakes){var i=Object($["d"])(this.episodeRetakeStats,e,t);return i=Math.min(i,4),this.takeLabelColors[i]}return""},chartRetakeMaxCount:function(e,t){return Object($["d"])(this.episodeRetakeStats,e,t)},takeRange:function(e){return Object(L["v"])(1,this.chartRetakeMaxCount(e,"all")+1)},isStats:function(e,t){return this.episodeStats[e]&&this.episodeStats[e][t]},onBodyScroll:function(e,t){this.$emit("scroll",t.scrollTop);var i=this.$refs.body.scrollHeight-this.$refs.body.offsetHeight;i<t.scrollTop+100&&this.loadMoreEpisodes()},loadMoreEpisodes:function(){this.displayMoreEpisodes()},setScrollPosition:function(e){this.$refs.body.scrollTop=e},editPath:function(e){return this.getPath("edit-episode",e)},deletePath:function(e){return this.getPath("delete-episode",e)},taskTypePath:function(e){var t={name:"task-type",params:{production_id:this.currentProduction.id,task_type_id:e,type:"count"}};return this.isTVShow&&(t.name="episode-task-type",t.params.episode_id=this.currentEpisode.id),t},getPath:function(e,t){var i={name:e,params:{production_id:this.currentProduction.id,episode_id:t}};return i},toggleExpanded:function(e){this.expanded[e]=!this.expanded[e]}}),watch:{entries:function(){var e=this;this.entries.forEach((function(t){var i=e.expanded[t.id]||!1;T.a.set(e.expanded,t.id,i)}))},isRetakes:function(){var e=this;this.isRetakes||this.entries.forEach((function(t){T.a.set(e.expanded,t.id,!1)}))}}},Y=I,H=(i("0dd5"),Object(S["a"])(Y,O,w,!1,null,"9f70e274",null)),K=H.exports,J=i("4d04");function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function Q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){z(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function z(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var G={name:"episodes",components:{ButtonSimple:c["a"],Combobox:p["a"],EpisodeList:K,EditEpisodeModal:x,HardDeleteModal:u["a"],SearchField:J["a"]},data:function(){return{countMode:"count",dataMode:"retakes",displayMode:"pie",episodeToDelete:null,episodeToEdit:null,isLoading:!0,isLoadingError:!1,countModeOptions:[{label:"shots",value:"count"},{label:"frames",value:"frames"}],dataModeOptions:[{label:"retakes",value:"retakes"},{label:"status",value:"status"}],displayModeOptions:[{label:"pie",value:"pie"},{label:"count",value:"count"}],errors:{edit:!1,del:!1},modals:{isNewDisplayed:!1,isDeleteDisplayed:!1},loading:{edit:!1,del:!1}}},mounted:function(){var e=this;this.setDefaultSearchText(),this.setDefaultListScrollPosition(),this.isLoading=!0,this.isLoadingError=!1,this.initEpisodes().then((function(){e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.isLoadingError=!0,console.error(t)}))},computed:Q(Q({},Object(r["c"])(["currentProduction","displayedEpisodes","episodesPath","isCurrentUserManager","episodes","episodeMap","episodePath","episodeStats","episodeRetakeStats","episodeSearchText","episodeListScrollPosition","episodeValidationColumns","taskStatusMap","taskTypeMap"])),{},{isRetakeDataMode:function(){return"retakes"===this.dataMode}}),methods:Q(Q({},Object(r["b"])(["computeEpisodeStats","deleteEpisode","editEpisode","hideAssignations","initEpisodes","loadEpisodeStats","loadEpisodeRetakeStats","loadShots","setLastProductionScreen","setEpisodeSearch","setEpisodeListScrollPosition","showAssignations"])),{},{setDefaultSearchText:function(){this.episodeSearchText.length>0&&this.$refs["episode-search-field"].setValue(this.episodeSearchText)},setDefaultListScrollPosition:function(){this.$refs["episode-list"].setScrollPosition(this.episodeListScrollPosition)},navigateToList:function(){this.$router.push(this.episodesPath)},onEditClicked:function(e){this.episodeToEdit=e,this.modals.isNewDisplayed=!0},onDeleteClicked:function(e){this.episodeToDelete=e,this.modals.isDeleteDisplayed=!0},confirmEditEpisode:function(e){var t=this;this.loading.edit=!0,this.errors.edit=!1,this.editEpisode(e).then((function(){t.loading.edit=!1,t.modals.isNewDisplayed=!1})).catch((function(){t.loading.edit=!1,t.errors.edit=!0}))},confirmDeleteEpisode:function(){var e=this;this.loading.del=!0,this.errors.edit=!1,this.deleteEpisode(this.episodeToDelete).then((function(){e.loading.del=!1,e.modals.isDeleteDisplayed=!1})).catch((function(){e.loading.del=!1,e.errors.delete=!0}))},resetEditModal:function(){var e={name:""};this.episodes.length>0&&(e.episode_id=this.episodes[0].id),this.openProductions.length>0&&(e.production_id=this.openProductions[0].id),this.episodeToEdit=e},deleteText:function(){var e=this.episodeToDelete;return e?this.$t("episodes.delete_text",{name:e.name}):""},onSearchChange:function(e){var t=this.$refs["episode-search-field"].getValue();this.setEpisodeSearch(t)},saveScrollPosition:function(e){this.setEpisodeListScrollPosition(e)},exportStatisticsToCsv:function(){var e=[n()().format("YYYYMMDD"),this.currentProduction.name,"episodes","statistics"];this.isRetakeDataMode&&e.splice(3,0,"retake");var t=l["a"].slugify(e.join("_"));this.isRetakeDataMode?d["a"].generateRetakeStatReports(t,this.episodeRetakeStats,this.taskTypeMap,this.taskStatusMap,this.episodeMap,this.countMode):d["a"].generateStatReports(t,this.episodeStats,this.taskTypeMap,this.taskStatusMap,this.episodeMap,this.countMode)},onFieldChanged:function(e){var t=e.entry,i=e.fieldName,s=e.value,a={id:t.id};a[i]=s,this.editEpisode(a)},reset:function(){var e=this;this.isLoading=!0,this.isLoadingError=!1,this.loadEpisodeStats(this.currentProduction.id).then((function(){return e.loadEpisodeRetakeStats(e.currentProduction.id)})).then((function(){e.isLoading=!1})).catch((function(t){e.isLoading=!1,e.isLoadingError=!0,console.error(t)}))}}),watch:{displayedEpisodes:function(){},currentProduction:function(){this.$refs["episode-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.reset()}},metaInfo:function(){return{title:"".concat(this.currentProduction.name," ").concat(this.$t("episodes.title")," - Kitsu")}}},W=G,X=Object(S["a"])(W,s,a,!1,null,"79d56d0f",null);t["default"]=X.exports},b131:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("td",{staticClass:"validation"},["pie"===e.displayMode?i("div",{staticClass:"flexrow"},[i("pie-chart",{staticClass:"flexrow-item",attrs:{width:"70px",height:"50px",legend:!1,colors:e.colors,data:e.selectedData}}),e.label?i("span",{staticClass:"tag flexrow-item",style:{"background-color":e.labelColor}},[e._v(" "+e._s(e.label)+" ")]):e._e()],1):i("div",[e._l(e.selectedData,(function(t){return t[0]?i("div",{key:t[0]},[i("span",{staticClass:"stats-name",style:{color:t[2]}},[e._v(" "+e._s(t[0])+" ")]),i("span",[e._v(" : ")]),i("span",{staticClass:"stats-value"},[e._v(" "+e._s(t[1])+" ("+e._s(e.percent(t[1]))+"%) ")])]):e._e()})),e.label?i("span",{staticClass:"tag flexrow-item",style:{"background-color":e.labelColor}},[e._v(" "+e._s(e.label)+" ")]):e._e()],2)])},a=[],o={name:"stats-cell",components:{},props:{colors:{type:Array,required:!0},countMode:{type:String,default:"count"},data:{type:Array,default:function(){return[]}},displayMode:{type:String,default:"pie"},framesData:{type:Array,default:function(){return[]}},label:{type:String,default:""},labelColor:{type:String,default:"#e67e22"}},computed:{selectedData:function(){return"frames"===this.countMode?this.framesData:this.data},total:function(){return this.selectedData.reduce((function(e,t){return t[1]?e+t[1]:e}),0)}},methods:{percent:function(e){var t=0;return this.total>0&&(t=e/this.total*100),t.toFixed(2)}}},n=o,r=(i("9e0d"),i("2877")),d=Object(r["a"])(n,s,a,!1,null,"72ceabce",null);t["a"]=d.exports},c20d:function(e,t,i){},d8b9:function(e,t,i){"use strict";i("5ca3")},e654:function(e,t,i){}}]);
//# sourceMappingURL=chunk-3b5470f8.64d6477d.js.map