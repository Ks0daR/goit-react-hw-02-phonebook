(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={form:"InputForm_form__1UW_D",submit:"InputForm_submit__2D-iR"}},function(e,t,n){e.exports={list:"Contacts_list__3xrE9",listElement:"Contacts_listElement__2wceg",buttonList:"Contacts_buttonList__1e0DT"}},function(e,t,n){e.exports={primary:"App_primary__1wyo7",secondary:"App_secondary__3rWh3 App_primary__1wyo7"}},,,function(e,t,n){e.exports={layout:"Layout_layout__22Oim"}},,function(e,t,n){e.exports={search:"FilterForm_search__3xFSN"}},,,function(e,t,n){e.exports=n(24)},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),l=n(15),u=n(1),s=n(2),i=n(4),m=n(3),h=n(5),f=n(11),p=n.n(f),b=function(e){var t=e.children;return r.a.createElement("div",{className:p.a.layout},t)},d=n(12),v=n(6),y=n.n(v),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.number;n.props.onAddContacts(a,r),n.setState({name:"",number:""})},n.handleChangeData=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return console.log(y.a.form),r.a.createElement("form",{className:y.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",null,r.a.createElement("h3",null,"Name:"),r.a.createElement("input",{value:t,placeholder:"Enter name...",name:"name",onChange:this.handleChangeData}),r.a.createElement("h3",null,"Phone number: "),r.a.createElement("input",{value:n,name:"number",onChange:this.handleChangeData,placeholder:"Enter phone..."}),r.a.createElement("br",null),r.a.createElement("button",{className:y.a.submit,type:"submit"},"Add contact"),r.a.createElement("br",null)))}}]),t}(a.Component),E=n(7),C=n.n(E);function g(e){var t=e.elements,n=e.onRemoveContacts;return r.a.createElement("ul",{className:C.a.list},t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{className:C.a.listElement,key:t},a," ",c,r.a.createElement("button",{type:"button",className:C.a.buttonList,onClick:function(){return n(t)}},"Delete"))})))}var O=n(13),S=n.n(O);function j(e){var t=e.filterValue,n=e.onSearchQuery;return r.a.createElement("label",{className:S.a.search},r.a.createElement("input",{value:t,onChange:n}))}var k=n(14),w=n.n(k);function N(e,t){return{id:w()(),name:e,number:t}}var D=n(8),x=n.n(D),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],searchQuery:""},n.addContacts=function(e,t){n.checkedDoubleInput(e)?alert("".concat(e," \u0435\u0441\u0442\u044c \u0432 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0435!")):n.setState((function(n){return{contacts:[].concat(Object(l.a)(n.contacts),[N(e,t)])}}))},n.checkedDoubleInput=function(e){return n.state.contacts.find((function(t){return t.name===e}))},n.handleSearchQuery=function(e){var t=e.target.value;n.setState({searchQuery:t})},n.filteredContacts=function(){var e=n.state,t=e.searchQuery;return e.contacts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},n.removeContacts=function(e){console.log(e),n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.searchQuery,a=this.filteredContacts();return r.a.createElement(b,null,r.a.createElement("h1",{className:x.a.primary},"Phonebook"),r.a.createElement(_,{onAddContacts:this.addContacts,contacts:t}),r.a.createElement("h2",{className:x.a.secondary},"Contacts"),t.length>1&&r.a.createElement(j,{onSearchQuery:this.handleSearchQuery,filterValue:n}),r.a.createElement(g,{elements:0===n.length?t:a,onRemoveContacts:this.removeContacts}))}}]),t}(a.Component);n(23);o.a.render(r.a.createElement(A,null),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.23ebbe37.chunk.js.map