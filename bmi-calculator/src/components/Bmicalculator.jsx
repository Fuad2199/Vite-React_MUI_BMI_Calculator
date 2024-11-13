import { Typography, Box, TextField, Button, Container } from '@mui/material';
import { useState } from 'react';

const Bmicalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');

    const calculateBMI = () => {
        if (!weight || !height) {
            alert("Please enter both weight and height!");
            return;
        }

        const heightInMeters = parseFloat(height) / 100;
        const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);

        let bmiStatus = '';
        if (bmiValue < 18.5 ) {
            bmiStatus = 'Underweight';
        } else if (bmiValue < 24.9) {
            bmiStatus = 'Normalweight';
        } else if (bmiValue < 29.9) {
            bmiStatus = 'Overweight';
        } else {
            bmiStatus = 'Obesity';
        }
        setStatus(bmiStatus);
    };

    const getBackgroundColor = (status) => {
        switch (status) {
            case 'Underweight':
                return '#ADD8E6';
            case 'Normalweight':
                return '#90EE90';
            case 'Overweight':
                return '#FFD700';
            case 'Obesity':
                return '#FF6347';
            default:
                return '#FFFFFF';
        }
    };

    return (
        <Container maxWidth="sm" sx={{ backgroundColor: getBackgroundColor(status), padding: 3, borderRadius: 2 }}>
            <Typography variant="h4" align='center' gutterBottom>
                BMI Calculator
            </Typography>
            <Box sx={{ marginBottom: 2 }}>
                <TextField
                    fullWidth
                    label='Weight (kg)'
                    variant='outlined'
                    type='number'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder='Enter your weight'
                />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
                <TextField
                    fullWidth
                    label='Height (cm)'
                    variant='outlined'
                    type='number'
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder='Enter your height'
                />
            </Box>
            <Button
                variant='contained'
                color='primary'
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={calculateBMI}
            >
                Calculate
            </Button>
            {bmi && (
                <Box sx={{ marginTop: 3 }}>
                    <Typography variant="h6">Your BMI: {bmi}</Typography>
                    <Typography variant="h6">Status: {status}</Typography>
                </Box>
            )}
        </Container>
    );
}

export default Bmicalculator;
