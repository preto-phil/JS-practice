// Basic fetch request

async function logJSONData() {
  const response = await fetch("http://example.com/movies.json");
  const jsonData = await response.json();
  console.log(jsonData);
}

//// Supplying requests options

// Example POST method implementation:
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
    method: 'POST',
    mode: 'CORS',
    cache: 'no-cache',
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
  console.log(data); 
});

// Aborting a fetch

const controller = new AbortController();
const signal = controller.signal;
const url = 'video.mp4';

const downloadBtn = document.querySelector("#download");
const abortBtn = document.querySelector("#abort");

downloadBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(url, { signal });
    console.log('Download complete', response);
  } catch (error) {
    console.error(`Download error: ${error.message}`)
  }
});

abortBtn.addEventListener('click', () => {
  controller.abort();
  console.log('Download aborted');
})

// Uploading JSON data

async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("success: ", result);
  } catch (error) {
    console.error('Error: ', error);
  }
}

const data = { username: "example"};
postJSON(data);

// Uploading a file

async function upload(formData) {
  try {
    const response = await fetch('https://urlexample.com', {
      method: "PUT",
      body: formData,
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const photos = document.querySelector('input[type="file"][multiple]');
const formData = new FormData();

formData.append("title", "My Vegas Vacation");

for (const [i, photo] of Array.from(photos.files).entries()) {
  formData.append(`photos_${i}`, photo);
}

uploadMultiple(formData);

// Checking if fetch successful

async function fetchImage() {
  try {
    const response = await fetch('flowers.jpg');
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const myBlob = await response.blob();
    myImage.src = URL.createObjectURL(myBlob);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
