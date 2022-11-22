const { v4 } = require("uuid");
const trainees = [
  {
    id: v4(),
    name: 'John Doe',
    age: 124,
  },
  {
    id:'2',
    name:'erica',
    age:100
  }
]
const getAllTrainees = (req, res)=>{
    res.status(200).send(trainees)
}
const getTrainee = (req, res)=>{
    const {id} = req.params
    const t_index = trainees.findIndex(t=> t.id === id)
    if(t_index != -1){
        res.status(200).send(`The trainee is ${trainees[t_index].name}`)
    }else{
        res.status(200).send(`The trainee with id ${id} does not exist`)
    }
}

const addTrainee = (req, res)=>{
    const newTrainee = req.body

    console.log(newTrainee);
    res.status(201).send({message: `You have succesfully added a trainee ${newTrainee}`})
}

const updateTrainee = (req,res)=>{
    const {id} = req.params
    const body = req.body
    const t_index = trainees.findIndex(t=> t.id === id)

    if(t_index != -1){
        trainees[t_index] = body
        console.log(body);
        res.status(200).send(`you have succesfully updated trainee ${id}`)
    }else{
        res.status(200).send("The trainee was not found")
    }
}
const deleteTrainee = (req, res)=>{
    const {id} = req.params
    const t_index = trainees.findIndex(t=> t.id === id)
    if(t_index != 2){
        const trainees = trainees.filter(t=> t.id != id)
        res.status(200).send(`You have succesfully deleted trainee ${id}`)
    } else{
        res.status(200).send(`the trainee with id ${id} was not found`)
    }
}
module.exports = {getAllTrainees, addTrainee, updateTrainee, deleteTrainee, getTrainee}