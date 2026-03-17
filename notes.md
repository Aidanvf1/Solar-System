# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.196.207.235
I think the biggest thing to have noted is to keep checking on it from time to time and make sure everything is work correctly.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

Well right now it honestly look sad. Not just he UI but the code its self just looks bare. Its kinda hard to really know what Things will look like without the css but for now thats what I will be seeing. I definatly see the importance of pre setting up the html to make sure that you have things ready for a smooth workflow. Need to remember as i deployed it that the startup is not going to be on the dmainname page but on start up.

## CSS

Noting that making ids in the future for my projects first make this super simple and easy. I didnt start by making my things flex and would have saved lots of time if i just put that in at the start. I didnt think it would bee such a big task. I would have also planned my layout look diffrently so i didnt have to go and change things along the way. but i guess that is the way of learning.

## React Part 1: Routing

Okay, setting it up was literally pain, but ones I did it with simon doing it to my own server was much easier. It's really important to make sure that everthing is getting send to the right page. Most of my problems didnt come from any code had changed but the new code just not working. Making sure all the react code was in order and there were no bugs in it. I'm aually super excited now beacuse I feel like its going to be much eaier to navigate and complete the rest of the project. Stuff is set up very nicely and organized now.

## React Part 2: Reactivity

Need to remember that this makes or breaks the website. I think that having interactions and animations is what will make people look at my page and stay on my page.

## web service

Okay! I think that wasnt so bad but it's important to keep in mind that the backend and frontend are separate now. Setting up Express endpoints was actually pretty straightforward once I got the hang of it. The biggest things to remember:

- Make sure your service index.js is in the right directory and package.json has the right scripts
- Testing endpoints with curl or in the browser before connecting the frontend saves SO much debugging time- Always return proper HTTP status codes (200, 404, 500, etc.)

The connection between frontend fetch calls and backend endpoints is actually really satisfying when it works. Just need to make sure the URLs match exactly and you're handling promises correctly.

## DB

MongoDB setup took me a minute, but once `dbConfig.json` was wired up it made the app feel real instead of mocked. Biggest things I learned:

- Keep auth and app data in separate collections (`user` and `savedDate`) to keep queries simple.
- Always hash passwords with bcrypt before writing to DB. Never store plaintext.
- Token lookup from cookies is straightforward for protected endpoints; middleware keeps route code cleaner.
- For "recent items" style data, insert first then trim old records (I cap saved dates to 5 per user).
- Debugging was way easier when I tested backend endpoints first, then connected frontend fetch calls.