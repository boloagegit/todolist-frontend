import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import TaskModule from '~/store/tasks';

let taskStore: TaskModule;

function initialiseStores(store: Store<any>): void {
    taskStore = getModule(TaskModule, store);
}

export { initialiseStores, taskStore };