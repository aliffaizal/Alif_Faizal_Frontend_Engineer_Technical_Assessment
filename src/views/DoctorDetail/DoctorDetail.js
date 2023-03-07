import React, { useEffect, useState } from 'react'
import { getDetailDoctor, bookDoctor } from '../../store/actions'
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';
import { Typography, Container, Card, CardContent, Grid, Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useNavigate } from "react-router";
import './DoctorDetail.css'

const DoctorDetail = ({ getDetailDoctor, doctor, bookDoctor }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState('')
  const [start, setStart] = useState('')
  const [value, setValue] = useState('')
  const [time, setTime] = useState()
  const [id, setId] = useState(Math.random)
  
  const submit = e => {
    e.preventDefault()
    const data = {
      id: id.toString(),
      status: 'confirmed',
      name: name,
      start: parseFloat(start),
      doctorId: params.id,
      date: dayjs(value).format('YYYY-MM-DD'),
    }
    bookDoctor(data, navigate);
  }
  useEffect(() => {
    getDetailDoctor(params.id)
  }, [params.id])
  useEffect(() => {
    setTime(doctor?.dataDetail?.opening_hours?.map(row => parseFloat(row.start)))
  }, [doctor])
  return (
    <Container maxWidth='xl'>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Typography>{doctor.dataDetail.name}</Typography>
              <br/>
              <Typography>Address : </Typography>
              <Typography>{doctor.dataDetail.address?.district}</Typography>
              <Typography>{doctor.dataDetail.address?.line_1} - {doctor.dataDetail.address?.line_2}</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography>Availability :</Typography>
                {
                  doctor.dataDetail.opening_hours?.map((row, idx) =>
                    <div key={idx}>
                      {row.isClosed ? <Typography>{row.day} CLOSED</Typography> : <Typography>{row.day} {row.start} - {row.end}</Typography>}
                    </div>
                    )
                }
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br/>
      <Typography>Fill the form below for book</Typography>
      <br/>
      <form onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={e => setName(e.target.value)}
              required
            />    
          </Grid>
          <Grid item md={12}>
            <TextField
              type='number'
              size="small"
              InputProps={{
                inputProps: { 
                  min: Math.min.apply(Math, time)
                }
              }}
              id="outlined-basic"
              label="Start"
              variant="outlined"
              onChange={e => setStart(e.target.value)}
              required
            />
          </Grid>
          <Grid item md={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Date" value={value} minDate={dayjs().add(1, 'day')} onChange={(newValue) => setValue(newValue)} required/>
            </LocalizationProvider>
          </Grid>
          <Grid item md={12}>
          <Button variant='contained' type='submit'>submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export const mapStateToProps = (state) => {
  return {
    doctor: state.doctor,
  };
};

export default connect(mapStateToProps, {
  getDetailDoctor,
  bookDoctor
})(DoctorDetail);