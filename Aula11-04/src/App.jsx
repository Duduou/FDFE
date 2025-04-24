import { useState } from 'react'
import './App.css'

import Form from './components/Form.jsx'
import Table from './components/Table.jsx'

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <h1>Cadastro de Usuários</h1>
      <Form onAddItem={handleAddItem} />
      <Table items={items} />
    </div>
  )
}

export default App
