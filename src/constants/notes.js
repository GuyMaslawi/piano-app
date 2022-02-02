export const NOTES = [
    {id: 1, note: 'a', key: 'a', sound: 261.6},
    {id: 2, note: 'ab', key: 'z', sound: 293.7},
    {id: 3, note: 's', key: 's', sound: 329.6},
    {id: 4, note: 'sb', key: 'x', sound: 349.2},
    {id: 5, note: 'd', key: 'd', sound: 392},
    {id: 7, note: 'f', key: 'f', sound: 440},
    {id: 8, note: 'fb', key: 'c', sound: 493},
    {id: 11, note: 'g', key: 'g', sound: 523.3},
    {id: 12, note: 'gb', key: 'v', sound: 587.3},
    {id: 9, note: 'h', key: 'h', sound: 659.3},
    {id: 10, note: 'hb', key: 'b', sound: 700.5},
    {id: 13, note: 'j', key: 'j', sound: 750}
];

export const VALID_BLACK_KEYS = ['z', 'x', 'c', 'v', 'b'];
export const VALID_WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
export const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
