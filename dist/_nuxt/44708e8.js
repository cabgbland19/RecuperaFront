(window.webpackJsonp=window.webpackJsonp||[]).push([[27,10,13],{756:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r,o,l=n(40),c=(n(112),n(444)),d={post:{login:(o=Object(l.a)(regeneratorRuntime.mark((function e(t){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$nuxt.$api.post("login/",t);case 3:n=e.sent,data=n.data,$nuxt.$store.dispatch("localStorage/actUpdateValue",{key:"token",value:data.token}),$nuxt.$store.dispatch("localStorage/actUpdateValue",{key:"username",value:data.username}),"ADMINISTRADOR"===data.username.rol?$nuxt.$router.push({name:"admin-users"}):"ASESOR"===data.username.rol?$nuxt.$router.push({name:"formRecover"}):$nuxt.$router.push({name:"management"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c.a.alert({icon:"error",title:"Ups!",text:"Usuario o contraseña incorrecta",timer:1500,showConfirmButton:!1});case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),function(e){return o.apply(this,arguments)}),logout:(r=Object(l.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$nuxt.$api.post("logout/?token=".concat(t));case 2:$nuxt.$router.push({name:"index"}),$nuxt.$store.dispatch("localStorage/actResetState");case 4:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}}},757:function(e,t,n){var content=n(758);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("5c8fbe94",content,!0,{sourceMap:!1})},758:function(e,t,n){var r=n(12)(!1);r.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=r},760:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r,o,l,c=n(40),d=(n(112),n(444)),f={post:{user:(l=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.username=t.document,t.password=t.document,t.cost_center=$nuxt.$store.state.localStorage.username.cost_center,t.is_active=!0,e.prev=4,e.next=7,$nuxt.$api.post("users/user/",t);case 7:e.sent.data&&($nuxt.$store.dispatch("user.store/actResetState"),$nuxt.$store.dispatch("app/actUpdateValue",{key:"isDialog",value:!1}),$nuxt.refresh(),d.a.alert({title:"Excelente!",text:"Usuario creado",timer:1500})),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(4),n=e.t0.response.data.error.username[0].toUpperCase(),r=n.substr(0,1),o=n.substr(1,n.length).toLowerCase(),d.a.alert({icon:"error",title:"Ups!",text:r+o,timer:2e3});case 18:case"end":return e.stop()}}),e,null,[[4,12]])}))),function(e){return l.apply(this,arguments)})},get:{users:(o=Object(c.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$nuxt.$api.get("users/user/");case 2:return t=e.sent,data=t.data,e.abrupt("return",data.rows);case 5:case"end":return e.stop()}}),e)}))),function(){return o.apply(this,arguments)})},put:{user:(r=Object(c.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$nuxt.$api.put("users/user/".concat(t.id,"/"),t);case 2:e.sent.data&&($nuxt.refresh(),$nuxt.$store.dispatch("user.store/actResetState"),$nuxt.$store.dispatch("app/actUpdateValue",{key:"isDialog",value:!1}),d.a.alert({title:"Excelente!",text:"Usuario actualizado",timer:1500}));case 5:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}}},761:function(e,t,n){"use strict";n.r(t);var r=n(746),o=n(770),l=n(745),c=(n(29),n(756)),d=n(751),f={data:function(){return{isFormValid:!0,rules:{user:[function(e){return!!e||"El campo Usuario es requerido"},function(e){return d.a.onlyNumber.test(e)||"Solo se acepta números"}],password:[function(e){return!!e||"El campo Contraseña es requerido"}]},user:{username:"",password:""}}},methods:{postLogin:c.a.post.login,sendform:function(){this.postLogin(this.user)}},watch:{user:function(e){var t=this;this.$nextTick((function(){t.user=isNaN(e)?e:null}))}},mounted:function(){$nuxt.$store.dispatch("localStorage/actResetState")}},v=n(6),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t(o.a,{on:{submit:function(t){return t.preventDefault(),e.sendform.apply(null,arguments)}},model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[t(l.a,{attrs:{justify:"center"}},[t(r.a,{attrs:{cols:"7"}},[t("Input",{attrs:{label:"Usuario",rules:e.rules.user,model:e.user.username},on:{"update:model":function(t){return e.$set(e.user,"username",t)}}})],1),e._v(" "),t(r.a,{attrs:{cols:"7"}},[t("Input",{attrs:{label:"Contraseña",rules:e.rules.password,type:"password",model:e.user.password,autocomplete:"none"},on:{"update:model":function(t){return e.$set(e.user,"password",t)}}})],1),e._v(" "),t(r.a,{staticClass:"d-flex justify-center",attrs:{cols:"7"}},[t("Button",{attrs:{label:"Ingresar",disabled:!e.isFormValid,type:"submit"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:n(750).default,Button:n(443).default})},762:function(e,t,n){"use strict";n.r(t);var r=n(746),o=n(770),l=n(745),c=(n(10),n(8),n(11),n(3),n(16),n(9),n(17),n(165)),d=n(1),f=(n(29),n(81)),v=n(751),x=n(752),m=n(266),h=n(90),_=n(760);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y={components:{Select:x.default},data:function(){return{isFormValid:!0,rules:{name:[function(e){return!!e||"El nombre es requerido"},function(e){return v.a.onlyLetters.test(e)||"Solo se aceptan letras"}],document:[function(e){return!!e||"El documento es requerido"},function(e){return v.a.onlyNumber.test(e)||"Solo se aceptan numeros"}],campaign:[function(e){return!!e||"La campaña es requerida"}],email:[function(e){return!!e||"El correo es requerido"},function(e){return v.a.onlyEmail.test(e)||"Correo invalido"}],rol:[function(e){return!!e||"El rol es requerido"}],password:[function(e){return!!e||"La contraseña es requerida"}]},itemsSelectRol:[{text:"ADMINISTRADOR",value:1},{text:"ASESOR",value:2},{text:"GESTOR",value:3}],itemsSelectCampaign:[{text:"SEGUNDO ANILLO",value:160},{text:"TERCER ANILLO",value:162}],itemsSelectIsActive:[{text:"ACTIVAR",value:!0},{text:"DESACTIVAR",value:!1}],isNewPassword:!1}},methods:{putUser:_.a.put.user,postUser:_.a.post.user,cancelAction:function(){$nuxt.$store.dispatch("user.store/actResetState"),$nuxt.$store.dispatch("app/actUpdateValue",{key:"isDialog",value:!1})},sendform:function(){this.userItem.id?this.putUser(this.userItem):this.postUser(this.userItem)}},computed:O(O({},Object(f.d)("app",["isDialog"])),Object(h.a)(Object(c.a)(m.b),{path:"user.store",mut:"user.store/setProperty"})),watch:{isDialog:function(e){this.isNewPassword=!1,!this.userItem.id&&e&&this.$refs.form.reset()}}},w=n(6),component=Object(w.a)(y,(function(){var e=this,t=e._self._c;return t(o.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendform.apply(null,arguments)}},model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[t(l.a,{attrs:{dense:""}},[t(r.a,{attrs:{cols:"12"}},[t("Input",{attrs:{label:"Documento",rules:e.rules.document,model:e.userItemDocument,maxlength:"15"},on:{"update:model":function(t){e.userItemDocument=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"12"}},[t("Select",{attrs:{label:"Rol",items:e.itemsSelectRol,rules:e.rules.rol,model:e.userItemRol},on:{"update:model":function(t){e.userItemRol=t}}})],1),e._v(" "),e.userItem.id?t(r.a,{attrs:{cols:"12"}},[t("Select",{attrs:{label:"Estado",items:e.itemsSelectIsActive,model:e.userItemIsActive},on:{"update:model":function(t){e.userItemIsActive=t}}})],1):e._e(),e._v(" "),t(r.a,{staticClass:"d-flex justify-end",attrs:{cols:"12"}},[t("Button",{attrs:{label:"Cancelar",outlined:"",action:e.cancelAction}}),e._v(" "),t("Button",{staticClass:"ml-4",attrs:{label:e.userItem.id?"Editar":"Crear",type:"submit",disabled:!e.isFormValid}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:n(750).default,Select:n(752).default,Button:n(443).default})},763:function(e,t,n){"use strict";n.r(t);var r=n(746),o=n(770),l=n(745),c=(n(10),n(8),n(11),n(3),n(16),n(9),n(17),n(165)),d=n(1),f=(n(29),n(35),n(81)),v=n(751),x=n(755),m=n(90),h=n(268);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={data:function(){return{isFormValid:!0,rules:{correct:[function(e){return!!e||"El estado de la gestion es requerido"}],observation:[function(e){return!!e||"La observacion es requerida"},function(e){return v.a.onlyTextarea.test(e)||"Solo se aceptan letras y numeros"},function(e){return!!e&&e.length<=400||"Maximo 400 caracteres"}]},itemsSelectCorrect:[{text:"GESTION CORRECTA",value:"GESTION CORRECTA"},{text:"GESTION INCORRECTA",value:"GESTION INCORRECTA"}],model:{cuenta:null,contacto:null,gtcaplica:null,tipo_solucion:null,motivo_gtc:null,campo_observacion:null,valor_diferencial:null,marcacion:null,solucionado:null,fecha_solcionado:(new Date).toISOString().split("T")[0],gestor:null,valor_mensual:null,meses_ajuste:null,id_llamada:null,usuario_de_red:null,nombre_asesor:null,team_leader:null,gerente:null}}},methods:{postGestion:x.a.post.gestion,sendform:function(){this.postGestion(this.manageGESUCSitem,"gesucs")}},computed:S(S({},Object(f.d)("localStorage",["username"])),Object(m.a)(Object(c.a)(h.b),{path:"manageGESUCS",mut:"manageGESUCS/setProperty"})),created:function(){this.manageGESUCSitemGestor=this.username.name+" "+this.username.last_name},watch:{manageGESUCSitemObservation:function(e){null!==e&&(this.manageGESUCSitemObservation=e.toUpperCase())}}},y=n(6),component=Object(y.a)(O,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"ma-0"},[t(r.a,{staticClass:"d-flex justify-center align-center",staticStyle:{background:"#1178640f"}},[t(l.a,[t(r.a,{staticClass:"mb-5 text-center",attrs:{cols:"12"}},[t("h3",{staticClass:"primary--text"},[e._v("Cuenta")]),e._v(" "),t("span",{domProps:{textContent:e._s(e.manageGESUCSitemAccount)}})])],1)],1),e._v(" "),t(r.a,{staticStyle:{height:"100vh","overflow-y":"scroll"}},[t(o.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.sendform.apply(null,arguments)}},model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[t(l.a,{attrs:{dense:""}},[t(r.a,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t("h2",{staticClass:"primary--text"},[e._v("Informacion de la cuenta")])]),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{label:"Cuenta",readonly:!0,model:e.manageGESUCSitemAccount},on:{"update:model":function(t){e.manageGESUCSitemAccount=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Cantidad de servicios",model:e.manageGESUCSitemCanServ},on:{"update:model":function(t){e.manageGESUCSitemCanServ=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Paquete",model:e.manageGESUCSitemPackage},on:{"update:model":function(t){e.manageGESUCSitemPackage=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Aliado",model:e.manageGESUCSItemAlly},on:{"update:model":function(t){e.manageGESUCSItemAlly=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Nivel",model:e.manageGESUCSitemlevel},on:{"update:model":function(t){e.manageGESUCSitemlevel=t}}})],1)],1),e._v(" "),t(l.a,{attrs:{dense:""}},[t(r.a,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t("h2",{staticClass:"primary--text"},[e._v("Informacion de la gestion")])]),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Subrazon",model:e.manageGESUCSitemSubReason},on:{"update:model":function(t){e.manageGESUCSitemSubReason=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Fecha unica",model:e.manageGESUCSitemUniqueDate},on:{"update:model":function(t){e.manageGESUCSitemUniqueDate=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Fecha caida",model:e.manageGESUCSitemFallDate},on:{"update:model":function(t){e.manageGESUCSitemFallDate=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Mes gestion",model:e.manageGESUCSitemManageMonth},on:{"update:model":function(t){e.manageGESUCSitemManageMonth=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Dias",model:e.manageGESUCSitemDays},on:{"update:model":function(t){e.manageGESUCSitemDays=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Mes marca",model:e.manageGESUCSitemMarkMonth},on:{"update:model":function(t){e.manageGESUCSitemMarkMonth=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"6"}},[t("Input",{attrs:{readonly:!0,label:"Gestor",model:e.manageGESUCSitemGestor},on:{"update:model":function(t){e.manageGESUCSitemGestor=t}}})],1)],1),e._v(" "),t(l.a,{attrs:{dense:""}},[t(r.a,{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[t("h2",{staticClass:"primary--text"},[e._v("Proceso")])]),e._v(" "),t(r.a,{attrs:{cols:"12"}},[t("Select",{attrs:{label:"Estado de la gestion",rules:e.rules.correct,items:e.itemsSelectCorrect,model:e.manageGESUCSitemCorrect},on:{"update:model":function(t){e.manageGESUCSitemCorrect=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"12"}},[t("Textarea",{attrs:{label:"Observacion",model:e.manageGESUCSitemObservation,rules:e.rules.observation},on:{"update:model":function(t){e.manageGESUCSitemObservation=t}}})],1),e._v(" "),t(r.a,{attrs:{cols:"12"}},[t("Button",{staticClass:"float-right",attrs:{label:"Enviar",type:"submit",disabled:!e.isFormValid}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:n(750).default,Select:n(752).default,Textarea:n(754).default,Button:n(443).default})},766:function(e,t,n){"use strict";n.r(t);var r={props:{nameForm:{type:String,default:"login"}}},o=n(6),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",["login"===e.nameForm?t("FormLogin"):e._e(),e._v(" "),"user"===e.nameForm?t("FormUser"):e._e(),e._v(" "),"manageGTC"===e.nameForm?t("FormManageGTC"):e._e(),e._v(" "),"manageGESUCS"===e.nameForm?t("FormManageGESUCS"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormLogin:n(761).default,FormUser:n(762).default,FormManageGTC:n(767).default,FormManageGESUCS:n(763).default})},770:function(e,t,n){"use strict";var r=n(1),o=(n(57),n(82),n(267),n(11),n(3),n(9),n(89),n(203),n(10),n(8),n(16),n(17),n(21)),l=n(114),c=n(166);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},775:function(e,t,n){"use strict";n(10),n(8),n(11),n(3),n(16),n(9),n(17);var r=n(1),o=(n(14),n(89),n(757),n(768)),l=n(21);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d=Object(l.a)(o.a);t.a=d.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null===(n=t.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},850:function(e,t,n){"use strict";n.r(t);n(10),n(8),n(11),n(3),n(16),n(9),n(17);var r=n(1),o=n(81);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={layout:"empty",middleware:"auth",computed:c(c({},Object(o.d)("localStorage",["username"])),{},{rol:function(){var e=this.username.rol;return e.split(" ")[1]}})},f=n(6),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",["GTC"===e.rol?t("Form",{attrs:{nameForm:"manageGTC"}}):e._e(),e._v(" "),"GESUCS"===e.rol?t("Form",{attrs:{nameForm:"manageGESUCS"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Form:n(766).default})}}]);