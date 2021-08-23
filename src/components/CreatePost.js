import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { FaTimesCircle } from 'react-icons/fa'
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { postUserPost } from '../API';

const CreatePost = ({setCreatePost, handleSubmit, handleChange}) => {

    return (
        <div className="create-post">
            <form>
                <FaTimesCircle style={{color: 'red', fontSize: '1.5rem', marginLeft:'37rem'}}
                               onClick={() => setCreatePost(false)}/>
                <div>
                <TextField style={{marginTop: '1rem', marginLeft: '3rem', width: '33rem'}}
                           name='title'
                           onChange= {(e) => handleChange(e, 'title')}
                           variant='outlined'
                           label='Title'
                           color='primary'
                           required
                           />
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                           name='description'
                           onChange= {(e) => handleChange(e, 'description')}
                           variant='outlined'
                           label='Description'
                           color='primary'
                           multiline
                           required/>
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                           name='price'
                           onChange= {(e) => handleChange(e, 'price')}
                           variant='outlined'
                           label='Price $'
                           color='primary'
                           required/>
                <TextField style={{marginTop: '2rem', marginLeft: '3rem', width: '33rem'}}
                           name='location'
                           onChange= {(e) => handleChange(e, 'location')}
                           variant='outlined'
                           label='Location'
                           color='primary'/>
                <div>
                    <FormControlLabel control={<Checkbox color='primary'
                                                         name='willDeliver'
                                                         onChange={(e) => handleChange(e, 'willDeliver')}/>}
                                      label='Willing to Deliver?'
                                      style={{marginLeft: '2rem', marginTop: '1rem'}}>
                    </FormControlLabel>
                </div>
                <Button style={{marginTop:'1rem', marginLeft: '3rem', width: '33rem'}}
                        onClick={handleSubmit}
                        variant='outlined'
                        color='primary'>
                        Create Post</Button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost;