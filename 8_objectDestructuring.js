// Create Object

const obj = {
	player: "bobby",
	experience: 100,
	wizardlevel: true
}

//const player = obj.player;
//const experience = obj.experience;
//const wizardlevel = obj.wizardlevel;

//Destructuring Object

const {player, experience} = obj;

let {wizardlevel} = obj;
//with this syntax, it does the exactly same thing,
//that does the first two lines of the upper code!


