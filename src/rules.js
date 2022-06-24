export const spaces =
    (text) =>
        text.replace(/(?<=\S) +(?=\S|$)/g, ' ');

export const stickyEmDash =
    (text) =>
        text.replace(/ — /g, '\u00a0— ');

export const stickyParticles =
    (text) =>
        text.replace(/(?<=\s(?:а|в|и|на|не)) /g, '\u00a0');

export const quotes =
    (text) =>
        text.replace(/"(.*?)"/g, '«$1»');

export const ellipsis =
    (text) =>
        text.replace(/(?<!=\.)\.{3}(?!=\.)/g, '…');
