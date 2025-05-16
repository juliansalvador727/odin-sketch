# 🎨 Etch-A-Sketch Drawing Grid App

A simple browser-based Etch-A-Sketch drawing grid built with **HTML**, **CSS**, and **JavaScript**. Click and drag to draw in vibrant colors, right-click to erase, and customize your grid size with ease.

## 🚀 Features

- 🖌️ Draw with a "pen" by left-clicking and dragging across the grid
- 🌈 Colors are randomly generated on each draw
- 🧽 Erase with right-click (single or drag)
- 🧊 Adjustable grid size (up to 100×100)
- 🔄 Reset/clear the grid with a button
- ❌ Prevents accidental text selection and context menu

## 🧠 How It Works

- The grid is generated dynamically in JavaScript using `<div>` elements
- Mouse event listeners detect click and drag behaviors
- Left click draws with a random RGB color
- Right click erases by setting background to white
- `mouseenter` triggers coloring only while mouse is held down

## 🔧 Technologies Used

- HTML5
- CSS3 (with Flexbox)
- Vanilla JavaScript (no libraries or frameworks)

## 📸 Screenshot

![screenshot](./screenshot.png)

## 🛠️ Setup Instructions

1. Clone or download the repository
2. Open `index.html` in your browser
3. Start drawing!

```bash
git clone https://github.com/your-username/odin-sketch.git
cd odin-sketch
open index.html
```
