/*
 *                    ....
 *                  .:   '':.
 *                  ::::     ':..
 *                  ::.         ''..
 *       .:'.. ..':.:::'    . :.   '':.
 *      :.   ''     ''     '. ::::.. ..:
 *      ::::.        ..':.. .''':::::  .
 *      :::::::..    '..::::  :. ::::  :
 *      ::'':::::::.    ':::.'':.::::  :
 *      :..   ''::::::....':     ''::  :
 *      :::::.    ':::::   :     .. '' .
 *   .''::::::::... ':::.''   ..''  :.''''.
 *   :..:::'':::::  :::::...:''        :..:
 *   ::::::. '::::  ::::::::  ..::        .
 *   ::::::::.::::  ::::::::  :'':.::   .''
 *   ::: '::::::::.' '':::::  :.' '':  :
 *   :::   :::::::::..' ::::  ::...'   .
 *   :::  .::::::::::   ::::  ::::  .:'
 *    '::'  '':::::::   ::::  : ::  :
 *              '::::   ::::  :''  .:
 *               ::::   ::::    ..''
 *               :::: ..:::: .:''
 *                 ''''  '''''
 *
 *
 * AUTOMAD
 *
 * Copyright (c) 2014-2021 by Marc Anton Dahmen
 * https://marcdahmen.de
 *
 * Licensed under the MIT license.
 * https://automad.org/license
 */

/*
 * 	Add Custom Variable (page & shared)
 */

+(function (Automad, $, UIkit) {
	Automad.AddVariable = {
		selectors: {
			container: '#am-add-variable-container',
			modal: '#am-add-variable-modal',
			modalInput: '#am-add-variable-input',
			submit: '#am-add-variable-submit',
		},

		dataAttr: {
			errorName: 'data-am-error-name',
			errorExists: 'data-am-error-exists',
		},

		append: function (e) {
			// There must be an existing target container with the ID '#am-custom-variables'
			// within the page's markup. The created variable input will be appended to that target container.

			var a = Automad.AddVariable,
				u = Automad.Util,
				$submit = $(e.target),
				$container = $(a.selectors.container),
				$modalInput = $(a.selectors.modalInput),
				idPrefix = 'am-input-data-',
				name = $modalInput.val().replace(/[^\w\.\-]/g, '_');

			// Check if there is already a variable with the same name.
			if ($('#' + idPrefix + name).length == 0) {
				if (name) {
					$.post(
						'?controller=UI::field',
						{ name: name },
						function (data) {
							// Hide modal on success.
							UIkit.modal(a.selectors.modal).hide();

							// Reset value.
							$modalInput.val('');

							// Append field to data form.
							$container.append(data.html);

							// Focus new input.
							$('#' + idPrefix + name).focus();
						}
					);
				} else {
					Automad.Notify.error(
						$submit.data(u.dataCamelCase(a.dataAttr.errorName))
					);
				}
			} else {
				Automad.Notify.error(
					$submit.data(u.dataCamelCase(a.dataAttr.errorExists))
				);
			}
		},
	};

	$(document).on(
		'click',
		Automad.AddVariable.selectors.submit,
		Automad.AddVariable.append
	);
})((window.Automad = window.Automad || {}), jQuery, UIkit);
