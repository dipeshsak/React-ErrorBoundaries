import React,{Component} from 'react'

export default class CounterDemo extends Component{
    state={
      count:0
    }

    handleClick=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    render(){
        if(this.state.count == 5){
            throw Error("Error Occured!")
        }else{
        return(
            <div>
                Counter Value : {this.state.count}
                <button onClick={this.handleClick}>INC</button>
                
            </div>
        )
        }
    }
}