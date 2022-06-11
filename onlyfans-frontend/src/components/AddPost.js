import { useState } from 'react'
import DragDrop from './DragDrop'

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
            return
        }
        
        onAdd({title,description,image})

        setTitle('')
        setDescription('')
        setImage(null)
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
                <textarea 
                name = 'description'
                placeholder='Write something...'
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </div>

            <DragDrop setImage={setImage}/>

            <input type='submit' 
            value='Post a New Fan!' 
            className = 'btn btn-block'/>
        </form>
    )
}

export default AddPost