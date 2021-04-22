import React,{Component} from 'react'

export default class ErrorBoundaries extends Component{
    state={
        hasError:false,
        error:"",
        errorInfo:""
    }


    static getDerivedStateFromError(error){
        console.log(error);
        return {hasError:true}
    }

    componentDidCatch(error,errorInfo){
        this.setState({
            error:error,
            errorInfo:errorInfo
        })

    }

    render(){
        
       if(this.state.hasError){
        return(
            <div>
                <h5>Error: <strong>{this.state.error.toString()}</strong></h5>
                <br></br>
                <h5>Error Info: <strong>{this.state.errorInfo.componentStack}</strong></h5>
            </div>
        )
       }else{
           return this.props.children
           
       }
        
    }
}