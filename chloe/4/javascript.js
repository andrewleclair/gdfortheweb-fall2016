var links = new Array();
links[0] = "rock";
links[1] = "paper";
links[2] = "scissors";


function openLink() {
  
  var i = Math.floor(Math.random() * links.length);
  parent.location = links[i];
  return false;
}
var play = document.getElementById(“play”);
h.onclick = openLink;

</script>
echo "<meta http-equiv='refresh' content=0;URL="openLink();">



</body>
</html>