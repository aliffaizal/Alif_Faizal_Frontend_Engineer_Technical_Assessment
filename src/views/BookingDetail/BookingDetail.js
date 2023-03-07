import React, { useEffect, useState } from 'react'
import { getDetailBooking, getDetailDoctor, updateBooking } from '../../store/actions'
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router";
import { Typography, Container, Card, CardContent, Grid, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const BookingDetail = ({book, getDetailBooking, getDetailDoctor, doctor, updateBooking}) => {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getDetailBooking(params.id)
    }, [params.id])
    
    const [status, setStatus] = useState('')
    useEffect(() => {
        setStatus(book?.dataDetail?.status)
        getDetailDoctor(book?.dataDetail?.doctorId)
    }, [book])

    const handleChange = (event) => {
        setStatus(event.target.value);
      };

    const submit = e => {
        e.preventDefault()
        const id = params.id
        const data = {
            status: status,
        }
        updateBooking(id, data, navigate);
    }
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item md={6}>
            <Typography>Booking Profile Information</Typography>
            <br/>
            <Typography>Name : {book.dataDetail.name}</Typography>
            <Typography>Start : {book.dataDetail.start}</Typography>
            <Typography>Date : {book.dataDetail.date}</Typography>
            <br/>
            <form onSubmit={submit}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value='confirmed'>Confirmed</MenuItem>
                <MenuItem value='cancelled'>Cancelled</MenuItem>
              </Select>
            <br/>
            </FormControl>
            <Button variant='contained' type='submit'>Update</Button>
            </form>
            </Grid>
            <Grid item md={6}>
            <Card>
        <CardContent>
            <Typography>Doctor Information</Typography>
              <br/>
              <Typography>{doctor.dataDetail.name}</Typography>
              <br/>
              <Typography>Address : </Typography>
              <Typography>{doctor.dataDetail.address?.district}</Typography>
              <Typography>{doctor.dataDetail.address?.line_1} - {doctor.dataDetail.address?.line_2}</Typography>
              <br/>
              <Typography>Availability :</Typography>
              <br/>
                {
                  doctor.dataDetail.opening_hours?.map((row, idx) =>
                    <div key={idx}>
                      {row.isClosed ? <Typography>{row.day} CLOSED</Typography> : <Typography>{row.day}&nbsp; {row.start} - {row.end}</Typography>}
                    </div>
                    )
                }
        </CardContent>
      </Card> 
            </Grid>
        </Grid>
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
    getDetailBooking,
    getDetailDoctor,
    updateBooking
  })(BookingDetail);