import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import ExerciseList from './components/exercises-list.component'
import EditExercise from './components/edit-exercises.component'
import CreateExercise from './components/create-exercises.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
	<Router>
		<div className="container">
		<Navbar />
		<br/>
		<Route path="/" exact component={ExerciseList} />	  
		<Route path="/edit/:id" component={EditExercise} />	  
		<Route path="/create" component={CreateExercise} />	  
		<Route path="/user" component={CreateUser} />
		</div>	  
	</Router>
  );
}

export default App;
