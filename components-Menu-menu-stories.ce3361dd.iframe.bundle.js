"use strict";(self.webpackChunk_leyouhong_easydesign=self.webpackChunk_leyouhong_easydesign||[]).push([[234],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/components/Menu/menu.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ADefaultMenu:function(){return ADefaultMenu},BClickMenu:function(){return BClickMenu},COpenedMenu:function(){return COpenedMenu},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return menu_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MenuContext=(0,react.createContext)({index:"0"}),Menu=function Menu(props){var className=props.className,mode=props.mode,style=props.style,children=props.children,defaultIndex=props.defaultIndex,onSelect=props.onSelect,defaultOpenSubMenus=props.defaultOpenSubMenus,_useState=(0,react.useState)(defaultIndex),_useState2=(0,slicedToArray.Z)(_useState,2),currentActive=_useState2[0],setActive=_useState2[1],classes=classnames_default()("easy-menu",className,{"menu-vertical":"vertical"===mode,"menu-horizontal":"vertical"!==mode}),passedContext={index:currentActive||"0",onSelect:function handleClick(index){setActive(index),onSelect&&onSelect(index)},mode:mode,defaultOpenSubMenus:defaultOpenSubMenus};return(0,jsx_runtime.jsx)("ul",{className:classes,style:style,"data-testid":"test-menu",children:(0,jsx_runtime.jsx)(MenuContext.Provider,{value:passedContext,children:function renderChildren(){return react.Children.map(children,(function(child,index){var childElement=child,displayName=childElement.type.displayName;if("MenuItem"===displayName||"SubMenu"===displayName)return react.cloneElement(childElement,{index:index.toString()});console.error("Warning: Menu has a child which is not a MenuItem component.")}))}()})})};Menu.defaultProps={defaultIndex:"0",mode:"horizontal",defaultOpenSubMenus:[]};var Menu_menu=Menu;try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"SelectCallback"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/Menu/menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}try{menu.displayName="menu",menu.__docgenInfo={description:"",displayName:"menu",props:{defaultIndex:{defaultValue:{value:"0"},description:"",name:"defaultIndex",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"SelectCallback"}},defaultOpenSubMenus:{defaultValue:{value:"[]"},description:"",name:"defaultOpenSubMenus",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menu.tsx#menu"]={docgenInfo:menu.__docgenInfo,name:"menu",path:"src/components/Menu/menu.tsx#menu"})}catch(__react_docgen_typescript_loader_error){}var index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),SubMenu=function SubMenu(_ref){var timer,index=_ref.index,title=_ref.title,children=_ref.children,className=_ref.className,context=(0,react.useContext)(MenuContext),openedSubMenus=context.defaultOpenSubMenus,isOpened=!(!index||"vertical"!==context.mode)&&openedSubMenus.includes(index),_useState=(0,react.useState)(isOpened),_useState2=(0,slicedToArray.Z)(_useState,2),menuOpen=_useState2[0],setOpen=_useState2[1],classes=classnames_default()("menu-item submenu-item",className,{"is-active":context.index===index,"is-opened":menuOpen,"is-vertical":"vertical"===context.mode}),handleMouse=function handleMouse(e,toggle){clearTimeout(timer),e.preventDefault(),timer=setTimeout((function(){setOpen(toggle)}),300)},clickEvents="vertical"===context.mode?{onClick:function handleClick(e){e.preventDefault(),setOpen(!menuOpen)}}:{},hoverEvents="horizontal"===context.mode?{onMouseEnter:function onMouseEnter(e){handleMouse(e,!0)},onMouseLeave:function onMouseLeave(e){handleMouse(e,!1)}}:{};return(0,jsx_runtime.jsxs)("li",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classes},hoverEvents),{},{children:[(0,jsx_runtime.jsxs)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:"submenu-title"},clickEvents),{},{children:[title,(0,jsx_runtime.jsx)(index_es.G,{icon:free_solid_svg_icons.gc2,className:"arrow-icon"})]})),function renderChildren(){var subMenuClasses=classnames_default()("easy-submenu",{"menu-opened":menuOpen}),childrenComponent=react.Children.map(children,(function(child,i){var childElement=child;if("MenuItem"===childElement.type.displayName)return react.cloneElement(childElement,{index:"".concat(index,"-").concat(i)});console.error("Warning: SubMenu has a child which is not a MenuItem component.")}));return(0,jsx_runtime.jsx)("ul",{className:subMenuClasses,children:childrenComponent})}()]}),index)};SubMenu.displayName="SubMenu";var subMenu=SubMenu;try{SubMenu.displayName="SubMenu",SubMenu.__docgenInfo={description:"",displayName:"SubMenu",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/subMenu.tsx#SubMenu"]={docgenInfo:SubMenu.__docgenInfo,name:"SubMenu",path:"src/components/Menu/subMenu.tsx#SubMenu"})}catch(__react_docgen_typescript_loader_error){}var MenuItem=function MenuItem(props){var index=props.index,disabled=props.disabled,className=props.className,style=props.style,children=props.children,context=(0,react.useContext)(MenuContext),classes=classnames_default()("menu-item",className,{"is-disabled":disabled,"is-active":context.index===index});return(0,jsx_runtime.jsx)("li",{className:classes,style:style,onClick:function handleClick(){context.onSelect&&!disabled&&"string"==typeof index&&context.onSelect(index)},children:children})};MenuItem.displayName="MenuItem";var menuItem=MenuItem;try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/menuItem.tsx#MenuItem"]={docgenInfo:MenuItem.__docgenInfo,name:"MenuItem",path:"src/components/Menu/menuItem.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}var TransMenu=Menu_menu;TransMenu.Item=menuItem,TransMenu.SubMenu=subMenu;var _ADefaultMenu$paramet,_ADefaultMenu$paramet2,_ADefaultMenu$paramet3,_BClickMenu$parameter,_BClickMenu$parameter2,_BClickMenu$parameter3,_COpenedMenu$paramete,_COpenedMenu$paramete2,_COpenedMenu$paramete3,components_Menu=TransMenu,menu_stories={title:"Menu",id:"Menu",component:components_Menu,tags:["autodocs"],subcomponents:{SubMenu:components_Menu.SubMenu,Item:components_Menu.Item}},Template=function Template(args){return(0,jsx_runtime.jsxs)(components_Menu,(0,objectSpread2.Z)((0,objectSpread2.Z)({defaultIndex:"0"},args),{},{children:[(0,jsx_runtime.jsx)(components_Menu.Item,{children:"cool link"}),(0,jsx_runtime.jsx)(components_Menu.Item,{children:"cool link 2"}),(0,jsx_runtime.jsx)(components_Menu.Item,{disabled:!0,children:"disabled"}),(0,jsx_runtime.jsxs)(components_Menu.SubMenu,{title:"dropdown",children:[(0,jsx_runtime.jsx)(components_Menu.Item,{children:"drop1"}),(0,jsx_runtime.jsx)(components_Menu.Item,{children:"drop2"})]})]}))},ADefaultMenu=Template.bind({});ADefaultMenu.storyName="horizontal Menu";var BClickMenu=Template.bind({});BClickMenu.args={defaultIndex:"0",mode:"vertical"},BClickMenu.storyName="Vertical Menu";var COpenedMenu=Template.bind({});COpenedMenu.args={defaultIndex:"0",mode:"vertical",defaultOpenSubMenus:["2"]},COpenedMenu.storyName="defaultOpen Menu",ADefaultMenu.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},ADefaultMenu.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_ADefaultMenu$paramet=ADefaultMenu.parameters)||void 0===_ADefaultMenu$paramet?void 0:_ADefaultMenu$paramet.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => <Menu defaultIndex="0" {...args}>\n    <Menu.Item>cool link</Menu.Item>\n    <Menu.Item>cool link 2</Menu.Item>\n    <Menu.Item disabled>disabled</Menu.Item>\n    <Menu.SubMenu title="dropdown">\n      <Menu.Item>drop1</Menu.Item>\n      <Menu.Item>drop2</Menu.Item>\n    </Menu.SubMenu>\n  </Menu>'},null===(_ADefaultMenu$paramet2=ADefaultMenu.parameters)||void 0===_ADefaultMenu$paramet2||null===(_ADefaultMenu$paramet3=_ADefaultMenu$paramet2.docs)||void 0===_ADefaultMenu$paramet3?void 0:_ADefaultMenu$paramet3.source)})}),BClickMenu.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},BClickMenu.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_BClickMenu$parameter=BClickMenu.parameters)||void 0===_BClickMenu$parameter?void 0:_BClickMenu$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => <Menu defaultIndex="0" {...args}>\n    <Menu.Item>cool link</Menu.Item>\n    <Menu.Item>cool link 2</Menu.Item>\n    <Menu.Item disabled>disabled</Menu.Item>\n    <Menu.SubMenu title="dropdown">\n      <Menu.Item>drop1</Menu.Item>\n      <Menu.Item>drop2</Menu.Item>\n    </Menu.SubMenu>\n  </Menu>'},null===(_BClickMenu$parameter2=BClickMenu.parameters)||void 0===_BClickMenu$parameter2||null===(_BClickMenu$parameter3=_BClickMenu$parameter2.docs)||void 0===_BClickMenu$parameter3?void 0:_BClickMenu$parameter3.source)})}),COpenedMenu.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},COpenedMenu.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_COpenedMenu$paramete=COpenedMenu.parameters)||void 0===_COpenedMenu$paramete?void 0:_COpenedMenu$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:'args => <Menu defaultIndex="0" {...args}>\n    <Menu.Item>cool link</Menu.Item>\n    <Menu.Item>cool link 2</Menu.Item>\n    <Menu.Item disabled>disabled</Menu.Item>\n    <Menu.SubMenu title="dropdown">\n      <Menu.Item>drop1</Menu.Item>\n      <Menu.Item>drop2</Menu.Item>\n    </Menu.SubMenu>\n  </Menu>'},null===(_COpenedMenu$paramete2=COpenedMenu.parameters)||void 0===_COpenedMenu$paramete2||null===(_COpenedMenu$paramete3=_COpenedMenu$paramete2.docs)||void 0===_COpenedMenu$paramete3?void 0:_COpenedMenu$paramete3.source)})});var __namedExportsOrder=["ADefaultMenu","BClickMenu","COpenedMenu"]}}]);