import {useState} from 'react';

function TaskForm({createTask}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => { 
    e.preventDefault()
   
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
    
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tares"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus={true} />
            <textarea placeholder="Escribe la descripcion"
            onChange={(e) => setDescription(e.target.value)}
            value={description} 
             />
            <h1>a tu mama le gusta pro las nalgas</h1>
            <button>
                Guardar
            </button>
        </form>
    </div>
  )
}

export default TaskForm