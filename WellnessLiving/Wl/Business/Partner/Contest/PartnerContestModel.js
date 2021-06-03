/**
 * Update contests' fields.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Partner_Contest_PartnerContestModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_partner_contest";

  /**
   * Weather the contest is visible to anyone or not.
   *
   * @post post
   * @type {boolean}
   */
  this.is_remove = undefined;

  /**
   * Weather the contest is visible to the business or not.
   *
   * @post post
   * @type {boolean}
   */
  this.is_visible = undefined;

  /**
   * Contest key.
   *
   * @post get
   * @type {string}
   */
  this.k_partner_contest = undefined;

  /**
   * The message to show in case of an error.
   *
   * @post result
   * @type {string}
   */
  this.s_message = undefined;

  /**
   * Status of the operation.
   *
   * @post result
   * @type {string}
   */
  this.s_status = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Partner_Contest_PartnerContestModel);

/**
 * @inheritDoc
 */
Wl_Business_Partner_Contest_PartnerContestModel.prototype.config=function()
{
  return {"a_field": {"is_remove": {"post": {"post": true}},"is_visible": {"post": {"post": true}},"k_partner_contest": {"post": {"get": true}},"s_message": {"post": {"result": true}},"s_status": {"post": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_Partner_Contest_PartnerContestModel.instanceGet
 * @param {string} k_partner_contest Contest key.
 * @returns {Wl_Business_Partner_Contest_PartnerContestModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */