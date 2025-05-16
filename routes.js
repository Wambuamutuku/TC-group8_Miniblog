let posts = [];

// Display all posts
app.get('/', (req, res) => {
    res.render('index', { posts });
});

// Show form to create a post
app.get('/create', (req, res) => {
    res.render('create');
});

// Add a new post
app.post('/create', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content });
    res.redirect('/');
});

// Delete a post
app.post('/delete', (req, res) => {
    const { index } = req.body;
    posts.splice(index, 1);  // Removes the post at the specified index
    res.redirect('/');
});
 
// Update an existing post
app.post('/update', (req, res) => {
    const { index, title, content } = req.body;
    posts[index] = { title, content };  // Updates the post
    res.redirect('/');
});


