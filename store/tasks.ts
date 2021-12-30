import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { $axios } from '~/plugins'

export interface Task {
    id?: number
    title: string
    description: string
    star: boolean
    finish: boolean
    createdDate?: Date
    lastModifiedDate?: Date
}

@Module({ name: 'tasks', namespaced: true, stateFactory: true })
export default class TaskModule extends VuexModule {
    tasks: Task[] = []

    @Mutation
    setTasks(tasks: Task[]) {
        this.tasks = tasks
    }
    @Mutation
    updateTask(payload: Task) {
        this.tasks = [
            ...this.tasks.filter(task => task.id !== payload.id),
            payload,
        ]
    }
    @Mutation
    deleteTask(id: Number) {
        this.tasks = [...this.tasks.filter(task => task.id !== id)]
    }

    @Action
    async loadTasks() {
        const { data } = await $axios.get('/api/v1/tasks')
        this.setTasks(data)
    }
    @Action
    toggleStar(task: Task) {
        const updateObj = { ...task, star: !task.star }

        $axios.put(`/api/v1/tasks/${updateObj.id}`, updateObj)
        this.updateTask(updateObj)
    }
    @Action
    toggleFinish(task: Task) {
        const updateObj = { ...task, finish: !task.finish }

        $axios.put(`/api/v1/tasks/${updateObj.id}`, updateObj)
        this.updateTask(updateObj)
    }
    @Action
    async removeTask(task: Task) {
        if (!task.id) {
            console.warn('task.id cannot be empty when deleting task')
            return
        }

        await $axios.delete(`/api/v1/tasks/${task.id}`)
        this.deleteTask(task.id)
    }
    @Action
    async saveTask(task: Task) {
        if (!task.id) {
            await $axios.post('/api/v1/tasks', task)
        } else {
            await $axios.put(`/api/v1/tasks/${task.id}`, task)
        }

        this.loadTasks()
    }
}