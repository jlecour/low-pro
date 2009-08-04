LowPro = {};
LowPro.Version = '<%= LOW_PRO_VERSION %>';
LowPro.CompatibleWithPrototype = '<%= LOW_PRO_COMPATIBLE_WITH_PROTOTYPE_VERSION %>';

if (Prototype.Version.indexOf(LowPro.CompatibleWithPrototype) != 0 && window.console && window.console.warn)
  console.warn("This version of Low Pro is tested with Prototype " + LowPro.CompatibleWithPrototype + 
                  " it may not work as expected with this version (" + Prototype.Version + ")");

if (!Element.addMethods) 
  Element.addMethods = function(o) { Object.extend(Element.Methods, o) };

//= require "dom"
//= require "domready"
//= require "behavior"
//= require "core_behaviors"