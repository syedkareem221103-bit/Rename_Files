# Rename.K

A simple Node.js and Bash-based utility that automatically renames files and folders by replacing a specific word in their names.

For example:

```text
ammi1  →  syed1
ammi2  →  syed2
ammi3  →  syed3
```

The project uses **Node.js `fs` and `path` modules** to read directory contents and rename files/folders. A Bash script is also included to execute the Node.js program easily from the terminal.

---

## 🚀 Features

- Rename multiple files or folders automatically
- Replace one word with another in names
- Works with files and folders
- Preview rename operations before actually renaming
- Uses Node.js built-in modules
- Can be executed using a Bash script
- No external npm packages required

---

## 🛠️ Technologies Used

- **Node.js**
- **JavaScript**
- **Bash / Shell Script**
- **File System (`fs`) module**
- **Path (`path`) module**

---

## 📁 Project Structure

```text
Rename.K/
│
├── data/
│   ├── ammi1
│   ├── ammi2
│   └── ammi3
│
├── index.js
├── package.json
├── rename.sh
└── README.md
```

---

## ⚙️ How It Works

The project defines three important values:

```js
const replaceThis = "ammi";
const replaceWith = "syed";
const previous = false;
```

### `replaceThis`

The text that should be replaced.

```js
const replaceThis = "ammi";
```

### `replaceWith`

The new text that should replace it.

```js
const replaceWith = "syed";
```

### `previous`

Controls whether the program only previews the changes or actually renames the files/folders.

```js
const previous = true;
```

When `true`, the program only displays what would happen.

```text
Would rename: ammi1 → syed1
Would rename: ammi2 → syed2
```

When set to:

```js
const previous = false;
```

the program actually performs the rename.

---

## ▶️ Running the Project

### 1. Open the project directory

```bash
cd Rename.K
```

### 2. Run directly with Node.js

```bash
node index.js
```

### 3. Or use the Bash script

First give the script execution permission:

```bash
chmod +x rename.sh
```

Then run:

```bash
./rename.sh
```

---

## 🧪 Preview Mode

Before making changes, you can use preview mode:

```js
const previous = true;
```

Example output:

```text
Would rename: ammi1 → syed1
Would rename: ammi2 → syed2
Would rename: ammi3 → syed3
```

This is useful for checking the changes before actually renaming anything.

---

## ✏️ Actual Rename Mode

To actually rename the files or folders:

```js
const previous = false;
```

Run:

```bash
./rename.sh
```

Example:

```text
Renamed: ammi1 → syed1
Renamed: ammi2 → syed2
Renamed: ammi3 → syed3
```

The directory will then contain:

```text
syed1
syed2
syed3
```

instead of:

```text
ammi1
ammi2
ammi3
```

---

## 💻 Example

Suppose the directory contains:

```text
ammi1
ammi2
ammi3
test
```

With:

```js
const replaceThis = "ammi";
const replaceWith = "syed";
```

The result will be:

```text
syed1
syed2
syed3
test
```

Only names containing `ammi` are changed.

---

## 📦 Installation

No additional npm packages are required.

Make sure Node.js is installed:

```bash
node --version
```

Example:

```text
v24.21.0
```

Then run the project.

---

## 🔧 Customization

You can easily change the words you want to replace.

For example:

```js
const replaceThis = "old";
const replaceWith = "new";
```

This would change:

```text
old-file.txt
old-folder
old-image.png
```

into:

```text
new-file.txt
new-folder
new-image.png
```

---

## ⚠️ Important Notes

- Use **preview mode** first by setting `previous = true`.
- Make sure you are running the script in the correct project directory.
- Renaming is permanent unless you manually rename the files/folders back.
- Avoid using the script on important directories without checking the preview first.

---

## 🎯 Purpose of the Project

The purpose of this project is to automate repetitive file and folder renaming tasks.

Instead of manually renaming many files or folders one by one, the program can find a specific word in their names and replace it automatically.

This project also demonstrates practical usage of:

- Node.js file system operations
- Directory handling
- Path manipulation
- Callback functions
- JavaScript string methods
- Bash scripting
- Command-line execution

---

## 👨‍💻 Author

**Syed**

---

## 📄 License

This project is created for learning and personal use.
