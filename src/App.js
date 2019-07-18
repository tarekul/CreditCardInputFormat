import React from 'react';


class App extends React.Component {
  state = {
    card:'',
    result:''
  }

  onChange = (e) =>{
    if(e.target.value === '') this.setState({card:'',result:''})
    let userInput = e.target.value.split(' ').join('')
    if(isNaN(userInput)) return
    const firstChar = userInput[0]
    
    let counter = 0;
    let formatStr = ''
    if(firstChar === '4' || firstChar === '5'){
      userInput = userInput.slice(0,16)
      for(let i=0;i<userInput.length;i++){
        formatStr += userInput[i]
        counter += 1
        if(counter % 4 === 0 && i !== userInput.length-1){
          formatStr += ' '
        }
      }

      const card = firstChar === '4' ? 'Visa' : 'Master'
      this.setState({card,result:formatStr})
    } 
    else if(firstChar === '3' || (firstChar !== '4' && firstChar !=='5')){
      userInput = userInput.slice(0,15)
      for(let i = 0;i<userInput.length;i++){
          formatStr += userInput[i]
          counter += 1
          
          if(counter === 4 && i!==userInput.length-1) formatStr += ' '
          else if(counter === 10 && i!==userInput.length-1) formatStr += ' '

      }
      const card = userInput[1] === '7' ? 'Amex' : ''
      this.setState({card,result:formatStr})
    }
    
  }

  render(){
    const {card,result} = this.state
    return <>
      <div style={{display:'flex',justifyContent:'center'}}>
        <h3>Card Type:{card}</h3>
      </div>

      <div style={{display:'flex',justifyContent:'center'}}>
        <input type='text' value={result} onChange={e=>this.onChange(e)} style={{fontSize:30}} />
      </div>
      
    </>
  }
  
}

export default App;
