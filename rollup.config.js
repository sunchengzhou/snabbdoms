import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: 'src/main.js',
    output: {
        dir: 'dist',
        format: 'iife'
    },
    plugins: [json(), resolve(), commonjs()]
}