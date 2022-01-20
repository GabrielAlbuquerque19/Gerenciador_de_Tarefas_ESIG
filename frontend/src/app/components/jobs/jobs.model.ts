export interface Jobs {
    id?: number
    title: string
    description: string
    responsible: string
    priority: string
    deadline: string
    status?: string
}
export interface JobsConclude {
    id?: number
    title: string
    description: string
    responsible: string
    priority: string
    deadline: string
    status?: string
}
export interface Users {
    id?: number
    user: string
    password: string

}