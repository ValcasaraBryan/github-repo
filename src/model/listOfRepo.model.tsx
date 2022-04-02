export interface IRepo {
    id: string
    name: string
    url: string
}

export interface IProject {
    id: string
    name: string
    stargazers_count: string
    description: string
    language: string
    created_at: Date
    updated_at: Date
    html_url: string
}

export interface IUser {
    id: string
    avatar_url: string
    login: string
    html_url: string
}