(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52f511ec"],{5795:function(e,t,s){"use strict";s("e6f6")},"9e0d":function(e,t,s){"use strict";s("c20d")},b131:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",{staticClass:"validation"},["pie"===e.displayMode?s("div",{staticClass:"flexrow"},[s("pie-chart",{staticClass:"flexrow-item",attrs:{width:"70px",height:"50px",legend:!1,colors:e.colors,data:e.selectedData}}),e.label?s("span",{staticClass:"tag flexrow-item",style:{"background-color":e.labelColor}},[e._v(" "+e._s(e.label)+" ")]):e._e()],1):s("div",[e._l(e.selectedData,(function(t){return t[0]?s("div",{key:t[0]},[s("span",{staticClass:"stats-name",style:{color:t[2]}},[e._v(" "+e._s(t[0])+" ")]),s("span",[e._v(" : ")]),s("span",{staticClass:"stats-value"},[e._v(" "+e._s(t[1])+" ("+e._s(e.percent(t[1]))+"%) ")])]):e._e()})),e.label?s("span",{staticClass:"tag flexrow-item",style:{"background-color":e.labelColor}},[e._v(" "+e._s(e.label)+" ")]):e._e()],2)])},n=[],a={name:"stats-cell",components:{},props:{colors:{type:Array,required:!0},countMode:{type:String,default:"count"},data:{type:Array,default:function(){return[]}},displayMode:{type:String,default:"pie"},framesData:{type:Array,default:function(){return[]}},label:{type:String,default:""},labelColor:{type:String,default:"#e67e22"}},computed:{selectedData:function(){return"frames"===this.countMode?this.framesData:this.data},total:function(){return this.selectedData.reduce((function(e,t){return t[1]?e+t[1]:e}),0)}},methods:{percent:function(e){var t=0;return this.total>0&&(t=e/this.total*100),t.toFixed(2)}}},o=a,r=(s("9e0d"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,"72ceabce",null);t["a"]=c.exports},b730:function(e,t,s){},bf55:function(e,t,s){"use strict";s("b730")},c20d:function(e,t,s){},c454:function(e,t,s){"use strict";s("ea23")},d214:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sequences page fixed-page"},[s("div",{staticClass:"sequence-list-header page-header flexrow"},[s("search-field",{ref:"sequence-search-field",staticClass:"flexrow-item mt1",attrs:{"can-save":!0,placeholder:"ex: e01 s01 anim=wip"},on:{change:e.onSearchChange,enter:e.saveSearchQuery,save:e.saveSearchQuery}}),s("combobox",{staticClass:"mb0 flexrow-item",attrs:{label:e.$t("statistics.display_mode"),"locale-key-prefix":"statistics.",options:e.displayModeOptions},model:{value:e.displayMode,callback:function(t){e.displayMode=t},expression:"displayMode"}}),s("combobox",{staticClass:"mb0 flexrow-item",attrs:{label:e.$t("statistics.count_mode"),"locale-key-prefix":"statistics.",options:e.countModeOptions},model:{value:e.countMode,callback:function(t){e.countMode=t},expression:"countMode"}}),s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"refresh",title:e.$t("main.reload")},on:{click:e.reloadData}}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"download",title:e.$t("main.csv.export_file")},on:{click:e.exportStatisticsToCsv}})],1),s("div",{staticClass:"query-list mt1"},[s("search-query-list",{attrs:{queries:e.sequenceSearchQueries},on:{"change-search":e.changeSearch,"remove-search":e.removeSearchQuery}})],1),s("sequence-list",{ref:"sequence-list",attrs:{"count-mode":e.countMode,"display-mode":e.displayMode,entries:e.displayedSequences,"is-loading":e.isShotsLoading||e.initialLoading,"is-error":e.isShotsLoadingError,"validation-columns":e.shotValidationColumns,"sequence-stats":e.sequenceStats,"show-all":0===e.sequenceSearchText.length},on:{"delete-clicked":e.onDeleteClicked,"edit-clicked":e.onEditClicked,"field-changed":e.onFieldChanged,scroll:e.saveScrollPosition}}),s("edit-sequence-modal",{attrs:{active:e.modals.isNewDisplayed,"is-loading":e.loading.edit,"is-error":e.errors.edit,"sequence-to-edit":e.sequenceToEdit},on:{cancel:function(t){e.modals.isNewDisplayed=!1},confirm:e.confirmEditSequence}}),s("hard-delete-modal",{attrs:{active:e.modals.isDeleteDisplayed,"is-loading":e.loading.del,"is-error":e.errors.del,text:e.deleteText(),"error-text":e.$t("sequences.delete_error"),"lock-text":e.sequenceToDelete?e.sequenceToDelete.name:""},on:{cancel:function(t){e.modals.isDeleteDisplayed=!1},confirm:e.confirmDeleteSequence}})],1)},n=[],a=s("c1df"),o=s.n(a),r=s("2f62"),c=s("3455"),l=s("8c97"),u=s("de40"),d=s("992f"),h=s("2c1a"),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:{modal:!0,"is-active":e.active}},[s("div",{staticClass:"modal-background",on:{click:function(t){return e.$emit("cancel")}}}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"box"},[e.sequenceToEdit&&this.sequenceToEdit.id?s("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("sequences.edit_title"))+" "+e._s(e.sequenceToEdit.name)+" ")]):s("h1",{staticClass:"title"},[e._v(" "+e._s(e.$t("sequences.new_sequence"))+" ")]),s("form",{on:{submit:function(e){e.preventDefault()}}},[s("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:e.$t("sequences.fields.name")},on:{enter:e.runConfirmation},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),s("textarea-field",{ref:"descriptionField",attrs:{label:e.$t("sequences.fields.description")},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.ctrlKey?e.runConfirmation.apply(null,arguments):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.metaKey?e.runConfirmation.apply(null,arguments):null}]},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),s("modal-footer",{attrs:{"error-text":e.$t("sequences.edit_error"),"is-loading":e.isLoading,"is-error":e.isError},on:{confirm:e.confirmClicked,cancel:function(t){return e.$emit("cancel")}}})],1)])])},p=[],m=s("d065"),y=s("d5c9"),S=s("7bf8"),b=s("1149");function q(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function v(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?q(Object(s),!0).forEach((function(t){g(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):q(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function g(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var C={name:"edit-sequence-modal",mixins:[m["a"]],components:{ModalFooter:y["a"],TextField:S["a"],TextareaField:b["a"]},props:["onConfirmClicked","text","active","cancelRoute","isError","isLoading","isLoadingStay","isSuccess","sequenceToEdit","errorText"],data:function(){return this.sequenceToEdit&&this.sequenceToEdit.id?{form:{id:this.sequenceToEdit.id,name:this.sequenceToEdit.name,description:this.sequenceToEdit.description,production_id:this.sequenceToEdit.project_id},sequenceSuccessText:""}:{form:{id:"",name:"",description:"",fps:""},sequenceSuccessText:""}},computed:v({},Object(r["c"])(["currentProduction"])),methods:v(v({},Object(r["b"])([])),{},{runConfirmation:function(){this.confirmClicked()},confirmClicked:function(){this.$emit("confirm",this.form)},isEditing:function(){return this.sequenceToEdit&&this.sequenceToEdit.id},resetForm:function(){this.sequenceSuccessText="",this.isEditing()?this.form={id:this.sequenceToEdit.id,name:this.sequenceToEdit.name,description:this.sequenceToEdit.description}:(this.form.id=null,this.form.name="",this.form.description="")}}),mounted:function(){this.resetForm()},watch:{active:function(){this.resetForm()},sequenceToEdit:function(){this.resetForm()}}},_=C,O=(s("bf55"),s("2877")),w=Object(O["a"])(_,f,p,!1,null,"38348d98",null),E=w.exports,x=s("4d04"),T=s("55ce"),D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"data-list"},[s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onBodyScroll,expression:"onBodyScroll"}],ref:"body",staticClass:"datatable-wrapper"},[s("table",{staticClass:"datatable"},[s("thead",{staticClass:"datatable-head"},[s("tr",[s("th",{ref:"th-sequence",staticClass:"name datatable-row-header",attrs:{scope:"col"}},[e._v(" "+e._s(e.$t("shots.fields.sequence"))+" ")]),s("th",{staticClass:"description",attrs:{scope:"col"}},[e._v(e._s(e.$t("shots.fields.description")))]),s("th",{staticClass:"validation",attrs:{scope:"col"}},[e._v(e._s(e.$t("main.all")))]),e._l(e.validationColumns,(function(t){return e.isLoading?e._e():s("th",{key:t,staticClass:"validation validation-cell",attrs:{scope:"col"}},[s("div",{staticClass:"flexrow validation-content",style:e.getValidationStyle(t)},[e.isCurrentUserClient?s("span",{staticClass:"flexrow-item"},[e._v(" "+e._s(e.taskTypeMap.get(t).name)+" ")]):s("router-link",{staticClass:"flexrow-item",attrs:{to:e.taskTypePath(t)}},[e._v(" "+e._s(e.taskTypeMap.get(t).name)+" ")])],1)])})),s("th",{staticClass:"actions",attrs:{scope:"col"}})],2)]),e.isLoading?e._e():s("tbody",{staticClass:"datatable-body"},[e.showAll&&!e.isEmptyList?s("tr",{staticClass:"all-line datatable-row"},[s("th",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[e._v(" "+e._s(e.$t("sequences.all_sequences"))+" ")]),s("td",{staticClass:"description"}),s("stats-cell",{staticClass:"all-validation",attrs:{colors:e.chartColors("all","all"),data:e.chartData("all","all"),"frames-data":e.chartData("all","all","frames"),countMode:e.countMode,displayMode:e.displayMode}}),e._l(e.validationColumns,(function(t){return s("stats-cell",{key:"all-"+t,style:e.getValidationStyle(t),attrs:{colors:e.chartColors("all",t),data:e.chartData("all",t),"frames-data":e.chartData("all",t,"frames"),countMode:e.countMode,displayMode:e.displayMode}})})),s("td",{staticClass:"actions"})],2):e._e(),e._l(e.entries,(function(t){return e.isEntryStats(t.id)?s("tr",{key:t.id,staticClass:"datatable-row"},[s("th",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[e._v(" "+e._s(t.name)+" ")]),s("description-cell",{staticClass:"description",attrs:{editable:e.isCurrentUserManager,entry:t},on:{"description-changed":function(s){return e.onDescriptionChanged(t,s)}}}),e.isStats(t.id,"all")?s("stats-cell",{attrs:{colors:e.chartColors(t.id,"all"),data:e.chartData(t.id,"all"),"frames-data":e.chartData(t.id,"all","frames"),countMode:e.countMode,displayMode:e.displayMode}}):s("td"),e._l(e.validationColumns,(function(i){return e.isStats(t.id,i)?s("stats-cell",{key:t.id+i,style:e.getValidationStyle(i),attrs:{colors:e.chartColors(t.id,i),data:e.chartData(t.id,i),"frames-data":e.chartData(t.id,i,"frames"),countMode:e.countMode,displayMode:e.displayMode}}):s("td",{style:e.getValidationStyle(i)})})),e.isCurrentUserManager?s("row-actions-cell",{attrs:{entry:t},on:{"edit-clicked":function(s){return e.$emit("edit-clicked",t)},"delete-clicked":function(s){return e.$emit("delete-clicked",t)}}}):s("td",{staticClass:"actions"})],2):e._e()}))],2)])]),s("table-info",{attrs:{"is-loading":e.isLoading,"is-error":e.isError}}),!e.isEmptyList||e.isCurrentUserClient||e.isLoading?e._e():s("div",{staticClass:"has-text-centered"},[e._m(0),s("p",{staticClass:"info"},[e._v(e._s(e.$t("sequences.empty_list")))])]),e.isEmptyList&&e.isCurrentUserClient&&!e.isLoading?s("div",{staticClass:"has-text-centered"},[e._m(1),s("p",{staticClass:"info"},[e._v(e._s(e.$t("sequences.empty_list_client")))])]):e._e(),e.isEmptyList||e.isLoading?e._e():s("p",{staticClass:"has-text-centered nb-sequences"},[e._v(" "+e._s(e.displayedSequencesLength)+" "+e._s(e.$tc("sequences.number",e.displayedSequencesLength))+" ")])],1)},M=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"info"},[i("img",{attrs:{src:s("732b")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",{staticClass:"info"},[i("img",{attrs:{src:s("732b")}})])}],k=s("09d3"),P=s("5097"),j=s("0fcb"),$=s("14b2"),L=s("e60b"),V=s("b131");function F(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function A(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?F(Object(s),!0).forEach((function(t){N(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):F(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function N(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var Q={name:"sequence-list",mixins:[P["a"]],components:{DescriptionCell:j["a"],RowActionsCell:$["a"],StatsCell:V["a"],TableInfo:L["a"]},props:{countMode:{type:String,default:"count"},displayMode:{type:String,default:"pie"},entries:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1},sequenceStats:{type:Object,default:function(){}},showAll:{type:Boolean,default:!1},validationColumns:{type:Array,default:function(){return[]}}},data:function(){return{busy:!1,lastSelection:null}},computed:A(A({},Object(r["c"])(["currentProduction","currentEpisode","displayedSequencesLength","isDarkTheme","isCurrentUserClient","isCurrentUserManager","isTVShow","sequenceSearchText","taskTypeMap"])),{},{isEmptyList:function(){return this.entries&&0===this.entries.length&&!this.isLoading&&!this.isError&&(!this.sequenceSearchText||0===this.sequenceSearchText.length)}}),methods:A(A({},Object(r["b"])(["displayMoreSequences","loadMoreSequences"])),{},{chartColors:function(e,t){return Object(k["b"])(this.sequenceStats,e,t)},chartData:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"count";return Object(k["c"])(this.sequenceStats,e,t,s)},isStats:function(e,t){return this.sequenceStats[e]&&this.sequenceStats[e][t]},isEntryStats:function(e){var t=this;if(!this.sequenceStats[e]&&this.sequenceSearchText)return!1;if(!this.sequenceStats[e])return!0;var s=!1;return Object.keys(this.sequenceStats[e]).forEach((function(i){s=s||t.sequenceStats[e][i]})),s},onBodyScroll:function(e,t){this.$emit("scroll",t.scrollTop);var s=this.$refs.body.scrollHeight-this.$refs.body.offsetHeight;s<t.scrollTop+100&&this.loadMoreSequences()},loadMoreSequences:function(){this.displayMoreSequences()},setScrollPosition:function(e){this.$refs.body&&(this.$refs.body.scrollTop=e)},editPath:function(e){return this.getPath("edit-sequence",e)},deletePath:function(e){return this.getPath("delete-sequence",e)},taskTypePath:function(e){var t={name:"task-type",params:{production_id:this.currentProduction.id,task_type_id:e,type:"shots"}};return this.isTVShow&&this.currentEpisode&&(t.name="episode-task-type",t.params.episode_id=this.currentEpisode.id),t},getPath:function(e,t){var s={name:e,params:{production_id:this.currentProduction.id}};return this.isTVShow&&this.currentEpisode&&(s.name="episode-".concat(e),s.params.episode_id=this.currentEpisode.id),t&&(s.params.sequence_id=t),s}})},U=Q,B=(s("c454"),Object(O["a"])(U,D,M,!1,null,"21ee9736",null)),I=B.exports;function K(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function R(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?K(Object(s),!0).forEach((function(t){Y(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):K(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function Y(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var H={name:"sequences",components:{ButtonSimple:u["a"],Combobox:d["a"],HardDeleteModal:h["a"],EditSequenceModal:E,SearchField:x["a"],SearchQueryList:T["a"],SequenceList:I},data:function(){return{countMode:"count",displayMode:"pie",initialLoading:!0,sequenceToDelete:null,sequenceToEdit:null,countModeOptions:[{label:"shots",value:"count"},{label:"frames",value:"frames"}],displayModeOptions:[{label:"pie",value:"pie"},{label:"count",value:"count"}],errors:{edit:!1,del:!1},loading:{edit:!1,del:!1},modals:{isNewDisplayed:!1,isDeleteDisplayed:!1}}},computed:R({},Object(r["c"])(["currentEpisode","currentProduction","displayedSequences","isCurrentUserManager","isShotsLoading","isShotsLoadingError","isTVShow","searchSequenceFilters","sequences","sequenceMap","sequencesPath","sequenceStats","sequenceSearchText","sequenceSearchQueries","sequenceListScrollPosition","shotValidationColumns","taskTypeMap","taskStatusMap"])),mounted:function(){var e=this;this.loadShots((function(){e.initSequences().then((function(){e.initialLoading=!1})).catch((function(e){return console.error(e)})),e.setDefaultSearchText(),e.setDefaultListScrollPosition()}))},methods:R(R({},Object(r["b"])(["computeSequenceStats","deleteSequence","editSequence","hideAssignations","initSequences","loadShots","removeSequenceSearch","saveSequenceSearch","setLastProductionScreen","setSequenceSearch","setSequenceListScrollPosition","showAssignations"])),{},{reloadData:function(){var e=this;this.initialLoading=!0,this.loadShots((function(){e.initialLoading=!1,e.computeSequenceStats()}))},setDefaultSearchText:function(){this.sequenceSearchText.length>0&&this.$refs["sequence-search-field"].setValue(this.sequenceSearchText)},setDefaultListScrollPosition:function(){this.$refs["sequence-list"]&&this.$refs["sequence-list"].setScrollPosition(this.sequenceListScrollPosition)},navigateToList:function(){this.$router.push(this.sequencesPath)},confirmEditSequence:function(e){var t=this;this.loading.edit=!0,this.errors.edit=!1,this.editSequence(e).then((function(){t.loading.edit=!1,t.modals.isNewDisplayed=!1})).catch((function(e){console.error(e),t.loading.edit=!1,t.errors.edit=!0}))},confirmDeleteSequence:function(){var e=this;this.loading.del=!0,this.deleteSequence(this.sequenceToDelete).then((function(){e.loading.del=!1,e.modals.isDeleteDisplayed=!1})).catch((function(t){console.error(t),e.loading.del=!1,e.errors.del=!0}))},resetEditModal:function(){var e={name:""};this.sequences.length>0&&(e.sequence_id=this.sequences[0].id),this.openProductions.length>0&&(e.production_id=this.openProductions[0].id),this.sequenceToEdit=e},deleteText:function(){var e=this.sequenceToDelete;return e?this.$t("sequences.delete_text",{name:e.name}):""},onEditClicked:function(e){this.sequenceToEdit=e,this.modals.isNewDisplayed=!0},onDeleteClicked:function(e){this.sequenceToDelete=e,this.modals.isDeleteDisplayed=!0},onSearchChange:function(e){var t=this.$refs["sequence-search-field"].getValue();this.setSequenceSearch(t)},changeSearch:function(e){this.$refs["sequence-search-field"].setValue(e.search_query),this.$refs["sequence-search-field"].$emit("change",e.search_query)},saveSearchQuery:function(e){this.saveSequenceSearch(e).catch(console.error)},removeSearchQuery:function(e){this.removeSequenceSearch(e).catch(console.error)},saveScrollPosition:function(e){this.setSequenceListScrollPosition(e)},exportStatisticsToCsv:function(){var e=[o()().format("YYYYMMDD"),this.currentProduction.name,"sequences","statistics"];this.currentEpisode&&e.splice(2,0,this.currentEpisode.name);var t=l["a"].slugify(e.join("_"));c["a"].generateStatReports(t,this.sequenceStats,this.taskTypeMap,this.taskStatusMap,this.sequenceMap,this.countMode)},onFieldChanged:function(e){var t=e.entry,s=e.fieldName,i=e.value,n={id:t.id};n[s]=i,this.editSequence(n)}}),watch:{currentProduction:function(){var e=this;this.$refs["sequence-search-field"].setValue(""),this.$store.commit("SET_SEQUENCE_LIST_SCROLL_POSITION",0),this.isTVShow||this.loadShots((function(){e.initSequences().then(e.handleModalsDisplay).catch((function(e){return console.error(e)}))}))},currentEpisode:function(){var e=this;this.isTVShow&&this.currentEpisode&&this.loadShots((function(){e.initSequences().then(e.handleModalsDisplay).then((function(){e.initialLoading=!1})).catch((function(e){return console.error(e)}))}))},searchSequenceFilters:function(){this.computeSequenceStats()}},metaInfo:function(){return this.isTVShow?{title:"".concat(this.currentProduction?this.currentProduction.name:"")+" - ".concat(this.currentEpisode?this.currentEpisode.name:"")+" | ".concat(this.$t("sequences.title")," - Kitsu")}:{title:"".concat(this.currentProduction?this.currentProduction.name:"")+" ".concat(this.$t("sequences.title")," - Kitsu")}}},J=H,z=(s("5795"),Object(O["a"])(J,i,n,!1,null,"5532da34",null));t["default"]=z.exports},e6f6:function(e,t,s){},ea23:function(e,t,s){}}]);
//# sourceMappingURL=chunk-52f511ec.8d66fac7.js.map