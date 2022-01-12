import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Exercise from "./Exercise";

// const Exercise = (props) => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0, 10)}</td>
//     <td>
//       <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
//       <a
//         href="#"
//         onClick={() => {
//           props.deleteExercise(props.exercise._id);
//         }}
//       >
//         delete
//       </a>
//     </td>
//   </tr>
// );

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => {
        setExercises(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(exercises);
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => console.log(res.data.data));

    const newExerciseList = exercises.filter((ex) => ex._id !== id);
    setExercises(newExerciseList);
  };

  const exerciseList = () => {
    return exercises.map((ex) => {
      return (
        <Exercise exercise={ex} deleteExercise={deleteExercise} key={ex._id} />
      );
    });
  };

  return (
    <div>
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{exerciseList()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ExercisesList;
