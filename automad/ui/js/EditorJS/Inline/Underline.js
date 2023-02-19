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
 * Copyright (c) 2021 by Marc Anton Dahmen
 * https://marcdahmen.de
 *
 * Licensed under the MIT license.
 * https://automad.org/license
 */

class AutomadUnderline extends AutomadInlineTool {
	get shortcut() {
		return 'CMD+U';
	}

	static get title() {
		return 'Underline';
	}

	static get sanitize() {
		return {
			u: true,
		};
	}

	get tag() {
		return 'U';
	}

	get icon() {
		return '<path d="M15.2,1c0.3,0,0.6,0.3,0.6,0.6v8.5c0,3.1-2.3,5.1-5.8,5.1c-3.5,0-5.8-2.1-5.8-5.1V1.6C4.2,1.3,4.4,1,4.8,1h1.7 c0.3,0,0.6,0.3,0.6,0.6v8.3c0,1.6,1.1,2.8,2.9,2.8c1.7,0,2.9-1.2,2.9-2.8V1.6c0-0.3,0.3-0.6,0.6-0.6H15.2z"/><path d="M2.9,18.5v-1c0-0.2,0.2-0.5,0.5-0.5h13.2c0.2,0,0.4,0.2,0.4,0.5v1c0,0.2-0.2,0.5-0.4,0.5H3.4C3.1,19,2.9,18.8,2.9,18.5z"/>';
	}
}
