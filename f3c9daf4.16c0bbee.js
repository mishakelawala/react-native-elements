(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{261:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return j}));var n=a(2),r=a(6),b=(a(0),a(284)),c=a(286),l={id:"forms",title:"Forms"},i={unversionedId:"forms",id:"version-0.19.1/forms",isDocsHomePage:!1,title:"Forms",description:"Components for managing forms. Includes FormLabel, FormInput and FormValidationMessage.",source:"@site/versioned_docs/version-0.19.1/forms.md",permalink:"/react-native-elements/docs/0.19.1/forms",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-0.19.1/forms.md",version:"0.19.1",sidebar:"version-0.19.1/docs",previous:{title:"Divider",permalink:"/react-native-elements/docs/0.19.1/divider"},next:{title:"Header",permalink:"/react-native-elements/docs/0.19.1/header"}},o=[{value:"Usage",id:"usage",children:[]},{value:"FormLabel",id:"formlabel",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>labelStyle</code>",id:"labelstyle",children:[]},{value:"<code>fontFamily</code>",id:"fontfamily",children:[]}]},{value:"FormValidationMessage",id:"formvalidationmessage",children:[{value:"<code>containerStyle</code>",id:"containerstyle-1",children:[]},{value:"<code>labelStyle</code>",id:"labelstyle-1",children:[]},{value:"<code>fontFamily</code>",id:"fontfamily-1",children:[]}]},{value:"FormInput",id:"forminput",children:[{value:"<code>containerStyle</code>",id:"containerstyle-2",children:[]},{value:"<code>inputStyle</code>",id:"inputstyle",children:[]},{value:"<code>textInputRef</code>",id:"textinputref",children:[]},{value:"<code>containerRef</code>",id:"containerref",children:[]},{value:"<code>shake</code>",id:"shake",children:[]},{value:"FormInput Methods",id:"forminput-methods",children:[]},{value:"FormInput Shake example",id:"forminput-shake-example",children:[]}]}],p={rightToc:o};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Components for managing forms. Includes ",Object(b.b)("inlineCode",{parentName:"p"},"FormLabel"),", ",Object(b.b)("inlineCode",{parentName:"p"},"FormInput")," and ",Object(b.b)("inlineCode",{parentName:"p"},"FormValidationMessage"),"."),Object(b.b)("img",{alt:"Forms",src:Object(c.a)("img/forms_fields.png")}),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'\n\n<FormLabel>Name</FormLabel>\n<FormInput onChangeText={someFunction}/>\n<FormValidationMessage>Error message</FormValidationMessage>\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"formlabel"},"FormLabel"),Object(b.b)("p",null,"Label above the FormInput. Can be used to describe the type of field (e.g Email)."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#labelstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"labelStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#fontfamily"}),Object(b.b)("inlineCode",{parentName:"a"},"fontFamily")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"containerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"additional label container style (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("h3",{id:"labelstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"labelStyle")),Object(b.b)("p",null,"additional label styling (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("h3",{id:"fontfamily"},Object(b.b)("inlineCode",{parentName:"h3"},"fontFamily")),Object(b.b)("p",null,"specify different font family"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"System font bold (iOS), Sans Serif Bold (android)")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"formvalidationmessage"},"FormValidationMessage"),Object(b.b)("p",null,"Providers feedback to user about their input - usually an error message."),Object(b.b)("p",null,"This component is only styled version of the Text component. You have to handle the error logic yourself. Basically, if you have an error, display the FormValidationMesage, if not, display nothing."),Object(b.b)("img",{alt:"FormValidationMessage example",src:Object(c.a)("img/forms_validation.png")}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<FormValidationMessage>{'This field is required'}</FormValidationMessage>\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#labelstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"labelStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#fontfamily"}),Object(b.b)("inlineCode",{parentName:"a"},"fontFamily")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"containerstyle-1"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"additional label container style (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"labelstyle-1"},Object(b.b)("inlineCode",{parentName:"h3"},"labelStyle")),Object(b.b)("p",null,"additional label styling (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"fontfamily-1"},Object(b.b)("inlineCode",{parentName:"h3"},"fontFamily")),Object(b.b)("p",null,"specify different font family"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"System font bold (iOS), Sans Serif Bold (android)")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"forminput"},"FormInput"),Object(b.b)("p",null,"Allows the user to input text."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"This component inherits ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/textinput.html"}),"all native TextInput props that come with a standard React Native TextInput element"),", along with the following:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#inputstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"inputStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#textinputref"}),Object(b.b)("inlineCode",{parentName:"a"},"textInputRef"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#containerref"}),Object(b.b)("inlineCode",{parentName:"a"},"containerRef"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#shake"}),Object(b.b)("inlineCode",{parentName:"a"},"shake")))),Object(b.b)("h3",{id:"containerstyle-2"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"TextInput container styling (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"inputstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"inputStyle")),Object(b.b)("p",null,"TextInput styling (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"textinputref"},Object(b.b)("inlineCode",{parentName:"h3"},"textInputRef")),Object(b.b)("p",null,"get ref of TextInput"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ref"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"containerref"},Object(b.b)("inlineCode",{parentName:"h3"},"containerRef")),Object(b.b)("p",null,"get ref of TextInput container"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"ref"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"shake"},Object(b.b)("inlineCode",{parentName:"h3"},"shake")),Object(b.b)("p",null,"shake the textinput if not a falsy value and different from the previous value"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"all comparable types (",Object(b.b)("inlineCode",{parentName:"td"},"==="),")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"forminput-methods"},"FormInput Methods"),Object(b.b)("br",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shake"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"shake the textinput, eg ",Object(b.b)("inlineCode",{parentName:"td"},"this.refs.someInputRef.shake()"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"focus"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"call focus on the textinput")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blur"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"call blur on the textinput")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"clearText"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"call clear on the textinput")))),Object(b.b)("p",null,"Store a reference to the FormInput in your component by using the ref prop provided by React (",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/refs-and-the-dom.html"}),"see docs"),"):"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<FormInput ref={(input) => (this.input = input)} />\n")),Object(b.b)("p",null,"You can then access FormInput methods like so:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"this.input.focus();\nthis.input.blur();\nthis.input.clearText();\nthis.refs.forminput.refs.email\n")),Object(b.b)("h3",{id:"forminput-shake-example"},"FormInput Shake example"),Object(b.b)("h4",{id:"using-refs"},"Using refs"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"errorHandler() {\n  if (this.state.error) {\n    this.formInput.shake()\n  }\n}\n\n<TextInput\n  ref={ref => this.formInput = ref}\n/>\n")),Object(b.b)("h4",{id:"using-props"},"Using props"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"<TextInput shake={!this.state.error ? false : true} {...props} />\n")),Object(b.b)("p",null,"If you want to shake the input each time an error occurs, you can compare objects.\nEach time an error occurs, it'll create a new object and trigger shake."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"  errorHandler(code, message) {\n    this.setState({\n      error: !code ? null :\n        {\n          code,\n          message,\n        }\n    })\n  }\n\n  <TextInput\n    shake={this.state.error}\n    {...props}\n  />\n")),Object(b.b)("p",null,"With this system, you can trigger shakes consecutively.\nOf course, if shake is ",Object(b.b)("inlineCode",{parentName:"p"},"null")," or ",Object(b.b)("inlineCode",{parentName:"p"},"false")," or ",Object(b.b)("inlineCode",{parentName:"p"},"undefined"),", etc... (falsy values), it'll not trigger the shake."))}j.isMDXComponent=!0},284:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},j=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),j=p(a),m=n,d=j["".concat(c,".").concat(m)]||j[m]||O[m]||b;return a?r.a.createElement(d,l(l({ref:t},o),{},{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},285:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},286:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return c}));var n=a(285),r=a(287);function b(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var b=void 0===n?{}:n,c=b.forcePrependBaseUrl,l=void 0!==c&&c,i=b.absolute,o=void 0!==i&&i;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(l)return t+a;var p=!a.startsWith(t)?t+a.replace(/^\//,""):a;return o?e+p:p}(b,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},287:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);