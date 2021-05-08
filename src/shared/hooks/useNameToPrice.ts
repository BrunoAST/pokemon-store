const useNameToPrice = (name?: string) => {
    if (!name) return;

    const price = (name.length * 10);

    return price;
};

export default useNameToPrice;
