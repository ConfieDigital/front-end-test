/*
 * Ejercicio: define una clase que, al presionar “See All Insights”, muestre las
 * tarjetas ocultas inicialmente. Considera accesibilidad y rendimiento; luego
 * instancia la clase solo cuando el componente exista en la página.
 */

class ArticlesPreviews {


}

const button = document.querySelector("#showMore");
const hiddenCards = document.querySelectorAll(".insights__card--hidden");

if (button) {
    button.addEventListener("click", () => {
        hiddenCards.forEach((card) => {
            card.classList.remove("insights__card--hidden");
        });

        button.style.display = "none";
    });
}
