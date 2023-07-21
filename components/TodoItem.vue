<template>
  <li class="flex gap-4 mb-4 relative">

    <div
      class="relative mt-1 shrink-0 h-6 md:h-4 w-6 md:w-4 cursor-pointer ring-offset-2 ring-1 ring-gray-300 rounded-full transition-all hover:ring-blue-300 hover:bg-blue-400 hover:ring-2"
      :class="{ 'bg-blue-400': completed }">
      <input class="opacity-0 absolute top-0 md:-top-1 -left-1 h-8 md:h-6 w-8 md:w-6 cursor-pointer" type="checkbox"
        :id="todo.id" v-model="completed" ref="checkbox" />
    </div>

    <label :for="todo.id" :aria-label="todo.title"
      class="flex-grow-1 text-lg md:text-base min-h-[1.5em] opacity-100 transition-opacity"
      :class="{ 'opacity-40': completed, completed }" @click="(e) => e.preventDefault()">
      <span :contenteditable="!completed" :tabindex="!completed ? 1 : 0" class="todo-content__inner" ref="todo-content"
        @blur="handleBlur" @keydown="handleKeydown">
        {{ todo.title }}
      </span>
    </label>
  </li>
</template>

<script setup lang="ts">
import { Todo } from 'types';

const props = defineProps<{
  todo: Todo
}>()

const completed = computed({
  get() {
    return props.todo.completed
  },
  set(value) {
    // update via firebase
  }
})

function handleBlur() {
  // update via firebase
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    e.preventDefault()
    // update via firebase
  }
}
</script>



<style scoped>
/* .refresh-btn {
  font-size: 1.5rem;
  line-height: 1;
  align-self: start;
  color: var(--highlight-color);
} */

.todo-content__inner {
  --todo-item-length: 0;
  background-image: linear-gradient(transparent calc(100% - 2px),
      currentColor 10px);
  background-repeat: no-repeat;
  background-size: 0% 65%;
  transition: background-size calc(140ms + (0.7ms * var(--todo-item-length)));
  outline: none;
}

.completed .todo-content__inner {
  background-size: 100% 65%;
}

/* .edit-wpr {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  transform: translateX(0);
  opacity: 1;
  transition: transform var(--transition-timing) ease,
    opacity var(--transition-timing) ease;

  .drag-handle {
    cursor: grab;
    opacity: 1;
    transition: opacity var(--transition-timing) ease;

    &.hide {
      opacity: 0;
    }
  }

  &.hide:not(:focus-within) {
    pointer-events: none;
    transform: translateX(-0.5rem);
    opacity: 0;
  }
} */
</style>
