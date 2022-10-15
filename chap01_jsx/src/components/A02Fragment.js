import {Fragment} from 'react'

function A02Fragment(){
  return (
    // 상위 태그가 필요 없는 경우, 가상의 태그 (Fragment) or 빈 태그 <> 사용
    <Fragment>
      <h3>A02 Fragment</h3>

      <>
        this is content
      </>
    </Fragment>
  );
}

export default A02Fragment;