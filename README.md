# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - If the `Name`, `Email Address` `Phone`, or `Your Message` fields are empty, they should show "Can't be empty"

### Screenshot

![](./public/assets/screenshot.jpg)

### Links

- Solution URL: (https://designo-gamma.vercel.app/)

## My process

- Started with getting all of the fonts, colors, and buttons configured into the sass files
- Made nav and footer components
- Made sure the nav, main, and footers behaved like I wanted them to together
- Then I went page by page, making a page file in the pages directory and components when needed in the components directory
- Basically, if I saw that a section was used on more than one page, I made it into a component
- As a bonus for myself I added a dark/light mode toggler on desktop since Bootstrap added support in v5.3

### Built with

- Semantic HTML5 markup
- SCSS
- Bootstrap 5.3
- React + Vite
- Mobile-first workflow

### What I learned

- Handling background images is a big pain if you don't know what you're doing
- If you want to add pseudo elements to inputs, you have to do it on the wrapping div of the input
  - This came in handy when adding the error message

```html
<div className="mb-3 notValid">
	<input type="email" className="form-control" placeholder="Email Address" />
</div>
```

```css
.notValid {
	background-image: url("../../assets/contact/desktop/icon-error.svg");
	background-position: right 10px center;
	background-repeat: no-repeat;
	background-size: 20px;
	position: relative;
	&::after {
		content: "Can't be empty";
		font-style: italic;
		position: absolute;
		top: 50%;
		right: 50px;
		transform: translateY(-50%);
		color: white;
		font-size: 12px;
	}
}
```

```js
const handleSubmit = (e) => {
	e.preventDefault();
	// Make sure no inputs are empty
	const form = formRef.current;
	let formValid = true;
	for (let i = 0; i < form.length; i++) {
		const input = form[i];
		if (input.value === "") {
			// Add notValid class to input's parent div
			input.parentNode.classList.add("notValid");
			formValid = false;
		} else {
			input.parentNode.classList.remove("notValid");
		}
	}
	// If they aren't, show a success message
	if (formValid) {
		toast.success("👌 Thanks for reaching out, talk soon!", {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
};
```

## Author

- Frontend Mentor - [@rmartin93](https://www.frontendmentor.io/profile/yourusername)
