import React, { useEffect } from 'react'
import { getBooking, getDoctor } from '../../store/actions'
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { Container, Table, TableBody, TableHead, TableCell, TableRow, TableContainer, Button } from '@mui/material';

const BookingList = ({ getBooking, book, getDoctor, doctor }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getBooking({})
    getDoctor({})
  }, [])
  return (
    <Container maxWidth='xl'>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              book?.data?.map((row, idx) => 
                <TableRow key={row.id}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{doctor?.data?.find(obj => obj.id === row.doctorId)?.name}</TableCell>
                  <TableCell>{row.start}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell><Button variant='contained' onClick={() => navigate(`/booking-detail/${row.id}`)}>Details / Edit</Button></TableCell>
                </TableRow>
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export const mapStateToProps = (state) => {
  return {
    book: state.book,
    doctor: state.doctor,
  };
};

export default connect(mapStateToProps, {
  getBooking,
  getDoctor
})(BookingList);