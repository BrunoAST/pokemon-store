const useNameToPrice = (name: any) => {
    if (!name) return;

    const price = (name.length * 10).toFixed(2).replace('.', ',');

    return price;
};

export default useNameToPrice;
