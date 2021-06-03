/**
 * API point provides the list of locations for an location select HTML component.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_Select_LocationSelectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,a_config";

  /**
   * Result-defining configuration set.
   *
   * @get get
   * @type {{}}
   */
  this.a_config = [];

  /**
   * Location list with additional parameters for an location select HTML component.
   *
   * @get result
   * @type {{}}
   */
  this.a_select = [];

  /**
   * Business in which a list of locations is requested.
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User who requests a list of locations.
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_Select_LocationSelectModel);

/**
 * @inheritDoc
 */
Wl_Location_Select_LocationSelectModel.prototype.config=function()
{
  return {"a_field": {"a_config": {"get": {"get": true}},"a_select": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Location_Select_LocationSelectModel.instanceGet
 * @param {string} k_business Business in which a list of locations is requested. Primary key in {@link \RsBusinessSql} table.
 * @param {string} uid User who requests a list of locations. Primary key in {@link \PassportLoginSql} table.
 * @param {{}} a_config Result-defining configuration set.
 * @returns {Wl_Location_Select_LocationSelectModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */