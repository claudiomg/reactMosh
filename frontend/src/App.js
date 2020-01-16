import React from 'react';
import './App.css';
import TestClient from "./model/TestClient";

function App() {

    const testBackend = () => {
        console.log(TestClient().getTest().then(
            resp => {
                if(resp.status === 200){
                    console.log("200 - OK")
                } else {
                    console.log("ERROR")
                }
            }
        ))
    }

  return (
    <div>
        <button onClick={testBackend}>Test</button>
    </div>
  );
}

export default App;
