

# Create the app

```bash
npm create vite@latest app -- --template react
cd my-site
npm install
```

# Add Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
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

# Configure the Vite Plugin

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

Import in `src/index.css` using `@import "tailwindcss";`