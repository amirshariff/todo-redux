export const addStudent = (input) => {
    return {
        type: 'ADDSTUDENT',
        payLoad: { firstName: input }
       
    }
}