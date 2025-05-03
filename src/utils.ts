
export interface Course {
    code: string;
    title: string;
    description: string;
    projects: any[];
}


export interface TerminalHistory {
    command: string;
    result: string;
}

export interface ProjectList{
    links: any[];
    title: string;
    description: string;
}