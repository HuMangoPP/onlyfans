import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

const fileTypes = ['JPG', 'PNG', 'GIF']

const DragDrop = ({ setImage }) => {

    const handleChange = (image) => {
        setImage(image)
    }

    return (
        <div className='drag-drop'>
            <FileUploader 
            handleChange= {handleChange} 
            type='file'
            name='image'
            types={fileTypes}/>
        </div>
    )
}

export default DragDrop