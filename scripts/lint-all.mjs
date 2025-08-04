// Cross-platform solution for linter incorrectly searching for tsconfig.json
import { spawn } from 'node:child_process'

const lintProcess = spawn('npm', ['run lint'], {
  stdio: 'inherit',
  shell: true,
})

lintProcess.on('close', (code) => {
  process.exit(code)
})

lintProcess.on('error', (err) => {
  console.error('Failed to start lint process:', err)
  process.exit(1)
})
