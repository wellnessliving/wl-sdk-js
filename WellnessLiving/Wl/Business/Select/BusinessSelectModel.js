/**
 * Performs checks and generates a list of businesses according to a given configuration.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Select_BusinessSelectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,a_config";

  /**
   * @typedef {{}} Wl_Business_Select_BusinessSelectModel_a_config
   * @property {boolean} is_role This will be `true` if we are checking for businesses where the user is a staff member. This will be `false` if we are checking for businesses where the user is a client.
   * @property {string} k_business The business key.
   */

  /**
   * Configuration data used to determine the list of businesses returned. This array has the following keys:
   *
   * @get get
   * @type {Wl_Business_Select_BusinessSelectModel_a_config}
   */
  this.a_config = undefined;

  /**
   * @typedef {{}} Wl_Business_Select_BusinessSelectModel_a_select_a_business
   * @property {string} k_business The key of the business.
   * @property {string} s_title The name of the business.
   * @property {boolean} selected This will be true for the current business.
   */

  /**
   * @typedef {{}} Wl_Business_Select_BusinessSelectModel_a_select
   * @property {Wl_Business_Select_BusinessSelectModel_a_select_a_business} a_business List of businesses the user can access. It is an array, each value is an array with the following keys:
   * @property {boolean} is_select This will be `true` if one of the listed businesses is selected.
   * @property {string} name Information for the widget, the name of the key in the list. This should always be `k_business`.
   * @property {string} onchange Information for the widget, what the widget will do on selection.
   * @property {string} s_id Information for the widget, the widget instance ID.
   * @property {string} s_style Information for the widget, any additional CSS to apply.
   */

  /**
   * Business list with additional parameters for a business select HTML component.
   * This array contains the following keys and values.
   *
   * @get result
   * @type {Wl_Business_Select_BusinessSelectModel_a_select}
   */
  this.a_select = undefined;

  /**
   * Business in which a list of business is requested.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User who is requesting the list of businesses.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Select_BusinessSelectModel);

/**
 * @inheritDoc
 */
Wl_Business_Select_BusinessSelectModel.prototype.config=function()
{
  return {"a_field":{"a_config":{"get":{"get":true}},"a_select":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Business_Select_BusinessSelectModel.instanceGet
 * @param {string} k_business Business in which a list of business is requested.
 * @param {string} uid User who is requesting the list of businesses.
 * @param {Wl_Business_Select_BusinessSelectModel_a_config} a_config Configuration data used to determine the list of businesses returned. This array has the following keys:
 * @returns {Wl_Business_Select_BusinessSelectModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Performs checks and generates a list of businesses according to a given configuration.
 *
 * Populates the business-select dropdown widget shown in the backend. Used wherever staff need to
 * switch between businesses they have access to. The returned structure drives the widget directly
 * and includes selection state, visibility flags, and display configuration.
 *
 * @function
 * @name Wl_Business_Select_BusinessSelectModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
