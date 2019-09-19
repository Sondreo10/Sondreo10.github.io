document.write("table")
for(var i =1; i<10; i++){
  document.write("<tr>");
  for (var j=1;j<=10;j++){
    var string=i + "x" + j + "=" + (i*j)+"";
    document.write(string);
document.write("</tr>");
}
document.write("</table>");
document.write("<br>");
}
