**Install the dependencies:**

    ```bash
    # Using npm
    npm install

    # Or using yarn
    yarn install
    ```

## ⚙️ Usage

Once the dependencies are installed, you can use the following scripts:

### Available Scripts

| Script                | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `npm run dev`         | Starts the development server at `http://localhost:5173`.              |
| `npm run build`       | Bundles the app for production into the `dist/` folder.                |
| `npm run preview`     | Serves the production build locally to preview before deployment.      |
| `npm run lint`        | (Optional) Lints the code for errors and style inconsistencies.        |

### Running the Development Server

To start the local development server with hot-reloading enabled:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

## 🚢 Deployment

The `npm run build` command will create a `dist` directory with all the static files needed for production. You can deploy this `dist` folder to any static hosting service.

