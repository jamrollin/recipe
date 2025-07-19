
    const select = document.getElementById("categories"); // looks for element with Id categories and assigns it to variable select
    const recipeItems = document.querySelectorAll("#recipeList li"); //recipeItems gets all <li> elements inside the element with ID "recipeList"
    
    select.addEventListener("change", function () { //Listens for when the user selects a different option in the dropdown then runs the function

        console.log("Category changed to:", this.value); // Debug selected value

        const selectedCategory = this.value; 
        
        recipeItems.forEach(item => {
            console.log("Processing item:", item.textContent); // Debug each item
            console.log("Item category:", item.dataset.category); // Debug category

            const itemCategory = item.dataset.category;
            if (selectedCategory === "all" || itemCategory.includes(selectedCategory)) {
                item.style.display = "list-item";
            } else {
                item.style.display = "none";
            }
        });
    });
