# Configured Gulp Environment

**configured-gulp-environment** is a pre-configured Gulp environment designed to streamline web development tasks. With this environment, you can easily compile Sass, compress images, and minify JavaScript for your projects.

## Installation

Before getting started, make sure you have Node.js and npm installed on your machine.

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Biasiolo/configured-gulp-environment.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd configured-gulp-environment
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

This environment provides several Gulp tasks for different aspects of web development.

### Compile Sass to CSS:

```bash
npm run compileSass
```

This task compiles Sass files located in the `source/styles/` directory and generates minified CSS in the `dist/styles/` directory.

### Compress Images:

```bash
npm run compressImages
```

This task compresses images located in the `source/images/` directory and saves them in the `dist/images/` directory.

### Minify JavaScript:

```bash
npm run minifyJS
```

This task minifies JavaScript files located in the `source/scripts/` directory and outputs them to the `dist/js/` directory.

### Watch for Changes:

```bash
npm run watch
```

The watch task monitors changes in Sass, images, and JavaScript files, automatically triggering the corresponding tasks.

### Default Task (Run All Tasks):

```bash
npm run build
```

The build task executes all the tasks (Sass compilation, image compression, and JavaScript minification) at once.

## How to Use

After the installation, follow these steps:

1. **Edit Source Files:**

   Edit your source files located in the `source/` directory. You can modify Sass files, update images, and make changes to JavaScript files according to your project needs.

2. **Run Gulp Tasks:**

   Execute the relevant Gulp tasks based on your changes. For example:

   ```bash
   npm run compileSass
   ```

   ```bash
   npm run compressImages
   ```

   ```bash
   npm run minifyJS
   ```

   Or run all tasks together with:

   ```bash
   npm run build
   ```

3. **Observe Changes:**

   If you want Gulp to automatically detect and process changes as you work, run:

   ```bash
   npm run watch
   ```

Now you're ready to develop with a configured Gulp environment!

## Project Structure

- `source/`: Contains the source files for Sass, images, and JavaScript.
- `dist/`: The output directory where compiled and minified files are generated.

## Contribution

Contributions are welcome! If you encounter issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to adjust the wording or formatting to better suit your preferences!