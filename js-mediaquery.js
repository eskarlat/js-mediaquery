
const _getMedia = breakpoint => {
    return window.matchMedia(`(max-width: ${breakpoint})`);
};

const respond = ({ breakpoint, ...events }) => {
    let isMatched = false;

    const media = _getMedia(breakpoint);

    if (media.matches) {
        events.run();
        isMatched = true;
    }

    media.addListener(m => {
        if (m.matches) {
            events.run();
            isMatched = true;
        } else if (isMatched) {
            events.back();
            isMatched = false;
        }
    });
};

export default respond;
