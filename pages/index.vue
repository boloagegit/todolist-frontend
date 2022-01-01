<template>
  <v-card>
    <v-toolbar extended class="px-2">
      <div class="mt-5">
        <div
          class="
            w-full
            flex-none
            mt-5
            order-1
            text-4xl
            font-bold
            text-primary-500
          "
        >
          To-Do List
        </div>
        <div class="mt-3">
          <span class="text-secondary-500">{{
            $moment().format("dddd Do")
          }}</span>
          {{ $moment().format("MMMM yyyy") }}
        </div>
      </div>
      <v-spacer />
      <div class="font-blod">{{ tasks.length }} tasks</div>
      <template v-slot:extension>
        <v-btn
          fab
          color="red darken-1"
          bottom
          right
          absolute
          @click="openDialog"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <dir class="mt-5">
      <v-skeleton-loader
        v-if="loading"
        class="mx-auto"
        type="list-item-two-line"
      >
      </v-skeleton-loader>
      <v-list two-line v-else>
        <v-list-item v-for="task in tasks" :key="task.id">
          <v-list-item-action>
            <v-checkbox
              :input-value="task.finish"
              @click="toggleFinish(task)"
            ></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title
              :class="{ 'font-bold': true, 'line-through': task.finish }"
              ><div class="text-2xl">{{ task.title }}</div></v-list-item-title
            >
            <v-list-item-subtitle :class="{ 'line-through': task.finish }">
              {{ task.description }}
            </v-list-item-subtitle>
            <v-list-item-subtitle :class="{ 'line-through': task.finish, 'mt-1': true }">
              🕛 {{$moment(task.createdDate).format("LLL")}}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-btn icon color="primary" @click="toggleStar(task)">
              <v-icon>
                {{ task.star ? "mdi-star" : "mdi-star-outline" }}
              </v-icon>
            </v-btn>
            <v-btn color="success" icon @click="editItem(task)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="error" icon @click="removeItem(task)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </dir>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ computedTaskDialogTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Title"
                    required
                    v-model="editedItem.title"
                    :rules="rule.titleRule"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    label="Description"
                    required
                    v-model="editedItem.description"
                    :rules="rule.descriptionRule"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveItem"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { taskStore } from "~/store";
import { Task } from "~/store/tasks";

@Component
export default class IndexPage extends Vue {
  dialog: boolean = false;
  loading: boolean = false;
  defaultItem: Task = {
    id: undefined,
    title: "",
    description: "",
    star: false,
    finish: false,
  };
  editedItem: Task = Object.assign({}, this.defaultItem);
  valid = false;
  rule = {
    titleRule: [(v?: string) => !!v || "Name is required"],
    descriptionRule: [(v?: string) => !!v || "Description is required"],
  };

  get tasks() {
    return this._.orderBy(
      [...(taskStore?.tasks || [])],
      ["finish", "star", "id"],
      ["asc", "desc", "desc"]
    );
  }
  get computedTaskDialogTitle() {
    return this.editedItem.id ? "Edit Task" : "Create Task";
  }

  // reset editeditem when dialog closed.
  @Watch("dialog")
  onDialogChanged(value: boolean) {
    if (!value) {
      this.editedItem = Object.assign({}, this.defaultItem);
      (this.$refs.form as HTMLFormElement).reset();
    }
  }

  // methods
  openDialog(): void {
    this.dialog = true;
  }
  toggleStar(task: Task) {
    taskStore.toggleStar(task);
  }
  toggleFinish(task: Task) {
    taskStore.toggleFinish(task);
  }
  editItem(task: Task) {
    this.editedItem = Object.assign({}, task);
    this.dialog = true;
  }
  addItem() {}
  async removeItem(task: Task) {
    const resp = await this.$dialog.confirm({
      text: "Do you really want to delete this task?",
      title: "Warning",
    });
    if (!resp) {
      return;
    }

    taskStore.removeTask(task);
  }
  async saveItem() {
    if (!(this.$refs.form as HTMLFormElement).validate()) {
      return;
    }

    const resp = await this.$dialog.confirm({
      text: "Do you really want to save this task?",
      title: "Warning",
    });
    if (!resp) {
      return;
    }

    this.loading = true;
    try {
      await taskStore.saveTask(this.editedItem);
      this.dialog = false;
    } finally {
      this.loading = true;
    }
  }

  async created() {
    this.loading = true;
    try {
      await taskStore?.loadTasks();
    } finally {
      this.loading = false;
    }
  }
}
</script>
