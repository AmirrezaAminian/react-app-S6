import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

 

  return (
    <li className="goal-item" >
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
