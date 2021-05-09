const priceToCurrency = (value?: number) => {
    if (!value || isNaN(value)) return value;

    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

export default priceToCurrency;
