import { defineStore } from 'pinia'
import { ref } from 'vue'

export class TestCollection {
  public logs: string[] = []
  public message: string = ''

  public test(): void {
    this.logs.push(this.message)
    this.message = ''
  }

  public clear(): void {
    this.logs = []
  }
}

export const useTestStore = defineStore('test', () => {
  const testCollection = ref(new TestCollection())

  return {
    testCollection,
  }
})
