function loggerToString(e){return e?e._montage_metadata.objectName+":"+Object.hash(e)+" id: "+e.identifier:"NIL"}var Montage=require("../core/core").Montage,Target=require("../core/target").Target,Template=require("../core/template").Template,DocumentResources=require("../core/document-resources").DocumentResources,Gate=require("../core/gate").Gate,Promise=require("../core/promise").Promise,logger=require("../core/logger").logger("component"),drawPerformanceLogger=require("../core/logger").logger("Drawing performance").color.green(),drawListLogger=require("../core/logger").logger("drawing list").color.blue(),needsDrawLogger=require("../core/logger").logger("drawing needsDraw").color.violet(),drawLogger=require("../core/logger").logger("drawing").color.blue(),defaultEventManager=require("../core/event/event-manager").defaultEventManager,Set=require("collections/set"),Alias=require("../core/serialization/alias").Alias,ATTR_LE_COMPONENT="data-montage-le-component",ATTR_LE_ARG="data-montage-le-arg",ATTR_LE_ARG_BEGIN="data-montage-le-arg-begin",ATTR_LE_ARG_END="data-montage-le-arg-end",Component=exports.Component=Target.specialize({DOM_ARG_ATTRIBUTE:{value:"data-arg"},constructor:{value:function Component(){this.super(),this._isComponentExpanded=!1,this._isTemplateLoaded=!1,this._isTemplateInstantiated=!1,this._isComponentTreeLoaded=!1}},delegate:{value:null},templateObjects:{serializable:!1,value:null},_nextTarget:{value:null},nextTarget:{get:function(){return this._nextTarget||this.parentComponent},set:function(e){this._nextTarget=e}},_ownerDocumentPart:{value:null},_templateDocumentPart:{value:null},_domArguments:{value:null},_domArgumentNames:{value:null},_dispatchActionEvent:{value:function(){this.dispatchEvent(this.createActionEvent())},enumerable:!1},createActionEvent:{value:function(){var e=document.createEvent("CustomEvent");return e.initCustomEvent("action",!0,!0,null),e}},canDrawGate:{get:function(){return this._canDrawGate||(this._canDrawGate=(new Gate).initWithDelegate(this),this._canDrawGate.setField("componentTreeLoaded",!1)),this._canDrawGate},enumerable:!1},_blockDrawGate:{value:null},blockDrawGate:{enumerable:!1,get:function(){return this._blockDrawGate||(this._blockDrawGate=(new Gate).initWithDelegate(this),this._blockDrawGate.setField("element",!1),this._blockDrawGate.setField("drawRequested",!1)),this._blockDrawGate}},_firstDraw:{enumerable:!1,value:!0},_completedFirstDraw:{enumerable:!1,value:!1},originalElement:{value:null},_element:{enumerable:!1,value:null},element:{get:function(){return this._element},set:function(e){if(null==e)return console.warn("Tried to set element of ",this," to ",e),void 0;if(e.component&&e.component!==this)throw Error("Element "+e+" is already assigned to another component: "+e.component);if(window._montage_le_flag&&e.setAttribute(ATTR_LE_COMPONENT,Montage.getInfoForObject(this).moduleId),this.isDeserializing)this.eventManager.registerEventHandlerForElement(this,e),this._isTemplateInstantiated?this._templateElement||(this._templateElement=e):(this._element=e,!this.blockDrawGate.value&&this._element&&this.blockDrawGate.setField("element",!0));else{if(!this._firstDraw)return console.error("Cannot change element of ",this," after it has been set"),void 0;this.eventManager.registerEventHandlerForElement(this,e),this._element=e,!this.blockDrawGate.value&&this._element&&this.blockDrawGate.setField("element",!0)}this._initializeClassListFromElement(e)}},getElementId:{value:function(){var e=this._element;return e?e.getAttribute("data-montage-id"):void 0}},_initDomArguments:{value:function(){var e,t,n,i={},r=this.element;e=r.querySelectorAll("*["+this.DOM_ARG_ATTRIBUTE+"]");e:for(var a,o=0;a=e[o];o++){for(n=a;(n=n.parentNode)!==r;)if(n.component)continue e;this._findAndDetachComponents(a),a.parentNode.removeChild(a),t=a.getAttribute(this.DOM_ARG_ATTRIBUTE),a.removeAttribute(this.DOM_ARG_ATTRIBUTE),i[t]=a}this._domArguments=i}},getDomArgumentNames:{value:function(){return this._domArgumentNames||(this._domArgumentNames=Object.keys(this._domArguments)),this._domArgumentNames}},extractDomArgument:{value:function(e){var t;return t=this._domArguments[e],this._domArguments[e]=null,t}},_getTemplateDomArgument:{value:function(e){var t,n,i,r,a,o,s=this._ownerDocumentPart.template;i=s.getElementById(this.getElementId()),t=i.querySelectorAll("*["+this.DOM_ARG_ATTRIBUTE+"='"+e+"']");e:for(var l,c=0;l=t[c];c++){for(n=l;(n=n.parentNode)!==i;)if(r=s.getElementId(n),r&&(a=s.getSerialization(),o=a.getSerializationLabelsWithElements(r),o.length>0))continue e;return l}}},getTemplateArgumentElement:{value:function(e){var t,n,i,r=this._ownerDocumentPart.template;if(window._montage_le_flag)var a=this.ownerComponent._montage_metadata.moduleId,o=this._montage_metadata.label;return"*"===e?(t=r.getElementById(this.getElementId()),n=r.document.createRange(),n.selectNodeContents(t),i=n.cloneContents(),window._montage_le_flag&&t.children.length>0&&this._leTagStarArgument(a,o,i)):(i=this._getTemplateDomArgument(e).cloneNode(!0),i.removeAttribute(this.DOM_ARG_ATTRIBUTE),window._montage_le_flag&&this._leTagNamedArgument(a,o,i,e)),i}},getTemplateArgumentSerialization:{value:function(e){var t=this._ownerDocumentPart.template;return t._createSerializationWithElementIds(e)}},resolveTemplateArgumentTemplateProperty:{value:function(e){var t,n,i,r,a=e.indexOf(":"),o=e.slice(0,a),s=e.slice(a),l=this._templateDocumentPart;if(Montage.getInfoForObject(this).label===o)return l&&(i=l.objects[s]),i instanceof Alias&&(n=l.objects[i.componentLabel],t=i.value.slice(1),r=n.resolveTemplateArgumentTemplateProperty(t),r||(r=t)),r}},setElementWithParentComponent:{value:function(e,t){this._alternateParentComponent=t,this.element!==e&&(this.element=e)}},application:{enumerable:!1,get:function(){return require("../core/application").application}},eventManager:{enumerable:!1,get:function(){return defaultEventManager}},rootComponent:{enumerable:!1,get:function(){return rootComponent}},elementControllerFromEvent:{enumerable:!1,value:function(e,t){return t}},_alternateParentComponent:{value:null},__parentComponent:{value:null},_parentComponent:{set:function(e){this.__parentComponent=e,this.dispatchOwnPropertyChange("parentComponent",e)},get:function(){return this.__parentComponent}},parentComponent:{enumerable:!1,get:function(){return this._parentComponent}},findParentComponent:{value:function(){var e,t=this.element,n=this.eventManager;if(t){for(;null!=(e=t.parentNode)&&null==n.eventHandlerForElement(e);)t=e;return e?n.eventHandlerForElement(e):this._alternateParentComponent}}},querySelectorComponent:{value:function(e){if("string"!=typeof e)throw"querySelectorComponent: Selector needs to be a string.";var t=e.match(/^\s*(?:@([^>\s]+))?(?:\s*(>)?\s*@([^>\s]+)(.*))?$/);if(!t)throw'querySelectorComponent: Syntax error "'+e+'"';var n,i,r,a=this.childComponents,o=t[1],s=(t[2]||" ",t[3]),l=t[4];if(o)for(l=s?"@"+s+l:"",i=0,r;r=a[i];i++){if(o===Montage.getInfoForObject(r).label)return l?r.querySelectorComponent(l):r;if(n=r.querySelectorComponent(e))return n}else for(i=0,r;r=a[i];i++)if(s===Montage.getInfoForObject(r).label)return l?r.querySelectorComponent(l):r;return null}},querySelectorAllComponent:{value:function(e,t){if("string"!=typeof e)throw"querySelectorComponent: Selector needs to be a string.";var n=e.match(/^\s*(?:@([^>\s]+))?(?:\s*(>)?\s*@([^>\s]+)(.*))?$/);if(!n)throw'querySelectorComponent: Syntax error "'+e+'"';var i,r,a=this.childComponents,o=n[1],s=(n[2]||" ",n[3]),l=n[4],c=[];if(o)for(l=s?"@"+s+l:"",i=0,r;r=a[i];i++)o!==Montage.getInfoForObject(r).label||t&&t!==r.ownerComponent?c=c.concat(r.querySelectorAllComponent(e,t)):l?c=c.concat(r.querySelectorAllComponent(l)):c.push(r);else for(i=0,r;r=a[i];i++)s!==Montage.getInfoForObject(r).label||t&&t!==r.ownerComponent||(l?c=c.concat(r.querySelectorAllComponent(l,t)):c.push(r));return c}},template:{enumerable:!1,value:null},hasTemplate:{enumerable:!1,value:!0},_templateModuleId:{serializable:!1,value:null},_template:{value:null},_treeLevel:{value:0},_addChildComponent:{value:function(e){return this.addChildComponent(e)}},addChildComponent:{value:function(e){-1===this.childComponents.indexOf(e)&&(this.childComponents.push(e),e._prepareForEnterDocument(),e._parentComponent=this,e.needsDraw&&!this.rootComponent.isComponentWaitingNeedsDraw(e)&&e._addToParentsDrawList())}},attachToParentComponent:{value:function(){this.detachFromParentComponent(),this._parentComponent=null;var e,t,n=this.findParentComponent();if(n){e=n.childComponents;for(var i=0;t=e[i];i++){var r=t.findParentComponent();r===this&&(n.removeChildComponent(t),r.addChildComponent(t))}n.addChildComponent(this)}}},detachFromParentComponent:{value:function(){var e=this.parentComponent;e&&e.removeChildComponent(this)}},removeChildComponent:{value:function(e){var t=this.childComponents,n=t.indexOf(e);n>-1&&(e._exitDocument(),t.splice(n,1),e._parentComponent=null,e._alternateParentComponent=null,e._addedToDrawList&&(e._addedToDrawList=!1,n=this._drawList.indexOf(e),this._drawList.splice(n,1)),this.rootComponent.removeFromCannotDrawList(e))}},childComponents:{enumerable:!1,distinct:!0,value:[]},_needsEnterDocument:{value:!1},_inDocument:{value:!1},__exitDocument:{value:function(){this._inDocument&&"function"==typeof this.exitDocument&&(this.exitDocument(),this._inDocument=!1)}},_exitDocument:{value:function(){var e;this._needsEnterDocument?this._needsEnterDocument=!1:(e=function(t){for(var n,i=t.childComponents,r=0;n=i[r];r++)n._isComponentExpanded&&e(n);t._inDocument&&t.__exitDocument()},e(this))}},exitDocument:{value:function(){this.isActiveTarget&&(defaultEventManager.activeTarget=this.nextTarget)}},_prepareForEnterDocument:{value:function(){this._firstDraw?this._needsEnterDocument=!0:(this.needsDraw=!0,this.traverseComponentTree(function(e){return e._needsEnterDocument?!1:(e._needsEnterDocument=!0,e.needsDraw=!0,void 0)}))}},ownerComponent:{enumerable:!1,value:null},components:{enumerable:!1,value:{}},_isComponentExpanded:{enumerable:!1,value:null},_isTemplateLoaded:{enumerable:!1,value:null},_isTemplateInstantiated:{enumerable:!1,value:null},cleanupDeletedComponentTree:{value:function(e){e&&this.cancelBindings(),this.needsDraw=!1,this.traverseComponentTree(function(t){e&&t.cancelBindings(),t.needsDraw=!1})}},_newDomContent:{enumerable:!1,value:null},domContent:{serializable:!1,get:function(){return this._element?Array.prototype.slice.call(this._element.childNodes,0):null},set:function(e){var t,n,i,r=[];for(this._newDomContent=e,this.needsDraw=!0,null===this._newDomContent&&(this._shouldClearDomContentOnNextDraw=!0),"function"==typeof this.contentWillChange&&this.contentWillChange(e),t=this.childComponents,n=0,i;i=t[n];n++)i.detachFromParentComponent();if(e instanceof Element)this._findAndDetachComponents(e,r);else if(e&&e[0])for(n=0;e.length>n;n++)this._findAndDetachComponents(e[n],r);for(n=0,i;i=r[n];n++)this.addChildComponent(i)}},_shouldClearDomContentOnNextDraw:{value:!1},_findAndDetachComponents:{value:function(e,t){var n,i=e.component;if(t||(t=[]),i)i.detachFromParentComponent(),t.push(i);else{n=e.children||e.childNodes;for(var r,a=0;r=n[a];a++)this._findAndDetachComponents(r,t)}return t}},clonesChildComponents:{writable:!1,value:!1},_innerTemplate:{value:null},innerTemplate:{serializable:!1,get:function(){var e,t,n,i,r,a,o,s=this._innerTemplate;if(!s&&(e=this._ownerDocumentPart)){t=e.template,n=this.getElementId(),s=t.createTemplateFromElementContents(n),i=s.getSerialization(),r=i.getExternalObjectLabels(),a=e.objects,o=Object.create(null);for(var l,c=0;l=r[c];c++)o[l]=a[l];s.setInstances(o),this._innerTemplate=s}return s},set:function(e){this._innerTemplate=e}},canDraw:{value:function(){return this._canDraw}},_canDraw:{get:function(){return!this._canDrawGate||this._canDrawGate.value},set:function(e){rootComponent.componentCanDraw(this,e)},enumerable:!1},_prepareCanDraw:{enumerable:!1,value:function(){this._isComponentTreeLoaded||this.loadComponentTree().done()}},_blocksOwnerComponentDraw:{value:!1},_updateOwnerCanDrawGate:{value:function(){this._blocksOwnerComponentDraw&&this.ownerComponent&&this.ownerComponent.canDrawGate.setField(this.uuid,this.canDrawGate.value)}},_isComponentTreeLoaded:{value:null},shouldLoadComponentTree:{value:!0},_loadComponentTreeDeferred:{value:null},loadComponentTree:{value:function(){var e=this,t=this.canDrawGate,n=this._loadComponentTreeDeferred;return n||(n=Promise.defer(),this._loadComponentTreeDeferred=n,t.setField("componentTreeLoaded",!1),(this.needsDraw||this.hasTemplate)&&(this._canDraw=!1),this.expandComponent().then(function(){if(e.hasTemplate||e.shouldLoadComponentTree){for(var t,n=[],i=e.childComponents,r=0;t=i[r];r++)n.push(t.loadComponentTree());return Promise.all(n)}}).then(function(){e._isComponentTreeLoaded=!0,e._needsEnterDocument&&(e.needsDraw=!0),t.setField("componentTreeLoaded",!0),n.resolve()},n.reject).done()),n.promise}},traverseComponentTree:{value:function(e,t){function n(){var n,r,a=i.childComponents;if(e&&e(i)===!1)return t&&t(),void 0;if(0===(r=a.length))return t&&t(),void 0;for(var o=function(){0===--r&&t&&t()},s=0;n=a[s];s++)n.traverseComponentTree(e,o)}var i=this;this._isComponentExpanded?n():t&&t()}},_expandComponentDeferred:{value:null},expandComponent:{value:function(){var e=this,t=this._expandComponentDeferred;return t||(t=Promise.defer(),this._expandComponentDeferred=t,this.hasTemplate?this._instantiateTemplate().then(function(){e._isComponentExpanded=!0,e._addTemplateStyles(),e.needsDraw=!0,t.resolve()},t.reject):(this._isComponentExpanded=!0,t.resolve())),t.promise}},_templateObjectDescriptor:{value:{enumerable:!0,configurable:!0}},_setupTemplateObjects:{value:function(e){this.templateObjects=Object.create(null),this._addTemplateObjects(e)}},_addTemplateObjects:{value:function(e){var t=this._templateObjectDescriptor,n=this.templateObjects;for(var i in e){var r=e[i];"object"==typeof r&&null!=r&&(Component.prototype.isPrototypeOf(r)&&r!==this&&r.parentComponent!==this?(t.get=this._makeTemplateObjectGetter(this,i,r),Object.defineProperty(n,i,t)):n[i]=r)}}},_makeTemplateObjectGetter:{value:function(e,t,n){var i,r,a,o="@"+t;return function(){if(i)return e.querySelectorAllComponent(o,e);if(r=e.querySelectorAllComponent(o,e),1===r.length)for(a=r[0];a=a.parentComponent;){if(a===e)return Object.defineProperty(this,t,{value:r[0]}),r[0];if(a.clonesChildComponents)break}else if(0===r.length)return n;return i=!0,r}}},_instantiateTemplate:{value:function(){var e=this;return this._loadTemplate().then(function(t){if(!e._element)return console.error("Cannot instantiate template without an element.",e),Promise.reject(Error("Cannot instantiate template without an element.",e));var n=e.templateObjects,i=e._element.ownerDocument;return n||(n=Object.create(null)),n.owner=e,e._isTemplateInstantiated=!0,t.instantiateWithInstances(n,i).then(function(t){t.parentDocumentPart=e._ownerDocumentPart,e._templateDocumentPart=t,t.fragment=null}).fail(function(e){var n=e.stack||e;throw console.error("Error in",t.getBaseUrl()+":",n),e})})}},_templateDidLoad:{value:function(e){this._setupTemplateObjects(e.objects)}},_loadTemplatePromise:{value:null},_loadTemplate:{value:function(){var e,t=this,n=this._loadTemplatePromise;return n||(e=Montage.getInfoForObject(this),n=this._loadTemplatePromise=Template.getTemplateWithModuleId(this.templateModuleId,e.require).then(function(e){return t._template=e,t._isTemplateLoaded=!0,e})),n}},templateModuleId:{get:function(){return this._templateModuleId||this._getDefaultTemplateModuleId()}},_getDefaultTemplateModuleId:{value:function(){var e,t,n,i;return i=Montage.getInfoForObject(this),n=i.moduleId,t=n.lastIndexOf("/"),e=n+"/"+n.slice(-1===t?0:t+1,-5)+".html"}},deserializedFromSerialization:{value:function(){this.attachToParentComponent()}},_deserializedFromTemplate:{value:function(e,t,n){Montage.getInfoForObject(this).label=t,this._ownerDocumentPart=n,this.hasOwnProperty("identifier")||(this.identifier=t),this.ownerComponent||(this.ownerComponent=Component.prototype.isPrototypeOf(e)?e:this.rootComponent,this._updateOwnerCanDrawGate()),this._needsDrawInDeserialization&&(this.needsDraw=!0)}},blueprintModuleId:{serializable:!1,enumerable:!1,get:function(){var e=Montage.getInfoForObject(this),t=e&&!e.isInstance?this:Object.getPrototypeOf(this);if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=Montage.getInfoForObject(t);var n=e.moduleId,i=n.lastIndexOf("/"),r=n.lastIndexOf(".");i=-1===i?0:i+1,r=-1===r?n.length:r,r=i>r?n.length:r;var a;a=n.length>r&&".reel"===n.slice(r,n.length)?n+"/"+n.slice(i,r)+".meta":n.slice(0,r)+".meta",Montage.defineProperty(t,"_blueprintModuleId",{value:a})}return t._blueprintModuleId}},blueprint:require("../core/core")._blueprintDescriptor,gateDidBecomeTrue:{value:function(e){e===this._canDrawGate?(this._canDraw=!0,this._updateOwnerCanDrawGate()):e===this._blockDrawGate&&(rootComponent.componentBlockDraw(this),this._prepareCanDraw())},enumerable:!1},gateDidBecomeFalse:{value:function(e){e===this._canDrawGate&&this._updateOwnerCanDrawGate()},enumerable:!1},_canDrawGate:{enumerable:!1,value:null},_preparedForActivationEvents:{enumerable:!1,value:!1},_arrayObjectPool:{value:{pool:null,size:200,ix:0}},_getArray:{value:function(){if(null==this._arrayObjectPool.pool){this._arrayObjectPool.pool=[];for(var e=0;this._arrayObjectPool.size>e;e++)this._arrayObjectPool.pool[e]=[]}return this._arrayObjectPool.ix<this._arrayObjectPool.size?this._arrayObjectPool.pool[this._arrayObjectPool.ix++]:[]}},_disposeArray:{value:function(e){this._arrayObjectPool.ix>0&&(e.length=0,this._arrayObjectPool.pool[--this._arrayObjectPool.ix]=e)}},_drawIfNeeded:{enumerable:!1,value:function(e){var t,n,i,r,a=this._firstDraw;if(this._treeLevel=e,a&&(this.originalElement=this.element),this.needsDraw&&rootComponent.addToDrawCycle(this),a&&this.prepareForDraw&&Montage.callDeprecatedFunction(this,this.prepareForDraw,"prepareForDraw","enterDocument(firstTime)"),this._needsEnterDocument&&(this._needsEnterDocument=!1,this._inDocument=!0,"function"==typeof this.enterDocument&&this.enterDocument(a),this._enterDocument(a)),a&&(this.originalElement=null),null!==this._drawList&&this._drawList.length>0){for(n=this._drawList,this._drawList=this._getArray(),r=n.length,i=0;r>i;i++)t=n[i],t._addedToDrawList=!1,t.canDraw()?t._drawIfNeeded(e+1):drawLogger.isDebug&&drawLogger.debug(loggerToString(t)+" can't draw.");this._disposeArray(n)}}},_updateComponentDom:{value:function(){var e,t,n;if(this._firstDraw){for(this._prepareForDraw(),t=this.composerList.length,n=0;t>n;n++)e=this.composerList[n],e.lazyLoad||e._load();this._firstDraw=!1}(null!==this._newDomContent||this._shouldClearDomContentOnNextDraw)&&(drawLogger.isDebug&&logger.debug("Component content changed: component ",this._montage_metadata.objectName,this.identifier," newDomContent",this._newDomContent),this._performDomContentChanges())}},_replaceElementWithTemplate:{enumerable:!1,value:function(){var e,t,n,i,r,a=this.element,o=this._templateElement,s=this.element.attributes;for(n=0;i=s[n];n++)e=i.nodeName,window._montage_le_flag&&e===ATTR_LE_COMPONENT?t=i.nodeValue:"id"===e||"data-montage-id"===e?t=i.nodeValue:(r=o.getAttribute(e)||"",t=r?r+("style"===e?"; ":" ")+i.nodeValue:i.nodeValue),o.setAttribute(e,t);this._initializeClassListFromElement(o),a.parentNode?a.parentNode.replaceChild(o,a):this._canDrawOutsideDocument||console.warn("Warning: Trying to replace element ",a," which has no parentNode"),this.eventManager.unregisterEventHandlerForElement(a),this.eventManager.registerEventHandlerForElement(this,o),this._element=o,this._templateElement=null,this._newDomContent&&(this._newDomContent=null,this._shouldClearDomContentOnNextDraw=!1)}},_addTemplateStyles:{value:function(){var e,t,n,i=this._templateDocumentPart;if(i){e=i.template.getResources(),n=this.element.ownerDocument,t=e.createStylesForDocument(n);for(var r,a=0;r=t[a];a++)this.rootComponent.addStylesheet(r)}}},_prepareForDraw:{value:function(){logger.isDebug&&logger.debug(this,"_templateElement: "+this._templateElement);var e;window._montage_le_flag&&(e=this.element.children.length>0),this._initDomArguments(),e&&this._leTagArguments(),this._templateElement&&(this._bindTemplateParametersToArguments(),this._replaceElementWithTemplate())},enumerable:!1},_leTagArguments:{value:function(){var e=this.ownerComponent._montage_metadata.moduleId,t=this._montage_metadata.label,n=this.getDomArgumentNames();if(0===n.length)this._leTagStarArgument(e,t,this.element);else for(var i,r=0;i=n[r];r++)this._leTagNamedArgument(e,t,this._domArguments[i],i)}},_getNodeFirstElement:{value:function(e){var t=e.firstElementChild;if(!t){t=e.firstChild;do if(t.nodeType===Node.ELEMENT_NODE)break;while(t=t.nextSibling)}return t}},_getNodeLastElement:{value:function(e){var t=e.lastElementChild;if(!t){t=e.lastChild;do if(t.nodeType===Node.ELEMENT_NODE)break;while(t=t.previousSibling)}return t}},_leTagStarArgument:{value:function(e,t,n){var i=this._getNodeFirstElement(n),r=this._getNodeLastElement(n);i.setAttribute(ATTR_LE_ARG_BEGIN,(i.getAttribute(ATTR_LE_ARG_BEGIN)||"")+" "+e+","+t),r.setAttribute(ATTR_LE_ARG_END,(r.getAttribute(ATTR_LE_ARG_END)||"")+" "+e+","+t)}},_leTagNamedArgument:{value:function(e,t,n,i){n.setAttribute(ATTR_LE_ARG,e+","+t+","+i)}},_bindTemplateParametersToArguments:{value:function(){var e,t,n,i,r,a,o,s,l=this._templateDocumentPart.parameters;if(t=this._domArguments,this._template.hasParameters()||1!==t.length){if(i=this._validateTemplateArguments(t,l))throw i;for(var c in l){e=l[c],n=t[c],"*"===c?(o=this._element.ownerDocument.createRange(),o.selectNodeContents(this._element),r=o.extractContents()):r=n,a=this._findAndDetachComponents(r),e.parentNode.replaceChild(r,e);for(var u=0;s=a[u];u++)s.attachToParentComponent()}}}},_validateTemplateArguments:{value:function(e,t){var n,i,r=Object.keys(t);if(0!==r.length)if(null==e){if(r.length>0)return Error("No arguments provided for "+this.templateModuleId+". Arguments needed: "+r+".")}else if("*"in t){if(n=Object.keys(e),n.length>0)return Error('Arguments "'+n+'" were given to component but no named parameters '+"are defined in "+this.templateModuleId)}else{for(i in t)if(!(i in e))return Error('"'+i+'" argument not '+"given in "+this.templateModuleId);for(i in e)if("*"!==i&&!(i in t))return Error('"'+i+'" parameter does '+"not exist in "+this.templateModuleId)}}},prepareForActivationEvents:{enumerable:!1,value:null},_prepareForActivationEvents:{value:function(){var e,t=this.composerList.length;for(t=0;this.composerList.length>t;t++)e=this.composerList[t],e.lazyLoad&&e._load();"function"==typeof this.prepareForActivationEvents&&this.prepareForActivationEvents()}},_performDomContentChanges:{value:function(){var e,t,n=this._newDomContent,i=this._element.childNodes[0];if(n||this._shouldClearDomContentOnNextDraw){t=this._element,e=this._element.childNodes.length;for(var r=0;e>r;r++)t.removeChild(t.firstChild);if(Element.isElement(n))t.appendChild(n);else if(null!=n)for(var a,r=0;a=n[r];r++)t.appendChild(a);this._newDomContent=null,"function"==typeof this.contentDidChange&&this.contentDidChange(this._element.childNodes[0],i),this._shouldClearDomContentOnNextDraw=!1}}},prepareForDraw:{enumerable:!1,value:null},draw:{enumerable:!1,value:function(){}},willDraw:{enumerable:!1,value:null},didDraw:{enumerable:!1,value:function(){}},_addedToDrawList:{value:!1},_addToParentsDrawList:{enumerable:!1,value:function(){if(!this._addedToDrawList){var e=this.parentComponent;e?(e._addToDrawList(this),drawListLogger.isDebug&&drawListLogger.debug(loggerToString(this)+" added to "+loggerToString(e)+"'s drawList")):drawListLogger.isDebug&&drawListLogger.debug(this,"parentComponent is null")}}},_needsDraw:{value:!1},_needsDrawInDeserialization:{value:!1},needsDraw:{enumerable:!1,get:function(){return!!this._needsDraw},set:function(e){return this.isDeserializing?(this._needsDrawInDeserialization=!0,void 0):(this._needsDraw!==e&&(needsDrawLogger.isDebug&&needsDrawLogger.debug("needsDraw toggled "+e+" for "+this._montage_metadata.objectName),this._needsDraw=!!e,e&&(this.canDrawGate.value?this._addToParentsDrawList():this.blockDrawGate.setField("drawRequested",!0))),void 0)}},_drawList:{value:null},__addToDrawList:{enumerable:!1,value:function(e){null===this._drawList?(this._drawList=[e],e._addedToDrawList=!0):-1===this._drawList.indexOf(e)&&(this._drawList.push(e),e._addedToDrawList=!0)}},_addToDrawList:{enumerable:!1,value:function(e){this.__addToDrawList(e),this._addToParentsDrawList()}},_templateElement:{enumerable:!1,value:null},surrenderPointer:{value:function(){return!0}},composerList:{value:[],distinct:!0,serializable:!1},addComposer:{value:function(e){this.addComposerForElement(e,e.element)}},addComposerForElement:{value:function(e,t){e.component=this,e.element=t,this.composerList.push(e),this._firstDraw||(e.lazyLoad?this._preparedForActivationEvents&&e._load():e._load())}},scheduleComposer:{value:function(e){this.rootComponent.addToComposerList(e)}},removeComposer:{value:function(e){var t,n;for(n=this.composerList.length,t=0;n>t;t++)if(this.composerList[t].uuid===e.uuid){this.composerList[t].unload(),this.composerList.splice(t,1);break}}},clearAllComposers:{value:function(){var e,t,n=this.composerList;for(t=n.length,e=0;t>e;e++)n[e].unload();n.splice(0,t)}},localizer:{value:null},_waitForLocalizerMessages:{value:!1},waitForLocalizerMessages:{enumerable:!1,get:function(){return this._waitForLocalizerMessages},set:function(e){if(this._waitForLocalizerMessages!==e)if(e!==!0||this.localizer.messages)this._waitForLocalizerMessages=!1,this.canDrawGate.setField("messages",!0);else{if(!this.localizer)throw"Cannot wait for messages on localizer if it is not set";this._waitForLocalizerMessages=!0;var t=this;logger.debug(this,"waiting for messages from localizer"),this.canDrawGate.setField("messages",!1),this.localizer.messagesPromise.then(function(){logger.isDebug&&logger.debug(t,"got messages from localizer"),t.canDrawGate.setField("messages",!0)})}}},_elementAttributeValues:{value:null},_elementAttributeDescriptors:{value:null},_getElementAttributeDescriptor:{value:function(e){for(var t,n=this;n&&n._elementAttributeDescriptors&&!(t=n._elementAttributeDescriptors[e]);)n=Object.getPrototypeOf(n);return t}},defineAttribute:{value:function(e,t){t=t||{};var n="_"+e,i={configurable:t.configurable===void 0?!0:t.configurable,enumerable:t.enumerable===void 0?!0:t.enumerable,set:function(e,t){return function(n){var i=this._getElementAttributeDescriptor(e,this);i&&"boolean"===i.dataType&&(n=n||""===n?!0:!1),n!==void 0&&this[t]!==n&&(this[t]=n,null===this._elementAttributeValues&&(this._elementAttributeValues={}),this._elementAttributeValues[e]=n,this.needsDraw=!0)}}(e,n),get:function(e,t){return function(){return this[t]}}(e,n)};Montage.defineProperty(this.prototype,n,{value:null}),Montage.defineProperty(this.prototype,e,i)}},addAttributes:{value:function(e){var t,n,i;this.prototype._elementAttributeDescriptors=e;for(n in e)e.hasOwnProperty(n)&&(i=e[n],null===i||"string"==typeof i?(t={value:i,dataType:"string"},e[n]=t):t=i,this[n]===void 0&&this.defineAttribute(n,t))}},_enterDocument:{value:function(e){var t;if(e){t=this.originalElement;var n,i,r,a,o,s,l;if(n=t.attributes)for(r=n.length,i=0;r>i;i++)a=n[i].name,o=n[i].value,l=this._getElementAttributeDescriptor(a,this),(l||this[a]!==void 0)&&(null===this._elementAttributeValues&&(this._elementAttributeValues={}),this._elementAttributeValues[a]===void 0&&(this._elementAttributeValues[a]=o,(this[a]===void 0||null==this[a])&&(this[a]=o)));if(l=this._getElementAttributeDescriptor("textContent",this)){var c=t.textContent;null===this._elementAttributeValues&&(this._elementAttributeValues={}),this._elementAttributeValues.textContent===void 0&&(this._elementAttributeValues.textContent=c,null==this.textContent&&(this.textContent=c))}if(this._elementAttributeDescriptors)for(s in this._elementAttributeDescriptors){l=this._elementAttributeDescriptors[s];var u="_"+s;null===this[u]&&null!==l&&"value"in l&&(this[u]=this._elementAttributeDescriptors[s].value)}}}},_draw:{value:function(){var e,t=this.element;for(var n in this._elementAttributeValues)if(this._elementAttributeValues.hasOwnProperty(n)){var i=this[n];e=this._getElementAttributeDescriptor(n,this),e&&("boolean"===e.dataType?i===!0?(t[n]=!0,t.setAttribute(n,n.toLowerCase())):(t[n]=!1,t.removeAttribute(n)):i!==void 0&&("textContent"===n?t.textContent=i:t.setAttribute(n,i))),delete this._elementAttributeValues[n]}this._drawClassListIntoComponent()}},_classList:{value:null},_classListDirty:{value:!1},classList:{get:function(){return null===this._classList&&(this._classList=new Set,this._subscribeToToClassListChanges(),this._initializeClassListFromElement(this.element)),this._classList}},_initializeClassListFromElement:{value:function(e){if(e&&e.classList&&e.classList.length>0){var t=this.classList;this._unsubscribeToClassListChanges&&this._unsubscribeToClassListChanges(),t.addEach(e.classList),this._subscribeToToClassListChanges()}}},_unsubscribeToClassListChanges:{value:null},_subscribeToToClassListChanges:{value:function(){this._unsubscribeToClassListChanges=this._classList.addRangeChangeListener(this,"classList")}},handleClassListRangeChange:{value:function(){this._classListDirty=!0,this.needsDraw=!0}},_drawClassListIntoComponent:{value:function(){if(this._classListDirty){for(var e,t=this.element.classList,n=this._classList,i=0,r=t.length;r>i;i++)e=t.item(i),n.has(e)||(t.remove(e),i--,r--);this._classList.forEach(function(e){t.add(e)}),this._classListDirty=!1}}},dispose:{value:function(){this.cancelBindings(),this.detachFromParentComponent(),this._element&&(defaultEventManager.unregisterEventHandlerForElement(this._element),this._element=null),this.childComponents.forEach(function(e){e.dispose()})}}}),RootComponent=Component.specialize({constructor:{value:function RootComponent(){this.super(),this._drawTree=this._drawTree.bind(this),this._readyToDrawListIndex={}}},init:{value:function(){return this}},needsDraw:{enumerable:!0,get:function(){return!1},set:function(e){if(this._needsDraw!==e&&(this._needsDraw=!!e,e))for(var t,n=this.childComponents,i=0;t=n[i];i++)needsDrawLogger.isDebug&&needsDrawLogger.debug(this,"needsDraw = true for: "+t._montage_metadata.exportedSymbol),t.needsDraw=!0}},canDrawGate:{get:function(){return this._canDrawGate||(this._canDrawGate=(new Gate).initWithDelegate(this))}},_clearNeedsDrawTimeOut:{value:null},_needsDrawList:{value:[]},_cannotDrawList:{value:null},componentBlockDraw:{value:function(e){this._cannotDrawList=this._cannotDrawList?this._cannotDrawList:{},this._cannotDrawList[e.uuid]=e,this._clearNeedsDrawTimeOut&&(window.clearTimeout(this._clearNeedsDrawTimeOut),this._clearNeedsDrawTimeOut=null)}},isComponentWaitingNeedsDraw:{value:function(e){return e.uuid in this._cannotDrawList||this._needsDrawList.indexOf(e)>=0}},componentCanDraw:{value:function(e,t){if(t){if(!this._cannotDrawList)return;if(delete this._cannotDrawList[e.uuid],this._needsDrawList.push(e),0===Object.keys(this._cannotDrawList).length&&this._needsDrawList.length>0&&!this._clearNeedsDrawTimeOut){var n=this;this._clearNeedsDrawTimeOut=window.setTimeout(function(){n._clearNeedsDrawList()},0)}}else this._clearNeedsDrawTimeOut&&(window.clearTimeout(this._clearNeedsDrawTimeOut),this._clearNeedsDrawTimeOut=null)}},_clearNeedsDrawList:{value:function(){var e,t,n,i=this._needsDrawList;for(n=i.length,t=0;n>t;t++)e=i[t],(e.needsDraw||e._drawList&&e._drawList.length>0)&&e._addToParentsDrawList();this._clearNeedsDrawTimeOut=null,i.splice(0,n)}},removeFromCannotDrawList:{value:function(e){if(this._cannotDrawList&&(delete this._cannotDrawList[e.uuid],0===Object.keys(this._cannotDrawList).length&&this._needsDrawList.length>0&&!this._clearNeedsDrawTimeOut)){var t=this;this._clearNeedsDrawTimeOut=window.setTimeout(function(){t._clearNeedsDrawList()},0)}}},_cancelDrawIfScheduled:{value:function(){var e=this.requestedAnimationFrame,t=this.cancelAnimationFrame;
null!==e&&(this._frameTime||(logger.isDebug&&logger.debug(this,"clearing draw"),t?t.call(window,e):window.clearTimeout(e),this.requestedAnimationFrame=null))}},_addToDrawList:{value:function(e){this.__addToDrawList(e),drawListLogger.isDebug&&drawListLogger.debug(this,this.canDrawGate.value,this.requestedAnimationFrame),this.drawTree()},enumerable:!1},addToComposerList:{value:function(e){this.composerList.push(e),drawLogger.isDebug&&drawLogger.debug(this,e,"Added to composer list"),this._scheduleComposerRequest=!0,this.drawTree()}},composerListSwap:{value:[],distinct:!0},_scheduleComposerRequest:{value:!1},requestedAnimationFrame:{value:null,enumerable:!1},requestAnimationFrame:{value:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,enumerable:!1},cancelAnimationFrame:{value:window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame,enumerable:!1},_frameTime:{value:null},_oldSource:{value:null},_diff:{value:function(e,t){for(var n={},i={},r=0;t.length>r;r++)null==n[t[r]]&&(n[t[r]]={rows:[],o:null}),n[t[r]].rows.push(r);for(r=0;e.length>r;r++)null==i[e[r]]&&(i[e[r]]={rows:[],n:null}),i[e[r]].rows.push(r);for(r in n)1===n[r].rows.length&&i[r]!==void 0&&1===i[r].rows.length&&(t[n[r].rows[0]]={text:t[n[r].rows[0]],row:i[r].rows[0]},e[i[r].rows[0]]={text:e[i[r].rows[0]],row:n[r].rows[0]});for(r=0;t.length-1>r;r++)null!=t[r].text&&null==t[r+1].text&&t[r].row+1<e.length&&null==e[t[r].row+1].text&&t[r+1]==e[t[r].row+1]&&(t[r+1]={text:t[r+1],row:t[r].row+1},e[t[r].row+1]={text:e[t[r].row+1],row:r+1});for(r=t.length-1;r>0;r--)null!=t[r].text&&null==t[r-1].text&&t[r].row>0&&null==e[t[r].row-1].text&&t[r-1]==e[t[r].row-1]&&(t[r-1]={text:t[r-1],row:t[r].row-1},e[t[r].row-1]={text:e[t[r].row-1],row:r-1});return{o:e,n:t}}},_previousDrawDate:{enumerable:!1,value:0},_documentResources:{value:null},_needsStylesheetsDraw:{value:!1},_stylesheets:{value:[]},addStylesheet:{value:function(e){this._stylesheets.push(e),this._needsStylesheetsDraw=!0}},drawStylesheets:{value:function(){for(var e,t=this._documentResources,n=this._stylesheets;e=n.shift();)t.addStyle(e);this._needsStylesheetsDraw=!1}},drawTree:{value:function(){if(null===this.requestedAnimationFrame){var e=this.requestAnimationFrame;if(e)this.requestedAnimationFrame=e.call(window,this._drawTree);else{var t=Date.now(),n=17-t+this._previousDrawDate;0>n&&(n=0),this.requestedAnimationFrame=setTimeout(this._drawTree,n),this._previousDrawDate=t+n}this._scheduleComposerRequest=!1}},enumerable:!1},_drawTree:{value:function(e){var t;if(this._needsStylesheetsDraw&&this.drawStylesheets(),!this._documentResources.areStylesLoaded)return drawPerformanceLogger.isDebug&&console.log("Draw Cycle Waiting Stylesheets: ",this._documentResources._expectedStyles.length),this.requestedAnimationFrame=null,this.drawTree(),void 0;if(drawPerformanceLogger.isDebug&&(t=window.performance?window.performance.now():Date.now()),this._frameTime=e?e:Date.now(),this._clearNeedsDrawTimeOut&&this._clearNeedsDrawList(),drawLogger.isDebug){var n=document.body.innerHTML;if(this._oldSource&&n!==this._oldSource){for(var i=["DOM modified outside of the draw loop"],r=this._diff(this._oldSource.split("\n"),n.split("\n")),a=0;r.n.length>a;a++)if(null==r.n[a].text)i.push("+ "+r.n[a]);else for(var o=r.n[a].row+1;r.o.length>o&&null==r.o[o].text;o++)i.push("- "+r.o[o]);console.warn(i.join("\n"))}console.group((e?drawLogger.toTimeString(new Date(e))+" ":"")+"Draw Fired")}if(this.drawIfNeeded(),drawPerformanceLogger.isDebug){if(window.performance)var s=window.performance.now();else var s=Date.now();console.log("Draw Cycle Time: ",s-t,", Components: ",this._lastDrawComponentsCount)}drawLogger.isDebug&&(console.groupEnd(),this._oldSource=document.body.innerHTML),this._frameTime=null,this._scheduleComposerRequest&&this.drawTree()}},_readyToDrawList:{enumerable:!1,value:[]},_readyToDrawListIndex:{enumerable:!1,value:null},addToDrawCycle:{value:function(e){var t=this._readyToDrawListIndex;return t.hasOwnProperty(e.uuid)?(drawLogger.isDebug&&this!==rootComponent&&drawLogger.debug(loggerToString(this)+" added to the draw cycle twice, this should not happen."),void 0):(this._readyToDrawList.push(e),this._readyToDrawListIndex[e.uuid]=!0,e._updateComponentDom(),void 0)}},_lastDrawComponentsCount:{value:null},_sortByLevel:{value:function(e,t){return e._treeLevel-t._treeLevel}},drawIfNeeded:{value:function(){var e,t,n,i,r,a,o=this._readyToDrawList,s=0,l=this.composerList;if(o.length=0,a=l.length,this._readyToDrawListIndex.clear(),a>0){for(this.composerList=this.composerListSwap,t=0;a>t;t++)r=l[t],r.needsFrame=!1,r.frame(this._frameTime);l.splice(0,a),this.composerListSwap=l}for(this._drawIfNeeded(0),n=o.length,drawLogger.isDebug&&console.groupCollapsed("willDraw - "+o.length+(o.length>1?" components.":" component."));n>s;){for(t=s;n>t;t++)e=o[t],"function"==typeof e.willDraw&&e.willDraw(this._frameTime),drawLogger.isDebug&&drawLogger.debug("Level "+e._treeLevel+" "+loggerToString(e));this._drawIfNeeded(0),s=n,n=o.length}for(drawLogger.isDebug&&(console.groupEnd(),console.group("draw - "+o.length+(o.length>1?" components.":" component."))),o.sort(this._sortByLevel),t=0;n>t;t++)e=o[t],e.needsDraw=!1;for(this.requestedAnimationFrame=null,t=n-1;t>=0;t--)e=o[t],e._draw(this._frameTime),e.draw(this._frameTime),drawLogger.isDebug&&drawLogger.debug("Level "+e._treeLevel+" "+loggerToString(e));for(drawLogger.isDebug&&(console.groupEnd(),console.groupCollapsed("didDraw - "+o.length+(o.length>1?" components.":" component."))),t=0;n>t;t++)e=o[t],e.didDraw(this._frameTime),"channelListItem"===e.identifier&&console.log("component %s completedFirstDraw %s",Object.hash(e),e._completedFirstDraw),e._completedFirstDraw||(i=document.createEvent("CustomEvent"),i.initCustomEvent("firstDraw",!0,!1,null),e.dispatchEvent(i),e._completedFirstDraw=!0),drawLogger.isDebug&&drawLogger.debug("Level "+e._treeLevel+" "+loggerToString(e));return drawLogger.isDebug&&console.groupEnd(),drawPerformanceLogger.isDebug&&(this._lastDrawComponentsCount=o.length),!!o.length}},element:{get:function(){return this._element},set:function(e){defaultEventManager.registerEventHandlerForElement(this,e),this._element=e,this._documentResources=DocumentResources.getInstanceForDocument(e)}}}),rootComponent=(new RootComponent).init();exports.__root__=rootComponent;