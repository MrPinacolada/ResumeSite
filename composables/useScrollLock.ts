export const useScrollLock = () => {
    const isClient = typeof window !== "undefined" && typeof document !== "undefined";

    const lockScroll = () => {
        if (!isClient) return;
        document.body.style.marginRight = "0px";
        document.body.style.overflow = "hidden";
    };

    const unlockScroll = () => {
        if (!isClient) return;
        document.body.style.marginRight = "";
        document.body.style.overflow = "";
    };

    return {
        lockScroll,
        unlockScroll
    };
};
