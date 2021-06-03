/**
 * Returns information about translated messages.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Locale_Message_InlineEditor_MessageDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of sources of translated messages to retrieve information about.
   *
   * In a case there are many messages, JSON-encoded string can be passed here.
   *
   * @post post
   * @type {string[]|string}
   */
  this.a_source = [];

  /**
   * Information about translated messages. Key is source of translated message. Value is an array where key is language ID and value is translation into given language.
   *
   * @post result
   * @type {{}}
   */
  this.a_translate = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Locale_Message_InlineEditor_MessageDataModel);

/**
 * @inheritDoc
 */
Core_Locale_Message_InlineEditor_MessageDataModel.prototype.config=function()
{
  return {"a_field": {"a_source": {"post": {"post": true}},"a_translate": {"post": {"result": true}}}};
};