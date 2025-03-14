// import React from 'react'
// import Header from '../Others/Header'
// import TaskListNumbers from '../Others/TaskListNumber'
// import TaskList from '../TaskList/TaskList'

// const EmployeeDashboard = (props) => {

//   return (
//     <div className='p-10 bg-[#1C1C1C] h-screen'>
        
//         <Header changeUser={props.changeUser} data={props.data}/>
//         <TaskListNumbers data={props.data} />
//         <TaskList data={props.data} />
//     </div>
//   )
// }

// export default EmployeeDashboard


const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TasklistNumbers data={props.data} />
      <Tasklist data={props.data} updateTaskStatus={props.updateTaskStatus} /> 
    </div>
  );
};

export default EmployeeDashboard;
