export const addStudent = (input) => {
    return {
        type: 'ADDSTUDENT',
        firstName: {input}
    }
}