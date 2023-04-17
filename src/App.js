import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
 
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  
    const [courseGoals, setCourseGoals] = useState([
      { text: "Do all exercises!", id: "g1" },
      { text: "Finish the course!", id: "g2" },
    ]);

   const addGoalHandler = function (enteredText) {
     setCourseGoals(prevGoals => {
      const  updatedGoals = [...prevGoals] ;
      updatedGoals.unshift({text : enteredText , id : Math.random().toString()})
      return updatedGoals;
     });
   };

   let content = (
    <p style={{textAlign: 'center'}}>No goals found. Maybe add one?</p>
   )

   if (courseGoals.length > 0) {
     content = <CourseGoalList items={courseGoals} />;
   }
  

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
