export const loadState = () => {
    try {
        const serielizeState = localStorage.getItem('state');
        if (serielizeState === null) {
            return undefined;
        }
        return JSON.parse(serielizeState);
    } catch (err) {
        console.log('Error ophalen', err);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serielizeState = JSON.stringify(state);
        localStorage.setItem('state', serielizeState);
    } catch (err) {
        console.log('Error opslaan', err);
        return undefined;
    }
};
