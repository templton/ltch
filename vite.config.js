import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return defineConfig({
        base: env.SITE_URL,
        plugins: [react()],
    });
}
