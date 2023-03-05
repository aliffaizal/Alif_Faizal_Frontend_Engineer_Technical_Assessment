import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import moment, { now } from 'moment';
import { Typography, Container, Card, CardContent, Grid, Button, TextField } from '@mui/material';

const BookDoctor = () => {
  // const moment = moment()
  const params = useParams();
  const [name, setName] = useState('')
  const [start, setStart] = useState('')
  const [date, setDate] = useState('')

  const submit = e => {
    e.preventDefault()
    const data = {
      name: name,
      start: start,
      doctorId: params.id,
      date: moment(date).format('YYYY-MM-DD'),
    }
    console.log(data, 'os')
}
  return (
    <Container>
      <form onSubmit={submit}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={e => setName(e.target.value)}
            />    
          </Grid>
          <Grid item md={12}>
            <TextField
              size="small"
              id="outlined-basic"
              label="Start"
              variant="outlined"
              onChange={e => setStart(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker  value={date} minDate={dayjs()} onChange={(newValue) => setDate(newValue)} />
            </LocalizationProvider>
          </Grid>
          <Grid item md={12}>
          <Button type='submit'>submit</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default BookDoctor