(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{261:function(e,r,t){"use strict";t.r(r);t(61);var l=t(19),o={validate:function(e){var r=e.params;return/^\d+$/.test(r.id)},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function r(){var t,l,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.$axios,l=e.params,r.next=3,t.$get("https://my-json-server.typicode.com/tatyanabak/Data-for-user/users/"+l.id);case 3:return o=r.sent,r.abrupt("return",{user:o});case 5:case"end":return r.stop()}}),r)})))()},data:function(){return{user:{login:"",family_name:"",first_name:"",middle_name:"",email:"",phone:"",password:"",secret_word:"",created_at:"",updated_at:""},show:!0}},methods:{goBack:function(){this.$router.go(-1)}}},n=t(50),component=Object(n.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"container"},[t("b-button",{staticClass:"mb-3",on:{click:function(r){return r.preventDefault(),e.goBack()}}},[e._v("Вернуться назад")]),e._v(" "),t("h1",{staticClass:"page-title"},[e._v("Редактировать данные пользователя")]),e._v(" "),e.show?t("b-form",[t("b-form-group",{attrs:{id:"id",label:"id","label-for":"id"}},[t("b-form-input",{attrs:{id:"id",type:"number",placeholder:"id",value:e.user.id,disabled:""},model:{value:e.user.id,callback:function(r){e.$set(e.user,"id",r)},expression:"user.id"}})],1),e._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{id:"familyName",label:"Фамилия","label-for":"familyName"}},[t("b-form-input",{attrs:{id:"familyName",type:"text",placeholder:"Фамилия",value:e.user.family_name},model:{value:e.user.family_name,callback:function(r){e.$set(e.user,"family_name",r)},expression:"user.family_name"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"firstName",label:"Имя","label-for":"firstName","label-cols-sd":""}},[t("b-form-input",{attrs:{id:"firstName",type:"text",placeholder:"Имя",value:e.user.first_name},model:{value:e.user.first_name,callback:function(r){e.$set(e.user,"first_name",r)},expression:"user.first_name"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"middleName",label:"Отчество","label-for":"middleName","label-cols-sd":""}},[t("b-form-input",{attrs:{id:"middleName",type:"text",placeholder:"Отчество",value:e.user.middle_name},model:{value:e.user.middle_name,callback:function(r){e.$set(e.user,"middle_name",r)},expression:"user.middle_name"}})],1)],1),e._v(" "),t("b-col",[t("b-form-group",{attrs:{id:"email",label:"Email","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Email",value:e.user.email},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"phone",label:"Телефон","label-for":"phone"}},[t("b-form-input",{attrs:{id:"phone",type:"tel",placeholder:"Телефон",value:e.user.phone},model:{value:e.user.phone,callback:function(r){e.$set(e.user,"phone",r)},expression:"user.phone"}})],1)],1)],1),e._v(" "),t("b-row",[t("b-col",[t("b-form-group",{attrs:{id:"login",label:"Имя входа","label-for":"login"}},[t("b-form-input",{attrs:{id:"login",type:"text",placeholder:"Имя входа",value:e.user.login},model:{value:e.user.login,callback:function(r){e.$set(e.user,"login",r)},expression:"user.login"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"password",label:"Пароль","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",placeholder:"Пароль",value:e.user.password},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1),e._v(" "),t("b-form-group",{attrs:{id:"secretWord",label:"Секретное слово","label-for":"secretWord"}},[t("b-form-input",{attrs:{id:"secretWord",type:"text",placeholder:"Секретное слово",value:e.user.secret_word},model:{value:e.user.secret_word,callback:function(r){e.$set(e.user,"secret_word",r)},expression:"user.secret_word"}})],1)],1),e._v(" "),t("b-col",[t("label",{attrs:{for:"createdAt"}},[e._v("Дата создания")]),e._v(" "),t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"createdAt",value:e.user.created_at,placeholder:e.user.created_at},model:{value:e.user.created_at,callback:function(r){e.$set(e.user,"created_at",r)},expression:"user.created_at"}}),e._v(" "),t("label",{attrs:{for:"updatedAt"}},[e._v("Дата изменения")]),e._v(" "),t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"updatedAt",value:e.user.updated_at,placeholder:e.user.updated_at},model:{value:e.user.updated_at,callback:function(r){e.$set(e.user,"updated_at",r)},expression:"user.updated_at"}})],1)],1),e._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Сохранить")])],1):e._e()],1)}),[],!1,null,null,null);r.default=component.exports}}]);