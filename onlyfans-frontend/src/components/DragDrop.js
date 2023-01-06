import { FileUploader } from 'react-drag-drop-files'

const fileTypes = ['JPG', 'PNG', 'GIF']

const DragDrop = ({ setImage }) => {

    const handleChange = (image) => {
        setImage(image)
    }

    return (
        <FileUploader 
        classes='drag-drop'
        handleChange= {handleChange} 
        type='file'
        name='image'
        types={fileTypes}/>
    )
}

export default DragDrop