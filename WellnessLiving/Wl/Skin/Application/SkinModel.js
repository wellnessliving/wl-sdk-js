/**
 * Reset customisation form of client application.
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
   * Skin information.
   *
   * @get result
   * @type {*[]}
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
   * `true` to finish delete process even if customization fee will be billed.
   * `false` if customization fee should be required for confirmation.
   *
   * @delete get
   * @type {boolean}
   */
  this.is_billing_confirm = false;

  /**
   * The business key.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.k_business = "";

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
  return {"a_field":{"a_skin":{"get":{"result":true}},"has_pay":{"get":{"result":true}},"is_billing_confirm":{"delete":{"get":true}},"k_business":{"delete":{"get":true},"get":{"get":true}},"s_link":{"delete":{"result":true},"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Skin_Application_SkinModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Skin_Application_SkinModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Reset customisation form of client application.
 *
 * Resets the Achieve app customization skin to default values for the given business.
 * If billing is required for the reset, a confirmation flag must be provided, and a
 * customization fee may be scheduled.
 *
 * @function
 * @name Wl_Skin_Application_SkinModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns the application customisation skin data for the given business.
 *
 * Returns the full set of White Label Achieve app customization settings (colors, logos, fonts,
 * and other branding options) for the given business, along with a flag indicating whether
 * the business account has an active paid customization subscription.
 *
 * @function
 * @name Wl_Skin_Application_SkinModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
