/**
 * API to work with one word, which can mark that product is digital.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Digital_Dictionary_DictionaryElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the word to get, change or remove.
   *
   * @delete get
   * @get get
   * @post get,result
   * @type {string}
   */
  this.k_digital_dictionary = undefined;

  /**
   * Text of the word.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_word = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Digital_Dictionary_DictionaryElementModel);

/**
 * @inheritDoc
 */
Wl_Digital_Dictionary_DictionaryElementModel.prototype.config=function()
{
  return {"a_field": {"k_digital_dictionary": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true}},"text_word": {"get": {"result": true},"post": {"post": true}}}};
};