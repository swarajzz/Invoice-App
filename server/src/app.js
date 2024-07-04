import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.options('*', cors()); // Handle preflight requests

app.get('/test-cors', (req, res) => {
  res.send('CORS test successful');
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";
import invoiceRouter from "./routes/invoice.routes.js";

// routes declaration
app.use("/api/users", userRouter);
app.use("/api/invoice", invoiceRouter);
app.use(errorHandler);

export { app };

// http:localhost:3000/api/auth
// http:localhost:3000/api/invoice
