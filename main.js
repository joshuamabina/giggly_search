const form = document.getElementById('searchForm');
form.addEventListener('submit', function(e){
    e.preventDefault(); // keep page from reloading

    const q = document.getElementById('q').value.trim();
    if(!q) {
        alert('Please type a search query; we love curiosity!');
        return;
    }

    // collect some other inputs to show how to access values
    const includeImages = !!form.querySelector('input[name="images"]:checked');
    const includeVideos = !!form.querySelector('input[name="videos"]:checked');
    const type = form.querySelector('input[name="type"]:checked').value;
    const sort = form.querySelector('select[name="sort"]').value;

    // simple alert to the user; could be replaced with a results page
    alert(`You searched for: "${q}"\nInclude images: ${includeImages}\nInclude videos: ${includeVideos}\nType: ${type}\nSort: ${sort}`);

    console.log('Search submitted:', {q, includeImages, includeVideos, type, sort});
});