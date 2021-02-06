import React from 'react';
import Result from './Counter/Result';
import Action from './Counter/Action';

class Counter extends React.Component {
    state = {
        counter: 0,
        componentName: Counter,
    }
    sethandlePlusCount = (SEvent)=> {
       this.setState({
           counter:this.state.counter+1
       })
    }
    sethandleMinusCount = (SEvent)=> {
        this.setState({
            counter:this.state.counter-1
        })
    }
    render() {
        const {counter} = this.state;
      
    }
}

export default Counter;