import { useState } from 'react'

const AddPost = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!title) {
            alert('Please add a title')
            return
        }
        if (!description) {
            alert('Please add a description')
            return
        }
        if (!image) {
            alert('Please upload an image')
        }
        
        onAdd({title,description,image})

        setTitle('')
        setDescription('')
    }

    return (
        <form 
        className='add-form'
        onSubmit={onSubmit}
        encType='multipart/form-data'>
            <div className='form-control'>
                <label>Post Title</label>
                <input type='text' 
                name = 'title'
                placeholder='Make a Post!' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Post Description</label>
                <input type='text' 
                name = 'description'
                placeholder='Write something...' 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div>
                <input 
                type='file' 
                name='image'
                onChange={(e) => setImage(e.target.files[0])}/>
            </div>

            <input type='submit' 
            value='Save Post' 
            className = 'btn btn-block'/>
        </form>
    )
}

export default AddPost