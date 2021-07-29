import React, { useState } from 'react'

const Filter = (props) => {
  return (
    <p>filter shown with <input value={props.value} onChange={props.onChange}/></p>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
        <div>
          Name: <input value={props.nameValue} onChange={props.nameChange}/>
        </div>
        <div>
          Number: <input value={props.numValue} onChange={props.numChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Person = (props) => {
  return (
    <>{props.person.name} {props.person.number}<br></br></>
  )
}

const Display = (props) => {
  if (props.newSearch === '') {
    return props.persons.map(person => <Person key={person.name} person={person}/>)
  } else {
    let filteredpersons = props.persons.filter(person => person.name.toLowerCase().includes(props.newSearch.toLowerCase()))
    console.log(filteredpersons)
    return (
    <div>
      {filteredpersons.map(person => <Person key={person.name} person={person}/>)}
    </div>)
  }
}

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' },
    { name: 'Judy Alvarez',
      number: '520-1314'},
    { name: 'Johnny Silverhand',
      number: '123-456789'},
    { name: 'Ada Lovelace',
      number: '39-44-5323523'},
    { name: 'V', 
      number: '8888888'},
    { name: 'Jackie Welles',
      number: '765432100'},
    { name: 'Yoshibuno Arasaka',
      number: '666778888'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    if (persons.map(person=>person.name).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      const personObject = {
        name: newName,
        number: newNum
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNum('')
    }
    
    console.log(persons)    
  }

  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleAddNum = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }
  const handleSearch = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearch}/>
      <h3>Add a new</h3>
      <PersonForm onSubmit={addPerson} nameValue={newName} numValue={newNum} nameChange={handleAddName} numChange={handleAddNum}/>
      <h2>Numbers</h2>
      <Display newSearch={newSearch} persons={persons}/>
    </div>
  )
}

export default App