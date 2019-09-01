# Image-Classification-TFJS
 Image Classification using Tensorflow.js library, could be tested by [this link](https://mrcrambo.github.io/Image-Classification-TFJS/)

## About

Simple project for image classification using `MobileNet` library with `tensorflow.js`. 

What happens:
```javascript
...
// load image from your disk
// look to this function for understanding how to do it -> https://github.com/MrCrambo/Image-Classification-TFJS/blob/master/static/js/main.js#L12

...
// after loading image to the html load mobilenet model
// do it only one time for saving user time if he will decide to classify other images
net = await mobilenet.load();
...

// then pass your image to classify function and get 3 most possible results
const result = await net.classify(your image element);
...

// then show results
// that's it!
```

## Usage

In case you will try to build it on your way, just remove `index.html` file from sourse and leave it only in `templates` folder, then follow instructions below:

- Clone the repo
```bash
$ git clone https://github.com/MrCrambo/Image-Classification-Flask.git
```
- Install Flask
```bash
$ pip install flask
```
- Run with Python
```bash
$ python app.py
```
- Test it in [localhost:5000](http://localhost:5000)


![working](https://user-images.githubusercontent.com/14878297/63980308-d3103900-cac3-11e9-89ff-8b90284f52b4.gif)

## Customization

- Use your pre-trained model
- Use pre-trained models like `NASNet`, etc.
- Change UI/UX design

## Ideas To Do

- Recognition of car brands
- Finding facebook profile by only one photo
- Country or place recognition by photo
