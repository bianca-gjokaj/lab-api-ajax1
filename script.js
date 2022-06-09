const redditResponse = fetch('https://www.reddit.com/r/aww/.json')
.then((res) => res.json())
.then((jsonData) => {
  console.log(jsonData.data.children)


  const arrayList = jsonData.data.children.slice(0, 10);
  const ul = document.createElement('ul')
  document.body.appendChild(ul);



  arrayList.forEach(reddit => {
    const arrayLi = document.createElement('li')
    arrayLi.innerText = reddit.data.title
    ul.appendChild(arrayLi)
    
    const arrayImg = document.createElement('img');
    arrayImg.src = reddit.data.thumbnail
    ul.appendChild(arrayImg)

    const url = `https://www.reddit.com${reddit.data.permalink}`
    ul.append(url)
  });
});
