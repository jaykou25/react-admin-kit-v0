"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[488],{91941:function(l,n,e){var a;e.r(n),e.d(n,{demos:function(){return x}});var c=e(15009),t=e.n(c),s=e(99289),i=e.n(s),d=e(67294),m=e(15634),o=e(97579),p=e(30865),y=e(66675),x={"businesstreeselectbuilder-demo-basic":{component:d.memo(d.lazy(function(){return e.e(1438).then(e.bind(e,30916))})),asset:{type:"BLOCK",id:"businesstreeselectbuilder-demo-basic",refAtomIds:["BusinessTreeSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(57818).Z},"react-admin-kit":{type:"NPM",value:"0.5.11"},"./query.ts":{type:"FILE",value:e(83272).Z}},entry:"index.tsx"},context:{"./query.ts":o,"react-admin-kit":m,"C:/Users/admin/Documents/personal-projects/react-admin-kit-v0/src/BusinessTreeSelectBuilder/demos/basic/query.ts":o},renderOpts:{compile:function(){var v=i()(t()().mark(function I(){var u,B=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(6862).then(e.bind(e,16862));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,B));case 3:case"end":return r.stop()}},I)}));function f(){return v.apply(this,arguments)}return f}()}},"businesstreeselectbuilder-demo-clearcache":{component:d.memo(d.lazy(function(){return e.e(1438).then(e.bind(e,37381))})),asset:{type:"BLOCK",id:"businesstreeselectbuilder-demo-clearcache",refAtomIds:["BusinessTreeSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(62453).Z},antd:{type:"NPM",value:"5.29.3"},react:{type:"NPM",value:"18.3.1"},"react-admin-kit":{type:"NPM",value:"0.5.11"},"../basic.tsx":{type:"FILE",value:e(57818).Z},"./query.ts":{type:"FILE",value:e(83272).Z}},entry:"index.tsx"},context:{"../basic.tsx":y,"./query.ts":o,antd:p,react:a||(a=e.t(d,2)),"react-admin-kit":m,"C:/Users/admin/Documents/personal-projects/react-admin-kit-v0/src/BusinessTreeSelectBuilder/demos/basic/index.tsx":y,"C:/Users/admin/Documents/personal-projects/react-admin-kit-v0/src/BusinessTreeSelectBuilder/demos/basic/query.ts":o},renderOpts:{compile:function(){var v=i()(t()().mark(function I(){var u,B=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(6862).then(e.bind(e,16862));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,B));case 3:case"end":return r.stop()}},I)}));function f(){return v.apply(this,arguments)}return f}()}},"businesstreeselectbuilder-demo-onload":{component:d.memo(d.lazy(function(){return e.e(1438).then(e.bind(e,11435))})),asset:{type:"BLOCK",id:"businesstreeselectbuilder-demo-onload",refAtomIds:["BusinessTreeSelectBuilder"],dependencies:{"index.tsx":{type:"FILE",value:e(63438).Z},antd:{type:"NPM",value:"5.29.3"},react:{type:"NPM",value:"18.3.1"},"../basic/index.tsx":{type:"FILE",value:e(57818).Z},"react-admin-kit":{type:"NPM",value:"0.5.11"},"./query.ts":{type:"FILE",value:e(83272).Z}},entry:"index.tsx"},context:{"../basic/index.tsx":y,"./query.ts":o,antd:p,react:a||(a=e.t(d,2)),"C:/Users/admin/Documents/personal-projects/react-admin-kit-v0/src/BusinessTreeSelectBuilder/demos/basic/index.tsx":y,"react-admin-kit":m,"C:/Users/admin/Documents/personal-projects/react-admin-kit-v0/src/BusinessTreeSelectBuilder/demos/basic/query.ts":o},renderOpts:{compile:function(){var v=i()(t()().mark(function I(){var u,B=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(6862).then(e.bind(e,16862));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,B));case 3:case"end":return r.stop()}},I)}));function f(){return v.apply(this,arguments)}return f}()}}}},66675:function(l,n,e){e.r(n),e.d(n,{BusinessTreeSelect:function(){return s}});var a=e(15634),c=e(97579),t=e(85893),s=(0,a.BusinessTreeSelectBuilder)({apis:[{api:c.queryCompany,type:"company"},{api:c.queryDept,type:"dept"}]}),i=function(){return(0,t.jsx)(a.SchemaForm,{grid:!0,colProps:{span:8},onFinish:function(o){return console.log({values:o})},autoFocusFirstInput:!1,columns:[{title:"\u516C\u53F8",dataIndex:"company",renderFormItem:function(){return(0,t.jsx)(s,{type:"company"})}},{valueType:"dependency",name:["company"],columns:function(o){var p=o.company;return p?[{title:"\u90E8\u95E8",dataIndex:"dept",renderFormItem:function(){return(0,t.jsx)(s,{queryParams:{id:p},type:"dept"})}}]:[{title:"\u90E8\u95E8",dataIndex:"dept",fieldProps:{disabled:!0,placeholder:"\u8BF7\u9009\u62E9\u516C\u53F8"}}]}}]})};n.default=i},97579:function(l,n,e){e.r(n),e.d(n,{queryCompany:function(){return a},queryDept:function(){return c}});var a=function(){return new Promise(function(s){console.log("queryOrg only once"),setTimeout(function(){s([{name:"\u96C6\u56E2\u516C\u53F8",id:1,children:[{name:"\u4E1A\u52A1\u5B50\u516C\u53F8A",id:2},{name:"\u4E1A\u52A1\u5B50\u516C\u53F8B",id:3}]},{name:"\u5176\u5B83\u516C\u53F8",id:-1}])},1200)})},c=function(s){return new Promise(function(i){console.log("queryDept",s),setTimeout(function(){s.id===1?i([{name:"\u96C6\u56E2 - \u603B\u7ECF\u7406\u5BA4",id:1},{name:"\u96C6\u56E2 - \u9500\u552E\u90E8",id:2,children:[{name:"\u96C6\u56E2 - \u9500\u552E\u90E81",id:3},{name:"\u96C6\u56E2 - \u9500\u552E\u90E82",id:4}]}]):s.id===2||s.id===3?i([{name:"\u5B50\u516C\u53F8 - \u90E8\u95E81",id:1,children:[{name:"\u5B50\u516C\u53F8 - \u5B50\u90E8\u95E81",id:2},{name:"\u5B50\u516C\u53F8- \u5B50\u90E8\u95E82",id:3}]}]):i([{name:"\u5176\u5B83\u516C\u53F8 - \u90E8\u95E81",id:1,children:[{name:"\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E81",id:2},{name:"\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E82",id:3}]},{name:"\u5176\u5B83\u516C\u53F8 - \u90E8\u95E82",id:-1}])},1e3)})}},44979:function(l,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u4E0E BusinessSelect \u4E00\u6837, \u53EF\u4EE5\u5C06\u7CFB\u7EDF\u91CC\u6240\u6709\u7684\u6811\u4E0B\u62C9\u90FD\u5B9A\u4E49\u5230\u4E00\u8D77. \u53EA\u9700\u4E00\u6B21\u5B9A\u4E49, \u5168\u9875\u9762\u90FD\u80FD\u65B9\u4FBF\u4F7F\u7528.",paraId:0,tocIndex:0},{value:"\u5148\u521D\u59CB\u5316\u7EC4\u4EF6.",paraId:1,tocIndex:0},{value:`import { BusinessTreeSelectBuilder } from 'react-admin-kit';\r
\r
// \u5B9A\u4E49 type \u7C7B\u578B\r
type TreeSelectType = 'org';\r
\r
const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>(\r
  {\r
    apis: [\r
      {\r
        type: 'org',\r
        api: queryOrgFunction,\r
      },\r
    ],\r
  })\r
\r
// \u5728\u9875\u9762\u4E2D\u4F7F\u7528\r
<BusinessTreeSelect type="org" />;
`,paraId:2,tocIndex:0},{value:"\u8BE5\u4F8B\u5B50\u4E2D\u90E8\u95E8\u4F1A\u6839\u636E\u516C\u53F8\u7EA7\u8054",paraId:3,tocIndex:1},{value:"\u548C",paraId:4,tocIndex:1},{value:"BusinessSelect",paraId:4,tocIndex:1},{value:"\u4E00\u6837, \u540C\u6837\u652F\u6301",paraId:4,tocIndex:1},{value:"queryParams",paraId:4,tocIndex:1},{value:", \u53EF\u4EE5\u4F20\u5165\u8BF7\u6C42\u53C2\u6570.",paraId:4,tocIndex:1},{value:"\u6570\u636E\u540C\u6837\u4F1A\u9ED8\u8BA4\u7F13\u5B58.",paraId:5,tocIndex:1},{value:"BusinessTreeSelect",paraId:6,tocIndex:1},{value:"\u53EF\u4EE5\u900F\u4F20 Antd TreeSelect \u7684\u6240\u6709\u5C5E\u6027.",paraId:6,tocIndex:1},{value:"\u4F7F\u7528",paraId:7,tocIndex:2},{value:"clearTreeSelectCache(type: string)",paraId:7,tocIndex:2},{value:"\u65B9\u6CD5\u6E05\u9664\u7F13\u5B58. type \u4E0D\u4F20\u6E05\u9664\u6240\u6709\u7C7B\u578B\u7684\u7F13\u5B58.",paraId:7,tocIndex:2},{value:"\u5F53\u4E0B\u62C9\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u540E\u4F1A\u89E6\u53D1 onLoad \u4E8B\u4EF6. \u8FD9\u4E2A\u4E8B\u4EF6\u5BF9\u4E8E\u67D0\u4E9B\u573A\u666F\u975E\u5E38\u6709\u7528, \u4F8B\u5982\u53EF\u4EE5\u7528\u5B83\u5B9E\u73B0\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u6761\u6570\u636E.",paraId:8,tocIndex:3}]},57818:function(l,n){n.Z=`import { BusinessTreeSelectBuilder, SchemaForm } from 'react-admin-kit';\r
import { queryCompany, queryDept } from './query';\r
\r
// \u5B9A\u4E49 type \u7C7B\u578B, \u65B9\u4FBF ts \u63D0\u793A\r
type TreeSelectType = 'company' | 'dept';\r
\r
export const BusinessTreeSelect = BusinessTreeSelectBuilder<TreeSelectType>({\r
  apis: [\r
    {\r
      api: queryCompany,\r
      type: 'company',\r
    },\r
    {\r
      api: queryDept,\r
      type: 'dept',\r
    },\r
  ],\r
});\r
\r
const Basic = () => {\r
  return (\r
    <SchemaForm\r
      grid\r
      colProps={{ span: 8 }}\r
      onFinish={(values) => console.log({ values })}\r
      autoFocusFirstInput={false}\r
      columns={[\r
        {\r
          title: '\u516C\u53F8',\r
          dataIndex: 'company',\r
          renderFormItem: () => <BusinessTreeSelect type="company" />,\r
        },\r
        {\r
          valueType: 'dependency',\r
          name: ['company'],\r
          columns: ({ company }) => {\r
            if (company) {\r
              return [\r
                {\r
                  title: '\u90E8\u95E8',\r
                  dataIndex: 'dept',\r
                  renderFormItem: () => (\r
                    <BusinessTreeSelect\r
                      queryParams={{ id: company }}\r
                      type="dept"\r
                    />\r
                  ),\r
                },\r
              ];\r
            } else {\r
              return [\r
                {\r
                  title: '\u90E8\u95E8',\r
                  dataIndex: 'dept',\r
                  fieldProps: { disabled: true, placeholder: '\u8BF7\u9009\u62E9\u516C\u53F8' },\r
                },\r
              ];\r
            }\r
          },\r
        },\r
      ]}\r
    />\r
  );\r
};\r
\r
export default Basic;\r
`},83272:function(l,n){n.Z=`export const queryCompany = () => {\r
  return new Promise((resolve) => {\r
    console.log('queryOrg only once');\r
    setTimeout(() => {\r
      resolve([\r
        {\r
          name: '\u96C6\u56E2\u516C\u53F8',\r
          id: 1,\r
          children: [\r
            {\r
              name: '\u4E1A\u52A1\u5B50\u516C\u53F8A',\r
              id: 2,\r
            },\r
            {\r
              name: '\u4E1A\u52A1\u5B50\u516C\u53F8B',\r
              id: 3,\r
            },\r
          ],\r
        },\r
        { name: '\u5176\u5B83\u516C\u53F8', id: -1 },\r
      ]);\r
    }, 1200);\r
  });\r
};\r
\r
export const queryDept = (params): Promise<any> => {\r
  return new Promise((resolve) => {\r
    console.log('queryDept', params);\r
    setTimeout(() => {\r
      if (params.id === 1) {\r
        resolve([\r
          { name: '\u96C6\u56E2 - \u603B\u7ECF\u7406\u5BA4', id: 1 },\r
          {\r
            name: '\u96C6\u56E2 - \u9500\u552E\u90E8',\r
            id: 2,\r
            children: [\r
              { name: '\u96C6\u56E2 - \u9500\u552E\u90E81', id: 3 },\r
              { name: '\u96C6\u56E2 - \u9500\u552E\u90E82', id: 4 },\r
            ],\r
          },\r
        ]);\r
      } else if (params.id === 2 || params.id === 3) {\r
        resolve([\r
          {\r
            name: '\u5B50\u516C\u53F8 - \u90E8\u95E81',\r
            id: 1,\r
            children: [\r
              {\r
                name: '\u5B50\u516C\u53F8 - \u5B50\u90E8\u95E81',\r
                id: 2,\r
              },\r
              {\r
                name: '\u5B50\u516C\u53F8- \u5B50\u90E8\u95E82',\r
                id: 3,\r
              },\r
            ],\r
          },\r
        ]);\r
      } else {\r
        resolve([\r
          {\r
            name: '\u5176\u5B83\u516C\u53F8 - \u90E8\u95E81',\r
            id: 1,\r
            children: [\r
              {\r
                name: '\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E81',\r
                id: 2,\r
              },\r
              {\r
                name: '\u5176\u5B83\u516C\u53F8 - \u5B50\u90E8\u95E82',\r
                id: 3,\r
              },\r
            ],\r
          },\r
          { name: '\u5176\u5B83\u516C\u53F8 - \u90E8\u95E82', id: -1 },\r
        ]);\r
      }\r
    }, 1000);\r
  });\r
};\r
`},62453:function(l,n){n.Z=`import { message } from 'antd';\r
import { useRef } from 'react';\r
import { Button, ModalForm, clearTreeSelectCache } from 'react-admin-kit';\r
import { BusinessTreeSelect } from '../basic';\r
\r
const ClearCacheDemo = () => {\r
  const innerRef = useRef<any>();\r
\r
  return (\r
    <div>\r
      <Button\r
        onClick={() => {\r
          clearTreeSelectCache('company');\r
          message.info('\u7F13\u5B58\u6E05\u9664\u6210\u529F');\r
        }}\r
      >\r
        \u6E05\u9664\u7F13\u5B58\r
      </Button>\r
\r
      <Button\r
        type="primary"\r
        style={{ marginLeft: '10px' }}\r
        onClick={() => innerRef.current?.openModal('new')}\r
      >\r
        \u6253\u5F00\u5F39\u7A97\r
      </Button>\r
\r
      <ModalForm\r
        innerRef={innerRef}\r
        onFinish={(values) => console.log({ values })}\r
        columns={[\r
          {\r
            title: '\u516C\u53F8 (\u6CE8\u610F\u4E0B\u62C9\u6846\u4E0A\u7684 loading \u56FE\u6807)',\r
            dataIndex: 'company',\r
            renderFormItem: () => <BusinessTreeSelect type="company" />,\r
          },\r
        ]}\r
      />\r
    </div>\r
  );\r
};\r
\r
export default ClearCacheDemo;\r
`},63438:function(l,n){n.Z=`import { Space } from 'antd';\r
import { useState } from 'react';\r
import { BusinessTreeSelect } from '../basic/index';\r
\r
const OnLoad = () => {\r
  const [companyId, setCompanyId] = useState();\r
\r
  return (\r
    <Space>\r
      <BusinessTreeSelect\r
        style={{ width: '150px' }}\r
        type="company"\r
        value={companyId}\r
        onLoad={(options) => {\r
          console.log('tree onload options', options);\r
          setCompanyId(options[0]?.id);\r
        }}\r
      />\r
    </Space>\r
  );\r
};\r
\r
export default OnLoad;\r
`}}]);
