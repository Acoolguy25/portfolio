fetch("https://api.github.com/users/acoolguy25/repos").then(data => data.json()).then((data) => {
    const githubList = document.getElementById('github-list');
    data.forEach(item => {
        if (item.name == "wiki"){
            item.name = "HKN Wiki"
            item.language = "HKN"
            item.description = "Forked version of HKN wiki with minor improvements"
        }
        // Create list item
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.margin = '30px 0';

        const link = document.createElement('a');
        link.href = item.svn_url;
        link.target = '_blank';
        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';
        link.style.width = '100%';
        link.style.display = 'flex';
        link.style.alignItems = 'center';
        link.style.backgroundColor = '#f9f9f9';
        link.style.borderRadius = '10px';
        link.style.padding = '20px';
        link.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';

        // Create rounded box container
        const box = document.createElement('div');
        box.style.display = 'flex';
        box.style.alignItems = 'center';
        box.style.backgroundColor = '#f9f9f9';
        box.style.borderRadius = '10px';
        box.style.padding = '20px';
        box.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        // box.style.maxWidth = '50000px';

        // Create image element
        const img = document.createElement('img');
        img.src = "/images/" + item["language"] + ".png";
        img.alt = item["language"];
        img.style.width = '100px';
        img.style.height = '100vm';
        img.style.borderRadius = '8px';
        img.style.marginRight = '15px';

        // Create text container
        const textContainer = document.createElement('div');
        
        // Create title
        const title = document.createElement('h3');
        title.textContent = item.name.replaceAll('-', ' ');
        title.style.margin = '0 0 10px 0';
        title.style.fontSize = '1.2em';

        // Create description
        const description = document.createElement('p');
        description.textContent = item.description? item.description: "No Description Found";
        description.style.margin = '0';
        description.style.color = '#555';

        const description2 = document.createElement('p');
        description2.textContent = "hi";
        description2.style.margin = '0';
        description2.style.color = '#555';
        description2.className = "justify-right"

        // Append elements
        textContainer.appendChild(title);
        textContainer.appendChild(description);
        link.appendChild(img);
        link.appendChild(textContainer);
        // link.appendChild(box)
        li.appendChild(link);
        githubList.appendChild(li);
    })
})