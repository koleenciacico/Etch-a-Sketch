# 🎨 Etch-a-Sketch

A browser-based drawing pad inspired by the classic Etch-a-Sketch toy — built with vanilla HTML, CSS, and JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Preview

<img width="1033" height="887" alt="image" src="https://github.com/user-attachments/assets/b3ff2919-132c-4c4d-844a-6bcdb0d5a378" />
<img width="912" height="882" alt="image" src="https://github.com/user-attachments/assets/67cb7fcf-002e-40c2-8cf4-2603cf714bb9" />


---

## 🧩 Features

| Feature | Description |
|---|---|
| 🟪 **Dynamic Grid** | Grid squares are generated entirely with JavaScript using Flexbox — no hardcoded HTML divs. |
| 🖱️ **Hover-to-Draw** | Move your mouse across the grid to leave a colored trail, just like sketching on paper. |
| 🔄 **Resizable Grid** | Click **New Grid**, enter a size (1–100), and get a fresh grid scaled to the same drawing area. |
| ✅ **Input Validation** | Gracefully handles invalid input — out-of-range numbers, non-numeric text, or a canceled prompt. |
| 🧹 **Reset Button** | Clear your drawing without changing the grid size. |
| 📱 **Responsive Layout** | The grid scales using viewport units, so it fits any screen without scrolling. |

---

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — Flexbox layout, custom properties, hover animations
- **Vanilla JavaScript** — DOM manipulation, event listeners, no frameworks

## 📚 What I Learned

- Creating and appending DOM elements dynamically with JavaScript instead of hardcoding HTML.
- Using Flexbox (`display: flex`, `flex-wrap: wrap`) to build a responsive grid layout.
- Handling the `box-sizing: border-box` gotcha to keep element sizing predictable when borders are involved.
- Writing reusable functions (`createGrid(size)`) instead of duplicating logic.
- Validating user input from `prompt()`, including edge cases like `NaN` and canceled prompts.
- Using percentage-based sizing to avoid floating-point rounding issues in dynamically generated layouts.
- Adding subtle CSS hover interactions (`transform: scale()`, `box-shadow` glow effects) for better UX.

---

## 🔮 Future Improvements

- [ ] Random color per square on hover
- [ ] Color picker for custom drawing colors
- [ ] "Rainbow mode" trail effect
- [ ] Eraser tool
- [ ] Click-and-drag drawing (instead of hover-only)

## PS: WIP

---

<p align="center">Made with 💜 as part of The Odin Project curriculum</p>
