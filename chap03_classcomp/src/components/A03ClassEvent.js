import React, { Component } from 'react'

class A03ClassEvent extends Component {
  // state를 constructor 바깥에 독립적으로 선언해서 사용 가능
  state = {
    name: 'NolBu',
    age: 30,
    date: '2030-12-25',
    sports: 'soccer',
    language: ['React'],
    isChecked: false,
    baseball: 'NC',
    four: [],
  };
    
  changeName = (evt)=>this.setState({name: evt.target.value})
  changeDate = evt => this.setState({date:evt.target.value})

  // 변수 명만 바뀌는 경우 간편버전
  changeString = evt=> this.setState({[evt.target.name] : evt.target.value})

  // 숫자 외의 값 들어오면 NaN 에러뜸
  // changeAge = (evt)=>this.setState({age: Number(evt.target.value)})
  // changeAge = (evt)=>{
  //   let value = Number(evt.target.value);
  //   if(isNaN(value)) value= 0;
  //   this.setState({age: value})
  // }

  changeNumber = (evt)=>{
    let value = Number(evt.target.value);
    if(isNaN(value)) value= 0;
    this.setState({[evt.target.name] : value})
  }

  changeCheck = evt => this.setState({[evt.target.name] : !this.state[evt.target.name]})

  changeLanguage = evt =>{
    const value = evt.target.value;
    // includes : ES6 추가, 포함여부 리턴
    if(this.state.language.includes(value)){
      const newLang= this.state.language.filter(item=> item !== value);
      this.setState({language: newLang});
    }else{
      this.setState({language: this.state.language.concat(value)});
    }
  }

  changeOptions = evt=> {
    // 유사 배열이라 for 문을 사용할 수 없음
    // const elem = evt.target.selectedOptions;
    
    // Array.from : 유사배열을 실제 배열로 바꿔줌
    const elem = Array.from(evt.target.selectedOptions);
    const elemValue = elem.map(item => item.value)
    this.setState({four:elemValue});
  }
  
  sendData= evt=>{
    // evt.preventDefault()
    // DOM이 가지고 있는 기본 기능을 취소하고, 
    // 사용자 정의 기능 실행
    evt.preventDefault();
    
    // ajax 전송
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h3>A03 Class Component Event & Form</h3>

        <form>
          Name: {this.state.name}
            <input type="text" name="name" className="form-control" 
              defaultValue ={this.state.name} onChange={this.changeString}/>
          Age: {this.state.age + 100} 
            <input type="text" name="age" className="form-control" 
             defaultValue ={this.state.age} onChange={this.changeNumber}/>
          Date: {this.state.date}
            <input type="date" name="date" className="form-control" 
            defaultValue ={this.state.date} onChange={this.changeString}/>

          RadioButton: {this.state.sports}<br />
            <div className="form-check">
              {/* defaultChecked={this.state.sports ==='baseball'} 기본 값 체크 */}
              <input type="radio" name="sports" value="baseball" id="baseball" className="form-check-input" 
                onChange={this.changeString} defaultChecked={this.state.sports ==='baseball'}/>
              <label htmlFor="baseball" className="form-check-label">야구</label>
            </div>
            <div className="form-check">
              <input type="radio" name="sports" value="soccer" id="soccer" className="form-check-input" 
                onChange={this.changeString} defaultChecked={this.state.sports ==='soccer'}/>
              <label htmlFor="soccer" className="form-check-label">축구</label>
            </div>
            <div className="form-check">
              <input type="radio" name="sports" value="basketball" id="basketball" className="form-check-input"
              onChange={this.changeString} defaultChecked={this.state.sports ==='basketball'}/>
              <label htmlFor="basketball" className="form-check-label">농구</label>
            </div>

          CheckBox One: {this.state.isChecked ? '동의' : '비동의'}<br />
            <div className="form-check">
              <input type="checkbox" name="isChecked" className="form-check-input" 
                defaultChecked ={this.state.isChecked === true} onChange ={this.changeCheck}/>
              <label htmlFor="check" className="form-check-label">동의</label>
            </div>

          CheckBox: { this.state.language.join('-')} <br />
            <div className="form-check">
              <input type="checkbox" name="language" value="Angular" id="angular" className="form-check-input"
                defaultChecked = {this.state.language.includes('Angular')} onChange = {this.changeLanguage} />
              <label htmlFor="baseball" className="form-check-label">앵귤러</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="language" value="React" id="react" className="form-check-input" 
                defaultChecked = {this.state.language.includes('React')} onChange = {this.changeLanguage}/>
              <label htmlFor="react" className="form-check-label">리엑트</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input"
                defaultChecked = {this.state.language.includes('Vue')} onChange = {this.changeLanguage}/>
              <label htmlFor="vue" className="form-check-label">뷰</label>
            </div>

          SelectBox: {this.state.baseball}<br/>
            <select name="baseball" className="form-control"
              value={this.state.baseball} onChange = {this.changeString} >
              <option>NC</option>
              <option>두산</option>
              <option>엘지</option>
            </select>
          
          SelectBox Multi: {Array.from(this.state.four) }<br />
            <select name="four" multiple size="3" className="form-control" 
            value={this.state.four} onChange ={this.changeOptions}>
              <option>NC</option>
              <option>두산</option>
              <option>엘지</option>
            </select>
          <br />

          <button type="submit" onClick={this.sendData}>SEND</button>
        </form>
      </div>
    );
  };
};
export default A03ClassEvent
