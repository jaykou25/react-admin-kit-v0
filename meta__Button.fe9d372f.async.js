"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[9461],{14361:function(s,e,n){var r;n.r(e),n.d(e,{demos:function(){return c}});var d=n(15009),o=n.n(d),u=n(99289),_=n.n(u),a=n(67294),m=n(30865),l=n(15634),c={"button-demo-basic":{component:a.memo(a.lazy(function(){return n.e(7570).then(n.bind(n,5811))})),asset:{type:"BLOCK",id:"button-demo-basic",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:n(31816).Z},antd:{type:"NPM",value:"5.29.3"},react:{type:"NPM",value:"18.3.1"},"react-admin-kit":{type:"NPM",value:"0.5.11"}},entry:"index.tsx"},context:{antd:m,react:r||(r=n.t(a,2)),"react-admin-kit":l},renderOpts:{compile:function(){var p=_()(o()().mark(function E(){var i,f=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(6862).then(n.bind(n,16862));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,f));case 3:case"end":return t.stop()}},E)}));function v(){return p.apply(this,arguments)}return v}()}}}},73120:function(s,e,n){n.r(e),n.d(e,{texts:function(){return r}});const r=[{value:"\u8BE5\u7EC4\u4EF6\u662F Antd Button \u7684\u5C01\u88C5, \u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"visible",paraId:0,tocIndex:0},{value:" \u5C5E\u6027, \u7528\u4E8E\u66F4\u65B9\u4FBF\u7684\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF. \u9002\u7528\u4E8E\u6BD4\u5982\u6309\u94AE\u6743\u9650\u7B49\u573A\u666F.",paraId:0,tocIndex:0}]},31816:function(s,e){e.Z=`import { Space } from 'antd';\r
import { useState } from 'react';\r
import { Button } from 'react-admin-kit';\r
\r
const Basic = () => {\r
  const [visible, setVisible] = useState(true);\r
  return (\r
    <div>\r
      <Button onClick={() => setVisible(!visible)}>\u5207\u6362</Button>\r
\r
      <div style={{ marginTop: '20px' }}>\r
        <Space>\r
          <Button visible={visible} type="primary">\r
            \u6743\u9650\u6309\u94AE\r
          </Button>\r
          <Button visible={() => visible} danger type="primary">\r
            \u6743\u9650\u6309\u94AE2\r
          </Button>\r
        </Space>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default Basic;\r
`}}]);
