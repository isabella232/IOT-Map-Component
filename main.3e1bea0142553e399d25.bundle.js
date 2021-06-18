(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1136:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(56),__webpack_require__(45),__webpack_require__(1137),__webpack_require__(1138),__webpack_require__(8),__webpack_require__(46);var _clientApi=__webpack_require__(50),_clientLogger=__webpack_require__(38),_configFilename=__webpack_require__(1139);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1139:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1140:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(382).configure)([__webpack_require__(1141),__webpack_require__(1142)],module,!1)}).call(this,__webpack_require__(101)(module))},1141:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1141},1142:function(module,exports,__webpack_require__){var map={"./stories/Test.stories.ts":1166};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1142},1143:function(module,exports,__webpack_require__){var api=__webpack_require__(1144),content=__webpack_require__(1145);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1145:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(104),___CSS_LOADER_AT_RULE_IMPORT_0___=__webpack_require__(1146);(exports=___CSS_LOADER_API_IMPORT___(!1)).i(___CSS_LOADER_AT_RULE_IMPORT_0___),exports.push([module.i,"\n",""]),module.exports=exports},1166:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Clusters",(function(){return Test_stories_Clusters})),__webpack_require__.d(__webpack_exports__,"Inner",(function(){return Inner})),__webpack_require__.d(__webpack_exports__,"Shapes",(function(){return Shapes})),__webpack_require__.d(__webpack_exports__,"Gauge",(function(){return Gauge})),__webpack_require__.d(__webpack_exports__,"GaugeWithInner",(function(){return GaugeWithInner})),__webpack_require__.d(__webpack_exports__,"UserMarker",(function(){return UserMarker}));__webpack_require__(4);var markersList,userMarker,dist=__webpack_require__(48),addon_knobs_dist=(__webpack_require__(1143),__webpack_require__(47)),MARKER_LIST=[{id:"s1",location:{lat:44.895,lng:4.87},template:"square",status:"warning",tab:{content:"H",type:dist.TabType.normal}},{id:"s2",location:{lat:44.895,lng:4.875},popup:{title:"Ecole Jean Rostand : ",body:"<a href='https://bv.ac-grenoble.fr/carteforpub/uai/0260969M'>ici</a>"},template:"square",status:"neutral"},{id:"s3",location:{lat:44.895,lng:4.88},popup:{title:"<img src='assets/icons/School.svg'/>",body:"Collège Debussy"},template:"square",status:"warning"},{id:"s4",location:{lat:44.895,lng:4.885},template:"square",status:"alert"},{id:"s5",location:{lat:44.895,lng:4.89},shape:{type:dist.ShapeType.square,anchored:!0,plain:!1,accuracy:200},inner:{icon:"iotmap-icons-bluetooth",color:"green"},layer:"Etablissements",status:"inactive"},{id:"s6",location:{lat:44.895,lng:4.895},template:"square"},{id:"p1",location:{lat:44.89,lng:4.87},shape:{type:dist.ShapeType.square,anchored:!1,plain:!1},layer:"Etablissements",inner:{icon:"iotmap-icons-School",color:"blue"},status:"positive"},{id:"p2",location:{lat:44.89,lng:4.875},popup:{title:"Title",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."},shape:{type:dist.ShapeType.square,anchored:!0,plain:!0},inner:{icon:"iotmap-icons-School",color:"navyblue"},layer:"Etablissements",status:"neutral"},{id:"p3",location:{lat:44.89,lng:4.88},template:"monument",status:"warning"},{id:"p4",location:{lat:44.89,lng:4.885},template:"monument",status:"alert"},{id:"p5",location:{lat:44.89,lng:4.89},shape:{type:dist.ShapeType.square,anchored:!0,plain:!0,accuracy:300},layer:"Etablissements",inner:{icon:"iotmap-icons-hospital",color:"white"},status:"inactive"},{id:"p6",location:{lat:44.89,lng:4.895},shape:{type:dist.ShapeType.square,plain:!0,anchored:!1},layer:"Etablissements",inner:{icon:"iotmap-icons-map_pin",color:"white"}},{id:"c1",layer:"circles",location:{lat:44.885,lng:4.87},shape:{type:dist.ShapeType.circle,percent:75,anchored:!1},status:"positive",inner:{icon:"iotmap-icons-vehicle",color:"black"},template:"vehicle"},{id:"c2",layer:"circles",location:{lat:44.885,lng:4.875},template:"vehicle",status:"neutral",tab:{content:"ABC",type:dist.TabType.large}},{id:"c3",layer:"circles",location:{lat:44.885,lng:4.88},template:"vehicle",status:"warning"},{id:"c4",layer:"circles",location:{lat:44.885,lng:4.885},template:"vehicle",status:"alert"},{id:"c5",layer:"circles",location:{lat:44.885,lng:4.89},template:"vehicle",status:"inactive"},{id:"c6",location:{lat:44.885,lng:4.895},popup:{title:"<img src='../assets/icons/temperature.svg'><br>",body:"La <i>température</i><br><b>de 18°C</b>"},template:"square",status:"warning",inner:{label:"H",color:"black"}}],iotMapTemplate=(__webpack_exports__.default={title:"Iot Map Manager",decorators:[addon_knobs_dist.withKnobs]},'<div id="iotMap" style="width: 1280px; height: 720px"></div>'),Test_stories_locationParams=function locationParams(id){return[Object(addon_knobs_dist.number)("longitude",44.895,{step:.001},"item "+id),Object(addon_knobs_dist.number)("latitude",4.87,{step:.001},"item "+id)]},Test_stories_shapeParams=function shapeParams(id){return{type:Object(addon_knobs_dist.select)("Shape type",[dist.ShapeType.circle,dist.ShapeType.square],0,"item "+id),color:Object(addon_knobs_dist.color)("Shape color","#FFCC00","item "+id),anchored:Object(addon_knobs_dist.boolean)("With anchor",!1,"item "+id),plain:Object(addon_knobs_dist.boolean)("Plain shape",!1,"item "+id),accuracy:Test_stories_accuracyParams(id),direction:Test_stories_directionParams(id)}},Test_stories_innerParams=function innerParams(id){return{color:Object(addon_knobs_dist.color)("Inner color","green","item "+id),label:Object(addon_knobs_dist.text)("Inner letter","J","item "+id),icon:Object(addon_knobs_dist.text)("Inner icon","iotmap-icons-temperature","item "+id)}},Test_stories_gaugeParams=function gaugeParams(id){return{type:Object(addon_knobs_dist.select)("Shape type",[dist.ShapeType.circle],0,"item "+id),color:Object(addon_knobs_dist.color)("Shape color","red","item "+id),anchored:Object(addon_knobs_dist.boolean)("With anchor",!1,"item "+id),percent:Test_stories_percentParams(id)}},Test_stories_percentParams=function percentParams(id){return[Object(addon_knobs_dist.number)("Gauge value",15,{range:!0,min:0,max:100,step:1},"item "+id)]},Test_stories_accuracyParams=function accuracyParams(id){return[Object(addon_knobs_dist.number)("accuracy",150,{step:20},"item "+id)]},Test_stories_directionParams=function directionParams(id){return Object(addon_knobs_dist.number)("direction",0,{range:!0,min:0,max:360,step:10},"item "+id)},innerStoryParams=function innerStoryParams(id){return{id:"s1",location:Test_stories_locationParams(id),shape:Test_stories_shapeParams(id),inner:Test_stories_innerParams(id)}},Test_stories_Clusters=function Clusters(){return markersList=Object(addon_knobs_dist.object)("markersList",MARKER_LIST),addEventListener("DOMContentLoaded",init),iotMapTemplate},Inner=function Inner(){return markersList=[innerStoryParams(0)],addEventListener("DOMContentLoaded",init),iotMapTemplate},Shapes=function Shapes(){return markersList=[{id:"s1",location:Test_stories_locationParams(0),shape:Test_stories_shapeParams(0)}],addEventListener("DOMContentLoaded",init),iotMapTemplate},Gauge=function Gauge(){return markersList=[{id:"s1",location:Test_stories_locationParams(0),shape:Test_stories_gaugeParams(0)}],addEventListener("DOMContentLoaded",init),iotMapTemplate},GaugeWithInner=function GaugeWithInner(){return markersList=[{id:"s1",location:Test_stories_locationParams(0),shape:Test_stories_gaugeParams(0),inner:Test_stories_innerParams(0)}],addEventListener("DOMContentLoaded",init),iotMapTemplate};function init(){var config=new dist.IotMapConfig,mapManager=new dist.IotMapManager(config),markerManager=new dist.IotMapMarkerManager(mapManager,config);mapManager.init("iotMap"),markerManager.addMarkers(markersList),removeEventListener("DOMContentLoaded",init)}var UserMarker=function UserMarker(){return userMarker=function userMarkerParams(){return{location:Test_stories_locationParams(0),direction:Test_stories_directionParams(0),accuracy:Test_stories_accuracyParams(0)}}(),addEventListener("DOMContentLoaded",initUserMarker),iotMapTemplate};function initUserMarker(){var config=new dist.IotMapConfig,mapManager=new dist.IotMapManager(config),userMarkerManager=new dist.IotMapUserMarkerManager(mapManager,config);mapManager.init("iotMap"),userMarkerManager.addUserMarker(userMarker),removeEventListener("DOMContentLoaded",initUserMarker)}Test_stories_Clusters.parameters=Object.assign({storySource:{source:"() => {\n  markersList = object('markersList', MARKER_LIST);\n  addEventListener('DOMContentLoaded', init);\n  return iotMapTemplate;\n}"}},Test_stories_Clusters.parameters),Inner.parameters=Object.assign({storySource:{source:"() => {\n  markersList = [innerStoryParams(0)];\n  addEventListener('DOMContentLoaded', init);\n  return iotMapTemplate;\n}"}},Inner.parameters),Shapes.parameters=Object.assign({storySource:{source:"() => {\n  markersList = [\n    {\n      id: 's1',\n      location: locationParams(0),\n      shape: shapeParams(0),\n    },\n  ]\n  addEventListener('DOMContentLoaded', init);\n  return iotMapTemplate;\n}"}},Shapes.parameters),Gauge.parameters=Object.assign({storySource:{source:"() => {\n  markersList = [\n    {\n      id: 's1',\n      location: locationParams(0),\n      shape: gaugeParams(0),\n    },\n  ];\n  addEventListener('DOMContentLoaded', init);\n  return iotMapTemplate;\n}"}},Gauge.parameters),GaugeWithInner.parameters=Object.assign({storySource:{source:"() => {\n  markersList = [\n    {\n      id: 's1',\n      location: locationParams(0),\n      shape: gaugeParams(0),\n      inner: innerParams(0),\n    },\n  ]\n  addEventListener('DOMContentLoaded', init);\n  return iotMapTemplate;\n}"}},GaugeWithInner.parameters),UserMarker.parameters=Object.assign({storySource:{source:"() => {\n  userMarker = userMarkerParams();\n  addEventListener('DOMContentLoaded', initUserMarker);\n  return iotMapTemplate;\n}"}},UserMarker.parameters)},500:function(module,exports,__webpack_require__){__webpack_require__(501),__webpack_require__(722),__webpack_require__(723),__webpack_require__(879),__webpack_require__(1098),__webpack_require__(1100),__webpack_require__(1105),__webpack_require__(1117),__webpack_require__(1119),__webpack_require__(1124),__webpack_require__(1126),__webpack_require__(1136),module.exports=__webpack_require__(1140)},569:function(module,exports){},723:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(382)}},[[500,1,2]]]);
//# sourceMappingURL=main.3e1bea0142553e399d25.bundle.js.map