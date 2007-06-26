// ==UserScript==
// @name           PlatformUITriageHelper
// @namespace      http://www.eclipse.org/eclipse/platform-ui/greasemonkey
// @description    Helps triaging bugs for Platform/UI
// @include        https://bugs.eclipse.org/bugs/show_bug.cgi?id=*
// ==/UserScript==

// Copyright (c) 2000, 2007 IBM Corporation and others.
// All rights reserved. This program and the accompanying materials
// are made available under the terms of the Eclipse Public License v1.0
// which accompanies this distribution, and is available at
// http://www.eclipse.org/legal/epl-v10.html
//
// Contributors:
//     IBM Corporation - initial API and implementation
window.addEventListener("load", function() {
  var els = document.forms[0].elements;
  var component;
  var assigned_to;
  var short_desc;
  for (var i=0; i<els.length; i++) {
    if (els[i].name=="component") component = i;
    if (els[i].name=="assigned_to") assigned_to = i;
    if (els[i].name=="short_desc") short_desc = i;
  }
//alert("indices: " + component + ", " + assigned_to + ", " + short_desc);
  var assigned_to = document.forms[0].elements[assigned_to];
  if(assigned_to.value != "Platform-UI-Inbox@eclipse.org" && assigned_to.value != "platform-ide-inbox@eclipse.org")
    return;
  document.forms[0].elements[component].addEventListener('change', function(){ var b=document.getElementById('knob-reassign-cmp');b.checked=true;b.scrollIntoView(true); }, false);
  function buttonFor(comp, owner) {
    var onClick = "var b=document.getElementById('knob-reassign');";
    onClick += "b.checked=true;";
    onClick += "b.nextSibling.nextSibling.nextSibling.value='"+owner+"';";
    onClick += "var d = document.forms[0].elements[" + short_desc + "];";
    onClick += "d.value = '["+comp+"] ' + d.value;";
    onClick += "d.scrollIntoView(true);";
    return '<input type="button" value="' + comp + '" onClick="' + onClick + '" />';
  }
  var header = document.getElementById('header');
  var myDiv = document.createElement('div');
  var buttons = "";
  buttons += buttonFor("About","Kim_Horne@ca.ibm.com");
  buttons += buttonFor("ActionSets","pwebster@ca.ibm.com");
  buttons += buttonFor("ActivityMgmt","kim_horne@ca.ibm.com");
  buttons += buttonFor("BiDi","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("CellEditors","emoffatt@ca.ibm.com");
  buttons += buttonFor("Commands","pwebster@ca.ibm.com");
  buttons += buttonFor("CommonNavigator","mdelder@us.ibm.com");
  buttons += buttonFor("Contexts","pwebster@ca.ibm.com");
  buttons += buttonFor("Contributions","pwebster@ca.ibm.com");
  buttons += buttonFor("Coolbar","emoffatt@ca.ibm.com");
  buttons += buttonFor("DataBinding","Boris_Bokowski@ca.ibm.com");
  buttons += buttonFor("Decorators","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("DetachedView","emoffatt@ca.ibm.com");
  buttons += buttonFor("Dialogs","susan_franklin@us.ibm.com");
  buttons += buttonFor("DND","emoffatt@ca.ibm.com");
  buttons += buttonFor("DynamicUI","kim_horne@ca.ibm.com");
  buttons += buttonFor("EditorMgmt","Boris_Bokowski@ca.ibm.com");
  buttons += buttonFor("EFS","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("ErrorHandling","kim_horne@ca.ibm.com");
  buttons += buttonFor("Examples","pwebster@ca.ibm.com");
  buttons += buttonFor("FastView","emoffatt@ca.ibm.com");
  buttons += buttonFor("Features","kim_horne@ca.ibm.com");
  buttons += buttonFor("FieldAssist","susan_franklin@us.ibm.com");
  buttons += buttonFor("GlobalActions","pwebster@ca.ibm.com");
  buttons += buttonFor("Graphics","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("GTK/Linux","pwebster@ca.ibm.com");
  buttons += buttonFor("Help","emoffatt@ca.ibm.com");
  buttons += buttonFor("IDE","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("Intro","pwebster@ca.ibm.com");
  buttons += buttonFor("Import/Export","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("JFace","susan_franklin@us.ibm.com");
  buttons += buttonFor("KeyBindings","pwebster@ca.ibm.com");
  buttons += buttonFor("LinkedResources","Boris_Bokowski@ca.ibm.com");
  buttons += buttonFor("Mac","Kim_Horne@ca.ibm.com");
  buttons += buttonFor("Markers","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("Metadata","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("Model","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("MPE","pwebster@ca.ibm.com");
  buttons += buttonFor("Navigator","Mike_Wilson@ca.ibm.com");
  buttons += buttonFor("OLE","emoffatt@ca.ibm.com");
  buttons += buttonFor("OpenModes","Boris_Bokowski@ca.ibm.com");
  buttons += buttonFor("Outline","Mike_Wilson@ca.ibm.com");
  buttons += buttonFor("PerspectiveBar","emoffatt@ca.ibm.com");
  buttons += buttonFor("Perspectives","pwebster@ca.ibm.com");
  buttons += buttonFor("Preferences","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("PresentationAPI","pwebster@ca.ibm.com");
  buttons += buttonFor("Presentations","pwebster@ca.ibm.com");
  buttons += buttonFor("Progress","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("PropertiesDialog","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("PropertiesView","emoffatt@ca.ibm.com");
  buttons += buttonFor("QuickAccess","Boris_Bokowski@ca.ibm.com");
  buttons += buttonFor("RCP","Boris_Bokowski@ca.ibm.com");
  buttons += buttonFor("TabbedProperties","anthonyh@ca.ibm.com");
  buttons += buttonFor("Themes","kim_horne@ca.ibm.com");
  buttons += buttonFor("Trim","emoffatt@ca.ibm.com");
  buttons += buttonFor("Undo","susan_franklin@us.ibm.com");
  buttons += buttonFor("ViewMgmt","Boris_Bokowski@ca.ibm.com");
  buttons += buttonFor("Viewers","Boris_Bokowski@ca.ibm.com");
  buttons += buttonFor("Win32","emoffatt@ca.ibm.com");
  buttons += buttonFor("Wizards","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("Workbench","Tod_Creasey@ca.ibm.com");
  buttons += buttonFor("WorkbenchParts","pwebster@ca.ibm.com");
  buttons += buttonFor("WorkbenchLauncher","kim_horne@ca.ibm.com");
  buttons += buttonFor("WorkingSets","kim_horne@ca.ibm.com");  
  myDiv.innerHTML = '<div style="border: solid black 2px">' + buttons + '</div>';
  header.parentNode.insertBefore(myDiv, header);
}, false);
