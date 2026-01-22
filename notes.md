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

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
