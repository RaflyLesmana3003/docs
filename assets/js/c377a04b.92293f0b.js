"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,b=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,title:"\ud83d\ude80 Getting Started",description:"The official documentation site for Shorebird."},i="Getting Started",s={unversionedId:"index",id:"index",title:"\ud83d\ude80 Getting Started",description:"The official documentation site for Shorebird.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ud83d\ude80 Getting Started",description:"The official documentation site for Shorebird."},sidebar:"tutorialSidebar",next:{title:"\u2601\ufe0f Code Push",permalink:"/code-push"}},l={},u=[{value:"Install \ud83d\udce6",id:"install-",level:2},{value:"Mac/Linux",id:"maclinux",level:2},{value:"Windows",id:"windows",level:2},{value:"Sign Up \u270d\ufe0f",id:"sign-up-\ufe0f",level:2},{value:"Log In \ud83d\udd11",id:"log-in-",level:2},{value:"Upgrade to a Paid Account \u2b06\ufe0f",id:"upgrade-to-a-paid-account-\ufe0f",level:2},{value:"Connect on Discord \ud83e\udd1d",id:"connect-on-discord-",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Welcome to the Shorebird Docs \ud83d\udc4b"),(0,r.kt)("p",null,"At Shorebird, we build products to help businesses be successful with Flutter."),(0,r.kt)("p",null,"We'll help you quickly setup Shorebird so you can get started using our tools."),(0,r.kt)("h2",{id:"install-"},"Install \ud83d\udce6"),(0,r.kt)("p",null,"To install the Shorebird command line interface (CLI):"),(0,r.kt)("h2",{id:"maclinux"},"Mac/Linux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 https://raw.githubusercontent.com/shorebirdtech/install/main/install.sh -sSf | sh\n")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"powershell -exec bypass -c \"(New-Object Net.WebClient).Proxy.Credentials=[Net.CredentialCache]::DefaultNetworkCredentials;iwr -UseBasicParsing 'https://raw.githubusercontent.com/shorebirdtech/install/main/install.ps1'|iex\"\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Installing Shorebird CLI requires ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),".")),(0,r.kt)("p",null,"This installs ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.shorebird/bin")," and adds it to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),". It\nalso installs a copy of Flutter and Dart inside\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.shorebird/bin/cache/flutter"),". The copy of Flutter is slightly modified to\nadd Shorebird code push and is not intended to be added to your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),". You can\ncontinue to use the versions of Flutter and Dart you already have installed."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The total installation is about 300mb.")),(0,r.kt)("p",null,"Once the installation has completed, ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird")," should be available in your\nterminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ shorebird\nThe shorebird command-line tool\n\nUsage: shorebird <command> [arguments]\n\nGlobal options:\n-h, --help            Print this usage information.\n-v, --version         Print the current version.\n    --[no-]verbose    Noisy logging, including all shell commands executed.\n\nAvailable commands:\n  account        Manage your Shorebird account.\n  apps           Manage your Shorebird apps.\n  build          Build a new release of your application.\n  cache          Manage the Shorebird cache.\n  channels       Manage the channels for your Shorebird app.\n  doctor         Show information about the installed tooling.\n  init           Initialize Shorebird.\n  login          Login as a new Shorebird user.\n  logout         Logout of the current Shorebird user\n  patch          Publish new patches for a specific release to Shorebird.\n  release        Builds and submits your app to Shorebird.\n  run            Run the Flutter application.\n  subscription   Manage your Shorebird subscription.\n  upgrade        Upgrade your copy of Shorebird.\n\nRun "shorebird help <command>" for more information about a command.\n')),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird doctor")," to ensure things are set-up correctly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shorebird doctor\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ shorebird doctor\n\nShorebird v0.0.8\nShorebird Engine \u2022 revision d470ae25d21f583abe128f7b838476afd5e45bde\n\n\u2713 Shorebird is up-to-date (0.7s)\n\u2713 Flutter install is correct (0.1s)\n\u2713 AndroidManifest.xml files contain INTERNET permission (26ms)\n\nNo issues detected!\n")),(0,r.kt)("h2",{id:"sign-up-\ufe0f"},"Sign Up \u270d\ufe0f"),(0,r.kt)("p",null,"Once you have Shorebird installed, you need to create a Shorebird account. To\ncreate a Shorebird account, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird account create")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shorebird account create\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Currently Shorebird uses Google OAuth2 to authenticate users. If you need other\nauth methods, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/335"},"let us\nknow"),".")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ shorebird account create\nShorebird currently requires a Google account for authentication. If you\'d like to use a different kind of auth, please let us know: https://github.com/shorebirdtech/shorebird/issues/335.\n\nFollow the link below to authenticate:\n\nhttps://accounts.google.com/o/oauth2/v2/auth...\n\nWaiting for your authorization...\nTell us your name to finish creating your account: Jane Doe\n\n\ud83c\udf89 Welcome to Shorebird, Jane Doe!\n\ud83d\udd11 Credentials are stored in ./path/to/credentials.json.\n\ud83d\udeaa To logout, use: "shorebird logout".\n\u2b06\ufe0f To upgrade your account, use: "shorebird account subscribe".\n\nEnjoy! Please let us know via Discord if we can help.\n')),(0,r.kt)("h2",{id:"log-in-"},"Log In \ud83d\udd11"),(0,r.kt)("p",null,"If you just created a Shorebird account, you can skip this section, as you\nare already logged in from ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird account create"),"."),(0,r.kt)("p",null,"If you have an existing Shorebird account, you can login using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird login")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shorebird login\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ shorebird login\nThe Shorebird CLI needs your authorization to manage apps, releases, and patches\non your behalf.\n\nIn a browser, visit this URL to log in:\n\nhttps://accounts.google.com/o/oauth2/v2/auth...\n\nWaiting for your authorization...\n\n\ud83c\udf89 Welcome to Shorebird! You are now logged in as <email>.\n\n\ud83d\udd11 Credentials are stored in ./path/to/credentials.json.\n\ud83d\udeaa To logout use: "shorebird logout".\n')),(0,r.kt)("h2",{id:"upgrade-to-a-paid-account-\ufe0f"},"Upgrade to a Paid Account \u2b06\ufe0f"),(0,r.kt)("p",null,"To use Shorebird, you must upgrade to a paid account using the ",(0,r.kt)("inlineCode",{parentName:"p"},"shorebird account subscribe")," command. Once you have paid, your account will be automatically upgraded and you will be able to use Shorebird to build and deploy apps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"shorebird account subscribe\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ shorebird account subscribe\n\u2713 Link generated! (0.8s)\n\nTo purchase a Shorebird subscription, please visit the following link:\nhttps://buy.stripe.com/...\n\nOnce Stripe has processed your payment, you will be able to use Shorebird to create and publish apps.\n\nNote: This payment link is specifically for your account. Do not share it with others.\n")),(0,r.kt)("h2",{id:"connect-on-discord-"},"Connect on Discord \ud83e\udd1d"),(0,r.kt)("p",null,"Shorebird has an active Discord where we're happy to help you:\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/9hKJcWGcaB"},"https://discord.com/invite/9hKJcWGcaB")),(0,r.kt)("p",null,"We also offer a private support channel for paying customers. We don't yet have\nan automated way to add you to the channel, so please message a member of our\nteam on Discord and we'll happily add you to the customer support channel.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/308"},"https://github.com/shorebirdtech/shorebird/issues/308")))}p.isMDXComponent=!0}}]);