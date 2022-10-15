import React, { useState, useCallback } from "react";

//npm i immer
import produce from 'immer';

function A08Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      tel: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });

  const changeName = useCallback(()=>{
    setPerson(person=> ({...person, name : 'nolbu'}));
  }, []);

  const changeAddress = useCallback(()=>{
    setPerson(person=> {
      return {
        ...person,
        info:{
          ...person.info,
          address:'Seoul'
        }
      }
    })
  }, []);

  const changeOne = useCallback(()=>{
    setPerson(person=> {
      return {
        ...person,
        info:{
          ...person.info,
          etc:{
            ...person.info.etc,
            one:'one'
          }
        }
      }
    })
  }, []);

  const addArray = useCallback(() => {
      setPerson(person =>{
        return {
          ...person,
          info:{
            ...person.info,
            tel: person.info.tel.concat(100),
          }
        }
      })
    },[]);

  // immer 사용
  const changeNameImmer = useCallback(() => {
    // produce (조작할 값, 반환될 값 (조작값 참조))
      setPerson(person => produce(person, draft => {
        draft.name = 'Hungbu';
      }))
    },[])
  
  const changeAddressImmer = useCallback(() => {
    // produce (조작할 값, 반환될 값 (조작값 참조))
      setPerson(person => produce(person, draft => {
        draft.info.address = 'Busan';
      }))
    },[])
  
  const changeOneImmer = useCallback(() => {
    // produce (조작할 값, 반환될 값 (조작값 참조))
    setPerson(person => produce(person, draft => {
      draft.info.etc.one = '간단~';
    }))
  }, [])

  const addArrayImmer = useCallback(() => {
    // produce (조작할 값, 반환될 값 (조작값 참조))
    setPerson(person => produce(person, draft => {
      draft.info.tel.push(200);
    }))
  }, [])

  const updateArrayImmer = useCallback((index, value) => {
    // produce (조작할 값, 반환될 값 (조작값 참조))
    setPerson(person => produce(person, draft => {
      draft.info.tel[index] = value;
    }))
  }, [])

  const deleteArrayImmer = useCallback((index) => {
    // produce (조작할 값, 반환될 값 (조작값 참조))
    setPerson(person => produce(person, draft => {
      draft.info.tel.splice(index,1);
    }))
  }, [])
          
  return (
    <div>
      <h3>A08. Immer</h3>

      Name: {person.name}
      <br />

      Address: {person.info.address}
      <br />

      One: {person.info.etc.one}
      <br />

      Ary:{" "}
      {person.info.tel.map((item, i) => (
        <span key={i}>{item} </span>
      ))}
      <br />

      <button onClick={changeName}>Name</button>
      <button onClick={changeAddress}>Address</button>
      <button onClick={changeOne}>One</button>
      <button onClick={addArray}>ADD</button>
      <br />

      <button onClick={changeNameImmer}>Name</button>
      <button onClick={changeAddressImmer}>Address</button>
      <button onClick={changeOneImmer}>One</button>

      <button onClick={addArrayImmer}>ADD</button>
      <button onClick={()=>updateArrayImmer(0,2000)}>UPDATE</button>
      <button onClick={()=>deleteArrayImmer(0)}>DELETE</button>
    </div>
  );
}
export default A08Immer;
