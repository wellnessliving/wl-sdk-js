/**
 * Loads list of curves partner for editor.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Curves_Partner_PartnerListModel()
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

WlSdk_ModelAbstract.extend(Wl_Integration_Curves_Partner_PartnerListModel);

/**
 * @inheritDoc
 */
Wl_Integration_Curves_Partner_PartnerListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}}}};
};