import App from "./server";

async function main() {
    try {
        const { SERVER_PORT } = process.env;
        const app = new App();
        app.start(SERVER_PORT || 3001);
        
    } catch (error) {
        console.log(error);
        process.exit(1); 
    } 
}

main();