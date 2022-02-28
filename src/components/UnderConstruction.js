import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import "./styles/CallToAction.css";

import api from '../api.js';

export default function UnderConstruction(props) {
    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardMedia
                component="img"
                height="180"
                image={api.url + props.image}
                alt={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.children}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="small" color="primary">
                    Back to Home
                </Button>
                <Button size="small" color="primary">
                    Back to Cities
                </Button>
            </CardActions>
        </Card>
    );
}