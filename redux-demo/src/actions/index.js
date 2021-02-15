export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const custom = (nr) => {
    return {
        type: 'CUSTOM',
        payload: nr
    };
};

export const random = () => {
    return {
        type: 'RANDOM'
    };
};

export const reset = () => {
    return {
        type: 'RESET'
    };
};