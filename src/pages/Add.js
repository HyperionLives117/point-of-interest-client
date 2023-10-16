import { useParams } from "react-router-dom";
import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as PointOfInterestService from '../services/PointOfInterestService';
import {useNavigate } from "react-router-dom";

const theme = createTheme();

export function Add() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [location, setLocation] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const pointOfInterest = {
      location: data.get('location'),
      city: data.get('city'),
      state:data.get('state'),
      description: data.get('description'),
      rating: data.get('rating')
    };

    PointOfInterestService.createPointOfInterest(pointOfInterest)
    .then(response => {
      navigate("/");
    })

  };

    return(
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Add
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-location"
                  name="location"
                  required
                  fullWidth
                  value={location}
                  onChange= {(e) => setLocation(e.target.value)}
                  id="location"
                  label="location"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  value={city}
                  onChange= {(e) => setCity(e.target.value)}
                  label="city"
                  name="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  value={state}
                  onChange= {(e) => setState(e.target.value)}
                  label="state"
                  name="state"
                  autoComplete="state"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  value={description}
                  onChange= {(e) => setDescription(e.target.value)}
                  label="description"
                  name="description"
                  autoComplete="description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="rating"
                  value={rating}
                  onChange= {(e) => setRating(e.target.value)}
                  label="Rating out of five"
                  name="rating"
                  autoComplete="rating"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Save
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
  };