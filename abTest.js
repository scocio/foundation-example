/*
* class: abTest
* author: Scott Schute
* description: class to assign dom target, set of options and assign to a cookie
* requires: js.cookie.js
* assumptions: assumes target and options have been set. Also assumes setRandomOption has been called prior to saveCookie
*/
	var abTest = function(){
		this.testTarget = null;
		this.testOptions = null;
		this.selectedItem = null;
	};

	abTest.prototype = {

		setTarget: function(testTarget) {
			this.testTarget = testTarget;
		},

		getTarget: function() {
			return this.testTarget;
		},

		setOptions: function(testOptions){
			this.testOptions = testOptions;
		},

		setRandomOption: function(){
			this.selectedItem = this.testOptions[Math.floor(Math.random()*this.testOptions.length)];
			this.saveCookie();
			console.log('option set to ' + this.selectedItem);
		},

		getSelectedItem: function(){
			var value = Cookies.get(this.testTarget);
			if(value)
				this.selectedItem = value;
			return this.selectedItem;
		},

		saveCookie: function(){
			Cookies.set(this.testTarget, this.selectedItem);
		},

		show: function(testTarget){
			var value = Cookies.get(testTarget);
			$('#'+testTarget+'-'+value).show();
		}
	};