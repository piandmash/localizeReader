# Localize Reader

This is our easy to use globalization and localization resource delivery module.

It works on the server and in the browser.  

Reference it within your package or install with ``npm install lcoalizereader``

Add to your web pages by downloading the lib/localizereader.min.js file and adding it your site.

## Overview

This module is used to return a localized version of an object based on a culture provided.

The culture is expected in language-COUNTRY format e.g. en-GB (see below for full list of standard cultures)

The get function will fall back in the following order:
* looks for the matching culture value (e.g. de-DE)
* looks for a matching language value (e.g. de)
* returns the first in the listing

## Examples

A basic string example
```javascript
	var locals = { 
		'en': 'Local hi', 
		'de': 'German (de) Local hi', 
		'de-DE': 'German (de-DE) Local hi' 
	};
	
	var result = localizeReader.get(locals); //returns 'Local hi' 
	var result = localizeReader.get(locals, 'en'); //returns 'Local hi' 	
	var result = localizeReader.get(locals, 'de'); //returns 'German (de) Local hi' 	
	var result = localizeReader.get(locals, 'de-DE'); //returns 'German (de-DE) Local hi' 
	var result = localizeReader.get(locals, 'de-AT'); //returns 'German (de) Local hi' 		
	var result = localizeReader.get(locals, 'does not exist!'); //returns 'Local hi' 
```

An object example

```javascript
	var locals = { 
		'en': { 'message': 'Local hi' }, 
		'de': { 'message': 'German (de) Local hi' }, 
		'de-DE': { 'message': 'German (de-DE) Local hi' }
	};
	
	var result = localizeReader.get(locals); //returns { 'message': 'Local hi' } 
	var result = localizeReader.get(locals, 'en'); //returns { 'message': 'Local hi' }	
	var result = localizeReader.get(locals, 'de'); //returns { 'message': 'German (de) Local hi' }
	var result = localizeReader.get(locals, 'de-DE'); //returns { 'message': 'German (de-DE) Local hi' }
	var result = localizeReader.get(locals, 'de-AT'); //returns { 'message': 'German (de) Local hi' }		
	var result = localizeReader.get(locals, 'does not exist!'); //returns { 'message': 'Local hi' }
```

## Tests

To test in a browser load up [test/index.html](test/index.html)

To run node tests run ``node test.js``

## Language Cultures

