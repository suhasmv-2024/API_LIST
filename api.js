document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results');
    const searchBar = document.getElementById('searchBar');
    let data = [];

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            data = await response.json();
            displayData(data);
        } catch (error) {
            resultsContainer.innerHTML = '<p>Failed to fetch data.</p>';
        }
    };

    // Function to display data
    const displayData = (data) => {
        resultsContainer.innerHTML = '';
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('list-item');
            itemDiv.innerText = `${item.id}: ${item.title}`;
            resultsContainer.appendChild(itemDiv);
        });
    };

    // Function to filter data
    const filterData = (query) => {
        const filteredData = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        displayData(filteredData);
    };

    // Event listener for the search bar
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value;
        filterData(query);
    });

    // Fetch data on page load
    fetchData();
});
