(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{472:function(t,e,n){"use strict";n.r(e);var r=n(29),o=n(42),l=n(27),c=n(28),d=n(41),v=n(37),f=n(24),m=n(14),k=(n(92),n(17),n(5),n(77),n(459)),h=n(275);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(v.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(d.a)(m,t);var e,n,v,f=x(m);function m(){var t;return Object(l.a)(this,m),(t=f.apply(this,arguments)).dialog=!1,t.loading=!1,t.defaultItem={id:void 0,title:"",description:"",star:!1,finish:!1},t.editedItem=Object.assign({},t.defaultItem),t.valid=!1,t.rule={titleRule:[function(t){return!!t||"Name is required"}],descriptionRule:[function(t){return!!t||"Description is required"}]},t}return Object(c.a)(m,[{key:"tasks",get:function(){return this._.orderBy(Object(o.a)((null===h.taskStore||void 0===h.taskStore?void 0:h.taskStore.tasks)||[]),["finish","star","id"],["asc","desc","desc"])}},{key:"computedTaskDialogTitle",get:function(){return this.editedItem.id?"Edit Task":"Create Task"}},{key:"onDialogChanged",value:function(t){t||(this.editedItem=Object.assign({},this.defaultItem),this.$refs.form.reset())}},{key:"openDialog",value:function(){this.dialog=!0}},{key:"toggleStar",value:function(t){h.taskStore.toggleStar(t)}},{key:"toggleFinish",value:function(t){h.taskStore.toggleFinish(t)}},{key:"editItem",value:function(t){this.editedItem=Object.assign({},t),this.dialog=!0}},{key:"addItem",value:function(){}},{key:"removeItem",value:(v=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$dialog.confirm({text:"Do you really want to delete this task?",title:"Warning"});case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:h.taskStore.removeTask(e);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})},{key:"saveItem",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$refs.form.validate()){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.$dialog.confirm({text:"Do you really want to save this task?",title:"Warning"});case 4:if(t.sent){t.next=7;break}return t.abrupt("return");case 7:return this.loading=!0,t.prev=8,t.next=11,h.taskStore.saveTask(this.editedItem);case 11:this.dialog=!1;case 12:return t.prev=12,this.loading=!0,t.finish(12);case 15:case"end":return t.stop()}}),t,this,[[8,,12,15]])}))),function(){return n.apply(this,arguments)})},{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,null===h.taskStore||void 0===h.taskStore?void 0:h.taskStore.loadTasks();case 4:return t.prev=4,this.loading=!1,t.finish(4);case 7:case"end":return t.stop()}}),t,this,[[1,,4,7]])}))),function(){return e.apply(this,arguments)})}]),m}(k.b);_([Object(k.c)("dialog")],y.prototype,"onDialogChanged",null);var I=y=_([k.a],y),V=n(99),C=n(149),w=n.n(C),O=n(163),R=n(105),j=n(121),S=n(473),T=n(466),D=n(474),L=n(401),$=n(468),F=n(125),B=n(431),M=n(414),P=n(433),A=n(411),E=n(415),J=n(467),W=n(469),z=n(399),N=n(398),G=n(470),H=n(162),component=Object(V.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-toolbar",{staticClass:"px-2",attrs:{extended:""},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-btn",{attrs:{fab:"",color:"red darken-1",bottom:"",right:"",absolute:""},on:{click:t.openDialog}},[n("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}])},[n("div",{staticClass:"mt-5"},[n("div",{staticClass:"\n          w-full\n          flex-none\n          mt-5\n          order-1\n          text-4xl\n          font-bold\n          text-primary-500\n        "},[t._v("\n        To-Do List\n      ")]),t._v(" "),n("div",{staticClass:"mt-3"},[n("span",{staticClass:"text-secondary-500"},[t._v(t._s(t.$moment().format("dddd Do")))]),t._v("\n        "+t._s(t.$moment().format("MMMM"))+"\n      ")])]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"font-blod"},[t._v(t._s(t.tasks.length)+" tasks")])],1),t._v(" "),n("dir",{staticClass:"mt-5"},[t.loading?n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"list-item-two-line"}}):n("v-list",{attrs:{"two-line":""}},t._l(t.tasks,(function(e){return n("v-list-item",{key:e.id},[n("v-list-item-action",[n("v-checkbox",{attrs:{"input-value":e.finish},on:{click:function(n){return t.toggleFinish(e)}}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{class:{"font-bold":!0,"line-through":e.finish}},[n("div",{staticClass:"text-2xl"},[t._v(t._s(e.title))])]),t._v(" "),n("v-list-item-subtitle",{class:{"line-through":e.finish}},[t._v(t._s(e.description))])],1),t._v(" "),n("v-list-item-icon",[n("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(n){return t.toggleStar(e)}}},[n("v-icon",[t._v("\n              "+t._s(e.star?"mdi-star":"mdi-star-outline")+"\n            ")])],1),t._v(" "),n("v-btn",{attrs:{color:"success",icon:""},on:{click:function(n){return t.editItem(e)}}},[n("v-icon",[t._v("mdi-pencil")])],1),t._v(" "),n("v-btn",{attrs:{color:"error",icon:""},on:{click:function(n){return t.removeItem(e)}}},[n("v-icon",[t._v("mdi-delete")])],1)],1)],1)})),1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v(t._s(t.computedTaskDialogTitle))])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Title",required:"",rules:t.rule.titleRule},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{label:"Description",required:"",rules:t.rule.descriptionRule},model:{value:t.editedItem.description,callback:function(e){t.$set(t.editedItem,"description",e)},expression:"editedItem.description"}})],1)],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.saveItem}},[t._v(" Save ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:O.a,VCard:R.a,VCardActions:j.a,VCardText:j.b,VCardTitle:j.c,VCheckbox:S.a,VCol:T.a,VContainer:D.a,VDialog:L.a,VForm:$.a,VIcon:F.a,VList:B.a,VListItem:M.a,VListItemAction:P.a,VListItemContent:A.a,VListItemIcon:E.a,VListItemSubtitle:A.b,VListItemTitle:A.c,VRow:J.a,VSkeletonLoader:W.a,VSpacer:z.a,VTextField:N.a,VTextarea:G.a,VToolbar:H.a})}}]);