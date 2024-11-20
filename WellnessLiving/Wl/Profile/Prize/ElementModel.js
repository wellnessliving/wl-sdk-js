/**
 * Retrieves information about user's prize.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Prize_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_login_prize";

  /**
   * Prize price in wellnessliving points.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * Key of redeemable prize.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_login_prize = "0";

  /**
   * Date of redeem.
   *
   * @get result
   * @type {?string}
   */
  this.s_date = null;

  /**
   * User friendly prize description.
   *
   * @get result
   * @type {string}
   */
  this.s_description = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Prize_ElementModel);

/**
 * @inheritDoc
 */
Wl_Profile_Prize_ElementModel.prototype.config=function()
{
  return {"a_field": {"i_score": {"get": {"result": true}},"k_login_prize": {"get": {"get": true},"post": {"get": true}},"s_date": {"get": {"result": true}},"s_description": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Prize_ElementModel.instanceGet
 * @param {string} k_login_prize Key of redeemable prize.
 * @returns {Wl_Profile_Prize_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */