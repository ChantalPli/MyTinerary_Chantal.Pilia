import api from "../api"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles/Itinerary.css'
import { Link } from "react-router-dom"
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import { CenterFocusStrong, WatchLater } from "@mui/icons-material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { withWidth } from "@material-ui/core";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Itinerary(props) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className="itinerary" sx={{ maxWidth: 950 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img width={40} alt={props.data.name} src={api.url + props.data.avatar} />
                    </Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={props.data.title}
                subheader={'By ' + props.data.name}
            />
            <CardMedia
                component="img"
                height="350"
                image={api.url + props.data.image}
                alt={props.data.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.data.description}
                    <div className="details">
                        <Chip label={props.data.duration + " hours"} icon={<WatchLater />} />
                        {props.data.hashtags.map(hashtag => <Link to={hashtag}>{hashtag}</Link>)}
                    </div>
                    <div style={{ fontWeight: 'bold', lineHeight: '36px' }}>Price:</div>
                    <div>{Array.from({ length: props.data.price }, () => <LocalAtmIcon />)}</div>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <ThumbUpIcon />
                </IconButton>
                {props.data.likes}
                {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link style={{ textDecoration: 'none' }} to="/home">
                        <Button size="small" color="primary">
                            Back to Home
                        </Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/cities">
                        <Button size="small" color="primary">
                            Back to Cities
                        </Button>
                    </Link>
                </CardActions>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse className="collapse" in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {props.data.activities.length === 0 ? (<h5>No Activities</h5>) : (<Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'no-wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 300,
                                height: 300,
                                //backgroundImage: 
                            },
                        }}
                    >
                        {props.data.activities.map(activity => <Paper sx={{ overflow: "hidden", position: "relative" }} key={activity._id} elevation={3}>
                            <img style={{ maxWidth: "100%" }} src={api.url + activity.image} />
                            <span style={{
                                position: "absolute",
                                backgroundColor: "rgba(0, 0, 0, .75)",
                                borderRadius: 4,
                                left: 8,
                                right: 8,
                                bottom: 8,
                                padding: 8,
                                textAlign: "center",
                                color: "white",
                            }}>{activity.name}</span>
                        </Paper>)}
                    </Box>)}
                </CardContent>
            </Collapse>
        </Card>
    );
}