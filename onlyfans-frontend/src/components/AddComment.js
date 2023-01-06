
const AddComment = ({ onAdd }) => {
    
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!description) {
            alert('Please add a description')
            return
        }

        onAdd({description})

        setDescription('')
    }

    return (
        <form>
            <div>
                <label>Comment</label>
                <input type='text'>Make your comment...</input>
            </div>
        </form>
    )
}