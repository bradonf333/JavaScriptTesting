/*  PLANNING A PROJECT:
-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

I want to create a zombie text adventure game where the player
starts with a random scenario. They search for a weapon and fight a zombie.
The player has a 33% chance of getting bitten and losing, or killing the zombie and winning.

-----------------------------------------------
2. What steps do you think are necessary?
-----------------------------------------------

Beginning:
1. Write scenarios
2. Store a list of possible scenarios
3. Alert a random scenario from the list of possible scenarios

Weapon:
1. Create a list of weapons
2. Save the list of weapons
3. Alert which weapon the player finds

-----------------------------------------------
3. What syntax or coding patterns might you use?
-----------------------------------------------

Arrays for lists
Need multiple random numbers so a randomNumber function

-----------------------------------------------
Remember: There are many ways to create things with code! The most important part is to write it and get it working.  If you can't get something to work, try making it simpler.
After, look for ways you might improve your code!
*/

// Different scenarios used to start the game
var beginningScenarios =
    [
        "You wake up in a hospital. It is very quiet. You tiptoe to the door and peek out."
        , "You are standing in an open field next to a white house with a boarded door. There is a small mailbox here."
        , "Desperate times call for desperate measures. You see a small store up ahead and decide to loot it for goods."
    ];

// Generate a random number
function randomNumber(range) {
    return Math.round(Math.random() * range);
}

// Initialize variables: List of weapons, random weapon and survival number
var weaponList = ["shovel", "cossbow", "baseball bat", "shotgun"];
var weapon = weaponList[randomNumber(weaponList.length - 1)];
var survival = randomNumber(2);

// Begin Game
alert("The zombie apocalypse has begun...")
alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

// Search for weapon
alert("Being the zombie apocalypse, you decide to search for a weapon first. After looking around you notice a " + weapon + " lying on the ground. You grab it as your weapon.");

// Zombie attacks
alert("Suddenly a zombie jumps out. You ready your " + weapon + " and advance towards the zombie.");

// Decide if you die or win
if(survival === 0){
    alert("You try and attack the zombie with your " + weapon + "....... you miss. The zombie bites you and you die.");
}
else {
    alert("You attack the zombie with your " + weapon + ". You killed the zombie!!");
}
