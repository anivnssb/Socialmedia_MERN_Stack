import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = ({
  post: {
    _id,
    selectedFile,
    title,
    creator,
    createdAt,
    tags,
    message,
    likeCount,
  },
  setCurrentId,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <Box className={classes.overlay}>
        <Typography variant="h6">{creator}</Typography>
        <Typography variant="body">{moment(createdAt).fromNow()}</Typography>
      </Box>
      <Box className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => {
            setCurrentId(_id);
          }}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </Box>
      <Box className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {tags.map((tag) => `#${tag}`)}
        </Typography>
      </Box>

      <CardContent>
        <Box className={classes.title}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
        </Box>
        <Box className={classes.title}>
          <Typography variant="h5" gutterBottom>
            {message}
          </Typography>
        </Box>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          <ThumbUpAltIcon fontSize="small" /> Like {likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(deletePost(_id));
          }}
        >
          Delete <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
