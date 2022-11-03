import './App.css';

function App() {
  const data = [
    {
      name: "Norman Goodtrack",
      mood: "happy!",
      age: 30
    },
    {
      name: "Laura Silva",
      mood: "focused!",
      age: 24
    },
    {
      name: "Pavlova Snowbrick",
      mood: "tired!",
      age: 28
    },
  ]
  return (
    <div className="App">
      <h1>HAPPY TABLE!</h1>
      <div>
        <table  className='centered-with-margin'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mood</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map(datarow => <tr>
              <td>{datarow.name}</td>
              <td>{datarow.mood}</td>
              <td>{datarow.age}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
