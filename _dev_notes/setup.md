

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
