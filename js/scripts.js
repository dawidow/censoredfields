(function() {

	class CensoredField {
		constructor(field, restrictedWords) {
			this._field = field;
			this._words = restrictedWords.split(/, */);
			this._regex = new RegExp('(' + this._words.join("|") + ')', 'igm');

			this._assignEvents();
		}

		_censorSigns = '!@#$%^&*'.split('');

		_assignEvents = () => {
			this._field.addEventListener('keyup', this._fielterMessage = e => {
				this._field.value = this._field.value.replace(this._regex, (match) => {
					return this._censorWord(match);
				});
			}, false);
		};

		_censorWord = (word) => {
			let censored = "",
				random = 0;

			for(let i = 0; i < word.length; i++) {
				random = Math.round( Math.random() * (this._censorSigns.length - 1 - 0) + 0 );
				censored += this._censorSigns[random];
			}

			return censored;
		};
	}

	const cf1 = new CensoredField(
		document.querySelector("[name='your-message']"),
		"idiota, kretyn, śmieć, gałgan, fajtłapa"
	);

})();