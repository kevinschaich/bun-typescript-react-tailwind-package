import dts from 'bun-plugin-dts'
import tailwindcss from 'bun-plugin-tailwindcss'

await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    plugins: [dts(), tailwindcss()],
    target: 'browser',
    splitting: true,
})
