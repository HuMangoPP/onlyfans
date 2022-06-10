import { useState } from 'react'

const AddPost = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        if (!title) {
            alert('Please add title')
            return
        }
        
        onAdd({title,description})

        setTitle('')
        setDescription('')
    }

    return (
        <form className='add-form'
        onSubmit={onSubmit}>
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
            <input type='submit' 
            value='Save Post' 
            className = 'btn btn-block'/>
        </form>
    )
}

export default AddPost