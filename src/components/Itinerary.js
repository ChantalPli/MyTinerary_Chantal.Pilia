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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Itinerary.css'
import { Link } from "react-router-dom"
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { WatchLater } from "@mui/icons-material";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

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
        <Card className="itinerary" sx={{ maxWidth: 800 }}>
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
                    <div>Price: {Array.from({ length: props.data.price }, () => <LocalAtmIcon />)}</div>
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
                    <Typography paragraph>Tour:</Typography>
                    <Typography paragraph>

                    </Typography>
                    <Typography paragraph>
                        UNDER CONSTRUCTION
                    </Typography>
                    <Typography paragraph>
                        UNDER CONSTRUCTION
                    </Typography>
                    <Typography>
                        UNDER CONSTRUCTION
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}