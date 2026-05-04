import { Component } from "react";


class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.aumentar = this.aumentar.bind(this);
    }

    aumentar() {
        let counter = this.state.counter;

        counter += 1;

        this.setState({
            counter: counter
        });
    }

    diminuir() {
        let counter = this.state.counter;

        counter -= 1;

        this.setState({
            counter: counter
        });
    }

    zerar() {
        let counter = this.state.counter;

        counter = 0;

        this.setState({
            counter: counter
        });
    }

    render() {
        
        return (
            <>
                <h1>Contador</h1>
                
                    <p>Value: {this.state.counter}</p>

                <h2>
                    <button  onClick={this.aumentar} >+</button>
                    <button onClick={() => this.diminuir()} >-</button>
                </h2>

                <button onClick={() => this.zerar()} >ZERAR</button>
            </>
        )
    }

}

export default Counter;