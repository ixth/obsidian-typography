const obsidian = require('obsidian');
const {
    spaces,
    stickyEmDash,
    stickyParticles,
    quotes,
    ellipsis
} = require('./rules');

const RULES = [
    spaces,
    stickyEmDash,
    stickyParticles,
    quotes,
    ellipsis,
];

const processText =
    (text, rules) =>
        rules.reduce((text, rule) => rule(text), text);

module.exports = class extends obsidian.Plugin {
    onload() {
        this.addCommand({
            id: 'typographize',
            name: 'Typographize',
            editorCallback: (editor) => {
                editor.setValue(processText(editor.getValue(), RULES));
            }
        });
    }
};