* Afrikaans - South Africa = af-ZA 
* Albanian - Albania = sq-AL 
* Arabic - Algeria = ar-DZ 
* Arabic - Bahrain = ar-BH 
* Arabic - Egypt = ar-EG 
* Arabic - Iraq = ar-IQ 
* Arabic - Jordan = ar-JO 
* Arabic - Kuwait = ar-KW 
* Arabic - Lebanon = ar-LB
* Arabic - Libya = ar-LY 
* Arabic - Morocco = ar-MA 
* Arabic - Oman = ar-OM 
* Arabic - Qatar = ar-QA
* Arabic - Saudi Arabia = ar-SA 
* Arabic - Syria = ar-SY 
* Arabic - Tunisia = ar-TN 
* Arabic - United Arab Emirates = ar-AE 
* Arabic - Yemen = ar-YE 
* Armenian - Armenia = hy-AM 
* Azeri (Cyrillic) - Azerbaijan = Cy-az-AZ 
* Azeri (Latin) - Azerbaijan = Lt-az-AZ 
* Basque - Basque = eu-ES 
* Belarusian - Belarus = be-BY 
* Bulgarian - Bulgaria = bg-BG 
* Catalan - Catalan = ca-ES 
* Chinese - China = zh-CN 
* Chinese - Hong Kong SAR = zh-HK 
* Chinese - Macau SAR = zh-MO 
* Chinese - Singapore = zh-SG 
* Chinese - Taiwan = zh-TW 
* Chinese (Simplified) = zh-CHS 
* Chinese (Traditional) = zh-CHT
* Croatian - Croatia = hr-HR 
* Czech - Czech Republic = cs-CZ 
* Danish - Denmark = da-DK 
* Dhivehi - Maldives = div-MV 
* Dutch - Belgium = nl-BE 
* Dutch - The Netherlands = nl-NL 
* English - Australia = en-AU 
* English - Belize = en-BZ 
* English - Canada = en-CA 
* English - Caribbean = en-CB 
* English - Ireland = en-IE 
* English - Jamaica = en-JM 
* English - New Zealand = en-NZ 
* English - Philippines = en-PH 
* English - South Africa = en-ZA 
* English - Trinidad and Tobago = en-TT 
* English - United Kingdom = en-GB 
* English - United States = en-US 
* English - Zimbabwe = en-ZW 
* Estonian - Estonia = et-EE 
* Faroese - Faroe Islands = fo-FO 
* Farsi - Iran = fa-IR 
* Finnish - Finland = fi-FI 
* French - Belgium = fr-BE 
* French - Canada = fr-CA 
* French - France = fr-FR 
* French - Luxembourg = fr-LU 
* French - Monaco = fr-MC 
* French - Switzerland = fr-CH 
* Galician - Galician = gl-ES 
* Georgian - Georgia = ka-GE 
* German - Austria = de-AT 
* German - Germany = de-DE 
* German - Liechtenstein = de-LI 
* German - Luxembourg = de-LU 
* German - Switzerland = de-CH 
* Greek - Greece = el-GR 
* Gujarati - India = gu-IN 
* Hebrew - Israel = he-IL 
* Hindi - India = hi-IN 
* Hungarian - Hungary = hu-HU 
* Icelandic - Iceland = is-IS 
* Indonesian - Indonesia = id-ID 
* Italian - Italy = it-IT 
* Italian - Switzerland = it-CH 
* Japanese - Japan = ja-JP 
* Kannada - India = kn-IN 
* Kazakh - Kazakhstan = kk-KZ 
* Konkani - India = kok-IN 
* Korean - Korea = ko-KR 
* Kyrgyz - Kazakhstan = ky-KZ 
* Latvian - Latvia = lv-LV 
* Lithuanian - Lithuania = lt-LT 
* Macedonian (FYROM)= mk-MK 
* Malay - Brunei = ms-BN 
* Malay - Malaysia = ms-MY 
* Marathi - India = mr-IN 
* Mongolian - Mongolia = mn-MN 
* Norwegian (Bokmål) - Norway = nb-NO 
* Norwegian (Nynorsk) - Norway = nn-NO 
* Polish - Poland = pl-PL 
* Portuguese - Brazil = pt-BR 
* Portuguese - Portugal = pt-PT 
* Punjabi - India = pa-IN 
* Romanian - Romania = ro-RO 
* Russian - Russia = ru-RU 
* Sanskrit - India = sa-IN 
* Serbian (Cyrillic) - Serbia = Cy-sr-SP 
* Serbian (Latin) - Serbia = Lt-sr-SP 
* Slovak - Slovakia = sk-SK 
* Slovenian - Slovenia = sl-SI 
* Spanish - Argentina = es-AR 
* Spanish - Bolivia = es-BO 
* Spanish - Chile = es-CL 
* Spanish - Colombia = es-CO 
* Spanish - Costa Rica = es-CR 
* Spanish - Dominican Republic = es-DO 
* Spanish - Ecuador = es-EC 
* Spanish - El Salvador = es-SV 
* Spanish - Guatemala = es-GT 
* Spanish - Honduras = es-HN 
* Spanish - Mexico = es-MX 
* Spanish - Nicaragua = es-NI 
* Spanish - Panama = es-PA 
* Spanish - Paraguay = es-PY 
* Spanish - Peru = es-PE 
* Spanish - Puerto Rico = es-PR 
* Spanish - Spain = es-ES 
* Spanish - Uruguay = es-UY 
* Spanish - Venezuela = es-VE 
* Swahili - Kenya = sw-KE 
* Swedish - Finland = sv-FI 
* Swedish - Sweden = sv-SE 
* Syriac - Syria = syr-SY 
* Tamil - India = ta-IN 
* Tatar - Russia = tt-RU 
* Telugu - India = te-IN 
* Thai - Thailand = th-TH 
* Turkish - Turkey = tr-TR 
* Ukrainian - Ukraine = uk-UA 
* Urdu - Pakistan = ur-PK 
* Uzbek (Cyrillic) - Uzbekistan = Cy-uz-UZ 
* Uzbek (Latin) - Uzbekistan = Lt-uz-UZ 
* Vietnamese - Vietnam = vi-VN 


***************************************************

# License

Copyright (c) 2013 PI & Mash

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.