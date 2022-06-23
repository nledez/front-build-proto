(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00cdcdbc"],{"0a6b":function(t,e,o){"use strict";o("7ba7")},"38fe":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom-actions page fixed-page"},[o("list-page-header",{attrs:{title:t.$t("custom_actions.title"),"new-entry-label":t.$t("custom_actions.new_custom_action")},on:{"new-clicked":t.onNewClicked}}),o("custom-action-list",{attrs:{entries:t.customActions,"is-loading":t.loading.list,"is-error":t.errors.list},on:{"edit-clicked":t.onEditClicked,"delete-clicked":t.onDeleteClicked}}),o("edit-custom-action-modal",{attrs:{active:t.modals.edit,"is-loading":t.loading.edit,"is-error":t.errors.edit,"custom-action-to-edit":t.customActionToEdit},on:{cancel:function(e){t.modals.edit=!1},confirm:t.confirmEditCustomAction}}),o("delete-modal",{attrs:{active:t.modals.del,"is-loading":t.loading.del,"is-error":t.errors.del,text:t.deleteText,"error-text":t.$t("custom_actions.delete_error")},on:{cancel:function(e){t.modals.delete=!1},confirm:t.confirmDeleteCustomAction}})],1)},n=[],s=o("2f62"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"data-list"},[o("div",{staticClass:"datatable-wrapper"},[o("table",{staticClass:"datatable"},[o("thead",{staticClass:"datatable-head"},[o("tr",[o("th",{staticClass:"name",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("custom_actions.fields.name"))+" ")]),o("th",{staticClass:"url",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("custom_actions.fields.url"))+" ")]),o("th",{staticClass:"entity-type",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("custom_actions.fields.entity_type"))+" ")]),o("th",{staticClass:"is-ajax",attrs:{scope:"col"}},[t._v(" "+t._s(t.$t("custom_actions.fields.is_ajax"))+" ")]),o("th",{staticClass:"actions",attrs:{scope:"col"}},[t._v(" ")])])]),o("tbody",{staticClass:"datatable-body"},t._l(t.entries,(function(e){return o("tr",{key:e.id,staticClass:"datatable-row"},[o("th",{staticClass:"name datatable-row-header",attrs:{scope:"row"}},[t._v(" "+t._s(e.name)+" ")]),o("td",{staticClass:"url"},[t._v(t._s(e.url))]),o("td",{staticClass:"entity-type"},[t._v(t._s(e.entity_type))]),o("td",{staticClass:"is-ajax"},[t._v(" "+t._s(t.formatBoolean(e.is_ajax))+" ")]),o("row-actions-cell",{attrs:{"entry-id":e.id},on:{"edit-clicked":function(o){return t.$emit("edit-clicked",e)},"delete-clicked":function(o){return t.$emit("delete-clicked",e)}}})],1)})),0)])]),o("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),o("p",{staticClass:"has-text-centered nb-custom-actions"},[t._v(" "+t._s(t.entries.length)+" "+t._s(t.$tc("custom_actions.number",t.entries.length))+" ")])],1)},r=[],a=o("31f2"),l=o("14b2"),u=o("e60b");function d(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function m(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach((function(e){f(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function f(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var b={name:"custom-action-list",mixins:[a["a"]],props:["entries","isLoading","isError"],data:function(){return{}},components:{RowActionsCell:l["a"],TableInfo:u["a"]},computed:m({},Object(s["c"])([])),methods:m(m({},Object(s["b"])([])),{},{renderForShots:function(t){return this.$tc("".concat(t.toLowerCase(),".title"))}})},p=b,h=(o("0a6b"),o("2877")),y=Object(h["a"])(p,c,r,!1,null,"20784a65",null),O=y.exports,v=o("5f48"),j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:{modal:!0,"is-active":t.active}},[o("div",{staticClass:"modal-background",on:{click:function(e){return t.$emit("cancel")}}}),o("div",{staticClass:"modal-content"},[o("div",{staticClass:"box"},[t.isEditing()?o("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("custom_actions.edit_title"))+" "+t._s(t.customActionToEdit.name)+" ")]):o("h1",{staticClass:"title"},[t._v(" "+t._s(t.$t("custom_actions.new_custom_action"))+" ")]),o("form",{on:{submit:function(t){t.preventDefault()}}},[o("text-field",{directives:[{name:"focus",rawName:"v-focus"}],ref:"nameField",attrs:{label:t.$t("custom_actions.fields.name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),o("text-field",{ref:"urlField",attrs:{label:t.$t("custom_actions.fields.url")},on:{enter:t.confirmClicked},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}}),o("combobox",{attrs:{label:t.$t("custom_actions.fields.entity_type"),options:t.entityTypeOptions,"locale-key-prefix":"custom_actions.entity_types."},on:{enter:t.confirmClicked},model:{value:t.form.entityType,callback:function(e){t.$set(t.form,"entityType",e)},expression:"form.entityType"}}),o("combobox-boolean",{attrs:{label:t.$t("custom_actions.fields.is_ajax")},on:{enter:t.confirmClicked},model:{value:t.form.isAjax,callback:function(e){t.$set(t.form,"isAjax",e)},expression:"form.isAjax"}})],1),o("modal-footer",{attrs:{"error-text":t.$t("custom_actions.create_error"),"is-error":t.isError},on:{confirm:t.confirmClicked,cancel:function(e){return t.$emit("cancel")}}})],1)])])},_=[],g=o("d065"),w=o("992f"),C=o("4636"),A=o("d5c9"),x=o("7bf8");function E(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function P(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?E(Object(o),!0).forEach((function(e){k(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function k(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var T={name:"edit-custom-action-modal",mixins:[g["a"]],components:{Combobox:w["a"],ComboboxBoolean:C["a"],ModalFooter:A["a"],TextField:x["a"]},props:["onConfirmClicked","text","active","isLoading","isError","errorText","customActionToEdit"],data:function(){return{form:{name:"",url:"",entityType:"all",isAjax:"false"},entityTypeOptions:[{label:"all",value:"all"},{label:"asset",value:"asset"},{label:"shot",value:"shot"}]}},computed:P({},Object(s["c"])(["customActions","customActionStatusOptions"])),methods:P(P({},Object(s["b"])([])),{},{confirmClicked:function(){this.$emit("confirm",this.form)},isEditing:function(){return this.customActionToEdit&&this.customActionToEdit.id}}),watch:{customActionToEdit:function(){this.customActionToEdit&&(this.form={name:this.customActionToEdit.name,url:this.customActionToEdit.url,entityType:this.customActionToEdit.entity_type,isAjax:Boolean(this.customActionToEdit.is_ajax).toString()})},active:function(){var t=this;this.active&&setTimeout((function(){t.$refs.nameField.focus()}),100)}}},$=T,D=(o("8eff"),Object(h["a"])($,j,_,!1,null,"61518db1",null)),S=D.exports,L=o("459c");function F(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function B(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?F(Object(o),!0).forEach((function(e){M(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function M(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var N={name:"custom-actions",components:{CustomActionList:O,DeleteModal:v["a"],EditCustomActionModal:S,ListPageHeader:L["a"]},data:function(){return{modals:{edit:!1,del:!1},loading:{edit:!1,del:!1,list:!1},errors:{edit:!1,del:!1,list:!1},customActionToDelete:null,customActionToEdit:null}},computed:B(B({},Object(s["c"])(["customActions"])),{},{deleteText:function(){var t=this.customActionToDelete;return t?this.$t("custom_actions.delete_text",{name:t.name}):""}}),created:function(){var t=this;this.loading.list=!0,this.errors.list=!1,this.loadCustomActions((function(e){t.loading.list=!1,e&&(t.errors.list=!0)}))},methods:B(B({},Object(s["b"])(["deleteCustomAction","editCustomAction","loadCustomActions","newCustomAction"])),{},{confirmEditCustomAction:function(t){var e=this,o="newCustomAction";this.customActionToEdit&&this.customActionToEdit.id&&(o="editCustomAction",t.id=this.customActionToEdit.id),this.loading.edit=!0,this.errors.edit=!1,this[o](t).then((function(){e.loading.edit=!1,e.modals.edit=!1})).catch((function(t){console.error(t),e.errors.edit=!0,e.modals.isNewDisplayed=!1}))},confirmDeleteCustomAction:function(){var t=this;this.loading.del=!0,this.errors.del=!1,this.deleteCustomAction(this.customActionToDelete).then((function(){t.loading.del=!1,t.modals.del=!1})).catch((function(e){console.error(e),t.errors.del=!0,t.loading.del=!1}))},onNewClicked:function(){this.customActionToEdit={},this.errors.edit=!1,this.modals.edit=!0},onEditClicked:function(t){this.customActionToEdit=t,this.errors.edit=!1,this.modals.edit=!0},onDeleteClicked:function(t){this.customActionToDelete=t,this.errors.del=!1,this.modals.del=!0}}),watch:{$route:function(){this.handleModalsDisplay()}},metaInfo:function(){return{title:"".concat(this.$t("custom_actions.title")," - Kitsu")}}},I=N,J=Object(h["a"])(I,i,n,!1,null,"b2289c12",null);e["default"]=J.exports},"459c":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"level page-header"},[o("div",{staticClass:"level-left"},[o("page-title",{attrs:{text:t.title}})],1),o("div",{staticClass:"level-right"},[o("button-simple",{staticClass:"level-item",attrs:{icon:"plus",text:t.newEntryLabel},on:{click:function(e){return t.$emit("new-clicked")}}})],1)])},n=[],s=o("2f62"),c=o("de40"),r=o("8d07");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){u(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function u(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var d={name:"list-page-header",components:{ButtonSimple:c["a"],PageTitle:r["a"]},props:{title:{type:String,default:""},newEntryLabel:{type:String,default:""}},computed:l({},Object(s["c"])([])),methods:l({},Object(s["b"])([])),watch:{}},m=d,f=o("2877"),b=Object(f["a"])(m,i,n,!1,null,"bf4864ae",null);e["a"]=b.exports},"7ba7":function(t,e,o){},"8eff":function(t,e,o){"use strict";o("ca10")},ca10:function(t,e,o){}}]);
//# sourceMappingURL=chunk-00cdcdbc.81fb556f.js.map