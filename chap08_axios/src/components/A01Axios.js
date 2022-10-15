import React, { useState } from "react";
import axios from 'axios'

function A01Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState();

  const getContactList = (no=1, size=10) => {
    // axios.get(baseURL, {params:{pageno: no, pagesize:size}})
    //   .then(resp => {
    //     // console.log(resp.data)
    //     setData(resp.data);
    //   })
    //   .catch(err => console.error(err))
    axios({
      method:'get',
      url :baseURL,
      params :{pageno: no, pagesize:size},
      headers:{'context-type': 'application.json'},
      //POST 속성
      // data : 
    })
    .then(resp => {
          // console.log(resp.data)
          setData(resp.data);
          // 시간 걸리는 작업요청. 다음 then 이 받아 처리
        })
    .catch(err => console.error(err))
  }

  // await는 Async 함수 내부에서만 실행될 수 있다.
  const getContactListAsync = async (no,size)=>{
    // 이 await가 실행 완료되어야만 다음 줄로 넘어간다.
    // 비동기를 동기화하여 순차적으로 실행할 수 있는 방법
    try{
      const resp = await axios.get(baseURL, {params:{pageno: no, pagesize:size}})
      // const resp1 = await axios.get(baseURL, {params:{pageno: no, pagesize:size}})
      setData(resp.data);
    }catch(err){
      // console.error(err)
    }
  }

  const getContact = (no) => {
    // "http://localhost:8000/contacts/" + no
    axios.get(baseURL + no)
      .then(resp => {
        setData(resp.data);
      })
      .catch(err => console.error(err))
  }

  const addContact = () => {
    const data = {
      "name":"강감찬",
      "tel":"010-2222-3339",
      "address":"서울시"
    }
    axios.post(baseURL, data)
      .then(resp => {
        setData(resp.data);
      })
      .catch(err => console.error(err))
  }

  const updateContact = (no) => {
    const data = {
      "name":"이순신",
      "tel":"010-1111-3339",
      "address":"서울시"
    }
    axios.put(baseURL + no, data)
      .then(resp => {
        setData(resp.data);
      })
      .catch(err => console.error(err))
  }

  const deleteContact = (no) => {
    axios.delete(baseURL + no)
      .then(resp => {
        setData(resp.data);
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <h3>A01 Axios GET</h3>
      <button   onClick={getContactList}>DATA LIST</button>
      <button onClick={()=>getContactListAsync(1,10)}>DATA LIST ASYNC</button>
      <button   onClick={() => getContact(100)}>GET</button>
      <button onClick={addContact}>ADD</button>
      <button onClick={()=>updateContact(123424)}>UPDATE</button>
      <button onClick={()=>deleteContact(1)}>DELETE</button>
      <br />
      <br />

      <textarea cols="100" rows="15"  defaultValue={JSON.stringify(data, '', 4)}></textarea>
    </div>
  );
}
export default A01Axios;