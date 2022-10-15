import React from "react";
import { useNavigate } from "react-router";

function A04History() {
  const navigate = useNavigate();
  console.dir(navigate);

  const back = ()=>navigate(-1);
  const forward = ()=>navigate(1);
  // path는 root base로 명시
  const goHome = ()=> navigate('/');
  const goURL = (url)=> navigate(url);
  
  return (
    <div>
      <h5>Product Component</h5>
      <div>This is Product Component</div>
      <br />

      <div>
        <button onClick={back}>BACK</button>
        <button onClick={forward}>FORWARD</button>
        <button onClick={goHome}>HOME</button>
        <button onClick={()=>goURL('/A02State')}>PARAMETER</button>
      </div>
    </div>
  );
};
export default A04History;
