# Voicing Type

## Authors
Daeik Kim

## Description

Thanks to great softwares with advanced Graphic User Interface to design typefaces, number of digital fonts has increased extensively and been more available for people. However, as people started using more digital fonts in digital environments, users have slowly lost their own handwriting styles that once refelected themselves and brought joy of writing. Voicing Type is a project eagers to lower bars to design characteristic digital typefaces by using people's individual voice, and to help people having and using their own digital fonts in True Type Font format that contain their voices.

Voicing Type started and submitted as a final project of Visual Programming class, one of Hongik University(in South Korea)'s interactive media design lectures. The project was proposed and developed to explorer unconventional ways of designing typefaces; real time audio inputs, specifically voices of people and sounds of various environments, are used to modify existing fonts for this project to contain sounds in generated fonts.

Initially, Voicing Type was built on Processing(Java) environment, but to make Voicing Type more be accessible by ranges of people, web-based technologies, such as HTML5 audio API and SVG, will be used to rebuild and to improve Voicing Type as a web application.


## Link to Prototype


## Example Code

```javascript
//Fetch a web font(.ttf) to generate font object
var url = "http://themes.googleusercontent.com/static/fonts/opensans/v8/PRmiXeptR36kaC0GEAetxg89PwPrYLaRFJ-HNCU9NbA.ttf";
var voicingType = new VoicingType();
voicingType.loadFont(url);
```


## Links to External Libraries

[Google Web Font API](https://developers.google.com/apis-explorer/#p/webfonts/v1/)
[Opentype.js](https://github.com/nodebox/opentype.js)
[Snap.svg](http://snapsvg.io/)
[Angular.js](http://angularjs.org/)
[Express.js](http://expressjs.com/)
[MongoDB](http://www.mongodb.org/)


## Images & Videos