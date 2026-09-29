/*
 * Ejercicio: define una clase que, al presionar “See All Insights”, muestre las
 * tarjetas ocultas inicialmente. Considera accesibilidad y rendimiento; luego
 * instancia la clase solo cuando el componente exista en la página.
 */

function initArticles() {
    const button = document.querySelector("#btn-show")
    const hiddenItems = document.querySelectorAll(".hidden__item")
    if (!button) return 
        button.addEventListener('click',() =>{
                hiddenItems.forEach((item) => {
                    item.classList.remove("hidden__item")
                });
        }
    
    ) 
}

document.addEventListener('DOMContentLoaded', () =>{
    initArticles()
} )


class ArticlesPreviews {
    
}

