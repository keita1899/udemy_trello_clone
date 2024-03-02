export const TaskCardDeleteButton = ({taskCard, taskCardsList, setTaskCardsList}) => {

  const deleteTaskCard = (id) => {
    setTaskCardsList(taskCardsList.filter((card) => card.id !== id))
  }
  
  return (
    <div>
      <button className="taskCardDeleteButton" onClick={() => deleteTaskCard(taskCard.id)}><i class="fas fa-times"></i></button>
    </div>
  )
}