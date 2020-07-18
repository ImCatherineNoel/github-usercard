import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/
/*
<div class="card">
<img src={image url of user} />
<div class="card-info">
  <h3 class="name">{users name}</h3>
  <p class="username">{users user name}</p>
  <p>Location: {users location}</p>
  <p>Profile:
    <a href={address to users github page}>{address to users github page}</a>
  </p>
  <p>Followers: {users followers count}</p>
  <p>Following: {users following count}</p>
  <p>Bio: {users bio}</p>
</div>
</div>*/
function cardMaker(obj){
	//Creating Elements
		const	cardDiv	=	document.createElement('div');  	//<div class="card">
		const	cardImg	=	document.createElement('img');  	//	<img src={image url of user} />
		const	infoDiv	=	document.createElement('div')  	// <div class="card-info">
		const	infoName	=	document.createElement('h3');  	//   <h3 class="name">{users name}</h3>
		const	infoUser	=	document.createElement('p');  	//   <p class="username">{users user name}</p>
		const	infoLoc	=	document.createElement('p');  	//   <p>Location: {users location}</p>
		const	infoProf	=	document.createElement('p');  	//   <p>Profile:
		const	infoLink	=	document.createElement('a');  	//	<a href={address to users github page}>{address to users github page}</a>
		const	infoFers	=	document.createElement('p');  	//   <p>Followers: {users followers count}</p>
		const	infoFing	=	document.createElement('p');  	//   <p>Following: {users following count}</p>
		const	infoBio	=	document.createElement('p');  	//   <p>Bio: {users bio}</p>
	//Adding Classes
		cardDiv.classList.add('card');  		//<div class="card">
		infoDiv.classList.add('card-info');  	//<div class="card-info">
		infoName.classList.add('name');  		//<h3 class="name">{users name}</h3>
		infoUser.classList.add('username');  	//<p class="username">{users user name}</p>
	//Adding	Info to Elements
		//cardDiv 			//<div class="card">
		cardImg.src 			= 	obj.avatar_url;				//<img src={image url of user} />
		// infoDiv			// <div class="card-info">
		infoName.textContent 	= 	obj.login;					//<h3 class="name">{users name}</h3>
		infoUser.textContent 	= 	obj.login;					//<p class="username">{users user name}</p>
		infoLoc.textContent 	= 	`Location: ${obj.location}`;		//<p>Location: {users location}</p>
		infoLink.href 			=	 obj.html_url;	
		infoLink.textContent	= 	obj.html_url;					//<a href={address to users github page}>{address to users github page}</a>
		infoProf.textContent	=	`Profile:  `;					//<p>Profile: 
		infoFers.textContent 	= 	`Followers: ${obj.followers}`;	//<p>Followers: {users followers count}</p>
		infoFing.textContent 	= 	`Following: ${obj.following}`;	//<p>Following: {users following count}</p>
		infoBio.textContent 	= 	`Bio: ${obj.bio}`;				//<p>Bio: {users bio}</p>
	//Adding Structure
		//<div class="card"> 
		cardDiv.appendChild(cardImg);		//	<img src={image url of user} />
		cardDiv.appendChild(infoDiv);		// 	<div class="card-info">
		infoDiv.appendChild(infoName);	//	<h3 class="name">{users name}</h3>
		infoDiv.appendChild(infoUser);	//   <p class="username">{users user name}</p>
		infoDiv.appendChild(infoLoc);		//   <p>Location: {users location}</p>
		infoDiv.appendChild(infoProf);	//   <p>Profile:
		infoDiv.appendChild(infoFers);	//   <p>Followers: {users followers count}</p>
		infoDiv.appendChild(infoFing);	//   <p>Following: {users following count}</p>
		infoDiv.appendChild(infoBio);		//   <p>Bio: {users bio}</p>
		infoProf.appendChild(infoLink);	//	<a href={address to users github page}>{address to users github page}</a>
	//Testing
		console.log(cardDiv);
		console.log(obj.html_url);
	//Return	
		return cardDiv;
}
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
axios.get('https://api.github.com/users/imcatherinenoel')
.then(info => {
	console.log(info);
	const card = document.querySelector('.cards');
	card.appendChild(cardMaker(info.data));
 
   })
   .catch(err => {
	console.log('Error:', err);
 
   });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [	'tetondan',	'dustinmyers', 	'justsml', 	'luishrd',	'bigknell'];

followersArray.forEach(follower => {
	axios.get(`https://api.github.com/users/${follower}`)
.then(info => {
	console.log(info);
	const card = document.querySelector('.cards');
	card.append(cardMaker(info.data));
 
   })
   .catch(err => {
	console.log('Error:', err);
 
   });

}); 








/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
