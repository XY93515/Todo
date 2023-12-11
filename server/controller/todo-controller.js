import Todo from '../model/Todo.js';

export const addTodo = async (request, response) => {
    console.log(request.body);
    try {
        const newTodo = await Todo.create({
            title: request.body.data.text,
            description:request.body.data.description,
            createdAt: Date.now()
        })
        await newTodo.save();
        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAllTodos = async (request, response) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const toggleTodoDone = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        )

        await todo.save();

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const updateTodo = async (request, response) => {
    console.log(request.body);
    const { id, text, description, status } = request.body.data;

    try {
        // Use { new: true } to return the modified document rather than the original one
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title: text, description, status},
            { new: true }
        );

        return response.status(200).json(updatedTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id)

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const searchProductController=async (request,response)=>{
    console.log(request.params);
    try
    {
        const {keyword}=request.params;
        const results=await Todo.find({title:{$regex:keyword , $options:"i"}});
        response.json(results);
    }
    catch (error) 
    {
        return response.status(500).json(error.message);
    }
}