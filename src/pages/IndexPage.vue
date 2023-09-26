<template>
  <q-page class="column items-center justify-center q-gutter-y-sm">
    <span class="text-h4">App</span>
    <q-input clearable v-model="testCollection.message" label="Message" />
    <div class="row q-gutter-x-sm">
      <q-btn color="negative" @click="handleClearButtonClick" label="Clear" />
      <q-btn color="primary" @click="handleTestButtonClick" label="Test" />
    </div>
    <q-list>
      <q-item v-for="log of testCollection.logs" clickable>{{ log }}</q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { useTestStore } from 'stores/test'
import { ref } from 'vue'

const { testCollection } = useTestStore()

function handleTestButtonClick(event: MouseEvent): void {
  testCollection.test()
}

function handleClearButtonClick(event: MouseEvent): void {
  testCollection.clear()
}
</script>
