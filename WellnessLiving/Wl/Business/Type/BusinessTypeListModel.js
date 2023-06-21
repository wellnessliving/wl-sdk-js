/**
 * An API endpoint that retrieves a list of business types.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Type_BusinessTypeListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Type_BusinessTypeListModel_a_business_type
   * @property {string} k_business_type Key of business type.
   * @property {string} text_title Title of business type.
   */

  /**
   * A list of business types. Each element has the next structure: <dl>
   *  <dt>string <var>k_business_type</var></dt>
   *  <dd>Key of business type.</dd>
   *  <dt>string <var>text_title</var></dt>
   *  <dd>Title of business type.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Type_BusinessTypeListModel_a_business_type[]}
   */
  this.a_business_type = [];

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Type_BusinessTypeListModel);

/**
 * @inheritDoc
 */
Wl_Business_Type_BusinessTypeListModel.prototype.config=function()
{
  return {"a_field": {"a_business_type": {"get": {"result": true}}}};
};