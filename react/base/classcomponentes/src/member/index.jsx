import { Component } from "react";

class Member extends Component{ 
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };
    }

    login() {
        let loginName = this.state.name;

        loginName="Luan Vitor";

        this.setState({
            name: loginName
        });
    }

    logarComNome(loginName) {
        let name = this.state.name;

        name = loginName;

        this.setState({
           name:name 
        });
    }

    render() {
        return(
            <>
                <h1> Olá, {this.state.name} </h1>

                <button onClick={() => this.login()}>Fazer login</button>
                <button onClick={() => this.logarComNome("Neymar Júnior")}>Fazer login com nome</button>

                <button onClick={() => this.setState({name:''})}>Fazer logout</button>
                
            </>
        )
    }
}

export default Member;
