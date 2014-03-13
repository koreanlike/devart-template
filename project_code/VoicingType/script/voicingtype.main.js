var VoicingType = (function(opentype, Snap, _) {

	var VoicingType = function() {
		this.API_KEY = 'AIzaSyCoIBI7DnbqEkjX1lI9wz4bx4h8tT60MBo';
		this.webfontApiUrl = 'https://www.googleapis.com/webfonts/v1/webfonts?key='+this.API_KEY+'&sort=popularity';

		this.container = null;
		this.context = null;
		this.availableFonts = null;
		this.font = null;
		this.fontSize = 48;
		this.characters = [ ];
	}

	VoicingType.prototype.setContainer = function(container) {
		this.container = container;
		this.context = Snap(container);
	}

	VoicingType.prototype.init = function() {
		var self = this;
		var glyphs = [];
		this.getFontList(function(fonts) {
			// Loop through all the fonts
			for (var i = 0; i < fonts.length; i++) {
				var font = null;
				if (fonts[i].files.regular != '') {
					opentype.load(fonts[i].files.regular, function(err, loadedFont) {
						if (loadedFont !== undefined) {
							var context = Snap(100, 100);
							font = loadedFont;
							var path = font.getPath('a', 30, 60, self.fontSize);
							var svgPath = self.pathToSvg(path.commands);
							var character = context.path(svgPath);
							character.attr({ fill: '#000' });
						}
					});
				}
			};
		});
	}

	VoicingType.prototype.getFontList = function(callback) {
		var self = this;
		var req = new XMLHttpRequest();
		req.open('GET', this.webfontApiUrl, true);
		req.send(null);

		req.onreadystatechange = function() {			
			if (req.readyState == 4) {
				if (req.status == 200) {
					res = req.responseText;
					var list = JSON.parse(res);
					self.availableFonts = list.items;
					callback(self.availableFonts);
				}
			}
		}
	}

	VoicingType.prototype.loadFont = function(url) {
		var self = this;
		opentype.load(url, function(err, font) {
			self.font = font;
			// console.log(font);
			self.init();
		});
	}

	VoicingType.prototype.render = function() {
		var path = this.getCharacterPath("x");
		var character = this.context.path(this.pathToSvg(path.commands));
		character.attr({ stroke: "#000" });
	}

	VoicingType.prototype.findModifiedCharacter = function(character) {
		return _.find(this.characters, function(c) {
			return c == character.type;
		});
	}

	VoicingType.prototype.getCharacterPath = function(character) {
		return this.font.getPath(character, 30, 30, this.fontSize);
	}

	VoicingType.prototype.pathToSvg = function(path) {
		var svgStr = "";
		for (var i = 0; i < path.length; i+=3) {
			var point = path[i];
			var type = point.type;
			switch (type) {
				case 'M':
					svgStr += type + " " + point.x + "," + point.y + " ";
					break;
				case 'L':
					svgStr += type + " " + point.x + "," + point.y + " ";
					break;
				case 'Z':
					svgStr += type + " ";
					break;
				case 'H':
					svgStr += type + " " + point.x + " ";
					break;
				case 'V':
					svgStr += type + " " + point.y + " ";
					break;
				case 'C':
					svgStr += type + " " + point.x1 + "," + point.y1 + " "  + point.x2 + "," + point.y2 + " " + point.x + "," + point.y + " ";
					break;
				case 'S':
					svgStr += type + " " + point.x2 + "," + point.y2 + " " + point.x + "," + point.y + " ";
					break;
				case 'Q':
					svgStr += type + " " + point.x1 + "," + point.y1 + " " + point.x + "," + point.y + " ";
					break;
				case 'T':
					svgStr += type + " " + point.x + "," + point.y + " ";
					break;
				// case 'A':
				// 	svgStr += type + " " + point.x + "," + point.y + " ";
				// 	break;
				// case 'R':
				// 	svgStr += type + " " + point.x + "," + point.y + " ";
				// 	break;
			}
		}
		return svgStr;
	}


	return VoicingType;

})(opentype, Snap, _);