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
 * Inistialize Scrollbars plugin and watch scrolled elements (including the window).
 */

+(function (Automad, $) {
	Automad.Scrollbars = {
		defaults: {
			scrollToItem: false,
		},

		dataAttr: 'data-am-scroll-box',

		init: function () {
			var s = Automad.Scrollbars,
				u = Automad.Util;

			$('[' + s.dataAttr + ']').each(function () {
				var $box = $(this),
					options = $box.data(u.dataCamelCase(s.dataAttr)),
					settings = $.extend({}, s.defaults, options);

				// Apply scrollbar plugin.
				$box.mCustomScrollbar({
					scrollbarPosition: 'inside',
					theme: 'minimal-dark',
					autoHideScrollbar: true,
					scrollInertia: 50,
					scrollButtons: {
						enable: false,
					},
					callbacks: {
						onScroll: function () {
							$box.trigger('scrolled.automad');
						},
						onUpdate: function () {
							$box.trigger('scrolled.automad');
						},
					},
				});

				// If "scrollToItem" is set, initially scroll to that item.
				if (settings.scrollToItem) {
					var $item = $box.find(settings.scrollToItem);

					if ($item.length) {
						setTimeout(function () {
							if ($item.offset().top + 180 > $(window).height()) {
								$box.mCustomScrollbar(
									'scrollTo',
									function () {
										return (
											$item.offset().top -
											$(window).height() +
											180
										);
									},
									{ scrollInertia: 200 }
								);
							}
						}, 150);
					}
				}
			});
		},
	};

	$(document).ready(Automad.Scrollbars.init);
})((window.Automad = window.Automad || {}), jQuery);
