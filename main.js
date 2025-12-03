let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function (e) {
    e.preventDefault();

    let searchInputValue = searchInput.value.trim();

    if (searchInputValue == "" || searchInputValue == null) {
        alert("Type something fun to search for, first");

        return false;
    }

    const form = this.closest("form");
    form.submit();
});

let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function (e) {
    e.preventDefault();

    searchInput.value = "";
});

