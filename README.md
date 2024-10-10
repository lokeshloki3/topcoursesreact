Demo - 

Steps- 

	npm install
	npm run start
 
	npm install gh-pages --save-dev
	
	Add in package.json above name
	"homepage" : "https://username.github.io/reponame"
	
	Add both in Scripts in package.json
	"predeploy":"npm run build",
	"deploy":"gh-pages -d build",
	
	Add /reponame to Route to render Home in App.json for Github Page
	If wants to change commit in repo first remove homepage url 
	and after committing again write homepage for navbar logo only

	npm run deploy
