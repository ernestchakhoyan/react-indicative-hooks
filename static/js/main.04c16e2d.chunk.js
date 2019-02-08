(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),i=a.n(l);a(9);function s(){return r.a.createElement("hr",{className:"border-dashed border-grey border my-10"})}function c(e){return r.a.createElement("pre",Object.assign({className:"bg-grey-darkest text-white p-5 m-5 rounded-sm"},e))}function m(e){return r.a.createElement("a",Object.assign({},e,{className:"block sm:inline-block text-blue-lighter hover:text-white mr-5"}),e.children)}function o(){return r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.npmjs.com/package/react-indicative-hooks",className:"inline-block text-sm p-2 rounded text-blue-darkest bg-white hover:bg-blue-dark hover:text-white no-underline"},"Go to NPM"))}function u(){return r.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-blue-darkest p-6 mb-5 fixed w-screen"},r.a.createElement("div",{className:"flex items-center flex-no-shrink text-white mr-6"},r.a.createElement("span",{className:"text-xl"},r.a.createElement("span",{role:"img","aria-label":"react-indicative-hooks"},"\u2708\ufe0f \ufe0f\ufe0f")," ","React Indicative Hooks")),r.a.createElement("div",{className:"w-full block flex-grow sm:flex sm:items-center sm:w-auto"},r.a.createElement("div",{className:"text-sm sm:flex-grow"},r.a.createElement(m,{href:"#install"},"Installing"),r.a.createElement(m,{href:"#api"},"API & Examples"),r.a.createElement(m,{target:"_blank",href:"https://github.com/marceloadsj/react-indicative-hooks"},"Repository in Github")),r.a.createElement(o,null)))}function d(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,"rules: Check all available rules"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://indicative.adonisjs.com/"},"here")),r.a.createElement("li",null,"messages: Check how you can use messages"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://indicative.adonisjs.com/docs/templating"},"here")),r.a.createElement("li",null,"formatter: Check how to use formatters"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://indicative.adonisjs.com/docs/formatters"},"here")))}function h(e){var t=e.title,a=e.params;return r.a.createElement("h4",{className:"mb-3"},r.a.createElement("span",{className:"text-blue-dark"},t)," ( ",a.join(" , ")," )")}function p(e){var t=e.children,a=e.indicativeParams;return r.a.createElement("ul",{className:"text-sm leading-loose"},t,a&&r.a.createElement(d,null))}function f(e){return r.a.createElement("p",Object.assign({className:"mb-3"},e))}function E(e){var t=e.name,a=e.title,n=e.children,l=e.className;return r.a.createElement("section",null,r.a.createElement("div",{id:t,className:l}),r.a.createElement("h3",{className:"mb-5"},a),n)}function g(){return r.a.createElement(E,{name:"install",title:"Installing",className:"h-24"},r.a.createElement(f,null,"Check how you can install and use the library with validation integrated with"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://indicative.adonisjs.com"},"Indicative")),r.a.createElement(c,null,"npm install react-indicative-hooks --save"),r.a.createElement(c,null,"yarn add react-indicative-hooks"),r.a.createElement(s,null))}function v(){return r.a.createElement(E,{name:"api",title:"API & Examples"},r.a.createElement(f,null,"Validate a single state with some direct configurations, using the validate Indicative function:"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://indicative.adonisjs.com/docs/api/validate"},"validate")),r.a.createElement(h,{title:"useStateValidator",params:["initialState","rules","messages","formatter"]}),r.a.createElement(p,{indicativeParams:!0},r.a.createElement("li",null,'initialState: The state that your input starts with, like the empty string used in useState("")')),r.a.createElement(c,null,'import React from "react";\nimport { useStateValidator } from "react-indicative-hooks";\n\nconst rules = "required";\n\nconst messages = {\n  required: "Please, fill the input with some data"\n};\n\nexport default function Input() {\n  const [value, setValue, error] = useStateValidator("", rules, messages);\n\n  return (\n    <>\n      <input value={value} onChange={e => setValue(e.target.value)} />\n      <br />\n      <p>{error && error.message}</p>\n    </>\n  );\n}'),r.a.createElement(s,null),r.a.createElement(h,{title:"useValidator",params:["data","rules","messages","formatter"]}),r.a.createElement(p,{indicativeParams:!0},r.a.createElement("li",null,"data: The object you want to validate with all fields matching the rules, check"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://indicative.adonisjs.com/docs/api/validate"},"here"))),r.a.createElement(c,null,'import React, { useState } from "react";\nimport { useValidate } from "react-indicative-hooks";\n\nconst rules = {\n  name: "required",\n  email: "required|email"\n};\n\nconst messages = {\n  "name.required": "Please, fill the name input with some data",\n  "email.email": "You need to enter a valid email"\n};\n\nexport default function Form() {\n  const [name, setName] = useState("");\n  const [email, setEmail] = useState("");\n\n  const error = useValidate({ name, email }, rules, messages);\n\n  return (\n    <>\n      <input value={name} onChange={e => setName(e.target.value)} />\n      <br />\n      <input value={email} onChange={e => setEmail(e.target.value)} />\n      <br />\n      <p>{error && error.message}</p>\n    </>\n  );\n}'))}i.a.render(r.a.createElement(function(){return r.a.createElement("div",{className:"min-h-screen bg-grey-light"},r.a.createElement(u,null),r.a.createElement("main",{className:"p-5"},r.a.createElement(g,null),r.a.createElement(v,null)))},null),document.getElementById("root"))},3:function(e,t,a){e.exports=a(11)},9:function(e,t,a){}},[[3,2,1]]]);
//# sourceMappingURL=main.04c16e2d.chunk.js.map