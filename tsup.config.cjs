const { readFileSync } = require("node:fs")
const { resolve } = require("node:path")
const { defineConfig } = require("tsup")
const metadata = require("./package.json")


const config = defineConfig({
    entry: ["./source/index.ts"],
    dts: true,
    format: ["esm","cjs"],
    clean: true,
    platform: "neutral",
    target: "esnext",
    define: {
        PKG_NAME: JSON.stringify(metadata.name),
        PKG_VERSION: JSON.stringify(metadata.version)
    }
})

module.exports = {default: config}