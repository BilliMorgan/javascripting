var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "";
var solved = false;

if (room === "ballroom" && suspect === "Mr. Kalehoff") {weapon = "poison"
solved = false;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") { weapon = "trophy"
solved = false;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {weapon = "trophy"
solved = false;
} else if (room === "dining room" && "Mr. Parkes") {weapon = "knife"
solved = false;
}
if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
