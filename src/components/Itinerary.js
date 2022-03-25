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
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, green, red, } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles/Itinerary.css'
import { Link } from "react-router-dom"
import { Button, TextField, Input } from '@mui/material';
import Chip from '@mui/material/Chip';
import { CenterFocusStrong, WatchLater } from "@mui/icons-material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import { connect } from 'react-redux';



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

function Itinerary(props) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const {
        user,
        data: itinerary,
    } = props;

    return (
        <Card className="itinerary" sx={{ maxWidth: 950 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <img width={40} alt={itinerary.name} src={api.url + itinerary.avatar} />
                    </Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title={itinerary.title}
                subheader={'By ' + itinerary.name}
            />
            <CardMedia
                component="img"
                height="350"
                image={api.url + itinerary.image}
                alt={itinerary.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {itinerary.description}
                    <div className="details">
                        <Chip label={itinerary.duration + " hours"} icon={<WatchLater />} />
                        {itinerary.hashtags.map(hashtag => <Link to={hashtag}>{hashtag}</Link>)}
                    </div>
                    <div style={{ fontWeight: 'bold', lineHeight: '36px' }}>Price:</div>
                    <div>{Array.from({ length: itinerary.price }, () => <LocalAtmIcon />)}</div>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <IconButton onClick={props.onLike} aria-label="add to favorites">
                    <ThumbUpIcon sx={{ color: itinerary.likes.includes(props.user.id) ? blue[500] : 'inherit' }} />
                </IconButton>
                {itinerary.likes.length}
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
                    {/* ////PARTE DELLE ATTIVITÁ///// */}
                    {itinerary.activities.length === 0 ? (<h5>No Activities</h5>) : (<Box
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
                        {itinerary.activities.map(activity => <Paper sx={{ overflow: "hidden", position: "relative" }} key={activity._id} elevation={3}>
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
            <List
                sx={{
                    width: '100%',
                    //maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                {/* //////////////////// */}
                {
                    itinerary.comments.length > 0 && itinerary.comments.map(comment =>
                        <>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt={comment.user.firstName + " " + comment.user.lastName} src={comment.user.picture} />
                                </ListItemAvatar>
                                <ListItemText primary={comment.user.firstName + " " + comment.user.lastName} secondary={comment.comment} />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    )
                }
                {user !== null && (<ListItem>
                    <ListItemAvatar>
                        <Avatar alt={user.firstName + " " + user.lastName} src={user.picture} />
                    </ListItemAvatar>
                    <ListItemText primary={user.firstName + " " + user.lastName} secondary={<Input fullWidth placeholder="leave a comment" />} />
                </ListItem>)}
                {/* ///////////////////// */}
            </List>
        </Card>
    );
}

export default connect(state => state.userReducer, null)(Itinerary);