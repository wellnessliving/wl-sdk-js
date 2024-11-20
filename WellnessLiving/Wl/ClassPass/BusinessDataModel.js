/**
 * Returns information about a partners.
 *
 * Dispatched URL: <tt>/cp/v1/partners/{partner_id}</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_BusinessDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Information about partner
   *
   * @get result
   * @type {{}}
   */
  this.partner = undefined;

  /**
   * Partner ID.
   *
   * @get get
   * @type {string}
   */
  this.s_partner = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_BusinessDataModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_BusinessDataModel.prototype.config=function()
{
  return {"a_field": {"partner": {"get": {"result": true}},"s_partner": {"get": {"get": true}}}};
};