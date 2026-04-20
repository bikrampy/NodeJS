import { sessions } from "../session.js";

export function checkAuth(req, res, next) {
    const sessionId = req.cookies.uid;
    if (!sessionId) {
        return res.redirect("/login");
    }
    const session = sessions.get(sessionId);
    if (!session) {
        return res.redirect("/login");
    }
    if (session.expiresAt < Date.now()) {
        sessions.delete(sessionId);
        return res.redirect("/login");
    }
    req.user = session.user;
    next();
}
