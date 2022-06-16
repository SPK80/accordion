import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";

function App() {
    return (
        <div className="App">
            <Accordion title={"title"}>
                <Accordion title={"1"}>
                    <div>
                        1
                    </div>
                </Accordion>
                <Accordion title={2}>
                    <Accordion title={"2.1"}>
                        2.1
                    </Accordion>
                </Accordion>
            </Accordion>
        </div>
    );
}

export default App;
