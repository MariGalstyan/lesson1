import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
    }
    handlePlusCount = ()=> {
       this.setState({
           counter:this.state.counter+1
       })
    }
    handleMinusCount = ()=> {
        counter:this.state.counter-1
    }
}

export default Counter;