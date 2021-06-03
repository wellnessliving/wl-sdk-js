/**
 * Point to locations ever visited by user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Location_LoginLocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid";

  /**
   * Keys of locations. Primary keys in {@link \RsLocationSql} table.
   *
   * @get result
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * Key of user to get data for.
   *
   * Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Location_LoginLocationModel);

/**
 * @inheritDoc
 */
Wl_Login_Location_LoginLocationModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Location_LoginLocationModel.instanceGet
 * @param {string} uid Key of user to get data for. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Login_Location_LoginLocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */