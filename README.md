# FullStack Project w/ TypeScript
## Technologies used:
    - TypeScript
    - GraphQL
    - MikroORM
    - and many more!
    - I will be also formatting my notes on what I learned
    - from this project into this file
    - For now, here is what I have done:

Project Reference Link: https://www.youtube.com/watch?v=I6ypD7qv3Z8
-  npm init -y  (initialize project)
- make sure you have the proper version of node installed!
- what is 'yarn'?
	- open source package manager that helps devs install update and configure and remove package dependencies in JS projects

# Installing yarn was a bit of a hassle, so I got it to work by doing these commands:
```
sudo apt remove yarn
sudo apt install curl
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn
```

## Questions to test understanding:

```
What is a config file?
	- I think of it like it is what helps you compile your JS code
To run it, `yarn start`
but, we created a new command, watch,
this turns our typescirpt into JS before compiling
and now, if we want to run it, we would hit node dist/index.js


what did adding yarn dev command do?
	- It made things more efficient, we can now make real time changes! And we are able to compile the JS file while making live changes.


Next thing to do, add in the MikroORM to interact with our Database tables!
```
