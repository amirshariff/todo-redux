const ADDSTUDENT = 'ADDSTUDENT'

const students = [
	{ firstName: 'Amir', age: 12, class: 'history' },
	{ firstName: 'John', age: 14, class: 'maths' },
	{ firstName: 'Dave', age: 15, class: 'english' },
];
const reducer = (state={students},action) => {
    switch (action.type) {
        case ADDSTUDENT:
            
            
            let allStudents = [...state.students, action.payLoad]
            return {
                students:allStudents
            }
          
            
            
    
        default:
            return {students}
    }
}

export default reducer