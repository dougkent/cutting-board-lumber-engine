// React
import React from 'react';

// Cutting Board Lumber Engine
import './app.scss';
import EngineFormComponent from './components/engine-form.component/engine-form.component';

class App extends React.Component {
    render() {
        return (
            <div className="container fade-in">
                <h1>End Grain Cutting Board Planning Engine </h1>
                <EngineFormComponent />
            </div>
        )
    }
}

export default App;
