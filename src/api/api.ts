import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Project {
  _id: number;
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}

export interface ProjectApiResponse {
  statusCode: number;
  data: Project[];
  message: string;
  success: boolean;
}

export enum Priority {
  Urgent = "Urgent",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  Backlog = "Backlog",
}

export enum Status {
  ToDo = "To Do",
  WorkInProgress = "Work In Progress",
  UnderReview = "Under Review",
  Completed = "Completed",
}

export interface User {
  userId?: number;
  username: string;
  email: string;
  profilePictureUrl?: string;
  cognitoId?: string;
  teamId?: number;
}

export interface Attachment {
  id: number;
  fileURL: string;
  fileName: string;
  taskId: number;
  uploadedById: number;
}

export interface Task {
  id: string; // Change to string
  title: string;
  description?: string;
  status?: Status;
  priority?: Priority;
  tags?: string;
  startDate?: string;
  dueDate?: string;
  points?: number;
  projectId: string; // Change to string
  authorUserId?: number;
  assignedUserId?: number;

  author?: User;
  assignee?: User;
  comments?: Comment[];
  attachments?: Attachment[];
}

export interface SearchResults {
  tasks?: Task[];
  projects?: Project[];
  users?: User[];
}

export interface Team {
  teamId: number;
  teamName: string;
  productOwnerUserId?: number;
  projectManagerUserId?: number;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PUBLIC_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: ["Projects", "Tasks", "Users", "Teams"],
  endpoints: (build) => ({
    getProjects: build.query<ProjectApiResponse, void>({
      query: () => "/api/v1/projects/getprojects",
      providesTags: ["Projects"],
    }),
    createProject: build.mutation<ProjectApiResponse, Partial<Project>>({
      query: (project) => ({
        url: "/api/v1/projects/createproject",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["Projects"],
    }),
    getTasks: build.query<Task[], { projectId: string }>({
      query: ({ projectId }) => `/api/v1/tasks/gettasks/${projectId}`,
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
          : [{ type: "Tasks" as const }],
    }),
    // getTasksByUser: build.query<Task[], number>({
    //   query: (userId) => `tasks/user/${userId}`,
    //   providesTags: (result, error, userId) =>
    //     result
    //       ? result.map(({ id }) => ({ type: "Tasks", id }))
    //       : [{ type: "Tasks", id: userId }],
    // }),
    createTask: build.mutation<Task, Partial<Task>>({
      query: (task) => ({
        url: "api/v1/tasks/createtask",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTaskStatus: build.mutation<Task, { taskId: string; status: string }>({
      query: ({ taskId, status }) => ({
        url: `api/v1/tasks/updatetasks/${taskId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: "Tasks", id: taskId },
      ],
    }),
    // getUsers: build.query<User[], void>({
    //   query: () => "users",
    //   providesTags: ["Users"],
    // }),
    // getTeams: build.query<Team[], void>({
    //   query: () => "teams",
    //   providesTags: ["Teams"],
    // }),
    // search: build.query<SearchResults, string>({
    //   query: (query) => `search?query=${query}`,
    // }),
  }),
});

export const {
  useGetProjectsQuery,
  useCreateProjectMutation,
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskStatusMutation,
  // useSearchQuery,
  // useGetUsersQuery,
  // useGetTeamsQuery,
  // useGetTasksByUserQuery,
} = api;
