// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;






// import React, { useState, createContext, useContext, useEffect } from "react";
// import ReactDOM from "react-dom";

// // Create context for managing student data
// const VotingContext = createContext();

// // Custom hook to use the voting context
// const useVoting = () => useContext(VotingContext);

// // Main app component
// const App = () => {
//   const [students, setStudents] = useState(() => {
//     // Retrieve students data from local storage or initialize it
//     const storedStudents = localStorage.getItem("students");
//     return storedStudents
//       ? JSON.parse(storedStudents)
//       : [
//           { id: 1, name: "Sahil", votes: 0, voterNames: [] },
//           { id: 2, name: "Mohit", votes: 0, voterNames: [] },
//           { id: 3, name: "Rahul", votes: 0, voterNames: [] }
//         ];
//   });

//   // State variables for input form
//   const [showInput, setShowInput] = useState(false);
//   const [voterName, setVoterName] = useState("");
//   const [selectedStudentId, setSelectedStudentId] = useState(null);

//   // Function to add vote for a student
//   const addVote = () => {
//     if (voterName && selectedStudentId) {
//       // Update students array with new vote count and voter name
//       const updatedStudents = students.map(student =>
//         student.id === selectedStudentId
//           ? { ...student, votes: student.votes + 1, voterNames: [...student.voterNames, voterName] }
//           : student
//       );
//       setStudents(updatedStudents);
//       // Reset input values and hide input form
//       setVoterName("");
//       setSelectedStudentId(null);
//       setShowInput(false);
//     }
//   };

//   // Function to cancel vote addition
//   const cancelVote = () => {
//     // Reset input values and hide input form
//     setVoterName("");
//     setSelectedStudentId(null);
//     setShowInput(false);
//   };

//   // Save students data to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("students", JSON.stringify(students));
//   }, [students]);

//   return (
//     <div className="App">
//       <VotingContext.Provider value={{ students, addVote }}>
//         <StudentList setShowInput={setShowInput} setSelectedStudentId={setSelectedStudentId} />
//         {showInput && (
//           <VoteInput
//             voterName={voterName}
//             setVoterName={setVoterName}
//             selectedStudentId={selectedStudentId}
//             setSelectedStudentId={setSelectedStudentId}
//             cancelVote={cancelVote}
//             addVote={addVote}
//             students={students} // Pass students as a prop
//           />
//         )}
//       </VotingContext.Provider>
//     </div>
//   );
// };

// // Student list component
// const StudentList = ({ setShowInput, setSelectedStudentId }) => {
//   const { students } = useVoting();

//   // Calculate total votes
//   const totalVotes = students.reduce((total, student) => total + student.votes, 0);

//   const handleAddVote = () => {
//     // Open input form for adding vote
//     setSelectedStudentId(null); // Set selected student ID to null as it's not associated with any specific student
//     setShowInput(true);
//   };

//   return (
//     <div className="student-list">
//       <h2>voting for class Moniter</h2>
//       <p>Total Votes: {totalVotes}</p>
//       <button onClick={handleAddVote}>Add Vote</button>
//       {students && students.map(student => (
//         <div key={student.id} className="student">
//           <h2>{student.name}</h2>
//           <p>Votes: {student.votes}</p>
//           {/* Display all voter names for this student */}
//           <ul>
//             {student.voterNames.map((voter, index) => (
//               <li key={index}>{voter}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Vote input component
// const VoteInput = ({ voterName, setVoterName, selectedStudentId, setSelectedStudentId, cancelVote, addVote, students }) => {
//   return (
//     <div className="vote-input">
//       <h2>Vote</h2>
//       <input
//         type="text"
//         placeholder="Enter voter name"
//         value={voterName}
//         onChange={e => setVoterName(e.target.value)}
//       />
//       <select value={selectedStudentId} onChange={e => setSelectedStudentId(parseInt(e.target.value))}>
//         <option value={null}>Select Student ID</option>
//         {students && students.map(student => (
//           <option key={student.id} value={student.id}>{student.name}</option>
//         ))}
//       </select>
//       <button onClick={addVote}>Add Vote</button>
//       <button onClick={cancelVote}>Cancel</button>
//     </div>
//   );
// };

// // Render the app
// ReactDOM.render(<App />, document.getElementById("root"));

// export default App;


// import React, { useState, createContext, useContext, useEffect } from "react";
// import ReactDOM from "react-dom";

// // Create context for managing student data
// const VotingContext = createContext();

// // Custom hook to use the voting context
// const useVoting = () => useContext(VotingContext);

