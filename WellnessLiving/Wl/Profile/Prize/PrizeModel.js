/**
 * Retrieves a list of redeemed prizes.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Prize_PrizeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Array of prize keys redeemed by user.
   *
   * @get result
   * @type {{}}
   */
  this.a_login_prize = undefined;

  /**
   * Key of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Prize_PrizeModel);

/**
 * @inheritDoc
 */
Wl_Profile_Prize_PrizeModel.prototype.config=function()
{
  return {"a_field": {"a_login_prize": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Prize_PrizeModel.instanceGet
 * @param {string} uid Key of a user to show information for.
 * @param {string} k_business Key of current business.
 * @returns {Wl_Profile_Prize_PrizeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */