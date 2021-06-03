/**
 * Age restriction check API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Service_AgeRestriction_AgeRestrictionStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,uid";

  /**
   * Whether a client can book class.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book = undefined;

  /**
   * Class period key.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Service_AgeRestriction_AgeRestrictionStatusModel);

/**
 * @inheritDoc
 */
Wl_Service_AgeRestriction_AgeRestrictionStatusModel.prototype.config=function()
{
  return {"a_field": {"can_book": {"get": {"result": true}},"k_class_period": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Service_AgeRestriction_AgeRestrictionStatusModel.instanceGet
 * @param {string} k_class_period Class period key. Empty value means not set.
 * @param {string} uid User key.
 * @returns {Wl_Service_AgeRestriction_AgeRestrictionStatusModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */