import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    // Set up the Prisma Client connection.
    console.log('Setting up Prisma Client connection...')
    return {
      teardown() {
        // Tear down the Prisma Client connection.
      },
    }
  },
  transformMode: 'ssr',
}
