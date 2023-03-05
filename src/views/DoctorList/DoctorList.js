import React, { useEffect, useState } from 'react'
import './DoctorList.css'
import CustomRouterLink from '../../components/CustomRouterLink/CustomRouterLink';
import { Avatar, Typography, Container, Grid, Card, CardContent, Button, Link } from '@mui/material';
import { getDoctor } from '../../store/actions'
import { connect } from "react-redux";
import { useNavigate } from "react-router";

const DoctorList = ({ getDoctor, doctor }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getDoctor({})
  }, [])
  
  return (
    <Container className='root' maxWidth="xl">
      <Grid container spacing={5}>
      {
        doctor.data.map(row =>
            <Grid item md={4} key={row.id}>
              <Card className='card'>
                <CardContent>
                    <Avatar/>
                    <Typography className='title'>{row.name}</Typography>
                    <Button 
                      size='small'
                      variant='contained'
                      onClick={() =>
                        navigate(`/doctor-detail/${row.id}`)
                      }
                    >See Details...
                    </Button>
                </CardContent>
              </Card>
            </Grid>
        )
      }
      </Grid>
    </Container>
  )
}

export const mapStateToProps = (state) => {
  return {
    doctor: state.doctor,
  };
};

export default connect(mapStateToProps, {
  getDoctor,
})(DoctorList);