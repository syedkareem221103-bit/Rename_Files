const fs = require("fs");
const path = require("path");

const replaceThis = "ammi";
const replaceWith = "syed";
const previous = false;

const folder = __dirname;
const dataFolder = path.join(folder, "data");

fs.readdir(dataFolder, (err, data) => {

    if (err) {
        console.error("Error reading data folder:", err);
        return;
    }

    for (let index = 0; index < data.length; index++) {

        const item = data[index];

        const oldFile = path.join(dataFolder, item);

        const newName = item.replaceAll(replaceThis, replaceWith);
        const newFile = path.join(dataFolder, newName);

        if (!previous) {

            fs.rename(oldFile, newFile, (err) => {

                if (err) {
                    console.error("Rename failed:", err);
                    return;
                }

                console.log(
                    "Renamed: " + item + " → " + newName
                );

            });

        } else {

            if (item !== newName) {
                console.log(
                    "Would rename: " + item + " → " + newName
                );
            }

        }
    }
});