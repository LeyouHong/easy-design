"use strict";(self.webpackChunk_leyouhong_easydesign=self.webpackChunk_leyouhong_easydesign||[]).push([[129],{"./src/components/AutoComplete/autoComplete.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ADefault:function(){return ADefault},BRenderTemplate:function(){return BRenderTemplate},CAjaxComplete:function(){return CAjaxComplete},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return autoComplete_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),input=__webpack_require__("./src/components/Input/input.tsx"),transition=__webpack_require__("./src/components/Transition/transition.tsx");var _ADefault$parameters,_ADefault$parameters2,_ADefault$parameters3,_BRenderTemplate$para,_BRenderTemplate$para2,_BRenderTemplate$para3,_CAjaxComplete$parame,_CAjaxComplete$parame2,_CAjaxComplete$parame3,hooks_useDebounce=function useDebounce(value){var delay=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,_useState=(0,react.useState)(value),_useState2=(0,slicedToArray.Z)(_useState,2),debouncedValue=_useState2[0],setDebouncedValue=_useState2[1];return(0,react.useEffect)((function(){var handler=window.setTimeout((function(){setDebouncedValue(value)}),delay);return function(){clearTimeout(handler)}}),[value,delay]),debouncedValue},useClickOutside=__webpack_require__("./src/hooks/useClickOutside.tsx"),icon=__webpack_require__("./src/components/Icon/icon.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["fetchSuggestions","onSelect","onChange","value","renderOption"],AutoComplete=function AutoComplete(props){var fetchSuggestions=props.fetchSuggestions,onSelect=props.onSelect,onChange=props.onChange,value=props.value,renderOption=props.renderOption,restProps=(0,objectWithoutProperties.Z)(props,_excluded),_useState=(0,react.useState)(value),_useState2=(0,slicedToArray.Z)(_useState,2),inputValue=_useState2[0],setInputValue=_useState2[1],_useState3=(0,react.useState)([]),_useState4=(0,slicedToArray.Z)(_useState3,2),suggestions=_useState4[0],setSugestions=_useState4[1],_useState5=(0,react.useState)(!1),_useState6=(0,slicedToArray.Z)(_useState5,2),loading=_useState6[0],setLoading=_useState6[1],_useState7=(0,react.useState)(!1),_useState8=(0,slicedToArray.Z)(_useState7,2),showDropdown=_useState8[0],setShowDropdown=_useState8[1],_useState9=(0,react.useState)(-1),_useState10=(0,slicedToArray.Z)(_useState9,2),highlightIndex=_useState10[0],setHighlightIndex=_useState10[1],triggerSearch=(0,react.useRef)(!1),componentRef=(0,react.useRef)(null),debouncedValue=hooks_useDebounce(inputValue,300);(0,useClickOutside.Z)(componentRef,(function(){setSugestions([])})),(0,react.useEffect)((function(){if(debouncedValue&&triggerSearch.current){setSugestions([]);var results=fetchSuggestions(debouncedValue);results instanceof Promise?(setLoading(!0),results.then((function(data){setLoading(!1),setSugestions(data),data.length>0&&setShowDropdown(!0)}))):(setSugestions(results),setShowDropdown(!0),results.length>0&&setShowDropdown(!0))}else setShowDropdown(!1);setHighlightIndex(-1)}),[debouncedValue,fetchSuggestions]);var highlight=function highlight(index){index<0&&(index=0),index>=suggestions.length&&(index=suggestions.length-1),setHighlightIndex(index)},handleSelect=function handleSelect(item){setInputValue(item.value),setShowDropdown(!1),onSelect&&onSelect(item),triggerSearch.current=!1},renderTemplate=function renderTemplate(item){return renderOption?renderOption(item):item.value};return(0,jsx_runtime.jsxs)("div",{className:"easy-auto-complete",ref:componentRef,children:[(0,jsx_runtime.jsx)(input.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{value:inputValue,onChange:function handleChange(e){var value=e.target.value.trim();console.log("triggered the value",value),setInputValue(value),onChange&&onChange(value),triggerSearch.current=!0},onKeyDown:function handleKeyDown(e){switch(e.keyCode){case 13:suggestions[highlightIndex]&&handleSelect(suggestions[highlightIndex]);break;case 38:highlight(highlightIndex-1);break;case 40:highlight(highlightIndex+1);break;case 27:setShowDropdown(!1)}}})),function generateDropdown(){return(0,jsx_runtime.jsx)(transition.Z,{in:showDropdown||loading,animation:"zoom-in-top",timeout:300,onExited:function onExited(){setSugestions([])},children:(0,jsx_runtime.jsxs)("ul",{className:"easy-suggestion-list",children:[loading&&(0,jsx_runtime.jsx)("div",{className:"suggstions-loading-icon",children:(0,jsx_runtime.jsx)(icon.Z,{icon:"spinner",spin:!0})}),suggestions.map((function(item,index){var cnames=classnames_default()("suggestion-item",{"is-active":index===highlightIndex});return(0,jsx_runtime.jsx)("li",{className:cnames,onClick:function onClick(){return handleSelect(item)},children:renderTemplate(item)},index)}))]})})}()]})},AutoComplete_autoComplete=AutoComplete;try{AutoComplete.displayName="AutoComplete",AutoComplete.__docgenInfo={description:"",displayName:"AutoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceObject[] | Promise<DataSourceObject[]>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceObject) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceObject) => ReactElement<any, string | JSXElementConstructor<any>>)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AutoComplete/autoComplete.tsx#AutoComplete"]={docgenInfo:AutoComplete.__docgenInfo,name:"AutoComplete",path:"src/components/AutoComplete/autoComplete.tsx#AutoComplete"})}catch(__react_docgen_typescript_loader_error){}try{autoComplete.displayName="autoComplete",autoComplete.__docgenInfo={description:"",displayName:"autoComplete",props:{fetchSuggestions:{defaultValue:null,description:"",name:"fetchSuggestions",required:!0,type:{name:"(str: string) => DataSourceObject[] | Promise<DataSourceObject[]>"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((item: DataSourceObject) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},renderOption:{defaultValue:null,description:"",name:"renderOption",required:!1,type:{name:"((item: DataSourceObject) => ReactElement<any, string | JSXElementConstructor<any>>)"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AutoComplete/autoComplete.tsx#autoComplete"]={docgenInfo:autoComplete.__docgenInfo,name:"autoComplete",path:"src/components/AutoComplete/autoComplete.tsx#autoComplete"})}catch(__react_docgen_typescript_loader_error){}var autoComplete_stories={title:"AutoComplete",id:"AutoComplete",component:AutoComplete_autoComplete,tags:["autodocs"]},Template=function Template(args){return(0,jsx_runtime.jsx)(AutoComplete_autoComplete,(0,objectSpread2.Z)({},args))},animals=[{id:0,value:"hamster"},{id:1,value:"cat"},{id:2,value:"Dog"},{id:3,value:"Pig"},{id:4,value:"Horse"},{id:5,value:"cow"},{id:6,value:"lion"},{id:7,value:"deer"},{id:8,value:"fox"}],handleFetch=function handleFetch(query){return animals.filter((function(item){return item.value.toLowerCase().includes(query.toLowerCase())}))},ADefault=Template.bind({});ADefault.args={placeholder:"default AutoComplete",fetchSuggestions:handleFetch},ADefault.storyName="default AutoComplete";var BRenderTemplate=Template.bind({});BRenderTemplate.args={placeholder:"render your template",fetchSuggestions:handleFetch,renderOption:function handleRenderOption(item){var itemWithId=item;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h2",{children:itemWithId.value}),(0,jsx_runtime.jsxs)("p",{children:["ID: ",itemWithId.id]})]})}};var CAjaxComplete=Template.bind({});CAjaxComplete.args={placeholder:"input github username",fetchSuggestions:function handleFetchPromise(query){return fetch("https://api.github.com/search/users?q=".concat(query)).then((function(res){return res.json()})).then((function(_ref){return(_ref.items||[]).slice(0,10).map((function(item){return(0,objectSpread2.Z)({value:item.login},item)}))}))},renderOption:function renderOptionGithub(item){var itemWithGithub=item;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{children:["Name: ",itemWithGithub.value]}),(0,jsx_runtime.jsxs)("div",{children:["url: ",itemWithGithub.url]})]})}},CAjaxComplete.storyName="fetch from API",ADefault.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ADefault.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ADefault$parameters=ADefault.parameters)||void 0===_ADefault$parameters?void 0:_ADefault$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <AutoComplete {...args} />"},null===(_ADefault$parameters2=ADefault.parameters)||void 0===_ADefault$parameters2||null===(_ADefault$parameters3=_ADefault$parameters2.docs)||void 0===_ADefault$parameters3?void 0:_ADefault$parameters3.source)})}),BRenderTemplate.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},BRenderTemplate.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_BRenderTemplate$para=BRenderTemplate.parameters)||void 0===_BRenderTemplate$para?void 0:_BRenderTemplate$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <AutoComplete {...args} />"},null===(_BRenderTemplate$para2=BRenderTemplate.parameters)||void 0===_BRenderTemplate$para2||null===(_BRenderTemplate$para3=_BRenderTemplate$para2.docs)||void 0===_BRenderTemplate$para3?void 0:_BRenderTemplate$para3.source)})}),CAjaxComplete.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CAjaxComplete.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CAjaxComplete$parame=CAjaxComplete.parameters)||void 0===_CAjaxComplete$parame?void 0:_CAjaxComplete$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <AutoComplete {...args} />"},null===(_CAjaxComplete$parame2=CAjaxComplete.parameters)||void 0===_CAjaxComplete$parame2||null===(_CAjaxComplete$parame3=_CAjaxComplete$parame2.docs)||void 0===_CAjaxComplete$parame3?void 0:_CAjaxComplete$parame3.source)})});var __namedExportsOrder=["ADefault","BRenderTemplate","CAjaxComplete"]},"./src/components/Icon/icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","theme"],Icon=function Icon(props){var className=props.className,theme=props.theme,restProps=(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(props,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("viking-icon",className,(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},"icon-".concat(theme),theme));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({className:classes},restProps))};__webpack_exports__.Z=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Input/input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Icon_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Icon/icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["disabled","size","icon","prepend","append","style"],Input=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(props,ref){var _classNames,disabled=props.disabled,size=props.size,icon=props.icon,prepend=props.prepend,append=props.append,style=props.style,restProps=(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(props,_excluded),cnames=classnames__WEBPACK_IMPORTED_MODULE_1___default()("easy-input-wrapper",(_classNames={},(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_classNames,"input-size-".concat(size),size),(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_classNames,"is-disabled",disabled),(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_classNames,"input-group",prepend||append),(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_classNames,"input-group-append",!!append),(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_classNames,"input-group-prepend",!!prepend),_classNames));return"value"in props&&(delete restProps.defaultValue,restProps.value=function fixControlledValue(value){return null==value?"":value}(props.value)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:cnames,style:style,children:[prepend&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"easy-input-group-prepend",children:prepend}),icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"icon-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Icon_icon__WEBPACK_IMPORTED_MODULE_2__.Z,{icon:icon,title:"title-".concat(icon)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input",(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({ref:ref,className:"easy-input-inner",disabled:disabled},restProps)),append&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"easy-input-group-append",children:append})]})}));__webpack_exports__.Z=Input;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}try{input.displayName="input",input.__docgenInfo={description:"",displayName:"input",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},prepend:{defaultValue:null,description:"",name:"prepend",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},append:{defaultValue:null,description:"",name:"append",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"IconProp"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/input.tsx#input"]={docgenInfo:input.__docgenInfo,name:"input",path:"src/components/Input/input.tsx#input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Transition/transition.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","classNames","animation","wrapper"],Transition=function Transition(props){var children=props.children,classNames=props.classNames,animation=props.animation,wrapper=props.wrapper,restProps=(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(props,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_3__.Z,(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({classNames:classNames||animation},restProps),{},{children:wrapper?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:children}):children}))};Transition.defaultProps={unmountOnExit:!0,appear:!0},__webpack_exports__.Z=Transition;try{transition.displayName="transition",transition.__docgenInfo={description:"",displayName:"transition",props:{classNames:{defaultValue:null,description:"The animation `classNames` applied to the component as it enters or exits.\nA single name can be provided and it will be suffixed for each stage: e.g.\n\n`classNames=\"fade\"` applies `fade-enter`, `fade-enter-active`,\n`fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.\n\nEach individual classNames can also be specified independently like:\n\n```js\nclassNames={{\n  appear: 'my-appear',\n  appearActive: 'my-appear-active',\n  appearDone: 'my-appear-done',\n  enter: 'my-enter',\n  enterActive: 'my-enter-active',\n  enterDone: 'my-enter-done',\n  exit: 'my-exit',\n  exitActive: 'my-exit-active',\n  exitDone: 'my-exit-done'\n}}\n```",name:"classNames",required:!1,type:{name:"string | CSSTransitionClassNames"}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"zoom-in-top"'},{value:'"zoom-in-left"'},{value:'"zoom-in-bottom"'},{value:'"zoom-in-right"'}]}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Transition/transition.tsx#transition"]={docgenInfo:transition.__docgenInfo,name:"transition",path:"src/components/Transition/transition.tsx#transition"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useClickOutside.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.Z=function useClickOutside(ref,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var listener=function listener(event){ref.current&&!ref.current.contains(event.target)&&handler(event)};return document.addEventListener("click",listener),function(){document.removeEventListener("click",listener)}}),[ref,handler])}}}]);