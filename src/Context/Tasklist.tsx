import { createContext, Dispatch, SetStateAction } from "react";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'not-started' | 'in-progress' | 'completed';
}

interface TasksContextType {
    tasks: Task[];
    setTaskList: Dispatch<SetStateAction<Task[]>>;
}

const defaultTasks: TasksContextType = {
    tasks: [
        {
            id: '1',
            title: 'Write Report',
            description: 'Complete the annual report.',
            status: 'not-started'
        },
        {
            id: '2',
            title: 'Update Website',
            description: 'Add new features to the website.',
            status: 'in-progress'
        }
    ],
    setTaskList: () => {} 
};

const TasksContext = createContext<TasksContextType>(defaultTasks);

export default TasksContext;
