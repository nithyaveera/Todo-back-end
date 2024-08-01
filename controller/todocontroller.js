import Todo from "../model/todoschema.js"

export const createTodo =async (req, res) => {
    try {
        await Todo.create(req.body) 
        res.status(200).json({msg:'List Added sucess'})
    } catch (error) {
        res.status(400).json({msg:'error'})
    }
}

export const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find(); 
        res.status(200).json({ message: ' Data Fetched SuccessFull',data: todos });
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(400).json({ msg: 'Error fetching todos', error: error.message });
    }
};

export const EditTodobyId = async (req, res) => {
    try {
    const { id } = req.params;
    const { title, description } = req.body
    const updatedTodo = await Todo.findByIdAndUpdate(id, { title:title,description:description });
        if (!updatedTodo) {
            return res.status(404).json({ msg: 'Todo not found' });
        }

        res.status(200).json({ msg: 'Update successful', data: updatedTodo });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }

}


export const deleteTodo = async (req,res) => {
    try {
        const { id } = req.params
        const deletedTodo = await Todo.findByIdAndDelete(id)
        if (!deletedTodo) {
            return res.status(404).json({ msg: 'Todo not found' });
        }

        res.status(200).json({ msg: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ msg: 'Internal server error' });
    }
}
