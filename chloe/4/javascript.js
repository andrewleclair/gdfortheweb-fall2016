var links = new Array();
links[0] = "rock.html";
links[1] = "paper.html";
links[2] = "scissors.html";


function openLink() {
  var i = Math.floor(Math.random() * links.length);
  parent.location = links[i];
  return false;
}


