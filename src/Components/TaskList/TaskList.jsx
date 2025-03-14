// import React from 'react'
// import AcceptTask from './AcceptTask'
// import NewTask from './NewTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'

// const TaskList = ({ data }) => {
//     return (
//         <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
//             {data.tasks.map((elem, idx) => {
//                 if (elem.active) {
//                     return <AcceptTask key={idx} data={elem} />
//                 }
//                 if (elem.newTask) {
//                     return <NewTask key={idx} data={elem} />
//                 }
//                 if (elem.completed) {
//                     return <CompleteTask key={idx} data={elem} />
//                 }
//                 if (elem.failed) {
//                     return <FailedTask key={idx} data={elem} />
//                 }

//             })}
//         </div>
//     )
// }

// export default TaskList


const Tasklist = ({ data, updateTaskStatus }) => {
    return (
      <div>
        {data.map((task) => (
          <div key={task.id} className="bg-gray-200 p-4 m-2">
            <h2>{task.title} - {task.status}</h2>
            
            <button
              onClick={() => updateTaskStatus(task.id, "Completed")}
              className="bg-green-500 text-white px-2 py-1 m-1"
            >
              ✅ Complete
            </button>
  
            <button
              onClick={() => updateTaskStatus(task.id, "Failed")}
              className="bg-red-500 text-white px-2 py-1 m-1"
            >
              ❌ Failed
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Tasklist;
  