import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});



function SimpleTable({ students }) {
    console.log(students[1])
    const classes = useStyles();

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Class</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student, i) => (
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {student.firstName}
                                </TableCell>
                                <TableCell >{student.age}</TableCell>
                                <TableCell >{student.class}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <input></input>
            <button>Submit</button>
        </Container>
    );
	
}
const mapToState = (state) => {
    return {
        students:state.students
    }
}

export default connect(mapToState)(SimpleTable)
