import { useParams } from "react-router-dom";
import { useState } from "react";
import ProjectHeader from "../components/projects/ProjectHeader";
import BoardView from "../components/projects/Views/BoardView";

const Projects = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  console.log("Projects component rendered with ID:", projectId);

  return (
    <div>
      {/* {MODAL NEW TASKS} */}
      {isModalNewTaskOpen && <div>Modal is open</div>}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && projectId && (
        <BoardView
          id={projectId}
          setIsModalNewTaskOpen={setIsModalNewTaskOpen}
        />
      )}
    </div>
  );
};

export default Projects;
