// Cross-platform solution for linter incorrectly searching for tsconfig.json
import { spawn } from 'node:child_process'

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const lintProcess = spawn(npm, ['run', 'lint'], { stdio: 'inherit' })

lintProcess.on('close', (code) => {
  process.exit(code)
})

lintProcess.on('error', (err) => {
  console.error('Failed to start lint process:', err)
  process.exit(1)
})
