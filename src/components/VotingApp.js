// import React, { useState, useEffect } from "react";
// import Person from "./Person";

// const VotingApp = () => {
//   // State to manage the list of persons
//   const [persons, setPersons] = useState([]);

//   // Function to add a new person
//   const addPerson = (name) => {
//     const newPerson = { name, votes: 0 };
//     setPersons([...persons, newPerson]);
//   };

//   // Function to delete a person
//   const deletePerson = (index) => {
//     const updatedPersons = [...persons];
//     updatedPersons.splice(index, 1);
//     setPersons(updatedPersons);
//   };

//   // Function to handle voting for a person
//   const voteForPerson = (index) => {
//     const updatedPersons = [...persons];
//     updatedPersons[index].votes += 1;
//     setPersons(updatedPersons);
//   };

//   // Load persons from local storage on component mount
//   useEffect(() => {
//     const savedPersons = JSON.parse(localStorage.getItem("persons")) || [];
//     setPersons(savedPersons);
//   }, []);

//   // Save persons to local storage whenever the persons state changes
//   useEffect(() => {
//     localStorage.setItem("persons", JSON.stringify(persons));
//   }, [persons]);

//   return (
//     <div>
//       <h1>Voting App</h1>
//       {persons.map((person, index) => (
//         <Person
//           key={index}
//           name={person.name}
//           votes={person.votes}
//           onVote={() => voteForPerson(index)}
//           onDelete={() => deletePerson(index)}
//         />
//       ))}
//       <input
//         type="text"
//         placeholder="Enter name..."
//         onChange={(e) => setNewPersonName(e.target.value)}
//       />
//       <button onClick={() => addPerson(newPersonName)}>Add Person</button>
//     </div>
//   );
// };

// export default VotingApp;








import React, { useState, useEffect } from "react";
import Person from "./Person";

const Voting = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("persons");
    if (storedData) {
      setPersons(JSON.parse(storedData));
    } else {
      setPersons([
        { id: 1, name: "Person 1", votes: 0 },
        { id: 2, name: "Person 2", votes: 0 },
        { id: 3, name: "Person 3", votes: 0 }
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  const handleVote = (id) => {
    const updatedPersons = persons.map((person) =>
      person.id === id ? { ...person, votes: person.votes + 1 } : person
    );
    setPersons(updatedPersons);
  };

  const handleDelete = (id) => {
    const updatedPersons = persons.filter((person) => person.id !== id);
    setPersons(updatedPersons);
  };

  return (
    <div className="voting-app">
      <div className="persons-column">
        {persons.map((person) => (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            votes={person.votes}
            onVote={handleVote}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Voting;

