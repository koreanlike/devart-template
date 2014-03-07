var VoicingType = (function(opentype, Snap, _) {

	var VoicingType = function() {
		this.container = null;
		this.context = null;
		this.font = null;
		this.fontSize = 80;
		this.characters = [];
	}

	VoicingType.prototype.setContainer = function(container) {
		this.container = container;
		this.context = Snap(container);
	}

	VoicingType.prototype.init = function() {
		var path = this.getCharacterPath("ABCD");
		var character = this.context.path(this.pathToSvg(path.commands));
		character.attr({ stroke: "#000" });

	}

	VoicingType.prototype.findModifiedCharacter = function(character) {
		return _.find(this.characters, function(c) {
			return c == character.type;
		});
	}

	VoicingType.prototype.loadFont = function(url) {
		var self = this;
		opentype.load(url, function(err, font) {
			self.font = font;
			console.log(font);
			self.init();
		});
	}

	VoicingType.prototype.getCharacterPath = function(character) {
		return this.font.getPath(character, 30, 100, this.fontSize);
	}

	VoicingType.prototype.pathToSvg = function(path) {
		var svgStr = "";
		for (var i = 0; i < path.length; i++) {
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

	// 	// character.animate({
	// 	// 	path: "M10,30L20,10L50,70Z"
	// 	// }, 3000);

	return VoicingType;

})(opentype, Snap, _);