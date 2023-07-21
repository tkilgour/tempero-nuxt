<template>
  <main id="content" class="mt-8 md:mt-4 pb-16">
    <p class="text-center text-stone-500 dark:text-stone-300 italic absolute left-0 right-0" v-if="!todos.length">
      Tap the + button<span class="hidden md:inline">, or just start typing</span> to
      get started!
    </p>
    <ul>
      <TodoItem v-for="(todo) in todos" :key="todo.id" :todo="todo" />
    </ul>
  </main>
</template>

<script setup lang="ts">
import { collection, query, where, orderBy } from 'firebase/firestore'
import { Todo } from 'types';
const db = useFirestore('Tempero')
const user = useCurrentUser()

const q = query(collection(db, 'todos'), where('uid', '==', user.value?.uid), orderBy('createdAt', 'asc'))

const { data: todos, error } = useCollection<Todo>(q, { ssrKey: 'todos' })
watch(error, () => {
  console.error(error.value)
})
</script>

<!-- TODO: add animations -->
<!-- <style scoped>
.todo-list-enter-active {
  animation: pop-out 170ms ease-out reverse;
}

.todo-list-leave-active {
  animation: pop-out 300ms ease-out;
}

@keyframes pop-out {
  from {
    transform: scale(1);
    opacity: 1;
  }

  33% {
    transform: scale(1.02);
  }

  to {
    transform: scale(0.9);
    opacity: 0;
  }
}
</style> -->