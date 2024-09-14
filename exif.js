const exifr = require("exifr");

const test = async () => {
  let options = {
    // setting false on these blocks does not read them at all, except for IFD0 which is necessary
    // because it contains pointer to GPS IFD. Though no tag values are read and once GPS pointer
    // is found the IFD0 search-through ends.
    ifd0: false,
    exif: false,
    // Instead of `true` you can use array of tags to read. All other tags are not read at all.
    // You can use string tag names as well as their numeric code. In this example 0x0004 = GPSLongitude
    gps: ["GPSLatitudeRef", "GPSLatitude", 0x0003, 0x0004],
    interop: false,
    ifd1: false, // thumbnail
  };
  const imgUrl = "./image2.jpeg";
  const gps = await exifr.parse(imgUrl, options);
  console.log("gps", gps);
};

test();
