import { Plugin } from 'obsidian';

import { getTransformer } from './transformer';

export default class extends Plugin {
    onload() {
        const transform = getTransformer({ locale: 'ru' });
        this.addCommand({
            id: 'typographize',
            name: 'Typographize',
            editorCallback: (editor) => {
                editor.setValue(transform(editor.getValue()));
            }
        });
    }
};
