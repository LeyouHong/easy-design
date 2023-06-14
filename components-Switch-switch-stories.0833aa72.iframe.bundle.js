"use strict";(self.webpackChunk_leyouhong_easydesign=self.webpackChunk_leyouhong_easydesign||[]).push([[660],{"./src/components/Switch/switch.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ADefaultSwitch:function(){return ADefaultSwitch},BDisabledSwitch:function(){return BDisabledSwitch},CWithIconSwitch:function(){return CWithIconSwitch},CWithTextSwitch:function(){return CWithTextSwitch},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return switch_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("./src/components/Icon/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Switch=function Switch(props){var defaultChecked=props.defaultChecked,checked=props.checked,className=props.className,disabled=props.disabled,loading=props.loading,size=props.size,onChange=props.onChange,checkedComponent=props.checkedComponent,unCheckedComponent=props.unCheckedComponent,shouldDisabled=loading||disabled,_useState=(0,react.useState)(!!(void 0!==checked?checked:defaultChecked)),_useState2=(0,slicedToArray.Z)(_useState,2),currentStatus=_useState2[0],setCurrentStatus=_useState2[1];(0,react.useEffect)((function(){void 0!==checked&&currentStatus!==checked&&setCurrentStatus(checked)}),[checked,currentStatus]);var swithClass=classnames_default()("easy-switch",className,(0,defineProperty.Z)({"is-checked":currentStatus,"not-checked":!currentStatus,"is-disabled":shouldDisabled},"switch-".concat(size),size)),switchLeftClass=classnames_default()("easy-switch-left",{"is-checked":currentStatus,"is-disabled":shouldDisabled}),switchRightClass=classnames_default()("easy-switch-right",{"is-checked":!currentStatus,"is-disabled":shouldDisabled});return(0,jsx_runtime.jsx)("button",{className:swithClass,disabled:shouldDisabled,onClick:function onClick(){null==onChange||onChange(!currentStatus),setCurrentStatus(!currentStatus)},children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex"},children:[(0,jsx_runtime.jsx)("div",{className:switchLeftClass,children:currentStatus&&checkedComponent}),(0,jsx_runtime.jsx)("div",{className:"inner",children:loading&&(0,jsx_runtime.jsx)(Icon.Z,{icon:"spinner",spin:!0,theme:currentStatus?"primary":"secondary"})}),(0,jsx_runtime.jsx)("div",{className:switchRightClass,children:!currentStatus&&unCheckedComponent})]})})};Switch.defaultProps={defaultChecked:!0,disabled:!1,loading:!1,size:"sm",checkedComponent:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"  "}),unCheckedComponent:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"  "})},Switch.displayName="Switch";var _ADefaultSwitch$param,_ADefaultSwitch$param2,_ADefaultSwitch$param3,_BDisabledSwitch$para,_BDisabledSwitch$para2,_BDisabledSwitch$para3,_CWithTextSwitch$para,_CWithTextSwitch$para2,_CWithTextSwitch$para3,_CWithIconSwitch$para,_CWithIconSwitch$para2,_CWithIconSwitch$para3,Switch_switch=Switch;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{defaultChecked:{defaultValue:{value:"true"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"sm"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},checkedComponent:{defaultValue:{value:"<>&nbsp;&nbsp;</>"},description:"",name:"checkedComponent",required:!1,type:{name:"ReactNode"}},unCheckedComponent:{defaultValue:{value:"<>&nbsp;&nbsp;</>"},description:"",name:"unCheckedComponent",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Switch/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/Switch/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}var switch_stories={title:"Switch",component:Switch_switch,tags:["autodocs"]},Template=function Template(args){return(0,jsx_runtime.jsx)(Switch_switch,(0,objectSpread2.Z)({},args))},ADefaultSwitch=Template.bind({});ADefaultSwitch.storyName="default switch";var BDisabledSwitch=Template.bind({});BDisabledSwitch.args={checked:!0,disabled:!0},BDisabledSwitch.storyName="disabled switch";var CWithTextSwitch=Template.bind({});CWithTextSwitch.args={defaultChecked:!0,size:"lg",checkedComponent:"open",unCheckedComponent:"close"},CWithTextSwitch.storyName="with text switch ";var CWithIconSwitch=Template.bind({});CWithIconSwitch.args={defaultChecked:!0,size:"sm",checkedComponent:(0,jsx_runtime.jsx)(Icon.Z,{icon:"times"}),unCheckedComponent:(0,jsx_runtime.jsx)(Icon.Z,{icon:"search"})},CWithIconSwitch.storyName="with icon switch ",ADefaultSwitch.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ADefaultSwitch.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ADefaultSwitch$param=ADefaultSwitch.parameters)||void 0===_ADefaultSwitch$param?void 0:_ADefaultSwitch$param.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Switch {...args} />"},null===(_ADefaultSwitch$param2=ADefaultSwitch.parameters)||void 0===_ADefaultSwitch$param2||null===(_ADefaultSwitch$param3=_ADefaultSwitch$param2.docs)||void 0===_ADefaultSwitch$param3?void 0:_ADefaultSwitch$param3.source)})}),BDisabledSwitch.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},BDisabledSwitch.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_BDisabledSwitch$para=BDisabledSwitch.parameters)||void 0===_BDisabledSwitch$para?void 0:_BDisabledSwitch$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Switch {...args} />"},null===(_BDisabledSwitch$para2=BDisabledSwitch.parameters)||void 0===_BDisabledSwitch$para2||null===(_BDisabledSwitch$para3=_BDisabledSwitch$para2.docs)||void 0===_BDisabledSwitch$para3?void 0:_BDisabledSwitch$para3.source)})}),CWithTextSwitch.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CWithTextSwitch.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CWithTextSwitch$para=CWithTextSwitch.parameters)||void 0===_CWithTextSwitch$para?void 0:_CWithTextSwitch$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Switch {...args} />"},null===(_CWithTextSwitch$para2=CWithTextSwitch.parameters)||void 0===_CWithTextSwitch$para2||null===(_CWithTextSwitch$para3=_CWithTextSwitch$para2.docs)||void 0===_CWithTextSwitch$para3?void 0:_CWithTextSwitch$para3.source)})}),CWithIconSwitch.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},CWithIconSwitch.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_CWithIconSwitch$para=CWithIconSwitch.parameters)||void 0===_CWithIconSwitch$para?void 0:_CWithIconSwitch$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <Switch {...args} />"},null===(_CWithIconSwitch$para2=CWithIconSwitch.parameters)||void 0===_CWithIconSwitch$para2||null===(_CWithIconSwitch$para3=_CWithIconSwitch$para2.docs)||void 0===_CWithIconSwitch$para3?void 0:_CWithIconSwitch$para3.source)})});var __namedExportsOrder=["ADefaultSwitch","BDisabledSwitch","CWithTextSwitch","CWithIconSwitch"]},"./src/components/Icon/icon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","theme"],Icon=function Icon(props){var className=props.className,theme=props.theme,restProps=(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(props,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("easy-icon",className,(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},"icon-".concat(theme),theme));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.G,(0,_home_runner_work_easy_design_easy_design_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({className:classes},restProps))};__webpack_exports__.Z=Icon;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}try{icon.displayName="icon",icon.__docgenInfo={description:"",displayName:"icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/icon.tsx#icon"]={docgenInfo:icon.__docgenInfo,name:"icon",path:"src/components/Icon/icon.tsx#icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Icon/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Icon/icon.tsx");__webpack_exports__.Z=_icon__WEBPACK_IMPORTED_MODULE_0__.Z;try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/index.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/index.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}}}]);