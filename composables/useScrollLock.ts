export const useScrollLock = () => {
    const lockScroll = () => {
        document.body.style.marginRight = "0px";
        document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
        document.body.style.marginRight = "";
        document.body.style.overflow = "";
    };

    return {
        lockScroll,
        unlockScroll
    };
};