// // Main app component
// const App = () => {
//   const [students, setStudents] = useState(() => {
//     // Retrieve students data from local storage or initialize it
//     const storedStudents = localStorage.getItem("students");
//     return storedStudents
//       ? JSON.parse(storedStudents)
//       : [
//           { id: 1, name: "Sahil", votes: 0, voterNames: [] },
//           { id: 2, name: "Mohit", votes: 0, voterNames: [] },
//           { id: 3, name: "Rahul", votes: 0, voterNames: [] }
//         ];
//   });

//   // State variables for input form
//   const [showInput, setShowInput] = useState(false);
//   const [voterName, setVoterName] = useState("");
//   const [selectedStudentId, setSelectedStudentId] = useState(null);

//   // Function to add vote for a student
//   const addVote = () => {
//     if (voterName && selectedStudentId) {
//       // Update students array with new vote count and voter name
//       const updatedStudents = students.map(student =>
//         student.id === selectedStudentId
//           ? { ...student, votes: student.votes + 1, voterNames: [...student.voterNames, voterName] }
//           : student
//       );
//       setStudents(updatedStudents);
//       // Reset input values and hide input form
//       setVoterName("");
//       setSelectedStudentId(null);
//       setShowInput(false);
//     }
//   };

//   // Function to cancel vote addition
//   const cancelVote = () => {
//     // Reset input values and hide input form
//     setVoterName("");
//     setSelectedStudentId(null);
//     setShowInput(false);
//   };

//   // Function to handle voter deletion
//   const handleDeleteVoter = (studentId, voterIndex) => {
//     const updatedStudents = students.map(student => {
//       if (student.id === studentId) {
//         const updatedVoterNames = [...student.voterNames];
//         updatedVoterNames.splice(voterIndex, 1); // Remove voter at the specified index
//         return { ...student, votes: student.votes - 1, voterNames: updatedVoterNames };
//       }
//       return student;
//     });
//     setStudents(updatedStudents);
//   };

//   // Save students data to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("students", JSON.stringify(students));
//   }, [students]);

//   return (
//     <div className="App">
//       <VotingContext.Provider value={{ students, addVote, handleDeleteVoter }}>
//         <StudentList setShowInput={setShowInput} setSelectedStudentId={setSelectedStudentId} />
//         {showInput && (
//           <VoteInput
//             voterName={voterName}
//             setVoterName={setVoterName}
//             selectedStudentId={selectedStudentId}
//             setSelectedStudentId={setSelectedStudentId}
//             cancelVote={cancelVote}
//             addVote={addVote}
//           />
//         )}
//       </VotingContext.Provider>
//     </div>
//   );
// };

// // Student list component
// const StudentList = ({ setShowInput, setSelectedStudentId }) => {
//   const { students, handleDeleteVoter } = useVoting(); // Add handleDeleteVoter here

//   // Calculate total votes
//   const totalVotes = students.reduce((total, student) => total + student.votes, 0);

//   const handleAddVote = () => {
//     // Open input form for adding vote
//     setSelectedStudentId(null); // Set selected student ID to null as it's not associated with any specific student
//     setShowInput(true);
//   };

//   return (
//     <div className="student-list">
//       <h2>Voting</h2>
//       <p>Total Votes: {totalVotes}</p>
//       <button onClick={handleAddVote}>Add Vote</button>
//       {students && students.map(student => (
//         <div key={student.id} className="student">
//           <h2>{student.name}</h2>
//           <p>Votes: {student.votes}</p>
//           {/* Display all voter names for this student */}
//           <ul>
//             {student.voterNames.map((voter, index) => (
//               <li key={index}>
//                 {voter} 
//                 <button onClick={() => handleDeleteVoter(student.id, index)}>Delete</button> {/* Call handleDeleteVoter here */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Vote input component
// const VoteInput = ({ voterName, setVoterName, selectedStudentId, setSelectedStudentId, cancelVote, addVote }) => {
//   return (
//     <div className="vote-input">
//       <h2>Vote</h2>
//       <input
//         type="text"
//         placeholder="Enter voter name"
//         value={voterName}
//         onChange={e => setVoterName(e.target.value)}
//       />
//       <select value={selectedStudentId} onChange={e => setSelectedStudentId(parseInt(e.target.value))}>
//         <option value={null}>Select Student ID</option>
//         {[1, 2, 3].map(id => (
//           <option key={id} value={id}>{id}</option>
//         ))}
//       </select>
//       <button onClick={addVote}>Add Vote</button>
//       <button onClick={cancelVote}>Cancel</button>
//     </div>
//   );
// };

// // Render the app
// ReactDOM.render(<App />, document.getElementById("root"));

