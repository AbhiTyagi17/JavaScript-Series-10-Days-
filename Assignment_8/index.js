// 1 Question: How do you use a callback to handle an asynchronous task?


function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'Alice' };
    callback(null, data);  
  }, 2000);
}

fetchData((error, result) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data received:', result);
  }
});

// 2. Question: Rewrite the callback-based function to use Promises.

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: 'Alice' };
      if (data) {
        resolve(data);
      } else {
        reject('No data found');
      }
    }, 2000);
  });
}

fetchData()
  .then(result => console.log('Data received:', result))
  .catch(error => console.error('Error:', error));



//   3. Question: How do you use async/await to simplify Promise handling?

async function getUser() {
  try {
    const data = await fetchData();
    console.log('User data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUser();



// 4. Question: How do you fetch multiple async operations in parallel?

function fetchPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Post1', 'Post2', 'Post3']);
    }, 2000);
  });
}

async function fetchUserAndPosts() {
  try {
    const [user, posts] = await Promise.all([fetchData(), fetchPosts()]);
    console.log('User:', user);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUserAndPosts();

// 5. Question: How do you handle errors in async code?

function fetchWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Fetching failed!');
    }, 2000);
  });
}

async function testErrorHandling() {
  try {
    const result = await fetchWithError();
    console.log('Result:', result);
  } catch (err) {
    console.error('Caught an error:', err);
  }
}

testErrorHandling();



