
<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.title }}</span>
    </li>
  </ul>
  <input type="text" v-model="newTodo" />
  <button @click="addTodo">+</button>
</template>

<script setup>
import { collection, addDoc, query, where, orderBy, serverTimestamp } from 'firebase/firestore'
const db = useFirestore('Tempero')
const user = useCurrentUser()

const q = query(collection(db, 'todos'), where('uid', '==', user.value.uid), orderBy('createdAt', 'asc'))

const { data: todos, error } = useCollection(q, { ssrKey: 'todos' })
watchEffect(() => {
  console.error(error.value)
})

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
