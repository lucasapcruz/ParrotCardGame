let mainCourseElem;
let beverageElem;
let dessertElem;

function composeOrder(element) {

    element.classList.add("selected");
    element.querySelector(".selected-check").classList.add("visible")

    const parentElmtClasses = element.parentElement.classList;

    if (parentElmtClasses.contains("main-course") && element.classList.contains("selected")) {
        if (mainCourseElem !== undefined && mainCourseElem !== element) {
            mainCourseElem.classList.remove("selected")
            mainCourseElem.querySelector(".selected-check").classList.remove("visible")
        }
        if(mainCourseElem !== element){
            mainCourseElem = element;
        }
    }

    if (parentElmtClasses.contains("beverage") && element.classList.contains("selected")) {
        if (beverageElem !== undefined && beverageElem != element) {
            beverageElem.classList.remove("selected")
            beverageElem.querySelector(".selected-check").classList.remove("visible")
        }
        if(beverageElem !== element){
            beverageElem = element;
        }
    }

    if (parentElmtClasses.contains("dessert") && element.classList.contains("selected")) {
        if (dessertElem !== undefined && dessertElem !== element) {
            dessertElem.classList.remove("selected")
            dessertElem.querySelector(".selected-check").classList.remove("visible")
        }
        if(dessertElem !== element){
            dessertElem = element;
        }
    }

    const placeOrderBtn = document.querySelector(".place-order-btn");
    let totalAmount;

    if (mainCourseElem !== undefined && beverageElem !== undefined && dessertElem !== undefined) {
        const totalAmount = priceParser(mainCourseElem) + priceParser(beverageElem) + priceParser(dessertElem);
        placeOrderBtn.classList.add("activated");
        placeOrderBtn.querySelector("p").innerHTML = "Fechar pedido";
        const wppOrderText = `Olá, gostaria de fazer o pedido:\n` + 
        `- Prato: ${mainCourseElem.querySelector(".dish").innerHTML} ` + 
        `\n- Bebida: ${beverageElem.querySelector(".dish").innerHTML} ` + 
        `\n- Sobremesa: ${dessertElem.querySelector(".dish").innerHTML} ` +
        `\nTotal: R$ ${totalAmount.toFixed(2)}`;
        console.log(wppOrderText);
        const parsedOrderText = encodeURI(wppOrderText);
        const wppOrderLink = `https://wa.me/5511963057279?text=${parsedOrderText}`;
        console.log(wppOrderLink);
        placeOrderBtn.setAttribute("onclick", `window.location.href="${wppOrderLink}"`);
    } else {
        placeOrderBtn.classList.remove("activated");
        placeOrderBtn.querySelector("p").innerHTML = "Selecione os 3 itens para fechar o pedido";
    }
}

function priceParser(element) {
    let price;

    price = element.querySelector(".price").innerHTML;

    price = price.replace("R$ ", "");
    price = price.replace(",", ".");

    let priceParsed = parseFloat(price);

    return priceParsed;
}