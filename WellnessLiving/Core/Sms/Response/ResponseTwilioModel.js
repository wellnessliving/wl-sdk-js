/**
 * Webhook for the event when the client reply to sent SMS to them.
 *
 * <b>Attention!</b>
 * You can't move this API in another namespace. This API use for webhook in the Twilio account.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Sms_Response_ResponseTwilioModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Smart encoding array.
   *
   * @get get
   * @type {{}|string[]}
   */
  this.a_smart_encoding = {"\u00AB": "\"","\u00BB": "\"","\u201C": "\"","\u201D": "\"","\u02BA": "\"","\u02EE": "\"","\u201F": "\"","\u275D": "\"","\u275E": "\"","\u301D": "\"","\u301E": "\"","\uFF02": "\"","\u2018": "'","\u2019": "'","\u02BB": "'","\u02C8": "'","\u02BC": "'","\u02BD": "'","\u02B9": "'","\u201B": "'","\uFF07": "'","\u00B4": "'","\u02CA": "'","`": "'","\u02CB": "'","\u275B": "'","\u275C": "'","\u0313": "'","\u0314": "'","\uFE10": "'","\uFE11": "'","\u00F7": "\/","\u00BC": "1\/4","\u00BD": "1\/2","\u00BE": "3\/4","\u29F8": "\/","\u0337": "\/","\u0338": "\/","\u2044": "\/","\u2215": "\/","\uFF0F": "\/","\u29F9": "\\","\u29F5": "\\","\u20E5": "\\","\uFE68": "\\","\uFF3C": "\\","\u0332": "_","\uFF3F": "_","\u20D2": "|","\u20D3": "|","\u2223": "|","\uFF5C": "|","\u23B8": "|","\u23B9": "|","\u23D0": "|","\u239C": "|","\u239F": "|","\u23BC": "-","\u23BD": "-","\u2015": "-","\uFE63": "-","\uFF0D": "-","\u2010": "-","\u2022": "-","\u2043": "-","\uFE6B": "@","\uFF20": "@","\uFE69": "$","\uFF04": "$","\u01C3": "!","\uFE15": "!","\uFE57": "!","\uFF01": "!","\uFE5F": "#","\uFF03": "#","\uFE6A": "%","\uFF05": "%","\uFE60": "&","\uFF06": "&","\u0326": ",","\uFE50": ",","\u3001": ",","\uFE51": ",","\uFF0C": ",","\uFF64": ",","\u2768": "(","\u276A": "(","\uFE59": "(","\uFF08": "(","\u27EE": "(","\u2985": "(","\u2769": ")","\u276B": ")","\uFE5A": ")","\uFF09": ")","\u27EF": ")","\u2986": ")","\u204E": "*","\u2217": "*","\u229B": "*","\u2722": "*","\u2723": "*","\u2724": "*","\u2725": "*","\u2731": "*","\u2732": "*","\u2733": "*","\u273A": "*","\u273B": "*","\u273C": "*","\u273D": "*","\u2743": "*","\u2749": "*","\u274A": "*","\u274B": "*","\u29C6": "*","\uFE61": "*","\uFF0A": "*","\u02D6": "+","\uFE62": "+","\uFF0B": "+","\u3002": ".","\uFE52": ".","\uFF0E": ".","\uFF61": ".","\uFF10": "0","\uFF11": "1","\uFF12": "2","\uFF13": "3","\uFF14": "4","\uFF15": "5","\uFF16": "6","\uFF17": "7","\uFF18": "8","\uFF19": "9","\u02D0": ":","\u02F8": ":","\u2982": ":","\uA789": ":","\uFE13": ":","\uFF1A": ":","\u204F": ";","\uFE14": ";","\uFE54": ";","\uFF1B": ";","\uFE64": "\<","\uFF1C": "\<","\u0347": "=","\uA78A": "=","\uFE66": "=","\uFF1D": "=","\uFE65": "\>","\uFF1E": "\>","\uFE16": "?","\uFE56": "?","\uFF1F": "?","\uFF21": "A","\u1D00": "A","\uFF22": "B","\u0299": "B","\uFF23": "C","\u1D04": "C","\uFF24": "D","\u1D05": "D","\uFF25": "E","\u1D07": "E","\uFF26": "F","\uA730": "F","\uFF27": "G","\u0262": "G","\uFF28": "H","\u029C": "H","\uFF29": "I","\u026A": "I","\uFF2A": "J","\u1D0A": "J","\uFF2B": "K","\u1D0B": "K","\uFF2C": "L","\u029F": "L","\uFF2D": "M","\u1D0D": "M","\uFF2E": "N","\u0274": "N","\uFF2F": "O","\u1D0F": "O","\uFF30": "P","\u1D18": "P","\uFF31": "Q","\uFF32": "R","\u0280": "R","\uFF33": "S","\uA731": "S","\uFF34": "T","\u1D1B": "T","\uFF35": "U","\u1D1C": "U","\uFF36": "V","\u1D20": "V","\uFF37": "W","\u1D21": "W","\uFF38": "X","\uFF39": "Y","\u028F": "Y","\uFF3A": "Z","\u1D22": "Z","\u02C6": "^","\u0302": "^","\uFF3E": "^","\u1DCD": "^","\u2774": "{","\uFE5B": "{","\uFF5B": "{","\u2775": "}","\uFE5C": "}","\uFF5D": "}","\uFF3B": "[","\uFF3D": "]","\u02DC": "~","\u02F7": "~","\u0303": "~","\u0330": "~","\u0334": "~","\u223C": "~","\uFF5E": "~","\u00A0": "'","\u2000": "'","\u2001": "","\u2002": "","\u2003": "","\u2004": "","\u2005": "","\u2006": "","\u2007": "","\u2008": "","\u2009": "","\u200A": "","\u200B": "","\u202F": "","\u205F": "","\u3000": "","\uFEFF": "","\u008D": "","\u009F": "","\u0080": "","\u0090": "","\u009B": "","\u0010": "","\t": "","\u0000": "","\u0003": "","\u0004": "","\u0017": "","\u0019": "","\u0011": "","\u0012": "","\u0013": "","\u0014": "","\u2017": "_","\u2014": "-","\u2013": "-","\u201A": "'","\u2039": "\>","\u203A": "\<","\u203C": "!!","\u201E": "\"","\u2026": "...","\u2028": "","\u2029": "","\u2060": ""};

  /**
   * The phone number of the user who received SMS.
   *
   * @post post
   * @type {string}
   */
  this.From = undefined;

  /**
   * The phone number user who sent SMS.
   *
   * @post post
   * @type {string}
   */
  this.To = undefined;

  /**
   * Body of the SMS.
   *
   * @post post
   * @type {string}
   */
  this.Body = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Sms_Response_ResponseTwilioModel);

/**
 * @inheritDoc
 */
Core_Sms_Response_ResponseTwilioModel.prototype.config=function()
{
  return {"a_field": {"a_smart_encoding": {"get": {"get": true}},"From": {"post": {"post": true}},"To": {"post": {"post": true}},"Body": {"post": {"post": true}}}};
};