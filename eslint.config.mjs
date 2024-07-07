import pluginJs from "@eslint/js";
import eslintPluginSecurity from "eslint-plugin-security";

export default [
    {
        files: ["**/*.js"],
        languageOptions: {sourceType: "commonjs"},
        plugins: {eslintPluginSecurity},
        rules: {
            'no-console': 'off', // Отключить правило, запрещающее использование console.log
            'quotes': ['error', 'single'], // Использовать одинарные кавычки
            'indent': ['error', 2], // Отступы в 2 пробела
            'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': true }], // Запретить неиспользуемые переменные
            'no-undef': 'error', // Запретить использование необъявленных переменных
            'prefer-const': 'error', // Требовать использование const для переменных, которые не переопределяются
            'handle-callback-err': ['error', '^(err|error)$'], // Требовать обработку ошибок в колбэках
            'no-var': 'error', // Запретить использование var
        }
    },
    pluginJs.configs.recommended,
];