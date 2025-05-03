
export interface Course {
    code: string;
    title: string;
    description: string;
    projects: (ProjectList | string)[];
}


export interface TerminalHistory {
    command: string;
    result: string;
}

export interface ProjectList{
    links: Links[];
    title: string;
    description: string;
}

export interface Links{
    link: string;
    type: string;
}