import React from "react"

class Counter extends React.Component{
    constructor(props){
        super()
        this.state={
            count : 0,
            textP : ''
        }
        // console.log(this)
        // console.log(React.Component)
        // console.log('Init')
    }
    componentDidMount(){
        // console.log('Mount')
        document.title = 'HI'
    }
    componentDidUpdate(){
        // console.log('Update')
        document.title = this.state.count
    }
    componentWillUnmount(){
        // console.log('UnMount')
        document.title = 'BYE'
    }
    increment=()=> this.setState({count : this.state.count+1})
    decrement=()=> this.state.count >0 && this.setState({count : this.state.count -1})
    render(){
        // console.log('Render')
        return(
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
                <input type='text' onChange={(e)=>this.setState({textP : e.target.value})}/>
                <h3>{this.state.textP}</h3>
                <h4>{this.props.mamino}</h4>
            </div>
        )
    }
}

export default Counter