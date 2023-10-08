import './App.scss';
import { Editor } from './components/Editor';
import { params, model } from './data';

function App() {
    return (
        <div className="App">
            <Editor params={params} model={model} />
        </div>
    );
}

export default App;
