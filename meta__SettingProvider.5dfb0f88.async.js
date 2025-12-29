"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[3657],{36601:function(f,e,n){var a;n.r(e),n.d(e,{demos:function(){return P}});var s=n(15009),t=n.n(s),m=n(99289),i=n.n(m),o=n(67294),u=n(15634),c=n(43756),M=n(70427),p=n(20420),d=n(47166),P={"settingprovider-demo-table":{component:o.memo(o.lazy(function(){return n.e(3809).then(n.bind(n,79478))})),asset:{type:"BLOCK",id:"settingprovider-demo-table",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(74957).Z},"react-admin-kit":{type:"NPM",value:"0.5.11"}},entry:"index.tsx"},context:{"react-admin-kit":u,"@/ProTable/demos/basic":c},renderOpts:{compile:function(){var E=i()(t()().mark(function _(){var v,h=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(6862).then(n.bind(n,16862));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,h));case 3:case"end":return r.stop()}},_)}));function l(){return E.apply(this,arguments)}return l}()}},"settingprovider-demo-modalform":{component:o.memo(o.lazy(function(){return n.e(3809).then(n.bind(n,77604))})),asset:{type:"BLOCK",id:"settingprovider-demo-modalform",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(17121).Z},"react-admin-kit":{type:"NPM",value:"0.5.11"}},entry:"index.tsx"},context:{"@/ModalForm/demos/basic":M,"react-admin-kit":u},renderOpts:{compile:function(){var E=i()(t()().mark(function _(){var v,h=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(6862).then(n.bind(n,16862));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,h));case 3:case"end":return r.stop()}},_)}));function l(){return E.apply(this,arguments)}return l}()}},"settingprovider-demo-schemaform":{component:o.memo(o.lazy(function(){return n.e(3809).then(n.bind(n,12578))})),asset:{type:"BLOCK",id:"settingprovider-demo-schemaform",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(73774).Z},"react-admin-kit":{type:"NPM",value:"0.5.11"}},entry:"index.tsx"},context:{"@/SchemaForm/demos/basic":p,"react-admin-kit":u},renderOpts:{compile:function(){var E=i()(t()().mark(function _(){var v,h=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(6862).then(n.bind(n,16862));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,h));case 3:case"end":return r.stop()}},_)}));function l(){return E.apply(this,arguments)}return l}()}},"settingprovider-demo-formupload":{component:o.memo(o.lazy(function(){return n.e(3809).then(n.bind(n,893))})),asset:{type:"BLOCK",id:"settingprovider-demo-formupload",refAtomIds:["SettingProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(81537).Z},"react-admin-kit":{type:"NPM",value:"0.5.11"},"../../../FormUpload/demos/basic.tsx":{type:"FILE",value:n(53230).Z},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"../../../FormUpload/demos/basic.tsx":d,"react-admin-kit":u,"C:/Users/admin/Documents/personal-projects/react-admin-kit-v0/src/FormUpload/demos/basic/index.tsx":d,react:a||(a=n.t(o,2))},renderOpts:{compile:function(){var E=i()(t()().mark(function _(){var v,h=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(6862).then(n.bind(n,16862));case 2:return r.abrupt("return",(v=r.sent).default.apply(v,h));case 3:case"end":return r.stop()}},_)}));function l(){return E.apply(this,arguments)}return l}()}}}},47166:function(f,e,n){n.r(e);var a=n(67294),s=n(15634),t=n(85893),m=function(){var o=(0,a.useRef)(null);return(0,t.jsx)(s.SettingProvider,{formUploadSetting:{action:"https://mock.apifox.cn/m1/1864670-0-default/mockUpload",headers:{Authorization:"myToken"},responseToFileList:function(c){return{id:c==null?void 0:c.data.id}}},children:(0,t.jsx)(s.SchemaForm,{formRef:o,columns:[{title:"\u9644\u4EF6",dataIndex:"files",renderFormItem:function(){return(0,t.jsx)(s.FormUpload,{children:function(M){var p=M.loading;return(0,t.jsx)(s.LinkButton,{children:p?"\u4E0A\u4F20\u4E2D":"\u4E0A\u4F20\u9644\u4EF6"})}})}}],submitter:!0,onFinish:console.log})})};e.default=m},44458:function(f,e,n){n.r(e),n.d(e,{columns:function(){return a}});var a=[{title:"\u5E8F\u53F7",valueType:"index",width:48},{title:"\u7528\u6237\u540D",dataIndex:"username",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone",required:!0},{title:"\u6635\u79F0",dataIndex:"nickName"},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",required:!0}]},70427:function(f,e,n){n.r(e);var a=n(5574),s=n.n(a),t=n(67294),m=n(15634),i=n(44458),o=n(85893),u=function(){var M=(0,t.useState)(!1),p=s()(M,2),d=p[0],P=p[1],E=function(_){console.log({values:_})};return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{style:{textAlign:"start"},children:(0,o.jsx)(m.Button,{type:"primary",onClick:function(){return P(!0)},children:"\u6253\u5F00\u5F39\u7A97"})}),(0,o.jsx)(m.ModalForm,{title:"\u57FA\u672C\u8868\u5355",open:d,onCancel:function(){return P(!1)},onFinish:E,columns:i.columns})]})};e.default=u},48186:function(f,e,n){n.r(e),n.d(e,{delelteRecord:function(){return s},mockRequest:function(){return a}});var a=function(){return new Promise(function(m){setTimeout(function(){return m({data:[{id:1,name:"Jack",phone:133,isMember:"1",grade:"\u4E00\u7EA7"},{id:2,name:"Tom",phone:155,isMember:"0"}],success:!0,total:2})},1e3)})},s=function(m){return new Promise(function(i){console.log("delete record",m),setTimeout(function(){return i(!0)},500)})}},70113:function(f,e,n){n.r(e),n.d(e,{getColumns:function(){return t}});var a=n(15634),s=n(85893),t=function(){return[{title:"\u7528\u6237\u540D",dataIndex:"name",required:!0},{title:"\u7535\u8BDD",dataIndex:"phone"},{title:"\u6635\u79F0",dataIndex:"nickName",hideInSearch:!0},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}},{title:"\u8EAB\u4EFD\u8BC1\u53F7",dataIndex:"idNumber",hideInSearch:!0},{title:"\u65F6\u95F4\u8303\u56F4",dataIndex:"time",valueType:"dateRange",transform:function(o){return{startTime:o[0],endTime:o[1]}}},{title:"\u64CD\u4F5C",valueType:"option",enableDelete:!0,render:function(o,u,c,M,p){return[(0,s.jsx)(a.LinkButton,{onClick:function(){var P;return(P=p.current)===null||P===void 0?void 0:P.openModal("edit",u)},children:"\u7F16\u8F91"},1)]}}]}},43756:function(f,e,n){n.r(e),n.d(e,{FORM_TYPE_MAP:function(){return c}});var a=n(83622),s=n(45360),t=n(67294),m=n(15634),i=n(48186),o=n(70113),u=n(85893),c={new:"\u65B0\u589E",edit:"\u7F16\u8F91",read:"\u67E5\u770B"},M=function(){var d=(0,t.useRef)(),P=(0,t.useRef)();return(0,u.jsx)("div",{children:(0,u.jsx)(m.ProTable,{name:"\u7528\u6237",columns:(0,o.getColumns)(),request:i.mockRequest,bordered:!0,innerRef:d,actionRef:P,toolbar:{actions:[(0,u.jsx)(a.ZP,{type:"primary",onClick:function(){var l;(l=d.current)===null||l===void 0||l.openModal()},children:"\u65B0\u589E"},1)]},rowSelection:{},delFunction:i.delelteRecord,onFinish:function(l,_){return console.log({values:l}),new Promise(function(v){setTimeout(function(){var h;v(!0),s.ZP.success(c[_]+"\u6210\u529F"),(h=P.current)===null||h===void 0||h.reload()},1e3)})}})})};e.default=M},50380:function(f,e,n){n.r(e),n.d(e,{columns:function(){return a}});var a=[{title:"\u7528\u6237\u540D",dataIndex:"username",fieldProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},formItemProps:{rules:[{required:!0}]}},{title:"\u6027\u522B",dataIndex:"sex",valueType:"radio",fieldProps:{options:[{label:"\u7537",value:"\u7537"},{label:"\u5973",value:"\u5973"}]}}]},20420:function(f,e,n){n.r(e);var a=n(67294),s=n(15634),t=n(83622),m=n(50380),i=n(85893),o=function(){var c=(0,a.useRef)(),M=function(d){console.log({values:d})};return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.SchemaForm,{onFinish:M,formRef:c,columns:m.columns,autoFocusFirstInput:!1,initialValues:{sex:"\u7537"}}),(0,i.jsxs)("div",{style:{textAlign:"end"},children:[(0,i.jsx)(t.ZP,{style:{marginRight:"10px"},onClick:function(){var d;return(d=c.current)===null||d===void 0?void 0:d.resetFields()},children:"\u91CD\u7F6E"}),(0,i.jsx)(t.ZP,{type:"primary",onClick:function(){var d;return(d=c.current)===null||d===void 0?void 0:d.submit()},children:"\u63D0\u4EA4"})]})]})};e.default=o},89523:function(f,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u9ED8\u8BA4\u8BBE\u7F6E, \u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548.",paraId:0,tocIndex:0},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E ProTable \u7684\u9ED8\u8BA4\u5927\u5C0F\u4E3A middle; search \u533A\u57DF\u7684\u8868\u5355\u9ED8\u8BA4\u5C55\u5F00; \u5F39\u7A97\u8868\u5355\u7684\u5E03\u5C40\u9ED8\u8BA4\u4E00\u884C\u4E24\u5217; \u5220\u9664\u5F39\u6846\u9ED8\u8BA4\u4E3A Modal.confirm, \u5220\u9664\u6587\u5B57\u9ED8\u8BA4\u4E3A\u5173\u95ED.",paraId:1,tocIndex:1},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E ModalForm \u7684\u9ED8\u8BA4\u5F39\u7A97\u8868\u5355\u7684\u5E03\u5C40\u4E3A\u6C34\u5E73\u6A21\u5F0F.",paraId:2,tocIndex:2},{value:"\u6BD4\u5982\u6211\u4EEC\u60F3\u914D\u7F6E SchemaForm \u7684\u9ED8\u8BA4\u9A8C\u8BC1\u63D0\u793A.",paraId:3,tocIndex:3},{value:"\u53EF\u4EE5\u7ED9 FormUpload \u7EC4\u4EF6\u9ED8\u8BA4\u5E26\u4E0A token.",paraId:4,tocIndex:4}]},53230:function(f,e){e.Z=`import { useRef } from 'react';\r
import {\r
  FormUpload,\r
  LinkButton,\r
  SchemaForm,\r
  SettingProvider,\r
} from 'react-admin-kit';\r
\r
const Basic = () => {\r
  const formRef = useRef<any>(null);\r
  return (\r
    <SettingProvider\r
      formUploadSetting={{\r
        action: 'https://mock.apifox.cn/m1/1864670-0-default/mockUpload',\r
        headers: { Authorization: 'myToken' },\r
        responseToFileList: (res) => ({ id: res?.data.id }), // \u5C06\u540E\u53F0\u8FD4\u56DE\u503C\u5408\u5E76\u8FDBfile\u5BF9\u8C61\r
      }}\r
    >\r
      <SchemaForm\r
        formRef={formRef}\r
        columns={[\r
          {\r
            title: '\u9644\u4EF6',\r
            dataIndex: 'files',\r
            renderFormItem: () => (\r
              <FormUpload>\r
                {({ loading }) => (\r
                  <LinkButton>{loading ? '\u4E0A\u4F20\u4E2D' : '\u4E0A\u4F20\u9644\u4EF6'}</LinkButton>\r
                )}\r
              </FormUpload>\r
            ),\r
          },\r
        ]}\r
        submitter\r
        onFinish={console.log}\r
      />\r
    </SettingProvider>\r
  );\r
};\r
\r
export default Basic;\r
`},81537:function(f,e){e.Z=`import { SettingProvider } from 'react-admin-kit';\r
import Example from '../../../FormUpload/demos/basic';\r
\r
const SchemaFormDemo = () => {\r
  return (\r
    <SettingProvider\r
      formUploadSetting={{ headers: { authorization: 'authorization-text' } }}\r
    >\r
      <Example />\r
    </SettingProvider>\r
  );\r
};\r
\r
export default SchemaFormDemo;\r
`},17121:function(f,e){e.Z=`import Example from '@/ModalForm/demos/basic';\r
import { SettingProvider } from 'react-admin-kit';\r
\r
const ModalDemo = () => {\r
  return (\r
    <SettingProvider\r
      modalFormSetting={{\r
        formProps: { layout: 'horizontal', labelCol: { span: 4 } },\r
      }}\r
    >\r
      <Example />\r
    </SettingProvider>\r
  );\r
};\r
\r
export default ModalDemo;\r
`},73774:function(f,e){e.Z=`import Example from '@/SchemaForm/demos/basic';\r
import { SettingProvider } from 'react-admin-kit';\r
\r
const SchemaFormDemo = () => {\r
  return (\r
    <SettingProvider\r
      schemaFormSetting={{ validateMessages: { required: '\${label}\u4E3A\u5FC5\u586B\u9879' } }}\r
    >\r
      <Example />\r
    </SettingProvider>\r
  );\r
};\r
\r
export default SchemaFormDemo;\r
`},74957:function(f,e){e.Z=`import { SettingProvider } from 'react-admin-kit';\r
\r
import Example from '@/ProTable/demos/basic';\r
\r
const Basic = () => {\r
  return (\r
    <SettingProvider\r
      proTableSetting={{\r
        size: 'middle',\r
        searchConfig: { defaultCollapsed: false },\r
        modalProps: { width: 680 },\r
        formProps: {\r
          grid: true,\r
          rowProps: { gutter: [24, 0] },\r
          colProps: { span: 12 },\r
        },\r
        confirmModalType: 'modal',\r
        confirmModalProps: { title: '\u5168\u5C40\u5B9A\u5236\u7684title' },\r
        tableAlertOption: {\r
          deleteProps: {\r
            btnText: '\u6279\u91CF\u5173\u95ED',\r
            title: (n) => \`\u786E\u8BA4\u5173\u95ED\${n}\u6761\u5417?\`,\r
          },\r
        },\r
        optionColumnSpaceProps: {\r
          size: 'small',\r
        },\r
        options: { density: false, reload: true, fullScreen: true },\r
      }}\r
    >\r
      <Example />\r
    </SettingProvider>\r
  );\r
};\r
\r
export default Basic;\r
`}}]);
