<template>
  <div v-if="user">
    <div>
      current user: {{ user.email }}
    </div>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <form @submit.prevent="login">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const user = useCurrentUser()

const email = ref("");
const password = ref("");
const auth = getAuth();

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log("Successfully logged in!");
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
};

const logout = async () => {
  try {
    await signOut(auth)
    console.log("Successfully logged out!");
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
};

</script>