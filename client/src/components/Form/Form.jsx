import { Button, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useEffect } from 'react';

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    name: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, title, message, tags, selectedFile } = postData;
    if (
      name === '' ||
      title === '' ||
      message === '' ||
      tags === '' ||
      selectedFile === ''
    ) {
      return;
    }
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      name: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {`${currentId ? 'Editing' : 'Creating'}`} a Memory
        </Typography>
        <TextField
          name="name"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.name}
          onChange={({ target: { value } }) =>
            setPostData({ ...postData, name: value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={({ target: { value } }) =>
            setPostData({ ...postData, title: value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={({ target: { value } }) =>
            setPostData({ ...postData, message: value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={({ target: { value } }) =>
            setPostData({ ...postData, tags: value.split(',') })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
