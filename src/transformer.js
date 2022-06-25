import textr from 'textr';

import spaces from 'typographic-single-spaces';
import emDashes from 'typographic-em-dashes';
import orphans from 'typographic-orphan';
import quotes from 'typographic-quotes';
import ellipsis from 'typographic-ellipses';

export const getTransformer = (options) =>
    textr(options).use(
        spaces,
        emDashes,
        orphans,
        quotes,
        ellipsis,
    );
