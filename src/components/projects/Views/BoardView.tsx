import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  useGetTasksQuery,
  useUpdateTaskStatusMutation,
} from "../../../api/api";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const taskStatus = ["To Do", "Work In Progress", "Under Review ", "Completed"];

const BoardView = ({ id, setIsModalNewTaskOpen }: Props) => {
  console.log("Project ID:", id); // Project ID: 1
  const {
    data: tasks,
    isLoading,
    error,
  } = useGetTasksQuery({ projectId: String(id) });

  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const moveTask = (taskId: string, toStatus: string) => {
    updateTaskStatus({ taskId, status: toStatus });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured while fetching task</div>;
  return <DndProvider backend={HTML5Backend}></DndProvider>;
};

export default BoardView;
