import { Component } from "react";

class ConditionalLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: true
        };
    }

    login(status) {
        this.setState({
            status: status
        });
    }

    render() {
        return(

            <div>

            {this.state.status ?
                <div>
                
                    <h1>Olá, Luan</h1>
                    <button onClick={()=> this.login(false)} >logout</button>           
                </div>
                :
                <div>
                    <h1>Olá, visitante, faça seu login:</h1>
                    <button onClick={()=> this.login(true)} >login</button>           
                </div>
            }

            </div>
        )
    }
}

export default ConditionalLogin;