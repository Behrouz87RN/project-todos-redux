import { useSelector } from "react-redux";

export const TaskCounter = () => {
    const tasksList = useSelector ((store) => store.tasks);
    const completedTasks = tasksList.filter((each) => each.complete === true);
    const totalOfTasks = tasksList.length;

  return (
    <div className="taskCounter">
        <h3>Done {`${completedTasks.length}`}/{`${totalOfTasks}`}</h3>
    </div>
  )
}
