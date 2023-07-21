
<template>
  <div class="container mx-auto max-w-xl">
    <TodoList />
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">+</button>
  </div>
</template>

<script setup>
definePageMeta({
  // wait for the user to be logged in before rendering the page
  validate: async () => {
    const user = await getCurrentUser()
    return user ? true : { redirect: '/' }
  }
})

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
const db = useFirestore('Tempero')
const user = useCurrentUser()

const newTodo = ref('')

const addTodo = async () => {
  await addDoc(collection(db, 'todos'), {
    uid: user.value.uid,
    title: newTodo.value,
    completed: false,
    createdAt: serverTimestamp(),
    archivedAt: null
  })
  newTodo.value = ''
}
</script>
