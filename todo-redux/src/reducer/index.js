const ADDSTUDENT = 'ADDSTUDENT'

const students = [
	{ firstName: 'Amir' },
	{ firstName: 'John' },
	{ firstName: 'Dave' },
];
const reducer = (state={students},action) => {
    switch (action.type) {
        case ADDSTUDENT:
            
            break;
    
        default:
            return {students}
    }
}

export default reducer