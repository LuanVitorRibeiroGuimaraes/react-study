import React, { Component } from "react";
import Team from "./equipe";

class App extends Component {
    render() {
        return (
            <>

                <h1>Conheça a nossa equipe:</h1>
                <Team nome = "Luan" />
            </>
        )
    }
}

export default App;