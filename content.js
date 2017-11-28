var comicIndex=0;
var comicID = "MainContent_MainContent_gvWishlist_hlTitle_";
var priceID = "MainContent_MainContent_gvWishlist_lblUnitPrice_";
var titles = [];
var total=0.0;
while(document.getElementById("MainContent_MainContent_gvWishlist_hlTitle_"+comicIndex)){
    var price = document.getElementById(priceID+comicIndex);
    var title = document.getElementById(comicID+comicIndex).innerText;
    if(price != null){
        price = price.innerText;
        total +=parseFloat(price.substring(1));//get rid of '$' on front
    }else{
        price = "Not Available";
    }
    console.log(title.innerText);
    console.log(price);
    comicIndex++;
    titles.push([title, price]);
}
console.log(titles);
titles.push(["Cost in USD: ", total]);
//console.log(titles);
for (var i = 0; i < titles.length; i++) {
    console.log(titles[i][0] + " " + titles[i][1]);
}
let csvContent = '';
titles.forEach(function (rowArray) {
    let row = rowArray.join(",");
    csvContent += row + "\r\n"; // add carriage return
});
console.log(csvContent)

var encodedUri = encodeURI(csvContent);
$('.headertitlesmall').find('h2').each(function () {
    $(this).append(' (<a href="data:text/csv;charset=UTF-8,' +
        encodedUri +
        '" download="' + "Comics-Wishlist.csv" + '">Download Wishlist</a>)');
});
console.log($('.headertitlesmall').find('h2'));