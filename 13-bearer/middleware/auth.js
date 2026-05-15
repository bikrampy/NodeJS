import jwt from "jsonwebtoken";

export function checkAuth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        if (!authHeader) {
            return res.status(401).send("No token");
        }
        const token = authHeader.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).send("Invalid or expired token");
    }
}
