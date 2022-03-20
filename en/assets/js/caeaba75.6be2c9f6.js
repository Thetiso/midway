"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8157],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},448:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={title:"\u53c2\u6570\u6821\u9a8c"},s=void 0,p={unversionedId:"hooks/validate",id:"hooks/validate",title:"\u53c2\u6570\u6821\u9a8c",description:"\u6821\u9a8c",source:"@site/docs/hooks/validate.md",sourceDirName:"hooks",slug:"/hooks/validate",permalink:"/en/docs/hooks/validate",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/validate.md",tags:[],version:"current",frontMatter:{title:"\u53c2\u6570\u6821\u9a8c"},sidebar:"hooks",previous:{title:"Hooks",permalink:"/en/docs/hooks/builtin-hooks"},next:{title:"Web \u4e2d\u95f4\u4ef6",permalink:"/en/docs/hooks/middleware"}},c=[{value:"\u6821\u9a8c",id:"\u6821\u9a8c",children:[],level:2},{value:"Validate",id:"validate",children:[{value:"\u57fa\u7840\u793a\u4f8b",id:"\u57fa\u7840\u793a\u4f8b",children:[],level:3},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",children:[],level:3},{value:"ValidateHttp",id:"validatehttp",children:[],level:3}],level:2},{value:"TypeScript \u652f\u6301",id:"typescript-\u652f\u6301",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6821\u9a8c"},"\u6821\u9a8c"),(0,o.kt)("p",null,"Midway Hooks \u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zod"},"zod@3")," \u4f5c\u4e3a\u6821\u9a8c\u5668\uff0c\u5e76\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"Validate(...schemas: any[])")," \u6821\u9a8c\u7528\u6237\u5165\u53c2\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ValidateHttp(options)")," \u51fd\u6570\u6765\u6821\u9a8c Http \u7ed3\u6784\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u524d\u8bf7\u5b89\u88c5 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zod"},"zod"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install zod\n")),(0,o.kt)("h2",{id:"validate"},"Validate"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Validate")," \u4f20\u5165\u7684 Schema \u987a\u5e8f\u4e0e\u7528\u6237\u5165\u53c2\u987a\u5e8f\u5339\u914d\u3002"),(0,o.kt)("h3",{id:"\u57fa\u7840\u793a\u4f8b"},"\u57fa\u7840\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Post,\n  Validate,\n} from '@midwayjs/hooks';\nimport { z } from 'zod';\n\nexport default Api(\n  Post('/hello'),\n  Validate(z.string(), z.number()),\n  async (name: string, age: number) => {\n    return `Hello ${name}, you are ${age} years old.`;\n  }\n);\n")),(0,o.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import hello from './api';\n\ntry {\n  await hello(null, null);\n} catch (error) {\n  console.log(\n    JSON.parse(error.data.message)\n  );\n  console.log(error.status); // 422\n}\n")),(0,o.kt)("p",null,"\u624b\u52a8\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetcher\n  .post('/hello', {\n    args: [null, null],\n  })\n  .catch((error) => {\n    console.log(\n      JSON.parse(error.data.message)\n    );\n    console.log(error.status); // 422\n  });\n")),(0,o.kt)("h3",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,o.kt)("p",null,"\u901a\u8fc7 Try/Catch \u53ef\u4ee5\u6355\u6349\u5230\u6821\u9a8c\u5931\u8d25\u7684\u9519\u8bef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  // \u8c03\u7528\u63a5\u53e3\n} catch (error) {\n  console.log(error.data.code); // VALIDATION_FAILED\n  console.log(\n    JSON.parse(error.data.message)\n  );\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"error.data.message")," \u5305\u542b\u5b8c\u6574\u7684",(0,o.kt)("a",{parentName:"p",href:"https://zod.js.org/docs/errors/"},"\u9519\u8bef\u4fe1\u606f"),"\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse")," \u89e3\u6790\uff0c\u89e3\u6790\u540e\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"[\n  {\n    code: 'invalid_type',\n    expected: 'string',\n    received: 'number',\n    path: [0, 'name'],\n    message:\n      'Expected string, received number',\n  },\n];\n")),(0,o.kt)("p",null,"\u5176\u4e2d\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message"),": \u9519\u8bef\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," \u53c2\u6570\u4ee3\u8868\u9519\u8bef\u8def\u5f84\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," \u4ee3\u8868\u7b2c\u4e00\u4e2a\u53c2\u6570\u6821\u9a8c\u51fa\u9519\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"name")," \u4ee3\u8868\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," \u5b57\u6bb5\u6821\u9a8c\u51fa\u9519\u3002")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u624b\u52a8\u89e3\u6790\u9519\u8bef\u6d88\u606f\uff0c\u5e76\u5c55\u793a\u7ed9\u7528\u6237\u3002"),(0,o.kt)("h3",{id:"validatehttp"},"ValidateHttp"),(0,o.kt)("p",null,"ValidateHttp(options) \u652f\u6301\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," \u53c2\u6570\uff0c\u7c7b\u578b\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type ValidateHttpOption = {\n  query?: z.Schema<any>;\n  params?: z.Schema<any>;\n  headers?: z.Schema<any>;\n  data?: z.Schema<any>[];\n};\n")),(0,o.kt)("p",null,"\u4ee5\u6821\u9a8c ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," \u53c2\u6570\u4e3a\u4f8b\u3002"),(0,o.kt)("p",null,"\u540e\u7aef\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  Query,\n  useContext,\n  ValidateHttp,\n} from '@midwayjs/hooks';\nimport { z } from 'zod';\n\nconst QuerySchema = z.object({\n  searchString: z.string().min(5),\n});\n\nexport const filterPosts = Api(\n  Get('/api/filterPosts'),\n  Query<z.infer<typeof QuerySchema>>(),\n  ValidateHttp({ query: QuerySchema }),\n  async () => {\n    const ctx = useContext();\n    return ctx.query.searchString;\n  }\n);\n")),(0,o.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import filterPosts from './api';\n\ntry {\n  await filterPosts({\n    query: { searchString: '' },\n  });\n} catch (error) {\n  console.log(\n    JSON.parse(error.data.message)\n  );\n  console.log(error.status); // 422\n}\n")),(0,o.kt)("p",null,"\u624b\u52a8\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetcher\n  .get(\n    '/api/filterPosts?searchString=1'\n  )\n  .catch((error) => {\n    console.log(\n      JSON.parse(error.data.message)\n    );\n    console.log(error.status); // 422\n  });\n")),(0,o.kt)("h2",{id:"typescript-\u652f\u6301"},"TypeScript \u652f\u6301"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 zod \u5185\u7f6e\u7684 TypeScript \u529f\u80fd\uff0c\u6765\u5b9e\u73b0\u590d\u6742\u7c7b\u578b\u7684\u63a8\u5bfc\u4e0e\u6821\u9a8c\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Post,\n  Validate,\n} from '@midwayjs/hooks';\nimport { z } from 'zod';\n\nconst Project = z.object({\n  name: z.string(),\n  description: z.string(),\n  owner: z.string(),\n  members: z.array(z.string()),\n});\n\nexport default Api(\n  Post('/project'),\n  Validate(Project),\n  async (\n    // { name: string, description: string, owner: string, members: string[] }\n    project: z.infer<typeof Project>\n  ) => {\n    return project;\n  }\n);\n")),(0,o.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import createProject from './api';\n\ntry {\n  await createProject({\n    name: 1,\n    description: 'test project',\n    owner: 'test',\n    members: ['test'],\n  });\n} catch (error) {\n  console.log(error.message);\n  console.log(error.status); // 422\n}\n")),(0,o.kt)("p",null,"\u624b\u52a8\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetcher\n  .post('/project', {\n    args: [\n      {\n        name: 1,\n        description: 'test project',\n        owner: 'test',\n        members: ['test'],\n      },\n    ],\n  })\n  .catch((error) => {\n    console.log(\n      JSON.parse(error.data.message)\n    );\n    console.log(error.status); // 422\n  });\n")))}m.isMDXComponent=!0}}]);