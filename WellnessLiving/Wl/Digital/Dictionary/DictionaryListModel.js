/**
 * API to work with list of words, which can mark that product is digital.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Digital_Dictionary_DictionaryListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of curves partner.
   *
   * @get result
   * @type {?{}[]}
   */
  this.a_list = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Digital_Dictionary_DictionaryListModel);

/**
 * @inheritDoc
 */
Wl_Digital_Dictionary_DictionaryListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}}}};
};