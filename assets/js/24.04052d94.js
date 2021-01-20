(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{396:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"creating-monitors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-monitors"}},[t._v("#")]),t._v(" Creating Monitors!")]),t._v(" "),n("p",[t._v("Holy bananza! You even got the entire languages complete. You are well on your\nway to mastering 23 different languages. Now we are going to down and dirty with\nmonitors.")]),t._v(" "),n("h2",{attrs:{id:"what-is-a-monitor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-monitor"}},[t._v("#")]),t._v(" What is a monitor?")]),t._v(" "),n("p",[t._v("Monitors are functions that will run on every single message that is sent in\nevery channel that your bot has permissions to read. When you want to do\nsomething on every single message that is sent, the best way to do that is to\ncreate a new monitor.")]),t._v(" "),n("h2",{attrs:{id:"command-handler-monitor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-handler-monitor"}},[t._v("#")]),t._v(" Command Handler Monitor")]),t._v(" "),n("p",[t._v("Discordeno come built with a monitor called "),n("code",[t._v("commandHandler")]),t._v(". This monitor runs\non every message sent and figures out if it is a command and executes the\ncommand. If it is a valid command with a valid prefix, Discordeno runs that\ncommand.")]),t._v(" "),n("p",[t._v("Let's try and create our own monitor so we can understand it better. Suppose we\nwanted to build a filter that would delete any message which included a discord\ninvite link.")]),t._v(" "),n("h2",{attrs:{id:"creating-invite-filter-monitor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-invite-filter-monitor"}},[t._v("#")]),t._v(" Creating Invite Filter Monitor")]),t._v(" "),n("p",[t._v("To start, we make a new file in the monitors folder called "),n("code",[t._v("inviteFilter.ts")]),t._v(".\nThen you can paste in the following base monitor snippet.")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" botCache "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../deps.ts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbotCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"monitorname"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"monitorname"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ignoreBots"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ignoreOthers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ignoreEdits"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ignoreDM"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  userServerPermissions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  userChannelPermissions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  botServerPermissions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  botChannelPermissions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("execute")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your code goes here")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"understanding-monitor-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#understanding-monitor-options"}},[t._v("#")]),t._v(" Understanding Monitor Options")]),t._v(" "),n("p",[t._v("The monitor options are very similar in functionality with the command options.")]),t._v(" "),n("h3",{attrs:{id:"monitor-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monitor-name"}},[t._v("#")]),t._v(" Monitor Name")]),t._v(" "),n("p",[t._v("Similar to the command name, we will specify a unique name for the monitors. In\nthis case let's call it inviteFilter")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[t._v("botCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inviteFilter"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inviteFilter"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("h3",{attrs:{id:"ignore-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ignore-options"}},[t._v("#")]),t._v(" Ignore Options")]),t._v(" "),n("p",[t._v("The ignore options are filters that you can use to enable/disable the monitor\nfrom running in those specific circumstances. The default option for each\nmonitor is shown in the base snippet above.")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("ignoreBots")]),t._v(": Should this monitor run on a message sent by a bot. In our\nexample, if we set this false then no bot would be allowed to post links in\nthe server. Since we don't want other bot's posting invite links either we can\nsimply just set this to "),n("code",[t._v("false")]),t._v(".")]),t._v(" "),n("li",[n("strong",[t._v("ignoreOthers")]),t._v(": Should this monitor run on other USERS. If we set this as\nfalse, then any user will not be allowed to post discord links. Since the\ndefault option for this is already "),n("code",[t._v("false")]),t._v(", let's go ahead and just delete\nthis line.")]),t._v(" "),n("li",[n("strong",[t._v("ignoreEdits")]),t._v(": Should this monitor run on edited messaged. If we set this as\nfalse, then it would also be filtering messages that are edited. It would be\nimportant to prevent users from editing a message and posting a discord invite\nlink so let's keep this "),n("code",[t._v("false")]),t._v(". Since the default is false, we can just\ndelete this line.")]),t._v(" "),n("li",[n("strong",[t._v("ignoreDM")]),t._v(": Should this monitor run on direct messages. If we set this as\nfalse, then this monitor would not run when the bot is sent a dm. Since we\ndon't care if the users send our bot a dm with an invite link we can just\nsimply set this to "),n("code",[t._v("true")]),t._v(" Since the default is "),n("code",[t._v("true")]),t._v(" for this option we can\nsimple delete this line.")])]),t._v(" "),n("p",[t._v("The default options were chosen for what the majority of monitors will use to\nhelp keep your code clean and clear.")]),t._v(" "),n("h2",{attrs:{id:"permission-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#permission-options"}},[t._v("#")]),t._v(" Permission Options")]),t._v(" "),n("p",[t._v("The permission options are the exact same from the commands guide. These options\nfirst make sure that either the bot or user has those necessary permissions to\nrun this monitor. For example, our invite filter would mean we need "),n("strong",[t._v("MANAGE\nMESSAGES")]),t._v(" permission so we can delete messages sent with an invite URL.")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[t._v("botChannelPermissions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MANAGE_MESSAGES"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"adding-the-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-the-code"}},[t._v("#")]),t._v(" Adding The Code")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" botCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deleteMessage "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../deps.ts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" translate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../utils/i18next.ts"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbotCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("monitors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inviteFilter"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inviteFilter"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ignoreBots"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  botChannelPermissions"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MANAGE_MESSAGES"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("execute")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use a regex to test if the content of the message has a valid discord invite link")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hasInviteLink "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token regex"}},[n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(https?:\\/\\/)?(www\\.)?(discord\\.(gg|li|me|io)|discordapp\\.com\\/invite)\\/.+")]),n("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the message does not have an invite link cancel out.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("hasInviteLink"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This message has an invite link, so delete the message.")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Delete the invite link")]),t._v("\n      message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guildID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("monitors/invitefilter:DELETE_REASON")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send a message to the user so they know why the message was deleted. Then delete the response after 5 seconds to prevent spam.")]),t._v("\n      message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("alertResponse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("guildID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"monitors/invitefilter:DELETE_ALERT_MESSAGE"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" botCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eventHandlers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("discordLog")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Nice! Now take some time and add these translation keys to their appropriate\nfiles. Once, you are ready, let's jump into creating some command inhibitors.")])])}),[],!1,null,null,null);s.default=e.exports}}]);