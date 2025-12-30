"use strict";(self.webpackChunkreact_admin_kit=self.webpackChunkreact_admin_kit||[]).push([[9461],{14361:function(o,n,e){var a;e.r(n),e.d(n,{demos:function(){return c}});var d=e(15009),i=e.n(d),u=e(99289),_=e.n(u),s=e(67294),m=e(30865),l=e(15634),c={"button-demo-basic":{component:s.memo(s.lazy(function(){return e.e(7570).then(e.bind(e,5811))})),asset:{type:"BLOCK",id:"button-demo-basic",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:e(31816).Z},antd:{type:"NPM",value:"5.29.3"},react:{type:"NPM",value:"18.3.1"},"react-admin-kit":{type:"NPM",value:"0.5.11"}},entry:"index.tsx"},context:{antd:m,react:a||(a=e.t(s,2)),"react-admin-kit":l},renderOpts:{compile:function(){var p=_()(i()().mark(function E(){var r,y=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,y));case 3:case"end":return t.stop()}},E)}));function v(){return p.apply(this,arguments)}return v}()}}}},73120:function(o,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u8BE5\u7EC4\u4EF6\u662F Antd Button \u7684\u5C01\u88C5, \u589E\u52A0\u4E86 ",paraId:0,tocIndex:0},{value:"visible",paraId:0,tocIndex:0},{value:" \u5C5E\u6027, \u7528\u4E8E\u66F4\u65B9\u4FBF\u7684\u63A7\u5236\u663E\u793A\u4E0E\u9690\u85CF. \u9002\u7528\u4E8E\u6BD4\u5982\u6309\u94AE\u6743\u9650\u7B49\u573A\u666F.",paraId:0,tocIndex:0}]},31816:function(o,n){n.Z=`import { Space } from 'antd';
import { useState } from 'react';
import { Button } from 'react-admin-kit';

const Basic = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>\u5207\u6362</Button>

      <div style={{ marginTop: '20px' }}>
        <Space>
          <Button visible={visible} type="primary">
            \u6743\u9650\u6309\u94AE
          </Button>
          <Button visible={() => visible} danger type="primary">
            \u6743\u9650\u6309\u94AE2
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Basic;
`}}]);
