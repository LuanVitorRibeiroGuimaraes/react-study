import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import cookies from '../assets/cookies.png'

class BiscoitoDaSorte extends Component {
    constructor(props) {
        super(props);

        this.frases = ['A vida trará coisas boas se tiveres paciência.',
            'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
            'Não compense na ira o que lhe falta na razão.',
            'Defeitos e virtudes são apenas dois lados da mesma moeda.',
            'A maior de todas as torres começa no solo.',
            'Não há que ser forte.'
        ];

        this.state = {
            fraseSorteada: ''
        };
    }

    sortearFrase() {
        let number = Math.floor(Math.random() * this.frases.length);
        this.setState({fraseSorteada:this.frases[number]});
    }

    render() {
        return(
            <div className="position-absolute top-0 start-50 translate-middle-x text-center">
                <div className="border border-primary">
                    <img src={cookies} style={{ width:250 }} alt="" />
                    <h1>BISCOITO DA SORTE</h1>
                    <button className="btn btn-primary" style={{ width:250 }} onClick={() => this.sortearFrase()}>Sortear</button>
                    <p className="text-wrap w-100" >{this.state.fraseSorteada}</p>
                </div>
            </div>
        )
    }
}

export default BiscoitoDaSorte;