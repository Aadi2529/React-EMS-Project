// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({ children }) => {
//     // localStorage.clear()

//     const [userData, setUserData] = useState(null)

//     useEffect(() => {
//         setLocalStorage()

//         const {employees} = getLocalStorage()
//         setUserData(employees)
//     }, []);

//     const updateTaskStatus = (empId, taskId, statues) => {
//         const updatedUsers = userData.map (emp ={
//             if (emp.id === empId){
//                 return {
//                     ...emp,
//                     tasks: emp.task.map(task =>
//                         task.id === taskId ? {...task, statues} :task
//                     ), 
//                 };
//             }
//             return emp 
//         })
    
//     };
    
    

//     return (
//         <div>
//             <AuthContext.Provider value={[userData,setUserData]}>
//                 {children}
//             </AuthContext.Provider>
//         </div>
//     )
// }

// export default AuthProvider





import React, { createContext, useEffect, useState } from 'react';
// import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();  // Data set hotoy
    const { employees } = getLocalStorage();
    setUserData(employees);  // Employees local storage madhun load kartoy
  }, []);

  // ✅ Employee cha task update karnya sathi function
  const updateTaskStatus = (empId, taskId, status) => {
    const updatedUsers = userData.map(emp => {
      if (emp.id === empId) {
        return {
          ...emp,
          tasks: emp.tasks.map(task =>
            task.id === taskId
              ? { ...task, status }  // ✅ Status Update Zali
              : task
          ),
        };
      }
      return emp;
    });

    setUserData(updatedUsers);
    setLocalStorage({ employees: updatedUsers }); // Local storage update
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, updateTaskStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;