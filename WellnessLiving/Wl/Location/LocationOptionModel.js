/**
 * API to edit location options.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_LocationOptionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location";

  /**
   * Local date of operation.
   *
   * @post post
   * @type {string}
   */
  this.dl_start = undefined;

  /**
   * Whether location is fee.
   *
   * @post post
   * @type {boolean}
   */
  this.is_customer = undefined;

  /**
   * Key of business. Primary key in {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of location. Primary key in {@link \RsLocationSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_location = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_LocationOptionModel);

/**
 * @inheritDoc
 */
Wl_Location_LocationOptionModel.prototype.config=function()
{
  return {"a_field": {"dl_start": {"post": {"post": true}},"is_customer": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_location": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Location_LocationOptionModel.instanceGet
 * @param {string} k_business Key of business. Primary key in {@link \RsBusinessSql} table.
 * @param {string} k_location Key of location. Primary key in {@link \RsLocationSql} table.
 * @returns {Wl_Location_LocationOptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */