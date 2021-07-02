/**
 * Information about business waiver.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Waiver_WaiverModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,text_fullname";

  /**
   * Does the business have a waiver or not?
   *
   * @get result
   * @type {boolean}
   */
  this.has_waiver = undefined;

  /**
   * Text of the current waiver with the substituted variables.
   *
   * @get result
   * @type {string}
   */
  this.html_waiver = undefined;

  /**
   * ID of business to get waiver for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Full username.
   * Used as a variable in a contract.
   * It may be set if user does not exist.
   *
   * @get get
   * @type {string}
   */
  this.text_fullname = "";

  /**
   * User key for which the waiver is shown.
   * Used to fill the variables in the contract
   * Not necessarily if the user does not already exist. In this case, you need to set {@link WaiverApi::$text_fullname}.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Waiver_WaiverModel);

/**
 * @inheritDoc
 */
Wl_Business_Waiver_WaiverModel.prototype.config=function()
{
  return {"a_field": {"has_waiver": {"get": {"result": true}},"html_waiver": {"get": {"result": true}},"k_business": {"get": {"get": true}},"text_fullname": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Waiver_WaiverModel.instanceGet
 * @param {string} k_business ID of business to get waiver for.
 * @param {string} uid User key for which the waiver is shown. Used to fill the variables in the contract Not necessarily if the user does not already exist. In this case, you need to set {@link WaiverApi::$text_fullname}.
 * @param {string} text_fullname Full username. Used as a variable in a contract. It may be set if user does not exist.
 * @returns {Wl_Business_Waiver_WaiverModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */