/**
 * Retrieves skin settings for customisation of client application.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_Application_SkinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Array with skin data. See {@link \Wl\Skin\Application\Application::field_list()} for details.
   *
   * @get result
   * @type {{}}
   */
  this.a_skin = undefined;

  /**
   * Determines current business account contains amount for the application customisation.
   *
   * @get result
   * @type {boolean}
   */
  this.has_pay = undefined;

  /**
   * Whether customization billing is confirmed.
   *
   * <tt>true</tt> to finish delete process even if customization fee will be billed.
   * <tt>false</tt> if customization fee should be required for confirmation.
   *
   * @delete get
   * @type {boolean}
   */
  this.is_billing_confirm = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Name of the link to default application skin.
   *
   * @delete result
   * @get result
   * @type {string}
   */
  this.s_link = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_Application_SkinModel);

/**
 * @inheritDoc
 */
Wl_Skin_Application_SkinModel.prototype.config=function()
{
  return {"a_field": {"a_skin": {"get": {"result": true}},"has_pay": {"get": {"result": true}},"is_billing_confirm": {"delete": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true}},"s_link": {"delete": {"result": true},"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Skin_Application_SkinModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Skin_Application_SkinModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */