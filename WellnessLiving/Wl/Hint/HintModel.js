/**
 * Manages work of hints.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Hint_HintModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of hints that should be displayed sequentially.
   *
   * Template should be placed in <tt>Wl\Hint\Xml</tt> as a single xml file.
   *
   * @put post
   * @type {string[]}
   */
  this.a_template = [];

  /**
   * Name of the hint`s xml to be shown. An empty string if none of the hints should be shown.
   *
   * @put result
   * @type {boolean}
   */
  this.text_template_show = undefined;

  /**
   * The user who will be shown a hint.
   *
   * @put post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Hint_HintModel);

/**
 * @inheritDoc
 */
Wl_Hint_HintModel.prototype.config=function()
{
  return {"a_field": {"a_template": {"put": {"post": true}},"text_template_show": {"put": {"result": true}},"uid": {"put": {"post": true}}}};
};