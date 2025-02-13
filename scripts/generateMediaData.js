const fs = require("fs");

const generateData = () => {
  const data = {};

  for (let workId = 1; workId <= 11; workId++) {
    data[workId] = [];

    // Add 10 images
    for (let imgIndex = 1; imgIndex <= 10; imgIndex++) {
      data[workId].push({
        id: `img${imgIndex}`,
        type: "image",
        src: `/images/work${workId}-image${imgIndex}.jpg`,
        title: `Work ${workId} Image ${imgIndex}`,
      });
    }

    // Add 5 videos
    for (let vidIndex = 1; vidIndex <= 5; vidIndex++) {
      data[workId].push({
        id: `vid${vidIndex}`,
        type: "video",
        src: `https://stream.mux.com/playback-id${workId}-${vidIndex}.m3u8`,
        title: `Work ${workId} Video ${vidIndex}`,
        tags: [`work${workId}`, `video${vidIndex}`],
      });
    }
  }

  return data;
};

// Generate the data
const jsonData = generateData();

// Write the data to a file
fs.writeFileSync("media.json", JSON.stringify(jsonData, null, 2));

console.log("JSON data generated successfully!");
