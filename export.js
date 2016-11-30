var tds = $x("//td[@id='paneBody']/form/table[@style='margin-top:15px;']/tbody/tr/td[3]/div[2]/table/tbody/tr/td");
var string = "Name;ExpressionOrLookup\n";
for(var i=0; i < tds.length; i=i+3){
    //console.log('"'+tds[i+1].innerText+'";"'+tds[i+2].innerText+'"');
    string += '"'+tds[i+1].innerText+'";"'+tds[i+2].innerText+'"\n';
};
copy(string);
console.log("Values are now in the clipboard");
