import { useState } from 'react'

const AddPost = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!title) {
            alert('Please add title')
            return
        }
        if (!description) {
            alert('Please add description')
            return
        }
        
        onAdd({title,description,image})

        setTitle('')
        setDescription('')
    }

    return (
        <form className='add-form'
        onSubmit={onSubmit}
        encType='multipart/form-data'>
            <div className='form-control'>
                <label>Post Title</label>
                <input type='title' 
                placeholder='Make a Post!' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Post Description</label>
                <input type='description' 
                placeholder='Write something...' 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div>
                <input 
                type='file' 
                />
            </div>

            <input type='submit' 
            value='Save Post' 
            className = 'btn btn-block'/>
        </form>
    )
}

export default AddPost