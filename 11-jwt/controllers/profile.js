export async function handleWelcomePage(req, res) {
    res.render(`profile`, {
        name: req.user.first_name,
    });
}
