import React, { useEffect, useState } from "react";

import {
    Container,
    Typography,
    Box,
    Table,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TablePagination,
    Paper
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((them) => {
    return {
        root: {},
    };
});

export default function TableComponent(props) {
    const classes = useStyles();

    const [alluser,setUser]=useState([]);
    const [page,setPage]=useState(0);
    const [row,setRow]=useState(2)

    const fetchUser=async()=>{
        const responce=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await responce.json();
        setUser(data);
    }

    useEffect(()=>{
        fetchUser();
    },[])


    return (
        <>
            <Container className={classes.root}>
                <Typography variant="h2">Table Component</Typography>
                <Box m={4}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>User Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>City</TableCell>
                                    <TableCell>Website URL</TableCell>
                                    <TableCell>Company Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {alluser.slice(page*row,page*row+row).map((item)=>(
                                    <TableRow>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.address.city}</TableCell>
                                    <TableCell>{item.website}</TableCell>
                                    <TableCell>{item.company.name}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <TablePagination rowsPerPageOptions={[2,3,5,10,15]} count={alluser.length} rowsPerPage={row} page={page} onChangePage={(event,newPage)=>setPage(newPage)} onChangeRowsPerPage={(event)=>setRow(event.target.value)}/>
                    </TableContainer>
                </Box>
            </Container>
        </>
    );
}
