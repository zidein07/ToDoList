var active = document.getElementById("active"),done = document.getElementById("did"),remove = document.getElementById("remove"),h1 = document.getElementById("h1");var act = false,dn = false,rem = false;active.onclick = function() {	act = true;	dn = false;	rem = false;	stateOn();	console.log("Its Active Block");	h1.innerHTML = "Список заданий";}done.onclick = function() {	act = false;	dn = true;	rem = false;	stateOn();	console.log("Its Done Block");	h1.innerHTML = "Выполненные задания";}remove.onclick = function() {	act = false;	dn = false;	rem = true;	stateOn();	console.log("Its remove Block");	h1.innerHTML = "Удаленные задания";}function stateOn() {  stateIn = TodoStorage.data;  deleteLabel();  stateIn.forEach (function(item,i,arr) {  	if (act) {      if (item.state == "active") {	      labelTake();  		}    }    if (dn) {      if (item.state == "done") {	      labelTake();	      x.setAttribute("checked", true);          lineThrough(label);  		}    }    if (rem) {      if (item.state == "remove") {	    labelTake();	    ul.appendChild(link).removeChild(linkA);		ul.appendChild(link).removeChild(x);  		}    }	function labelTake() {		link = document.createElement("li");		x = document.createElement("INPUT");		label = document.createElement("label");		img = document.createElement("img");		img.setAttribute("src","img/ico_mus.png");		img.setAttribute("class","imgMus");		linkA = document.createElement('a');		linkA.setAttribute('id','delete' + i);		linkA.setAttribute('href','#');		linkA.setAttribute('onclick','deleteLink('+i+')');		x.setAttribute("type", "checkbox");		label.setAttribute("for", "c" + i);		label.setAttribute("id", "cs" + i);		x.setAttribute("id", "c" + i);		x.setAttribute("onclick", "changeBox(" + i + ")");		ul.appendChild(link).appendChild(linkA).appendChild(img);		ul.appendChild(link).appendChild(x);		ul.appendChild(link).appendChild(label).innerHTML = item.title;			}		}	);}function deleteLabel() {	if (ul.childNodes.length > 0) {		for (i = 0; i < ul.childNodes.length; i++) {			x = document.getElementById("c" + i);			label = document.getElementById("cs" + i);			ul.removeChild(ul.childNodes[i]);			deleteLabel();		}	}}function deleteLink(s){  link = document.getElementById('delete' + s);  getAllDate = TodoStorage.data;    getAllDate[s].state = 'remove';    changeSet = JSON.stringify(getAllDate);    localStorage.setItem(TodoStorage.storageName, changeSet);    console.log('[TodoStorage] remove -> ' + getAllDate[s].title);}