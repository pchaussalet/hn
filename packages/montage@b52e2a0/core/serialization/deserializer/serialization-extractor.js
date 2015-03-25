var Montage=require("../../core").Montage,MontageReviver=require("./montage-reviver").MontageReviver,parse=require("frb/parse"),SerializationExtractor=Montage.specialize({_serialization:{value:null},initWithSerialization:{value:function(t){this._serialization=t}},extractObjects:{value:function(t,e){var n=this._serialization,i={};e=e||[];for(var r,a=0;r=t[a];a++)r in n&&(i[r]=n[r],this._findLabels(r,e));for(var r,a=0;r=e[a];a++)!(r in i)&&r in n&&(i[r]={});return JSON.parse(JSON.stringify(i))}},_findLabels:{value:function(t,e){var n;if(-1===e.indexOf(t)){if(!(t in this._serialization))throw Error("Object '"+t+"' not found.");e.push(t),n=this._serialization[t],this._collectLabels(n,e),this._collectLabelsInUnits(n,e)}}},_collectLabels:{value:function(t,e){var n,i=MontageReviver.getTypeOf(t);if("reference"===i)n=t["@"],this._findLabels(n,e);else if("array"===i)for(var r=0,a=t.length;a>r;r++)this._collectLabels(t[r],e);else if("object"===i)for(var o in t)this._collectLabels(t[o],e)}},_collectLabelsInUnits:{value:function(t,e){"bindings"in t?this._collectLabelsInBindings(t.bindings,e):"localizations"in t&&this._collectLabelsInLocalizations(t.localizations,e)}},_collectLabelsInBindings:{value:function(t,e){var n,i;for(var r in t)n=t[r],i=n["<-"]||n["<->"],this._collectLabelsInBindingPath(i,e)}},_collectLabelsInBindingPath:{value:function(t,e){var n=this,i=parse(t);this._traverseBindingParseTree(i,function(t){n._findLabels(t.label,e)})}},_traverseBindingParseTree:{value:function(t,e){var n=t.args;if("component"===t.type&&e(t),n)for(var i=0,r=n.length;r>i;i++)this._traverseBindingParseTree(n[i],e)}},_collectLabelsInLocalizations:{value:function(t,e){for(var n in t)this._collectLabelsInLocalizationProperty(t[n],e)}},_collectLabelsInLocalizationProperty:{value:function(t,e){var n;if("key"in t&&this._collectLabelsInLocalizationBinding(t.key,e),"default"in t&&this._collectLabelsInLocalizationBinding(t.default,e),"data"in t){n=t.data;for(var i in n)this._collectLabelsInLocalizationBinding(n[i],e)}}},_collectLabelsInLocalizationBinding:{value:function(t,e){var n=t["<-"]||t["<->"];n&&this._collectLabelsInBindingPath(n,e)}}});exports.SerializationExtractor=SerializationExtractor;