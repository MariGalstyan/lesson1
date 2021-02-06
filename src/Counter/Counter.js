import React from 'react';
import Result from './Result';
import Action from './Action';

class Counter extends React.Component {
    state = {
        counter: 0,
        componentName: Counter,
    }
    sethandlePlusCount = ()=> {
       this.setState({
           counter:this.state.counter+1
       })
    }
    sethandleMinusCount = ()=> {
        this.setState({
            counter:this.state.counter-1
        })
    }
    render() {
        return (
            <div>
               <Action sethandlePlusCount={this.sethandlePlusCount} sethandleMinusCount={this.sethandleMinusCount}/>
               <Result counter={this.state.counter} />
            </div>
        )
      
    }
}

export default Counter;