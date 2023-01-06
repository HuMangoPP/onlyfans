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
                <label></label>
                <input type='text' 
                name = 'title'
                placeholder='Title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label></label>
                <textarea 
                name = 'description'
                placeholder='Write something...'
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            </div>

            <DragDrop setImage={setImage}/>
            <div className="submit-btn-wrapper">
                <input type='submit' 
                value='Post!' 
                className = 'btn btn-block'/>
            </div>
        </form>
    )
}

export default AddPost