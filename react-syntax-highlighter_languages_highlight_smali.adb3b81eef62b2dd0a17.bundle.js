(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{3307:function(module,exports){module.exports=function(hljs){var smali_instr_low_prio=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"];return{aliases:["smali"],contains:[{className:"string",begin:'"',end:'"',relevance:0},hljs.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"].join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+smali_instr_low_prio.join("|")+")\\s"},{begin:"\\s("+smali_instr_low_prio.join("|")+")((\\-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"].join("|")+")((\\-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:"L[^(;:\n]*;",relevance:0},{begin:"[vp][0-9]+"}]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_smali.adb3b81eef62b2dd0a17.bundle.js.map