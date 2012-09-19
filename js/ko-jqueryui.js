(function ($) {
	ko.bindingHandlers.slider = {
		init: function (element, valueAccessor, allBindingsAccessor, viewModel, context) {
			console.log("slider.init");
			var sharedLimit = allBindingsAccessor().sharedLimit;
			var sharedValue = allBindingsAccessor().sharedValue;
			var oldValue = valueAccessor()();
			var sliderOptions = {
				/* Main functions. */
				disabled: allBindingsAccessor().disable,
				min: allBindingsAccessor().min || 0,
				max: allBindingsAccessor().max || 100,
				range: 'min',
				step: allBindingsAccessor().step || null,
				value: valueAccessor()(),
				slide: function (event, ui) {
					var delta = ui.value - oldValue;
					console.log(delta);
					if (ko.utils.unwrapObservable(sharedValue) + delta > ko.utils.unwrapObservable(sharedLimit)) {
						return false;
					} else {
						valueAccessor()(ui.value);
					}

					oldValue = valueAccessor()();
				},
				change: function (event, ui) {

				}
			}

			/* Options. */
			if (allBindingsAccessor().jqOptions) {
				sliderOptions.animate = allBindingsAccessor().jqOptions.animate || false;
				sliderOptions.orientation = allBindingsAccessor().jqOptions.orientation || "horizontal";
			}

			$(element).slider(sliderOptions);
		},
		update: function (element, valueAccessor, allBindingsAccessor, viewModel, context) {
			$(element).slider("value", valueAccessor()());
		}
	}

	ko.bindingHandlers.selectable = {
		init: function (element, valueAccessor, allBindingsAccessor, viewModel, context) {
			console.log("selectable.init");
			console.log(allBindingsAccessor());

			var selectableOptions = {
				/* Main functions. */
				disabled: allBindingsAccessor().disable,
				stop: function (event, ui) {
					console.log(allBindingsAccessor().foreach());
					$(element).find(".ui-selected");
				}
			}

			$(element).selectable(selectableOptions);
		},
		update: function (element, valueAccessor, allBindingsAccessor, viewModel, context) {

		}
	}
})(jQuery);
