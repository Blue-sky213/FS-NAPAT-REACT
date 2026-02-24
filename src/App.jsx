import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from'./assets/Hello';


function App() {
  const helloData = [
    {name : 'Anirach', message: 'Hi there' },
    {name : 'Tom' , message: 'Hello..'}
  ];

return (
  <div className= 'App'>
    <Counter/>
    {helloData.map((data, index) =>(
    <Hello key= {index} name ={data.name} message={data.message} />
    
  ))}
  <Contact email="Napat@gmail.com" phone = "0842474514" />
  </div>
  );
}
export default App ;