// export default App;


// import React, { useState, createContext, useContext, useEffect } from "react";
// import ReactDOM from "react-dom";

// // Create context for managing student data
// const VotingContext = createContext();

// // Custom hook to use the voting context
// const useVoting = () => useContext(VotingContext);

// // Main app component
// const App = () => {
//   const [students, setStudents] = useState(() => {
//     // Retrieve students data from local storage or initialize it
//     const storedStudents = localStorage.getItem("students");
//     return storedStudents
//       ? JSON.parse(storedStudents)
//       : [
//           { id: 1, name: "Sahil", votes: 0, voterNames: [] },
//           { id: 2, name: "Mohit", votes: 0, voterNames: [] },
//           { id: 3, name: "Rahul", votes: 0, voterNames: [] }
//         ];
//   });

//   // State variables for input form
//   const [showInput, setShowInput] = useState(false);
//   const [voterName, setVoterName] = useState("");
//   const [selectedStudentId, setSelectedStudentId] = useState(null);

//   // Function to add vote for a student
//   const addVote = () => {
//     if (voterName && selectedStudentId) {
//       // Update students array with new vote count and voter name
//       const updatedStudents = students.map(student =>
//         student.id === selectedStudentId
//           ? { ...student, votes: student.votes + 1, voterNames: [...student.voterNames, voterName] }
//           : student
//       );
//       setStudents(updatedStudents);
//       // Reset input values and hide input form
//       setVoterName("");
//       setSelectedStudentId(null);
//       setShowInput(false);
//     }
//   };

//   // Function to cancel vote addition
//   const cancelVote = () => {
//     // Reset input values and hide input form
//     setVoterName("");
//     setSelectedStudentId(null);
//     setShowInput(false);
//   };

//   // Function to handle voter deletion
//   const handleDeleteVoter = (studentId, voterIndex) => {
//     const updatedStudents = students.map(student => {
//       if (student.id === studentId) {
//         const updatedVoterNames = [...student.voterNames];
//         updatedVoterNames.splice(voterIndex, 1); // Remove voter at the specified index
//         return { ...student, votes: student.votes - 1, voterNames: updatedVoterNames };
//       }
//       return student;
//     });
//     setStudents(updatedStudents);
//   };

//   // Save students data to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("students", JSON.stringify(students));
//   }, [students]);

//   return (
//     <div className="App">
//       <VotingContext.Provider value={{ students, addVote, handleDeleteVoter }}>
//         <StudentList setShowInput={setShowInput} setSelectedStudentId={setSelectedStudentId} />
//         {showInput && (
//           <VoteInput
//             voterName={voterName}
//             setVoterName={setVoterName}
//             selectedStudentId={selectedStudentId}
//             setSelectedStudentId={setSelectedStudentId}
//             cancelVote={cancelVote}
//             addVote={addVote}
//           />
//         )}
//       </VotingContext.Provider>
//     </div>
//   );
// };

// // Student list component
// const StudentList = ({ setShowInput, setSelectedStudentId }) => {
//   const { students, handleDeleteVoter } = useVoting(); // Add handleDeleteVoter here

//   // Calculate total votes
//   const totalVotes = students.reduce((total, student) => total + student.votes, 0);

//   const handleAddVote = () => {
//     // Open input form for adding vote
//     setSelectedStudentId(null); // Set selected student ID to null as it's not associated with any specific student
//     setShowInput(true);
//   };

//   return (
//     <div className="student-list">
//       <h2>Voting</h2>
//       <p>Total Votes: {totalVotes}</p>
//       <button onClick={handleAddVote}>Add Vote</button>
//       {students && students.map(student => (
//         <div key={student.id} className="student">
//           <h2>{student.name}</h2>
//           <p>Votes: {student.votes}</p>
//           {/* Display all voter names for this student */}
//           <ul>
//             {student.voterNames.map((voter, index) => (
//               <li key={index}>
//                 {voter} 
//                 <button onClick={() => handleDeleteVoter(student.id, index)}>Delete</button> {/* Call handleDeleteVoter here */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Vote input component
// const VoteInput = ({ voterName, setVoterName, selectedStudentId, setSelectedStudentId, cancelVote, addVote }) => {
//   return (
//     <div className="vote-input">
//       <h2>Vote</h2>
//       <input
//         type="text"
//         placeholder="Enter voter name"
//         value={voterName}
//         onChange={e => setVoterName(e.target.value)}
//       />
//       <select value={selectedStudentId} onChange={e => setSelectedStudentId(parseInt(e.target.value))}>
//         <option value={null}>Select Student ID</option>
//         {[1, 2, 3].map(id => (
//           <option key={id} value={id}>{id}</option>
//         ))}
//       </select>
//       <button onClick={addVote}>Add Vote</button>
//       <button onClick={cancelVote}>Cancel</button>
//     </div>
//   );
// };

