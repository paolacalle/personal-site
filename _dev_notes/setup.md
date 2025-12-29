

# Create the app

```bash
npm create vite@latest app -- --template react
cd my-site
npm install
```

# Add Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

# Requires Node Version Manager 20  
- Had to give myself ownership of the `.zshrc` file, running `sudo chown paolacalle ~/.zshrc` and then to make it writeable `chmod u+rw ~/.zshrc`

- I added the nvm prefix 

```bash
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "$(brew --prefix nvm)/nvm.sh" ] && . "$(brew --prefix nvm)/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
```
- I install and switch Node 
```bash
nvm install 20
nvm use 20
node -v
npm -v
```

# Setting up the configuration files
These files are instructions that tell our tools how to behave when building the the site.
They are read by the build system. 

## The Build Pipeline 

```bash
npm run dev
```

The chains of events: 

```pgsql
1. index.css (PostCSS reads CSS)
2. postcss.config.js (Tailwind plugin runs)
3. tailwind.config.js (CSS is generated)
4. Vite injects CSS into browser
```
Each config file controls one step in that pipeline.

## Tailwind Config 
Tailwind is utility-on-demand. It only generates CSS for the classes you actually use.
So it needs to scan your files.

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // files to scan
  theme: {
    extend: {}, // your custom colors, fonts, spacing go here
  },
  plugins: [],
};
```

## Postcss Config
CSS transformer engine. It runs plugins that modify the CSS before it reached the browser.
Tailwind is one of these plugins.

** Why Tailwind needs PostCSS** In order for the application, to know the existance of the 
Tailwind. 

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {}, // inform of our use of tailwind plugin
    autoprefixer: {},
  },
};
```

## Why does vite care?
Vite does not understand Tailwind or PostCSS, but it knows how to call PostSS when it sees
a CSS file, so 

- Vite calls PostCSS
- PostCSS reads `postcss.config.js`
- Tailwind plugin reads `tailwind.config.js`
- Result is a compiled CSS streamed into the browser