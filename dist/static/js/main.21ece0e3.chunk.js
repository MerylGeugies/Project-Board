(window.webpackJsonpmarioplan=window.webpackJsonpmarioplan||[]).push([[0],{216:function(e,t,a){e.exports=a(409)},221:function(e,t,a){},409:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(212),i=a.n(c),l=(a(221),a(21)),o=a(22),s=a(25),u=a(23),m=a(26),p=a(6),d=a(32),h=a(8),f=Object(h.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCES"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(p.c,{to:"/create"}," New Project ")," "),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut}," Log Out ")," "),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)," "))})),E=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(p.c,{to:"/signup"},"Sign Up")," "),r.a.createElement("li",null,r.a.createElement(p.c,{to:"/signin"},"Login")," "))},b=Object(h.b)((function(e){return console.log("state from navbar",e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(f,{profile:a}):r.a.createElement(E,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(p.b,{to:"/",className:"brand-logo"}," MarioPlan "),n))})),g=a(46),O=a.n(g),j=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"}," Notifications "),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"}," ",e.user," "),r.a.createElement("span",null," ",e.content," "),r.a.createElement("div",{className:"grey-text note-date"},O()(e.time.toDate()).fromNow()))}))))))},N=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null," Posted by ",t.authorFirstName," ",t.authorLastName," "),r.a.createElement("p",{className:"grey-text"}," ",O()(t.createdAt.toDate()).calendar()," ")))},v=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(p.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(N,{project:e}))})))},y=a(28),C=a(16),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(v,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(j,{notifications:n})))):r.a.createElement(d.a,{to:"/signin"})}}]),t}(n.Component),S=Object(C.d)(Object(h.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w),P=Object(C.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(y.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"}," ",t.title," "),r.a.createElement("p",null," ",t.content," ")),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null," Posted by ",t.authorFirstName,"  ",t.authorLastName," "),r.a.createElement("div",null," ",O()(t.createdAt.toDate()).calendar()," ")))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null," Loading project... ")):r.a.createElement(d.a,{to:"/signin"})})),R=a(24),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),x=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCES"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(F),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign up"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null," ",a," "):null))))}}]),t}(n.Component),k=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCES"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(I);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var L=function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}},U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Add project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"}," Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(d.a,{to:"/signin"})}}]),t}(n.Component),D=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(L(t))}}}))(U),_=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:S}),r.a.createElement(d.b,{path:"/project/:id",component:P}),r.a.createElement(d.b,{path:"/signin",component:x}),r.a.createElement(d.b,{path:"/signup",component:k}),r.a.createElement(d.b,{path:"/create",component:D}))))}}]),t}(n.Component);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z={authError:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("Login error"),G({},e,{authError:"Login failed"});case"LOGIN_SUCCES":return console.log("Login succes"),G({},e,{authError:null});case"SIGNOUT_SUCCES":return console.log("Signout succes"),e;case"SIGNUP_SUCCES":return console.log("signup succes"),G({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),G({},e,{authError:t.err.message});default:return e}},B={projects:[{id:"1",title:"Help me find Peach",content:"The assignment"},{id:"2",title:"Collect all the stars",content:"The assignment"},{id:"3",title:"Egg hunt with Yoshi",content:"The assignment"}]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},M=a(62),Y=Object(C.c)({auth:J,project:W,firestore:M.firestoreReducer,firebase:y.firebaseReducer}),q=a(215),H=a(91),K=a.n(H);a(404),a(407);K.a.initializeApp({apiKey:"AIzaSyCZo80iLsaL3WocqhPGEIayNuMv9rrxwBY",authDomain:"mario-plan-1c9bc.firebaseapp.com",databaseURL:"https://mario-plan-1c9bc.firebaseio.com",projectId:"mario-plan-1c9bc",storageBucket:"",messagingSenderId:"488627513197",appId:"1:488627513197:web:470dee28482d54a7339c64"}),K.a.firestore().settings({timestampsInSnapshots:!0});var Z=K.a,Q=Object(C.e)(Y,Object(C.d)(Object(C.a)(q.a.withExtraArgument({getFirebase:y.getFirebase,getFirestore:M.getFirestore})),Object(M.reduxFirestore)(Z),Object(y.reactReduxFirebase)(Z,{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0})));Q.firebaseAuthIsReady.then((function(){i.a.render(r.a.createElement(h.a,{store:Q},r.a.createElement(_,null)),document.getElementById("root"))}))}},[[216,1,2]]]);
//# sourceMappingURL=main.21ece0e3.chunk.js.map