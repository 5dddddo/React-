import React from "react";

// module이 붙은 css 파일은 module 형태로 import
// CSS 내부에 :global이 붙으면 일반 클래스, 붙이지 않으면 고유의 키가 붙어 사용된다.
import one from './css/A02Style1.module.css';
import two from './css/A02Style2.module.css';

function A02StyleModule() {
  return (
    <div>
      <h3 className={one.title}>A02 Style <span className="innerColor">Module</span> Component</h3>
          {/* 다중 사용시 문자열로 만들거나, join으로 연결  */}
      <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
      <h3 className={[two.title,two.reverse].join(' ')}>A02 Style Module Component</h3>
    </div>
  );
}

export default A02StyleModule;
