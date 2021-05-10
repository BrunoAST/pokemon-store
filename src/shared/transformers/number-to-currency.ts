const numberToCurrency = (value?: number) => {
    if (!value || isNaN(value)) return value;

    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

export default numberToCurrency;
