
import Header from './components/header/Header';
import Home from './page/Home'



function App() {
  return (
    <div className="App rounded-3 p-3" style={{border: "5px solid #258ebe", backgroundColor: "#258ebe"}}> 
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
