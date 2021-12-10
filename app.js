function filter() {
    // Access text value and elements from the DOM 
    let value = document.getElementById("searchInput").value.toUpperCase();
    let names = document.getElementById("names"); // tbody name
    let rows = names.getElementsByTagName("tr");


for (i = 0; i < rows.length; i++) {
    let column = rows[i].getElementsByTagName("td")[2];
    let language = column.textContent;
   // console.log(typeof language);

    rows[i].style.display =
      language.toUpperCase().indexOf(value) > -1 ? "" : "none";
  }
}




document.getElementById("searchInput").addEventListener("keyup", filter);