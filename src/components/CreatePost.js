import React from 'react';
import Button from '@material-ui/core/Button';
import { FaTimesCircle } from 'react-icons/fa'
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";

const CreatePost = ({CreatePost, setCreatePost}) => {
    return (
        <div className="create-post">
            <div>
                <FaTimesCircle style={{color: 'red', fontSize: '1.5rem', marginLeft:'37rem'}}
                               onClick={() => setCreatePost(null)}/>
                <div>
                <TextField style={{marginTop: '1rem', marginLeft: '3rem', width: '33rem'}}
                       variant='outlined'
                       label='Title'
                       color='primary'
                       required/>
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                       variant='outlined'
                       label='Description'
                       color='primary'
                       multiline
                       required/>
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                       variant='outlined'
                       label='Price'
                       color='primary'
                       required/>
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                       variant='outlined'
                       label='Location'
                       color='primary'/>
                <div>
                    <FormControlLabel control={<Checkbox color='primary'/>}
                                      label='Willing to Deliver?'
                                      style={{marginLeft: '2rem', marginTop: '1rem'}}>
                    </FormControlLabel>
                </div>
                <Button style={{marginTop:'1rem', marginLeft: '3rem', width: '33rem'}}
                        variant='outlined'
                        color='primary'>
                        Create Post</Button>
            </div>
            </div>
        </div>
    )
}

export default CreatePost;