// // Render the app
// ReactDOM.render(<App />, document.getElementById("root"));

// export default App;


// // export default App;


import React, { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

// Create context for managing student data
const VotingContext = createContext();

// Custom hook to use the voting context
const useVoting = () => useContext(VotingContext);

// Main app component
const App = () => {
  const [students, setStudents] = useState(() => {
    // Retrieve students data from local storage or initialize it
    const storedStudents = localStorage.getItem("students");
    return storedStudents
      ? JSON.parse(storedStudents)
      : [
          { id: 1, name: "Sahil", votes: 0, voterNames: [] },
          { id: 2, name: "Mohit", votes: 0, voterNames: [] },
          { id: 3, name: "Rahul", votes: 0, voterNames: [] }
        ];
  });

  // State variables for input form
  const [showInput, setShowInput] = useState(false);
  const [voterName, setVoterName] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  // Function to add vote for a student
  const addVote = () => {
    if (voterName && selectedStudentId) {
      // Update students array with new vote count and voter name
      const updatedStudents = students.map(student =>
        student.id === selectedStudentId
          ? { ...student, votes: student.votes + 1, voterNames: [...student.voterNames, voterName] }
          : student
      );
      setStudents(updatedStudents);
      // Reset input values and hide input form
      setVoterName("");
      setSelectedStudentId(null);
      setShowInput(false);
    }
  };

  // Function to cancel vote addition
  const cancelVote = () => {
    // Reset input values and hide input form
    setVoterName("");
    setSelectedStudentId(null);
    setShowInput(false);
  };

  // Function to handle voter deletion
  const handleDeleteVoter = (studentId, voterIndex) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        const updatedVoterNames = [...student.voterNames];
        updatedVoterNames.splice(voterIndex, 1); // Remove voter at the specified index
        return { ...student, votes: student.votes - 1, voterNames: updatedVoterNames };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  // Save students data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  return (
    <div className="App">
      <VotingContext.Provider value={{ students, addVote, handleDeleteVoter }}>
        <StudentList setShowInput={setShowInput} setSelectedStudentId={setSelectedStudentId} />
        {showInput && (
          <VoteInput
            voterName={voterName}
            setVoterName={setVoterName}
            selectedStudentId={selectedStudentId}
            setSelectedStudentId={setSelectedStudentId}
            cancelVote={cancelVote}
            addVote={addVote}
            students={students} // Pass students data to VoteInput component
          />
        )}
      </VotingContext.Provider>
    </div>
  );
};

// Student list component
const StudentList = ({ setShowInput, setSelectedStudentId }) => {
  const { students, handleDeleteVoter } = useVoting(); // Add handleDeleteVoter here

  // Calculate total votes
  const totalVotes = students.reduce((total, student) => total + student.votes, 0);

  const handleAddVote = () => {
    // Open input form for adding vote
    setSelectedStudentId(null); // Set selected student ID to null as it's not associated with any specific student
    setShowInput(true);
  };

  return (
    <div className="student-list">
      <h2>Voting</h2>
      <p>Total Votes: {totalVotes}</p>
      <button onClick={handleAddVote}>Add Vote</button>
      {students && students.map(student => (
        <div key={student.id} className="student">
          <h2>{student.name}</h2>
          <p>Votes: {student.votes}</p>
          {/* Display all voter names for this student */}
          <ul>
            {student.voterNames.map((voter, index) => (
              <li key={index}>
                {voter} 
                <button onClick={() => handleDeleteVoter(student.id, index)}>Delete</button> {/* Call handleDeleteVoter here */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Vote input component
const VoteInput = ({ voterName, setVoterName, selectedStudentId, setSelectedStudentId, cancelVote, addVote, students }) => {
  return (
    <div className="vote-input">
      <h2>Vote</h2>
      <input
        type="text"
        placeholder="Enter voter name"
        value={voterName}
        onChange={e => setVoterName(e.target.value)}
      />
      <select value={selectedStudentId} onChange={e => setSelectedStudentId(parseInt(e.target.value))}>
        <option value={null}>Select Student Name</option>
        {students && students.map(student => (
          <option key={student.id} value={student.id}>{student.name}</option>
        ))}
      </select>
      <button onClick={addVote}>Add Vote</button>
      <button onClick={cancelVote}>Cancel</button>
    </div>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById("root"));

export default App;
