// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const Person = ({ name, votes, onVote, onDelete }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newPersonName, setNewPersonName] = useState("");

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//     setNewPersonName("");
//   };

//   const handleAddPerson = () => {
//     if (newPersonName.trim() !== "") {
//       setIsModalOpen(false);
//       onAddPerson(newPersonName);
//     }
//   };

//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Votes: {votes}</p>
//       <button onClick={onVote}>Vote</button>
//       <button onClick={toggleModal}>Add Person</button>
//       <button onClick={onDelete}>Delete</button>
//       {isModalOpen &&
//         ReactDOM.createPortal(
//           <div className="modal">
//             <div className="modal-content">
//               <span className="close" onClick={toggleModal}>
//                 &times;
//               </span>
//               <h2>Add Person</h2>
//               <input
//                 type="text"
//                 value={newPersonName}
//                 onChange={(e) => setNewPersonName(e.target.value)}
//               />
//               <button onClick={handleAddPerson}>Add</button>
//             </div>
//           </div>,
//           document.getElementById("modal-root")
//         )}
//     </div>
//   );
// };

// export default Person;



import React from "react";

const Person = ({ id, name, votes, onVote, onDelete }) => {
  return (
    <div className="person">
      <h2>{name}</h2>
      <p>Votes: {votes}</p>
      <button onClick={() => onVote(id)}>Vote</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Person;
