export async function handleWelcomePage(req, res) {
    res.render(`welcome`, {
        name: req.user.first_name,
    });
}
